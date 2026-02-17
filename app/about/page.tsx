import { pageMeta } from '@/lib/metadata';
import About from '@/views/About';

export const metadata = pageMeta({
  title: 'About OpsOnAuto - AI Automation Experts',
  description:
    "Learn about OpsOnAuto's mission to streamline business operations through AI automation. Our story, values, and commitment to innovation.",
  keywords:
    'about OpsOnAuto, AI automation company, business automation experts, workflow optimization team',
  canonical: '/about',
});

export default function AboutPage() {
  return <About />;
}
