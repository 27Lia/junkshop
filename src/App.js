import './App.css';
import MainPage from '../src/pages/MainPage.jsx';
import Header from '../src/components/Header.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
