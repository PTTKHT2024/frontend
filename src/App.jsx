import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/layout/home/Home';
import MaintainService from './components/service/MaintainService/MaintainService';
import Header from './components/common/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/maintain" element={<MaintainService />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
