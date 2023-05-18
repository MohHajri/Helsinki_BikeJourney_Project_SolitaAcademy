
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__title">CycleSafari</Link>
        <div className="navbar__hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`navbar__overlay ${menuVisible ? 'active' : ''}`}>
          <div className="navbar__overlay-content">
            <span className="navbar__close" onClick={toggleMenu}>×</span>
            <ul className="navbar__links-mobile">
              <li><Link to="/bike-trips">Bike Trips</Link></li>
              <li><Link to="/station-hub">StationHub</Link></li>
            </ul>
          </div>
        </div>
        <ul className="navbar__links-desktop">
          <li><Link to="/bike-trips">Bike Trips</Link></li>
          <li><Link to="/station-hub">StationHub</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;