'use client'
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', 
    email: '',
    subject: '',
    message: ''
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!recaptchaToken){
      alert('Please complete reCAPTCHA first');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mnnaadog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, 'g-recaptcha-response': recaptchaToken })
      });

      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setRecaptchaToken(null);
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
    <div className="mt-8 max-w-lg mx-auto p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-blue-500 rounded"
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
            className="w-full px-3 py-2 border border-blue-500 rounded"
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
            className="w-full px-3 py-2 border border-blue-500 rounded"
            placeholder="Subject"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-blue-500 rounded"
            rows="3"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <ReCAPTCHA className='flex justify-center items-center'
            sitekey="6LcUdQYqAAAAALpdVvlYZN9gr41QutTrjCbLb0H9"
            onChange={handleRecaptchaChange}
          />
        </div>
        <div className='text-center items-center'>
          <button type="submit" className="inline-block m-2 border-2 font-semibold text-blue-600 border-blue-500 rounded-lg p-2 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100">Send message</button>
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
