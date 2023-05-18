
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
      <table className="tripInfo">
        <tbody>
          <tr>
            <th className="label">Trip ID:</th>
            <td>{bikeTrip.id}</td>
          </tr>
          <tr>
            <th className="label">Departure Time:</th>
            <td>{departureTime}</td>
          </tr>
          <tr>
            <th className="label">Return Time:</th>
            <td>{returnTime}</td>
          </tr>
          <TripDetails
            departureStation={bikeTrip.departureStationName}
            returnStation={bikeTrip.returnStationName}
            coveredDistance={bikeTrip.coveredDistanceInMeter}
            duration={bikeTrip.durationInSec}
          />
        </tbody>
      </table>
    </div>
  );
};

export default SavedBikeTrip;

