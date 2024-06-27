import React, { useEffect, useState } from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import { getCarList } from '../utils/CarApi';
import { fileURL } from '../utils/UtilsFunction';

const fakeData = [
  'https://www.toyota.com.vn/media/er0oxvhk/desktop_hero-banner-1600x680.jpg',
  'https://www.toyota.com.vn/media/s5vddonh/website_hero-banner-desktop-1600x680px.png',
  'https://www.toyota.com.vn/media/tixlezn1/home-banner.png',
  'https://www.toyota.com.vn/media/pguhehve/website.png',
  'https://www.toyota.com.vn/media/uzgnyibw/2xe_1600x680.png',
  'https://www.toyota.com.vn/media/wlejikk0/1600x680-1.png',
  'https://www.toyota.com.vn/media/tt0fey2e/1600x680.jpg',
];

const CarBannerCarousel = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCars = async () => {
    try {
      const res = await getCarList(1, 1000);
      if (res.status === 200) {
        const tmp = [...res.data.data.result].reverse();
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

  return (
    <>
      {isLoading ? (
        <div className="h-screen w-screen bg-white mt-[96px]"></div>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
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
          className="relative mt-[96px]"
        >
          {cars.slice(1, 7).map((car, index) => (
            <SwiperSlide className="w-screen" key={index}>
              <img
                src={`${fileURL}/${car.poster}`}
                alt={`car ${index}`}
                className="w-screen"
                loading="lazy"
              />
              <div className="h-full flex items-center absolute left-[130px] top-0 mt-7">
                <div
                  className="flex py-3.5 px-5 bg-primaryColor text-white text-xs mr-5 font-semibold tracking-widest"
                  key={`link-${index}-1`}
                >
                  <Link to={`/car-list/${car.id}`}>MUA XE</Link>
                </div>
                <div
                  className="flex py-3.5 px-5 bg-primaryColor text-white text-xs font-semibold tracking-widest"
                  key={`link-${index}-2`}
                >
                  <Link to="/car-list">KHÁM PHÁ NGAY</Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <button className="swiper-button-prev absolute left-[60px] text-white font-extrabold button-navigation h-10 w-10 bg-white/[.2] border"></button>
          <button className="swiper-button-next absolute right-[60px] text-white font-extrabold text-xl button-navigation h-10 w-10 bg-white/[.2] border"></button>
        </Swiper>
      )}
    </>
  );
};

export default CarBannerCarousel;
