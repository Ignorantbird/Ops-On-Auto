import Navigation from "@/components/Navigation";
import ProgrammaticSEOSection from "@/components/ProgrammaticSEOSection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const ProgrammaticSEO = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Programmatic SEO & Content Automation - Scale Content That Ranks"
        description="Professional programmatic SEO services. Scale your content creation and SEO efforts with AI-powered systems that generate and optimize content automatically. Starting at ₹35,000."
        keywords="programmatic SEO, content automation, SEO automation, automated content generation, content scaling, SEO content, mass content creation, AI content"
        canonical="/programmatic-seo"
      />
      <Navigation />
      <ProgrammaticSEOSection />
      <Footer />
    </div>
  );
};

export default ProgrammaticSEO;