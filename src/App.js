import './App.css';
import MainPage from '../src/pages/MainPage.jsx';
import Header from '../src/components/Header.jsx';
import Nav from '../src/components/Nav.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroductionPage from './pages/IntroductionPage.jsx';
import { styled } from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
`;

function App() {
  return (
    <div className="App">
      <Router>
        <AppContainer>
          <Header />
          <Nav />
          <MainContent>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/introduction" element={<IntroductionPage />} />
              <Route path="/scrap" element={<IntroductionPage />} />
              <Route path="/gallery" element={<IntroductionPage />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </div>
  );
}

export default App;
