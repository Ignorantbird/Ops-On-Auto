import { pageMeta } from '@/lib/metadata';
import Pricing from '@/views/Pricing';

export const metadata = pageMeta({
  title: 'Pricing — Fixed-Price Automation from ₹49,000 | OpsOnAuto',
  description:
    'Transparent automation pricing starting at ₹49,000. No hidden fees. 70–85% cheaper than agencies. 1–8 week delivery. See exactly what you pay upfront.',
  keywords:
    'business automation pricing India, affordable automation packages, fixed price automation, cheap business automation, transparent automation pricing, automation cost India, small business automation price',
  canonical: '/pricing',
});

export default function PricingPage() {
  return <Pricing />;
}
