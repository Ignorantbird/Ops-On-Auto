'use client';

import ResourcesHero from "@/components/ResourcesHero";
import CategoryFilter from "@/components/CategoryFilter";
import FeaturedPosts from "@/components/FeaturedPosts";
import BlogGrid from "@/components/BlogGrid";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import ResourcesCTA from "@/components/ResourcesCTA";
import { useState } from "react";

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <ResourcesHero />
      <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <FeaturedPosts />
      <BlogGrid activeCategory={activeCategory} />
      <LeadMagnetSection />
      <ResourcesCTA />
    </div>
  );
};

export default Resources;
