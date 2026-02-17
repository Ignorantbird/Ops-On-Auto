import { pageMeta } from '@/lib/metadata';
import AgenticAI from '@/views/AgenticAI';

export const metadata = pageMeta({
  title: 'Agentic AI Solutions - Autonomous AI Agents That Work 24/7',
  description:
    'Advanced Agentic AI solutions: AI Sales Persons, Voice AI Bots, Interview AI, and Data Analytics. Deploy intelligent agents that think, decide, and act autonomously to grow your business 24/7.',
  keywords:
    'agentic AI, AI sales person, autonomous AI agents, voice AI bots, sales automation, interview AI, AI data analysis, AI decision making, conversational AI',
  canonical: '/agentic-ai',
});

export default function AgenticAIPage() {
  return <AgenticAI />;
}
