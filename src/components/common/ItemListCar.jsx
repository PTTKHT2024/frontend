import React from 'react';
import { Link } from 'react-router-dom';

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

const CarItem = ({
  id,
  img,
  imgHover,
  name,
  price,
  numberSeats,
  uses,
  fuel,
  origin,
  gear,
  engine,
}) => {
  return (
    <div className="relative mt-[32px] cursor-pointer border overflow-hidden transition-all transform hover:shadow-xl w-full">
      <div className="bg-white h-48 relative group z-2 w-full border-solid">
        <Link
          className="flex items-center justify-center w-full h-full"
          to={`/car-list/${id}`}
        >
          {/* Initial image */}
          <img
            className="object-cover w-[80%] absolute h-[80%] object-center opacity-100 transition-opacity duration-200 ease-out group-hover:opacity-0 will-change-[opacity]"
            src={img}
            alt={name}
          />
          {/* Hover image */}
          <img
            className="object-cover w-[80%] absolute h-[80%] object-center opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 will-change-[opacity]"
            src={imgHover}
            alt={name}
          />
        </Link>
      </div>
      <div className="relative px-[24px] pb-[16px] flex flex-col justify-between w-full bg-white min-h-[350px] shadow-[0_4px_32px_transparent] transition-shadow duration-300 ease-in-out">
        <Link to={`/car-list/${id}`} className="flex-1">
          <h2 className="uppercase font-semibold text-xl text-center leading-9 text-black">
            {name}
          </h2>
          <p className="m-0 text-center relative mt-4">
            <span className="mr-2 text-black leading-5 text-sm">Giá từ</span>
            <span className="font-bold text-base leading-6 text-black">
              {formatPrice(price)}
            </span>
            <span className="text-xs leading-4 text-black absolute top-0 ml-1">
              VNĐ
            </span>
          </p>
          <div className="flex flex-wrap mt-8 ml-4 text-base">
            <p className="relative flex items-center m-0 mr-6 text-gray-700 text-lg leading-5 mb-2 before:content-[''] before:inline-block before:w-1.5 before:h-1.5 before:bg-gray-700 before:mr-2">
              {numberSeats} chỗ
            </p>
            <p className="relative flex items-center m-0 mr-6 text-gray-700 text-lg leading-5 mb-2 before:content-[''] before:inline-block before:w-1.5 before:h-1.5 before:bg-gray-700 before:mr-2">
              {uses}
            </p>
            <p className="relative flex items-center m-0 mr-6 text-gray-700 text-lg leading-5 mb-2 before:content-[''] before:inline-block before:w-1.5 before:h-1.5 before:bg-gray-700 before:mr-2">
              {fuel}
            </p>
            <p className="relative flex items-center m-0 mr-6 text-gray-700 text-lg leading-5 mb-2 before:content-[''] before:inline-block before:w-1.5 before:h-1.5 before:bg-gray-700 before:mr-2">
              {origin}
            </p>
            <p className="relative flex items-center m-0 mr-6 text-gray-700 text-lg leading-5 mb-2 before:content-[''] before:inline-block before:w-1.5 before:h-1.5 before:bg-gray-700 before:mr-2">
              {gear}
            </p>
            <p className="relative flex items-center m-0 mr-6 text-gray-700 text-lg leading-5 mb-2 before:content-[''] before:inline-block before:w-1.5 before:h-1.5 before:bg-gray-700 before:mr-2">
              {engine}
            </p>
          </div>
        </Link>
        <div className="flex justify-center -ml-[24px] mb-[32px]">
          <div className="ml-[24px]">
            <Link
              className="bg-primaryColor text-white px-5 py-3 text-center"
              to="/"
            >
              <span className="font-semibold text-sm">DỰ TOÁN</span>
            </Link>
          </div>
          <div className="ml-[24px]">
            <Link
              className="bg-transparent text-black px-5 py-3 text-center border border-solid border-[#1A1A1A]"
              to="/"
            >
              <span className="font-semibold text-sm">SO SÁNH</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
export { formatPrice };
