import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import LandingPage from './pages/LandingPage';
import BikeTrips from './pages/TripHub';
import StationHub from './pages/StationHub';
import CreateBikeTripPage from './pages/CreateBikeTripPage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bike-trips" element={<BikeTrips />} />
        <Route path="/station-hub" element={<StationHub />} />
        <Route path="/create-bike-trip" element={<CreateBikeTripPage />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;
