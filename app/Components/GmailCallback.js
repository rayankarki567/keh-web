'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';
import { gapi } from 'gapi-script';

const GmailCallback = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sendEmail = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const email = urlParams.get('email');
      const contactId = urlParams.get('contactId');

      if (!email || !contactId) {
        setError('Invalid callback parameters.');
        return;
      }

      try {
        const { data, error } = await supabase.from('contacts').select('*').eq('id', contactId).single();

        if (error) {
          throw error;
        }

        gapi.load('client:auth2', async () => {
          await gapi.auth2.init({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            scope: 'https://www.googleapis.com/auth/gmail.send',
          });

          const authInstance = gapi.auth2.getAuthInstance();
          await authInstance.signIn();

          const user = authInstance.currentUser.get();
          const authResponse = user.getAuthResponse();
          const accessToken = authResponse.access_token;

          const message = `From: ${data.name} <${data.email}>\nTo: rayankarki567@gmail.com\nSubject: ${data.subject}\n\n${data.message}`;
          const encodedMessage = window.btoa(unescape(encodeURIComponent(message)))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

          await gapi.client.load('gmail', 'v1');
          const response = await gapi.client.gmail.users.messages.send({
            userId: 'me',
            resource: { raw: encodedMessage },
          });

          if (response.status === 200) {
            console.log('Message sent successfully:', response);
            alert('Message sent successfully!');
            router.push('/');
          } else {
            throw new Error('Failed to send email');
          }
        });
      } catch (error) {
        console.error('Error sending email:', error);
        setError('Failed to send email.');
      } finally {
        setLoading(false);
      }
    };

    sendEmail();
  }, [router]);

  if (loading) {
    return <div>Processing email sending...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Email sent successfully!</div>;
};

export default GmailCallback;
