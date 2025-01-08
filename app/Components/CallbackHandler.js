'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import jwt_decode from 'jwt-decode';

const CallbackHandler = () => {
  const [status, setStatus] = useState('Processing your request...');
  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get('name');
    const subject = queryParams.get('subject');
    const message = queryParams.get('message');

    console.log('Query parm:', { name, subject, message });

    const handleCredentialResponse = async (response) => {
      console.log('Received response:', response);
      if (!response.credential) {
        console.error('No credential received');
        setStatus('Authentication failed. Please try again.');
        return;
      }

      try {
        const user = jwt_decode(response.credential);
        const email = user.email;

        console.log('Decoded user:', user);
        console.log('Email:', email);

        await insertIntoSupabase(name, subject, message, email);
      } catch (error) {
        console.error('Error decoding credential or processing data:', error);
        setStatus('Failed to process your authentication data.');
      }
    };

    const insertIntoSupabase = async (name, subject, message, email) => {
      try {
        const { error } = await supabase
          .from('contacts')
          .insert({ name, email, subject, message });

        if (error) {
          console.error('Error inserting data:', error.message);
          setStatus('Failed to save your contact info.');
          return;
        }

        console.log('Data inserted successfully');
        setStatus('Your message has been successfully sent!');
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } catch (error) {
        console.error('Unexpected error:', error);
        setStatus('An error occurred while processing your request.');
      }
    };

    try {
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.prompt();
    } catch (error) {
      console.error('Error initializing Google Identity Services:', error);
      setStatus('Error initializing Google Identity Services.');
    }
  }, [router]);

  return (
    <div className="text-center mt-32">
      <h1 className="text-2xl font-bold">{status}</h1>
    </div>
  );
};

export default CallbackHandler;