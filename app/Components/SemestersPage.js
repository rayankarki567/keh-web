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
  const semesters = [
    { title: "I", link: "https://drive.google.com/drive/folders/1Q9LCbUV7p20-J9Twfrzns4BQjBNiCfru?usp=sharing" },
    { title: "II", link: "https://drive.google.com/drive/folders/1BWvYov5kJ2Jg6tuz3z5LEC9MC6CblGtN?usp=sharing" },
    { title: "III", link: "https://drive.google.com/drive/folders/1Jg9Amrzld7tXg4vd5Z9PAvULetCBUSPU?usp=sharing" },
    { title: "IV", link: "https://drive.google.com/drive/folders/1iE9Mrf-jO3VTxNTPAWvUhcYp726RA9lW?usp=sharing" },
    { title: "V", link: "https://drive.google.com/link5" },
  ];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8">
          {semesters.map((semester, index) => (
            <FlippingCard key={index} className="h-60">
              <FlippingCardFront>
                <div className="bg-gradient-to-b from-blue-200 to-white p-8 h-60 w-60 flex flex-col justify-center items-center rounded">
                  <div className="text-4xl font-extrabold font-serif text-dblue ">{semester.title}</div>
                </div>
              </FlippingCardFront>
              <FlippingCardBack>
                <div className="bg-gradient-to-b from-blue-200 to-gray-50 p-4 h-64 w-60 flex flex-col justify-center items-center shadow-xl rounded">
                  <a href={semester.link} target='_blank' className="bg-gradient-to-b from-blue-500 to-blue-200 text-white text-lg font-semibold rounded-xl px-6 py-4 transition-transform duration-300 ease-in-out hover:scale-110">Drive Link</a>
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
