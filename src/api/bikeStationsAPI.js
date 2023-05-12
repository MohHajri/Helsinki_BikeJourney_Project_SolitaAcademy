import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getAllTrips = async (params) => {
  try {
    const response = await api.get('/getalltrips', {
      params,
    });
    return response.data;
  } catch (error) {
    console.error('Error getting all trips:', error);
    return null;
  }
};

export const getStationDetailsByName = async (stationName) => {
  try {
    const response = await api.get('/getstationdetailsbyname', {
      params: {
        stationname: stationName,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting station details by name:', error);
    return null;
  }
};

export const getStationDetailsWithDateFilter = async (stationName, startDate, endDate) => {
  try {
    const response = await api.get('/getstationdetailsbyname', {
      params: {
        stationname: stationName,
        startDate,
        endDate,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting station details with date filter:', error);
    return null;
  }
};

export const getCoordinatesForAddress = async (address) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=YOUR_API_KEY`
    );
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      return [lat, lng];
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting coordinates:', error);
    return null;
  }
};

const bikeStationsAPI = {
  getAllTrips,
  getStationDetailsByName,
  getStationDetailsWithDateFilter,
  getCoordinatesForAddress,
};

export default bikeStationsAPI;