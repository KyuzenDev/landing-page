/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const Logo = ({ src, alt }) => {
  return (
    <div className="logo">
      <img src={src} alt={alt} />
    </div>
  );
};
Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Logo;
