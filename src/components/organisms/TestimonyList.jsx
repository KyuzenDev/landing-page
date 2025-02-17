/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import TestimonyCard from "../molecules/TestimonyCard";

const TestimonyList = ({ testimonials, visibleCount }) => {
  return (
    <div className="testimony-cards">
      {testimonials.slice(0, visibleCount).map((testimonial, index) => (
        <TestimonyCard
          key={index}
          image={testimonial.image}
          quote={testimonial.quote}
          name={testimonial.name}
          position={testimonial.position}
        />
      ))}
    </div>
  );
};
TestimonyList.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      quote: PropTypes.string,
      name: PropTypes.string,
      position: PropTypes.string,
    })
  ).isRequired,
  visibleCount: PropTypes.number.isRequired,
};

export default TestimonyList;