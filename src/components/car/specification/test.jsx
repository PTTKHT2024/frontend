import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import HeaderDropdown from '../../common/HeaderDropdown'
import Information from './information';
import InfoDown from './infodown';

const Test = () => {

  const [dropdownState, setDropDownState] = useState({
    product: false,
    technology: false,
    service: false,
    blog: false,
    electric: false,
    information: false,
  });

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
  return (
    <>
      <div className="py-16 px-0 w-[1142px] max-w-full mt-24 mx-auto mb-0">
        <div className="border border-solid border-1px border-gray-600 min-h-52">
          <div className="relative flex justify-between font-bold py-6 px-7 items-center cursor-pointer transition duration-300 ease-in-out border border-solid border-1px border-gray-600">
            <ul className="block text-base mx-0 font-bold">
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
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-[400ms] h-max w-[1140px] fixed top-96 bg-white z-30 ${
          dropdownState.product
            ? 'opacity-100 visible translate-y-0 bg-transparent'
            : 'opacity-0 invisible -translate-y-[96px] bg-white'
        }`}
      >
        <InfoDown onClick={handleClickDropDown}>
          <Information
            carTabsWidth={100}
            all={true}
            resetDropdownState={resetDropdownState}
          />
          <div className="mb-7"></div>
        </InfoDown>
      </div>
    </>
  );
};

export default Test;
