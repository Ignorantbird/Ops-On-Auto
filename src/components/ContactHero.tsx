// src/components/ContactHero.tsx - UPDATED
import { OptimizedHeroSection } from "@/components/cta/StandardizedCTA";

const ContactHero = () => {
  return (
    <OptimizedHeroSection
      title="Let's Automate Your Success"
      subtitle="We're here to answer your questions, discuss your project, and help you remove repetitive tasks from your workflow."
      primaryLabel="Book Free Demo"
      secondaryLabel="Send a Message"
      trustIndicators={[
        "No long-term contracts",
        "30-day money-back guarantee", 
        "Setup in 2 weeks or less"
      ]}
      primaryAction={() => {
        window.open('/workflow-audit', '_blank');
      }}
      secondaryAction={() => {
        window.open('/contact', '_blank');
      }}
    />
  );
};

export default ContactHero;