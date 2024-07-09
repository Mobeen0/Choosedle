
import {useState,useEffect} from 'react';

import Guess from './Guess';

function MainGame(props) {

  return (
    <div>
      <Guess guess = {'Guess'} isGuessed ={false} word = {props.wordPassed} />
    </div>
  )
}

export default MainGame