import './App.css';
import '../src/assets/css/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Login from './pages/Login';
import Join from './pages/Join';
import BestItem from './pages/BestItem';
import SaleItem from './pages/SaleItem';
import FashionItem from './pages/FashionItem';
import LivingItem from './pages/LivingItem';
import NewItem from './pages/NewItem';
import SpectialItem from './pages/SpectialItem';
import Notfound from './pages/Notfound';

function App() {
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header/> 
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/sub/best" element={<BestItem />} />
          <Route path="/sub/sale" element={<SaleItem />} />
          <Route path="/sub/fashion" element={<FashionItem />} />
          <Route path="/sub/living" element={<LivingItem />} />
          <Route path="/sub/newitem" element={<NewItem />} />
          <Route path="/sub/spectialitem" element={<SpectialItem />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
