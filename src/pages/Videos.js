import React from 'react';
import VideoList from '../components/VideoList';
import {videos} from '../MusicData';

const Videos = (props) => {
    return (
    <div>
        <h1>Yadeeda Videos</h1>
        <VideoList videos={videos} />
    </div>
    );
};

export default Videos;