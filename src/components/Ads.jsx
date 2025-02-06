/* eslint-disable no-unused-vars */
import React from "react";
import amazon from "../assets/ads/amazon.svg";
import ebay from "../assets/ads/ebay.svg";
import uber from "../assets/ads/uber.svg";
import walmart from "../assets/ads/walmart.svg";

const Ads = () => {
  return (
    <div className="ads">
      <div className="container">
        <div className="ads-wrapper">
        <div className="logos">
          <div className="logo"><img src={uber} alt="uber" /></div>
          <div className="logo"><img src={amazon} alt="amazon" /></div>
          <div className="logo"><img src={ebay} alt="ebay" /></div>
          <div className="logo"><img src={walmart} alt="walmart" /></div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Ads;
