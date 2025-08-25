// src/pages/CaseStudies.tsx - FIXED WITH FOOTER
import Navigation from "@/components/Navigation";
import CaseStudiesHero from "@/components/CaseStudiesHero";
import { CaseStudyCards } from "@/components/CaseStudyCards";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { KeyOutcomes } from "@/components/KeyOutcomes";
import { CaseStudiesCTA } from "@/components/CaseStudiesCTA";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <CaseStudiesHero />
        <CaseStudyCards />
        <TestimonialsSection />
        <KeyOutcomes />
        <CaseStudiesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;