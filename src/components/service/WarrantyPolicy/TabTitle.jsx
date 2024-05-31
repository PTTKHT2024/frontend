import React from 'react';

const TabTitle = () => {
  return (
    <div className="flex w-full m-auto items-center justify-center">
      <div className="transition-all mr-10 ease-in-out text-red-600 border-b-4 border-red-600">
        <h2 className="m-0 text-base leading-5 text-center whitespace-nowrap font-semibold">
          Những gì được bảo hành
        </h2>
      </div>
      <div className="transition-all mr-10 ease-in-out text-red-600 border-b-4 border-red-600">
        <h2 className="m-0 text-base leading-5 text-center whitespace-nowrap font-semibold">
          Những gì không được bảo hành
        </h2>
      </div>
      <div className="transition-all mr-10 ease-in-out text-red-600 border-b-4 border-red-600">
        <h2 className="m-0 text-base leading-5 text-center whitespace-nowrap font-semibold">
          Trách nhiệm của chủ xe
        </h2>
      </div>
      <div className="transition-all mr-10 ease-in-out text-red-600 border-b-4 border-red-600">
        <h2 className="m-0 text-base leading-5 text-center whitespace-nowrap font-semibold">
          Những thông tin cần thiết
        </h2>
      </div>
    </div>
  );
};

export default TabTitle;