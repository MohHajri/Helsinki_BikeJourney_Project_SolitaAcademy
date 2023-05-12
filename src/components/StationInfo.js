
import React from 'react';

const StationInfo = ({
  stationName,
  stationAddress,
  departureStationAggregate,
  returnStationAggregate,
}) => {
  return (
    <div>
      <h1>Station Name: {stationName}</h1>
      <p>Station Address: {stationAddress}</p>
      <p>
        Total journeys starting from the station: {departureStationAggregate.noOfStartingTrips}
      </p>
      <p>
        Total journeys ending at the station: {returnStationAggregate.noOfEndingTrips}
      </p>
      <p>
        Average distance of a journey starting from the station:{' '}
         {departureStationAggregate.avgDistanceOfStartingTrips ? departureStationAggregate.avgDistanceOfStartingTrips.toFixed(2) : '-'} km
      </p>
      <p>
        Average distance of a journey ending at the station:{' '}
        {returnStationAggregate.avgDistanceOfEndingTrips ? returnStationAggregate.avgDistanceOfEndingTrips.toFixed(2) : '-'} km
      </p>
    </div>
  );
};


export default StationInfo;
