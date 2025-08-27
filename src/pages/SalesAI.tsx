// src/pages/SalesAI.tsx - COMPLETE NEW PAGE
import Navigation from "@/components/Navigation";
import SalesAISection from "@/components/SalesAISection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const SalesAI = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="AI Sales Person - 24/7 Sales Team Automation | OpsOnAuto"
        description="Professional AI Sales Person services. 24/7 AI that handles lead qualification, objection management, and sales conversations. 3-5x ROI guaranteed. From ₹55,000."
        keywords="AI sales person, sales automation, lead qualification AI, AI objection handling, automated sales, sales AI bot, sales process automation, AI sales team"
        canonical="/sales-ai"
      />
      <Navigation />
      <SalesAISection />
      <Footer />
    </div>
  );
};

export default SalesAI;