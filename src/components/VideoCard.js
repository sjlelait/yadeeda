import React from 'react';

const VideoCard = ({ title, link, copyright }) => {
  const videoId = extractVideoId(link);

  return (
    <div className="max-w-4xl w-full mx-auto mb-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title={title}
            src={`https://www.youtube.com/embed/${videoId}`}
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-600">{copyright}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;