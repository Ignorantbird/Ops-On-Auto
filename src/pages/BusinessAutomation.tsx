// src/pages/BusinessAutomation.tsx - COMPLETE NEW PAGE
import Navigation from "@/components/Navigation";
import BusinessAutomationSection from "@/components/BusinessAutomationSection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const BusinessAutomation = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Business Automation Services - Smart Workflows & Process Optimization"
        description="Professional business automation services. Streamline workflows, optimize CRM systems, and eliminate manual bottlenecks. Entry-level automation solutions starting from $500."
        keywords="business automation, workflow automation, CRM automation, process optimization, task automation, workflow management, business process automation, smart workflows"
        canonical="/business-automation"
      />
      <Navigation />
      <BusinessAutomationSection />
      <Footer />
    </div>
  );
};

export default BusinessAutomation;