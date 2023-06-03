import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Music from './pages/Music';
import About from './pages/About';
import Links from './pages/Links';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/music' element={<Music />} />
          <Route path='/about' element={<About />} />
          <Route path='/links' element={<Links />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
