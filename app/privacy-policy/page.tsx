import { pageMeta } from '@/lib/metadata';
import PrivacyPolicy from '@/views/PrivacyPolicy';

export const metadata = pageMeta({
  title: 'Privacy Policy',
  description:
    'OpsOnAuto privacy policy. Learn how we collect, use, and protect your personal information.',
  canonical: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
