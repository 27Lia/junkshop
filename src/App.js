import './App.css';
import MainPage from '../src/pages/MainPage.jsx';
import Header from '../src/components/Header.jsx';
import Nav from '../src/components/Nav.jsx';
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <MainPage />
    </div>
  );
}

export default App;
