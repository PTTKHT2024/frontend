import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';

const Header = () => {
  return (
    <header className="border-b-4 border-primaryColor fixed top-0 z-10 w-full bg-white">
      <div className="container">
        <div className="flex justify-between">
          <div className="py-3">
            <img src="src\assets\imgs\logo-toyota.jpg" alt="" />
          </div>
          <div>
            <div className="flex my-1.5 h-8 justify-end">
              <ul className="flex items-center">
                <li className="text-sm mr-5 flex items-center relative group">
                  <Link to={'/'}>VR Showroom</Link>
                  <MdOutlineKeyboardArrowDown className="inline h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />

                  <ul className="absolute top-full left-0 bg-white border py-1 opacity-0 invisible transform -translate-y-2 transition duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible z-10">
                    <li className="p-2.5">
                      <Link className="text-base text-nowrap hover:text-primaryColor transition-colors duration-200">
                        SUV - MPV
                      </Link>
                    </li>
                    <li className="p-2.5">
                      <Link className="text-base text-nowrap hover:text-primaryColor transition-colors duration-200">
                        Sedan - Bán tải
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="text-sm mr-5 flex items-center">
                  <span
                    style={{
                      backgroundPositionX: '-54px',
                      backgroundPositionY: '-295px',
                    }}
                    className="bg-[url('src/assets/imgs/global-image.png')] inline-block w-6 h-6 mr-1"
                  ></span>
                  <Link to={'/'}>Toyota toàn cầu</Link>
                </li>

                <li className="text-sm mr-5 flex items-center">
                  <Link to={'/'}>Tìm Đại lý</Link>
                </li>

                <li className="text-sm mr-5 flex items-center">
                  <span>
                    <IoSearch className="h-6 w-5" />
                  </span>
                </li>

                <li className="text-sm mr-5 flex items-center">
                  <a href="/">
                    <FaFacebook className="h-6 w-6 text-facebookColor" />
                  </a>
                </li>

                <li className="text-sm mr-5 flex items-center">
                  <a href="/">
                    <FaYoutube className="h-6 w-7 text-youtubeColor" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="h-12 flex  border-t border-[#ccc]">
              <ul className="flex items-center">
                <li className="text-base mr-5 flex items-center h-full cursor-pointer">
                  <span className="mr-1">Sản phẩm</span>
                  <MdOutlineKeyboardArrowDown className="inline h-5 w-5 text-[#6b6b6b] justify-end" />
                </li>

                <li className="text-base mr-5 flex items-center h-full cursor-pointer">
                  <span className="mr-1">Công nghệ</span>
                  <MdOutlineKeyboardArrowDown className="inline h-5 w-5 text-[#6b6b6b] justify-end" />
                </li>

                <li className="text-base mr-5 flex items-center h-full cursor-pointer">
                  <span className="mr-1">Dịch vụ</span>
                  <MdOutlineKeyboardArrowDown className="inline h-5 w-5 text-[#6b6b6b] justify-end" />
                </li>

                <li className="text-base mr-5 flex items-center h-full cursor-pointer">
                  <span className="mr-1">Tin tức & Khuyến mãi</span>
                  <MdOutlineKeyboardArrowDown className="inline h-5 w-5 text-[#6b6b6b] justify-end" />
                </li>

                <li className="text-base mr-5 flex items-center h-full cursor-pointer">
                  <span className="mr-1">Điện hóa</span>
                  <MdOutlineKeyboardArrowDown className="inline h-5 w-5 text-[#6b6b6b] justify-end" />
                </li>

                <li className="text-base mr-5 flex items-center h-full cursor-pointer">
                  <span className="mr-1">Về Toyota Việt Nam</span>
                  <MdOutlineKeyboardArrowDown className="inline h-5 w-5 text-[#6b6b6b] justify-end" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
