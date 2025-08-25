import Navigation from "@/components/Navigation";
import CRMAutomationSection from "@/components/CRMAutomationSection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const CRMAutomation = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="CRM Automation Services - Setup, Optimization & Smart Workflows"
        description="Professional CRM automation services. Transform your customer data into a revenue-generating machine with smart pipelines, automated scoring, and seamless integrations. Starting at ₹25,000."
        keywords="CRM automation, CRM setup, lead scoring automation, pipeline management, HubSpot automation, Salesforce automation, customer relationship management"
        canonical="/crm-automation"
      />
      <Navigation />
      <CRMAutomationSection />
      <Footer />
    </div>
  );
};

export default CRMAutomation;