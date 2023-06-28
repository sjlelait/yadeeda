import React from 'react';
import HomeCard from '../components/HomeCard';
import { videos } from '../MusicData';
import SesameStreet from '../assets/SesameStreet.png';

const Home = (props) => {
    const filteredVideos = videos.filter(
        (video) => video.category === 'French' || video.category === 'English'
    );

    const getRandomVideo = () => {
        const randomIndex = Math.floor(Math.random() * filteredVideos.length);
        return filteredVideos[randomIndex]?.link || '';
      };
    
      
    const cardData = [
        {
            title: 'Video of the Day',
            image: null,
            description: null,
            link: 'https://www.youtube.com/@tialela99',
            video: getRandomVideo(),
            bgColor: 'bg-red-500',
        },
        {
            title: 'Sesame Street',
            image: SesameStreet,
            description: 'Yadeeda is on Sesame Street! Alain Le Lait\'s popular song "Sit Down, Stand Up" can now be heard on episode #4135 (The Bookaneers), the French version "Assis, Debout" is in episode #4151 (Slimey competes for the Worm Cup).',
            link: 'https://muppet.fandom.com/wiki/Episode_4135',
            bgColor: 'bg-yellow-500',
        },
        {
            title: '10 Reasons to use our songs',
            image: null,
            description: '1. one of the best ways to introduce a new language',
            link: '/resources',
            bgColor: 'bg-green-500',
        },
    ];
        
    cardData[0].videoLink = getRandomVideo();  
        
    return (
        <div className="flex flex-col md:flex-row items-center">
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
    )
}

export default Home;