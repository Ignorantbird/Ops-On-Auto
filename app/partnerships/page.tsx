import { pageMeta } from '@/lib/metadata';
import Partnerships from '@/views/Partnerships';

export const metadata = pageMeta({
  title: 'Partnerships - Partner With OpsOnAuto',
  description:
    'Partner with OpsOnAuto to offer AI automation solutions. Explore referral, agency, and technology partnership opportunities.',
  keywords:
    'OpsOnAuto partnerships, AI automation partner, referral program, agency partnership',
  canonical: '/partnerships',
});

export default function PartnershipsPage() {
  return <Partnerships />;
}
