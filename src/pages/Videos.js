import React, { useState } from 'react';
import VideoList from '../components/VideoList';
import { videos } from '../MusicData';
import Playlist from '../components/Playlist';
import BackButton from '../components/BackButton';

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
    <>
      <div className="content bg-white rounded-lg shadow-lg p-4 m-2 mt-28 md:mt-32 md:p-6 md:m-20 md:mb-4" translate="no">
        <h1 className="text-2xl mt-6 mb-4 lg:mb-8 lg:text-3xl font-bold font-homeP text-ydPurple">Yadeeda Videos</h1>
          <Playlist
              playlists={playlists}
              selectedPlaylist={selectedPlaylist}
              setSelectedPlaylist={setSelectedPlaylist}
          />
        <VideoList videos={filteredVideos} />
      </div>
      <BackButton />
    </>
  );
};

export default Videos;