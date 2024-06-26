import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  useLocation,
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
import { datas as introductionNavbarDatas } from './components/data/IntroductionNavbarData';
import { datas as localNavbarDatas } from './components/data/LocalNavbarData';
import { datas as contributrionNavbarDatas } from './components/data/ContributionNavbarData';
import { datas as newsNavbarDatas } from './components/data/NewsNavbarData';
import { datas as insuranceNavbarDatas } from './components/data/InsuranceNavbarDatas';

import OrderButton from './components/service/OrderButton';
import Tool from './components/common/Tool';
import { useEffect } from 'react';
import TSS from './components/technology/TSS/main';
import Community from './components/information/community/Community';
import TngaTechnology from './components/technology/tnga/TngaTechnology';
import CommunityContribution from './components/information/community/CommunityContribution';
import ToyotaFund from './components/information/community/ToyotaFund';

import Appointment from './components/form/appointment';
import Testdrive from './components/form/testdrive';
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
import PureElectricTechnology from './components/electrification/PureElectricTech';
import Policy from './components/common/Policy';
import TechHybrid from './components/electrification/tech-hybrid/main';
import CarList from './components/car/CarList';
import ViewCarDetail from './components/car/ViewCarDetail';
import ViewBlog from './components/admin/blog/ViewBlog';
import EditBlog from './components/admin/blog/EditBlog';
import AddCar from './components/admin/car/AddCar';
import CarManagement from './components/admin/car/CarManagement';
import UserLayout from './components/user/UserLayout';
import Profile from './components/user/Profile';
import SummonManagement from './components/admin/summon/SummonManagement';
import AddSummon from './components/admin/summon/AddSummon';
import AllSummon from './components/admin/summon/AllSummon';
import News from './components/news/News';
import ProductInsurance from './components/insurance/productInsurance';
import BlogDetail from './components/news/BlogDetail';

import IntroductionInsurance from './components/insurance/Introduction';
import IndemnifyService from './components/insurance/IndemnifyService';
import ViewSummon from './components/admin/summon/ViewSummon';

import UserManagement from './components/admin/user/UserManagement';
import AddUser from './components/admin/user/AddUser';
import EditUser from './components/admin/user/EditUser';
import ViewCar from './components/admin/car/ViewCar';
import CarEdit from './components/admin/car/CarEdit';
import ServiceManagement from './components/admin/form/ServiceManagement';

import Agency from './components/layout/agency/Agency';
import AgencyDetails from './components/layout/agency/AgencyDetail';
import SpecificationCar from './components/car/specification/main';

import PendingService from './components/admin/form/PendingService';
import ApproveService from './components/admin/form/ApproveService';
import ViewService from './components/admin/form/ViewService';
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
            <Route path="policy" element={<Policy />} />
            <Route path="test-drive" element={<Testdrive />} />
            <Route path="car-list" element={<CarList />} />

            <Route path="agency">
              <Route index element={<Agency />} />
              <Route path=":id" element={<AgencyDetails />} />
            </Route>

            <Route path="car-list/:id" element={<ViewCarDetail />} />
          </Route>

          <Route path="/specification" element={<SpecificationCarLayout />}>
            <Route path="specificationcar/:id" element={<SpecificationCar />} />
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
            <Route
              path="pure-electric-technology"
              element={<PureElectricTechnology />}
            />
            <Route path="techhybrid" element={<TechHybrid />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="blog">
              <Route index element={<BlogManagement />} />
              <Route path="add" element={<AddBlog />} />
              <Route path="view/:id" element={<ViewBlog />} />
              <Route path="edit/:id" element={<CarEdit />} />
            </Route>

            <Route path="summon" element={<SummonManagement />}>
              <Route index element={<AllSummon />} />
              <Route path="add" element={<AddSummon />} />
              <Route path="view/:id" element={<ViewSummon />} />
            </Route>

            <Route path="car">
              <Route index element={<CarManagement />} />
              <Route path="add" element={<AddCar />} />
              <Route path="view/:id" element={<ViewCar />} />
              <Route path="edit/:id" element={<CarEdit />} />
            </Route>

            <Route path="user">
              <Route index element={<UserManagement />} />
              <Route path="add" element={<AddUser />} />
              <Route path="edit/:id" element={<EditUser />} />
            </Route>
            <Route path="service">
              <Route index element={<ServiceManagement />} />
              <Route path="pending" element={<PendingService />} />
              <Route path="approved" element={<ApproveService />} />
              <Route path="view" element={<ViewService />} />
            </Route>
          </Route>

          <Route path="/user" element={<UserLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="appointment" element={<Appointment />} />
          </Route>

          <Route path="/technology" element={<TechnologyLayout />}>
            <Route path="hybrid" element={<HybridTechnology />} />
            <Route path="tss" element={<TSS />} />
            <Route path="tnga" element={<TngaTechnology />} />
          </Route>

          <Route path="/insurance" element={<InsuranceLayout />}>
            <Route
              path="introduction-insurance"
              element={<IntroductionInsurance />}
            />
            <Route path="product-insurance" element={<ProductInsurance />} />
            <Route path="indemnify-service" element={<IndemnifyService />} />
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

          <Route path="news" element={<NewsLayout />}>
            <Route
              path="product"
              element={<News categoryToShow="SẢN PHẨM" />}
            />
            <Route path="deal" element={<News categoryToShow="KHUYẾN MÃI" />} />
            <Route path="society" element={<News categoryToShow="XÃ HỘI" />} />
            <Route
              path="other-information"
              element={<News categoryToShow="THÔNG TIN KHÁC" />}
            />
            <Route
              path="sup-information"
              element={<News categoryToShow="THÔNG TIN BỔ TRỢ" />}
            />
            <Route path="blog/:id" element={<BlogDetail />} />
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

function InsuranceLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Navbar datas={insuranceNavbarDatas} />
      <Outlet />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

function SpecificationCarLayout() {
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

function NewsLayout() {
  const location = useLocation();
  const isBlogDetailPage = location.pathname.includes('/news/blog/');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      {!isBlogDetailPage && <Navbar datas={newsNavbarDatas} />}
      <ScrollToTopButton />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
