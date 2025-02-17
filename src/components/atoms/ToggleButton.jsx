/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const ToggleButton = ({ isYearly, togglePlan }) => {
  return (
    <div className="toggle">
      <span className={!isYearly ? "active" : ""}>Monthly</span>
      <div className="toggle-button" onClick={togglePlan}>
        <div className={`circle ${isYearly ? "right" : "left"}`}></div>
      </div>
      <span className={isYearly ? "active" : ""}>Yearly</span>
    </div>
  );
};
ToggleButton.propTypes = {
  isYearly: PropTypes.bool.isRequired,
  togglePlan: PropTypes.func.isRequired,
};

export default ToggleButton;