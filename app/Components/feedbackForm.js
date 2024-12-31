'use client';
import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabaseClient';

const FeedbackForm = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [comment, setComment] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const turnstileRef = useRef(null);
  const turnstileInitialized = useRef(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleTurnstileChange = (token) => setTurnstileToken(token);

  const submitFeedback = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }
    if (!turnstileToken) {
      alert('Please complete the Turnstile verification');
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from('feedback').insert({ full_name: fullName, email, comment });

      if (error) {
        throw new Error('Failed to submit feedback');
      }

      setFullName('');
      setEmail('');
      setComment('');
      setEmailError(null);
      setTurnstileToken(null);
      setLoading(false);

      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting feedback. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    const initializeTurnstile = () => {
      if (!turnstileInitialized.current && window.turnstile) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
          callback: handleTurnstileChange,
          theme: 'light',
        });
        turnstileInitialized.current = true;
      }
    };

    if (window.turnstile) {
      initializeTurnstile();
    } else {
      window.addEventListener('load', initializeTurnstile);
    }

    return () => {
      window.removeEventListener('load', initializeTurnstile);
    };
  }, []);

  return (
    <>
      <div className='text-3xl font-serif text-center mt-32 font-extrabold text-dblue z-10'>Leave Your Feedback</div>
      <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-xl z-10 relative">
        <form onSubmit={submitFeedback}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-dblue">Your Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-dblue"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-dblue">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-dblue"
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-dblue">Your Feedback</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-dblue"
            ></textarea>
          </div>
          <div ref={turnstileRef} className='cf-turnstile mb-4 text-center'></div>
          <div className='text-center'>
            <button
              type="submit"
              className="w-4/5 bg-dblue text-white p-2 rounded-md submit-btn transition-transform duration-300 ease-in-out hover:scale-110"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FeedbackForm;