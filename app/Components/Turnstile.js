// Turnstile.js
'use client';
import React, { useEffect, useRef } from 'react';

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

    if (window.turnstile) {
      initializeTurnstile();
    } else {
      window.addEventListener('load', initializeTurnstile);
    }

    return () => {
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.reset(turnstileRef.current);
        window.turnstile.remove(turnstileRef.current);
      }
    };
  }, [sitekey, theme, onChange]);

  return <div ref={turnstileRef} className="cf-turnstile"></div>;
};

export default Turnstile;
