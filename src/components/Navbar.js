import React from "react";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__title">CycleSafari</h1>
        <ul className="navbar__menu">
          <li><a href="#">Bike Trips</a></li>
          <li><a href="#">StationHub</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
