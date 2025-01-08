'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import jwt_decode from 'jwt-decode';

const CallbackHandler = () => {
  const [status, setStatus] = useState('');
  const router = useRouter();

  useEffect(() => {
    const loadGisScript = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = initializeGisClient;
      document.body.appendChild(script);
    };

    const initializeGisClient = () => {
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.prompt();
    };

    const handleCredentialResponse = async (response) => {
      if (!response.credential) {
        console.error('No credential received');
        setStatus('Authentication failed.');
        return;
      }

      const { credential } = response;

      try {
        const user = jwt_decode(credential);
        const email = user.email;

        console.log('Decoded user:', user);
        console.log('Email:', email);

        const queryParams = new URLSearchParams(window.location.search);
        const name = queryParams.get('name');
        const subject = queryParams.get('subject');
        const message = queryParams.get('message');

        console.log('Query parameters:', { name, subject, message });

        await insertIntoSupabase(name, subject, message, email);
      } catch (error) {
        console.error('Error decoding credential or processing data:', error);
        setStatus('Failed to process your authentication data.');
      }
    };

    const insertIntoSupabase = async (name, subject, message, email) => {
      try {
        const { data, error } = await supabase
          .from('contacts')
          .insert([{ name, email, subject, message }])
          .select('*')
          .single();

        if (error) {
          console.error('Error inserting data:', error.message);
          setStatus('Failed to save your contact info.');
          return;
        }

        console.log('Inserted data:', data);

        setStatus('Your message has been successfully sent!');
        setTimeout(() => {
          router.push('/thank-you');
        }, 2000);
      } catch (error) {
        console.error('Unexpected error:', error);
        setStatus('An error occurred while processing your request.');
      }
    };

    if (typeof window !== 'undefined') {
      loadGisScript();
    }
  }, [router]);

  return (
    <div className="text-center mt-32">
      <h1 className="text-2xl font-bold">{status || 'Processing your request...'}</h1>
    </div>
  );
};

export default CallbackHandler;
