
import { IoPlayCircleSharp } from "react-icons/io5";
import {useRef,useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import loadingGif from '../assets/ZKZg.gif'
import axios from 'axios';


function GameCard(props){

    let anchorRef = useRef(null);
    let navigate = useNavigate();

    const [loading,setLoading] = useState(false);

    let hoverState = ()=>{
        anchorRef.current.style.background = `${props.primColor}`;
        anchorRef.current.style.color = `${props.secondColor}`;
    }

    let originalState = ()=>{
        anchorRef.current.style.background = `${props.secondColor}`;
        anchorRef.current.style.color = `${props.primColor}`;
    }

    const getVanillaWord = async ()=>{
        try{
            const response = await axios.get('https://choosedle-server.vercel.app/VanillaWord')
            props.setVanillaWord(response.data.data)
        }catch(err){
            console.log('Error Occured')
        }
    }

    const getSongWord = async ()=>{
        try{
            const response2 = await axios.get('https://choosedle-server.vercel.app/SongWord')
            console.log(response2.data);
            props.setSongJSON(response2.data)
        }catch(err){
            console.log('Error Occured')
        }
    }

    

    return(
        <div className={`w-60 p-2 bg-white rounded-xl ${loading? 'relative opacity-50': ''} $
         transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl cursor-pointer mb-3`}>
            {loading && <img src={loadingGif} alt="Loading" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-50" />}
            <img className="h-40 object-cover rounded-xl" src={props.toshow} alt="" />
            <div className="p-2">
            
                <h2 className="font-bold text-lg mb-2 "><span className = "text-black">{props.heading}</span></h2>
                <span className="text-sm text-black text-justify">{props.description}</span>
            </div>
            
            <div className="m-2">
                <Link className="text-white bg-purple-600 px-3 py-1 rounded-md flex flex-row items-center duration-75"
                 style = {{background:`${props.secondColor}`, color:`${props.primColor}`}} ref = {anchorRef} 
                 onMouseEnter = {hoverState} onMouseLeave = {originalState} onClick = {
                    async ()=>{
                        setLoading(true);
                        props.updateContent('');
                        await getSongWord();
                        await getVanillaWord();
                        setLoading(false);
                        navigate(`${props.pathStr}`)
                    }
                    }> 
                    <IoPlayCircleSharp className = "text-3xl" /> 
                    <span>Play</span>
                </Link>
            </div>
        </div>
    )
}

export default GameCard;