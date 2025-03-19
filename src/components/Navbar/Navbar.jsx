

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🌿 Herbal Garden</div>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#about">Awareness</a></li>
        <li><a href="#about">Login</a></li>
        <li><a href="#about">Quiz</a></li>
      </ul>
      <div className="search-container">
        <input type="text" placeholder="Search herbs..." className="search-input" />
        <button className="search-button">🔍</button>
      </div>
    </nav>
  );
};

export default Navbar;

