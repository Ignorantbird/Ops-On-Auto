'use client';

import CaseStudiesHero from "@/components/CaseStudiesHero";
import { CaseStudyCards } from "@/components/CaseStudyCards";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { KeyOutcomes } from "@/components/KeyOutcomes";
import { CaseStudiesCTA } from "@/components/CaseStudiesCTA";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <CaseStudiesHero />
      <CaseStudyCards />
      <TestimonialsSection />
      <KeyOutcomes />
      <CaseStudiesCTA />
    </div>
  );
};

export default CaseStudies;
