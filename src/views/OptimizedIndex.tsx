'use client';

import { lazy, Suspense } from "react";
import OptimizedHeroSection from "@/components/OptimizedHeroSection";

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
      <OptimizedHeroSection />

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
    </div>
  );
};

export default OptimizedIndex;