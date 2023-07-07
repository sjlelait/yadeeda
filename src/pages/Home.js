import React from 'react';
import HomeCard from '../components/HomeCard';
import { videos } from '../MusicData';
import SesameStreet from '../assets/SesameStreet.png';
import Kids from '../assets/kids-img.png';
import Logo from '../assets/YadeedaLogo.png';

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
            description: 'Click below to visit our YouTube Channel for more!',
            link: 'https://www.youtube.com/@tialela99',
            video: getRandomVideo(),
            bgColor: 'bg-ydRed',
        },
        {
            title: null,
            image: SesameStreet,
            description: 'Yadeeda is on Sesame Street! Alain Le Lait\'s popular song "Sit Down, Stand Up" can now be heard on episode #4135 (The Bookaneers), the French version "Assis, Debout" is in episode #4151 (Slimey competes for the Worm Cup).',
            link: 'https://muppet.fandom.com/wiki/Episode_4135',
            bgColor: 'bg-ydYellow',
        },
        {
            title: 'Teaching Resources',
            image: Kids,
            description: 'Resources for Learning, Links We Like',
            link: '/resources',
            bgColor: 'bg-ydGreen',
        },
    ];
        
    cardData[0].videoLink = getRandomVideo();  
        
    return (
        <div className="flex flex-col items-center">
            <img src={Logo} alt="Yadeeda Logo" className="w-48 h-auto sm:w-64 md:w-76 lg:w-76" />
            <h1 className="mb-3 text-lg md:text-xl lg:text-3xl font-bold font-homeP text-ydPurple">Fun songs in French & English for all ages</h1>
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