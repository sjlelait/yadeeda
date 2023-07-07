import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SongCard = ({ titleF, titleE, image, id }) => {
  const title = titleF || titleE;
  const songPath = `/song/${id}`;

  return (
    <Link to={songPath} className="flex flex-col items-center mb-4">
      <img src={image} alt={title} className="w-32 h-32 object-cover mb-2 rounded" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </Link>
  );
};

const SongList = ({ songs }) => {
  const songsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const lastSongIndex = currentPage * songsPerPage;
  const firstSongIndex = lastSongIndex - songsPerPage;
  const currentSongs = songs.slice(firstSongIndex, lastSongIndex);
  const totalPages = Math.ceil(songs.length / songsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentSongs.map((song, index) => (
          <SongCard
            key={index}
            titleF={song.titleF}
            titleE={song.titleE}
            image={song.image}
            id={song.id}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-2 py-1 mx-1 rounded ${
              currentPage === index + 1 ? 'bg-ydBlue text-white' : 'bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SongList;