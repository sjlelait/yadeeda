import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BackButton = (props) => {    
    const navigate = useNavigate();
    const location = useLocation();
    
    const goBack = () => {
        navigate(-1);
    };
    
    const showGoBackButton = location.pathname !== '/';
    /^\/song\/\d+$/.test(location.pathname);

    return (
        <div className="sticky p-4">
            {showGoBackButton && (
                <button
                onClick={goBack}
                className="bg-ydBlue hover:bg-ydLightBlue hover:text-black text-white font-bold py-2 px-4 rounded shadow-lg text-sm md:text-md"
                >
                Back
                </button>
            )}
        </div>
    )


}

export default BackButton;