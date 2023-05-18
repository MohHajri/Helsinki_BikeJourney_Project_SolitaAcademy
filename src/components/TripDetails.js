import React from 'react';
import '../styles/TripHub.css';

const TripDetails = ({ departureStation, returnStation, coveredDistance, duration }) => {
  return (
    <div className="trip-details">
      <div className="station-info">
        <p className="station-label">Departure Station</p>
        <p className="station-name">{departureStation}</p>
      </div>
      <div className="station-info">
        <p className="station-label">Return Station</p>
        <p className="station-name">{returnStation}</p>
      </div>
      <div className="trip-info">
        <p className="info-label">Distance Covered:</p>
        <p className="info-value">{Math.round(coveredDistance / 1000)} km</p>
      </div>
      <div className="trip-info">
        <p className="info-label">Duration:</p>
        <p className="info-value">{Math.round(duration / 60)} mins</p>
      </div>
    </div>
  );
};

export default TripDetails;
