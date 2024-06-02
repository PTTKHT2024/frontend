import React from 'react';
import { Link } from 'react-router-dom';

const OrderButton = () => {
  return (
    <div
      className="bg-primaryColor h-10 w-52 text-center align-middle m-auto text-xs 
              leading-4 py-3 px-5 font-medium tracking-widest text-white mt-sectionMargin_2"
    >
      <Link href="">Đặt lịch hẹn dịch vụ</Link>
    </div>
  );
};

export default OrderButton;
