import React from 'react';
import {espadrilles} from '../MusicData';
import EspadrillesCard from '../components/EspadrillesCard';
import EsCover from '../assets/EspadrillesCover.jpg';
import PurchaseButtons from '../components/PurchaseButtons';

const Espadrilles = () => {
    return (
        <div className="min-h-screen bg-white rounded shadow-lg p-4 m-2 mt-16 md:mt-20 md:p-6 md:m-20">
            <div className="items-center justify-center">
                <h1 className="text-xl mt-20 mb-8 mt-4 md:text-xl lg:text-3xl font-bold underline font-homeP text-ydPurple">
                    Espadrilles Album & Videos for Adults
                </h1>
                <img
                    src={EsCover}
                    alt="Espadrilles Cover"
                    className="w-40 h-auto mx-auto rounded shadow-lg mb-6 md:w-48"
                />
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
            <p>(coming soon: Adult embedded videos here)</p>
            <div className="mt-auto">
                <PurchaseButtons />
            </div>
        </div>
    );
};

export default Espadrilles;