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
                <h2>{song.titleF}</h2>
                <p>{song.copyright}</p>
                <p>{song.french}</p>
                </div>
                <div className="w-1/2 pl-4">
                <h2>{song.titleE}</h2>
                {song.english && <p>{song.english}</p>}
                </div>
            </div>
            ) : (
            <div className="text-center">
                <h2>{song.titleE}</h2>
                <p>{song.copyright}</p>
                {song.english && <p>{song.english}</p>}
            </div>
            )}
        </div>
    );
};

export default Song;