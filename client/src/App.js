import { Route, Routes } from 'react-router-dom';
import Home from './pages/homePage';

export default function App() {
  return (
      <>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      </>
  );
}
