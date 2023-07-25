import React from 'react';
import { FaAmazon, FaApple, FaItunes } from 'react-icons/fa';

const PurchaseButtons = (props) => {
    return(
        <div className="bottom-8 left-0 right-0 flex flex-col items-center justify-center pt-6 pb-4 bg-white rounded-lg shadow-lg">
            <h1 className="mb-2 mt-2">Purchase on these major platforms</h1>
            <div className="flex space-x-4">
                <a
                href="https://music.apple.com/us/artist/alain-le-lait/279047156"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ydBlue"
                >
                <FaItunes className="text-3xl md:text-4xl" />
                </a>
                <a
                href="https://music.apple.com/us/artist/alain-le-lait/279047156"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ydBlue"
                >
                <FaApple className="text-3xl md:text-4xl" />
                </a>
                <a
                href="https://music.amazon.com/artists/B0019UGZKY/alain-le-lait"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ydBlue"
                >
                <FaAmazon className="text-3xl md:text-4xl" />
                </a>
            </div>
        </div>
    )

}

export default PurchaseButtons;