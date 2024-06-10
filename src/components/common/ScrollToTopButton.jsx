import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-[5vh] right-[3vw] cursor-pointer bg-[#EB0A1E] p-3 transition-all duration-200 ${
        isVisible ? 'opacity-1 visible' : 'opacity-0 invisible'
      }`}
      onClick={scrollToTop}
    >
      <div className="h-full w-full">
        <FaArrowUp className="text-white" />
      </div>
    </div>
  );
};

export default ScrollToTopButton;
