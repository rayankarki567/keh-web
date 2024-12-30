'use client';
import { useEffect, useRef } from 'react';

const Turnstile = ({ sitekey, theme = 'light', onChange }) => {
  const turnstileRef = useRef(null);

  useEffect(() => {
    const initializeTurnstile = () => {
      if (turnstileRef.current) {
        window.turnstile.render(turnstileRef.current, {
          sitekey,
          theme,
          callback: onChange,
        });
      }
    };

    if (window.turnstile) {
      initializeTurnstile();
    } else {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      script.onload = initializeTurnstile;
      document.body.appendChild(script);
    }

    return () => {
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.reset(turnstileRef.current);
      }
    };
  }, [sitekey, theme, onChange]);

  return <div ref={turnstileRef} className="cf-turnstile"></div>;
};

export default Turnstile;
