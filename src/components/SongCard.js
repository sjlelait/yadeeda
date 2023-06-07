import React from 'react';

const SongCard = ({ title, image, link }) => {
  return (
    <div className={`rounded-lg shadow-lg p-4 ${bgColor}`} style={{ width: '100px' }}>
      {image && (
        <img src={image} alt={title} className="w-full h-32 object-cover mb-4 rounded" />
      )}
      {link && 
        <a href={link} className="bg-orange-500 text-white px-4 py-2 mt-4 inline-block rounded">
          {title}
        </a>}
    </div>
  );
};

export default SongCard;