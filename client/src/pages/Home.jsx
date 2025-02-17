import React from "react";
import { HeroSection } from "../components/HeroSection";
import { Latestcollection } from "../components/Latestcollection";
import { Bestseller } from "../components/Bestseller";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Latestcollection />
      <Bestseller />
    </>
  );
};

export { Home };
