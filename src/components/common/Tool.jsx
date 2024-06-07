import React, { useState } from 'react';
import { FaList } from 'react-icons/fa';
import { IoClose, IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Tool = () => {
  const [isOpened, setIsOpened] = useState(true);

  const handleToggleToolList = () => {
    setIsOpened(!isOpened);
  };

  return (
    <section className="fixed right-0 w-[48px] h-3/6 z-10 top-0 bottom-0 mt-auto mb-auto z-[15]">
      <button
        className="w-full h-[48px] bg-white"
        onClick={handleToggleToolList}
        style={{ boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.6)' }}
      >
        {isOpened ? (
          <IoClose className="m-auto w-6 h-6" />
        ) : (
          <FaList className="m-auto w-5 h-5" />
        )}
      </button>

      {isOpened && (
        <ul>
          <li
            className="w-max h-[48px] bg-white transition-all duration-[.35s] ease hover:-translate-x-[calc(100%-48px)] pr-[16px] group"
            style={{ boxShadow: 'inset 0 0 1px 1px rgba(192, 192, 192, 0.6)' }}
          >
            <Link className="h-full w-max flex justify-center items-center">
              <div className="h-full w-[48px] flex items-center justify-center">
                <span
                  style={{
                    backgroundPositionX: '-89px',
                    backgroundPositionY: '-339px',
                  }}
                  className="bg-[url('/imgs/global-image.png')] w-[17px] h-6 bg-center block"
                ></span>
              </div>
              <p className="text-base text-mainTitleColor font-medium group-hover:text-primaryColor">
                So sánh xe
              </p>
            </Link>
          </li>

          <li
            className="w-max h-[48px] bg-white transition-all duration-[.35s] ease hover:-translate-x-[calc(100%-48px)] pr-[16px] group"
            style={{ boxShadow: 'inset 0 0 1px 1px rgba(192, 192, 192, 0.6)' }}
          >
            <Link className="h-full w-full flex justify-center items-center">
              <div className="h-full w-[48px] flex items-center justify-center">
                <span
                  style={{
                    backgroundPositionX: '-10px',
                    backgroundPositionY: '-339px',
                  }}
                  className="bg-[url('/imgs/global-image.png')] w-[21px] h-6 bg-center"
                ></span>
              </div>
              <p className="text-base text-mainTitleColor font-medium group-hover:text-primaryColor">
                Dự toán chi phí
              </p>
            </Link>
          </li>

          <li
            className="w-max h-[48px] bg-white transition-all duration-[.35s] ease hover:-translate-x-[calc(100%-48px)] pr-[16px] group"
            style={{ boxShadow: 'inset 0 0 1px 1px rgba(192, 192, 192, 0.6)' }}
          >
            <Link className="h-full w-full flex justify-center items-center">
              <div className="h-full w-[48px] flex items-center justify-center">
                <span
                  style={{
                    backgroundPositionX: '-364px',
                    backgroundPositionY: '-219px',
                  }}
                  className="bg-[url('/imgs/global-image.png')] w-6 h-6 bg-center"
                ></span>
              </div>
              <p className="text-base text-mainTitleColor font-medium group-hover:text-primaryColor">
                Đăng ký lái thử
              </p>
            </Link>
          </li>

          <li
            className="w-max h-[48px] bg-white transition-all duration-[.35s] ease hover:-translate-x-[calc(100%-48px)] pr-[16px] group"
            style={{ boxShadow: 'inset 0 0 1px 1px rgba(192, 192, 192, 0.6)' }}
          >
            <Link className="h-full w-full flex justify-center items-center">
              <div className="h-full w-[48px] flex items-center justify-center">
                <span
                  style={{
                    backgroundPositionX: '-232px',
                    backgroundPositionY: '-219px',
                  }}
                  className="bg-[url('/imgs/global-image.png')] w-6 h-6 bg-center"
                ></span>
              </div>
              <p className="text-base text-mainTitleColor font-medium group-hover:text-primaryColor">
                Đặt hẹn dịch vụ
              </p>
            </Link>
          </li>

          <li
            className="w-max h-[48px] bg-white transition-all duration-[.35s] ease hover:-translate-x-[calc(100%-48px)] pr-[16px] group"
            style={{ boxShadow: 'inset 0 0 1px 1px rgba(192, 192, 192, 0.6)' }}
          >
            <a
              className="h-full w-full flex justify-center items-center"
              href="/files/price-table.pdf"
              target="_blank"
            >
              <div className="h-full w-[48px] flex items-center justify-center">
                <span
                  style={{
                    backgroundPositionX: '-52px',
                    backgroundPositionY: '-339px',
                  }}
                  className="bg-[url('/imgs/global-image.png')] w-[18px] h-6 bg-center"
                ></span>
              </div>
              <p className="text-base text-mainTitleColor font-medium group-hover:text-primaryColor">
                Tải bảng giá
              </p>
            </a>
          </li>

          <li
            className="w-max h-[48px] bg-white transition-all duration-[.35s] ease hover:-translate-x-[calc(100%-48px)] pr-[16px] group"
            style={{ boxShadow: 'inset 0 0 1px 1px rgba(192, 192, 192, 0.6)' }}
          >
            <Link className="h-full w-full flex justify-center items-center">
              <div className="h-full w-[48px] flex items-center justify-center">
                <span
                  style={{
                    backgroundPositionX: '-126px',
                    backgroundPositionY: '-339px',
                  }}
                  className="bg-[url('/imgs/global-image.png')] w-[17px] h-6 bg-center"
                ></span>
              </div>
              <p className="text-base text-mainTitleColor font-medium group-hover:text-primaryColor">
                Tải catalogue
              </p>
            </Link>
          </li>
        </ul>
      )}
    </section>
  );
};

export default Tool;
