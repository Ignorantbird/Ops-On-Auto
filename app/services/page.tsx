import { pageMeta } from '@/lib/metadata';
import Services from '@/views/Services';

export const metadata = pageMeta({
  title: 'AI Automation Services - CRM, Voice AI & Custom Solutions',
  description:
    'Professional AI automation services including CRM automation, voice AI systems, workflow optimization, and custom integrations. Transform your business operations.',
  keywords:
    'AI automation services, CRM automation, voice AI, workflow automation, custom integrations, business process automation',
  canonical: '/services',
});

export default function ServicesPage() {
  return <Services />;
}
