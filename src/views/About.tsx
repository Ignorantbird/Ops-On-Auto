'use client';

import { lazy, Suspense } from 'react';
import AboutHeroNew from '@/components/about/AboutHeroNew';
import MeetTheTeam from '@/components/about/MeetTheTeam';

const OurStoryNew = lazy(() => import('@/components/about/OurStoryNew'));
const HowWereDifferent = lazy(() => import('@/components/about/HowWereDifferent'));
const AboutCTANew = lazy(() => import('@/components/about/AboutCTANew'));

const MinimalSkeleton = () => (
  <div className="animate-pulse py-12">
    <div className="container mx-auto px-6">
      <div className="h-6 bg-slate-200 rounded w-1/3 mx-auto mb-4" />
      <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto" />
    </div>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-white font-body">
      <AboutHeroNew />

      <Suspense fallback={<MinimalSkeleton />}>
        <OurStoryNew />
      </Suspense>

      <MeetTheTeam />

      <Suspense fallback={<MinimalSkeleton />}>
        <HowWereDifferent />
      </Suspense>

      <Suspense fallback={<MinimalSkeleton />}>
        <AboutCTANew />
      </Suspense>
    </div>
  );
};

export default About;
