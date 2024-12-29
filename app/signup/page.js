'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({ email, password });
      if (!error) {
        setMsg('Sign-up successful! Please check your email for confirmation.');
        setTimeout(() => {
          router.push('/login'); // Redirect to login page
        }, 3000);
      } else {
        setMsg('Sign-up failed: ' + error.message);
      }
    } catch (error) {
      setMsg('An unexpected error occurred: ' + error.message);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-2xl font-bold mb-4'>Sign Up</h1>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <button 
        onClick={handleSignUp} 
        className='p-2 bg-blue-500 text-white rounded'
      >
        Sign Up
      </button>
      {msg && <p className='mt-4 text-red-500'>{msg}</p>}
    </div>
  );
}
