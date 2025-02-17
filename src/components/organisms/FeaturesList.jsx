/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import FeatureCard from "../molecules/FeatureCard";
import Button from "../atoms/Button";
import picture_1 from "../../assets/picture/picture_1.png";
import picture_2 from "../../assets/picture/picture_2.png";

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

const FeaturesList = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleSeeMore = () => {
    setVisibleCount(allFeatures.length);
  };

  return (
    <>
      <div
        className="features-cards"
        style={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {allFeatures.slice(0, visibleCount).map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>
      {visibleCount < allFeatures.length && (
        <Button onClick={handleSeeMore}>See More Features</Button>
      )}
    </>
  );
};

export default FeaturesList;
