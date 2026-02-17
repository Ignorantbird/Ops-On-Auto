import { pageMeta } from '@/lib/metadata';
import BusinessAutomation from '@/views/BusinessAutomation';

export const metadata = pageMeta({
  title: 'Business Automation Services - Smart Workflows & Process Optimization',
  description:
    'Professional business automation services. Streamline workflows, optimize CRM systems, and eliminate manual bottlenecks. Entry-level automation solutions starting from $500.',
  keywords:
    'business automation, workflow automation, CRM automation, process optimization, task automation, workflow management, business process automation, smart workflows',
  canonical: '/business-automation',
});

export default function BusinessAutomationPage() {
  return <BusinessAutomation />;
}
