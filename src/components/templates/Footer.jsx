/* eslint-disable no-unused-vars */
import React from "react";
import logoFooter from "../../assets/logo/logo-footer.svg";
import facebook from "../../assets/socials/facebook.svg";
import linkEdin from "../../assets/socials/linkEdin.svg";
import x from "../../assets/socials/x.svg";
import "../../styles/Footer.css";
import "../../styles/styles.css";
import Button from "../atoms/Button";

const Footer = () => {
  const socials = [
    {
      icon: facebook,
    },
    {
      icon: linkEdin,
    },
    {
      icon: x,
    },
  ];
  return (
    <>
      <div className="rectangle"></div>

      <div className="footer-container">
        <div className="container">
          {/* CTA Section */}
          <div className="cta-container">
            <div className="cta-wrapper">
              <h2 className="cta-title">
                Get started today for better future finance
              </h2>
              <div className="cta-bottom">
                <p className="cta-subtitle">
                  Fundsphere is a compass for business leaders, scale with
                  checking and savings accounts, custom tools, and access to our
                  investor network.
                </p>
                <div className="email-input">
                  <input type="email" placeholder="Your work email" />
                  <Button>Get Started</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <footer className="footer">
            <div className="footer-wrapper">
              <div className="footer-content">
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
                </div>
                <div className="footer-address">
                  <div className="footer-logo">
                    <img src={logoFooter} alt="Fundsphere" />
                  </div>
                  <p>Sudirman St., 12B, Malang</p>
                  <p>+1 215-2231-5523</p>
                  <p>
                    <a href="mailto:hello@fundsphere.id">hello@fundsphere.id</a>
                  </p>
                </div>
              </div>

              <div className="footer-bottom">
                <p>© Fundsphere Copyright 2024. All Rights Reserved.</p>

                <div className="footer-socials">
                  {socials.map((social, index) => (
                    <a key={index} href="#">
                      <img src={social.icon} alt="social" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
