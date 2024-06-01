import React from 'react';
import Header from '../../common/Header';
import CarBannerCarousel from '../../car/CarBannerCarousel';
import MainTitle from '../../common/MainTitle';
import CarDiscoverTab from '../../car/CarDiscoverTab';
import ServiceIcon from './ServiceIcon';


const Home = () => {
  return (
    <>
      <Header />
      <CarBannerCarousel />
      <MainTitle title="KHÁM PHÁ CÁC DÒNG XE TOYOTA" />
      <CarDiscoverTab />
      <ServiceIcon />
      <MainTitle title="DỊCH VỤ" />
    </>
  );
};

export default Home;
