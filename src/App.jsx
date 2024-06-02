import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/layout/home/Home';
import Warranty from './components/service/WarrantyPolicy/main';
import MaintainService from './components/service/MaintainService/MaintainService';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route
            path="/dich-vu/dich-vu-bao-duong"
            element={<MaintainService />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
