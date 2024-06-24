import React from 'react';
import { ReactTyped } from 'react-typed';

const TypedText = () => {
  return (
      <ReactTyped
        strings={['I am Rayan Karki.', "'Sup."]}
        typeSpeed={120}
        backSpeed={80}
        loop
      />
  );
};

export default TypedText;
