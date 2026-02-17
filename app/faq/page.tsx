import { pageMeta } from '@/lib/metadata';
import FAQ from '@/views/FAQ';

export const metadata = pageMeta({
  title: 'Frequently Asked Questions - AI Automation',
  description:
    'Get answers to common questions about AI automation, pricing, implementation timelines, and how OpsOnAuto can help your business.',
  keywords:
    'AI automation FAQ, business automation questions, workflow automation help',
  canonical: '/faq',
});

export default function FAQPage() {
  return <FAQ />;
}
