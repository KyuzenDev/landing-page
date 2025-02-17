/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import starIcon from "../../assets/icons/star.svg";
import picture1 from "../../assets/picture/path-to-image1.png";
import picture2 from "../../assets/picture/path-to-image2.png";
import "../../styles/Testimony.css";
import "../../styles/styles.css";
import Button from "../atoms/Button";
import Label from "../atoms/Label";

const Testimony = () => {
  const allTestimonials = [
    {
      image: picture1,
      quote:
        "Simple, seamless processing. Payroll reduces the number of third parties we work with.",
      name: "Maria Evelyn",
      position: "Project Manager at Stripe",
    },
    {
      image: picture2,
      quote: "Simplified processes, reduced costs. Highly recommend.",
      name: "John Smith",
      position: "Operations Manager at Ebay",
    },
    {
      image: picture1,
      quote: "User-friendly and efficient. A must-have for any business.",
      name: "Anna Brown",
      position: "CEO at TechStart",
    },
    {
      image: picture2,
      quote: "Fast transactions and excellent support team.",
      name: "Michael Johnson",
      position: "Finance Director at PayTech",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(2);

  const handleReadMore = () => {
    setVisibleCount(allTestimonials.length);
  };

  return (
    <section className="testimony-section">
      <div className="container">
        <div className="testimony-wrapper">
          <div className="testimony-header-wrapper">
            <div className="testimony-header">
              <Label>Testimony</Label>
              <h2 className="testimony-title">
                What others are saying about Us
              </h2>
              <p className="testimony-subtitle">
                Join hundreds of companies embracing Strategic Finance with
                Fundsphere.
              </p>
            </div>
            <div className="testimony-rating">
              <div className="rating">
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src={starIcon}
                      alt="star icon"
                      className="star-icon"
                    />
                  ))}
                </div>
                <span className="rating-score">4.9</span>
              </div>
              <span className="rating-source">REVIEW FROM TRUSTPILOT</span>
            </div>
          </div>
          <div
            className="testimony-cards"
            style={{ flexWrap: "wrap", justifyContent: "center" }}
          >
            {allTestimonials
              .slice(0, visibleCount)
              .map((testimonial, index) => (
                <div key={index} className="testimony-card">
                  <div className="image">
                    <img
                      className="testimony-image"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="testimony-heading">
                    <p className="testimony-quote">“{testimonial.quote}“</p>
                    <div className="testimony-details">
                      <h4 className="testimony-name">{testimonial.name}</h4>
                      <p className="testimony-position">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {visibleCount < allTestimonials.length && (
            <div className="testimony-footer">
              <Button onClick={handleReadMore}>Read More Testimony</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
