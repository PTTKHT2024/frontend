import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { AiOutlineUser } from 'react-icons/ai';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Overlay from '../common/Overlay';
import HeaderDropdown from './HeaderDropdown';
import CarDiscoverTab from '../car/CarDiscoverTab';
import HeaderDropDownFooter from './HeaderDropDownFooter';
import useIsActive from '../hooks/useIsActive';
import { logout } from '../utils/AuthApi';
import useCheckRole from '../hooks/useCheckRole';

const Header = () => {
  const [isLoginOpend, setIsLoginOpened] = useState(false);
  const [isRegisterOpened, setIsRegisterOpened] = useState(false);
  const isActive = useIsActive();
  const role = useCheckRole();
  const navigate = useNavigate();
  const [dropdownState, setDropDownState] = useState({
    product: false,
    technology: false,
    service: false,
    blog: false,
    electric: false,
    information: false,
  });

  // console.log(role);

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

  const resetDropdownState = () => {
    setDropDownState({
      product: false,
      technology: false,
      service: false,
      blog: false,
      electric: false,
      information: false,
    });
  };

  const handleLogout = async () => {
    const dataJSON = localStorage.getItem('data');
    const data = JSON.parse(dataJSON);
    const accessToken = data.access_token;

    try {
      const res = await logout(accessToken);
      if (res.status == 201) {
        localStorage.removeItem('data');

        window.dispatchEvent(new CustomEvent('localStorageChanged'));

        navigate('/');
      }
    } catch (err) {
      console.log('Err logout : ', err);
    }
  };

  return (
    <>
      {isLoginOpend && (
        <>
          <Overlay onClick={handleClickLogin} />
          <Login
            handleClickRegister={handleClickRegister}
            handleClickLogin={handleClickLogin}
          />
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

                    <ul className="absolute top-full left-0 bg-white border py-1 opacity-0 invisible transform -translate-y-2 transition duration-500 group-hover:opacity-100 group-hover:translate-y-0 bg-transparent group-hover:visible z-10">
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

                    {isActive ? (
                      <ul className="absolute top-full left-0 bg-white border py-1 opacity-0 invisible transform -translate-y-2 transition duration-500 group-hover:opacity-100 group-hover:translate-y-0 bg-transparent group-hover:visible z-10">
                        {role == 'USER' && (
                          <li
                            className="p-2.5 cursor-pointer peer"
                            onClick={handleClickLogin}
                          >
                            <span className="text-base text-nowrap peer-hover:text-primaryColor transition-colors duration-200 ">
                              Trang thông tin
                            </span>
                          </li>
                        )}

                        {role == 'ADMIN' && (
                          <li
                            className="p-2.5 cursor-pointer peer"
                            onClick={handleClickLogin}
                          >
                            <Link
                              className="text-base text-nowrap peer-hover:text-primaryColor transition-colors duration-200"
                              to={'/admin'}
                            >
                              Trang Admin
                            </Link>
                          </li>
                        )}

                        <li
                          className="p-2.5 cursor-pointer peer"
                          onClick={handleLogout}
                        >
                          <span className="text-base text-nowrap peer-hover:text-primaryColor transition-colors duration-200">
                            Đăng xuất
                          </span>
                        </li>
                      </ul>
                    ) : (
                      <ul className="absolute top-full left-0 bg-white border py-1 opacity-0 invisible transform -translate-y-2 transition duration-500 group-hover:opacity-100 group-hover:translate-y-0 bg-transparent group-hover:visible z-10">
                        <li
                          className="p-2.5 cursor-pointer peer"
                          onClick={handleClickLogin}
                        >
                          <span className="text-base text-nowrap peer-hover:text-primaryColor transition-colors duration-200">
                            Đăng nhập
                          </span>
                        </li>

                        <li
                          className="p-2.5 cursor-pointer peer"
                          onClick={handleClickRegister}
                        >
                          <span className="text-base text-nowrap peer-hover:text-primaryColor transition-colors duration-200">
                            Đăng ký
                          </span>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </div>

              <div className="h-12 flex  border-t border-[#ccc]">
                <ul className="flex items-center">
                  <li
                    className={`text-base flex items-center h-full cursor-pointer px-3 ${
                      dropdownState.product && 'bg-[#f5f5f5]/[.9]'
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
                      dropdownState.technology && 'bg-[#f5f5f5]/[.9]'
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
                      dropdownState.service && 'bg-[#f5f5f5]/[.9]'
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
                      dropdownState.blog && 'bg-[#f5f5f5]/[.9]'
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
                      dropdownState.electric && 'bg-[#f5f5f5]/[.9]'
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
                      dropdownState.information && 'bg-[#f5f5f5]/[.9]'
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
            ? 'opacity-100 visible translate-y-0 bg-transparent'
            : 'opacity-0 invisible -translate-y-[96px] bg-white'
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
            ? 'opacity-100 visible translate-y-0 bg-transparent'
            : 'opacity-0 invisible -translate-y-[96px] bg-white'
        }`}
      >
        <HeaderDropdown onClick={handleClickDropDown}>
          <div className="grid grid-cols-4 gap-x-1.5 gap-y-1.5">
            <Link
              className="col-span-1 relative overflow-hidden group block h-[38vh]"
              onClick={resetDropdownState}
              to={'/technology/hybrid'}
            >
              <img
                src="/imgs/technology/poster/hybrid_poster.jpg"
                alt="technology_img"
                className="object-cover scale-[1.01] group-hover:scale-[1.14] transition-all duration-[600ms] linear h-full w-full "
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.1] via-[#000]/[.1] to-[#000]/[.7] top-0"></div>
              <p className="absolute bottom-[8%] left-[6%] text-white font-semibold text-lg uppercase">
                HYBRID
              </p>
            </Link>

            <Link
              className="col-span-1 relative overflow-hidden group block h-[38vh]"
              onClick={resetDropdownState}
              to={'/technology/tss'}
            >
              <img
                src="/imgs/technology/poster/tss_poster.png"
                alt="technology_img"
                className="object-cover scale-[1.01] group-hover:scale-[1.14] transition-all duration-[600ms] linear h-full w-full "
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.14] via-[#000]/[.1] to-[#000]/[.7] top-0"></div>
              <p className="absolute bottom-[8%] left-[6%] text-white font-semibold text-lg uppercase">
                TSS
              </p>
            </Link>

            <Link
              className="col-span-1 relative overflow-hidden group block h-[38vh]"
              onClick={resetDropdownState}
              to={'/technology/tnga'}
            >
              <img
                src="/imgs/technology/poster/tnga_poster.png"
                alt="technology_img"
                className="object-cover scale-[1.01] group-hover:scale-[1.14] transition-all duration-[600ms] linear h-full w-full "
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.14] via-[#000]/[.1] to-[#000]/[.7] top-0"></div>
              <p className="absolute bottom-[8%] left-[6%] text-white font-semibold text-lg uppercase">
                TNGA
              </p>
            </Link>
          </div>
        </HeaderDropdown>
      </div>

      <div
        className={`transition-all duration-[400ms] h-max w-full fixed top-[96px] bg-white z-30 ${
          dropdownState.service
            ? 'opacity-100 visible translate-y-0 bg-transparent'
            : 'opacity-0 invisible -translate-y-[96px] bg-white'
        }`}
      >
        <HeaderDropdown onClick={handleClickDropDown}>
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <div className="grid grid-cols-12 mt-[8vh] ml-[8vw]">
                <div className="col-span-6">
                  <ul>
                    <li className="uppercase text-lg text-[#212529] font-bold mb-4">
                      dịch vụ bảo dưỡng
                    </li>
                    <li
                      className="h-9 group w-full"
                      onClick={resetDropdownState}
                    >
                      <Link
                        to="/service/maintain"
                        className="text-base text-subInformationColor group-hover:font-bold group-hover:text-lg group-hover:text-primaryColor"
                      >
                        Bảo dưỡng định kỳ
                      </Link>
                    </li>
                    <li
                      className="h-9 group w-full"
                      onClick={resetDropdownState}
                    >
                      <Link
                        to="/service/repair"
                        className="text-base text-subInformationColor group-hover:font-bold group-hover:text-lg group-hover:text-primaryColor"
                      >
                        Dịch vụ sửa chữa
                      </Link>
                    </li>
                    <li
                      className="h-9 group w-full"
                      onClick={resetDropdownState}
                    >
                      <Link
                        to="/service/beauty"
                        className="text-base text-subInformationColor group-hover:font-bold group-hover:text-lg group-hover:text-primaryColor"
                      >
                        Dịch vụ chăm sóc làm đẹp xe
                      </Link>
                    </li>
                    <li
                      className="h-9 group w-full"
                      onClick={resetDropdownState}
                    >
                      <Link
                        to="/service/warranty"
                        className="text-base text-subInformationColor group-hover:font-bold group-hover:text-lg group-hover:text-primaryColor"
                      >
                        Chính sách bảo hành
                      </Link>
                    </li>
                    <li
                      className="h-9 group w-full"
                      onClick={resetDropdownState}
                    >
                      <Link
                        to="/service/inspect"
                        className="text-base text-subInformationColor group-hover:font-bold group-hover:text-lg group-hover:text-primaryColor"
                      >
                        Kiểm tra & Triệu hồi
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-6">
                  <ul>
                    <li className="uppercase text-lg text-[#212529] font-bold mb-4">
                      dịch vụ sau bán hàng
                    </li>
                    <li
                      className="h-9 group w-full"
                      onClick={resetDropdownState}
                    >
                      <a
                        href="https://www.tfsvn.com.vn/"
                        target="_blank"
                        className="text-base text-subInformationColor group-hover:font-bold group-hover:text-lg group-hover:text-primaryColor"
                      >
                        Dịch vụ tài chính Toyota
                      </a>
                    </li>
                    <li
                      className="h-9 group w-full"
                      onClick={resetDropdownState}
                    >
                      <Link
                        to="/service"
                        className="text-base text-subInformationColor group-hover:font-bold group-hover:text-lg group-hover:text-primaryColor"
                      >
                        Bảo hiểm Toyota
                      </Link>
                    </li>
                    <li
                      className="h-9 group w-full"
                      onClick={resetDropdownState}
                    >
                      <a
                        href="https://toyotasure.vn/"
                        target="_blank"
                        className="text-base text-subInformationColor group-hover:font-bold group-hover:text-lg group-hover:text-primaryColor"
                      >
                        Xe đã qua sử dụng
                      </a>
                    </li>
                    <li
                      className="h-9 group w-full"
                      onClick={resetDropdownState}
                    >
                      <Link
                        to="/service"
                        className="text-base text-subInformationColor group-hover:font-bold group-hover:text-lg group-hover:text-primaryColor"
                      >
                        Gia hạn bảo hành
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-6 mt-5">
                  <ul>
                    <li className="uppercase text-lg text-[#212529] font-bold mb-4">
                      sản phẩm chính hãng
                    </li>
                    <li
                      className="h-9 group w-full"
                      onClick={resetDropdownState}
                    >
                      <Link
                        to="/service"
                        className="text-base text-subInformationColor group-hover:font-bold group-hover:text-lg group-hover:text-primaryColor"
                      >
                        Phụ kiện chính hãng
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <img
                src="/imgs/toyota-touch.jpg"
                alt="toyota-touch"
                className="object-cover"
              />
            </div>
          </div>
          <HeaderDropDownFooter />
        </HeaderDropdown>
      </div>

      <div
        className={`transition-all duration-[400ms] h-max w-full fixed top-[96px] z-20 ${
          dropdownState.blog
            ? 'opacity-100 visible translate-y-0 bg-transparent'
            : 'opacity-0 invisible -translate-y-[96px] bg-white'
        }`}
      >
        <HeaderDropdown onClick={handleClickDropDown}>
          <div className="grid grid-cols-4 gap-x-1.5 gap-y-1.5">
            <Link
              className="col-span-1 relative overflow-hidden group block h-[38vh]"
              onClick={resetDropdownState}
              to={'/technology/hybrid'}
            >
              <img
                src="/imgs/blog/poster/product_poster.png"
                alt="blog_img"
                className="object-cover scale-[1.01] group-hover:scale-[1.14] transition-all duration-[600ms] h-full w-full  linear"
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.1] via-[#000]/[.1] to-[#000]/[.7] top-0"></div>
              <p className="absolute bottom-[8%] left-[6%] text-white font-semibold text-lg uppercase">
                sản phẩm
              </p>
            </Link>

            <Link
              className="col-span-1 relative overflow-hidden group block h-[38vh]"
              onClick={resetDropdownState}
              to={'/technology/tss'}
            >
              <img
                src="/imgs/blog/poster/promotion_poster.jpg"
                alt="blog_img"
                className="object-cover scale-[1.01] group-hover:scale-[1.14] transition-all duration-[600ms] linear h-full w-full "
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.14] via-[#000]/[.1] to-[#000]/[.7] top-0"></div>
              <p className="absolute bottom-[8%] left-[6%] text-white font-semibold text-lg uppercase">
                khuyến mãi
              </p>
            </Link>

            <Link
              className="col-span-1 relative overflow-hidden group block h-[38vh]"
              onClick={resetDropdownState}
              to={'/technology/tnga'}
            >
              <img
                src="/imgs/blog/poster/community_poster.png"
                alt="blog_img"
                className="object-cover scale-[1.01] group-hover:scale-[1.14] transition-all duration-[600ms] linear h-full w-full "
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.14] via-[#000]/[.1] to-[#000]/[74] top-0"></div>
              <p className="absolute bottom-[8%] left-[6%] text-white font-semibold text-lg uppercase">
                xã hội
              </p>
            </Link>

            <Link
              className="col-span-1 relative overflow-hidden group block h-[38vh]"
              onClick={resetDropdownState}
              to={'/technology/tnga'}
            >
              <img
                src="/imgs/blog/poster/additional_information_poster.png"
                alt="blog_img"
                className="object-cover scale-[1.01] group-hover:scale-[1.14] transition-all duration-[600ms] linear"
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.14] via-[#000]/[.1] to-[#000]/[.7] top-0"></div>
              <p className="absolute bottom-[8%] left-[6%] text-white font-semibold text-lg uppercase">
                thông tin khác
              </p>
            </Link>
          </div>
        </HeaderDropdown>
      </div>

      <div
        className={`transition-all duration-[400ms] h-max w-full fixed top-[96px] z-20 ${
          dropdownState.electric
            ? 'opacity-100 visible translate-y-0 bg-transparent'
            : 'opacity-0 invisible -translate-y-[96px] bg-white'
        }`}
      >
        <HeaderDropdown onClick={handleClickDropDown}>
          <div className="grid grid-cols-4 gap-x-1.5 gap-y-1.5">
            <Link
              className="col-span-1 relative overflow-hidden group block h-[38vh]"
              onClick={resetDropdownState}
              to={'/electrification/electrified-car'}
            >
              <img
                src="/imgs/electric/poster/electric_poster_1.jpg"
                alt="electric_img"
                className="object-cover scale-[1.01] group-hover:scale-[1.14] transition-all duration-[600ms] linear h-full w-full "
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.1] via-[#000]/[.1] to-[#000]/[.7] top-0"></div>
              <p className="absolute bottom-[8%] left-[6%] text-white font-semibold text-lg uppercase">
                điện hóa ô tô
              </p>
            </Link>

            <Link
              className="col-span-1 relative overflow-hidden group block h-[38vh]"
              onClick={resetDropdownState}
              to={'/technology/tss'}
            >
              <img
                src="/imgs/electric/poster/electric_poster_2.jpg"
                alt="electric_img"
                className="object-cover scale-[1.01] group-hover:scale-[1.14] transition-all duration-[600ms] linear h-full w-full "
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.14] via-[#000]/[.1] to-[#000]/[74] top-0"></div>
              <p className="absolute bottom-[8%] left-[6%] text-white font-semibold text-lg uppercase">
                công nghệ hybrid
              </p>
            </Link>

            <Link
              className="col-span-1 relative overflow-hidden group block h-[38vh]"
              onClick={resetDropdownState}
              to={'/technology/tnga'}
            >
              <img
                src="/imgs/electric/poster/electric_poster_3.jpg"
                alt="electric_img"
                className="object-cover scale-[1.01] group-hover:scale-[1.14] transition-all duration-[600ms] linear h-full w-full "
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.14] via-[#000]/[.1] to-[#000]/[74] top-0"></div>
              <p className="absolute bottom-[8%] left-[6%] text-white font-semibold text-lg uppercase">
                công nghệ thuần điện
              </p>
            </Link>
          </div>
        </HeaderDropdown>
      </div>

      <div
        className={`transition-all duration-[400ms] h-max w-full fixed top-[96px] z-20 ${
          dropdownState.information
            ? 'opacity-100 visible translate-y-0 bg-transparent'
            : 'opacity-0 invisible -translate-y-[96px] bg-white'
        }`}
      >
        <HeaderDropdown onClick={handleClickDropDown}>
          <div className="grid grid-cols-4 gap-x-1.5 gap-y-1.5">
            <Link
              className="col-span-1 relative overflow-hidden group block h-[38vh]"
              onClick={resetDropdownState}
              to={'/technology/hybrid'}
            >
              <img
                src="/imgs/information/poster/information_poster_1.png"
                alt="information_img"
                className="object-cover scale-[1.01] group-hover:scale-[1.14] transition-all duration-[600ms] linear h-full w-full "
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.1] via-[#000]/[.1] to-[#000]/[.7] top-0"></div>
              <p className="absolute bottom-[8%] left-[6%] text-white font-semibold text-lg uppercase">
                tuyển dụng
              </p>
            </Link>

            <Link
              className="col-span-1 relative overflow-hidden group block h-[38vh]"
              onClick={resetDropdownState}
              to={'/information/company/introduction'}
            >
              <img
                src="/imgs/information/poster/information_poster_2.png"
                alt="information_img"
                className="object-cover scale-[1.01] group-hover:scale-[1.14] transition-all duration-[600ms] linear h-full w-full "
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.14] via-[#000]/[.1] to-[#000]/[74] top-0"></div>
              <p className="absolute bottom-[8%] left-[6%] text-white font-semibold text-lg uppercase">
                giới thiệu công ty
              </p>
            </Link>

            <Link
              className="col-span-1 relative overflow-hidden group block h-[38vh]"
              onClick={resetDropdownState}
              to={'/information/community'}
            >
              <img
                src="/imgs/information/poster/information_poster_3.png"
                alt="information_img"
                className="object-cover scale-[1.01] group-hover:scale-[1.14] transition-all duration-[600ms] linear h-full w-full "
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.14] via-[#000]/[.1] to-[#000]/[74] top-0"></div>
              <p className="absolute bottom-[8%] left-[6%] text-white font-semibold text-lg uppercase">
                cộng đồng
              </p>
            </Link>

            <Link
              className="col-span-1 relative overflow-hidden group block h-[38vh]"
              onClick={resetDropdownState}
              to={'/information/local/conduct'}
            >
              <img
                src="/imgs/information/poster/information_poster_4.png"
                alt="information_img"
                className="object-cover scale-[1.01] group-hover:scale-[1.14] transition-all duration-[600ms] linear h-full w-full "
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.14] via-[#000]/[.1] to-[#000]/[74] top-0"></div>
              <p className="absolute bottom-[8%] left-[6%] text-white font-semibold text-lg uppercase">
                nội địa hóa
              </p>
            </Link>

            <a
              className="col-span-1 relative overflow-hidden group block h-[38vh]"
              onClick={resetDropdownState}
              href="https://tapchi.toyota.com.vn/vi"
              target="_blank"
            >
              <img
                src="/imgs/information/poster/information_poster_5.png"
                alt="information_img"
                className="object-cover scale-[1.01] group-hover:scale-[1.14] transition-all duration-[600ms] linear h-full w-full "
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#a9aaa800]/[.14] via-[#000]/[.1] to-[#000]/[74] top-0"></div>
              <p className="absolute bottom-[8%] left-[6%] text-white font-semibold text-lg uppercase">
                tạp chí toyota
              </p>
            </a>
          </div>
        </HeaderDropdown>
      </div>
    </>
  );
};

export default Header;
