import React  from 'react';
import './App.css';
import 'typeface-comic-neue';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithBackground from './components/AppWithBackground';
import Header from './components/Header';
import Main from './components/Main';
import NavButtons from './components/NavButtons';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <AppWithBackground>
        <Header />
        <NavButtons />
        <div className="main-container pb-16">
          <Main />
        </div>
        <Footer />
      </AppWithBackground>
    </Router>
  );
}

export default App;
