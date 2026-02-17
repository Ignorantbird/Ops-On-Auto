import { pageMeta } from '@/lib/metadata';
import WorkflowAudit from '@/views/WorkflowAudit';

export const metadata = pageMeta({
  title: 'Free Workflow Audit - Find Automation Opportunities',
  description:
    'Get a free workflow audit from OpsOnAuto. Identify bottlenecks, discover automation opportunities, and get a roadmap to save 20+ hours weekly.',
  keywords:
    'free workflow audit, business process audit, automation assessment, workflow optimization',
  canonical: '/workflow-audit',
});

export default function WorkflowAuditPage() {
  return <WorkflowAudit />;
}
