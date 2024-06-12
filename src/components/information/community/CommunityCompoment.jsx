import React from 'react';
import { Link } from 'react-router-dom';
const ConmmunityComponent = ({ data }) => {
  return (
    <div className="max-w-full h-[637]]">
      <div className="flex items-center h-[637]">
        {data.side === 'left' ? (
          <>
            <div className="w-1/2 overflow-hidden h-[637]">
              <Link to={data.route} smooth>
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[637] object-cover"
                />
              </Link>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center text-center h-[637]">
              <img
                src={data.icon}
                alt=""
                className="w-[90px] h-[90px] object-cover"
              />
              <Link to={data.route} smooth>
                <h2 className="container text-mainTitleColor text-3xl font-bold hover:text-[#007bff] px-4">
                  {data.title}
                </h2>
              </Link>
              <p className="text-subInformationColor text-base font-medium py-8 px-16">
                {data.description}
              </p>
              <Link to={data.route} smooth>
                <button className="bg-primaryColor text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
                  Tìm hiểu
                </button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="w-1/2 flex flex-col justify-center items-center text-center h-[637]">
              <img
                src={data.icon}
                alt=""
                className="w-[90px] h-[90px] object-cover"
              />
              <Link to={data.route} smooth>
                <h2 className="container text-mainTitleColor text-3xl font-bold hover:text-[#007bff] px-4">
                  {data.title}
                </h2>
              </Link>
              <p className="text-subInformationColor text-base font-medium py-8 px-16">
                {data.description}
              </p>
              <Link to={data.route} smooth>
                <button className="bg-primaryColor text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
                  Tìm hiểu
                </button>
              </Link>
            </div>
            <div className="w-1/2 overflow-hidden h-[637]">
              <Link to={data.route} smooth>
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[637] object-cover"
                />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default ConmmunityComponent;
