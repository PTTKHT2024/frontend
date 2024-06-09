import React from 'react';
import { Link } from 'react-router-dom';
const ConmmunityComponent = ({ data }) => {
  return (
    <div className="max-w-full h-[calc(100vh-94px)]">
      <div className="flex items-center h-full">
        {data.side === 'left' ? (
          <>
            <div className="w-1/2 overflow-hidden h-full">
              <Link to={data.route} smooth>
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center text-center h-full">
              <img
                src={data.icon}
                alt=""
                className="w-[90px] h-[90px] object-cover"
              />
              <Link to={data.route} smooth>
                <h2 className="text-mainTitleColor text-3xl font-bold hover:text-[#007bff]">
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
            <div className="w-1/2 flex flex-col justify-center items-center text-center h-full">
              <img
                src={data.icon}
                alt=""
                className="w-[90px] h-[90px] object-cover"
              />
              <Link to={data.route} smooth>
                <h2 className="text-mainTitleColor text-3xl font-bold hover:text-[#007bff]">
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
            <div className="w-1/2 overflow-hidden h-full">
              <Link to={data.route} smooth>
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full object-cover"
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
