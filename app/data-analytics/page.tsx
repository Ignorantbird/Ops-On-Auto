import { pageMeta } from '@/lib/metadata';
import DataAnalytics from '@/views/DataAnalytics';

export const metadata = pageMeta({
  title: 'Analytical AI Agent - Intelligent Data Analysis & Predictive Insights',
  description:
    'Advanced Analytical AI Agent that thinks, analyzes, and recommends. Autonomous data analysis, predictive insights, and intelligent reporting. Premium Agentic AI starting from $1,500.',
  keywords:
    'analytical AI agent, agentic AI analytics, intelligent data analysis, AI agent data processing, autonomous analytics, predictive AI agent, data analytics automation, AI insights agent',
  canonical: '/data-analytics',
});

export default function DataAnalyticsPage() {
  return <DataAnalytics />;
}
