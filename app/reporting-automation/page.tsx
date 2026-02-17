import { pageMeta } from '@/lib/metadata';
import ReportingAutomation from '@/views/ReportingAutomation';

export const metadata = pageMeta({
  title: 'Reporting & Analytics Automation Services - Real-time Dashboards & KPI Tracking',
  description:
    'Professional reporting automation services. Stop manually creating reports. Get automated dashboards with real-time insights that update themselves.',
  keywords:
    'reporting automation, analytics automation, dashboard automation, KPI tracking, automated reports, business intelligence, data visualization',
  canonical: '/reporting-automation',
});

export default function ReportingAutomationPage() {
  return <ReportingAutomation />;
}
