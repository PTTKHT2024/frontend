import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const DiscoverTabSelect = ({
  tabs,
  handleChangeTab,
  currentTab,
  width = 80,
  all = false,
}) => {
  return (
    <div className="relative">
      <div className="flex justify-center">
        <ul
          className="w-full flex justify-center items-center"
          style={{ width: `${width}%` }}
        >
          {all && (
            <li className="flex-1 text-center text-lg pb-2.5 hover:border-b-tabAction hover:font-bold cursor-pointer font-medium -translate-y-[0.8px]">
              <Link>TẤT CẢ</Link>
            </li>
          )}

          {tabs.map((tab, index) =>
            tab !== currentTab ? (
              <li
                key={index}
                className="flex-1 text-center text-lg pb-2.5 hover:border-b-tabAction hover:font-bold cursor-pointer font-medium -translate-y-[0.8px]"
                onClick={(e) => handleChangeTab(e.target.dataset.tab)}
                data-tab={tab}
              >
                {tab}
              </li>
            ) : (
              <li
                key={index}
                className="flex-1 text-center text-lg pb-2.5 font-bold border-b-tabAction cursor-pointer -translate-y-[0.8px]"
                onClick={(e) => handleChangeTab(e.target.dataset.tab)}
                data-tab={tab}
              >
                {tab}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="border-black border-b w-full bottom-[3.5px] absolute z-[-1]"></div>
    </div>
  );
};

export default DiscoverTabSelect;
