import { pageMeta } from '@/lib/metadata';
import UseCases from '@/views/UseCases';

export const metadata = pageMeta({
  title: 'AI Automation Use Cases - Real Business Applications',
  description:
    'Explore real-world AI automation use cases across industries. See how businesses save 20+ hours weekly with CRM, voice AI, and workflow automation.',
  keywords:
    'AI automation use cases, business automation examples, workflow automation applications, CRM automation use cases',
  canonical: '/use-cases',
});

export default function UseCasesPage() {
  return <UseCases />;
}
