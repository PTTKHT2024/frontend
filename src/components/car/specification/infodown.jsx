import React from "react";

const InfoDown = ({ children, onClick }) => {
  return (
    <>
      <div className="absolute w-full z-20 right-[-238px] top-[-240px]">
        <div className="h-screen w-full top-0" onClick={onClick}></div>
        <div className="bg-white w-full absolute top-0 z-30">{children}</div>
      </div>
    </>
  );
};

export default InfoDown