import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SummonManagement = () => {
  return (
    <section className="">
      <div className="container">
        <p className="text-mainTitleColor text-mainTitle uppercase">
          kiểm tra & triệu hồi
        </p>

        <div className="grid grid-cols-12 mt-5 gap-10">
          <div className="col-span-2 bg-white rounded-2xl shadow-md overflow-hidden h-max">
            <ul className="text-center font-semibold w-full">
              <li className="uppercase w-full">
                <NavLink
                  replace
                  end
                  to={'/admin/summon'}
                  className={({ isActive }) =>
                    `w-full py-3 border-b-[1px] border-[#ccc] block ${
                      isActive
                        ? 'bg-[#56BACC] text-white'
                        : 'hover:bg-[#f5f5f5] text-mainTitleColor'
                    }`
                  }
                >
                  tất cả
                </NavLink>
              </li>
              <li className="uppercase">
                <NavLink
                  to={'/admin/summon/add'}
                  className={({ isActive }) =>
                    `w-full py-3 block ${
                      isActive
                        ? 'bg-[#56BACC] text-white'
                        : 'hover:bg-[#f5f5f5] text-mainTitleColor'
                    }`
                  }
                >
                  thêm
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-span-10 bg-white rounded-2xl shadow-md p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummonManagement;
