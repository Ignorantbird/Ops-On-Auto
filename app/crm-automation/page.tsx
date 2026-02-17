import { pageMeta } from '@/lib/metadata';
import CRMAutomation from '@/views/CRMAutomation';

export const metadata = pageMeta({
  title: 'CRM Automation Services - Setup, Optimization & Smart Workflows',
  description:
    'Professional CRM automation services. Transform your customer data into a revenue-generating machine with smart pipelines, automated scoring, and seamless integrations.',
  keywords:
    'CRM automation, CRM setup, lead scoring automation, pipeline management, HubSpot automation, Salesforce automation, customer relationship management',
  canonical: '/crm-automation',
});

export default function CRMAutomationPage() {
  return <CRMAutomation />;
}
