import './App.css';
import { styled } from 'styled-components';
import MainPage from '../src/pages/MainPage.jsx';
import Header from '../src/components/Header.jsx';
import Nav from '../src/components/Nav.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroductionPage from './pages/IntroductionPage.jsx';
import CompanyPage from './pages/CompanyPage.jsx';

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
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/gallery" element={<MainPage />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </div>
  );
}

export default App;
