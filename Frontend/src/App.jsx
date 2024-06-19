import {useState} from 'react';
import { Route, Routes,useLocation } from 'react-router-dom';

import './App.css'
import './stylesheet/scrollbar.css';
import './stylesheet/global.css';

import Navbar from './components/Navbar';
import Background from './components/Background';
import DisplayGames from './components/DisplayGames';
import SearchBar from './components/SearchBar';
import MainGame from './components/MainGame';
import OtherGames from './components/OtherGames';




function App() {
  let [searchVal,setSearchVal] = useState('');
  const path = useLocation();
  return (
    <div>
      <div className = "scroll-smooth overflow-x-hidden overscroll-container">
            <Background />
            <Navbar />
            <Routes>
              <Route path = "/" element =
                {<>
                <SearchBar updateContent = {setSearchVal} />
                <DisplayGames filterContent= {searchVal} updateContent = {setSearchVal} />
                </>
                } 
               />
                <Route path = "/Vanilla-Wordle" element =
                {
                <MainGame />
                } 
               />
               <Route path = "/:wildcard" element =
                {
                <OtherGames gameName={path.pathname.slice(1)}/>
                } 
               />
            </Routes>
      </div>
    </div>
  )
}

export default App
