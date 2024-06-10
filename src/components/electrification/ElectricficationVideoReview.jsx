import React from 'react';
import { GrPlay } from 'react-icons/gr';

const ElectricficationVideoReview = ({ data }) => {
  return (
    <section className="h-[110vh] w-full bg-black">
      <div className="container pt-[20px] pb-[40px] h-full relative">
        <img src={`${data.image}`} alt="" className="h-full object-cover" />
        <div className="absolute top-0 right-0 left-0 bottom-0 m-auto h-[80px] w-[80px] bg-white flex justify-center items-center rounded-full p-2">
          <GrPlay className="text-primaryColor h-3/6 w-3/6 ml-1" />
        </div>
      </div>
    </section>
  );
};

export default ElectricficationVideoReview;
