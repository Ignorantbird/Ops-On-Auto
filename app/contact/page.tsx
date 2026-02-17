import { pageMeta } from '@/lib/metadata';
import Contact from '@/views/Contact';

export const metadata = pageMeta({
  title: 'Contact OpsOnAuto - Get Your Free Automation Consultation',
  description:
    'Contact OpsOnAuto for AI automation solutions. Free consultation, custom quotes, and expert support. Based in India, serving clients worldwide.',
  keywords:
    'contact OpsOnAuto, AI automation consultation, business automation support, workflow optimization contact',
  canonical: '/contact',
});

export default function ContactPage() {
  return <Contact />;
}
