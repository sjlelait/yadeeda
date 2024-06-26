import React, { useEffect, useState, useCallback } from 'react';
import HomeCard from '../components/HomeCard';
import { videos } from '../MusicData';
import SesameStreet from '../assets/SesameStreet.png';
import Kids from '../assets/kids-img.png';
import Logo from '../assets/YadeedaLogo.png';

const Home = (props) => {
    const filteredVideos = videos.filter(
        (video) => video.category === 'French' || video.category === 'English'
    );
    
    const getRandomVideoIndex = useCallback(() => {
        return Math.floor(Math.random() * filteredVideos.length);
    }, [filteredVideos.length]);
    
    const [videoIndex, setVideoIndex] = useState(getRandomVideoIndex);
    
    useEffect(() => {
        const storedIndex = localStorage.getItem('videoIndex');
        const currentDate = new Date();
        const storedDate = localStorage.getItem('selectedDate');
    
        if (storedIndex !== null && storedDate !== null) {
          const dayDiff = Math.floor(
            (currentDate - new Date(storedDate)) / (1000 * 60 * 60 * 24)
        );
    
        if (dayDiff >= 1) {
            const newIndex = getRandomVideoIndex();
            setVideoIndex(newIndex);
            localStorage.setItem('videoIndex', newIndex);
            localStorage.setItem('selectedDate', currentDate);
        } else {
            setVideoIndex(parseInt(storedIndex));
        }
        } else {
          const newIndex = getRandomVideoIndex();
          setVideoIndex(newIndex);
          localStorage.setItem('videoIndex', newIndex);
          localStorage.setItem('selectedDate', currentDate);
        }
    }, [getRandomVideoIndex, filteredVideos.length]);
    
    const selectedVideo = filteredVideos[videoIndex]?.link || '';
    
    const cardData = [
        {
            title: 'Video of the Day',
            image: null,
            description: 'Click below to visit our YouTube Channel for more!',
            link: 'https://www.youtube.com/@tialela99',
            video: selectedVideo,
            bgColor: 'bg-ydRed',
        },
        {
            title: null,
            image: SesameStreet,
            description:
                "Yadeeda is on Sesame Street! Alain Le Lait's popular song 'Sit Down, Stand Up' can now be heard on episode #4135 (The Bookaneers), the French version 'Assis, Debout' is in episode #4151 (Slimey competes for the Worm Cup).",
            link: 'https://muppet.fandom.com/wiki/Episode_4135',
            bgColor: 'bg-ydYellow',
        },
        {
            title: 'All Song Lyrics Below',
            image: Kids,
            description: 'Lyrics in French and English, Makes learning fun!',
            link: '/songs',
            bgColor: 'bg-ydGreen',
        },
    ];
    
    cardData[0].videoLink = selectedVideo;  
        
    return (
        <div className="flex flex-col items-center bg-white">
            <img src={Logo} alt="Yadeeda Logo" className="w-48 h-auto sm:w-64 md:w-76 lg:w-76" />
            <h1 className="mb-3 text-xl md:text-xl lg:text-3xl font-bold font-homeP text-ydPurple">Fun songs in French & English for all ages</h1>
            <p className="mb-3 text-md md:text-lg lg:text-xl font-homeP text-ydPurple">Music & Videos by Alain Le Lait</p>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {cardData.map((card, index) => (
                        <HomeCard 
                            key={index} 
                            title={card.title} 
                            image={card.image} 
                            description={card.description}
                            link={card.link}
                            video={card.video}
                            bgColor={card.bgColor}
                            
                        />
                    ))}
                </div>
        </div>
    )
}

export default Home;