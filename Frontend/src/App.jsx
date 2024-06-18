import {useState} from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css'
import './stylesheet/scrollbar.css';
import './stylesheet/global.css';

import Navbar from './components/Navbar';
import Background from './components/Background';
import DisplayGames from './components/DisplayGames';
import SearchBar from './components/SearchBar';
import MainGame from './components/MainGame';




function App() {
  let [searchVal,setSearchVal] = useState('');

  return (
    <div>
      <div className = "scroll-smooth overflow-x-hidden overscroll-container">
            <Background />
            <Navbar />
            <SearchBar updateContent = {setSearchVal} />
            <Routes>
              <Route path = "/" element =
                {<DisplayGames filterContent= {searchVal} />} 
               />
               <Route path = "/:wildcard" element =
                {<MainGame />} 
               />
            </Routes>
      </div>
    </div>
  )
}

export default App
