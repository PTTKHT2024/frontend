import React from 'react';
const Conduct_banner = ({ src, title }) => {
  return (
    <div className="relative">
      <img
        className="w-full object-center object-cover h-[600px]"
        src={src}
        alt=""
      />
      <h1 className="absolute text-mainTitleColor top-1/2 left-1/2 text-4xl md:text-6xl font-semibold leading-none text-center transform -translate-x-1/2 -translate-y-1/2">
        {title}
      </h1>
    </div>
  );
};
export default Conduct_banner;
