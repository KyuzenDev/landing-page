/* eslint-disable no-unused-vars */
import React from "react";
import FeaturesList from "../organisms/FeaturesList";
import Label from "../atoms/Label";
import "../../styles/Features.css";
import "../../styles/styles.css";

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-wrapper">
          <div className="features-header">
            <Label>Features</Label>
            <h2 className="features-title">Features designed for you</h2>
            <p className="features-subtitle">
              Growth-accelerating products for startups, ecommerce stores, angel
              investors, & more.
            </p>
          </div>
          <FeaturesList />
        </div>
      </div>
    </section>
  );
};

export default Features;