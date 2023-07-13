import React from 'react';
import { Link } from 'react-router-dom';
import {songs} from '../MusicData';
import PurchaseButtons from '../components/PurchaseButtons';

const Songs = () => {
    // Group songs by album
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
            <h1 className="text-xl mt-24 text-2xl lg:mt-16 lg:mb-8 lg:text-3xl font-bold font-homeP underline text-ydPurple">Yadeeda Songs</h1>
            <div className="grid grid-cols-2 gap-4">
            {Object.entries(albums).map(([album, { image, copyright, title, songs }], index) => (
                <div key={index} className="flex flex-col items-center mb-8">
                    {/* Display album image */}
                    <img src={image} alt={title} className="w-32 h-32 object-cover mb-2 rounded" />
                    {/* Display album title */}
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <h3 className="text-md font-semibold mb-2">{copyright}</h3>
                    {/* Display songs from the album */}
                    {songs.map((song) => (
                        <Link to={`/song/${song.id}`} key={song.id} className="text-base mb-1">
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