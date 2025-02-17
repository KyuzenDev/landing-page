/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "../../styles/Button.css"; // Pastikan Anda memiliki file CSS ini

const Button = ({ children, variant = "primary", ...props }) => {
  return (
    <button className={`custom-button ${variant}`} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
