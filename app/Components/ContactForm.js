'use client';
import React, { useState } from 'react';
import Turnstile from './Turnstile'; // Adjust the import path as needed

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', 
    email: '',
    subject: '',
    message: ''
  });

  const [turnstileToken, setTurnstileToken] = useState(null); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTurnstileChange = (token) => { 
    setTurnstileToken(token); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!turnstileToken) { 
      alert('Please complete the Turnstile verification first'); 
      return; 
    }

    try {
      const formspreeurl = process.env.NEXT_PUBLIC_FORMSPREE_URL;
      const response = await fetch(formspreeurl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, 'cf-turnstile-response': turnstileToken })
      });

      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTurnstileToken(null);
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
    <div className='text-3xl font-serif h2after text-center mt-32 font-extrabold text-dblue z-50'>Get in touch</div>
    <div className="mt-8 max-w-lg mx-auto p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl relative z-10">
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
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dblue"
            placeholder="Email"
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
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dblue"
            rows="3"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <div className="mb-4 items-center text-center">
          <Turnstile sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} theme="light" onChange={handleTurnstileChange} />
          {/* <ReCAPTCHA className='flex justify-center items-center'
            sitekey="6LcUdQYqAAAAALpdVvlYZN9gr41QutTrjCbLb0H9"
            onChange={handleRecaptchaChange}
          /> */}
        </div>
        <div className='text-center items-center'>
          <button type="submit" className="submit-btn w-4/5 bg-dblue text-white p-2 rounded-md transition-transform duration-300 ease-in-out hover:scale-110">Send Message</button>
        </div>
      </form>
      <div className="mt-4 text-center ">
        <div className="text-dblue text-lg font-bold">Do You Know?</div>
        <div className="text-gray-400">In average, 25% of received mails are only responded every day</div>
          {/* <p className="text-red-600 mt-2">Sorry to say, but this doesn't work for time being</p> */}
      </div>
    </div>
  </>
  );
};

export default ContactForm;
