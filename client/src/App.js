import { Route, Routes } from 'react-router-dom';
import Home from './pages/homePage';
import Navbar from './components/navbar';
import Footer from './components/footer.jsx';
import AboutUs from './components/aboutUs';
import CohereBot from './components/coherebot';
import Register from './pages/register';
import FaqPage from './pages/faqPage';

export default function App() {
  return (
      <div className=
      "bg-black">
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/coherebot' element={<CohereBot />} />
            <Route path='/register' element={<Register />} />
            <Route path='/faq' element={<FaqPage />} />
        </Routes>
        <Footer />
      </div>
  );
}
