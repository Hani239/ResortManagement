'use client';
import React, { Fragment, useState } from 'react';
import Button from '../Button';

const CDropdown: React.FC<{ text: string[] }> = ({ text }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left mx-4">
            <div className='inline-block text-xs'>Have a coupon?
                <a href="#" className="text-red-500 hover:underline pl-1" onClick={toggleDropdown}>
                    {text}
                </a>
            </div>

            {isOpen && (
                <div className="pt-2">
                    <Fragment>
                        <p>If you have a coupon code, please apply it below.</p>
                        <div className='inline-flex h-auto'>
                            <input type='email' placeholder='Coupon Code' className='flex flex-wrap lg:w-36 sm:w-48 w-28 rounded-sm text-xs pl-3 border-2 m-2' />
                            <Button text="Apply" className='text-xs px-4 py-2 m-2 rounded-none' />
                        </div>
                    </Fragment>
                </div>
            )}
        </div>
    );
};

export default CDropdown;
