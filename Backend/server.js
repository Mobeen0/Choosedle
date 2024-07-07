require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const {MongoClient} = require('mongodb');


const PORT = process.env.PORT
const connectionString = process.env.ONLINEDB_URL;

const app = express();

app.use(cors());
app.use(express.json());

// MongoClient.connect(connectionString).then(()=>{
//   console.log('Connected to the database')
// }).catch((error)=>{
//   console.log('an error occured', error)
// })

app.get('/test', (req,res)=>{console.log('it is what it is')
  res.send('It is what it is');
})

let randomWord = '';
let randomSong ='';
let randomSongImUrl = '';




const song_ApiKey = process.env.SONG_API_KEY;
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;




async function getSpotifyToken(clientId, clientSecret) {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const response = await axios.post(tokenUrl, new URLSearchParams({
    grant_type: 'client_credentials'
  }), {
    headers: {
      'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  return response.data.access_token;
}


const getTopTracks = async () => {
  const url = `http://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&api_key=${song_ApiKey}&format=json`;
  const response = await axios.get(url);
  return response.data.tracks.track;
};

let wordFunc = async (req,res)=>{
  try{
    api_response = await axios.get('https://random-word-api.herokuapp.com/word', {
      params: {
        number: 1,
        length: 5
      }
    })
    randomWord = api_response.data[0];
  }
  catch(error){
    console.log('Error here')
  }
}

let songFunc = async (req, res) => {
  try {
    const tracks = await getTopTracks();
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    const trackName = randomTrack.name;
    
    const token = await getSpotifyToken(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET);
    const searchUrl = 'https://api.spotify.com/v1/search';
    const response = await axios.get(searchUrl, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: {
        q: trackName,
        type: 'track',
        limit: 1
      }
    });

    if (response.data.tracks.items.length > 0) {
      const track = response.data.tracks.items[0];
      randomSongImUrl = track.album.images[1].url; // Get the largest image
    } else {
      throw new Error('No tracks found');
    }
    randomSong = trackName.replace(/\s*\(feat\..*$/, '').trim();
    //res.json({ song: trackName });
  } catch (error) {
    console.log('Error')
    //res.status(500).json({ error: error.message });
  }
}



app.get('/VanillaWord', async (req,res)=>{
  const client = new MongoClient(connectionString);
  
  try {
    await client.connect();
    const database = client.db('Choosedle'); 
    const collection = database.collection('vanillaWord'); 

    

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const document = await collection.findOne({ date: currentDate });
    if (document) {
      console.log(`Word for today (${currentDate.toDateString()}) already exists: ${document.word}`);
      res.send({data: document.word});
    } else {
      console.log(`No word stored for today (${currentDate.toDateString()})`);
      await wordFunc();
      const wordName = randomWord.toUpperCase(); 

      const documentInsert = {
        date: currentDate,
        word: wordName
      };

      await collection.insertOne(documentInsert);
      res.send({data: wordName});
    }
  }catch (error){
    console.log('Error occured in vanilla')
  } finally {
    await client.close();
  }
})

app.get('/SongWord', async (req,res)=>{
  const client = new MongoClient(connectionString);
  try {
    await client.connect();

    const database = client.db('Choosedle'); 
    const collection = database.collection('SongWord'); 

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const document = await collection.findOne({ date: currentDate });
    if (document) {
      console.log(`Song for today (${currentDate.toDateString()}) already exists: ${document.word}`);
      res.send({data: document.word, imageUrl: document.imageUrl});
    } else {
      console.log(`No word stored for today (${currentDate.toDateString()})`);
      await songFunc();

      const wordName = randomSong.toUpperCase(); 
      const imageUrl = randomSongImUrl;
      const documentInsert = {
        date: currentDate,
        word: wordName,
        imageUrl: imageUrl
      };

      await collection.insertOne(documentInsert);
      res.send({data: wordName, imageUrl: imageUrl});
    }
  }catch (error){
    console.log('Error occured in song')
  }
   finally {
    await client.close();
  }
})



app.listen(PORT,()=>{
    console.log('Server is listening')
});