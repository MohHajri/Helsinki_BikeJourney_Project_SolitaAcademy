import React from 'react';

const TripDetails = ({ departureStation, returnStation, coveredDistance, duration }) => {
  return (
    <div className="bike-trip-details">
      <p className="bike-trip-station">
        <span className="info-label">Departure Station:</span> {departureStation}
      </p>
      <p className="bike-trip-station">
        <span className="info-label">Return Station:</span> {returnStation}
      </p>
      <p className="bike-trip-distance">
        <span className="info-label">Distance Covered:</span> {Math.round(coveredDistance / 1000)} km
      </p>
      <p className="bike-trip-duration">
        <span className="info-label">Duration:</span> {Math.round(duration / 60)} mins
      </p>
    </div>
  );
};

export default TripDetails;
