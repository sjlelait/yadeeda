import React from 'react';
import {espadrilles} from '../MusicData';
import EspadrillesCard from '../components/EspadrillesCard';
import EsCover from '../assets/EspadrillesCover.jpg';
import PurchaseButtons from '../components/PurchaseButtons';

const Espadrilles = () => {
    return (
        <div className="items-center justify-center min-h-screen">
            <div className=" items-center justify-center">
                <h1 className="text-xl mt-20 mb-8 md:text-xl lg:text-3xl font-bold underline font-homeP text-ydPurple">
                    Espadrilles Album & Videos for Adults
                </h1>
                <img
                    src={EsCover}
                    alt="Espadrilles Cover"
                    className="w-40 h-auto mx-auto rounded shadow mb-4 md:w-48"
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
            <div className="mt-auto">
                <PurchaseButtons />
            </div>
        </div>
    );
};

export default Espadrilles;