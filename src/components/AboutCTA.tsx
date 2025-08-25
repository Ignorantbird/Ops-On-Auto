// src/components/AboutCTA.tsx - UPDATED
import { OptimizedCTASection } from "@/components/cta/StandardizedCTA";

const AboutCTA = () => {
  return (
    <OptimizedCTASection
      title="Let's Build Your First Smart Workflow"
      subtitle="In one free call, we'll identify your biggest time drains and show you how to eliminate them."
      primaryLabel="Book AI Demo"
      secondaryLabel="Learn More"
      background="gradient"
      primaryAction={() => {
        window.open('/workflow-audit', '_blank');
      }}
      secondaryAction={() => {
        window.open('/services', '_blank');
      }}
    />
  );
};

export default AboutCTA;