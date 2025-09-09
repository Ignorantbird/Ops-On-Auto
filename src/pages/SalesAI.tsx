// src/pages/SalesAI.tsx - UPDATED FOR AGENTIC AI POSITIONING
import Navigation from "@/components/Navigation";
import SalesAISection from "@/components/SalesAISection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const SalesAI = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="AI Sales Agent - Intelligent Sales Automation That Thinks & Acts | OpsOnAuto"
        description="Advanced AI Sales Agent that thinks, plans & acts independently. 24/7 intelligent sales conversations, lead qualification, and deal closing. Premium Agentic AI starting from $1,100."
        keywords="AI sales agent, agentic AI sales, intelligent sales automation, AI sales person, autonomous sales AI, sales AI agent, AI that thinks and acts, sales process automation"
        canonical="/sales-ai"
      />
      <Navigation />
      <SalesAISection />
      <Footer />
    </div>
  );
};

export default SalesAI;