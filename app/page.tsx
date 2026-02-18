import { pageMeta } from '@/lib/metadata';
import OptimizedIndex from '@/views/OptimizedIndex';

export const metadata = pageMeta({
  title: 'AI Business Automation for Indian SMBs | OpsOnAuto',
  description:
    'Save 5-10 hours/week with custom AI workflows for real estate, manufacturing, textile, automotive & lead gen businesses. Free business audit — results in 2 weeks.',
  keywords:
    'business automation India, SMB automation, real estate CRM, manufacturing workflow, WhatsApp automation, lead management, AI operations, OpsOnAuto',
  canonical: '/',
});

export default function HomePage() {
  return <OptimizedIndex />;
}
