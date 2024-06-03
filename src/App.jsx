import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/layout/home/Home';
import HybridTechnology from './components/service/HybridTechnology/HybridTechnology';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hybrid-technology" element={<HybridTechnology />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
