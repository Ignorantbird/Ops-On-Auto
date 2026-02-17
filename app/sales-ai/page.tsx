import { pageMeta } from '@/lib/metadata';
import SalesAI from '@/views/SalesAI';

export const metadata = pageMeta({
  title: 'AI Sales Agent - Intelligent Sales Automation That Thinks & Acts',
  description:
    'Advanced AI Sales Agent that thinks, plans & acts independently. 24/7 intelligent sales conversations, lead qualification, and deal closing. Premium Agentic AI starting from $1,100.',
  keywords:
    'AI sales agent, agentic AI sales, intelligent sales automation, AI sales person, autonomous sales AI, sales AI agent, AI that thinks and acts, sales process automation',
  canonical: '/sales-ai',
});

export default function SalesAIPage() {
  return <SalesAI />;
}
