/* eslint-disable no-unused-vars */
import React from "react";
import AdsList from "../molecules/AdsList";
import "../../styles/Ads.css";
import "../../styles/styles.css";

const Ads = () => {
  return (
    <div className="ads">
      <div className="container">
        <div className="ads-wrapper">
          <AdsList />
        </div>
      </div>
    </div>
  );
};

export default Ads;
