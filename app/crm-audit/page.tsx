import { pageMeta } from '@/lib/metadata';
import CRMAudit from '@/views/CRMAudit';

export const metadata = pageMeta({
  title: 'Free CRM Audit - Optimize Your Customer Relationship Management',
  description:
    'Get a comprehensive free CRM audit from OpsOnAuto. Identify bottlenecks, improve lead scoring, and increase sales by 30%. Expert analysis included.',
  keywords:
    'free CRM audit, CRM optimization, lead scoring analysis, sales process audit, customer relationship management review',
  canonical: '/crm-audit',
});

export default function CRMAuditPage() {
  return <CRMAudit />;
}
