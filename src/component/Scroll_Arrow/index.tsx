'use client';
import React, { useEffect, useState } from 'react';
import arrow from '@/Img/icons8-top-100.png'
import Image from 'next/image';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed bottom-4 right-4   text-white font-bold py-2 px-4 rounded-full focus:outline-none`}
    >
      <Image
                src={arrow}
                alt="scroll-up arrow"
                className="h-10 w-10"
            />
    </button>
  );
};

export default ScrollToTop; 
