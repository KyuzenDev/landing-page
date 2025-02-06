/* eslint-disable no-unused-vars */
import React from "react";
import Graphic1 from "../assets/graphic/graphic_1.svg";
import Graphic2 from "../assets/graphic/graphic_2.svg";
import Graphic3 from "../assets/graphic/graphic_3.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* <div className="graphics">
        <div className="graphic graphic-1">
          <img src={Graphic1} alt="Graphic 1" />
        </div>
        <div className="graphic graphic-2">
          <img src={Graphic2} alt="Graphic 2" />
        </div>
        <div className="graphic graphic-3">
          <img src={Graphic3} alt="Graphic 3" />
        </div>
      </div> */}

        <div className="heading-wrapper">
          <div className="headline">
            <div className="label">
              <p className="label_text">best choice</p>
            </div>
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
            <button>Get Started</button>
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
  );
};

export default Hero;
