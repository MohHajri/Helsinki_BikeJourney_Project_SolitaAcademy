export const validateBikeTripForm = (formData) => {
  const errors = {};

  //already handled in bikeStationApi.js
  if (!formData.departureTime) {
    errors.departureTime = 'Departure time is required';
  }

  //already handled in bikeStationApi.js
  if (!formData.returnTime) {
    errors.returnTime = 'Return time is required';
  }

  // Validation for departure station ID
  if (!formData.departureStationId) {
    errors.departureStationId = 'Departure station ID is required';
  } else if (isNaN(formData.departureStationId)) {
    errors.departureStationId = 'Departure station ID must be a number';
  } else if (formData.departureStationId <= 0) {
    errors.departureStationId = 'Departure station ID must be a positive number';
  }

  // Validation for departure station name
  if (!formData.departureStationName) {
    errors.departureStationName = 'Departure station name is required';
  } else if (formData.departureStationName.length < 3) {
    errors.departureStationName = 'Departure station name must be at least 3 characters long';
  }

  // Validation for return station ID
  if (!formData.returnStationId) {
    errors.returnStationId = 'Return station ID is required';
  } else if (isNaN(formData.returnStationId)) {
    errors.returnStationId = 'Return station ID must be a number';
  } else if (formData.returnStationId <= 0) {
    errors.returnStationId = 'Return station ID must be a positive number';
  }

  // Validation for return station name
  if (!formData.returnStationName) {
    errors.returnStationName = 'Return station name is required';
  } else if (formData.returnStationName.length < 3) {
    errors.returnStationName = 'Return station name must be at least 3 characters long';
  }

  // Validation for covered distance
  if (!formData.coveredDistanceInMeter) {
    errors.coveredDistanceInMeter = 'Covered distance is required';
  } else if (isNaN(formData.coveredDistanceInMeter)) {
    errors.coveredDistanceInMeter = 'Covered distance must be a number';
  } else if (formData.coveredDistanceInMeter <= 0) {
    errors.coveredDistanceInMeter = 'Covered distance must be a positive number';
  }

  // Validation for duration
  if (!formData.durationInSec) {
    errors.durationInSec = 'Duration is required';
  } else if (isNaN(formData.durationInSec)) {
    errors.durationInSec = 'Duration must be a number';
  } else if (formData.durationInSec <= 0) {
    errors.durationInSec = 'Duration must be a positive number';
  }

  return errors;
};
