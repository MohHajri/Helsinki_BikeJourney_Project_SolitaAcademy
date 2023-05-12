// src/BikeTrips.js
import React, { useState, useEffect } from 'react';
import bikeStationsAPI from '../api/bikeStationsAPI';
import '../style/BikeTrips.css';

function BikeTrips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    bikeStationsAPI
      .getAllTrips({
        pagenumber: 5,
        numberoftrips: 40,
        sortingcolumn: 'departureTime',
        isascending: true,
      })
      .then((data) => {
        setTrips(data.pageContent);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bike-trips-container">
      <h1>List of Bike Trips</h1>
      <ul className="bike-trips-list">
        {trips.map((trip) => (
          <li key={trip.id} className="bike-trip">
            <div className="bike-trip-details">
              <p className="bike-trip-station">Departure Station: {trip.departureStationName}</p>
              <p className="bike-trip-station">Return Station: {trip.returnStationName}</p>
              <p className="bike-trip-distance">Distance Covered (km): {trip.coveredDistanceInMeter / 1000}</p>
              <p className="bike-trip-duration">Duration (mins): {trip.durationInSec / 60}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BikeTrips;
