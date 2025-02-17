/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const TestimonyCard = ({ image, quote, name, position }) => {
  return (
    <div className="testimony-card">
      <div className="image">
        <img className="testimony-image" src={image} alt={name} />
      </div>
      <div className="testimony-heading">
        <p className="testimony-quote">“{quote}“</p>
        <div className="testimony-details">
          <h4 className="testimony-name">{name}</h4>
          <p className="testimony-position">{position}</p>
        </div>
      </div>
    </div>
  );
};
TestimonyCard.propTypes = {
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default TestimonyCard;