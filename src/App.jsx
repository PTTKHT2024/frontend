import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/layout/home/Home';
import RepairService from './components/service/RepairService/RepairService-2';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repair-service" element={<RepairService />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
