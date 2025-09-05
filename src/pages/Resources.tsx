// src/pages/Resources.tsx - FIXED TO USE SEO COMPONENT
import Navigation from "@/components/Navigation";
import { SEO } from "@/components/SEO"; // Use centralized SEO component
import ResourcesHero from "@/components/ResourcesHero";
import CategoryFilter from "@/components/CategoryFilter";
import FeaturedPosts from "@/components/FeaturedPosts";
import BlogGrid from "@/components/BlogGrid";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import ResourcesCTA from "@/components/ResourcesCTA";
import Footer from "@/components/Footer";
import { useState } from "react";

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  return (
    <>
      {/* FIXED: Use SEO component instead of Helmet directly */}
      <SEO
        title="Resources & Blog - AI Automation Insights"
        description="Explore automation guides, AI implementation tips, workflow optimization strategies, and industry insights from OpsOnAuto experts."
        keywords="automation guides, AI insights, workflow optimization, CRM automation, voice AI, programmatic SEO"
        canonical="/resources"
      />
      
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
        <ResourcesHero />
        <CategoryFilter 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <FeaturedPosts />
        <BlogGrid activeCategory={activeCategory} />
        <LeadMagnetSection />
        <ResourcesCTA />
      </main>
      <Footer />
    </>
  );
};

export default Resources;