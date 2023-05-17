import React from 'react';
import BikeTripForm from '../components/BikeTripForm';

const CreateBikeTripPage = () => {
    const handleFormSubmit = (savedBikeTrip) => {

     
    console.log('Received saved bike trip:', savedBikeTrip);
  };

  return (
    <div>
      <BikeTripForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateBikeTripPage;
