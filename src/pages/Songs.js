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
        <div>
            <h1 className="text-2xl mt-24 mb-8 text-2xl md:mt-12 md:text-3xl font-bold font-homeP underline text-ydPurple">Yadeeda Albums</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-y-8">
            {Object.entries(albums).map(([album, { image, copyright, title, songs }], index) => (
                <div key={index} className="flex flex-col items-center mb-8">
                    <h1 className="text-2xl font-semibold mb-2">{title}</h1>
                    <img src={image} alt={title} className="w-32 h-32 object-cover mb-2 rounded" />
                    <h3 className="text-md text-gray-600 mb-6">{copyright}</h3>
                    {songs.map((song) => (
                        <Link to={`/song/${song.id}`} key={song.id} className="text-base hover:text-ydBlue underline mb-1">
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