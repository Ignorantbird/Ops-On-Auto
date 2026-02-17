import { pageMeta } from '@/lib/metadata';
import Resources from '@/views/Resources';

export const metadata = pageMeta({
  title: 'Resources & Blog - AI Automation Insights',
  description:
    'Explore automation guides, AI implementation tips, workflow optimization strategies, and industry insights from OpsOnAuto experts.',
  keywords:
    'automation guides, AI insights, workflow optimization, CRM automation, voice AI, programmatic SEO',
  canonical: '/resources',
});

export default function ResourcesPage() {
  return <Resources />;
}
