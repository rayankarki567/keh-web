'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const carouselItems = [
  {
    image: "/images/imge.jpg",
    title: "Steins Gate",
    description: "“People’s feelings are memories that transcend time.\" - Makise Kurisu",
  },
  {
    image: "/images/imge-10.jpg",
    title: "Demon Slayer",
    description: "\"Though I may not excel in conventional ways, I've found my own path with unique value.\" - Shinobu Kocho",
  }, 
  {
    image: "/images/imgee.jpg",
    title: "Chainsaw Man",
    description: "\"Death. War. Hunger. There are many things in this world that humanity would be happier without.\" - Makima",
  },

];

const MyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
        setFade(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide(currentSlide === 0 ? carouselItems.length - 1 : currentSlide - 1);
      setFade(false);
    }, 500);
  };

  const goToNextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % carouselItems.length);
      setFade(false);
    }, 500);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="relative w-2/3 md:w-2/5 mr-32 h-screen rounded-lg">
        <div className={`absolute inset-0 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          <Image
            src={carouselItems[currentSlide].image}
            alt={carouselItems[currentSlide].title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-5 right-5 md:bottom-6 md:right-auto md:top-auto md:left-1/2 transform md:translate-x-1/3 bg-white text-black p-6 rounded shadow-lg max-w-md translate-y-1/2">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-blue-600">{carouselItems[currentSlide].title}</h3>
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={goToPrevSlide}
              className="text-blue-600 text-lg font-black hover:bg-gray-200 rounded-md p-1"
            >
              ❮
            </button>
            <button
              type="button"
              onClick={goToNextSlide}
              className="text-blue-600 text-lg font-black hover:bg-gray-200 rounded-md p-1"
            >
              ❯
            </button>
          </div>
        </div>
        <p className="mt-4">{carouselItems[currentSlide].description}</p>
        <div className='flex items-center justify-center'>
          <a href='../drawings' className="inline-block m-2 font-semibold border-2 text-blue-600 border-blue-500 rounded-lg p-2 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100">Discover More</a>
        </div>
      </div>
    </div>
  );
}

export default MyCarousel;
