"use client";
import React from 'react';

const DrawingDisplay = () => {
  const drawings = [
    { src: '/images/imge-2.jpg', alt: 'Jett' },
    { src: '/images/imge-9.jpg', alt: 'Ai Hoshino' },
    { src: '/images/imge-3.jpg', alt: 'Makima' },
    { src: '/images/imge-1.jpg', alt: 'Rashmika Mandanna' },
    { src: '/images/imge.jpg', alt: 'Makise Kurisu' },
    { src: '/images/imge-13.jpg', alt: 'Dabi (Todoroki)' },
    { src: '/images/imge-8.jpg', alt: 'Rem' },
    { src: '/images/imge-7.jpg', alt: 'Mai Sakurajima' },
    { src: '/images/imge-5.jpg', alt: 'Violet evergarden' },
    { src: '/images/imge-10.jpg', alt: 'Shinobu Kocho' },
    { src: '/images/imge-4.jpg', alt: 'Destiny' },
    { src: '/images/imge-14.jpg', alt: 'Nier 2b' },
    { src: '/images/imge-6.jpg', alt: 'Luffy-Boa' },
    { src: '/images/imge-11.jpg', alt: 'Qin Shi Huang' },
    { src: '/images/imge-12.jpg', alt: 'Nishimiya Shouko' },
  ];

  const chunkedDrawings = [];
  for (let i = 0; i < drawings.length; i += 5) {
    chunkedDrawings.push(drawings.slice(i, i + 5));
  }

  return (
    <section className="min-h-screen px-10 py-12 lg:px-40">
      <div className="container space-y-6">
        {chunkedDrawings.map((chunk, chunkIndex) => (
          <div key={chunkIndex}>
            <div className="grid grid-cols-2 gap-10 mb-10 lg:gap-20 lg:mb-20">
              {chunk.slice(0, 2).map((drawing, index) => (
                <div key={index} className="transform transition-transform duration-500 hover:scale-125">
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl w-full">
                    <img src={drawing.src} alt={drawing.alt} className="object-contain w-full" />
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-10 mb-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
              {chunk.slice(2, 5).map((drawing, index) => (
                <div key={index} className="transform transition-transform duration-500 hover:scale-125">
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl w-full">
                    <img src={drawing.src} alt={drawing.alt} className="object-contain w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DrawingDisplay;
