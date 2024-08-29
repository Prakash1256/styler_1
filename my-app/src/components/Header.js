// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="./Image/stylerLogo.png" alt="Styler Logo" />
        </Link>
      </div>

      <div className="hamburger" onClick={toggleNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <nav className={`nav-bar ${isNavOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeNav}>Home</Link>
          </li>
          <li>
            <a href="#about" onClick={closeNav}>About Us</a>
          </li>
          <li>
            <Link to="/services" onClick={closeNav}>Services</Link>
          </li>
          {!isAuthenticated ? (
            <li id="log-sign">
              <Link to="/login-signup" onClick={closeNav}>Signup/Login</Link>
            </li>
          ) : (
            <li id="my-pro">
              <Link to="/myProfile" onClick={closeNav}>My Profile</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
