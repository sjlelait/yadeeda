import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Footer = (props) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <footer className={`fixed bottom-0 left-0 right-0 h-16 w-full text-center justify-between bg-ydLightBlue ${isHomePage ? "" : "sticky"}`}>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col items-center justify-center p-2 dark:border-neutral-500 lg:justify-between">
                    <div className="flex justify-center flex-wrap md-2">
                        <Link to="/" className="mr-3 text-sm md:text-lg text-neutral-600 text-white">HOME</Link>
                        <Link to="/about" className="mr-3 text-sm md:text-lg text-neutral-600 text-white">ABOUT</Link>
                        <Link to="/reviews" className="mr-3 text-sm md:text-lg text-neutral-600 text-white">REVIEWS</Link>
                        <Link to="/contact" className="mr-3 text-sm md:text-lg text-neutral-600 text-white">CONTACT</Link>
                    </div>
                    <div className="text-center">
                        <p className="text-sm">© Yadeeda { new Date().getFullYear() }</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;