import React from 'react';
import { Link } from 'react-router-dom';

const Music = (props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <Link to="/songs" className="flex flex-col items-center mb-4">
                <img src='' alt='' className="w-32 h-32 object-cover mb-2 rounded" />
                <h3 className="text-lg font-semibold">Individual Songs</h3>
            </Link>
            <Link to="" className="flex flex-col items-center mb-4">
                <img src='' alt='' className="w-32 h-32 object-cover mb-2 rounded" />
                <h3 className="text-lg font-semibold">Songs In Videos</h3>
            </Link>
            <Link to="" className="flex flex-col items-center mb-4">
                <img src='' alt='' className="w-32 h-32 object-cover mb-2 rounded" />
                <h3 className="text-lg font-semibold">Videos</h3>
            </Link>
            <Link to="" className="flex flex-col items-center mb-4">
                <img src='' alt='' className="w-32 h-32 object-cover mb-2 rounded" />
                <h3 className="text-lg font-semibold">Espadrilles - Adult Music</h3>
            </Link>
            <Link to="" className="flex flex-col items-center mb-4">
                <img src='' alt='' className="w-32 h-32 object-cover mb-2 rounded" />
                <h3 className="text-lg font-semibold">Full Albums</h3>
            </Link>
        </div>
    )
}

export default Music;