import { Route, Routes } from 'react-router-dom';
import Home from './pages/homePage';
import Navbar from './components/navbar';

export default function App() {
  return (
      <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      </>
  );
}
