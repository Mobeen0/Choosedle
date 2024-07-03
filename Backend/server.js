require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');


const PORT = process.env.PORT

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{console.log('it is what it is')})

let randomWord = '';
let randomSong ='';



const song_ApiKey = process.env.SONG_API_KEY;

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

    randomSong = trackName.replace(/\s*\(feat\..*$/, '').trim();
    //res.json({ song: trackName });
  } catch (error) {
    console.log('Error')
    //res.status(500).json({ error: error.message });
  }
}
wordFunc().then(()=>{
  console.log(randomWord);
});
songFunc().then(()=>{
  console.log(randomSong);
});


app.listen(PORT,()=>{
    console.log('Server is listening')
});