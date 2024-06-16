import './App.css'
import './stylesheet/global.css';
import Navbar from './components/Navbar';
import Background from './components/Background';

function App() {

  return (
    <div className = "scroll-smooth">
      <Background />
      <Navbar />
      
    </div>
  )
}

export default App
