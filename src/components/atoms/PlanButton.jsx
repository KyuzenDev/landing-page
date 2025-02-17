/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const PlanButton = ({ isPro }) => {
  return (
    <button className={`plan-button ${isPro ? "pro" : ""}`}>Book Demo</button>
  );
};
PlanButton.propTypes = {
  isPro: PropTypes.bool.isRequired,
};

export default PlanButton;