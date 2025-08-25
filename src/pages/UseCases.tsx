// 1. FIXED UseCases.tsx - Main page container
import Navigation from "@/components/Navigation";
import UseCasesHero from "@/components/UseCasesHero";
import UseCaseCards from "@/components/UseCaseCards";
import ImpactMetrics from "@/components/ImpactMetrics";
import ProcessLinkback from "@/components/ProcessLinkback";
import UseCasesCTA from "@/components/UseCasesCTA";
import Footer from "@/components/Footer";

const UseCases = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <UseCasesHero />
      <UseCaseCards />
      <ImpactMetrics />
      <ProcessLinkback />
      <UseCasesCTA />
      <Footer />
    </div>
  );
};

export default UseCases;