import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* <h1 className="navbar__title">CycleSafari</h1> */}
        <Link to="/" className="navbar__title">CycleSafari</Link>
        <ul className="navbar__menu">
          <li><Link to="/bike-trips">Bike Trips</Link></li>
          <li><Link to="/station-hub">StationHub</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
