import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import bike_vector from '../assets/bike_vector.png';

function LandingPage() {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
     <div className={`container ${animate ? 'active' : ''}`}>
      <div className="content">
        <div className="content__item-container">
          <div className="content__item">
            <h1 className="content__title">
              Explore Helsinki's <br></br> Bike Adventures
            </h1>
            <p className="content__text">
              Discover popular bike routes and stations in the city with our curated trips,
              or create your own adventure using our feature.
              Get ready to explore Helsinki's bike culture in a whole new way.
            </p>
            <Link to="/create-bike-trip">
                <button className="content__button">Create a Bike Trip</button>
            </Link>
          </div>
          <div className="content__image">
            <img src={bike_vector} alt="" />
          </div>
        </div>
      </div>
      </div>
  );
}

export default LandingPage;

