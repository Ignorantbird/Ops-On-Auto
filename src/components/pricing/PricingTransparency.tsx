'use client';

const paymentBreakdown = [
  {
    name: 'Quick Win',
    total: '₹49,000',
    upfront: '₹24,500',
    delivery: '₹24,500',
  },
  {
    name: 'Starter',
    total: '₹99,000',
    upfront: '₹49,500',
    delivery: '₹49,500',
  },
  {
    name: 'Growth',
    total: '₹1,99,000',
    upfront: '₹99,500',
    delivery: '₹99,500',
  },
];

const paymentMethods = [
  { icon: '🏦', label: 'Bank Transfer (NEFT / RTGS / IMPS)' },
  { icon: '📱', label: 'UPI (up to ₹1L)' },
  { icon: '📄', label: 'Cheque' },
  { icon: '🧾', label: 'Invoice + payment terms (GST-registered businesses)' },
];

const included = [
  { item: 'Free Business Audit', sub: '45–60 min discovery call' },
  { item: 'Detailed Project Plan', sub: 'See exactly what you get before you pay' },
  { item: 'Custom Development', sub: 'Built for your exact workflows' },
  { item: 'Testing & QA', sub: 'Thoroughly tested before you see it' },
  { item: 'Deployment', sub: 'We launch it for you' },
  { item: 'Team Training', sub: 'We teach your team how to use it' },
  { item: 'Documentation', sub: 'Written guides + video walkthroughs' },
  { item: 'Post-Launch Support', sub: '14–90 days depending on package' },
];

const notIncluded = [
  'Ongoing monthly maintenance after support period ends',
  'Additional integrations beyond package scope',
  'Extra training sessions beyond included allocation',
];

const guarantees = [
  {
    title: 'See the Plan Before You Pay',
    desc: 'After the Free Business Audit, we create a detailed project plan showing exactly what we\'ll build. You approve it before paying anything.',
  },
  {
    title: 'Fixed Scope, Fixed Price',
    desc: 'The price we quote is the price you pay. No surprise bills. No scope creep charges. No hidden fees.',
  },
  {
    title: 'Pay as We Deliver',
    desc: 'You pay 50% upfront, 50% when we deliver. You see progress throughout — not just at the end.',
  },
  {
    title: 'Money-Back if We Don\'t Deliver',
    desc: "If we don't deliver what's in the approved project plan, you get a full refund. Simple as that.",
  },
  {
    title: 'No Long-Term Lock-In',
    desc: 'After launch, ongoing support is optional. Month-to-month. Cancel anytime. No contracts.',
  },
];

export default function PricingTransparency() {
  return (
    <>
      {/* ── Payment Terms ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark-navy mb-3">
              Simple, Transparent Payment
            </h2>
            <p className="font-body text-lg text-dark-navy-300 max-w-xl mx-auto">
              Pay half upfront, half on delivery. No credit checks. No complicated terms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {paymentBreakdown.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-light-cyan-50 rounded-2xl border border-light-cyan-200 p-6 text-center"
              >
                <h3 className="font-heading text-lg font-bold text-dark-navy mb-1">{pkg.name}</h3>
                <p className="font-heading text-3xl font-extrabold text-dark-navy mb-4">{pkg.total}</p>
                <div className="space-y-2">
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-dark-navy-300">Upfront (50%)</span>
                    <span className="font-semibold text-dark-navy">{pkg.upfront}</span>
                  </div>
                  <div className="h-px bg-light-cyan-200" />
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-dark-navy-300">On Delivery (50%)</span>
                    <span className="font-semibold text-dark-navy">{pkg.delivery}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Payment methods */}
          <div className="bg-light-cyan-50 rounded-2xl border border-light-cyan-200 p-6">
            <h3 className="font-heading text-sm font-semibold text-dark-navy-300 uppercase tracking-wide mb-4">
              Payment Methods Accepted
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {paymentMethods.map((m) => (
                <div key={m.label} className="flex items-center gap-3 font-body text-sm text-dark-navy">
                  <span className="text-xl">{m.icon}</span>
                  {m.label}
                </div>
              ))}
            </div>
            <p className="font-body text-xs text-dark-navy-300 mt-4">
              No installment plans — we keep it simple. Pay half when we start, half when we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* ── What's Included ───────────────────────────────── */}
      <section className="py-20 bg-light-cyan-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark-navy mb-3">
              No Hidden Costs. Everything&apos;s Included.
            </h2>
            <p className="font-body text-lg text-dark-navy-300 max-w-2xl mx-auto">
              Unlike agencies that surprise you with extra charges, our pricing includes everything you need to go live.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Included */}
            <div className="bg-white rounded-2xl border border-light-cyan-200 p-6">
              <h3
                className="font-heading text-sm font-semibold uppercase tracking-wide mb-5"
                style={{ color: '#17a2b8' }}
              >
                ✓ Included in Every Package
              </h3>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item.item} className="flex items-start gap-3">
                    <span className="font-bold mt-0.5" style={{ color: '#17a2b8' }}>✓</span>
                    <div>
                      <p className="font-heading text-sm font-semibold text-dark-navy">{item.item}</p>
                      <p className="font-body text-xs text-dark-navy-300">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not included */}
            <div className="bg-white rounded-2xl border border-light-cyan-200 p-6">
              <h3 className="font-heading text-sm font-semibold text-dark-navy-300 uppercase tracking-wide mb-5">
                ✕ Not Included (Available as Add-Ons)
              </h3>
              <ul className="space-y-4">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-dark-navy-200 font-bold mt-0.5">✕</span>
                    <p className="font-body text-sm text-dark-navy-300">{item}</p>
                  </li>
                ))}
              </ul>

              {/* Guarantee section */}
              <div className="mt-8 pt-6 border-t border-light-cyan-200">
                <h3 className="font-heading text-lg font-bold text-dark-navy mb-4">
                  No Risk. 100% Transparent.
                </h3>
                <ul className="space-y-4">
                  {guarantees.map((g) => (
                    <li key={g.title} className="flex items-start gap-3">
                      <span className="text-accent-orange text-lg mt-0.5">🛡</span>
                      <div>
                        <p className="font-heading text-sm font-semibold text-dark-navy">{g.title}</p>
                        <p className="font-body text-xs text-dark-navy-300 mt-0.5 leading-relaxed">{g.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
