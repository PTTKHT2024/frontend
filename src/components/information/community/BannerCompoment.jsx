import React from 'react';

function Banner({ data, id }) {
  const selectedData = data.find((item) => item.id === id);

  if (!selectedData) {
    return <p>Data not found</p>;
  }

  return (
    <>
      <div className="mt-[94px] mb-8">
        <img className="w-full" src={selectedData.image} alt="" />
      </div>
      <div className="flex items-center justify-center px-28 py-12">
        <h1 className="inline-block text-mainTitleColor text-mainTitle font-bold pb-12 border-b-4 border-red-500">
          {selectedData.title}
        </h1>
      </div>
      <p className=" container text-center text-subInformationColor text-base mb-20 leading-6 ">
        {selectedData.description}
      </p>
    </>
  );
}

export default Banner;
