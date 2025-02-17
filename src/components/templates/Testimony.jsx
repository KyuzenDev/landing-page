/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import picture1 from "../../assets/picture/path-to-image1.png";
import picture2 from "../../assets/picture/path-to-image2.png";
import "../../styles/Testimony.css";
import "../../styles/styles.css";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import StarRating from "../atoms/StarRating";
import TestimonyList from "../organisms/TestimonyList";

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
              <StarRating rating={4.9} />
              <span className="rating-source">REVIEW FROM TRUSTPILOT</span>
            </div>
          </div>

          <TestimonyList
            testimonials={allTestimonials}
            visibleCount={visibleCount}
          />

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
