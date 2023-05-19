import React from 'react';

const StationInfo = ({
  stationName,
  stationAddress,
  departureStationAggregate,
  returnStationAggregate,
}) => {
  return (
    <div className="station-info-container">
      <div className="station-info-header">
        <h1 className="station-info-heading">{stationName}</h1>
        <p className="station-info-address">{stationAddress}</p>
      </div>
      <div className="station-info-details">
        <div className="station-info-item">
          <span className="station-info-label">Total Departures</span>
          <span className="station-info-value">{departureStationAggregate.noOfStartingTrips}</span>
        </div>
        <div className="station-info-item">
          <span className="station-info-label">Total Arrivals</span>
          <span className="station-info-value">{returnStationAggregate.noOfEndingTrips}</span>
        </div>
        <div className="station-info-item">
          <span className="station-info-label">Avg. Departure Distance</span>
          <span className="station-info-value">
            {departureStationAggregate.avgDistanceOfStartingTrips ? departureStationAggregate.avgDistanceOfStartingTrips.toFixed(2) : '-'}
          </span>
        </div>
        <div className="station-info-item">
          <span className="station-info-label">Avg. Arrival Distance</span>
          <span className="station-info-value">
            {returnStationAggregate.avgDistanceOfEndingTrips ? returnStationAggregate.avgDistanceOfEndingTrips.toFixed(2) : '-'}
          </span>
        </div>
      </div>
      </div>
  );
};

export default StationInfo;
