/* eslint-disable no-unused-vars */
import React from "react";
import PageTemplates from "./components/templates/Layout";
import Hero from "./components/pages/Hero";
import Ads from "./components/pages/Ads";
import Features from "./components/pages/Features";
import Plan from "./components/pages/Plan";
import Blog from "./components/pages/Blog";
import Testimony from "./components/pages/Testimony";
import "./styles/styles.css";
import "./App.css";

function App() {
  return (
    <PageTemplates>
      <Hero />
      <Ads />
      <Features />
      <Plan />
      <Blog />
      <Testimony />
    </PageTemplates>
  );
}

export default App;
