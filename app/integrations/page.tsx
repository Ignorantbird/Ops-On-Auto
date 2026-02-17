import { pageMeta } from '@/lib/metadata';
import Integrations from '@/views/Integrations';

export const metadata = pageMeta({
  title: 'AI Automation Integrations - Connect Your Business Tools',
  description:
    'Seamless integrations with your existing business tools. Connect CRM, marketing, sales, and operations platforms with AI automation.',
  keywords:
    'AI automation integrations, CRM integrations, business tool connections, workflow integrations',
  canonical: '/integrations',
});

export default function IntegrationsPage() {
  return <Integrations />;
}
