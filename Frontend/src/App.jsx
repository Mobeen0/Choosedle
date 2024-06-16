import './App.css'
import './stylesheet/global.css';
import Navbar from './components/Navbar';
import Background from './components/Background';
import GameCard from './components/GameCard';
import DisplayGames from './components/DisplayGames';

import testImage from './assets/testImage.jpg';

function App() {

  return (
    <div className = "scroll-smooth">
      <Background />
      <Navbar />
      <DisplayGames />
      
    </div>
  )
}

export default App
