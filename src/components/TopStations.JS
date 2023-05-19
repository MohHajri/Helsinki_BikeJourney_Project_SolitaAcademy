import React from 'react';

const TopStations = ({ topDepartureStations, topReturnStations }) => {
  return (
    <div className="top-stations-container">
      <h2 className="top-stations-heading">Top Departure Stations</h2>
      <ol className="top-stations-list">
        {topDepartureStations.map((station, index) => (
          <li key={index} className="top-stations-item">{station}</li>
        ))}
      </ol>

      <h2 className="top-stations-heading">Top Return Stations</h2>
      <ol className="top-stations-list">
        {topReturnStations.map((station, index) => (
          <li key={index} className="top-stations-item">{station}</li>
        ))}
      </ol>
    </div>
  );
};

export default TopStations;
