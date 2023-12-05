import {
  FindFood,
  Home,
  Login,
  BookingPage,
  Bookings,
  BookingConfirmation,
} from './pages/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { DataProvider } from './store/index';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/findfood'} element={<FindFood />} />
          <Route path={'/bookingForm'} element={<BookingPage />} />
          <Route path={'/bookings'} element={<Bookings />} />
          <Route path={'/confirmBooking'} element={<BookingConfirmation />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
