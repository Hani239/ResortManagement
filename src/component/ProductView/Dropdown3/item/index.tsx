'use client';
import React, { Fragment, useState } from 'react';

const Dropdown3: React.FC<{ options: string[], text: string[] }> = ({ options, text }) => {
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
          className="flex justify-between  py-4 cursor-pointer"
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
                    <p className=''>
                      
                      <span className=" text-gray-700">{option}</span>
                    </p>
                  </Fragment>
                ))}
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown3;
