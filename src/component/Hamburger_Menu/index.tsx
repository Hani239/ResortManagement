'use client';
import Link from 'next/link';
import path from 'path';
import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClothingOpen, setIsClothingOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const toggleClothing = () => {
        setIsClothingOpen(!isClothingOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2"
            >
                <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <IoMenu />
                    )}
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 w-screen mt-2  bg-white border ">
                    <div className="py-1">
                        <a href="/" className="block font-playpen text-xl px-4 py-2 border-b text-gray-800 ">Home</a>
                        <Link href="/List" className="block font-playpen text-xl px-4 py-2 border-b text-gray-800 ">Accomodation</Link>
                        <Link href="/Evnt" className="block font-playpen text-xl px-4 py-2 border-b text-gray-800 ">Events</Link>
                        <a href="/About" className="block font-playpen text-xl px-4 py-2 border-b text-gray-800 ">About</a>
                        <a href="/Contact" className="block font-playpen text-xl px-4 py-2 text-gray-800 ">Contact</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
