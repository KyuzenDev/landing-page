/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../styles/Plan.css";
import "../../styles/styles.css";
import Label from "../atoms/Label";
import ToggleButton from "../atoms/ToggleButton";
import PlanList from "../organisms/PlanList";

const Plan = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Basic",
      description: "Kickstart product research in your business at no cost.",
      yearlyPrice: "199",
      monthlyPrice: "20",
      features: ["Unlimited workspace", "Access to RestAPI"],
    },
    {
      name: "Pro",
      description:
        "Fuel your product workflow with more advanced research features.",
      yearlyPrice: "250",
      monthlyPrice: "30",
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
      yearlyPrice: "499",
      monthlyPrice: "50",
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
      <div className="container">
        <div className="plan-wrapper">
          <div className="plan-header">
            <Label>Pricing Plan</Label>
            <div className="plan-heading">
              <h2 className="plan-title">Choose Package</h2>
              <p className="plan-subtitle">
                Join our pro features for unlimited without any contract and
                cancel anytime.
              </p>
            </div>
            <ToggleButton
              isYearly={isYearly}
              togglePlan={() => setIsYearly(!isYearly)}
            />
          </div>
          <PlanList plans={plans} isYearly={isYearly} />
        </div>
      </div>
    </section>
  );
};

export default Plan;
