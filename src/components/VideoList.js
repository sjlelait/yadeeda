import React, { useState } from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos }) => {
    const videosPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const lastVideoIndex = currentPage * videosPerPage;
    const firstVideoIndex = lastVideoIndex - videosPerPage;
    const currentVideos = videos.slice(firstVideoIndex, lastVideoIndex);
    const totalPages = Math.ceil(videos.length / videosPerPage);
    
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8">
          {currentVideos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              link={video.link}
              regularLink={video.regularLink}
              copyright={video.copyright}
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

export default VideoList;