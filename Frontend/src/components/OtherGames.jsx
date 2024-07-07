import '../stylesheet/global.css';
import VanillaGameRow from './VanillaGameRow';
import axios from 'axios'

import {useState,useEffect} from 'react';

function OtherGames(props) {
  let wordLength = props.songJSON.data?props.songJSON.data.length:5;

  let [counter,setCounter] = useState(0);
  let [currRow,setCurrRow] = useState(0);
  let [currWord,setCurrWord] = useState(Array(wordLength).fill(''));
  let [backPress,setBackPress]  = useState(0);
  let [mounted,setMounted] = useState(false);

  


  let [currWord1,setCurrWord1] = useState(Array(wordLength).fill(''));
  let [currWord2,setCurrWord2] = useState(Array(wordLength).fill(''));
  let [currWord3,setCurrWord3] = useState(Array(wordLength).fill(''));
  let [currWord4,setCurrWord4] = useState(Array(wordLength).fill(''));
  let [currWord5,setCurrWord5] = useState(Array(wordLength).fill(''));
  let [currWord6,setCurrWord6] = useState(Array(wordLength).fill(''));


  useEffect(()=>{
    console.log(props)
      const getSongWord = async ()=>{
      try{
        const response = await axios.get('http://localhost:5000/SongWord')
        console.log(response.data)
        props.setJSON(response.data)
        props.setWord(response.data.data)

        
      }catch(err){
          console.log('Error Occured')
      }
    }
    getSongWord()
    console.log('it has been done indeed Song')
    setMounted(true);
  },[])


  useEffect(()=>{
    if(mounted){
      setCurrWord(currWord.slice(0,counter),'',...currWord.slice(counter+1));
      setCounter(counter-1);
      if(counter==1){
        setCurrWord(Array(wordLength).fill(''));
      }
    }
  },[backPress]);

  useEffect(()=>{
      if(currRow===0){
        setCurrWord1(currWord);
      }
      if(currRow===1){
        setCurrWord2(currWord);
      }
      if(currRow===2){
        setCurrWord3(currWord);
      }
      if(currRow===3){
        setCurrWord4(currWord);
      }
      if(currRow===4){
        setCurrWord5(currWord);
      }
      if(currRow===5){
        setCurrWord6(currWord);
      }
      console.log(currWord);
  },[currWord,currRow])

  

  
  let handleKeyDown = (event)=>{
    event.preventDefault();
    console.log(currRow);
    if(event.key === 'Enter' && counter>=wordLength && currRow<=5){ // add condition to check for valid word
      setCurrRow(currRow+1);
      setCounter(0);
      setCurrWord(Array(wordLength).fill(''));
    }
    else{
      if(event.key==='Backspace' && counter>0){
        setBackPress(backPress+1);
      }
      else{
        if(counter<wordLength && event.key.length === 1 && (event.key.charCodeAt(0)>=65 && event.key.charCodeAt(0)<=90
        || event.key.charCodeAt(0)>=97 && event.key.charCodeAt(0)<=122)){
          setCurrWord([...currWord.slice(0,counter),event.key,...currWord.slice(counter+1,wordLength+1)]);
          setCounter(counter+1);   
        }
      }
    }
  }

  
  return (
    <div className = "flex flex-col justify-center items-center relative">
      <div className = "text-3xl font-black">
        <span>{props.gameName}</span>
      </div>
        <div className = "flex flex-col rounded-xl mainGame text-center mt-5" tabIndex={0} onKeyDown = {handleKeyDown}
         contentEditable="true" autoFocus style = {{ caretColor: 'transparent' }}>
            <div className = 'text-2xl font-black'>
              <span className = 'text-black'>Tries Left = {6-currRow}</span>
            </div>

            <div className = "otherGameImage aspect-square bg-black self-center mb-3">
              <img src = {`${props.songJSON.imageUrl}`} alt = "Image not found" className = "object-scale-down" />
            </div>

            <VanillaGameRow wordPassed = {currWord1} />
            <VanillaGameRow wordPassed = {currWord2} />
            <VanillaGameRow wordPassed = {currWord3} />
            <VanillaGameRow wordPassed = {currWord4} />
            <VanillaGameRow wordPassed = {currWord5} />
            <VanillaGameRow wordPassed = {currWord6} />

        </div>

    </div>
  )
}

export default OtherGames