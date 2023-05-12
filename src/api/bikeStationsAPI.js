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

const bikeStationsAPI = {
  getAllTrips,
  getStationDetailsByName,
  getStationDetailsWithDateFilter,
};

export default bikeStationsAPI;