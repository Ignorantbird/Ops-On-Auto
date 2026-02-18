import { pageMeta } from '@/lib/metadata';
import CaseStudies from '@/views/CaseStudies';

export const metadata = pageMeta({
  title: 'Case Studies — Real AI Automation Results for Indian SMBs',
  description:
    'See how manufacturing firms, lead gen agencies, and real estate developers in India save 40+ hours a week with custom AI automation from OpsOnAuto.',
  keywords:
    'AI automation case studies India, business automation results, workflow automation SMB, manufacturing automation, lead generation AI',
  canonical: '/case-studies',
});

export default function CaseStudiesPage() {
  return <CaseStudies />;
}
