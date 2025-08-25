import Navigation from "@/components/Navigation";
import ReportingAutomationSection from "@/components/ReportingAutomationSection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const ReportingAutomation = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Reporting & Analytics Automation Services - Real-time Dashboards & KPI Tracking"
        description="Professional reporting automation services. Stop manually creating reports. Get automated dashboards with real-time insights that update themselves. Starting at ₹20,000."
        keywords="reporting automation, analytics automation, dashboard automation, KPI tracking, automated reports, business intelligence, data visualization"
        canonical="/reporting-automation"
      />
      <Navigation />
      <ReportingAutomationSection />
      <Footer />
    </div>
  );
};

export default ReportingAutomation;