import React from 'react';

const ServiceIcon = () => {
  return (
    <section className="container mt-sectionMargin_1 mb-sectionMargin_1 py-11 border-y flex justify-center">
      <div className="w-3/5 flex justify-between">
        <div className="flex flex-col items-center">
          <span
            style={{
              backgroundPositionX: '-210px',
              backgroundPositionY: '-10px',
            }}
            className="bg-[url('/imgs/global-image.png')] inline-block h-[82px] w-[82px]"
          ></span>
          <span className="text-mainTitleColor text-sm font-semibold mt-4">
            Khuyến mãi
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span
            style={{
              backgroundPositionX: '-210px',
              backgroundPositionY: '-112px',
            }}
            className="bg-[url('/imgs/global-image.png')] inline-block h-[82px] w-[82px]"
          ></span>
          <span className="text-mainTitleColor text-sm font-semibold mt-4">
            Bảng giá
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span
            style={{
              backgroundPositionX: '-312px',
              backgroundPositionY: '-10px',
            }}
            className="bg-[url('/imgs/global-image.png')] inline-block h-[82px] w-[82px]"
          ></span>
          <span className="text-mainTitleColor text-sm font-semibold mt-4">
            Đăng ký lái thử
          </span>
        </div>
      </div>
    </section>
  );
};



export default ServiceIcon;
