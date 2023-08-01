import React from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';


const NavButtons = (props) =>  {  
    return (
        <div className="absolute top-18 left-0 mt-5 ml-4 p-2 md:ml-8 inline-block">
            <p className="hidden md:block">follow & subscribe!</p>
            <div className="flex md:ml-6">
                <a
                    href="https://www.facebook.com/AlainLeLait.Yadeeda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 mr-2 hover:shadow-lg"
                >
                    <FaFacebook className="text-3xl md:text-4xl" />
                </a>
                <a
                    href="https://www.youtube.com/@tialela99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500"
                >
                    <FaYoutube className="text-3xl md:text-4xl hover:shadow-lg" />
                </a>
            </div>
        </div>
    )
    
}

export default NavButtons;