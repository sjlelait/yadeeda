import React from 'react';

const Album = ({ album, selectedAlbum, setSelectedAlbum }) => {
  const handleAlbumChange = (event) => {
    const album = event.target.value;
    setSelectedAlbum(album);
  };

  return (
    <div className="flex flex-col items-center mt-2 mb-6">
        <div className="mb-1">
            <h2 className="text-lg font-bold">Album:</h2>
        </div>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
            <select value={selectedAlbum} onChange={handleAlbumChange}>
                <option value="">All Songs</option>
                {album.map((album, index) => (
                <option key={index} value={album}>
                    {album}
                </option>
                ))}
            </select>
        </div>
    </div>
  );
};

export default Album;