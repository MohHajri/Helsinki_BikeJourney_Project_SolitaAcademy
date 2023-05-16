import React from 'react';
import '../styles/SavedBikeTrip.css';

const SavedBikeTrip = ({ bikeTrip }) => {
  if (!bikeTrip) {
    return null;
  }

  // Convert the timestamps to a readable format
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
          <tr>
            <th className="label">Departure Station ID:</th>
            <td>{bikeTrip.departureStationId}</td>
          </tr>
          <tr>
            <th className="label">Departure Station Name:</th>
            <td>{bikeTrip.departureStationName}</td>
          </tr>
          <tr>
            <th className="label">Return Station ID:</th>
            <td>{bikeTrip.returnStationId}</td>
          </tr>
          <tr>
            <th className="label">Return Station Name:</th>
            <td>{bikeTrip.returnStationName}</td>
          </tr>
          <tr>
            <th className="label">Covered Distance:</th>
            <td>{bikeTrip.coveredDistanceInMeter} meters</td>
          </tr>
          <tr>
            <th className="label">Duration:</th>
            <td>{Math.round(bikeTrip.durationInSec / 60)} minutes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SavedBikeTrip;
