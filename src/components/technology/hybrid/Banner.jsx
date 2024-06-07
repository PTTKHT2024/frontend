import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="">
      <div className="w-full max-w-full relative top-[94px]">
        <img
          style={{ width: '100%' }}
          src="https://www.toyota.com.vn/media/5k1nwvbg/1600x400.jpg"
          className="w-full h-[50vh] object-cover"
          alt=""
        />
        <div className="h-full flex items-center absolute left-[130px] top-28 mt-0">
          <div className="flex py-3.5 mt-18 px-5 bg-primaryColor text-white text-xs mr-5 font-semibold tracking-widest">
            <Link to="#">TÌM HIỂU THÊM</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
