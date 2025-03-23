import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo and Heading */}
      <div className="navbar-logo-heading">
        <img src={logo} alt="Axiom Logo" className="navbar-logo" />
        <Link to="/about-us" className="navbar-heading-link">
          <h1 className="navbar-heading">AXIOM</h1>
        </Link>
        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/about-us" className="navbar-link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/team" className="navbar-link">
            Team
          </Link>
        </li>
        <li>
          <Link to="/events" className="navbar-link">
            Events
          </Link>
        </li>
        <li>
          <Link to="/podcast" className="navbar-link">
            Podcast
          </Link>
        </li>
        <li>
          <Link to="/newsletter" className="navbar-link">
            Newsletter
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;