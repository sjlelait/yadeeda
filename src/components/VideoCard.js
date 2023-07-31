import React from 'react';

const VideoCard = ({ title, link, regularLink, copyright }) => {
return (
    <div className="max-w-4xl w-full mx-auto mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                    title={title}
                    src={link}
                    className="w-full h-full"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold" translate="no">
                    <a href={regularLink} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p className="text-gray-600">{copyright}</p>
            </div>
        </div>
    </div>
    );
  };

export default VideoCard;