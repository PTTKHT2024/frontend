import React from 'react';

const ElectrificationCar = () => {
  return (
    <>
      <section className="w-full h-screen mt-[94px] relative">
        <div>
          <video
            autoplay="autoplay"
            preload="metadata"
            loop="loop"
            muted="muted"
            src="/video/masthead-xev.mp4"
            className="h-full"
          ></video>
        </div>
        <p className="uppercase absolute ">điện hóa toyota</p>
      </section>
    </>
  );
};

export default ElectrificationCar;
