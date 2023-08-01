import React from 'react';
import {espadrilles} from '../MusicData';
import EspadrillesCard from '../components/EspadrillesCard';
import EsCover from '../assets/EspadrillesCover.jpg';
import PurchaseButtons from '../components/PurchaseButtons';
import BackButton from '../components/BackButton';

const Espadrilles = () => {
    return (
        <>
            <div className="min-h-screen bg-white rounded shadow-lg p-4 m-2 mt-20 md:mt-20 md:p-6 md:m-20 md:mb-4" translate="no">
                <div className="items-center justify-center">
                    <h1 className="text-2xl mt-20 mb-8 mt-4 lg:text-3xl font-bold font-homeP text-ydPurple">
                        Music for Grown Ups
                    </h1>
                    <img
                        src={EsCover}
                        alt="Espadrilles Cover"
                        className="w-40 h-auto mx-auto rounded shadow-lg mb-6 md:w-48"
                    />
                    <h2 className="text-xl mt-20 mt-4 lg:text-2xl font-bold font-homeP">Espadrilles</h2>
                    <h5 className="text-gray-700 mb-4">Alain Le Lait © 2009</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {espadrilles.map((song) => (
                        <div key={song.id} className="md:col-span-1">
                        <EspadrillesCard
                            title={song.title}
                            sample={song.sample}
                            video={song.video}
                        />
                        </div>
                    ))}
                    </div>
                </div>
                <p>(coming soon: Grown Up Videos)</p>
                <div className="mt-auto">
                    <PurchaseButtons />
                </div>
            </div>
            <BackButton />
        </>
    );
};

export default Espadrilles;