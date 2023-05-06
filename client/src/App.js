import { Route, Routes } from 'react-router-dom';
import Home from './pages/homePage';
import Navbar from './components/navbar';
import Footer from './components/footer.jsx';
import AboutUs from './components/aboutUs';

export default function App() {
  return (
      <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
        <Footer />
        
      </>
  );
}
