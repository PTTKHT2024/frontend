import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { AiOutlineUser } from 'react-icons/ai';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Overlay from '../common/Overlay';
import HeaderDropdown from './HeaderDropdown';
import CarDiscoverTab from '../car/CarDiscoverTab';
import { CarDiscoverTabHeaderContext } from '../context/ContextItnit';
import HeaderDropDownFooter from './HeaderDropDownFooter';

const Header = () => {
  const [isLoginOpend, setIsLoginOpened] = useState(false);
  const [isRegisterOpened, setIsRegisterOpened] = useState(false);
  const [dropdownState, setDropDownState] = useState({
    product: false,
    technology: false,
    service: false,
    blog: false,
    electric: false,
    information: false,
  });

  const handleClickLogin = () => {
    setIsRegisterOpened(false);
    setIsLoginOpened(!isLoginOpend);
  };

  const handleClickRegister = () => {
    setIsLoginOpened(false);
    setIsRegisterOpened(!isRegisterOpened);
  };

  const handleClickDropDown = (e) => {
    const value = e.currentTarget.dataset.value;
    setDropDownState({
      product: false,
      technology: false,
      service: false,
      blog: false,
      electric: false,
      information: false,
      [value]: !dropdownState[value],
    });
  };

  return (
    <>
      {isLoginOpend && (
        <>
          <Overlay onClick={handleClickLogin} />
          <Login handleClickRegister={handleClickRegister} />
        </>
      )}

      {isRegisterOpened && (
        <>
          <Overlay onClick={handleClickRegister} />
          <Register handleClickLogin={handleClickLogin} />
        </>
      )}
      <header className="border-b-4 border-primaryColor fixed top-0 z-50 w-full bg-white">
        <div className="container">
          <div className="flex justify-between">
            <div className="py-3">
              <Link to={'/'}>
                <img src="/imgs/logo-toyota.jpg" alt="logo" />
              </Link>
            </div>
            <div>
              <div className="flex my-1.5 h-8 justify-end">
                <ul className="flex items-center">
                  <li className="text-sm mr-5 flex items-center relative group">
                    <Link to={'/show-rooms'}>VR Showroom</Link>
                    <MdOutlineKeyboardArrowDown className="inline h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />

                    <ul className="absolute top-full left-0 bg-white border py-1 opacity-0 invisible transform -translate-y-2 transition duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible z-10">
                      <li className="p-2.5">
                        <Link
                          className="text-base text-nowrap hover:text-primaryColor transition-colors duration-200"
                          to={'/vr-suv'}
                        >
                          SUV - MPV
                        </Link>
                      </li>
                      <li className="p-2.5">
                        <Link
                          className="text-base text-nowrap hover:text-primaryColor transition-colors duration-200"
                          to={'/vr-sedan'}
                        >
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
                      className="bg-[url('/imgs/global-image.png')] inline-block w-6 h-6 mr-1"
                    ></span>
                    <a href="https://global.toyota/en">Toyota toàn cầu</a>
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
                    <a
                      href="https://www.facebook.com/ToyotaVietnam/?utm_source=SOCIAL&utm_medium=FANPAGE&utm_content=FBICON_PRODUCT_WEBSITE_4NOV2016&utm_campaign=FANPAGE"
                      target="_blank"
                    >
                      <FaFacebook className="h-6 w-6 text-facebookColor" />
                    </a>
                  </li>

                  <li className="text-sm mr-5 flex items-center">
                    <a
                      href="https://www.youtube.com/user/ToyotaMotorVietnam"
                      target="_blank"
                    >
                      <FaYoutube className="h-6 w-7 text-youtubeColor" />
                    </a>
                  </li>

                  <li className="text-sm mr-5 flex items-center relative group">
                    <AiOutlineUser className="inline h-5 w-5 transition-transform duration-300" />

                    <ul className="absolute top-full left-0 bg-white border py-1 opacity-0 invisible transform -translate-y-2 transition duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible z-10">
                      <li className="p-2.5">
                        <span
                          className="text-base text-nowrap hover:text-primaryColor transition-colors duration-200 cursor-pointer"
                          onClick={handleClickLogin}
                        >
                          Đăng nhập
                        </span>
                      </li>

                      <li className="p-2.5">
                        <span
                          className="text-base text-nowrap hover:text-primaryColor transition-colors duration-200 cursor-pointer"
                          onClick={handleClickRegister}
                        >
                          Đăng ký
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="h-12 flex  border-t border-[#ccc]">
                <ul className="flex items-center">
                  <li
                    className={`text-base flex items-center h-full cursor-pointer px-3 ${
                      dropdownState.product && 'bg-[#f5f5f5]/[.7]'
                    }`}
                    onClick={handleClickDropDown}
                    data-value="product"
                  >
                    <span className="mr-1">Sản phẩm</span>
                    <MdOutlineKeyboardArrowDown
                      className={`inline h-5 w-5 text-[#6b6b6b] transition-all duration-[300ms] justify-end rotate-0 ${
                        dropdownState.product && 'rotate-180'
                      }`}
                    />
                  </li>

                  <li
                    className={`text-base flex items-center h-full cursor-pointer px-3 ${
                      dropdownState.technology && 'bg-[#f5f5f5]/[.7]'
                    }`}
                    onClick={handleClickDropDown}
                    data-value="technology"
                  >
                    <span className="mr-1">Công nghệ</span>
                    <MdOutlineKeyboardArrowDown
                      className={`inline h-5 w-5 text-[#6b6b6b] transition-all duration-[300ms] justify-end rotate-0 ${
                        dropdownState.technology && 'rotate-180'
                      }`}
                    />
                  </li>

                  <li
                    className={`text-base flex items-center h-full cursor-pointer px-3 ${
                      dropdownState.service && 'bg-[#f5f5f5]/[.7]'
                    }`}
                    onClick={handleClickDropDown}
                    data-value="service"
                  >
                    <span className="mr-1">Dịch vụ</span>
                    <MdOutlineKeyboardArrowDown
                      className={`inline h-5 w-5 text-[#6b6b6b] transition-all duration-[300ms] justify-end rotate-0 ${
                        dropdownState.service && 'rotate-180'
                      }`}
                    />
                  </li>

                  <li
                    className={`text-base flex items-center h-full cursor-pointer px-3 ${
                      dropdownState.blog && 'bg-[#f5f5f5]/[.7]'
                    }`}
                    onClick={handleClickDropDown}
                    data-value="blog"
                  >
                    <span className="mr-1">Tin tức & Khuyến mãi</span>
                    <MdOutlineKeyboardArrowDown
                      className={`inline h-5 w-5 text-[#6b6b6b] transition-all duration-[300ms] justify-end rotate-0 ${
                        dropdownState.blog && 'rotate-180'
                      }`}
                    />
                  </li>

                  <li
                    className={`text-base flex items-center h-full cursor-pointer px-3 ${
                      dropdownState.electric && 'bg-[#f5f5f5]/[.7]'
                    }`}
                    onClick={handleClickDropDown}
                    data-value="electric"
                  >
                    <span className="mr-1">Điện hóa</span>
                    <MdOutlineKeyboardArrowDown
                      className={`inline h-5 w-5 text-[#6b6b6b] transition-all duration-[300ms] justify-end rotate-0 ${
                        dropdownState.electric && 'rotate-180'
                      }`}
                    />
                  </li>

                  <li
                    className={`text-base flex items-center h-full cursor-pointer px-3 ${
                      dropdownState.information && 'bg-[#f5f5f5]/[.7]'
                    }`}
                    onClick={handleClickDropDown}
                    data-value="information"
                  >
                    <span className="mr-1">Về Toyota Việt Nam</span>
                    <MdOutlineKeyboardArrowDown
                      className={`inline h-5 w-5 text-[#6b6b6b] transition-all duration-[300ms] justify-end rotate-0 ${
                        dropdownState.information && 'rotate-180'
                      }`}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`transition-all duration-[400ms] h-max w-full fixed top-[96px] py-5 bg-white z-30 ${
          dropdownState.product
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-[96px]'
        }`}
      >
        <HeaderDropdown onClick={handleClickDropDown}>
          <CarDiscoverTab carTabsWidth={100} all={true} />
          <div className="mb-7"></div>
          <HeaderDropDownFooter />
        </HeaderDropdown>
      </div>

      <div
        className={`transition-all duration-[400ms] h-max w-full fixed top-[96px] z-20 ${
          dropdownState.technology
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-[96px]'
        }`}
      >
        <HeaderDropdown onClick={handleClickDropDown}>
          <div className="grid grid-cols-4 gap-x-1.5">
            <Link
              className="col-span-1 relative overflow-hidden group block"
              to={'/technology/hybrid'}
            >
              <img
                src="/imgs/technology/poster/hybrid_poster.jpg"
                alt="technology_img"
                className="object-cover scale-[1.08] group-hover:scale-[1.18] transition-all duration-[600ms] linear"
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.1] via-[#000]/[.1] to-[#000]/[.4] top-0"></div>
              <p className="absolute bottom-[10%] left-[10%] text-white font-semibold text-xl uppercase">
                HYBRID
              </p>
            </Link>

            <Link
              className="col-span-1 relative overflow-hidden group block"
              to={'/technology/tss'}
            >
              <img
                src="/imgs/technology/poster/tss_poster.png"
                alt="technology_img"
                className="object-cover scale-[1.08] group-hover:scale-[1.18] transition-all duration-[600ms] linear"
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.14] via-[#000]/[.1] to-[#000]/[.4] top-0"></div>
              <p className="absolute bottom-[10%] left-[10%] text-white font-semibold text-xl uppercase">
                HYBRID
              </p>
            </Link>

            <Link
              className="col-span-1 relative overflow-hidden group block"
              to={'/technology/tnga'}
            >
              <img
                src="/imgs/technology/poster/tnga_poster.png"
                alt="technology_img"
                className="object-cover scale-[1.08] group-hover:scale-[1.18] transition-all duration-[600ms] linear"
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.14] via-[#000]/[.1] to-[#000]/[.4] top-0"></div>
              <p className="absolute bottom-[10%] left-[10%] text-white font-semibold text-xl uppercase">
                HYBRID
              </p>
            </Link>
          </div>
        </HeaderDropdown>
      </div>
    </>
  );
};

export default Header;
