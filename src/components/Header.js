import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/ydLogoSolo.png';

import { Popover, Dialog } from '@headlessui/react';
import {  Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = (props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
      };

    return (
        <header className="bg-ydLightBlue">
            <nav className="mx-auto flex max-w-7xl items-center justify-between h-16 p-6 lg:px-6 shadow-lg" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5 w-32">
                        <span className="sr-only">Yadeeda</span>
                        <img src={Logo} alt="Yadeeda" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-18">
                    <Popover className="relative">
                        <div className="bg-ydRed inline-block rounded-lg h-10 pt-2 mr-2 items-center hover:shadow-lg">
                            <Link 
                                to="/"
                                className="text-md font-semibold m-4 leading-6"
                                onClick={closeMobileMenu}
                            >
                                <span className="sr-only">Home</span>
                                Home
                            </Link>
                        </div>
                        <div className="bg-ydYellow inline-block rounded-lg  h-10 pt-2  mr-2 items-center hover:shadow-lg">
                            <Link 
                                to="/music" 
                                className="text-md font-semibold m-4 leading-6"
                                onClick={closeMobileMenu}
                            >
                                <span className="sr-only">Music & Videos</span>
                                Music & Videos
                            </Link>
                        </div>
                        <div className="bg-ydGreen inline-block rounded-lg  h-10 pt-2  mr-2 items-center hover:shadow-lg">
                            <Link 
                                to="/about" 
                                className="text-md font-semibold m-4 leading-6"
                                onClick={closeMobileMenu}
                            >
                                <span className="sr-only">About Us</span>
                                About Us
                            </Link>
                        </div>
                        <div className="bg-ydPurple inline-block rounded-lg  h-10 pt-2  mr-2 items-center hover:shadow-lg">
                            <Link 
                                to="/resources" 
                                className="text-md font-semibold m-4 leading-6 text-white"
                                onClick={closeMobileMenu}
                            >
                                <span className="sr-only">Resources</span>
                                Resources
                            </Link>
                        </div>
                        <div className="bg-ydBlue inline-block rounded-lg  h-10 pt-2  mr-2 items-center hover:shadow-lg">
                            <Link 
                                to="/contact" 
                                className="text-md font-semibold m-4 leading-6 text-white"
                                onClick={closeMobileMenu}
                            >
                                <span className="sr-only">Contact Us</span>
                                Contact Us
                            </Link>
                        </div>                    
                    </Popover>
                </Popover.Group>
                <Dialog 
                    as="div" 
                    className="lg:hidden" 
                    open={mobileMenuOpen} 
                    onClose={() => setMobileMenuOpen(false)}
                >
                    <div className="fixed inset-0 z-10" style={{ bottom: "unset" }}/>
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 max-w-xs bg-ydLightBlue px-6 py-6 shadow">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5 font-homeP text-lg">
                                <span className="sr-only">Yadeeda</span>
                                Yadeeda
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>                        
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Link
                                        to="/"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            closeMobileMenu();
                                          }}
                                        >
                                        Home
                                    </Link>
                                    <Link
                                        to="/music"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            closeMobileMenu();
                                          }}
                                        >
                                        Music & Videos
                                    </Link>
                                    <Link
                                        to="/about"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            closeMobileMenu();
                                          }}
                                        >
                                        About Us
                                    </Link>
                                    <Link
                                        to="/resources"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            closeMobileMenu();
                                          }}
                                        >
                                        Resources
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            closeMobileMenu();
                                          }}
                                        >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </nav>
        </header>
    )
}

export default Header;