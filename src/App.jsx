import './App.css';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
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
import { datas as introductionNavbarDatas } from './components/data/IntroductionNavbarData';
import { datas as localNavbarDatas } from './components/data/LocalNavbarData';
import { datas as contributrionNavbarDatas } from './components/data/ContributionNavbarData';

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
import GlobalPhilosophy from './components/information/philosophy/GlobalPhilosophy';
import Vision from './components/information/philosophy/Vision';
import VisionPhilosophy from './components/information/philosophy/VisionPhilosophy';
import Way from './components/information/philosophy/Way';
import Cooperate from './components/information/localization/Cooperate';
import Conduct from './components/information/localization/Conduct';
import Support from './components/information/localization/Support';
import ScrollToTopButton from './components/common/ScrollToTopButton';
import ElectrificationCar from './components/electrification/ElectrificationCar';
import Introduction from './components/information/Introduction/main';
import TrafficSafety from './components/information/community/TrafficSafety';
import EnvironmentalProtection from './components/information/community/EnvironmentalProtection';
import HRDevelopment from './components/information/community/HRDevelopment';
import SocialCulture from './components/information/community/SocialCulture';
import AdminLayout from './components/admin/AdminLayout';
import BlogManagement from './components/admin/blog/BlogManagement';
import AddBlog from './components/admin/blog/AddBlog';
import Feedback from './components/information/localization/feedback';

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

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="blog">
              <Route path="add" element={<AddBlog />} />
            </Route>
          </Route>

          <Route path="/technology" element={<TechnologyLayout />}>
            <Route path="hybrid" element={<HybridTechnology />} />
            <Route path="tss" element={<TSS />} />
            <Route path="tnga" element={<TngaTechnology />} />
          </Route>

          <Route path="/information" element={<InformationLayout />}>
            <Route path="community" element={<CommonLayout />}>
              <Route index element={<Community />} />
              <Route path="contribution" element={<ContributionLayout />}>
                <Route index element={<CommunityContribution />} />
                <Route path="traffic-safety" element={<TrafficSafety />} />
                <Route
                  path="environmental-protection"
                  element={<EnvironmentalProtection />}
                />
                <Route
                  path="human-resource-development"
                  element={<HRDevelopment />}
                />
                <Route path="social-culture" element={<SocialCulture />} />
              </Route>
              <Route path="fund" element={<ToyotaFund />} />
            </Route>

            <Route path="company" element={<IntroductionLayout />}>
              <Route path="introduction" element={<Introduction />} />
              <Route path="philosophy">
                <Route index element={<Philosophy />} />

                <Route
                  path="global-philosophy"
                  element={<GlobalPhilosophy />}
                />
                <Route path="vision" element={<Vision />} />

                <Route
                  path="vision-philosophy"
                  element={<VisionPhilosophy />}
                />
                <Route path="way" element={<Way />} />
              </Route>
            </Route>

            <Route path="local" element={<LocalLayout />}>
              <Route path="cooperate" element={<Cooperate />} />
              <Route path="conduct" element={<Conduct />} />
              <Route path="support" element={<Support />} />
              <Route path="feedback" element={<Feedback />} />
            </Route>
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

function LocalLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar datas={localNavbarDatas} />
      <Outlet />
    </>
  );
}

function ContributionLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar datas={contributrionNavbarDatas} />
      <Outlet />
    </>
  );
}

function IntroductionLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar datas={introductionNavbarDatas} />
      <Outlet />
    </>
  );
}

function CommonLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Outlet />;
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
