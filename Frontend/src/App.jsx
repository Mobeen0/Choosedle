import './App.css'
import './stylesheet/scrollbar.css';
import './stylesheet/global.css';
import Navbar from './components/Navbar';
import Background from './components/Background';
import DisplayGames from './components/DisplayGames';

import {Scrollbar} from 'smooth-scrollbar-react';


function App() {

  return (
    <div>
      <div className = "scroll-smooth overflow-x-hidden">
            <Background />
            <Navbar />
            <DisplayGames />
      </div>
    </div>
  )
}

export default App
