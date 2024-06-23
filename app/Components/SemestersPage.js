"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';


const FlippingCard = dynamic(() =>
  import('react-ui-cards').then((mod) => mod.FlippingCard),
  { ssr: false }
);
const FlippingCardFront = dynamic(() =>
  import('react-ui-cards').then((mod) => mod.FlippingCardFront),
  { ssr: false }
);
const FlippingCardBack = dynamic(() =>
  import('react-ui-cards').then((mod) => mod.FlippingCardBack),
  { ssr: false }
);

const SemestersPage = () => {
  const titles = ["Sem 1", "Sem 2", "Sem 3", "Sem 4"];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section className="min-h-screen p-12">
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {titles.map((title, index) => (
            <FlippingCard key={index} className="h-60">
              <FlippingCardFront>
                <div className="bg-gradient-to-b from-gray-200 to-gray-50 p-8 h-60 w-60 flex flex-col justify-center items-center rounded">
                  <div className='bg-gradient-to-b from-dblue to-purple-200 rounded-md p-2 h-full w-full flex justify-center items-center'>
                  <div className='bg-gradient-to-b from-gray-200 to-gray-50 rounded-md p-4 h-full w-full flex justify-center items-center'>
                    <div className="text-2xl font-extrabold text-dblue ">{title}</div>
                  </div>
                  </div>
                </div>
              </FlippingCardFront>
              <FlippingCardBack>
                <div className="bg-gradient-to-b from-gray-200 to-gray-50 p-4 h-72 w-60 flex flex-col justify-center items-center rounded">
                  <p className="text-gray-700 mt-2 text-center">Detailed information about {title}.</p>
                  <a href="#" className="bg-gray-800 text-white font-medium px-4 py-2 rounded-md inline-block mt-4 hover:bg-white hover:text-gray-800 transition duration-300">View detail</a>
                </div>
              </FlippingCardBack>
            </FlippingCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SemestersPage;
