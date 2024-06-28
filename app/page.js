import React from 'react';
import Landingsection from './Components/Landingsection';
import Selfbout from './Components/Selfbout';
import MyCarousel from './Components/MyCarousel'; 
import ContactForm from './Components/contactform';
import Footer from './Components/Footer';

const Page = () => {
  return (
    <>
      <Landingsection />
      <div className='container my-32'>
        <MyCarousel />
      </div>
      <Selfbout />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Page;
