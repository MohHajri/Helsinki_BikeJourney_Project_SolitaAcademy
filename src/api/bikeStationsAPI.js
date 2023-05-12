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