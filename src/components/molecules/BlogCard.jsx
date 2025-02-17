/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const BlogCard = ({ title, date, image }) => {
  return (
    <div className="blog-card" style={{ width: "30%" }}>
      <div className="blog-image">
        <img src={image} alt={title} />
      </div>
      <div className="blog-content">
        <h3 className="blog-article-title">{title}</h3>
        <p className="blog-date">{date}</p>
      </div>
    </div>
  );
};
BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default BlogCard;
