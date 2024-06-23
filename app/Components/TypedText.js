import React from 'react';
import { ReactTyped } from 'react-typed';

const TypedText = () => {
  return (
      <ReactTyped
        strings={['I am Rayan Karki.', "'Sup."]}
        typeSpeed={60}
        backSpeed={30}
        loop
      />
  );
};

export default TypedText;
