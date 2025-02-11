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
import "./App.css";
import "./Navbar.css";
import "./Hero.css";
import "./Ads.css";
import "./Features.css";
import "./Plan.css";
import "./Blog.css";
import "./Testimony.css";
import "./Footer.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Ads />
      <Features />
      <Plan />
      <Blog />
    </div>
  );
}

export default App
