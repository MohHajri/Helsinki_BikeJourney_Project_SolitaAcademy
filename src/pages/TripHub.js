// src/BikeTrips.js
import React, { useState, useEffect } from 'react';
import bikeStationsAPI from '../api/bikeStationsAPI';
import '../styles/TripHub.css';
import Navbar from '../components/Navbar';

function TripHub() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bike-trips-container">
        <h1 className="page-title">List of Bike Trips</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="bike-trips-list">
            {trips.map((trip) => (
              <div key={trip.id} className="bike-trip-card">
                <div className="bike-trip-details">
                  <p className="bike-trip-station">
                    <span className="info-label">Departure Station:</span> {trip.departureStationName}
                  </p>
                  <p className="bike-trip-station">
                    <span className="info-label">Return Station:</span> {trip.returnStationName}
                  </p>
                  <p className="bike-trip-distance">
                    <span className="info-label">Distance Covered:</span> {Math.round(trip.coveredDistanceInMeter / 1000)} km
                  </p>
                  <p className="bike-trip-duration">
                    <span className="info-label">Duration:</span> {Math.round(trip.durationInSec / 60)} mins
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default TripHub;
