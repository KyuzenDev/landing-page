/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import starIcon from "../../assets/icons/star.svg";

const StarRating = ({ rating }) => {
  return (
    <div className="rating">
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={starIcon}
            alt="star icon"
            className="star-icon"
            style={{ opacity: index < rating ? 1 : 0.3 }}
          />
        ))}
      </div>
      <span className="rating-score">{rating}</span>
    </div>
  );
};
StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;