'use client';

import { BOOKING_LINKS } from '@/lib/BookingLinks';

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.855L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.78 9.78 0 01-5.29-1.545l-.38-.225-3.937 1.028 1.052-3.828-.249-.394A9.78 9.78 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z" />
  </svg>
);

const packages = [
  {
    badge: 'Perfect for First-Timers 🚀',
    badgeStyle: 'bg-brand-teal-100 text-brand-teal-700',
    name: 'Quick Win',
    tagline: 'Test automation without the risk',
    price: '₹49,000',
    priceNote: 'One-time payment',
    savings: null,
    timeline: '1–2 weeks',
    features: [
      'Single workflow automation',
      'Google Sheets / Excel integration',
      'Basic dashboard (real-time view)',
      'Email OR WhatsApp notifications',
      '1 round of revisions',
      '14 days post-launch support',
    ],
    examples: [
      'WhatsApp leads → Google Sheets → Auto-reminders',
      'Inventory alerts when stock hits threshold',
      'Daily sales report generation',
    ],
    payment: { upfront: '₹24,500', delivery: '₹24,500' },
    ctaText: 'Start with Quick Win',
    ctaLink: 'https://wa.me/918777671056?text=Hi%20OpsOnAuto%2C%20I%27m%20interested%20in%20the%20Quick%20Win%20package%20(%E2%82%B949k).%20I%27d%20like%20a%20free%20business%20audit.',
    popular: false,
    perfFor: 'Small businesses testing automation for the first time.',
  },
  {
    badge: 'Most Popular ⭐',
    badgeStyle: 'bg-accent-orange text-white',
    name: 'Starter',
    tagline: 'Professional automation that just works',
    price: '₹99,000',
    priceNote: 'One-time payment',
    savings: 'Save ₹3–4L vs agencies',
    timeline: '3–4 weeks',
    features: [
      'Single comprehensive workflow automation',
      'Google Sheets / Excel + CRM integration',
      'Professional dashboard (analytics + reporting)',
      'Email + WhatsApp + SMS notifications',
      '2 rounds of revisions',
      '30 days post-launch support',
    ],
    examples: [
      'Complete lead management: Capture → Track → Follow-up → Report',
      'Manufacturing: Production tracking + inventory + alerts',
      'HR automation: Attendance + leave + payroll reporting',
    ],
    payment: { upfront: '₹49,500', delivery: '₹49,500' },
    ctaText: 'Book Free Audit — Starter Plan',
    ctaLink: 'https://wa.me/918777671056?text=Hi%20OpsOnAuto%2C%20I%27m%20interested%20in%20the%20Starter%20package%20(%E2%82%B999k).%20I%27d%20like%20a%20free%20business%20audit.',
    popular: true,
    perfFor: 'Growing businesses ready to eliminate manual chaos and save 10–15 hours/week.',
  },
  {
    badge: 'Complete Solution',
    badgeStyle: 'bg-dark-navy text-white',
    name: 'Growth',
    tagline: 'Scale operations without scaling headcount',
    price: '₹1,99,000',
    priceNote: 'One-time payment',
    savings: 'Save ₹6–8L vs agencies',
    timeline: '6–8 weeks',
    features: [
      '2–3 workflow automations',
      'CRM / ERP integration (any platform)',
      'AI calling agent OR AI chatbot (choose one)',
      'Custom analytics dashboard',
      'Automated reporting (daily / weekly / monthly)',
      'Multi-channel automation (WhatsApp / Email / SMS)',
      '3 rounds of revisions',
      '90 days post-launch support',
    ],
    examples: [
      'Full sales: Leads → AI qualification → CRM → Follow-ups → Reports',
      'Manufacturing suite: Production + inventory + vendor + invoicing',
      'Real estate: AI agent → CRM → Drip campaigns → Analytics',
    ],
    payment: { upfront: '₹99,500', delivery: '₹99,500' },
    ctaText: 'Talk to Our CTO — Growth Plan',
    ctaLink: 'https://wa.me/918777671056?text=Hi%20OpsOnAuto%2C%20I%27m%20interested%20in%20the%20Growth%20package%20(%E2%82%B91.99L).%20I%27d%20like%20a%20free%20business%20audit.',
    popular: false,
    perfFor: 'Mid-sized businesses ready to automate multiple departments and save 30–40 hours/week.',
  },
];

