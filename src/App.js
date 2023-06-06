import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import YoutubeButton from './components/YoutubeButton';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <YoutubeButton />
        <Main />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
