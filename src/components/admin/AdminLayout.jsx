import React from 'react';
import { BiLogoBlogger, BiMenuAltLeft } from 'react-icons/bi';
import { BsListNested, BsReverseListColumnsReverse } from 'react-icons/bs';
import { FaCar } from 'react-icons/fa';
import { HiOutlinePower, HiUsers } from 'react-icons/hi2';
import { MdWindow } from 'react-icons/md';
import { PiPowerBold, PiUsersFill } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <>
      <section className="fixed left-0 top-0 bottom-0 bg-white flex items-center border-r-[1px] border-[#ccc]/[.8] z-10">
        <div className="flex flex-col">
          <NavLink
            to={'/#'}
            className={({ isActive }) =>
              `px-[20px] py-[14px] cursor-pointer  ${
                isActive
                  ? 'text-[#4379EE] border-l-[4px] border-[#4379EE]'
                  : 'hover:bg-[#f5f5f5] text-mainTitleColor/[.4] hover:text-mainTitleColor'
              }`
            }
          >
            <BsListNested className="block h-5 w-5" />
          </NavLink>

          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `px-[20px] py-[14px] cursor-pointer  ${
                isActive
                  ? 'text-[#4379EE] border-l-[4px] border-[#4379EE]'
                  : 'hover:bg-[#f5f5f5] text-mainTitleColor/[.4] hover:text-mainTitleColor'
              }`
            }
          >
            <MdWindow className="block h-5 w-5" />
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-[20px] py-[14px] cursor-pointer  ${
                isActive
                  ? 'text-[#4379EE] border-l-[4px] border-[#4379EE]'
                  : 'hover:bg-[#f5f5f5] text-mainTitleColor/[.4] hover:text-mainTitleColor'
              }`
            }
          >
            <FaCar className="block h-5 w-5" />
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-[20px] py-[14px] cursor-pointer  ${
                isActive
                  ? 'text-[#4379EE] border-l-[4px] border-[#4379EE]'
                  : 'hover:bg-[#f5f5f5] text-mainTitleColor/[.4] hover:text-mainTitleColor'
              }`
            }
          >
            <BiLogoBlogger className="block h-5 w-5" />
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-[20px] py-[14px] cursor-pointer  ${
                isActive
                  ? 'text-[#4379EE] border-l-[4px] border-[#4379EE]'
                  : 'hover:bg-[#f5f5f5] text-mainTitleColor/[.4] hover:text-mainTitleColor'
              }`
            }
          >
            <HiUsers className="block h-5 w-5" />
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-[20px] py-[14px] cursor-pointer  ${
                isActive
                  ? 'text-[#4379EE] border-l-[4px] border-[#4379EE]'
                  : 'hover:bg-[#f5f5f5] text-mainTitleColor/[.4] hover:text-mainTitleColor'
              }`
            }
          >
            <PiPowerBold className="block h-5 w-5" />
          </NavLink>
        </div>
      </section>

      <section className="fixed top-0 right-0 left-[64px] bg-white border-b-[1px] border-[#ccc]/[.8] py-1">
        <div className="container">
          <div className="flex">
            <img src="/imgs/logo-toyota.jpg" alt="logo-toyota" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLayout;
