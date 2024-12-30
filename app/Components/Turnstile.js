// Turnstile.js
'use client';
import React, { useEffect, useRef } from 'react';

const Turnstile = ({ sitekey, theme = 'light', onChange }) => {
  const turnstileRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.turnstile) {
        window.turnstile.render(turnstileRef.current, {
          sitekey,
          theme,
          callback: onChange,
        });
      }
    };

    return () => {
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [sitekey, theme, onChange]);

  return <div ref={turnstileRef} className="cf-turnstile"></div>;
};

export default Turnstile;
