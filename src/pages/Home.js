import React from 'react';
import Card from '../components/HomeCard';

const Home = (props) => {
    const cardData = [
        {
          title: '10 Reasons to use our songs',
          image: null,
          description: '1. one of the best ways to introduce a new language',
          link: 'https://example.com/card1',
          bgColor: 'bg-red-500',
        },
        {
          title: 'Video of the Day',
          image: null,
          description: 'Random Video Pulled from Youtube, embedded ',
          link: 'https://www.youtube.com/@tialela99',
          bgColor: 'bg-yellow-500',
        },
        {
          title: 'Sesame Street',
          image: null,
          description: 'Yadeeda is on Sesame Street! Alain Le Lait\'s popular song "Sit Down, Stand Up" can now be heard on episode #4135 (The Bookaneers), the French version "Assis, Debout" is in episode #4151 (Slimey competes for the Worm Cup).',
          link: 'https://example.com/card1',
          bgColor: 'bg-green-500',
        },
      ];

    return (
        <div className="flex">
            {cardData.map((card, index) => (
                <Card 
                    key={index} 
                    title={card.title} 
                    image={card.image} 
                    description={card.description}
                    link={card.link}
                    bgColor={card.bgColor}
                />
            ))}
        </div>
    )
}

export default Home;