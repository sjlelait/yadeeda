import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos }) => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            link={video.link}
            regularLink={video.regularLink}
            copyright={video.copyright}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoList;