import React from 'react';

const ElectrificationCarItem = ({ data, onClick }) => {
  return (
    <>
      <section className="w-full" onClick={onClick}>
        <div className="relative h-full w-full cursor-pointer group overflow-hidden">
          <img
            src={`${data.image}`}
            alt="car-image"
            className="object-cover object-center group-hover:scale-[1.08] transition-all ease-in duration-300"
          />
          <p className="absolute text-white font-bold bottom-0 left-0 p-[30px] text-[22px]">
            {data.name}
          </p>
        </div>
      </section>
    </>
  );
};

export default ElectrificationCarItem;
