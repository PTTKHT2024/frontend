import React, { useEffect, useLayoutEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ScrollToTopButton from '../common/ScrollToTopButton';
import useCheckRole from '../hooks/useCheckRole';
import Loading from '../common/Loading';
import useIsActive from '../hooks/useIsActive';

const UserLayout = () => {
  const data = localStorage.getItem('data');

  useLayoutEffect(() => {
    if (!data) {
      navigate('/');
      alert('Vui lòng đăng nhập để sử dụng chức năng này');
    }
  }, []);

  if (data === null) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default UserLayout;
