export const validateBikeTripForm = (formData) => {
  const errors = {};

  if (!formData.departureTime) {
    errors.departureTime = 'Departure time is required';
  }

  if (!formData.returnTime) {
    errors.returnTime = 'Return time is required';
  }

  if (!formData.departureStationId) {
    errors.departureStationId = 'Departure station ID is required';
  }

  if (!formData.departureStationName) {
    errors.departureStationName = 'Departure station name is required';
  }

  if (!formData.returnStationId) {
    errors.returnStationId = 'Return station ID is required';
  }

  if (!formData.returnStationName) {
    errors.returnStationName = 'Return station name is required';
  }

  if (!formData.coveredDistanceInMeter) {
    errors.coveredDistanceInMeter = 'Covered distance is required';
  }

  if (!formData.durationInSec) {
    errors.durationInSec = 'Duration is required';
  }

  // Additional validation rules
  // ...

  return errors;
};
