import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Products from "../components/sections/Products";
import Features from "../components/sections/Features";
import Contact from "../components/sections/Contact";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Features />
      <Contact />
    </main>
  );
};

export default HomePage;
