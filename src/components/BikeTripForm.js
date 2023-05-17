import React, { useState } from 'react';
import bikeStationsAPI from '../api/bikeStationsAPI';
import { validateBikeTripForm } from '../utils/validateBikeTripForm';
import SavedBikeTrip from './SavedBikeTrip';
import '../styles/BikeTripForm.css';
import InputField from './InputField';

const BikeTripForm = ({ onSubmit }) => {
  const [departureTime, setDepartureTime] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [departureStationId, setDepartureStationId] = useState('');
  const [departureStationName, setDepartureStationName] = useState('');
  const [returnStationId, setReturnStationId] = useState('');
  const [returnStationName, setReturnStationName] = useState('');
  const [coveredDistanceInMeter, setCoveredDistanceInMeter] = useState('');
  const [durationInSec, setDurationInSec] = useState('');
  const [errors, setErrors] = useState({});
  const [savedTrip, setSavedTrip] = useState(null);
  const [showSavedTrip, setShowSavedTrip] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      departureTime,
      returnTime,
      departureStationId,
      departureStationName,
      returnStationId,
      returnStationName,
      coveredDistanceInMeter,
      durationInSec,
    };

    const validationErrors = validateBikeTripForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const savedBikeTrip = await bikeStationsAPI.saveBikeTrip(formData);

      if (savedBikeTrip) {
        setSavedTrip(savedBikeTrip);
        onSubmit(savedBikeTrip);
        setDepartureTime('');
        setReturnTime('');
        setDepartureStationId('');
        setDepartureStationName('');
        setReturnStationId('');
        setReturnStationName('');
        setCoveredDistanceInMeter('');
        setDurationInSec('');
        setErrors({});
        setShowSavedTrip(true);
      } else {
        setErrors('Error saving bike trip');
      }
    } catch (error) {
      setErrors('Error saving bike trip');
    }
  };

  return (
  <div className="bike-body">
    <div className="form-container">
      <div className="form-header">
        <h2>Fill the form. <br /> It's easy.</h2>
      </div>
      <form onSubmit={handleSubmit} className="bike-form">
        <InputField
          label="Departure Time"
          id="departureTime"
          type="datetime-local"
          value={departureTime}
          onChange={(e) => {
            setDepartureTime(e.target.value);
            setErrors({ ...errors, departureTime: '' });
          }}
          error={errors.departureTime}
        />
        <InputField
          label="Return Time"
          id="returnTime"
          type="datetime-local"
          value={returnTime}
          onChange={(e) => {
            setReturnTime(e.target.value);
            setErrors({ ...errors, returnTime: '' });
          }}
          error={errors.returnTime}
        />
        <InputField
          label="Departure Station ID"
          id="departureStationId"
          type="text"
          value={departureStationId}
          onChange={(e) => {
            setDepartureStationId(e.target.value);
            setErrors({ ...errors, departureStationId: '' });
          }}
          error={errors.departureStationId}
        />
        <InputField
          label="Departure Station Name"
          id="departureStationName"
          type="text"
          value={departureStationName}
          onChange={(e) => {
            setDepartureStationName(e.target.value);
            setErrors({ ...errors, departureStationName: '' });
          }}
          error={errors.departureStationName}
        />
        <InputField
          label="Return Station ID"
          id="returnStationId"
          type="text"
          value={returnStationId}
          onChange={(e) => {
            setReturnStationId(e.target.value);
            setErrors({ ...errors, returnStationId: '' });
          }}
          error={errors.returnStationId}
        />
        <InputField
          label="Return Station Name"
          id="returnStationName"
          type="text"
          value={returnStationName}
          onChange={(e) => {
            setReturnStationName(e.target.value);
            setErrors({ ...errors, returnStationName: '' });
          }}
          error={errors.returnStationName}
        />
        <InputField
          label="Covered Distance (in meters)"
          id="coveredDistanceInMeter"
          type="text"
          value={coveredDistanceInMeter}
          onChange={(e) => {
            setCoveredDistanceInMeter(e.target.value);
            setErrors({ ...errors, coveredDistanceInMeter: '' });
          }}
          error={errors.coveredDistanceInMeter}
        />
        <InputField
          label="Duration (in seconds)"
          id="durationInSec"
          type="text"
          value={durationInSec}
          onChange={(e) => {
            setDurationInSec(e.target.value);
            setErrors({ ...errors, durationInSec: '' });
          }}
          error={errors.durationInSec}
        />
        {errors && <p className="error-message">{errors.submitError}</p>}
        <div className="form-group button-container">
          <button type="submit">Save Bike Trip</button>
        </div>
      </form>
    </div>
    
    {showSavedTrip ? (
      <SavedBikeTrip bikeTrip={savedTrip} />
    ) : (
      <>
        <div className="content-container">
          <div className="content-header">
            <h2>Ready?</h2>
          </div>
          <div className="content-text">
            <p>Fill in the form below and hit "Save Bike Trip"
              to embark on an unforgettable journey!
              Make sure to fill in all the required information and meet the thrilling challenge of form validation.
              Once completed, your bike trip will be revealed right here in all its glory. Get ready for an adrenaline-filled experience!
            </p>
          </div>
        </div>
        {/* <SavedBikeTrip bikeTrip={savedTrip} /> */}
      </>
    )}
  </div>
);


};

export default BikeTripForm;
