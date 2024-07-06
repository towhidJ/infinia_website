'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "./Carousel.css"

import React from 'react'
import Image from "next/image";

export default function Cra() {

  const slides = [
    {
      id: 1,
      backgroundImage: "url('http://infiniagroupbd.com/wp-content/uploads/2019/12/bill_gordon_shares_his_spraying_tips.jpg')",
      title: "Infinia Group",
      subtitle: "FASTEST AND MOST SUCCESSFUL GROUP IN BANGLADESH",
      description: `Infinia Group is one of the most successful groups in Bangladesh;a country with great latent in the field of manufacturing. Infinia Group has acquired a versatile production chain to cater flexible orders in shorter lead-time. Infinia Group assures the
        perfect Quality over Quantity.        
        
        Infinia Group started of accomplishment, aiming to lead the competitive Spinning,
        knitwear, Composite Textile, Synthetic Fiber & Chemicals organizations of Bangladesh.`
    },
    {
      id: 2,
      backgroundImage: "url('https://www.orfonline.org/public/uploads/posts/image/cotton-production.jpg')",
      title: "Infinia Group",
      subtitle: "FASTEST AND MOST SUCCESSFUL GROUP IN BANGLADESH",
      description: `Another example of Infinia Group's success.`
    }
  ];
  return (
    <>
      <Swiper className="w-full h-screen ">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative flex items-center justify-center py-40">
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: slide.backgroundImage }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-slate-800 opacity-20" />
            <div className="relative z-10 grid grid-cols-1 space-y-8 mx-20 justify-start items-start text-white p-4">
              <h6 className="text-xl font-semibold text-black lg:text-base tracking-[.25em]">{slide.subtitle}</h6>
              <h1 className="text-blue-800 font-extrabold text-6xl tracking-wider">{slide.title}</h1>
              <p className="w-3/5 leading-relaxed whitespace-pre-line text-black"> 
                {slide.description}
              </p>
              <button className="  bg-transparent border-2 border-gray-800 font-bold hover:bg-blue-600 hover:border-blue-600 hover:text-white text-gray-800 rounded-3xl  py-2 px-4 rounded w-1/6 ">Our Company</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
