import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/layout/home/Home';
import Warranty from './components/service/WarrantyPolicy/main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/warranty" element={<Warranty />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
