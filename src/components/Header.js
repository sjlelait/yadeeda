import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Popover, Dialog } from '@headlessui/react';
import {  Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = (props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-6" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Yadeeda</span>
                        Yadeeda
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
                        <Link to="/" className="text-md font-semibold leading-6 text-gray-900">
                            <span className="sr-only">Home</span>
                            Home
                        </Link>
                        <Link to="/music" className="text-md font-semibold leading-6 text-gray-900">
                            <span className="sr-only">Music & Videos</span>
                            Music & Videos
                        </Link>
                        <Link to="/about" className="text-md font-semibold leading-6 text-gray-900">
                            <span className="sr-only">About Us</span>
                            About Us
                        </Link>
                        <Link to="/links" className="text-md font-semibold leading-6 text-gray-900">
                            <span className="sr-only">Links We Like</span>
                            Links We Like
                        </Link>
                        <Link to="/contact" className="text-md font-semibold leading-6 text-gray-900">
                            <span className="sr-only">Contact Us</span>
                            Contact Us
                        </Link>                    
                    </Popover>
                </Popover.Group>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Yadeeda</span>
                                Yadeeda
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
                                        >
                                        Home
                                    </Link>
                                    <Link
                                        to="/music"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                        Music & Videos
                                    </Link>
                                    <Link
                                        to="/about"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                        About Us
                                    </Link>
                                    <Link
                                        to="/links"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                        Links We Like
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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