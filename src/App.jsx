/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Ads from "./components/Ads";
import Features from "./components/Features";
import Plan from "./components/Plan";
import Blog from "./components/Blog";
import Testimony from "./components/Testimony";
import Footer from "./components/Footer"; 
import "./app.css";
import "./styles/Navbar.css";
import "./styles/Hero.css";
import "./styles/Ads.css";
import "./styles/Features.css";
import "./styles/Plan.css";
import "./styles/Blog.css";
import "./styles/Testimony.css";
import "./styles/Footer.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Ads />
      <Features />
      <Plan />
      <Blog />
      <Testimony />
      <Footer />
    </div>
  );
}

export default App
