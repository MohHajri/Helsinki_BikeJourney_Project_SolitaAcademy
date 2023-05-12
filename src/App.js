import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';import LandingPage from './pages/LandingPage';
import BikeTrips from './pages/TripHub';
import StationHub from './pages/StationHub';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bike-trips" element={<BikeTrips />} />
        <Route path="/station-hub" element={<StationHub />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     </Router>
      </>
  );
}

export default App;
