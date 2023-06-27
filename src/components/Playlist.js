import React from 'react';

const Playlist = ({ playlists, selectedPlaylist, setSelectedPlaylist }) => {
  const handlePlaylistChange = (event) => {
    const playlist = event.target.value;
    setSelectedPlaylist(playlist);
  };

  return (
    <div className="flex flex-col items-center mt-2 mb-5">
        <div className="mb-1">
            <h2 className="text-lg font-bold">Playlists:</h2>
        </div>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
            <select value={selectedPlaylist} onChange={handlePlaylistChange}>
                <option value="">All Videos</option>
                {playlists.map((playlist, index) => (
                <option key={index} value={playlist}>
                    {playlist}
                </option>
                ))}
            </select>
        </div>
    </div>
  );
};

export default Playlist;