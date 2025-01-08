'use client';
import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const validateForm = () => {
    if (formData.message.length > 1000) {
      alert('Message is too long. Limit: 1000 characters.');
      return false;
    }
    if (!formData.name || !formData.subject || !formData.message) {
      alert('All fields are required.');
      return false;
    }
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    localStorage.setItem('contactFormData', JSON.stringify(formData));

    const {data, error}= await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'https://www.rayankarki.com.np/auth/callback',
        },
      });
    
    if (error) {
      console.error('Error initiating OAuth:', error);
      alert('Failed to initiate OAuth. Please try again.');
    }
  };

  return (
    <>
      <div className='text-3xl font-serif text-center mt-32 font-extrabold text-dblue z-50'>Get in touch</div>
      <div className="mt-4 max-w-lg mx-auto p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl relative z-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dblue"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dblue"
              placeholder="Subject"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-2 resize-none border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dblue"
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className='text-center items-center'>
            <button type="submit" className="w-4/5 bg-dblue text-white p-2 rounded-md duration-300 ease-in-out hover:scale-110 transition-transform">
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <div className="text-dblue text-lg font-bold">Did You Know?</div>
          <div className="text-gray-400">On average, 25% of received emails are only responded to each day.</div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
