import React from 'react';
import { useParams } from 'react-router-dom';
import { songs } from '../MusicData';

const Song = () => {
    const { id } = useParams();
    const song = songs.find((song) => song.id === Number(id));


    return (
        <div className="w-full overflow-auto text-left mt-16 md:p-16">
            <div className="flex flex-col md:flex-row">
                <img src={song.image} alt="Yadeeda Album" className="w-32 h-32 mr-6" />
                {song.titleF ? (
                <div className="mt-10 md:flex md:flex-row md:items-start">
                    <div className="md:w-1/2 pr-4">
                        <h1 className="text-xl font-bold">{song.titleF}</h1>
                        <p className="text-gray-700">(French Lyrics)</p>
                        <p className="text-gray-500">{song.copyright}</p>
                        <br />
                        <p style={{ whiteSpace: 'pre-line' }}>{song.french}</p>
                    </div>
                    <div className="w-1/2 mt-12 md:pl-12 md:mt-0">
                        <h1 className="text-xl font-bold">{song.titleE}</h1>
                        <p className="text-gray-700">(English Lyrics)</p>
                        <p className="text-gray-500">{song.copyright}</p>
                        <br />
                        {song.english && <p style={{ whiteSpace: 'pre-line' }}>{song.english}</p>}
                    </div>
                </div>
                ) : (
                <div className="text-left">
                    <h1 className="text-xl font-bold">{song.titleE}</h1>
                    <p className="text-gray-700">(English Lyrics)</p>
                    <p className="text-gray-500">{song.copyright}</p>
                    <br />
                    {song.english && <p style={{ whiteSpace: 'pre-line' }}>{song.english}</p>}
                </div>
                )}
            </div>
            </div>
    );
};

export default Song;