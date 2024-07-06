"use client"
import React from "react";
import Image from "next/image";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon,ArrowRightIcon } from '@heroicons/react/24/solid'
export default function Banner() {
  //Array of Images
	const images = [
		"https://www.orfonline.org/public/uploads/posts/image/cotton-production.jpg",
		"https://www.orfonline.org/public/uploads/posts/image/cotton-production.jpg",
		"https://www.orfonline.org/public/uploads/posts/image/cotton-production.jpg",

	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 1,
		duration: 5000,
		transitionDuration: 300,
		infinite: true,
		prevArrow: (
			<div className="ml-10 top-40 md:top-72">
				<ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
			</div>
		),
		nextArrow: (
				<div className="mr-10 top-40 md:top-72">
				   <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
			    </div>
		),
	};
  return (
    <div className="w-full h-screen">
    <Zoom {...zoomInProperties}>
      {images.map((each, index) => (
        <div key={index} className="flex justify-center md:items-center items-start w-screen h-screen relative">
          <img
            className="w-screen"
            src={each}
          />
                      <h1 className="absolute md:top-60 top-24 inset-x-1/4 text-center z-10 md:text-6xl text-4xl bold text-white">Hello, Nik</h1>
                      <p className="absolute md:top-80 top-40 inset-x-1/4 text-center z-10 md:text-2xl text-xl bold text-white">"Everything you can imagine is real."</p>
        </div>
      ))}
    </Zoom>
  </div>
  );
}
