import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import NavButtons from './components/NavButtons';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavButtons />
        <div className="main-container pb-16">
          <Main />
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
