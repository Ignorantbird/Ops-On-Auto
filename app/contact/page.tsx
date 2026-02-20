import { pageMeta } from '@/lib/metadata';
import Contact from '@/views/Contact';

export const metadata = pageMeta({
  title: 'Contact — Let\'s Automate Your Business | OpsOnAuto',
  description:
    'Get in touch with OpsOnAuto for a Free Business Audit. WhatsApp, email, or call us to discuss automation for your growing business. Based in Gurgaon, serving businesses across India.',
  keywords:
    'contact OpsOnAuto, free business audit booking, business automation inquiry, automation consultation India, OpsOnAuto Gurgaon contact',
  canonical: '/contact',
});

export default function ContactPage() {
  return <Contact />;
}
