import React from 'react';
import SongList from '../components/SongList';
import {songs} from '../MusicData';

const Songs = (props) => {
    return (
    <div>
        <h1>Yadeeda Songs</h1>
        <SongList songs={songs} />
    </div>
    );
};

export default Songs;