'use client';

import PricingHero from "@/components/PricingHero";
import PricingTable from "@/components/PricingTable";
import PricingComparison from "@/components/PricingComparison";
import PricingFAQ from "@/components/PricingFAQ";
import PricingCTA from "@/components/PricingCTA";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      <PricingHero />
      <PricingTable />
      <PricingComparison />
      <PricingFAQ />
      <PricingCTA />
    </div>
  );
};

export default Pricing;
