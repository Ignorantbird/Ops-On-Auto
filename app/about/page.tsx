import { pageMeta } from '@/lib/metadata';
import About from '@/views/About';

export const metadata = pageMeta({
  title: 'About Us — Founders Behind OpsOnAuto | Yash & Sarmistha',
  description:
    'Meet the founders of OpsOnAuto — Yash Bali (15+ years at SAP, Microsoft) and Sarmistha (BTech AI/ML, CTO). We build honest, affordable automation for Indian SMBs.',
  keywords:
    'OpsOnAuto founders, about OpsOnAuto, AI automation team India, Yash Bali, Sarmistha CTO, affordable business automation founders',
  canonical: '/about',
});

export default function AboutPage() {
  return <About />;
}
