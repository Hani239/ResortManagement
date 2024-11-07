'use client';
import React, { Fragment, useState } from 'react';

const Dropdown: React.FC<{ options: string[], text: string[] }> = ({ options, text }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (option: string) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    return (
        <div className="w-full mx-auto">
            <div className="">
                <div
                    className="flex justify-between  p-4 cursor-pointer"
                    onClick={toggleFAQ}
                >
                    <h3 className="text-md font-semibold">{text}</h3>
                    <svg
                        className={`w-6 h-6 transition-transform ${isOpen ? 'transform rotate-180' : ''
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
                </div>
                {isOpen && (
                    <div className="p-4 ">
                        <div className="p-2">
                            {options && options.map((option) => (
                                <Fragment key={option}>
                                    <div>
                                        <p>Card Number *</p>
                                        <input type="text" className="w-full p-3 border" />
                                        <div className='w-full'>
                                            <div className='inline-block w-1/2'>
                                                <p>Expiry MM/YY *</p>
                                                <input type="text" placeholder='MM/YY' className=" p-3  border" />
                                            </div>
                                            <div className='inline-block w-1/2'>
                                                <p>CVV *</p>
                                                <input type="text" className=" p-3 border" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
