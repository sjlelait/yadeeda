import React from 'react';
import Alain from '../assets/Alain.png';
import PurchaseButtons from '../components/PurchaseButtons';

const About = (props) => {
    return (
        <div>
            <h1 className="bg-white rounded-lg shadow-lg inline-block p-2 md:p-4 mt-8 md:mt-16 text-2xl lg:text-3xl font-bold font-homeP underline text-ydPurple">About Yadeeda</h1>
            <div className="flex flex-col md:flex-row">
                <div className="p-4 m-2 rounded-lg shadow-lg text-center bg-white md:w-1/2 font-homeP">
                    <div className="flex flex-col items-center justify-center">
                        <img src={Alain} alt="Alain Le Lait" className="h-52 w-auto rounded-lg shadow-lg m-4" />
                        <p className="mb-2">Alain Le Lait, a native French speaker, started Yadeeda (originally Pollyglot) in 1990 to help children learn the French Language.</p>
                        <p className="mb-2">The first release was "Far Away Across the Ocean" (long out of print, and only available on casette, consider yourself lucky if you have a copy), followed by "Soyons Amis" in 1999, "Seamos Amigos" (Spanish) in 2002, "C'est Si Bon" in 2002, "It's So Good" in 2003, "Parapluie" in 2008, "Zoey and the Yok Yok Man" in 2009 and finally "Songs From Videos" in 2021.</p>
                        <p className="mb-2">In 2011, Alain started animating his songs and the videos can be found here on <a href="https://www.youtube.com/@tialela99" target="_blank" rel="noopener noreferrer" className="text-ydBlue underline text-lg hover:text-ydLightBlue">YouTube</a>.</p>
                    </div>
                </div>
                <div className="p-4 m-2 rounded-lg shadow-lg bg-white md:w-1/2 font-homeP">
                    <h3 className="text-xl font-bold text-ydPurple mb-6 lg:text-xl">Top 10 Reasons to Use Our Songs and Videos</h3>
                    <ul className="text-left">
                        <li className="mb-4 mt-2">1.  One of the best ways to introduce kids to a new language</li>
                        <li className="mb-4">2.  ‘Fun and Enjoyable tunes’ (School Library Journal)</li>
                        <li className="mb-4">3.  Catchy melodies</li>
                        <li className="mb-4">4.  Simple vocabulary</li>
                        <li className="mb-4">5.  Frequent word repetitions</li>
                        <li className="mb-4">6.  Great <a href="/reviews" className="text-ydBlue underline hover:text-ydLightBlue">reviews</a>!</li>
                        <li className="mb-4">7.  Used in schools worldwide</li>
                        <li className="mb-4">8.  Illustrated <a href="https://www.youtube.com/@tialela99" target="_blank" rel="noopener noreferrer" className="text-ydBlue underline hover:text-ydLightBlue">videos</a> with lyrics in the featured language + English translation</li>
                        <li className="mb-4">9.  We’ve been recording children’s music since 1990</li>
                        <li className="mb-4">10.  Kids love to sing</li>
                    </ul>
                </div>
            </div>
            <div className="mt-auto">
                <PurchaseButtons />
            </div>
        </div>
    )
}

export default About;