import React from 'react';

const Overlay = ({ onClick }) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] bottom-0 bg-[#333333]/[.7]"
      id="overlay"
      onClick={onClick}
    ></div>
  );
};

export default Overlay;
