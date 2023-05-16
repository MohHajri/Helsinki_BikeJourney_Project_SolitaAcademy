import React from 'react';
import BikeTripForm from '../components/BikeTripForm';

const CreateBikeTripPage = () => {
  const handleFormSubmit = (savedBikeTrip) => {
    // TODO: Handle the saved bike trip data as needed
    console.log('Received saved bike trip:', savedBikeTrip);
    // Perform any necessary actions with the saved data
  };

  return (
    <div>
      <h1>Create Bike Trip</h1>
      <BikeTripForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateBikeTripPage;
