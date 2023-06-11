import React from 'react';
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
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {songs.map((song, index) => (
        <SongCard
          key={index}
          titleF={song.titleF}
          titleE={song.titleE}
          image={song.image}
          id={song.id}
        />
      ))}
    </div>
  );
};

export default SongList;