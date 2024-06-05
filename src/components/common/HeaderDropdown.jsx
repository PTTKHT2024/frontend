import React from 'react';
import Overlay from './Overlay';

const HeaderDropdown = ({ children, onClick }) => {
  return (
    <>
      <div className="absolute w-full z-20">
        <div
          className="h-screen w-full bg-[#333333]/[.7] top-0"
          onClick={onClick}
        ></div>
        <div className="bg-white w-full absolute top-0 z-30">{children}</div>
      </div>
    </>
  );
};

export default HeaderDropdown;
