import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const NavButtons = (props) =>  {
    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => {
        navigate(-1);
    };

    const showGoBackButton =
        location.pathname === '/videos' ||
        location.pathname === '/songs' ||
        location.pathname === '/song';

    return (
        <div className="absolute top-18 left-0 mt-5 ml-4">          
            {showGoBackButton && (
                <button
                onClick={goBack}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                Go Back
                </button>
            )}
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

export default NavButtons;