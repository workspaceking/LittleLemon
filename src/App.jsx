import { FindFood, Home, Login, BookingForm, Bookings } from './pages/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/findfood'} element={<FindFood />} />
        <Route path={'/bookingForm'} element={<BookingForm />} />
        <Route path={'/bookings'} element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
