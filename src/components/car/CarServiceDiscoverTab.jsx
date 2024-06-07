import React, { useState } from 'react';
import DiscoverTabSelect from '../common/DiscoverTabSelect';
import { services } from '../data/CarServiceDiscoverTabData';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

const CarServiceDiscoverTab = () => {
  const [serviceClass, setServiceClass] = useState('DỊCH VỤ SAU BÁN HÀNG');

  const tabs = [
    'DỊCH VỤ SAU BÁN HÀNG',
    'DỊCH VỤ GIA TĂNG',
    'SẢN PHẨM CHÍNH HÃNG',
  ];

  return (
    <section className="container relative">
      <DiscoverTabSelect
        tabs={tabs}
        currentTab={serviceClass}
        width={100}
        handleChangeTab={setServiceClass}
      />

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={3}
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
        {services
          .filter((service) => service.class === serviceClass)
          .map((service) => (
            <SwiperSlide className="w-screen px-[28px]" key={service.id}>
              <img
                src={service.image}
                alt="service_img"
                className="object-cover mb-6 h-[250px] w-full"
              />
              <h3 className="font-bold text-lg text-mainTitleColor mb-4">
                {service.title}
              </h3>
              <p className="line-clamp-3 mb-6">{service.description}</p>
              <Link
                to={`${service.route}`}
                className="uppercase text-primaryColor text-base font-bold group"
              >
                xem thêm{' '}
                <MdKeyboardArrowRight className="inline-block h-6 w-6 mb-0.5 group-hover:translate-x-1 transition" />
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
  );
};

export default CarServiceDiscoverTab;
