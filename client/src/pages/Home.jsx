import React from "react";
import { HeroSection } from "../components/HeroSection";
import { Latestcollection } from "../components/Latestcollection";
import { Bestseller } from "../components/Bestseller";
import { Ourpolicy } from "../components/Ourpolicy";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Latestcollection />
      <Bestseller />
      <Ourpolicy />
    </>
  );
};

export { Home };
