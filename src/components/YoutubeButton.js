import React from 'react';
import { Link } from 'react-router-dom';

const YoutubeButton = (props) =>  {
    return (
        <div className="absolute top-12 left-0 mt-5 ml-4">
            <Link
                to="https://www.youtube.com/@tialela99"
                target='_blank'
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
                Visit our YouTube
            </Link>
        </div>
    )
    
}

export default YoutubeButton;