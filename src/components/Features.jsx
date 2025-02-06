/* eslint-disable no-unused-vars */
import React from "react";
const Features = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <div className="label">
          <div className="label_text">features</div>
        </div>
        <h2 className="features-title">Features designed for you</h2>
        <p className="features-subtitle">
          Growth-accelerating products for startups, ecommerce stores, angel
          investors, & more.
        </p>
      </div>
      <div className="features-cards">
        <div className="feature-card">
          <h3 className="feature-title">
            Pay with Fundsphere, quick, simple and easy
          </h3>
          <p className="feature-description">
            Use Fundsphere to pay to a merchant and enjoy optimal payment user
            experience.
          </p>
          <div className="feature-image"></div>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">
            Pay with Fundsphere, quick, simple and easy
          </h3>
          <p className="feature-description">
            Use Fundsphere to pay to a merchant and enjoy optimal payment user
            experience.
          </p>
          <div className="feature-image"></div>
        </div>
      </div>
      <button className="features-button">See More Features</button>
    </section>
  );
};

export default Features;
