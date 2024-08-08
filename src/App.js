import logo from './logo.svg';
import './App.css';
import HeroSection from "./components/HeroSection"
import NavBar from './components/NavBar';
import Prediction from './components/Prediction';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Prediction></Prediction>
    </div>
  );
}

export default App;
