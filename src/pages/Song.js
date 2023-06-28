import React from 'react';
import { useParams } from 'react-router-dom';
import { songs } from '../MusicData';

const Song = () => {
    const { id } = useParams();
    const song = songs.find((song) => song.id === Number(id));


    return (
        <div className="w-full overflow-auto pb-16">
            {song.titleF ? (
            <div className="flex justify-between">
                <div className="w-1/2 pr-4">
                <h1 className="text-xl font-bold">{song.titleF}</h1>
                <p className="text-gray-500">{song.copyright}</p>
                <br />
                <p style={{ whiteSpace: 'pre-line' }}>{song.french}</p>
                </div>
                <div className="w-1/2 pl-4">
                <h1 className="text-xl font-bold">{song.titleE}</h1>
                <p className="text-gray-500">{song.copyright}</p>
                <br />
                {song.english && <p style={{ whiteSpace: 'pre-line' }}>{song.english}</p>}
                </div>
            </div>
            ) : (
            <div className="text-center">
                <h1 className="text-xl font-bold">{song.titleE}</h1>
                <p className="text-gray-500">{song.copyright}</p>
                <br />
                {song.english && <p style={{ whiteSpace: 'pre-line' }}>{song.english}</p>}
            </div>
            )}
        </div>
    );
};

export default Song;