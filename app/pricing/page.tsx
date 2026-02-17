import { pageMeta } from '@/lib/metadata';
import Pricing from '@/views/Pricing';

export const metadata = pageMeta({
  title: 'AI Automation Pricing - Transparent & Affordable Solutions',
  description:
    'Transparent pricing for AI automation services. Custom quotes, flexible packages, and ROI-focused solutions. Start with a free consultation.',
  keywords:
    'AI automation pricing, automation service costs, workflow automation pricing, CRM automation costs',
  canonical: '/pricing',
});

export default function PricingPage() {
  return <Pricing />;
}
