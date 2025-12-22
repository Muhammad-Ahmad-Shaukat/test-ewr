import React from "react";
import HeroSection from "@/components/about/HeroSection";
import WhyAi from "@/components/about/WhyAi";
import GetInTouch from "@/components/about/GetInTouch";
import KeyFeatures from "@/components/about/KeyFeatures";
import EmpowerWithAI from "@/components/about/EmpowerWithAI";
import Trusted from "@/components/home/Trusted";

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <WhyAi />
      <GetInTouch />
      <KeyFeatures />
      <EmpowerWithAI />
      <Trusted />
    </>
  );
};

export default AboutPage;
