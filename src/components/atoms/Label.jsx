/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "../../styles/Label.css"; // Pastikan Anda memiliki file CSS ini

const Label = ({ children }) => {
  return (
    <div className="custom-label">
      <span className="label-text">{children}</span>
    </div>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;
