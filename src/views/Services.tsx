'use client';

import ServicesHero from "@/components/ServicesHero";
import ServicesIntro from "@/components/ServicesIntro";
import ServiceCards from "@/components/ServiceCards";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesIntro />
      <ServiceCards />
      <WhoWeWorkWith />
      <HowItWorks />
      <FinalCTA />
    </div>
  );
};

export default Services;
