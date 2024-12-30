'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Turnstile from './Turnstile';

const FeedbackForm = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [comment, setComment] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);

  const isValidEmail = (email) => {
    const emailRegex = /^(?=.{1,254})(?=.{1,64}@.{1,255}$)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleTurnstileChange = (token) => {
    setTurnstileToken(token);
  };

  const submitFeedback = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }

    if (!turnstileToken) {
      alert('Please complete the Turnstile verification first');
      return;
    }

    setLoading(true);
    const { error } = await supabase.from('feedback').insert([
      { full_name: fullName, email: email, comment: comment },
    ]);
    setLoading(false);

    if (error) {
      alert('Error submitting feedback');
    } else {
      alert('Feedback submitted! It will be reviewed soon.');
      setFullName('');
      setEmail('');
      setComment('');
      setEmailError(null);
      setTurnstileToken(null);
    }
  };

  return (
    <>
      <div className='text-3xl font-serif h2after text-center mt-32 font-extrabold text-dblue z-50'>Leave Your Feedback</div>
      <div className="feedback-container mt-8 max-w-lg mx-auto p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl relative z-10">
        <form onSubmit={submitFeedback}>
          <div className="input-group mb-4">
            <label htmlFor="full-name" className="block text-sm font-medium text-dblue mb-2">Your Name</label>
            <input
              type="text"
              id="full-name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dblue"
            />
          </div>
          <div className="input-group mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-dblue mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dblue"
            />
            {emailError && <p className="error text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div className="input-group mb-4">
            <label htmlFor="comment" className="block text-sm font-medium text-dblue mb-2">Your Feedback</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dblue"
            />
          </div>
            <div className='mb-4 text-center items-center'>
            <Turnstile sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_2ND_KEY} theme="light" onChange={handleTurnstileChange} />
            </div>
            <div className='text-center items-center'>
            <button type="submit" className="submit-btn w-4/5 bg-dblue text-white p-2 rounded-md transition-transform duration-300 ease-in-out hover:scale-110" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FeedbackForm;
