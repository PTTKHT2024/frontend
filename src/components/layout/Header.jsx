import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container">
      <div className="flex justify-between">
        <div className="py-3">
          <img src="src\assets\imgs\logo-toyota.jpg" alt="" />
        </div>
        <div>
          <div className="flex">
            <ul>
              <li className="text-sm">
                <Link to={'/'}>VR Showroom</Link>
                <RiArrowDropDownLine className="inline" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
