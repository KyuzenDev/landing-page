/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="feature-card">
      <div className="feature-heading">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
      <div className="feature-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};
FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FeatureCard;
