// src/pages/GenerativeAI.tsx - COMPLETE NEW PAGE
import Navigation from "@/components/Navigation";
import GenerativeAISection from "@/components/GenerativeAISection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const GenerativeAI = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Generative AI Solutions - Custom Content & Creative Automation"
        description="Professional Generative AI services. Custom AI that creates brand-consistent content, proposals, and marketing materials at scale. From ₹45,000. Save 60% on content costs."
        keywords="generative AI, AI content creation, automated content, brand voice AI, marketing automation, AI copywriting, content scaling, creative automation"
        canonical="/generative-ai"
      />
      <Navigation />
      <GenerativeAISection />
      <Footer />
    </div>
  );
};

export default GenerativeAI;