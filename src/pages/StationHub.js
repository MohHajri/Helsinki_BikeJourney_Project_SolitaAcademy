import React, { useState, useEffect } from 'react';
import StationInfo from '../components/StationInfo';
// import MapView from '../components/MapView';
import TopStations from '../components/TopStations';
import Filter from '../components/Filter';
import { getStationDetailsByName, getStationDetailsWithDateFilter } from '../api/bikeStationsAPI';
import '../styles/StationHub.css';

const StationHub = () => {
  const [stationDetails, setStationDetails] = useState(null);
  const [selectedStationName, setSelectedStationName] = useState('');
  const [dateFilter, setDateFilter] = useState({ startDate: '', endDate: '' });
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

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
      <div className="StationHub__container">
        <div className="left-section">
          <Filter
            setSelectedStationName={setSelectedStationName}
            setDateFilter={setDateFilter}
            setShowResults={setShowResults}
            isShowResults={showResults}
            isLoading={loading}
          />
        </div>
        <div className="right-section">
          {showResults ? (
            <>
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
            </>
          ) : (
            <div className="StationHub-info">
              <p className="subheading">Our lists</p>
              <h2>What's Waiting?</h2>
              <p className="StationHub-info-text">
                Get ready to delve into the fascinating world of bike trips! With our station hub, you'll uncover valuable insights about
                your chosen station. Explore the station's name and address, discover the total number of journeys starting from and ending
                at the station, and gain a deeper understanding of the biking community's preferences. Dive into the data and uncover the
                average distance of trips starting from the station, as well as the top 5 most popular return and departure stations.
                With these valuable details at your fingertips, you'll gain a newfound appreciation for the vibrant biking ecosystem and
                be inspired to embark on your own two-wheeled adventures. Let the journey begin!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StationHub;
