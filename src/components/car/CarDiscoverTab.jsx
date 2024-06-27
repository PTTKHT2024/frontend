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
import { carModel } from '../model/CarModel';
import { getCarList } from '../utils/CarApi';
import { fileURL } from '../utils/UtilsFunction';

const CarDiscoverTab = ({
  carTabsWidth = 80,
  all = false,
  resetDropdownState,
}) => {
  const [cars, setCars] = useState([carModel]);
  const [isLoading, setIsLoading] = useState(true);
  const [carClass, setCarClass] = useState('Sedan');

  const fetchCars = async () => {
    try {
      const res = await getCarList(1, 1000);
      if (res.status === 200) {
        const tmp = [...res.data.data.result];
        setCars(tmp);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
    setIsLoading(false);
  }, []);

  const tabs = useCallback(() => {
    const tmp = new Set(cars.map((currentCar) => currentCar.carCategory.name));
    const uniqueTabs = [...tmp];
    return uniqueTabs;
  }, [cars]);

  return (
    <>
      {isLoading ? (
        <div className="container">
          <p>Loading</p>
        </div>
      ) : (
        <section className="container relative">
          <DiscoverTabSelect
            tabs={tabs()}
            handleChangeTab={setCarClass}
            currentTab={carClass}
            width={carTabsWidth}
            all={all}
            resetDropdownState={resetDropdownState}
          />

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={4}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={all ? false : { clickable: true }}
            loop
            onSwiper={(swiper) => {
              swiper.pagination.update();
            }}
            className="mt-[56px] static tab-swiper"
          >
            {cars
              .filter((car) => car.carCategory.name === carClass)
              .map((car) => (
                <SwiperSlide className="w-screen px-[28px]" key={car.id}>
                  <Link to={`/car-list/${car.id}`}>
                    <div className="flex justify-between mb-2.5">
                      <span className="text-xs text-subInformationColor">
                        Động cơ {car.engine}
                      </span>
                      <span className="text-xs text-subInformationColor">
                        Dung tích {car.capacity} cc
                      </span>
                    </div>

                    <div className="w-full h-[105px] group relative">
                      <img
                        src={`${fileURL}/${car.image}`}
                        className="object-cover w-full absolute top-0 h-[105px] object-center opacity-100 transition-opacity duration-200 ease-out group-hover:opacity-0 will-change-[opacity]"
                        loading="lazy"
                      />
                      <img
                        src={`${fileURL}/${car.hover_image}`}
                        className="object-cover w-full absolute top-0 h-[105px] object-center opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 will-change-[opacity]"
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
                        {car.number_of_seats} chỗ
                      </span>
                      <span className="text-[12px] text-mainTitleColor pl-4">
                        {car.gearbox}
                      </span>
                    </p>
                  </Link>
                </SwiperSlide>
              ))}

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
      )}
    </>
  );
};

export default CarDiscoverTab;
