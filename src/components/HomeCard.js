import React from 'react';

const HomeCard = ({ title, image, description, link, bgColor }) => {
  return (
    <div className={`rounded-lg shadow-lg p-4 m-5 ${bgColor} flex flex-col md:flex-no-wrap`} style={{ width: '300px' }}>
      <div className="flex flex-col h-full">
        {image && (
          <img src={image} alt={title} className="w-full h-32 object-cover mb-4 rounded" />
        )}
        <div className="flex flex-col justify-between flex-grow">
          <div>
            {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
            {description && <p>{description}</p>}
          </div>
          {link && (
            <a
              href={link}
              className="bg-orange-500 text-white py-2 mt-5 inline-block rounded"
            >
              Let's Go!
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;