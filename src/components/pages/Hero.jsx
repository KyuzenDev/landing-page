/* eslint-disable no-unused-vars */
import React from "react";
import Graphic1 from "../../assets/graphic/graphic_1.svg";
import Graphic2 from "../../assets/graphic/graphic_2.svg";
import Graphic3 from "../../assets/graphic/graphic_3.svg";
import "../../styles/Hero.css";
import Button from "../ui/Button";
import Label from "../ui/Label";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-wrapper">
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

          <div className="heading-wrapper">
            <div className="headline">
              <Label className="label">Best Choice</Label>
              <div className="heading">
                <h1>
                  Future strategic finance for
                  <span className="highlight"> Entrepreneurs</span>
                </h1>
                <p>
                  Scale with checking and savings accounts, custom tools, and
                  access to our investor network.
                </p>
              </div>
            </div>
            <div className="email-input">
              <input type="email" placeholder="Your work email" />
              <Button>Get Started</Button>
            </div>
            <div className="data-menu">
              <div className="data">
                <p className="data_value">10%</p>
                <p className="data_desc">Benefical Cashback</p>
              </div>
              <div className="data">
                <p className="data_value">7M</p>
                <p className="data_desc">Satisfied Customer</p>
              </div>
              <div className="data">
                <p className="data_value">40+</p>
                <p className="data_desc">Country Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
