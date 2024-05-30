import React from 'react';
import Header from '../../common/Header';
import CarBannerCarousel from '../../car/CarBannerCarousel';
import MainTitle from '../../common/MainTitle';
import CarDiscoverTab from '../../car/CarDiscoverTab';
import ServiceIcon from './ServiceIcon';
import CarServiceDiscoverTab from '../../car/CarServiceDiscoverTab';

const Home = () => {
  return (
    <>
      <CarBannerCarousel />
      <MainTitle title="KHÁM PHÁ CÁC DÒNG XE TOYOTA" />
      <CarDiscoverTab />
      <ServiceIcon />
      <MainTitle title="DỊCH VỤ" />
      <CarServiceDiscoverTab />
      <MainTitle title="CÔNG NGHỆ" mt={180} />
    </>
  );
};

export default Home;
