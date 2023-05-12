
import React from 'react';

const TopStations = ({ topDepartureStations, topReturnStations }) => {
  return (
    <div>
      <h2>Top Departure Stations</h2>
      <ol>
        {topDepartureStations.map((station, index) => (
          <li key={index}>{station}</li>
        ))}
      </ol>

      <h2>Top Return Stations</h2>
      <ol>
        {topReturnStations.map((station, index) => (
          <li key={index}>{station}</li>
        ))}
      </ol>
    </div>
  );
};

export default TopStations;
