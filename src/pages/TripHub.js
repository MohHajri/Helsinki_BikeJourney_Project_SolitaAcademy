
import React, { useState, useEffect } from 'react';
import bikeStationsAPI from '../api/bikeStationsAPI';
import '../styles/TripHub.css';
import TripDetails from '../components/TripDetails';

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
      <div className="bike-trips-container">
        <h1 className="page-title">List of Bike Trips</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="bike-trips-list">
            {trips.map((trip) => (
              <div key={trip.id} className="bike-trip-card">
                <TripDetails
                  departureStation={trip.departureStationName}
                  returnStation={trip.returnStationName}
                  coveredDistance={trip.coveredDistanceInMeter}
                  duration={trip.durationInSec}
                />
              </div>
            ))}
          </div>
        )}
      </div>
  );
}

export default TripHub;

