import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 w-full text-center justify-between">
            <div className="flex flex-col lg:flex-row items-center justify-center p-6 dark:border-neutral-500 lg:justify-between">
                <div className="mr-12 hidden lg:block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div className="flex justify-center">
                    <Link to="/" className="mr-6 text-neutral-600 dark:text-neutral-400">HOME</Link>
                    <Link to="/about" className="mr-6 text-neutral-600 dark:text-neutral-400">ABOUT</Link>
                    <Link to="/links" className="mr-6 text-neutral-600 dark:text-neutral-400">LINKS</Link>
                    <Link to="/reviews" className="mr-6 text-neutral-600 dark:text-neutral-400">REVIEWS</Link>
                    <Link to="/contact" className="mr-6 text-neutral-600 dark:text-neutral-400">CONTACT</Link>
                </div>
                <div className="text-center mt-4 lg:mt-0">
                <p>© Yadeeda { new Date().getFullYear() }</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;