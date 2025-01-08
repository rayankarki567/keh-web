'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';

const CallbackHandler = () => {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      if (!router.isReady) return;

      const { data: { session }, error } = await supabase.auth.getSession();

      if (error || !session) {
        console.error('Error fetching session:', error);
        alert('Authentication failed. Please try again.');
        router.push('/contact');
        return;
      }

      const user = session.user;
      const contactFormData = JSON.parse(localStorage.getItem('contactFormData'));

      if (!contactFormData) {
        console.error('No contact form data found');
        alert('Contact form data is missing. Please try again.');
        router.push('/contact');
        return;
      }

      const { error: insertError } = await supabase.from('contacts').insert({
        name: contactFormData.name,
        email: user.email,
        subject: contactFormData.subject,
        message: contactFormData.message,
      });

      if (insertError) {
        console.error('Error inserting contact data:', insertError);
        alert('Failed to save contact data. Please try again.');
        router.push('/contact');
        return;
      }

      localStorage.removeItem('contactFormData');
      alert('Your message has been sent successfully!');
      router.push('/');
    };

    handleCallback();
  }, [router]);

  return <div>Processing your submission...</div>;
};

export default CallbackHandler;
