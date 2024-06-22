import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Tool from '../common/Tool';
import ScrollToTopButton from '../common/ScrollToTopButton';
import useIsActive from '../hooks/useIsActive';

const UserLayout = () => {
  const navigate = useNavigate();
  const active = useIsActive();

  useEffect(() => {
    if (!active) {
      alert('Vui lòng đăng nhập để sử dụng chức năng này');
      navigate('/');
    }
  }, [active, navigate]);

  if (!active) {
    return null;
  }
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
