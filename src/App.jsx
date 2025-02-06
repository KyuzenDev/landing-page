/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Ads from "./components/Ads";
import Features from "./components/Features";
import Footer from "./components/Footer"; 
import Plan from "./components/Plan";
import "./App.css";
import "./Navbar.css";
import "./Hero.css";
import "./Ads.css";
import "./Features.css";
import "./Plan.css";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Ads />
      <Features />
      <Plan />
      <Footer />
    </div>
  );
}

export default App
