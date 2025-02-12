"use client"
import React from 'react';
import Link from 'next/link';
import TypedText from './TypedText';
import ParticlesBackground from './particles'; 

const Landingsection = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-5" style={{ backgroundImage: 'url(/images/background.svg)'}}> 
        <ParticlesBackground /> 
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <div className="row">
          <div className="col-xs-12">
            <div className="text-2xl md:text-5xl mb-2 font-bold">print("Khoor Zruog!")</div>
            <div className="text-md md:text-xl mb-6 font-light">Nice to meet you. <TypedText /></div>
            <Link href="../drawings">
              <button className="border-2 border-white rounded-xl px-4 py-2 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-white hover:text-dblue">
                <div className="sm:text-md md:text-xl font-medium m-1">Learn More</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landingsection;
