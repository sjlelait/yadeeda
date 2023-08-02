import React from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const NavButtons = (props) =>  {
    const navigate = useNavigate();
    const location = useLocation();
    
    const goBack = () => {
        navigate(-1);
    };
    
    const showGoBackButton = 
        location.pathname === '/songs' ||
        location.pathname === '/song' ||
        location.pathname === '/videos' ||
        location.pathname === '/espadrilles' ||
        location.pathname === '/music' ||
        /^\/song\/\d+$/.test(location.pathname);

    return (
        <div className="absolute top-18 left-0 mt-4 ml-4 p-2 md:ml-8 inline-block">
            {showGoBackButton && (
                <button
                onClick={goBack}
                className="bg-ydBlue hover:bg-ydLightBlue mb-1 hover:text-black text-white font-bold py-2 px-4 rounded shadow-lg text-sm md:text-md"
                >
                Back
                </button>
            )}
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