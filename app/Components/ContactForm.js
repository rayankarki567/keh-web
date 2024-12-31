'use client';
import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const { data, error } = await supabase.from('contacts').insert({ ...formData }).select('*').single();

      if (error) {
        console.error('Error storing:', error);
        alert('Failed to store data.');
        return;
      }

      const { email, id } = data;
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: `${window.location.origin}/auth/callback?email=${email}&contactId=${id}` }
      });
    } catch (error) {
      console.error(error);
      alert('Failed. Please try again.');
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
          <div className='text-center items-center'>
            <button type="submit" className="submit-btn w-4/5 bg-dblue text-white p-2 rounded-md transition-transform duration-300 ease-in-out hover:scale-110">
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <div className="text-dblue text-lg font-bold">Do You Know?</div>
          <div className="text-gray-400">In average, 25% of received emails are only responded to every day.</div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
