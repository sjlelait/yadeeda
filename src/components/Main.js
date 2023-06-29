import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Music from '../pages/Music';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Reviews from '../pages/Reviews';
import Songs from '../pages/Songs';
import Song from '../pages/Song';
import Videos from '../pages/Videos';
import Resources from '../pages/Resources';

function Main(props) {
    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={<Home /> } />
                <Route path='/music' element={<Music />} />
                <Route path='/about' element={<About />} />
                <Route path='/resources' element={<Resources />} />
                <Route path='/reviews' element={<Reviews />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/songs' element={<Songs />} />
                <Route path='/song/:id' element={<Song />} />
                <Route path='/videos' element={<Videos />} />
            </Routes>
        </main>
    )
}

export default Main;