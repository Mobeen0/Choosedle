
import {useState,useEffect} from 'react';
import {observer, useLocalObservable} from 'mobx-react-lite';
import Guess from './Guess';
import ScreenKeyboard from './ScreenKeyboard';
import gameStore from '../config/gameStore';

export default observer(function MainGame(props) {
  const localStore = useLocalObservable(() => gameStore);

  useEffect(()=>{
    localStore.init(props.wordPassed);
    window.addEventListener('keyup',localStore.handleKeyup);

    return ()=>{
      window.removeEventListener('keyup',localStore.handleKeyup);
    }
  },[])
  return (
    <div className = "flex flex-col justify-center items-center mt-28">
      {
        localStore.guesses.map((_,index)=>(
          <Guess
          key = {index}
           guess = {localStore.guesses[index]} isGuessed ={index < localStore.currentGuess} word = {localStore.word} />
        ))
      }
      < ScreenKeyboard store={localStore}/>
    </div>
  )
})