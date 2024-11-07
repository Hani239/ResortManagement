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
                        {/* <div className="block relative font-playpen text-xl px-4 py-2 pb-4 border-b text-gray-800 " onClick={toggleClothing}>Clothing
                            <svg
                                className={`w-6 h-6 absolute right-2 top-3 transition-transform ${isClothingOpen ? 'transform rotate-180' : ''
                                    }`}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d={
                                        isOpen
                                            ? 'M19 9l-7 7-7-7'
                                            : 'M5 15l7-7 7 7'
                                    }
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </svg>
                            <div>
                                {isClothingOpen && (
                                    <div className="bg-white w-screen">
                                        <div className="py-1">
                                        <Link href="/List" className="block font-playpen py-2 text-[1rem] text-gray-800">Newborn (0 m - 3 m)</Link>
                                        <Link href="/List" className="block font-playpen py-2 text-[1rem] text-gray-800">Girls (3 m - 6 y)</Link>
                                        <Link href="/List" className="block font-playpen py-2 text-[1rem] text-gray-800">Boys (3 m - 6 y)</Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div> */}
                        <Link href="/List" className="block font-playpen text-xl px-4 py-2 border-b text-gray-800 ">Accomodation</Link>
                        <Link href="/List" className="block font-playpen text-xl px-4 py-2 border-b text-gray-800 ">Events</Link>
                        <a href="#" className="block font-playpen text-xl px-4 py-2 border-b text-gray-800 ">About</a>
                        <a href="#" className="block font-playpen text-xl px-4 py-2 text-gray-800 ">Contact</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
