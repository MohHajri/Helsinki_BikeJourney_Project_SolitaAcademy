import React, { useState } from 'react';
import bikeStationsAPI from '../api/bikeStationsAPI';
import { validateBikeTripForm } from '../utils/validateBikeTripForm';

const BikeTripForm = ({ onSubmit }) =>
{
  const [departureTime, setDepartureTime] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [departureStationId, setDepartureStationId] = useState('');
  const [departureStationName, setDepartureStationName] = useState('');
  const [returnStationId, setReturnStationId] = useState('');
  const [returnStationName, setReturnStationName] = useState('');
  const [coveredDistanceInMeter, setCoveredDistanceInMeter] = useState('');
  const [durationInSec, setDurationInSec] = useState('');
  const [errors, setErrors] = useState({});
   //test
  const [savedTrip, setSavedTrip] = useState(null);

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
      // Send a POST request to save the bike trip
       const savedBikeTrip = await bikeStationsAPI.saveBikeTrip(formData);
    //    console.log('departureTime:', departureTime);
    //    console.log('bikeTrip:', bikeTrip);



      // Check if the bike trip was successfully saved
       if (savedBikeTrip) {
           setSavedTrip(savedBikeTrip);
        // Call the onSubmit function passed from the parent component
        onSubmit(savedBikeTrip);
        // Reset the form fields
        setDepartureTime('');
        setReturnTime('');
        setDepartureStationId('');
        setDepartureStationName('');
        setReturnStationId('');
        setReturnStationName('');
        setCoveredDistanceInMeter('');
        setDurationInSec('');
      } else {
        // Handle save error
        setErrors('Error saving bike trip');
      }
    } catch (error) {
      // Handle save error
      setErrors('Error saving bike trip');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Departure Time:
        <input type="datetime-local" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
      </label>
      <label>
        Return Time:
        <input type="datetime-local" value={returnTime} onChange={(e) => setReturnTime(e.target.value)} />
      </label>
      <label>
        Departure Station ID:
        <input type="text" value={departureStationId} onChange={(e) => setDepartureStationId(e.target.value)} />
      </label>
      <label>
        Departure Station Name:
        <input type="text" value={departureStationName} onChange={(e) => setDepartureStationName(e.target.value)} />
      </label>
      <label>
        Return Station ID:
        <input type="text" value={returnStationId} onChange={(e) => setReturnStationId(e.target.value)} />
      </label>
      <label>
        Return Station Name:
        <input type="text" value={returnStationName} onChange={(e) => setReturnStationName(e.target.value)} />
      </label>
      <label>
        Covered Distance (in meters):
        <input type="text" value={coveredDistanceInMeter} onChange={(e) => setCoveredDistanceInMeter(e.target.value)} />
      </label>
      <label>
        Duration (in seconds):
        <input type="text" value={durationInSec} onChange={(e) => setDurationInSec(e.target.value)} />
        </label>
          {errors && <p>{errors.submitError}</p>}
           {savedTrip && <p>Bike trip saved successfully! Trip ID: {savedTrip.id}</p>}
      <button type="submit">Save Bike Trip</button>
    </form>
    );
};

export default BikeTripForm;