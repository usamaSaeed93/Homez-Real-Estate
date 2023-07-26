"use client"
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AddTab from './AddTab';
import { PropertyInterface } from '@/lib';

interface CarouselProps {
  data: PropertyInterface[];
}

const Carousel:React.FC<CarouselProps > = ({data}) => {
 
  if (typeof window !== "undefined") {
    (window as any).$ = (window as any).jQuery = require("jquery");
  }

  // const divs = [
  //   <div className="item"><AddTab /></div>,
  //   <div className="item"><AddTab /></div>,
  //   <div className="item"><AddTab /></div>,
  
  // ];

  const owlOptions = {
    items: 3, // Number of items to show at a time
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: { items: 1.5 },
      768: { items: 3 },
      1024: { items: 3 },
    },
  };
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <OwlCarousel className="owl-theme" {...owlOptions}>
        {data.map((div:PropertyInterface, index:number) => (
        <AddTab  div={div} />
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
