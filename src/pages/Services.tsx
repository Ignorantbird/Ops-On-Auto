import Navigation from "@/components/Navigation";
import ServicesHero from "@/components/ServicesHero";
import ServicesIntro from "@/components/ServicesIntro";
import ServiceCards from "@/components/ServiceCards";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="AI Automation Services - CRM, Voice AI & Custom Solutions"
        description="Professional AI automation services including CRM automation, voice AI systems, workflow optimization, and custom integrations. Transform your business operations."
        keywords="AI automation services, CRM automation, voice AI, workflow automation, custom integrations, business process automation"
        canonical="/services"
      />
      <Navigation />
      <ServicesHero />
      <ServicesIntro />
      <ServiceCards />
      <WhoWeWorkWith />
      <HowItWorks />
      
      {/* REMOVED: Duplicate "Ready to Automate Section" - This was causing the duplicate */}
      
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Services;