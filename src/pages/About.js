import React from 'react';
import Alain from '../assets/Alain.png';

const About = (props) => {
    return (
        <div>
            <h1 className="bg-white rounded-lg shadow-lg inline-block p-2 md:p-4 mt-8 md:mt-16 text-2xl lg:text-3xl font-bold font-homeP text-ydPurple">Yadeeda and Alain Le Lait</h1>
            <div className="flex flex-col md:flex-row">
                <div className="p-4 m-2 rounded-lg shadow-lg text-center bg-white md:w-1/2 font-homeP">
                    <div className="flex flex-col items-center justify-center">
                        <img src={Alain} alt="Alain Le Lait" className="h-52 w-auto rounded shadow mt-4" />
                        <p className="mt-4 md:mt-10">Alain Le Lait has been writing and recording children's music since 1990. His songs and videos are in use in classrooms throughout the world as teaching materials for both kids and adults. You'll find these whymsical and catchy tunes in your head for years to come, reminding you of the language and helping you learn.</p>
                    </div>
                </div>
                <div className="p-4 m-2 rounded-lg shadow-lg bg-white md:w-1/2 font-homeP">
                    <h3 className="text-xl font-bold text-ydPurple mb-6 underline lg:text-xl">Top 10 Reasons to use our Songs and Videos</h3>
                    <ul className="text-left">
                        <li className="mb-4 mt-2">1.  One of the best ways to introduce kids to a new language</li>
                        <li className="mb-4">2.  ‘Fun and Enjoyable tunes’ (School Library Journal)</li>
                        <li className="mb-4">3.  Catchy melodies</li>
                        <li className="mb-4">4.  Simple vocabulary</li>
                        <li className="mb-4">5.  Frequent word repetitions</li>
                        <li className="mb-4">6.  Great <a href="/reviews" className="text-ydBlue">reviews</a>!</li>
                        <li className="mb-4">7.  Used in schools worldwide</li>
                        <li className="mb-4">8.  Illustrated <a href="https://www.youtube.com/@tialela99" target="_blank" rel="noopener noreferrer" className="text-ydBlue">videos</a> with lyrics in the featured language + English translation</li>
                        <li className="mb-4">9.  We’ve been recording children’s music since 1990</li>
                        <li className="mb-4">10.  Kids love to sing</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;