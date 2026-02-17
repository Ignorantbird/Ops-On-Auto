import { pageMeta } from '@/lib/metadata';
import WorkflowAutomation from '@/views/WorkflowAutomation';

export const metadata = pageMeta({
  title: 'Workflow Automation Services - Process Optimization & Task Automation',
  description:
    'Professional workflow automation services. Eliminate bottlenecks and repetitive tasks with intelligent automation that adapts to your business processes. Starting at $600.',
  keywords:
    'workflow automation, process automation, task automation, business process optimization, workflow management, process mapping, automation consulting',
  canonical: '/workflow-automation',
});

export default function WorkflowAutomationPage() {
  return <WorkflowAutomation />;
}
