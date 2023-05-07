import { Route, Routes } from 'react-router-dom';
import Home from './pages/homePage';
import Navbar from './components/navbar';
import Footer from './components/footer.jsx';
import AboutUs from './components/aboutUs';
import CohereBot from './components/coherebot';

export default function App() {
  return (
      <div className=
      "bg-black">
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/coherebot' element={<CohereBot />} />
        </Routes>
        <Footer />
        
      </div>
  );
}
