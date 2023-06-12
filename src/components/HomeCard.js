import React from 'react';

const HomeCard = ({ title, image, description, link, bgColor }) => {
  return (
    <div className={`rounded-lg shadow-lg p-4 ${bgColor}`} style={{ width: '300px' }}>
      {image && (
        <img src={image} alt={title} className="w-full h-32 object-cover mb-4 rounded" />
      )}
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {description && <p>{description}</p>}
      {link && 
        <a href={link} className="bg-orange-500 text-white px-4 py-2 mt-4 inline-block rounded">
          Let's Go!
        </a>}
    </div>
  );
};

export default HomeCard;