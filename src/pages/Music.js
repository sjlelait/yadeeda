import React from 'react';
import { Link } from 'react-router-dom';
import BigNose from '../assets/BigNose.jpg';
import CestSiBon from '../assets/CestSiBonCover.jpg';
import Espadrilles from '../assets/EspadrillesCover.jpg';
import PurchaseButtons from '../components/PurchaseButtons';
import BackButton from '../components/BackButton';

const Music = (props) => {
    return (
        <>
            <div className="content bg-white rounded-lg shadow-lg md:m-30 md:mr-26 md:ml-26">
                <div className="text-2xl md:text-3xl font-bold font-homeP text-ydPurple">
                    <h1 className="mt-20 md:mt-24 pt-6">Music & Videos by</h1>
                    <p className="mt-2 mb-8 md:mb-10">Alain Le Lait</p>
                </div>
                <div className="overflow-hidden">
                    <p className="mb-8 mt-2">* Lyrics to all Songs found under "Songs From Albums" below</p>
                    <div className="grid gridMV grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:mt-38 gap-4 md:mt-20 md:gap-x-0">
                        <Link to="/videos" className="flex flex-col items-center mb-4">
                            <img src={BigNose} alt='Videos' className="w-32 h-32 object-cover mb-2 md:w-48 md:h-48 rounded shadow-xl" />
                            <h3 className="text-xl pt-2 font-semibold">Videos</h3>
                        </Link>
                        <Link to="/songs" className="flex flex-col items-center mb-4">
                            <img src={CestSiBon} alt='Individual Songs' className="w-32 h-32 object-cover mb-2 md:w-48 md:h-48 rounded shadow-xl" />
                            <h3 className="text-xl pt-2 font-semibold">Songs from Albums</h3>
                        </Link>
                        <Link to="/espadrilles" className="flex flex-col items-center mb-4">
                            <img src={Espadrilles} alt='Espadrilles' className="w-32 h-32 object-cover mb-2 md:w-48 md:h-48 rounded shadow-xl" />
                            <h3 className="text-xl pt-2 font-semibold">Music for Grown Ups</h3>
                        </Link>
                    </div>
                </div>            
                <div className="mt-auto">
                    <PurchaseButtons />
                </div>
            </div>
            <BackButton />
        </>
    )
}

export default Music;