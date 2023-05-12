import React, { useState, useEffect } from 'react';
import StationInfo from './StationInfo';
import MapView from './MapView';
import TopStations from './TopStations';
import Filter from './Filter';
import { getStationDetailsByName, getStationDetailsWithDateFilter } from '../api/bikeStationsAPI';

const SingleStation = () => {
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
    <div>
      <Filter setSelectedStationName={setSelectedStationName} setDateFilter={setDateFilter} />
      {loading && <div>Loading...</div>}
      {stationDetails && (
        <React.Fragment>
          <StationInfo
            stationName={stationName}
            stationAddress={stationAddress}
            departureStationAggregate={departureStationAggregate}
            returnStationAggregate={returnStationAggregate}
          />
          <MapView address={stationAddress} />
          <TopStations
            topDepartureStations={topFiveDepartureStations}
            topReturnStations={topFiveReturnStations}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default SingleStation;
