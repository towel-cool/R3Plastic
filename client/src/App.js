import { Route, Routes } from 'react-router-dom';
import Footer from './components/f  ooter.jsx';
import Home from './pages/homePage';

export default function App() {
  return (
      <>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </>
  );
}
