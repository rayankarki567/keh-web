import React from 'react';
import Landingsection from './Components/Landingsection';
import Selfbout from './Components/Selfbout';
import MyCarousel from './Components/MyCarousel'; 
import ContactForm from './Components/ContactForm';

const Page = () => {
  return (
    <>
      <Landingsection />
      <div className='container my-32'>
        <MyCarousel />
      </div>
      <Selfbout />
      <ContactForm />
    </>
  );
};

export default Page;
