import React from "react";
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

const ThreeButton = () => {
    return (
        <>
            <div className="pt-40 flex items-center m-auto justify-center ml-[-16px]">
                <div
                  className="h-10 w-10 ml-4 border-2 border-solid border-gray-500 text-center leading-10 
                    uppercase text-base text-gray-500 cursor-pointer"
                >
                  <VscChevronLeft className="inline-block" />
                </div>
                <input
                  readOnly
                  className="ml-4 text-white bg-primaryColor h-10 w-10 text-center"
                  value={1}
                />
                <div
                  className="h-10 w-10 ml-4 border-2 border-solid border-gray-500 text-center leading-10 uppercase 
                    text-base text-gray-500 cursor-pointer "
                >
                  <VscChevronRight className="inline-block" />
                </div>
              </div>
        </>
    );
}

export default ThreeButton