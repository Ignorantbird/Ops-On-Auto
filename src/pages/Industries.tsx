import IndustriesHero from "@/components/IndustriesHero";
import { IndustryTiles } from "@/components/IndustryTiles";
import { RoleBasedFilter } from "@/components/RoleBasedFilter";
import { ProofMetrics } from "@/components/ProofMetrics";
import { TechStackIntegrations } from "@/components/TechStackIntegrations";
import { IndustriesFinalCTA } from "@/components/IndustriesFinalCTA";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Industries = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <IndustriesHero />
        <IndustryTiles />
        <RoleBasedFilter />
        <ProofMetrics />
        <TechStackIntegrations />
        <IndustriesFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Industries;