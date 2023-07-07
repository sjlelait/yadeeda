import React from 'react';

const HomeCard = ({ title, image, description, link, video, bgColor }) => {
  const isExternalLink = link && link.startsWith('http');
  
  return (
    <div className={`rounded-lg shadow-lg p-4 m-5 ${bgColor} flex flex-col md:flex-no-wrap items-center justify-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4`} style={{ width: '300px', minHeight: '400px' }}>
      <div className="flex flex-col h-full">        
        <div className="flex flex-col justify-between flex-grow">
          <div>
            {title && <h2 className="text-2xl font-homeP underline mb-4">{title}</h2>}
            {image && (
              <img src={image} alt={title} className="w-full h-32 object-contain mb-1 rounded" />
            )}
            {description && (
              <>
                {title === 'Learn Through Music' ? (
                  <ul className="list-disc list-inside leading-loose text-left mt-6 mb-4 ml-3">
                    {description.split(',').map((item, index) => (
                      <li key={index}>{item.trim()}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{description}</p>
                )}
              </>
            )}
          </div>
          {video && (
            <div className="mt-4">
              <iframe
                title="Embedded Video"
                src={video}
                width="100%"
                height="200"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {link && (
            <a
              href={link}
              target={isExternalLink ? '_blank' : undefined}
              rel={isExternalLink ? 'noopener noreferrer' : undefined}
              className="bg-buttonLight py-2 mt-5 inline-block rounded w-28 mx-auto"
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