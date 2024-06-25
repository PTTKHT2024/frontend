import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Tool from '../common/Tool';
import ScrollToTopButton from '../common/ScrollToTopButton';
import useCheckRole from '../hooks/useCheckRole';
import Loading from '../common/Loading';

const UserLayout = () => {
  const role = useCheckRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== null && role !== 'USER') {
      navigate('/'); 
      alert('Vui lòng đăng nhập để sử dụng chức năng này');
    }
  }, [role, navigate]);

  if (role === null) {
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
