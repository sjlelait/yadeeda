import React from 'react';

const About = (props) => {
    return (
        <div>
            <h1 className="mb-3 mt-16 text-lg md:text-xl lg:text-3xl font-bold font-homeP text-ydBlue">Yadeeda and Alain Le Lait</h1>
            <div className="flex flex-col md:flex-row">
                <div className="mt-10 md:w-1/2 p-4">
                    <img src='' alt='Alain Le Lait'></img>
                    <p>About Alain</p>
                </div>
                <div className="mt-10 p-4 md:w-1/2 sm:mt-4">
                    <h3 className="font-bold font-homeP text-ydPurple">Top 10 Reasons to use our Songs and Videos</h3>
                    <ul className="text-left">
                        <li className="mb-2 mt-2">1.  One of the best ways to introduce kids to a new language</li>
                        <li className="mb-2">2.  ‘Fun and Enjoyable tunes’ (School Library Journal)</li>
                        <li className="mb-2">3.  Catchy melodies</li>
                        <li className="mb-2">4.  Simple vocabulary</li>
                        <li className="mb-2">5.  Frequent word repetitions</li>
                        <li className="mb-2">6.  Great <a href="/reviews" className="text-ydBlue">reviews</a>!</li>
                        <li className="mb-2">7.  Used in schools worldwide</li>
                        <li className="mb-2">8.  Illustrated <a href="https://www.youtube.com/@tialela99" target="_blank" rel="noopener noreferrer" className="text-ydBlue">videos</a> with lyrics in the featured language + English translation</li>
                        <li className="mb-2">9.  We’ve been recording children’s music since 1990</li>
                        <li className="mb-2">10.  Kids love to sing</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;