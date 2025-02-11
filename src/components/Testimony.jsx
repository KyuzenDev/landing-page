/* eslint-disable no-unused-vars */
import React from "react";

const Testimony = () => {
  const testimonials = [
    {
      image: "path-to-image1.png", // Ganti dengan path gambar sebenarnya
      quote:
        "Simple, seamless processing. Payroll reduces the number of third parties we work with.",
      name: "Maria Evelyn",
      position: "Project Manager at Stripe",
    },
    {
      image: "path-to-image2.png", // Ganti dengan path gambar sebenarnya
      quote: "Simplified processes, reduced costs. Highly recommend.",
      name: "John Smith",
      position: "Operations Manager at Ebay",
    },
  ];

  return (
    <section className="testimony-section">
      <div className="testimony-header">
        <span className="testimony-tag">TESTIMONY</span>
        <h2 className="testimony-title">What others are saying about Us</h2>
        <p className="testimony-subtitle">
          Join hundreds of companies embracing Strategic Finance with
          Fundsphere.
        </p>
        <div className="testimony-rating">
          <span className="stars">★★★★★</span>
          <span className="rating-score">4.9</span>
          <span className="rating-source">REVIEW FROM TRUSTPILOT</span>
        </div>
      </div>
      <div className="testimony-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimony-card">
            <img
              className="testimony-image"
              src={testimonial.image}
              alt={testimonial.name}
            />
            <p className="testimony-quote">“{testimonial.quote}“</p>
            <div className="testimony-details">
              <h4 className="testimony-name">{testimonial.name}</h4>
              <p className="testimony-position">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="testimony-footer">
        <button className="testimony-button">Read More Article</button>
      </div>
    </section>
  );
};

export default Testimony;
