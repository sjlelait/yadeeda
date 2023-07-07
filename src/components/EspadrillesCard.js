import React from 'react';

const EspadrillesCard = ({ title, sample }) => {
  return (
    <div className="text-center rounded-lg shadow-lg w-auto m-2">
      <h2 className="text-md md:text-lg lg:text-xl font-homeP text-ydBlue">{title}</h2>
      <div className="flex flex-col items-center justify-center">
        <audio className="w-32 h-20 mb-4 md:w-52" src={sample} controls={true} autoPlay={false} controlsList="nodownload"/>
      </div>
    </div>
  );
};

export default EspadrillesCard;