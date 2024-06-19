import '../stylesheet/global.css';
import VanillaGameRow from './VanillaGameRow';

import {useState,useEffect} from 'react';

function MainGame(props) {
  let [counter,setCounter] = useState(0);
  let [currRow,setCurrRow] = useState(0);
  let [keyPressed,setKeyPressed] = useState('');
  let [currWord,setCurrWord] = useState(Array(5).fill(''))
  let [mounted,setMounted]  = useState(false);
  let [rowArr,setRowArr] = useState(Array(6).fill());


  useEffect(()=>{
    setMounted(true)
  },[])

  useEffect(()=>{
    if(mounted===true){
      handleKeyDown({key:keyPressed})
    }
  },[mounted,keyPressed])
  
  let handleKeyDown = (event)=>{
    console.log('We Entered')
    console.log(currRow);
    if(event.key === 'Enter' && counter>=5){
      setCurrRow(currRow+1);
      setCounter(0);
    }
    else{
      if(event.key==='Backspace' && counter>=0){
        setCurrWord([...currWord.slice(0,counter),'',...currWord.slice(counter+1,6)]);
        setCounter(counter-1);
      }
      else{
        if(counter<=5 && event.key.length === 1 && (event.key.charCodeAt(0)>=65 && event.key.charCodeAt(0)<=90
        || event.key.charCodeAt(0)>=97 && event.key.charCodeAt(0)<=122)){
          setCurrWord([...currWord.slice(0,counter),event.key,...currWord.slice(counter+1,6)]);
          setCounter(counter+1);
          console.log(`Counter = ${counter} and row = ${currRow} and key = ${keyPressed}`);
          console.log(currWord);
        }
      }
    }
  }
  let totalTries = 6;

  

  
  return (
    <div className = "flex flex-col justify-center items-center relative">
      <div className = "text-3xl font-black">
        <span>Vanilla Worlde</span>
      </div>
        <div className = "flex flex-col rounded-xl mainGame text-center mt-5 opacity-75" tabIndex={0} onKeyDown = {(event)=>{
          event.preventDefault();setKeyPressed(event.key)}} autoFocus>
            <div className = 'text-2xl font-black'>
              <span className = 'text-black'>Tries Left = {6-currRow}</span>
            </div>

            {
              Array(totalTries).fill().slice(currRow,totalTries).map((_,index)=>{
                if(index === currRow){
                  return (<VanillaGameRow wordPassed = {currWord} />)
                }
                else{
                  return (<VanillaGameRow />)
                }
              }
              )
            }

        </div>

    </div>
  )
}

export default MainGame