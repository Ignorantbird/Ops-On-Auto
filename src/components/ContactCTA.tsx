// src/components/ContactCTA.tsx - UPDATED
import { OptimizedCTASection } from "@/components/cta/StandardizedCTA";

const ContactCTA = () => {
  return (
    <OptimizedCTASection
      title="Ready to Start Automating?"
      subtitle="Schedule your free workflow audit today and see what's possible."
      primaryLabel="Book Free Demo"
      secondaryLabel="Learn More"
      background="gradient"
      primaryAction={() => {
        // Add your booking logic here
        window.open('/workflow-audit', '_blank');
      }}
      secondaryAction={() => {
        // Add your learn more logic here
        window.open('/contact', '_blank');
      }}
    />
  );
};

export default ContactCTA;