import { pageMeta } from '@/lib/metadata';
import OptimizedIndex from '@/views/OptimizedIndex';

export const metadata = pageMeta({
  title: 'AI Automation Services - 2 Week Setup | OpsOnAuto',
  description:
    'Launch & scale faster with AI automation. CRM setup, voice AI bots, workflow optimization at 50-80% less cost. 2-week delivery, not 2-3 months. Free audit!',
  keywords:
    'AI automation for startups, entrepreneur automation, CRM setup, voice AI bots, business automation, workflow optimization, startup tools, small business AI',
  canonical: '/',
});

export default function HomePage() {
  return <OptimizedIndex />;
}
