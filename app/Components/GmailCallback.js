'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';
import { gapi } from 'gapi-script';

const GmailCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const sendEmail = async () => {
      if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const email = urlParams.get('email');
        const contactId = urlParams.get('contactId');

        if (!email || !contactId) {
          alert('Invalid callback parameters.');
          router.push('/');
          return;
        }

        const { data, error } = await supabase.from('contacts').select('*').eq('id', contactId).single();

        if (error) {
          console.error('Error fetching contact:', error);
          alert('No contact record found. Please try again.');
          router.push('/');
          return;
        }

        gapi.load('client:auth2', () => {
          gapi.auth2.init({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            scope: 'https://www.googleapis.com/auth/gmail.send'
          }).then(() => {
            const authInstance = gapi.auth2.getAuthInstance();
            authInstance.signIn().then(() => {
              const user = authInstance.currentUser.get();
              const authResponse = user.getAuthResponse();
              const accessToken = authResponse.access_token;

              const message = `From: ${data.name} <${data.email}>\nTo: rayankarki567@gmail.com\nSubject: ${data.subject}\n\n${data.message}`;
              const encodedMessage = window.btoa(unescape(encodeURIComponent(message)))
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=+$/, '');

              gapi.client.load('gmail', 'v1', () => {
                gapi.client.gmail.users.messages.send({
                  userId: 'me',
                  resource: { raw: encodedMessage },
                }).then((response) => {
                  if (response.status === 200) {
                    console.log('Message sent successfully:', response);
                    alert('Message sent successfully!');
                    router.push('/');
                  } else {
                    console.error('Error sending email:', response);
                    alert('Failed to send email.');
                  }
                }).catch((error) => {
                  if (error.result.error.code === 403) {
                    alert('Permission denied. Ensure Gmail API is enabled for this account.');
                  } else if (error.result.error.code === 401) {
                    alert('Authentication failed. Please try signing in again.');
                  } else {
                    console.error('Error sending email:', error);
                    alert('Failed to send email.');
                  }
                });
              });
            });
          });
        });
      }
    };

    sendEmail();
  }, [router]);

  return <div>Processing email sending...</div>;
};

export default GmailCallback;
