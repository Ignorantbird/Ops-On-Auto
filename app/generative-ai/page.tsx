import { pageMeta } from '@/lib/metadata';
import GenerativeAI from '@/views/GenerativeAI';

export const metadata = pageMeta({
  title: 'Generative AI Solutions - Custom Content & Creative Automation',
  description:
    'Professional Generative AI services. Custom AI that creates brand-consistent content, proposals, and marketing materials at scale. AI Data Processing and Programmatic SEO solutions starting from $800.',
  keywords:
    'generative AI, AI content creation, automated content, brand voice AI, marketing automation, AI copywriting, content scaling, creative automation, AI data processing, programmatic SEO',
  canonical: '/generative-ai',
});

export default function GenerativeAIPage() {
  return <GenerativeAI />;
}
