import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  HashRouter,
} from 'react-router-dom';
import Home from './components/layout/home/Home';
import MaintainService from './components/service/MaintainService/MaintainService';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SUVShowroom from './components/layout/showroom/SUVShowroom';
import VRShowroom from './components/layout/showroom/VRShowroom';
import SedanShowroom from './components/layout/showroom/SedanShowroom';
import Warranty from './components/service/WarrantyPolicy/main';
import RepairService from './components/service/RepairService/RepairService';
import Login from './components/auth/Login';
import Navbar from './components/common/Navbar';
import { datas as serviceNavbarDatas } from './components/data/ServiceNavbarData';
import OrderButton from './components/service/OrderButton';
import Tool from './components/common/Tool';
import { useEffect } from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="vr-suv" element={<SUVShowroom />} />
            <Route path="vr-sedan" element={<SedanShowroom />} />
            <Route path="show-rooms" element={<VRShowroom />} />

            {/* Service route */}
            <Route path="service" element={<ServiceLayout />}>
              <Route path="maintain" element={<MaintainService />} />
              <Route path="beauty" element={<></>} />
              <Route path="warranty" element={<Warranty />} />
              <Route path="repair" element={<RepairService />} />
            </Route>
          </Route>

          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            {/* <Route path="dashboard" element={<AdminDashboard />} /> */}
            {/* <Route path="users" element={<AdminUsers />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function ServiceLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar datas={serviceNavbarDatas} />
      <div>
        <img
          className="mb-sectionMargin_1 h-[60vh] w-full mt-[96px] object-cover"
          src="https://www.toyota.com.vn/media/hb0bvfz3/008a7694.jpg"
          alt=""
        />
      </div>
      <Outlet />
      <Tool />
      <OrderButton />
    </>
  );
}

function AdminLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
