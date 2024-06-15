import React from 'react';
import { Outlet } from 'react-router';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Tool from '../common/Tool';
import ScrollToTopButton from '../common/ScrollToTopButton';

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTopButton />
      <Tool />
      <Footer />
    </>
  );
};

export default UserLayout;
