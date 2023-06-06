import React from 'react';
import { Link } from 'react-router-dom';

const YoutubeButton = (props) =>  {
    return (
        <Link
            to="https://www.youtube.com/@tialela99"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
            Visit our YouTube
        </Link>
    )
    
}

export default YoutubeButton;