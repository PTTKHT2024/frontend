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
import Login from './components/auth/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/vr-suv" element={<SUVShowroom />} />
          <Route path="/vr-sedan" element={<SedanShowroom />} />
          <Route path="/show-rooms" element={<VRShowroom />} />

          <Route path="/service" element={<ServiceLayout />}>
            <Route path="maintain" element={<MaintainService />} />
            <Route path="warranty" element={<Warranty />} />
            <Route path="repair" element={<RepairService />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

function ServiceLayout() {
  return <Outlet />;
}

export default App;
