import {useEffect,useState} from 'react';


function VanillaGameRow(props) {

    let [currRow,setCurrRow] = useState(false);

    useEffect(()=>{
      if(props.wordPassed!==undefined){
        setCurrRow(true);
      }
    },[])


  return (
    <div className = "flex flex-row justify-center items-center gap-0.5 p-1">
        <div className = "w-1/12 aspect-square bg-transparent border-black border-2 flex flex-row justify-center items-center text-5xl text-black font-black portrait:w-1/6 cursor-pointer">
          {currRow?props.wordPassed[0]:''}
        </div>

        <div className = "w-1/12 aspect-square bg-transparent border-black border-2 flex flex-row justify-center items-center text-5xl text-black font-black portrait:w-1/6 cursor-pointer">
          {currRow?props.wordPassed[1]:''}
        </div>

        <div className = "w-1/12 aspect-square bg-transparent border-black border-2 flex flex-row justify-center items-center text-5xl text-black font-black portrait:w-1/6 cursor-pointer">
          {currRow?props.wordPassed[2]:''}
        </div>

        <div className = "w-1/12 aspect-square bg-transparent border-black border-2 flex flex-row justify-center items-center text-5xl text-black font-black portrait:w-1/6 cursor-pointer">
          {currRow?props.wordPassed[3]:''}
        </div>

        <div className = "w-1/12 aspect-square bg-transparent border-black border-2 flex flex-row justify-center items-center text-5xl text-black font-black portrait:w-1/6 cursor-pointer">
          {currRow?props.wordPassed[4]:''}
        </div>
    </div>
  )
}

export default VanillaGameRow