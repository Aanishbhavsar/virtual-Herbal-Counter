import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h2 className="footer-title">Virtual Herbal Garden 🌿</h2>
          <p className="footer-description">
            Explore the beauty of herbs and grow your knowledge with us.
          </p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Virtual Herbal Garden. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
