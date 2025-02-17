/* eslint-disable no-unused-vars */
import React from "react";
import HeroContent from "../organisms/HeroContent";
import HeroGraphics from "../organisms/HeroGraphics";
import "../../styles/Hero.css";
import "../../styles/styles.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <HeroGraphics />
          <HeroContent />
        </div>
      </div>
    </div>
  );
};

export default Hero;
