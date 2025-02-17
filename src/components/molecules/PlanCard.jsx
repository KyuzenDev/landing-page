/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import checkIcon from "../../assets/graphic/check-circle.svg";
import PlanButton from "../atoms/PlanButton";

const PlanCard = ({ name, description, price, features, isPro }) => {
  return (
    <div className={`plan-card ${isPro ? "pro active" : ""}`}>
      <div className="plan-card-top">
        <h3 className="plan-name">{name}</h3>
        <p className="plan-description">{description}</p>
        <ul className={`plan-features ${isPro ? "pro" : ""}`}>
          {features.map((feature, idx) => (
            <li key={idx}>
              <img src={checkIcon} alt="check icon" className="check-icon" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="plan-card-bottom">
        <p className={`plan-price ${isPro ? "pro" : ""}`}>
          ${price} <span>/ month</span>
        </p>
        <PlanButton isPro={isPro} />
      </div>
    </div>
  );
};
PlanCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  isPro: PropTypes.bool.isRequired,
};

export default PlanCard;
