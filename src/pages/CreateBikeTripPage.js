import React from 'react';
import BikeTripForm from '../components/BikeTripForm';
import Navbar from '../components/Navbar';

const CreateBikeTripPage = () => {
    const handleFormSubmit = (savedBikeTrip) => {

        //TEST  
    console.log('Received saved bike trip:', savedBikeTrip);
  };

  return (
    <div>
      <Navbar />
      <BikeTripForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateBikeTripPage;
