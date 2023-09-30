import './App.css';
import MainPage from '../src/pages/MainPage.jsx';
import Header from '../src/components/Header.jsx';
import Nav from '../src/components/Nav.jsx';
import Slider from './components/Slider.jsx';
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Slider />
      <MainPage />
    </div>
  );
}

export default App;
