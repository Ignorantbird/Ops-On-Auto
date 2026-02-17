import { pageMeta } from '@/lib/metadata';
import Industries from '@/views/Industries';

export const metadata = pageMeta({
  title: 'Industries We Serve - AI Automation Solutions by Sector',
  description:
    'AI automation solutions tailored for your industry. From e-commerce to healthcare, see how we help businesses in every sector automate and scale.',
  keywords:
    'AI automation industries, business automation sectors, industry-specific AI solutions',
  canonical: '/industries',
});

export default function IndustriesPage() {
  return <Industries />;
}
