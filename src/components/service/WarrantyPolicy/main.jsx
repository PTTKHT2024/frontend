import React from 'react';
import Header from '../../common/Header';
import TabTitle from './TabTitle';
import HaveWarranty from './HaveWarranty';
import NotWarranty from './NotWarranty';
import Responsive from './Responsive';
import Information from './Information';

const Warranty = () => (
  <>
    <Header />
    <div className="max-w-full m-auto p-0 mt-24 w-full relative">
      <div className="relative">
        <div className="w-full h-full object-center">
          <img
            className="align-middle border-none"
            src="public/imgs/banner.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="py-20 px-40 ">
        <TabTitle />
        <HaveWarranty />
        <NotWarranty />
        <Responsive />
        <Information />
        <div
          className="bg-red-600 h-10 w-52 text-center align-middle m-auto text-xs 
            leading-4 py-3 px-5 font-semibold tracking-widest text-white"
        >
          <a href="">Đặt lịch hẹn dịch vụ</a>
        </div>
      </div>
    </div>
  </>
);

export default Warranty;
