/* eslint-disable no-unused-vars */
import React from "react";
import Label from "../atoms/Label";
import EmailInput from "../molecules/EmailInput";
import DataMenu from "../molecules/DataMenu";

const HeroContent = () => {
  return (
    <div className="heading-wrapper">
      <div className="heading-top">
        <Label className="label">Best Choice</Label>
        <div className="heading">
          <h1>
            Future strategic finance for
            <span className="highlight"> Entrepreneurs</span>
          </h1>
          <p>
            Scale with checking and savings accounts, custom tools, and access
            to our investor network.
          </p>
        </div>
        <EmailInput />
      </div>
      <DataMenu />
    </div>
  );
};

export default HeroContent;
