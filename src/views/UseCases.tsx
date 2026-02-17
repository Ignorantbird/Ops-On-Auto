'use client';

import UseCasesHero from "@/components/UseCasesHero";
import UseCaseCards from "@/components/UseCaseCards";
import ImpactMetrics from "@/components/ImpactMetrics";
import ProcessLinkback from "@/components/ProcessLinkback";
import UseCasesCTA from "@/components/UseCasesCTA";

const UseCases = () => {
  return (
    <div className="min-h-screen bg-white">
      <UseCasesHero />
      <UseCaseCards />
      <ImpactMetrics />
      <ProcessLinkback />
      <UseCasesCTA />
    </div>
  );
};

export default UseCases;
