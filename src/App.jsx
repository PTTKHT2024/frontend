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
import HybridTechnology from './components/technology/hybrid/HybridTechnology';
import Login from './components/auth/Login';
import Navbar from './components/common/Navbar';
import { datas as serviceNavbarDatas } from './components/data/ServiceNavbarData';
import { datas as technologyNavbarDatas } from './components/data/TechnologyNavbarData';
import OrderButton from './components/service/OrderButton';
import Tool from './components/common/Tool';
import { useEffect } from 'react';
import TSS from './components/technology/TSS/main';
import Community from './components/information/community/Community';
import TngaTechnology from './components/technology/tnga/TngaTechnology';
import CommunityContribution from './components/information/community/CommunityContribution';
import ToyotaFund from './components/information/community/ToyotaFund';

import Appointment from './components/form/appointment';
import Philosophy from './components/information/philosophy/Philosophy';
import Cooperate from './components/information/localization/Cooperate';
import Conduct from './components/information/localization/Conduct';
import ScrollToTopButton from './components/common/ScrollToTopButton';
import ElectrificationCar from './components/electrification/ElectrificationCar';
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
            <Route path="appointment" element={<Appointment />} />
          </Route>

          <Route path="/service" element={<ServiceLayout />}>
            <Route path="maintain" element={<MaintainService />} />
            <Route path="beauty" element={<></>} />
            <Route path="warranty" element={<Warranty />} />
            <Route path="repair" element={<RepairService />} />
            <Route path="inspect" element={<RepairService />} />
          </Route>

          <Route path="/electrification" element={<ElectrificationLayout />}>
            <Route path="electrified-car" element={<ElectrificationCar />} />
          </Route>

          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            {/* <Route path="dashboard" element={<AdminDashboard />} /> */}
            {/* <Route path="users" element={<AdminUsers />} /> */}
          </Route>

          <Route path="/technology" element={<TechnologyLayout />}>
            <Route path="hybrid" element={<HybridTechnology />} />
            <Route path="tss" element={<TSS />} />
            <Route path="tnga" element={<TngaTechnology />} />
          </Route>

          <Route path="/information" element={<InformationLayout />}>
            <Route path="community" element={<Community />} />
            <Route path="contribution" element={<CommunityContribution />} />
            <Route path="fund" element={<ToyotaFund />} />
            <Route path="philosophy" element={<Philosophy />} />
            <Route path="cooperate" element={<Cooperate />} />
            <Route path="conduct" element={<Conduct />} />
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
      <Tool />
      <ScrollToTopButton />
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
      <Header />
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
      <ScrollToTopButton />
      <Footer />
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

function TechnologyLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Navbar datas={technologyNavbarDatas} />
      <Outlet />;
      <ScrollToTopButton />
      <Tool />
      <Footer />
    </>
  );
}

function InformationLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

function ElectrificationLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
export default App;
