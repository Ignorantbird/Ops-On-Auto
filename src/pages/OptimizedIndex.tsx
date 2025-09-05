// src/pages/OptimizedIndex.tsx - ULTRA PERFORMANCE OPTIMIZED
import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import { SEO } from "@/components/SEO";
import OptimizedHeroSection from "@/components/OptimizedHeroSection";

// AGGRESSIVE LAZY LOADING - Load everything below the fold lazily
const ServiceIconsSection = lazy(() => 
  import("@/components/ServiceIconsSection").then(module => ({
    default: module.default
  }))
);
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const WhyOpsOnAuto = lazy(() => import("@/components/WhyOpsOnAuto"));
const WhoWeWorkWith = lazy(() => import("@/components/WhoWeWorkWith"));
const FAQ = lazy(() => import("@/components/FAQ"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const Footer = lazy(() => import("@/components/Footer"));

// Minimal loading skeleton for better perceived performance
const MinimalSkeleton = () => (
  <div className="animate-pulse py-12">
    <div className="container mx-auto px-6">
      <div className="h-6 bg-slate-200 rounded w-1/3 mx-auto mb-4"></div>
      <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto"></div>
    </div>
  </div>
);

const OptimizedIndex = () => {
  return (
    <div className="min-h-screen">
      {/* CRITICAL: Optimized SEO for better search performance */}
      <SEO 
        title="AI Automation Services - 2 Week Setup | OpsOnAuto"
        description="Launch & scale faster with AI automation. CRM setup, voice AI bots, workflow optimization at 50-80% less cost. 2-week delivery, not 2-3 months. Free audit!"
        keywords="AI automation for startups, entrepreneur automation, CRM setup, voice AI bots, business automation, workflow optimization, startup tools, small business AI"
        canonical="/"
      />
      
      {/* Navigation - Critical for user interaction, load immediately */}
      <Navigation />
      
      <main>
        {/* ABOVE THE FOLD: Critical for LCP - Load immediately */}
        <OptimizedHeroSection />
        
        {/* BELOW THE FOLD: Aggressively lazy loaded with minimal skeletons */}
        <Suspense fallback={<MinimalSkeleton />}>
          <ServiceIconsSection />
        </Suspense>
        
        <Suspense fallback={<MinimalSkeleton />}>
          <HowItWorks />
        </Suspense>
        
        <Suspense fallback={<MinimalSkeleton />}>
          <WhyOpsOnAuto />
        </Suspense>
        
        <Suspense fallback={<MinimalSkeleton />}>
          <WhoWeWorkWith />
        </Suspense>
        
        <Suspense fallback={<MinimalSkeleton />}>
          <FAQ />
        </Suspense>
        
        <Suspense fallback={<MinimalSkeleton />}>
          <FinalCTA />
        </Suspense>
        
        {/* Footer - Lowest priority, minimal skeleton */}
        <Suspense fallback={<div className="h-20 bg-slate-100"></div>}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default OptimizedIndex;