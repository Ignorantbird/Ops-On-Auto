// src/pages/CRMAudit.tsx - NEW PAGE
import Navigation from "@/components/Navigation";
import CRMAuditForm from "@/components/CRMAuditForm";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const CRMAudit = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Free CRM Audit - Optimize Your Customer Relationship Management"
        description="Get a comprehensive free CRM audit from OpsOnAuto. Identify bottlenecks, improve lead scoring, and increase sales by 30%. Expert analysis included."
        keywords="free CRM audit, CRM optimization, lead scoring analysis, sales process audit, customer relationship management review"
        canonical="/crm-audit"
      />
      <Navigation />
      <CRMAuditForm />
      <Footer />
    </div>
  );
};

export default CRMAudit;