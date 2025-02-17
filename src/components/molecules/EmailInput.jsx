/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../atoms/Button";

const EmailInput = () => {
  return (
    <div className="email-input">
      <input type="email" placeholder="Your work email" />
      <Button>Get Started</Button>
    </div>
  );
};

export default EmailInput;
