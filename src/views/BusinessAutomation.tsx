'use client';

import BusinessAutomationHero from "@/components/BusinessAutomationHero";
import BusinessAutomationServices from "@/components/BusinessAutomationServices";
import FinalCTA from "@/components/FinalCTA";

const BusinessAutomation = () => {
  return (
    <div className="min-h-screen bg-white">
      <BusinessAutomationHero />
      <BusinessAutomationServices />
      <FinalCTA />
    </div>
  );
};

export default BusinessAutomation;
