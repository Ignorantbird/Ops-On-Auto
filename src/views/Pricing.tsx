'use client';

import { lazy, Suspense } from 'react';
import PricingHeroNew from '@/components/pricing/PricingHeroNew';
import PricingPackages from '@/components/pricing/PricingPackages';

const PricingAddOnsComparison = lazy(() => import('@/components/pricing/PricingAddOnsComparison'));
const PricingROICalculator = lazy(() => import('@/components/pricing/PricingROICalculator'));
const PricingCaseStudyExamples = lazy(() => import('@/components/pricing/PricingCaseStudyExamples'));
const PricingTransparency = lazy(() => import('@/components/pricing/PricingTransparency'));
const PricingFAQNew = lazy(() => import('@/components/pricing/PricingFAQNew'));
const PricingCTANew = lazy(() => import('@/components/pricing/PricingCTANew'));

const MinimalSkeleton = () => (
  <div className="animate-pulse py-12">
    <div className="container mx-auto px-6">
      <div className="h-6 bg-slate-200 rounded w-1/3 mx-auto mb-4" />
      <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto" />
    </div>
  </div>
);

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white font-body">
      <PricingHeroNew />
      <PricingPackages />

      <Suspense fallback={<MinimalSkeleton />}>
        <PricingAddOnsComparison />
      </Suspense>

      <Suspense fallback={<MinimalSkeleton />}>
        <PricingROICalculator />
      </Suspense>

      <Suspense fallback={<MinimalSkeleton />}>
        <PricingCaseStudyExamples />
      </Suspense>

      <Suspense fallback={<MinimalSkeleton />}>
        <PricingTransparency />
      </Suspense>

      <Suspense fallback={<MinimalSkeleton />}>
        <PricingFAQNew />
      </Suspense>

      <Suspense fallback={<MinimalSkeleton />}>
        <PricingCTANew />
      </Suspense>
    </div>
  );
};

export default Pricing;
