import { pageMeta } from '@/lib/metadata';
import ProgrammaticSEO from '@/views/ProgrammaticSEO';

export const metadata = pageMeta({
  title: 'AI Content Generation System - Programmatic SEO at Scale',
  description:
    'Advanced AI Content Generation System that creates SEO-optimized content at scale. AI-powered programmatic SEO that generates hundreds of pages automatically. Premium Generative AI starting from $700.',
  keywords:
    'AI content generation, generative AI content, programmatic SEO, automated content creation, AI content factory, content generation at scale, SEO content automation, generative AI SEO',
  canonical: '/programmatic-seo',
});

export default function ProgrammaticSEOPage() {
  return <ProgrammaticSEO />;
}
