import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ datas }) => {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <>
      <nav className="sticky bg-black top-[96px] w-full z-[10]">
        <ul className="flex container">
          {datas.map((data) => (
            <li key={data.id}>
              <Link
                className={`uppercase relative font-bold text-[13px] text-[#ccc] py-[20px] px-[25px] block ${
                  currentRoute.includes(data.route) &&
                  "after:border-[#EB0A1E] after:border-b-[2px] after:content-[''] after:absolute after:w-full after:bottom-[5px] after:left-0"
                }`}
                to={data.route}
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
