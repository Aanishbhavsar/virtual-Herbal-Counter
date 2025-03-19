
import React from "react";
import "./Hero.css"; // Import the CSS file

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          Welcome to Your{" "}
          <span className="highlight">Virtual Herbal Garden!</span>
        </h1>
        <p className="hero-description">
          Discover the beauty of herbs, learn about their benefits, and grow your own virtual garden.
        </p>
        <div className="hero-button-container">
          <button className="hero-button">Explore the Garden</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
