'use client';
import { useEffect, useRef } from 'react';

const Turnstile = ({ sitekey, theme = 'light', onChange }) => {
  const turnstileRef = useRef(null);

  useEffect(() => {
    const initializeTurnstile = () => {
      if (turnstileRef.current && window.turnstile) {
        window.turnstile.render(turnstileRef.current, {
          sitekey,
          theme,
          callback: onChange,
        });
      }
    };

    const scriptId = 'turnstile-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      script.onload = initializeTurnstile;
      script.onerror = () => {
        console.error('Failed to load Turnstile script');
      };
      document.body.appendChild(script);
    } else {
      initializeTurnstile();
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
