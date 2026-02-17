'use client';

import IndustriesHero from "@/components/IndustriesHero";
import { IndustryTiles } from "@/components/IndustryTiles";
import { RoleBasedFilter } from "@/components/RoleBasedFilter";
import { ProofMetrics } from "@/components/ProofMetrics";
import { TechStackIntegrations } from "@/components/TechStackIntegrations";
import { IndustriesFinalCTA } from "@/components/IndustriesFinalCTA";

const Industries = () => {
  return (
    <div className="min-h-screen bg-white">
      <IndustriesHero />
      <IndustryTiles />
      <RoleBasedFilter />
      <ProofMetrics />
      <TechStackIntegrations />
      <IndustriesFinalCTA />
    </div>
  );
};

export default Industries;
