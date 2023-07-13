import React from 'react';
import { Link } from 'react-router-dom';
import BigNose from '../assets/BigNose.jpg';
import CestSiBon from '../assets/CestSiBonCover.jpg';
import Espadrilles from '../assets/EspadrillesCover.jpg';
import PurchaseButtons from '../components/PurchaseButtons';

const Music = (props) => {
    return (
        <div>
            <div className="text-xl md:text-3xl font-bold font-homeP text-ydPurple">
                <h1 className="mt-20 md:mt-24">Music & Videos by</h1>
                <p className="mt-2 mb-8 md:mb-10">Alain Le Lait</p>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <p className="mb-8 mt-2">Lyrics to all Songs found under "Songs From Albums" below</p>
                <div className="grid gridMV grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:mt-38 gap-4 md:mt-20 md:gap-x-0">
                    <Link to="/videos" className="flex flex-col items-center mb-4">
                        <img src={BigNose} alt='Videos' className="w-32 h-32 object-cover mb-2 md:w-48 md:h-48 rounded" />
                        <h3 className="text-lg font-semibold">Videos</h3>
                    </Link>
                    <Link to="/songs" className="flex flex-col items-center mb-4">
                        <img src={CestSiBon} alt='Individual Songs' className="w-32 h-32 object-cover mb-2 md:w-48 md:h-48 rounded" />
                        <h3 className="text-lg font-semibold">Songs from Albums</h3>
                    </Link>
                    <Link to="/espadrilles" className="flex flex-col items-center mb-4">
                        <img src={Espadrilles} alt='Espadrilles' className="w-32 h-32 object-cover mb-2 md:w-48 md:h-48 rounded" />
                        <h3 className="text-lg font-semibold">Adult Music</h3>
                    </Link>
                </div>
            </div>            
            <div className="mt-auto">
                <PurchaseButtons />
            </div>
        </div>
    )
}

export default Music;