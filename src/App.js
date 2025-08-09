
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import About from './pages/About';
import Footer from './components/footer/Footer';
import OwnerDash from './pages/Ownerdashboard/OwnerDash';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<OwnerDash />} />
      </Routes>
       <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
