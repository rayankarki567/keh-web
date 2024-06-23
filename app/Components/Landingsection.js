"use client"
import React from 'react';
import Link from 'next/link';
import TypedText from './TypedText';
import ParticlesBackground from './particles'; // Adjust import path as per your file structure

const Landingsection = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden flex items-center justify-center text-white">

      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/background.svg)', margin: -5 }}>
      <ParticlesBackground />
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <div className="row">
          <div className="col-xs-12">
            <div className="text-4xl mb-2 font-semibold">print("Hello World!")</div>
            <div className="text-xl mb-6 font-light">Nice to meet you. <TypedText /></div>
            <Link href="/project">
              <button className="border-2 border-white rounded-xl px-4 py-2 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-white hover:text-dblue">
                <div className="text-xl font-medium m-1">Wanna Know More</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landingsection;
