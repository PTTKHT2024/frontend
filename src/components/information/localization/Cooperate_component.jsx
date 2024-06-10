import React from 'react';
import { Link } from 'react-router-dom';

const Cooperate_component = ({ id, image, title, par, link }) => {
  return (
    <div className="mt-0">
      <ul className="list-none">
        <li className="!p-0 mx-5 md:mx-20">
          <div className={`flex flex-wrap ${id % 2 !== 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
            <div className="w-full md:w-1/2 h-96 md:h-auto">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-4 md:pl-20 md:pr-10">
              <h2 className="pb-8 font-bold text-3xl md:text-4xl md:leading-[48px]">{title}</h2>
              <p className="mt-2 mb-4 text-lg">{par}</p>
              <div className="flex items-center">
                <div className="mr-4 w-7 h-7">
                  <img src="/imgs/www.png" alt="" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-sm md:text-base font-normal">
                  <Link className="text-black-500 hover:text-blue-500" to={link}>
                    {link}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Cooperate_component;
