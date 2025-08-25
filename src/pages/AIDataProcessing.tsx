import Navigation from "@/components/Navigation";
import AIDataProcessingSection from "@/components/AIDataProcessingSection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const AIDataProcessing = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="AI Data Processing & Insights - Intelligent Workflow Automation"
        description="Transform raw data into actionable insights with AI-powered workflows. Automated transcription, intelligent analysis, and smart reporting. Custom AI data processing pipelines starting at ₹45,000."
        keywords="AI data processing, intelligent data analysis, AI workflow automation, data insights, AI transcription, automated analysis, business intelligence AI"
        canonical="/ai-data-processing"
      />
      <Navigation />
      <AIDataProcessingSection />
      <Footer />
    </div>
  );
};

export default AIDataProcessing;