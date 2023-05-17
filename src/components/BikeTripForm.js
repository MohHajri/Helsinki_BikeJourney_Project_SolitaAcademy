import React, { useState } from 'react';
import { validateBikeTripForm } from '../utils/validateBikeTripForm';
import SavedBikeTrip from './SavedBikeTrip';
import InputField from './InputField';
import '../styles/BikeTripForm.css';
import { saveBikeTrip } from '../api/bikeStationsAPI'; 
const fieldConfig = [
  {
    label: 'Departure Time',
    id: 'departureTime',
    type: 'datetime-local',
  },
  {
    label: 'Return Time',
    id: 'returnTime',
    type: 'datetime-local',
  },
  {
    label: 'Departure Station ID',
    id: 'departureStationId',
    type: 'text',
  },
  {
    label: 'Departure Station Name',
    id: 'departureStationName',
    type: 'text',
  },
  {
    label: 'Return Station ID',
    id: 'returnStationId',
    type: 'text',
  },
  {
    label: 'Return Station Name',
    id: 'returnStationName',
    type: 'text',
  },
  {
    label: 'Covered Distance (in meters)',
    id: 'coveredDistanceInMeter',
    type: 'text',
  },
  {
    label: 'Duration (in seconds)',
    id: 'durationInSec',
    type: 'text',
  },
];

const BikeTripForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [savedTrip, setSavedTrip] = useState(null);
  const [showSavedTrip, setShowSavedTrip] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '',
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateBikeTripForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const savedBikeTrip = await saveBikeTrip(formData);
      if (savedBikeTrip) {
        setSavedTrip(savedBikeTrip);
        onSubmit(savedBikeTrip);
        setFormData({});
        setErrors({});
        setShowSavedTrip(true);
      } else {
        setErrors({ submitError: 'Error saving bike trip' });
      }
    } catch (error) {
      setErrors({ submitError: 'Error saving bike trip' });
    }
  };

  return (
    <div className="bike-body">
      <div className="form-container">
        <div className="form-header">
          <h2>Fill the form. It's easy.</h2>
        </div>
        <form onSubmit={handleSubmit} className="bike-form">
          {fieldConfig.map(({ label, id, type }) => (
            <InputField
              key={id}
              label={label}
              id={id}
              type={type}
              value={formData[id] || ''}
              onChange={handleChange}
              error={errors[id] || ''}
            />
          ))}
          {errors && <p className="error-message">{errors.submitError}</p>}
          <div className="form-group button-container">
            <button type="submit">Save Bike Trip</button>
          </div>
        </form>
      </div>
      {showSavedTrip && <SavedBikeTrip bikeTrip={savedTrip} />}
    </div>
  );
};

export default BikeTripForm;
