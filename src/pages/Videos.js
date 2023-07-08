import React, { useState } from 'react';
import VideoList from '../components/VideoList';
import { videos } from '../MusicData';
import Playlist from '../components/Playlist';

const Videos = (props) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const filteredVideos = selectedPlaylist
    ? videos.filter((video) => {
        if (Array.isArray(video.playlists)) {
          return video.playlists.some((playlist) => playlist === selectedPlaylist);
        } else {
          return video.playlists === selectedPlaylist;
        }
      })
    : videos;

  const playlists = [...new Set(videos.flatMap((video) => {
    if (Array.isArray(video.playlists)) {
      return video.playlists;
    } else {
      return [video.playlists];
    }
  }))];

  return (
    <div>
      <h1 className="text-xl mt-24 text-2xl lg:mt-16 lg:mb-8 lg:text-3xl font-bold font-homeP underline text-ydPurple">Yadeeda Videos</h1>
        <Playlist
            playlists={playlists}
            selectedPlaylist={selectedPlaylist}
            setSelectedPlaylist={setSelectedPlaylist}
        />
      <VideoList videos={filteredVideos} />
    </div>
  );
};

export default Videos;