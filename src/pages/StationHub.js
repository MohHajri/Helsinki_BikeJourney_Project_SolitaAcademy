import React, { useState, useEffect } from 'react';
import StationInfo from '../components/StationInfo';
// import MapView from '../components/MapView';
import TopStations from '../components/TopStations';
import Filter from '../components/Filter';
import { getStationDetailsByName, getStationDetailsWithDateFilter } from '../api/bikeStationsAPI';
import '../styles/StationHub.css';
import Navbar from '../components/Navbar';

const StationHub = () => {
  const [stationDetails, setStationDetails] = useState(null);
  const [selectedStationName, setSelectedStationName] = useState('');
  const [dateFilter, setDateFilter] = useState({ startDate: '', endDate: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchStationDetails() {
      setLoading(true);
      let details;
      if (dateFilter.startDate && dateFilter.endDate) {
        details = await getStationDetailsWithDateFilter(selectedStationName, dateFilter.startDate, dateFilter.endDate);
      } else {
        details = await getStationDetailsByName(selectedStationName);
      }
      if (details) {
        setStationDetails(details);
      }
      setLoading(false);
    }

    if (selectedStationName) {
      fetchStationDetails();
    }
  }, [selectedStationName, dateFilter]);

  const {
    stationName,
    stationAddress,
    departureStationAggregate,
    returnStationAggregate,
    topFiveDepartureStations,
    topFiveReturnStations,
  } = stationDetails || {};

  return (
    <>
        <Navbar></Navbar>
    <div className="StationHub__container">
      <div className="left-section">
        <Filter setSelectedStationName={setSelectedStationName} setDateFilter={setDateFilter} />
      </div>
      <div className="right-section">
        {loading && <div className="loading-text">Loading...</div>}
        {!selectedStationName && <div className="center-text">Please search for a station to see details</div>}
        {stationDetails && (
          <>
            <StationInfo
              stationName={stationName}
              stationAddress={stationAddress}
              departureStationAggregate={departureStationAggregate}
              returnStationAggregate={returnStationAggregate}
            />
            <TopStations
              topDepartureStations={topFiveDepartureStations}
              topReturnStations={topFiveReturnStations}
            />
          </>
        )}
      </div>
      </div>
    </>
  );
};

export default StationHub;
