// src/pages/ProgrammaticSEO.tsx - UPDATED FOR GENERATIVE AI POSITIONING
import Navigation from "@/components/Navigation";
import ProgrammaticSEOSection from "@/components/ProgrammaticSEOSection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const ProgrammaticSEO = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="AI Content Generation System - Programmatic SEO at Scale | OpsOnAuto"
        description="Advanced AI Content Generation System that creates SEO-optimized content at scale. AI-powered programmatic SEO that generates hundreds of pages automatically. Premium Generative AI starting from $700."
        keywords="AI content generation, generative AI content, programmatic SEO, automated content creation, AI content factory, content generation at scale, SEO content automation, generative AI SEO"
        canonical="/programmatic-seo"
      />
      <Navigation />
      <ProgrammaticSEOSection />
      <Footer />
    </div>
  );
};

export default ProgrammaticSEO;