/* eslint-disable no-unused-vars */
import React from "react";
import Graphic1 from "../../assets/graphic/graphic_1.svg";
import Graphic2 from "../../assets/graphic/graphic_2.svg";
import Graphic3 from "../../assets/graphic/graphic_3.svg";

const HeroGraphics = () => {
  return (
    <div className="graphic-container">
      <div className="graphic-bg">
        <div className="graphic-wrapper">
          <img src={Graphic1} alt="" />
          <div className="graphic-flex">
            <img src={Graphic2} alt="" />
            <img src={Graphic3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGraphics;
