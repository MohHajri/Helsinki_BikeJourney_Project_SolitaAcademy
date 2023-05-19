
import React from 'react';
import '../styles/SavedBikeTrip.css';
import TripDetails from './TripDetails';

const SavedBikeTrip = ({ bikeTrip }) => {
  if (!bikeTrip) {
    return null;
  }

  const departureTime = new Date(bikeTrip.departureTime).toLocaleString();
  const returnTime = new Date(bikeTrip.returnTime).toLocaleString();

  return (
    <div className="savedBikeTrip">
      <h2 className="title">Saved Bike Trip</h2>
      <div className="tripInfo">
           <div className="station-info">
              <p className="station-label">Trip ID </p>
              <p className="station-name">{bikeTrip.id}</p>
            </div>
            <div className="station-info">
                <p className="station-label">Departure Time </p>
                <p className="station-name">{departureTime}</p>
            </div>
            <div className="station-info">
                <p className="station-label">Return Time </p>
                <p className="station-name">{returnTime}</p>
            </div>
          <TripDetails
            departureStation={bikeTrip.departureStationName}
            returnStation={bikeTrip.returnStationName}
            coveredDistance={bikeTrip.coveredDistanceInMeter}
            duration={bikeTrip.durationInSec}
          />
      </div>
    </div>
  );
};

export default SavedBikeTrip;

