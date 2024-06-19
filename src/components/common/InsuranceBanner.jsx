import React from 'react';

const InsuranceBanner = ({ src }) => {
  return (
    <div className="h-[400px] w-full max-w-full">
      <img
        src={src}
        alt=""
        className="w-full h-full object-bottom"
      />
    </div>
  );
};

export default InsuranceBanner;
