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

        {props.wordPassed.map((letter, index) => (
          <div key={index} className={`w-1/12 aspect-square bg-transparent border-black border-2 flex flex-row justify-center items-center
           ${props.wordPassed.length > 5 ? 'text-3xl' : 'text-5xl'} text-black font-black portrait:w-1/6 cursor-pointer`}>
            {currRow ? letter : ''}
          </div>
        ))}

    </div>
  )
}

export default VanillaGameRow