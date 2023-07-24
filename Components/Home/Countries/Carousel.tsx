"use client"
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CountryTab from './CountryTab';

const DivCarousel = () => {
  // Replace this data with your own content or fetch it from an API
  const divs = [
    <div className="item"><CountryTab /></div>,
    <div className="item"><CountryTab /></div>,
    <div className="item"><CountryTab /></div>,
    <div className="item"><CountryTab /></div>,
    <div className="item"><CountryTab /></div>,
    <div className="item"><CountryTab /></div>,
    // Add more divs here as needed
  ];

  const owlOptions = {
    items: 3, // Number of items to show at a time
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: { items: 3 },
      768: { items: 3 },
      1024: { items: 3 },
    },
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <OwlCarousel className="owl-theme" {...owlOptions}>
        {divs.map((div, index) => (
          <React.Fragment key={index}>{div}</React.Fragment>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default DivCarousel;
