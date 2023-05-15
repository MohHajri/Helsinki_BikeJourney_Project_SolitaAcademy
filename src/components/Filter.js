import React, { useState } from 'react';
import '../styles/Filter.css';

const Filter = ({ setSelectedStationName, setDateFilter }) => {
  const [stationName, setStationName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedStationName(stationName);
    let formattedStartDate = startDate ? startDate + ' 00:00:00' : '1970-01-01 00:00:00';
    let formattedEndDate = endDate ? endDate + ' 23:59:59' : '2099-12-31 23:59:59';
    setDateFilter({ startDate: formattedStartDate, endDate: formattedEndDate });
  };

  return (
    <form onSubmit={handleSubmit} className="filter-form">
      <div className="search-container">
        <input
          id="stationName"
          type="text"
          value={stationName}
          onChange={(e) => setStationName(e.target.value)}
          className="filter-input"
          placeholder="Search for a station..."
        />
        <button type="submit" className="search-button">
         Search
        </button>
      </div>
      <div className="date-filter">
        <input
          id="startDate"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="filter-date-input"
        />
        <input
          id="endDate"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="filter-date-input"
        />
      </div>
    </form>
  );
};

export default Filter;
