'use client';

import { lazy, Suspense } from 'react';
import ContactHeroNew from '@/components/contact/ContactHeroNew';
import ContactAuditCard from '@/components/contact/ContactAuditCard';

const ContactChannels = lazy(() => import('@/components/contact/ContactChannels'));
const ContactFormNew = lazy(() => import('@/components/contact/ContactFormNew'));
const ContactLocationFAQ = lazy(() => import('@/components/contact/ContactLocationFAQ'));
const ContactCTANew = lazy(() => import('@/components/contact/ContactCTANew'));

const MinimalSkeleton = () => (
  <div className="animate-pulse py-12">
    <div className="container mx-auto px-6">
      <div className="h-6 bg-slate-200 rounded w-1/3 mx-auto mb-4" />
      <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto" />
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="min-h-screen bg-white font-body">
      <ContactHeroNew />
      <ContactAuditCard />

      <Suspense fallback={<MinimalSkeleton />}>
        <ContactChannels />
      </Suspense>

      <Suspense fallback={<MinimalSkeleton />}>
        <ContactFormNew />
      </Suspense>

      <Suspense fallback={<MinimalSkeleton />}>
        <ContactLocationFAQ />
      </Suspense>

      <Suspense fallback={<MinimalSkeleton />}>
        <ContactCTANew />
      </Suspense>
    </div>
  );
};

export default Contact;
