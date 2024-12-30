import React from 'react';
import Landingsection from './Components/Landingsection';
import Selfbout from './Components/Selfbout';
import MyCarousel from './Components/MyCarousel'; 
import ContactForm from './Components/ContactForm';
import FeedbackForm from './Components/feedbackForm';
import FeedbackList from './Components/feedbackList';
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
      <FeedbackForm />
      <FeedbackList />
      <Footer />
    </>
  );
};

export default Page;
