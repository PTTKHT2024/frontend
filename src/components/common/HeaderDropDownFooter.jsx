import React from 'react';
import { Link } from 'react-router-dom';

const HeaderDropDownFooter = () => {
  return (
    <footer className="container">
      <div className="flex justify-center border-t">
        <Link className="flex items-center py-[30px] px-[30px]">
          <span
            style={{
              backgroundPositionX: '-126px',
              backgroundPositionY: '-339px',
            }}
            className="bg-[url('/imgs/global-image.png')] w-[17px] h-6 bg-center block mr-2 inline-block"
          ></span>{' '}
          <p className="text-subInformationColor/[.9] font-medium text-base">
            Tải về Catalogue
          </p>
        </Link>

        <Link className="flex items-center py-[30px] px-[30px]">
          <span
            style={{
              backgroundPositionX: '-10px',
              backgroundPositionY: '-339px',
            }}
            className="bg-[url('/imgs/global-image.png')] w-[21px] h-6 bg-center block mr-2 inline-block"
          ></span>{' '}
          <p className="text-subInformationColor/[.9] font-medium text-base">
            Dự toán tài chính
          </p>
        </Link>

        <Link className="flex items-center py-[30px] px-[30px]">
          <span
            style={{
              backgroundPositionX: '-364px',
              backgroundPositionY: '-219px',
            }}
            className="bg-[url('/imgs/global-image.png')] w-6 h-6 bg-center block mr-2 inline-block"
          ></span>{' '}
          <p className="text-subInformationColor/[.9] font-medium text-base">
            Đăng ký lái thử
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default HeaderDropDownFooter;
