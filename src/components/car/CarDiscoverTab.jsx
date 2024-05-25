import React, { useCallback, useEffect, useState } from 'react';
import { fakeData } from '../data/CarDiscoverTabFakeData';
import DiscoverTabSelect from '../common/DiscoverTabSelect';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const CarDiscoverTab = () => {
  const [cars, setCars] = useState([
    {
      name: '',
      price: '',
      capacity: 0,
      engine: '',
      numberOfSeats: 0,
      license: '',
      image: '',
      hoverImage: '',
      class: '',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [carClass, setCarClass] = useState('Sedan');

  useEffect(() => {
    setIsLoading(true);
    setCars(fakeData);
    setIsLoading(false);
  }, []);

  const tabs = useCallback(() => {
    const tmp = new Set(cars.map((currentCar) => currentCar.class));
    const uniqueTabs = [...tmp];
    return uniqueTabs;
  });

  return (
    <section className="container relative">
      <DiscoverTabSelect
        tabs={tabs()}
        handleChangeTab={setCarClass}
        currentTab={carClass}
        width={80}
      />

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={4}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
        }}
        loop
        onSwiper={(swiper) => {
          swiper.pagination.update();
        }}
        className="mt-[56px] static tab-swiper"
      >
        {cars.map(
          (car, index) =>
            car.class === carClass && (
              <SwiperSlide className="w-screen px-[28px]" key={index}>
                <div>
                  <div className="flex justify-between mb-2.5">
                    <span className="text-xs text-subInformationColor">
                      Động cơ {car.engine}
                    </span>
                    <span className="text-xs text-subInformationColor">
                      Dung tích {car.engine} cc
                    </span>
                  </div>

                  <div className="w-full h-[105px] group relative">
                    <img
                      src={car.image}
                      className="object-cover w-full absolute top-0 h-[105px] object-center group-hover:opacity-0 group-hover:invisible transition-[opacity] transition-[visibility] linear duration-200"
                    />
                    <img
                      src={car.hoverImage}
                      className="object-cover w-full absolute top-0 h-[105px] object-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-[opacity] transition-[visibility] duration-200"
                    />
                  </div>

                  <h3 className="text-subTitleColor text-lg font-bold mt-3.5 mb-2">
                    {car.name}
                  </h3>

                  <p className="text-[27px] text-subInformationColor font-extrabold relative mb-4">
                    {car.price.toLocaleString('de-DE')}
                    <span className="text-[10px] absolute top-0">VNĐ</span>
                  </p>

                  <p>
                    <span className="text-[12px] text-mainTitleColor pr-4 border-r border-[#ccc]">
                      {car.numberOfSeats} chỗ
                    </span>
                    <span className="text-[12px] text-mainTitleColor pl-4">
                      {car.license}
                    </span>
                  </p>
                </div>
              </SwiperSlide>
            )
        )}

        <button
          className="swiper-button-prev left-[-20px] absolute text-[#ccc] font-extrabold button-navigation h-10 w-10 bg-white/[.2] border-tabNavigate"
          role="button"
        ></button>

        <button
          className="swiper-button-next right-[-20px] absolute text-[#ccc] font-extrabold text-xl button-navigation h-10 w-10 bg-white/[.2] border-tabNavigate"
          role="button"
        ></button>
      </Swiper>
    </section>
  );
};

export default CarDiscoverTab;
