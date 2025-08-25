import IntegrationsHero from "@/components/IntegrationsHero";
import { IntegrationsIntro } from "@/components/IntegrationsIntro";
import { IntegrationCategories } from "@/components/IntegrationCategories";
import { CustomIntegrations } from "@/components/CustomIntegrations";
import { IntegrationsCTA } from "@/components/IntegrationsCTA";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Integrations = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <IntegrationsHero />
        <IntegrationsIntro />
        <IntegrationCategories />
        <CustomIntegrations />
        <IntegrationsCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Integrations;