'use client';

import { lazy, Suspense } from 'react';
import HeroSection from '@/components/homepage/HeroSection';
import MobileWhatsAppBar from '@/components/homepage/MobileWhatsAppBar';

const IndustriesWeServe = lazy(() => import('@/components/homepage/IndustriesWeServe'));
const HowItWorksNew = lazy(() => import('@/components/homepage/HowItWorksNew'));
const ProofResults = lazy(() => import('@/components/homepage/ProofResults'));
const FinalCTANew = lazy(() => import('@/components/homepage/FinalCTANew'));

const MinimalSkeleton = () => (
  <div className="animate-pulse py-12">
    <div className="container mx-auto px-6">
      <div className="h-6 bg-slate-200 rounded w-1/3 mx-auto mb-4" />
      <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto" />
    </div>
  </div>
);

const OptimizedIndex = () => {
  return (
    <div className="min-h-screen font-body">
      <HeroSection />

      <Suspense fallback={<MinimalSkeleton />}>
        <IndustriesWeServe />
      </Suspense>

      <Suspense fallback={<MinimalSkeleton />}>
        <HowItWorksNew />
      </Suspense>

      <Suspense fallback={<MinimalSkeleton />}>
        <ProofResults />
      </Suspense>

      <Suspense fallback={<MinimalSkeleton />}>
        <FinalCTANew />
      </Suspense>

      <MobileWhatsAppBar />
    </div>
  );
};

export default OptimizedIndex;
