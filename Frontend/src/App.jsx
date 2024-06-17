import {useState} from 'react';

import './App.css'
import './stylesheet/scrollbar.css';
import './stylesheet/global.css';

import Navbar from './components/Navbar';
import Background from './components/Background';
import DisplayGames from './components/DisplayGames';
import SearchBar from './components/SearchBar';


function App() {
  let [searchVal,setSearchVal] = useState('');

  return (
    <div>
      <div className = "scroll-smooth overflow-x-hidden">
            <Background />
            <Navbar />
            <SearchBar updateContent = {setSearchVal} />
            <DisplayGames filterContent= {searchVal} />
      </div>
    </div>
  )
}

export default App
