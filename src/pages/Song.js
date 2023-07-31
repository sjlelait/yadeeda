import React from 'react';
import { useParams } from 'react-router-dom';
import { songs } from '../MusicData';
import PurchaseButtons from '../components/PurchaseButtons';

const Song = () => {
    const { id } = useParams();
    const song = songs.find((song) => song.id === Number(id));


    return (
        <div className="w-full overflow-auto text-center mt-16 md:text-left md:p-16 mt-24" translate="no">
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg md:p-4">
                <img src={song.image} alt="Yadeeda Album" className="w-32 h-32 mt-12 ml-12 rounded shadow-lg md:m-6" />
                {song.titleF ? (
                <div className="mt-10 md:flex md:flex-row md:items-start">
                    <div className="md:w-1/2 pr-4 md:pl-6">
                        <h1 className="text-xl font-bold pb-4">{song.titleF}</h1>
                        <p className="text-gray-700">(French Lyrics)</p>
                        <p className="text-gray-500">{song.copyright}</p>
                        <br />
                        <p style={{ whiteSpace: "pre-line" }}>{song.french}</p>
                    </div>
                    <div className="mt-12 pb-6 md:w-1/2 md:pl-10 md:mt-0">
                        <h1 className="text-xl font-bold pb-4">{song.titleE}</h1>
                        <p className="text-gray-700">(English Lyrics)</p>
                        <p className="text-gray-500">{song.copyright}</p>
                        <br />
                        {song.english && <p style={{ whiteSpace: "pre-line" }}>{song.english}</p>}
                    </div>
                </div>
                ) : (
                <div className="pb-6 md:ml-24 md:mt-8">
                    <h1 className="text-xl font-bold pt-6 pb-4 lg:w-full">{song.titleE}</h1>
                    <p className="text-gray-700">(English Lyrics)</p>
                    <p className="text-gray-500">{song.copyright}</p>
                    <br />
                    {song.english && <p style={{ whiteSpace: 'pre-line' }}>{song.english}</p>}
                </div>
                )}            
            </div>
            <div className="mt-auto">
                <PurchaseButtons />
            </div>
        </div>
    );
};

export default Song;