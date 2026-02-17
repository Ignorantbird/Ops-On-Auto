import { pageMeta } from '@/lib/metadata';
import CaseStudies from '@/views/CaseStudies';

export const metadata = pageMeta({
  title: 'Case Studies - AI Automation Success Stories',
  description:
    'Real results from real businesses. See how our AI automation solutions helped companies save time, reduce costs, and scale operations.',
  keywords:
    'AI automation case studies, business automation results, workflow automation success stories',
  canonical: '/case-studies',
});

export default function CaseStudiesPage() {
  return <CaseStudies />;
}
