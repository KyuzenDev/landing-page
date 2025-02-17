/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import PlanCard from "../molecules/PlanCard";

const PlanList = ({ plans, isYearly }) => {
  return (
    <div className="plan-cards">
      {plans.map((plan, index) => (
        <PlanCard
          key={index}
          name={plan.name}
          description={plan.description}
          price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
          features={plan.features}
          isPro={plan.isPro}
        />
      ))}
    </div>
  );
};
PlanList.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      yearlyPrice: PropTypes.number.isRequired,
      monthlyPrice: PropTypes.number.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      isPro: PropTypes.bool.isRequired,
    })
  ).isRequired,
  isYearly: PropTypes.bool.isRequired,
};

export default PlanList;