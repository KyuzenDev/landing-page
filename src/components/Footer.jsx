/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-heading">
          Get started today for better future finance
        </h2>
        <p className="footer-subheading">
          Fundsphere is a compass for business leaders, scale with checking and
          savings accounts, custom tools, and access to our investor network.
        </p>
        <div className="footer-input-container">
          <input
            type="email"
            placeholder="Your work email"
            className="footer-input"
          />
          <button className="footer-button">Get Started</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <div className="footer-column">
            <h4>Platform</h4>
            <ul>
              <li>
                <a href="#">Why Fundsphere?</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#">Payments</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
              <li>
                <a href="#">Ecommerce</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Fundsphere</h4>
            <p>Sudirman St., 12B, Malang</p>
            <p>+1 215-2231-5523</p>
            <p>
              <a href="mailto:hello@fundsphere.id">hello@fundsphere.id</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom-bar">
          <p>© Fundsphere Copyright 2024. All Rights Reserved.</p>
          <div className="footer-socials">
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
