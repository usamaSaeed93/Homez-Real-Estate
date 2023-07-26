"use client"
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OptionTile from '../Options/OptionTile';

const DivCarousel = () => {
  
  var $ = require("jquery");
  if (typeof window !== "undefined") {
    (window as any).$ = (window as any).jQuery = require("jquery");
  }
  const divs = [
    <div className="item"><OptionTile /></div>,
    <div className="item"><OptionTile /></div>,
    <div className="item"><OptionTile /></div>,
    <div className="item"><OptionTile /></div>,
    <div className="item"><OptionTile /></div>,
    // Add more divs here as needed
  ];

  const owlOptions = {
    items: 3, // Number of items to show at a time
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: { items: 2 },
      768: { items: 4 },
      1024: { items: 6 },
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