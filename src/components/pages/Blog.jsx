/* eslint-disable no-unused-vars */
import React from "react";
import graphic_blog_1 from "../../assets/graphic/graphic_blog_1.png";
import graphic_blog_2 from "../../assets/graphic/graphic_blog_2.png";
import graphic_blog_3 from "../../assets/graphic/graphic_blog_3.png";
import "../../styles/Blog.css";

const Blog = () => {
  const articles = [
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
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-wrapper">
          <div className="blog-header">
            <div className="label">
              <div className="label_text">Insight</div>
            </div>
            <h2 className="blog-title">Magazine</h2>
            <p className="blog-subtitle">Find growth insight in our blog.</p>
          </div>
          <div className="blog-cards">
            {articles.map((article, index) => (
              <div key={index} className="blog-card">
                <div className="blog-image">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="blog-content">
                  <h3 className="blog-article-title">{article.title}</h3>
                  <p className="blog-date">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="blog-footer">
            <button className="blog-button">Read More Article</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
