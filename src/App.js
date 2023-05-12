import React, { useState } from 'react';
import './styles/App.css';
import BikeTrips from './components/BikeTrips.js';
import SingleStation from './components/SingleStation.js';

function App() {
  const [showBikeTrips, setShowBikeTrips] = useState(true);

  const handleToggleView = () => {
    setShowBikeTrips(!showBikeTrips);
  };

  return (
    <div className="App">
      <h1>Test page</h1>
      <button onClick={handleToggleView}>Toggle View</button>
      {showBikeTrips ? (
        <BikeTrips />
      ) : (
        <SingleStation stationName="Example Station" />
      )}
    </div>
  );
}

export default App;
