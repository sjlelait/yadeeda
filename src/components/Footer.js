import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 w-full text-center justify-between">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col items-center justify-center p-6 dark:border-neutral-500 lg:justify-between">
                    <div className="flex justify-center flex-wrap md-2">
                        <Link to="/" className="mr-3 text-sm md:text-lg text-neutral-600 dark:text-neutral-400">HOME</Link>
                        <Link to="/about" className="mr-3 text-sm md:text-lg text-neutral-600 dark:text-neutral-400">ABOUT</Link>
                        <Link to="/reviews" className="mr-3 text-sm md:text-lg text-neutral-600 dark:text-neutral-400">REVIEWS</Link>
                        <Link to="/contact" className="mr-3 text-sm md:text-lg text-neutral-600 dark:text-neutral-400">CONTACT</Link>
                    </div>
                    <div className="text-center mt-4 lg:mt-0">
                        <p className="text-sm">© Yadeeda { new Date().getFullYear() }</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;