import React from 'react';
import { Link } from 'react-router-dom';
import {songs} from '../MusicData';
import PurchaseButtons from '../components/PurchaseButtons';

const Songs = () => {
    const albums = songs.reduce((acc, song) => {
        const { album, image, copyright } = song;
        if (!acc[album]) {
            acc[album] = { image, copyright, title: album, songs: [] };
        }
        acc[album].songs.push(song);
        return acc;
    }, {});
  
    return (
        <div className="content bg-white rounded-lg shadow-lg pb-6 m-4 md:m-20">
            <h1 className="text-2xl mb-2 mt-24 text-2xl md:mt-2 pt-6 md:text-3xl font-bold font-homeP underline text-ydPurple">Yadeeda Albums</h1>
            <p className="text-lg mb-8 mt-4">Click on each song to see the lyrics!</p>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3">
            {Object.entries(albums).map(([album, { image, copyright, title, songs }], index) => (
                <div key={index} className="flex flex-col items-center mb-8 overflow-hidden border shadow-lg m-4">
                    <h1 className="text-2xl font-semibold mb-2 mt-2">{title}</h1>
                    <img src={image} alt={title} className="w-32 h-32 object-cover mb-2 rounded shadow-lg" />
                    <h3 className="text-md text-gray-600 mb-6">{copyright}</h3>
                    {songs.map((song) => (
                        <Link to={`/song/${song.id}`} key={song.id} className="text-base hover:text-ydBlue underline mb-3">
                        {song.titleF || song.titleE}
                        </Link>
                    ))}
                </div>
            ))}
            </div>
            <div className="mt-auto">
                <PurchaseButtons />
            </div>
        </div>
    );
  };
  
export default Songs;