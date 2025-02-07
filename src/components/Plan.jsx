/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Plan = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="plan-section">
      <div className="plan-header">
        <div className="label">
          <p className="label_text">pricing plan</p>
        </div>
        <h2 className="plan-title">Choose Package</h2>
        <p className="plan-subtitle">
          Join our pro features for unlimited without any contract and cancel
          anytime.
        </p>
        <div className="toggle">
          <span className={!isYearly ? "active" : ""}>Monthly</span>
          <div className="toggle-button" onClick={() => setIsYearly(!isYearly)}>
            <div className={`circle ${isYearly ? "right" : "left"}`}></div>
          </div>
          <span className={isYearly ? "active" : ""}>Yearly</span>
        </div>
      </div>
      <div className="plan-cards">
        <div className="plan-card basic">
          <div className="plan-card-top">
            <h3 className="plan-name">Basic</h3>
            <p className="plan-description">
              Kickstart product research in your business at no cost.
            </p>
            <ul className="plan-features">
              <li>Unlimited workspace</li>
              <li>Access to RestAPI</li>
            </ul>
          </div>
          <div className="plan-card-bottom">
            <p className="plan-price">
              ${isYearly ? "199" : "20"} <span>/ month</span>
            </p>
            <button className="plan-button">Book Demo</button>
          </div>
        </div>
        <div className="plan-card pro active">
          <div className="plan-card-top">
            <h3 className="plan-name">Pro</h3>
            <p className="plan-description">
              Fuel your product workflow with more advanced research features.
            </p>
            <ul className="plan-features pro">
              <li>Unlimited workspace</li>
              <li>Access to RestAPI</li>
              <li>Priority Customer Support</li>
              <li>Real-Time Analytics</li>
            </ul>
          </div>
          <div className="plan-card-bottom">
            <p className="plan-price pro">
              ${isYearly ? "250" : "30"} <span>/ month</span>
            </p>
            <button className="plan-button pro">Book Demo</button>
          </div>
        </div>
        <div className="plan-card enterprises">
          <div className="plan-card-top">
            <h3 className="plan-name">Enterprises</h3>
            <p className="plan-description">
              Scale product research and learning across your company.
            </p>
            <ul className="plan-features">
              <li>Unlimited workspace</li>
              <li>Access to RestAPI</li>
              <li>Priority Customer Support</li>
              <li>Real-Time Analytics</li>
              <li>Data Export Capabilities</li>
              <li>Advanced Security</li>
              <li>Multi-User Access</li>
            </ul>
          </div>
          <div className="plan-card-bottom">
            <p className="plan-price">
              ${isYearly ? "499" : "50"} <span>/ month</span>
            </p>
            <button className="plan-button">Book Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
