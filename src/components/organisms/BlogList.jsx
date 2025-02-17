/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import BlogCard from "../molecules/BlogCard";

const BlogList = ({ articles, visibleCount }) => {
  return (
    <div className="blog-cards">
      {articles.slice(0, visibleCount).map((article, index) => (
        <BlogCard
          key={index}
          title={article.title}
          date={article.date}
          image={article.image}
        />
      ))}
    </div>
  );
};
BlogList.propTypes = {
  articles: PropTypes.array.isRequired,
  visibleCount: PropTypes.number.isRequired,
};

export default BlogList;