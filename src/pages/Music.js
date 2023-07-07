import React from 'react';
import { Link } from 'react-router-dom';
import SongsFromVideosCover from '../assets/SongsFromVideosCover.jpg';
import BigNose from '../assets/BigNose.jpg';
import CestSiBon from '../assets/CestSiBonCover.jpg';
import Espadrilles from '../assets/EspadrillesCover.jpg';

const Music = (props) => {
    return (
        <div>
            <h1 className="text-xl mt-24 md:text-xl lg:text-3xl font-bold font-homeP text-ydPurple">Music & Videos by</h1>
            <p className="text-xl mt-2 mb-10 md:text-xl lg:text-3xl font-bold font-homeP text-ydPurple">Alain Le Lait</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:mt-38 gap-4 md:mt-20 md:gap-x-0">
                <Link to="/videos" className="flex flex-col items-center mb-4">
                    <img src={BigNose} alt='Videos' className="w-32 h-32 object-cover mb-2 md:w-48 md:h-48 rounded" />
                    <h3 className="text-lg font-semibold">Videos</h3>
                </Link>
                <Link to="/songs" className="flex flex-col items-center mb-4">
                    <img src={CestSiBon} alt='Individual Songs' className="w-32 h-32 object-cover mb-2 md:w-48 md:h-48 rounded" />
                    <h3 className="text-lg font-semibold">Music (Kids/Teaching)</h3>
                </Link>
                <Link to="" className="flex flex-col items-center mb-4">
                    <img src={SongsFromVideosCover} alt='Songs From Videos' className="w-32 h-32 object-cover mb-2 md:w-48 md:h-48 rounded" />
                    <h3 className="text-lg font-semibold">Songs From Videos</h3>
                </Link>
                <Link to="/espadrilles" className="flex flex-col items-center mb-4">
                    <img src={Espadrilles} alt='Espadrilles' className="w-32 h-32 object-cover mb-2 md:w-48 md:h-48 rounded" />
                    <h3 className="text-lg font-semibold">Adult Music</h3>
                </Link>
            </div>
        </div>
    )
}

export default Music;