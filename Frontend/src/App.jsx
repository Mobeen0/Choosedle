import {useState,useEffect} from 'react';
import { Route, Routes} from 'react-router-dom';

import './App.css'
import './stylesheet/scrollbar.css';
import './stylesheet/global.css';

import Navbar from './components/Navbar';
import Background from './components/Background';
import DisplayGames from './components/DisplayGames';
import SearchBar from './components/SearchBar';
import MainGame from './components/MainGame';
import OtherGames from './components/OtherGames';
import LandingPage from './components/LandingPage';



function App() {
  let [searchVal,setSearchVal] = useState('');
  let [vanillaWord,setVanillaWord] = useState('');
  let [songJSON,setSongJSON] = useState({});
  

  return (
    <div className = "bg-gray-900">
      <div className = "scroll-smooth overflow-x-hidden overscroll-container">
            {/* <Background /> */}
            {/* <Navbar /> */}
            <Routes>
              <Route path = "/" element =
                {<>
                < LandingPage setVanillaFunc={setVanillaWord} setSongFunc={setSongJSON} />
                </>
                } 
               />
                <Route path = "/VanillaWordle" element =
                {
                <MainGame wordPassed = {vanillaWord} setWord = {setVanillaWord}/>
                } 
               />
               <Route path = "/SongsWordle" element =
                {
                <OtherGames gameName = {'Songs Wordle'}
                songJSON = {songJSON} />
                } 
               />
               <Route path = "/TVShowsWordle" element =
                {
                <OtherGames gameName = {'TV-Shows Wordle'}
                wordPassed = {'The TV-Show Name'}/>
                } 
               />
               <Route path = "/MoviesWordle" element =
                {
                <OtherGames gameName = {'Movies Wordle'}
                wordPassed = {'The Movie Name'}/>
                } 
               />
            </Routes>
      </div>
    </div>
  )
}

export default App
