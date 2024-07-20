import React from 'react';
import {useRef,useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import loadingGif from '../assets/ZKZg.gif'
import axios from 'axios';
import gameInfo from '../config/gamesInfo';

const GameCard = ({ title, description, imageUrl, pathStr, setVanillaWord, setSongJSON }) => {

    let anchorRef = useRef(null);
    let navigate = useNavigate();

    const [loading,setLoading] = useState(false);


    const getVanillaWord = async ()=>{
        try{
            const response = await axios.get('https://choosedle-server.vercel.app/VanillaWord')
            setVanillaWord(response.data.data)
        }catch(err){
            console.log('Error Occured')
        }
    }

    const getSongWord = async ()=>{
        try{
            const response2 = await axios.get('https://choosedle-server.vercel.app/SongWord')
            console.log(response2.data);
            setSongJSON(response2.data)
        }catch(err){
            console.log('Error Occured')
        }
    }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2 text-white">{title}</h2>
        <p className="mb-4 text-gray-300">{description}</p>
        <Link 
          className="inline-block bg-gray-700 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
          ref = {anchorRef} onClick = {
            async ()=>{
                setLoading(true);
                await getSongWord();
                await getVanillaWord();
                setLoading(false);
                navigate(`${pathStr}`)
            }
        }
        >
          Play Now
        </Link>
      </div>
    </div>
  );
};

const LandingPage = ({setVanillaFunc, setSongFunc}) => {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-16 ">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-blue-400">Choosedle</h1>
          <p className="text-xl text-gray-400">Explore a universe of word puzzles</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {gameInfo.map((game, index) => (
            <GameCard 
              key={index}
              title={game.heading} 
              description={game.description} 
              imageUrl={game.toshow}
              pathStr = {game.pathStr}
              setVanillaWord = {setVanillaFunc}
              setSongJSON = {setSongFunc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;