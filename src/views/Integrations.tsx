'use client';

import IntegrationsHero from "@/components/IntegrationsHero";
import { IntegrationsIntro } from "@/components/IntegrationsIntro";
import { IntegrationCategories } from "@/components/IntegrationCategories";
import { CustomIntegrations } from "@/components/CustomIntegrations";
import { IntegrationsCTA } from "@/components/IntegrationsCTA";

const Integrations = () => {
  return (
    <div className="min-h-screen bg-white">
      <IntegrationsHero />
      <IntegrationsIntro />
      <IntegrationCategories />
      <CustomIntegrations />
      <IntegrationsCTA />
    </div>
  );
};

export default Integrations;
