
import { IoPlayCircleSharp } from "react-icons/io5";
import {useRef} from 'react';
import {Link} from 'react-router-dom';


function GameCard(props){

    let anchorRef = useRef(null);

    let hoverState = ()=>{
        anchorRef.current.style.background = `${props.primColor}`;
        anchorRef.current.style.color = `${props.secondColor}`;
    }

    let originalState = ()=>{
        anchorRef.current.style.background = `${props.secondColor}`;
        anchorRef.current.style.color = `${props.primColor}`;
    }

    return(
        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl cursor-pointer mb-3" >
        
            <img className="h-40 object-cover rounded-xl" src={props.toshow} alt="" />
            <div className="p-2">
            
                <h2 className="font-bold text-lg mb-2 "><span className = "text-black">{props.heading}</span></h2>
            
                <span className="text-sm text-black text-justify">{props.description}</span>
            </div>
            
            <div className="m-2">
                <Link role='button' to={`${props.heading}`} className="text-white bg-purple-600 px-3 py-1 rounded-md flex flex-row items-center duration-75"
                 style = {{background:`${props.secondColor}`, color:`${props.primColor}`}} ref = {anchorRef} 
                 onMouseEnter = {hoverState} onMouseLeave = {originalState} onClick = {()=>props.updateContent('')}> 
                    <IoPlayCircleSharp className = "text-3xl" /> 
                    <span>Play</span>
                </Link>
            </div>
        </div>
    )
}

export default GameCard;