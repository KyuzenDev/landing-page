/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/Hero.css";

const DataMenu = () => {
  const dataItems = [
    { value: "10%", desc: "Beneficial Cashback" },
    { value: "7M", desc: "Satisfied Customers" },
    { value: "40+", desc: "Countries Available" },
  ];

  return (
    <div className="data-menu">
      {dataItems.map((item, index) => (
        <div key={index} className="data">
          <p className="data_value">{item.value}</p>
          <p className="data_desc">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default DataMenu;
