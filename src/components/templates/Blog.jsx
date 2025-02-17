/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import graphic_blog_1 from "../../assets/graphic/graphic_blog_1.png";
import graphic_blog_2 from "../../assets/graphic/graphic_blog_2.png";
import graphic_blog_3 from "../../assets/graphic/graphic_blog_3.png";
import "../../styles/Blog.css";
import "../../styles/styles.css";
import Label from "../atoms/Label";
import Button from "../atoms/Button";
import BlogList from "../organisms/BlogList";

const Blog = () => {
  const allArticles = [
    {
      title: "Online Payment Failure: Why it Happens and How to Avoid it.",
      date: "January 4, 2024",
      image: graphic_blog_1,
    },
    {
      title: "Some strategies for Quickly Expanding Your Business.",
      date: "February 8, 2024",
      image: graphic_blog_2,
    },
    {
      title:
        "Business strategy converging into a new approach for solving business.",
      date: "January 16, 2024",
      image: graphic_blog_3,
    },
    {
      title: "How to Increase Customer Engagement in 2024.",
      date: "March 10, 2024",
      image: graphic_blog_1,
    },
    {
      title: "Effective Digital Marketing Strategies for Startups.",
      date: "April 5, 2024",
      image: graphic_blog_2,
    },
    {
      title: "Understanding the Future of Online Transactions.",
      date: "May 2, 2024",
      image: graphic_blog_3,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleReadMore = () => {
    setVisibleCount(allArticles.length);
  };

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-wrapper">
          <div className="blog-header">
            <Label>Insight</Label>
            <h2 className="blog-title">Magazine</h2>
            <p className="blog-subtitle">Find growth insight in our blog.</p>
          </div>

          <BlogList articles={allArticles} visibleCount={visibleCount} />

          {visibleCount < allArticles.length && (
            <div className="blog-footer">
              <Button onClick={handleReadMore}>Read More Article</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;