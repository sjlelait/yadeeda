import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaFacebook, FaYoutube } from 'react-icons/fa';


const NavButtons = (props) =>  {
    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => {
        navigate(-1);
    };

    const showGoBackButton =
        location.pathname === '/videos' ||
        location.pathname === '/songs' ||
        /^\/song\/\d+$/.test(location.pathname);

    return (
        <div className="absolute top-18 left-0 mt-5 ml-4">          
            {showGoBackButton && (
                <button
                onClick={goBack}
                className="bg-ydBlue hover:bg-ydLightBlue text-white font-bold py-2 px-4 rounded"
                >
                Back
                </button>
            )}
            <div className="flex mt-2">
                <a
                    href="https://www.facebook.com/AlainLeLait.Yadeeda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 mr-2"
                >
                    <FaFacebook size={32} />
                </a>
                <a
                    href="https://www.youtube.com/@tialela99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500"
                >
                    <FaYoutube size={32} />
                </a>
            </div>
        </div>
    )
    
}

export default NavButtons;