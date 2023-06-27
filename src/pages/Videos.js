import React, { useState } from 'react';
import VideoList from '../components/VideoList';
import {videos} from '../MusicData';

const Videos = (props) => {
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);

    const filteredVideos = selectedPlaylist
        ? videos.filter((video) => video.playlist === selectedPlaylist)
        : videos;

    const playlists = [...new Set(videos.map((video) => video.playlist))];

    return (
    <div>
      <h1>Yadeeda Videos</h1>
      <div>
        {playlists.map((playlist, index) => (
          <button
            key={index}
            onClick={() => setSelectedPlaylist(playlist)}
            className={`px-2 py-1 mx-1 rounded ${
              selectedPlaylist === playlist ? 'bg-gray-500 text-white' : 'bg-gray-200'
            }`}
          >
            {playlist}
          </button>
        ))}
      </div>
      <VideoList videos={filteredVideos} />
    </div>
    );
};

export default Videos;