import React, { useState } from 'react';
import Header from '../../common/Header';
import HaveWarranty from './HaveWarranty';
import NotWarranty from './NotWarranty';
import Responsive from './Responsive';
import Information from './Information';
import { Link } from 'react-router-dom';

const Warranty = () => {
  const [activeTab, setActiveTab] = useState('warranty');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="max-w-full m-auto p-0  w-full relative">
        <div className="px-40">
          <div className="flex w-full m-auto items-center justify-center">
            <div
              className={`transition-all mr-10 ease-in-out cursor-pointer ${
                activeTab === 'warranty'
                  ? 'text-primaryColor border-b-[3px] border-primaryColor'
                  : 'text-black'
              }`}
              onClick={() => handleTabClick('warranty')}
            >
              <h2 className="m-0 text-base leading-5 text-center whitespace-nowrap font-medium">
                Những gì được bảo hành
              </h2>
            </div>
            <div
              className={`transition-all mr-10 ease-in-out cursor-pointer ${
                activeTab === 'notWarranty'
                  ? 'text-primaryColor border-b-[3px] border-primaryColor'
                  : 'text-black'
              }`}
              onClick={() => handleTabClick('notWarranty')}
            >
              <h2 className="m-0 text-base leading-5 text-center whitespace-nowrap font-medium">
                Những gì không được bảo hành
              </h2>
            </div>
            <div
              className={`transition-all mr-10 ease-in-out cursor-pointer ${
                activeTab === 'responsibility'
                  ? 'text-primaryColor border-b-[3px] border-primaryColor'
                  : 'text-black'
              }`}
              onClick={() => handleTabClick('responsibility')}
            >
              <h2 className="m-0 text-base leading-5 text-center whitespace-nowrap font-medium">
                Trách nhiệm của chủ xe
              </h2>
            </div>
            <div
              className={`transition-all mr-10 ease-in-out cursor-pointer ${
                activeTab === 'info'
                  ? 'text-primaryColor border-b-[3px] border-primaryColor'
                  : 'text-black'
              }`}
              onClick={() => handleTabClick('info')}
            >
              <h2 className="m-0 text-base leading-5 text-center whitespace-nowrap font-medium">
                Những thông tin cần thiết
              </h2>
            </div>
          </div>
          {activeTab === 'warranty' && <HaveWarranty />}
          {activeTab === 'notWarranty' && <NotWarranty />}
          {activeTab === 'responsibility' && <Responsive />}
          {activeTab === 'info' && <Information />}
        </div>
      </div>
    </>
  );
};

export default Warranty;
