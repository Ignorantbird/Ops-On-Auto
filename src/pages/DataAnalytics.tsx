// src/pages/DataAnalytics.tsx - UPDATED FOR AGENTIC AI POSITIONING
import Navigation from "@/components/Navigation";
import DataAnalyticsSection from "@/components/DataAnalyticsSection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const DataAnalytics = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Analytical AI Agent - Intelligent Data Analysis & Predictive Insights | OpsOnAuto"
        description="Advanced Analytical AI Agent that thinks, analyzes, and recommends. Autonomous data analysis, predictive insights, and intelligent reporting. Premium Agentic AI starting from $1,500."
        keywords="analytical AI agent, agentic AI analytics, intelligent data analysis, AI agent data processing, autonomous analytics, predictive AI agent, data analytics automation, AI insights agent"
        canonical="/data-analytics"
      />
      <Navigation />
      <DataAnalyticsSection />
      <Footer />
    </div>
  );
};

export default DataAnalytics;