export default function PricingPackages() {
  return (
    <section id="pricing-packages" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark-navy mb-4">
            Choose Your Plan. Start Automating Today.
          </h2>
          <p className="font-body text-lg text-dark-navy-300 max-w-2xl mx-auto">
            All packages include planning, development, testing, deployment, and support.
            No hidden costs. No surprises.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border-2 overflow-hidden transition-shadow hover:shadow-xl ${
                pkg.popular
                  ? 'border-accent-orange shadow-lg'
                  : 'border-light-cyan-200'
              }`}
            >
              {/* Badge */}
              <div className={`px-4 py-2 text-center text-sm font-heading font-semibold ${pkg.badgeStyle}`}>
                {pkg.badge}
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 bg-light-cyan-50 p-6">
                {/* Package name + tagline */}
                <h3 className="font-heading text-2xl font-bold text-dark-navy mb-1">{pkg.name}</h3>
                <p className="font-body text-sm text-dark-navy-300 mb-5">{pkg.tagline}</p>

                {/* Price */}
                <div className="mb-2">
                  <span className="font-heading text-5xl font-extrabold text-dark-navy">{pkg.price}</span>
                </div>
                <p className="font-body text-sm text-dark-navy-300 mb-1">{pkg.priceNote}</p>
                {pkg.savings && (
                  <p className="font-body text-sm font-semibold text-brand-teal mb-4">{pkg.savings}</p>
                )}

                {/* Timeline */}
                <div
                  className="inline-flex items-center gap-1.5 mb-6 px-3 py-1.5 rounded-full text-sm font-body font-semibold text-white self-start"
                  style={{ backgroundColor: '#17a2b8' }}
                >
                  ⏱ {pkg.timeline}
                </div>

                {/* What's included */}
                <h4 className="font-heading text-sm font-semibold text-dark-navy uppercase tracking-wide mb-3">
                  What&apos;s Included
                </h4>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 font-body text-sm text-dark-navy-400">
                      <span className="text-brand-teal font-bold mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Perfect for */}
                <div className="bg-white/60 rounded-xl p-3 mb-4">
                  <p className="font-body text-xs text-dark-navy-300">
                    <strong className="text-dark-navy">Perfect for:</strong> {pkg.perfFor}
                  </p>
                </div>

                {/* Examples */}
                <div className="mb-6">
                  <h4 className="font-heading text-xs font-semibold text-dark-navy-300 uppercase tracking-wide mb-2">
                    Examples
                  </h4>
                  <ul className="space-y-1">
                    {pkg.examples.map((ex) => (
                      <li key={ex} className="font-body text-xs text-dark-navy-300 flex items-start gap-1.5">
                        <span className="text-accent-orange mt-0.5">→</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Payment split */}
                <div className="bg-white rounded-xl p-3 mb-6 border border-light-cyan-200">
                  <p className="font-heading text-xs font-semibold text-dark-navy-300 uppercase tracking-wide mb-2">
                    Payment (50 / 50)
                  </p>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-dark-navy-300">Upfront</span>
                    <span className="font-semibold text-dark-navy">{pkg.payment.upfront}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm mt-1">
                    <span className="text-dark-navy-300">On delivery</span>
                    <span className="font-semibold text-dark-navy">{pkg.payment.delivery}</span>
                  </div>
                </div>

                {/* CTA — pushed to bottom */}
                <div className="mt-auto">
                  <a
                    href={pkg.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-heading font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ backgroundColor: '#17a2b8' }}
                  >
                    <WhatsAppIcon />
                    {pkg.ctaText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
