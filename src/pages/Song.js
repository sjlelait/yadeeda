import React from 'react';
import { songs } from '../MusicData';

const Song = (props) => {
    const song = songs[2];

    return (
        <div style={{ width: '300px', whiteSpace: 'pre-line' }}>
            <h2 className="text-xl font-bold mb-2">{song.titleE}</h2>
            <p>{song.english}</p>
        </div>
    )
}

export default Song;