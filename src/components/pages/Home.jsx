/* eslint-disable no-unused-vars */
import React from "react";
import PageTemplates from "../layout/Layout";
import Hero from "../templates/Hero";
import Ads from "../templates/Ads";
import Features from "../templates/Features";
import Plan from "../templates/Plan";
import Blog from "../templates/Blog";
import Testimony from "../templates/Testimony";
function Home() {
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

export default Home;
