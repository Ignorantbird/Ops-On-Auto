/*
 * Ops On Auto - Business Automation Platform
 * Copyright (c) 2025 Ops On Auto (https://opsonauto.com)
 * All rights reserved. Unauthorized copying prohibited.
 * 
 * Proprietary and confidential software.
 * Contact: hello@opsonauto.com for licensing inquiries.
 */

// src/pages/OptimizedIndex.tsx - PERFORMANCE OPTIMIZED WITH LAZY LOADING
import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import { SEO } from "@/components/SEO";
import OptimizedHeroSection from "@/components/OptimizedHeroSection";

// LAZY LOAD components below the fold for better Core Web Vitals
const ServiceIconsSection = lazy(() => import("@/components/ServiceIconsSection"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const WhyOpsOnAuto = lazy(() => import("@/components/WhyOpsOnAuto"));
const WhoWeWorkWith = lazy(() => import("@/components/WhoWeWorkWith"));
const FAQ = lazy(() => import("@/components/FAQ"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading skeleton component for better UX
const SectionSkeleton = () => (
  <div className="animate-pulse py-20">
    <div className="container mx-auto px-6">
      <div className="h-8 bg-slate-200 rounded w-1/3 mx-auto mb-6"></div>
      <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto mb-4"></div>
      <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto"></div>
    </div>
  </div>
);

const OptimizedIndex = () => {
  return (
    <div className="min-h-screen">
      {/* CRITICAL: Optimized SEO for better search performance */}
      <SEO 
        title="AI Automation for Entrepreneurs - Save 20+ Hours Weekly | OpsOnAuto"
        description="Launch & scale faster with AI automation. CRM setup, voice AI bots, workflow optimization at 50-80% less cost. 2-week delivery, not 2-3 months. Free audit!"
        keywords="AI automation for startups, entrepreneur automation, CRM setup, voice AI bots, business automation, workflow optimization, startup tools, small business AI"
        canonical="/"
      />
      
      {/* Navigation - Critical for user interaction */}
      <Navigation />
      
      <main>
        {/* ABOVE THE FOLD: Critical for LCP - Load immediately */}
        <OptimizedHeroSection />
        
        {/* BELOW THE FOLD: Lazy loaded with smooth transitions */}
        <Suspense fallback={<SectionSkeleton />}>
          <ServiceIconsSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <HowItWorks />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <WhyOpsOnAuto />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <WhoWeWorkWith />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <FAQ />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <FinalCTA />
        </Suspense>
      </main>
      
      {/* Footer - Lazy loaded as it's least critical */}
      <Suspense fallback={<div className="h-32 bg-slate-100 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default OptimizedIndex;