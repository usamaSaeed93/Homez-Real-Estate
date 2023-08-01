"use client"
import React, { useState } from 'react';
import './Carousel.css'; // Create a CSS file for styling
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowLeftAltIcon from '@mui/icons-material/ArrowBack';
const Carousel = () => {
  var $ = require("jquery");
if (typeof window !== 'undefined') {
   window.$ = window.jQuery = require('jquery');
}
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/Images/other/main.avif',
    '/Images/other/main2.avif',
    '/Images/other/main3.avif',
    '/Images/other/main4.avif',
    
    // Add more image URLs as needed
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="carousel-container">
         <div className="">
        <button onClick={handlePrevClick} className='rotate-180 absolute top-1/2 left-0 text-5xl'><ArrowRightAltIcon /></button>
        <button onClick={handleNextClick}><ArrowRightAltIcon  className='absolute top-1/2 right-0 text-5xl'/></button>
      </div>
      <div className="carousel gap-5 rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          width="285"
          height="300"
        />
        <img
          src={images[(currentIndex + 1) % images.length]}
          alt={`Image ${currentIndex + 2}`}
          width="285"
          height="300"
        />
        <img
          src={images[(currentIndex + 2) % images.length]}
          alt={`Image ${currentIndex + 3}`}
          width="285"
          height="300"
        />
         <img
          src={images[(currentIndex + 2) % images.length]}
          alt={`Image ${currentIndex + 3}`}
          width="285"
          height="300"
        />
      </div>
     
    </div>
  );
};

export default Carousel;
