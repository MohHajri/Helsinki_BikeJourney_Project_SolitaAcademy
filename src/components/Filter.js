
import React, { useState, useEffect } from 'react';
const Filter = ({ setSelectedStationName, setDateFilter, setShowResults, isShowResults, isLoading }) => {
  const [stationName, setStationName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [titleText, setTitleText] = useState('');

  useEffect(() => {
    if (isLoading) {
      setTitleText('Loading...');
    } else if (isShowResults) {
      setTitleText('Scroll up to see the result of your search');
    } else {
      setTitleText("Let's Explore the Awesome Helsinki Bike Trips");
    }
  }, [isLoading, isShowResults]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedStationName(stationName);
    let formattedStartDate = startDate ? startDate + ' 00:00:00' : '1970-01-01 00:00:00';
    let formattedEndDate = endDate ? endDate + ' 23:59:59' : '2099-12-31 23:59:59';
    setDateFilter({ startDate: formattedStartDate, endDate: formattedEndDate });
    setShowResults(true);
  };

  return (
    <>
      <div className="parallax-bg"></div>
      <form onSubmit={handleSubmit} className="filter-form">
        <div className="filter-title">
          <h2>{titleText}</h2>
        </div>
        <div className="search-container">
          <input
            id="stationName"
            type="text"
            value={stationName}
            onChange={(e) => setStationName(e.target.value)}
            className="filter-input"
            placeholder="Search for a station..."
          />
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
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default Filter;
