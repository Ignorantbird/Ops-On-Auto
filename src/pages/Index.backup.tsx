import Navigation from "@/components/Navigation";
import HeroSection from "@/components/OptimizedHeroSection";
import ServiceIconsSection from "@/components/ServiceIconsSection";
import HowItWorks from "@/components/HowItWorks";
import WhyOpsOnAuto from "@/components/WhyOpsOnAuto";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="AI Automation Solutions - Streamline Your Business"
        description="Transform your business with AI automation. CRM automation, voice AI, workflow optimization, and custom integrations. Save 20+ hours weekly with OpsOnAuto."
        keywords="AI automation, workflow automation, CRM automation, voice AI, business process automation, custom integrations"
        canonical="/"
      />
      <Navigation />
      <main>
        <HeroSection />
        <ServiceIconsSection />
        <HowItWorks />
        <WhyOpsOnAuto />
        <WhoWeWorkWith />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
