/* eslint-disable no-unused-vars */
import React from "react";
import picture_1 from "../assets/picture/picture_1.png";
import picture_2 from "../assets/picture/picture_2.png";

const Features = () => {
  const features = [
    {
      title: "Pay with Fundsphere, quick, simple and easy",
      description:
        "Use Fundsphere to pay to a merchant and enjoy optimal payment user experience.",
      image: picture_2,
    },
    {
      title: "Bank-level Security",
      description:
        "Personal information is encrypted and protected by industry standard banking security.",
      image: picture_1,
    },
  ];

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
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-heading">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
            <div className="feature-image">
              <img src={feature.image} alt={feature.title} />
            </div>
          </div>
        ))}
      </div>
      <button className="features-button">See More Features</button>
    </section>
  );
};

export default Features;
