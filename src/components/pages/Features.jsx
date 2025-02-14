/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import picture_1 from "../../assets/picture/picture_1.png";
import picture_2 from "../../assets/picture/picture_2.png";
import "../../styles/Features.css";

const Features = () => {
  const allFeatures = [
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
    {
      title: "Seamless Integration",
      description:
        "Easily integrate Fundsphere with your existing payment system with minimal effort.",
      image: picture_2,
    },
    {
      title: "Global Accessibility",
      description:
        "Access Fundsphere services from anywhere in the world with ease.",
      image: picture_1,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(2);

  const handleSeeMore = () => {
    setVisibleCount(allFeatures.length);
  };

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-wrapper">
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
          <div
            className="features-cards"
            style={{ flexWrap: "wrap", justifyContent: "center" }}
          >
            {allFeatures.slice(0, visibleCount).map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                style={{ width: "45%" }}
              >
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
          {visibleCount < allFeatures.length && (
            <button className="features-button" onClick={handleSeeMore}>
              See More Features
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
