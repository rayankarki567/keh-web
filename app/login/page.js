'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { supabase } from '../../lib/supabaseClient'; 

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (!error) {
        setMsg('Login successful');
        router.push('/');
      } else {
        setMsg('Login failed: ' + error.message);
      }
    } catch (error) {
      setMsg('An unexpected error occurred: ' + error.message);
    }
  };

  const handleGoogleLogin = async() =>{
    try{
      const { error } = await supabase.auth.signInWithOAuth({provider: 'google'});
      if(error){
        setMsg("Google sign-in failed:" + error.message);
      }
    } catch(error){
      setMsg("An unexpected error occured:" + error.message);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-2xl font-bold mb-4'>Login</h1>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="mb-2 p-2 border border-gray-300 rounded"
        required
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="mb-2 p-2 border border-gray-300 rounded"
        required
      />
      <button onClick={handleLogin} className='p-2 bg-blue-500 text-white rounded'>Login</button>
      <button onClick={handleGoogleLogin} className='mt-4 p-2'>Sign in with Google</button>
      {msg && <p className='mt-4 text-red-500'>{msg}</p>}
    </div>
  );
}
