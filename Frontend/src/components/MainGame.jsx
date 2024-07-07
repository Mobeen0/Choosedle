import '../stylesheet/global.css';
import VanillaGameRow from './VanillaGameRow';

import {useState,useEffect} from 'react';

function MainGame(props) {
  let [counter,setCounter] = useState(0);
  let [currRow,setCurrRow] = useState(0);
  let [currWord,setCurrWord] = useState(Array(5).fill(''));
  let [backPress,setBackPress]  = useState(0);
  let [mounted,setMounted] = useState(false);


  let [currWord1,setCurrWord1] = useState(Array(5).fill(''));
  let [currWord2,setCurrWord2] = useState(Array(5).fill(''));
  let [currWord3,setCurrWord3] = useState(Array(5).fill(''));
  let [currWord4,setCurrWord4] = useState(Array(5).fill(''));
  let [currWord5,setCurrWord5] = useState(Array(5).fill(''));
  let [currWord6,setCurrWord6] = useState(Array(5).fill(''));




  useEffect(()=>{
    setMounted(true);
  },[])
  

  useEffect(()=>{
    if(mounted){
      setCurrWord(currWord.slice(0,counter),' ',currWord.slice(counter+1));
      setCounter(counter-1);
      if(counter==1){
        setCurrWord(Array(5).fill(''));
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
  },[currWord,currRow])

  

  
  let handleKeyDown = (event)=>{
    event.preventDefault();
    if(event.key === 'Enter' && counter>=5 && currRow<=5){ // add condition to check for valid word
      if(currWord.join('') === props.wordPassed){
        console.log('Correct Word');
      }
      console.log(currWord.join(''))
      setCurrRow(currRow+1);
      setCounter(0);
      setCurrWord(Array(5).fill(''));
    }
    else{
      if(event.key==='Backspace' && counter>0){
        setBackPress(backPress+1);
      }
      else{
        if(counter<5 && event.key.length === 1 && (event.key.charCodeAt(0)>=65 && event.key.charCodeAt(0)<=90
        || event.key.charCodeAt(0)>=97 && event.key.charCodeAt(0)<=122)){
          
          if((event.key.charCodeAt(0)>=97 && event.key.charCodeAt(0)<=122)){
            setCurrWord([...currWord.slice(0,counter),event.key.toUpperCase(),...currWord.slice(counter+1,6)]);
          }
          else{
            setCurrWord([...currWord.slice(0,counter),event.key,...currWord.slice(counter+1,6)]);
          }
          setCounter(counter+1);
        }
      }
    }
  }
  
  return (
    <div className = "flex flex-col justify-center items-center relative">
      <div className = "text-3xl font-black">
        <span>Vanilla Wordle</span>
      </div>
        <div className = "flex flex-col rounded-xl mainGame text-center mt-5 opacity-75" tabIndex={0} onKeyDown = {handleKeyDown}
         contentEditable="true" autoFocus style = {{ caretColor: 'transparent' }}>
            <div className = 'text-2xl font-black'>
              <span className = 'text-black'>Tries Left = {6-currRow}</span>
            </div>
            <span></span>
            <VanillaGameRow wordPassed = {currWord1} actualWord= {props.wordPassed} key = {'row'+1} />
            <VanillaGameRow wordPassed = {currWord2} actualWord= {props.wordPassed} key = {'row'+2} />
            <VanillaGameRow wordPassed = {currWord3} actualWord= {props.wordPassed} key = {'row'+3} />
            <VanillaGameRow wordPassed = {currWord4} actualWord= {props.wordPassed} key = {'row'+4} />
            <VanillaGameRow wordPassed = {currWord5} actualWord= {props.wordPassed} key = {'row'+5} />
            <VanillaGameRow wordPassed = {currWord6} actualWord= {props.wordPassed} key = {'row'+6} />

        </div>
    </div>
  )
}

export default MainGame