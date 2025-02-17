/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../atoms/Logo";
import amazon from "../../assets/ads/amazon.svg";
import ebay from "../../assets/ads/eBay.svg";
import uber from "../../assets/ads/uber.svg";
import walmart from "../../assets/ads/walmart.svg";

const adsData = [
  { src: uber, alt: "Uber" },
  { src: amazon, alt: "Amazon" },
  { src: ebay, alt: "eBay" },
  { src: walmart, alt: "Walmart" },
];

const AdsList = () => {
  return (
    <div className="logos">
      {adsData.map((ad, index) => (
        <Logo key={index} src={ad.src} alt={ad.alt} />
      ))}
    </div>
  );
};

export default AdsList;
