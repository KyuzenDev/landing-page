/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import checkIcon from "../assets/graphic/check-circle.svg"; // Ganti dengan jalur ikon centang yang benar

const Plan = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Basic",
      description: "Kickstart product research in your business at no cost.",
      price: isYearly ? "199" : "20",
      features: ["Unlimited workspace", "Access to RestAPI"],
    },
    {
      name: "Pro",
      description:
        "Fuel your product workflow with more advanced research features.",
      price: isYearly ? "250" : "30",
      features: [
        "Unlimited workspace",
        "Access to RestAPI",
        "Priority Customer Support",
        "Real-Time Analytics",
      ],
      isPro: true,
    },
    {
      name: "Enterprises",
      description: "Scale product research and learning across your company.",
      price: isYearly ? "499" : "50",
      features: [
        "Unlimited workspace",
        "Access to RestAPI",
        "Priority Customer Support",
        "Real-Time Analytics",
        "Data Export Capabilities",
        "Advanced Security",
        "Multi-User Access",
      ],
    },
  ];

  return (
    <section className="plan-section">
      <div className="plan-header">
        <div className="label">
          <p className="label_text">pricing plan</p>
        </div>
        <div className="plan-heading">
          <h2 className="plan-title">Choose Package</h2>
          <p className="plan-subtitle">
            Join our pro features for unlimited without any contract and cancel
            anytime.
          </p>
        </div>
        <div className="toggle">
          <span className={!isYearly ? "active" : ""}>Monthly</span>
          <div className="toggle-button" onClick={() => setIsYearly(!isYearly)}>
            <div className={`circle ${isYearly ? "right" : "left"}`}></div>
          </div>
          <span className={isYearly ? "active" : ""}>Yearly</span>
        </div>
      </div>
      <div className="plan-cards">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan-card ${plan.isPro ? "pro active" : ""}`}
          >
            <div className="plan-card-top">
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <ul className={`plan-features ${plan.isPro ? "pro" : ""}`}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <img
                      src={checkIcon}
                      alt="check icon"
                      className="check-icon"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="plan-card-bottom">
              <p className={`plan-price ${plan.isPro ? "pro" : ""}`}>
                ${plan.price} <span>/ month</span>
              </p>
              <button className={`plan-button ${plan.isPro ? "pro" : ""}`}>
                Book Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plan;
