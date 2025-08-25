import Navigation from "@/components/Navigation";
import PricingHero from "@/components/PricingHero";
import PricingTable from "@/components/PricingTable";
import PricingComparison from "@/components/PricingComparison";
import PricingFAQ from "@/components/PricingFAQ";
import PricingCTA from "@/components/PricingCTA";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="AI Automation Pricing - Transparent & Affordable Solutions"
        description="Transparent pricing for AI automation services. Custom quotes, flexible packages, and ROI-focused solutions. Start with a free consultation."
        keywords="AI automation pricing, automation service costs, workflow automation pricing, CRM automation costs"
        canonical="/pricing"
      />
      <Navigation />
      <main>
        <PricingHero />
        <PricingTable />
        <PricingComparison />
        <PricingFAQ />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;