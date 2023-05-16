import React from 'react';
import BikeTripForm from '../components/BikeTripForm';

const CreateBikeTripPage = () => {
    const handleFormSubmit = (savedBikeTrip) => {

        //TEST  
    console.log('Received saved bike trip:', savedBikeTrip);
  };

  return (
    <div>
      <h1>Create Bike Trip</h1>
      <BikeTripForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateBikeTripPage;
