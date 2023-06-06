import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Music from '../pages/Music';
import About from '../pages/About';
import Links from '../pages/Links';
import Contact from '../pages/Contact';
import Reviews from '../pages/Reviews';

function Main(props) {
    return (
        <main className='background'>
            <Routes>
                <Route path='/' element={<Home /> } />
                <Route path='/music' element={<Music />} />
                <Route path='/about' element={<About />} />
                <Route path='/links' element={<Links />} />
                <Route path='/reviews' element={<Reviews />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </main>
    )
}

export default Main;