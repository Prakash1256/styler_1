// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          {!isAuthenticated ? (
            <li id="log-sign">
              <Link to="/login-signup">Signup/Login</Link>
            </li>
          ) : (
            <li id="my-pro">
              <Link to="/myProfile">My Profile</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
