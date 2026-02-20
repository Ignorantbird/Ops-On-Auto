'use client';

const addOns = [
  {
    category: 'Ongoing Support & Maintenance',
    items: [
      { name: 'Essential Support', price: '₹9,999 / month', desc: 'Bug fixes, minor updates, priority support' },
      { name: 'Growth Support', price: '₹14,999 / month', desc: 'Everything above + monthly feature additions & optimisation' },
    ],
  },
  {
    category: 'Extra Integrations',
    items: [
      { name: 'Per Integration', price: '₹12,000', desc: 'Salesforce, Zoho, payment gateways, and more' },
    ],
  },
  {
    category: 'Team Training',
    items: [
      { name: '2-Hour Session (up to 10 people)', price: '₹8,000', desc: 'Hands-on training for your team on the new system' },
    ],
  },
  {
    category: 'AI Agent Add-Ons',
    items: [
      { name: 'Additional AI Calling Agent', price: '₹20,000', desc: 'VAPI-powered voice agent for calls & lead qualification' },
      { name: 'Additional AI Chatbot', price: '₹15,000', desc: 'WhatsApp or website chat automation' },
    ],
  },
];

const comparisonRows = [
  { label: 'Quick Automation', big: '₹3–5L', mid: '₹2–3L', ours: '₹49k', highlight: true },
  { label: 'Professional Automation', big: '₹8–10L', mid: '₹4–6L', ours: '₹99k', highlight: false },
  { label: 'Multi-Workflow Solution', big: '₹15–20L', mid: '₹8–12L', ours: '₹1.99L', highlight: false },
  { label: 'Timeline', big: '6–12 months', mid: '3–6 months', ours: '1–8 weeks', highlight: false },
  { label: 'Hidden Fees', big: 'Yes', mid: 'Sometimes', ours: 'Never', highlight: false },
  { label: 'Upfront Pricing', big: 'No', mid: 'Rarely', ours: 'Always', highlight: false },
  { label: 'Access to CTO', big: 'No', mid: 'No', ours: 'Yes', highlight: false },
];

const reasons = [
  {
    number: '01',
    title: 'Founder-Led, Zero Overhead',
    desc: 'You work directly with the CTO who builds your system. No account managers, no sales teams, no fancy offices — just lean, focused execution.',
  },
  {
    number: '02',
    title: 'Modern Tech Stack',
    desc: 'We use FastAPI, VAPI, and modern cloud tools that are 3× faster to build with than legacy enterprise systems.',
  },
  {
    number: '03',
    title: 'Fixed Scope, Fixed Price',
    desc: 'We define exactly what you need in the Free Business Audit. No scope creep. No surprise invoices.',
  },
  {
    number: '04',
    title: 'Fast Execution',
    desc: '1–8 week delivery vs 6–12 months. Faster delivery = lower cost = better value for you.',
  },
  {
    number: '05',
    title: 'Building Portfolio',
    desc: "We're early stage and building our reputation. You get enterprise-quality work at startup prices while we establish ourselves.",
  },
];

export default function PricingAddOnsComparison() {
  return (
    <>
      {/* ── Add-Ons ─────────────────────────────────────── */}
      <section className="py-20 bg-light-cyan-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark-navy mb-3">
              Need More? Add-Ons Available.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {addOns.map((group) => (
              <div key={group.category} className="bg-white rounded-2xl p-6 border border-light-cyan-200">
                <h3 className="font-heading text-sm font-semibold text-brand-teal uppercase tracking-wide mb-4">
                  {group.category}
                </h3>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="font-heading text-sm font-semibold text-dark-navy">{item.name}</p>
                        <p className="font-body text-xs text-dark-navy-300 mt-0.5">{item.desc}</p>
                      </div>
                      <span
                        className="font-heading text-sm font-bold text-white px-3 py-1 rounded-lg whitespace-nowrap"
                        style={{ backgroundColor: '#17a2b8' }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ─────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark-navy mb-3">
              How Much Are You Overpaying?
            </h2>
            <p className="font-body text-lg text-dark-navy-300 max-w-2xl mx-auto">
              Compare OpsOnAuto to typical automation agencies in India.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-light-cyan-200 shadow-sm">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr>
                  <th className="text-left px-5 py-4 font-heading text-sm text-dark-navy-300 bg-light-cyan-50 border-b border-light-cyan-200 w-[38%]">
                    What You Get
                  </th>
                  <th className="text-center px-4 py-4 font-heading text-sm text-dark-navy-300 bg-light-cyan-50 border-b border-light-cyan-200">
                    Big Agencies
                  </th>
                  <th className="text-center px-4 py-4 font-heading text-sm text-dark-navy-300 bg-light-cyan-50 border-b border-light-cyan-200">
                    Mid-Tier Firms
                  </th>
                  <th
                    className="text-center px-4 py-4 font-heading text-sm font-bold text-white border-b"
                    style={{ backgroundColor: '#17a2b8' }}
                  >
                    OpsOnAuto
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-light-cyan-50'}>
                    <td className="px-5 py-3.5 font-body text-sm font-medium text-dark-navy border-b border-light-cyan-100">
                      {row.label}
                    </td>
                    <td className="px-4 py-3.5 text-center font-body text-sm text-dark-navy-300 border-b border-light-cyan-100">
                      {row.big}
                    </td>
                    <td className="px-4 py-3.5 text-center font-body text-sm text-dark-navy-300 border-b border-light-cyan-100">
                      {row.mid}
                    </td>
                    <td
                      className="px-4 py-3.5 text-center font-heading text-sm font-bold text-white border-b border-white/20"
                      style={{ backgroundColor: '#17a2b8' }}
                    >
                      {row.ours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="font-body text-center text-dark-navy-300 mt-6 text-sm max-w-xl mx-auto">
            You save <strong className="text-dark-navy">70–85%</strong> without sacrificing quality. Same automation. A fraction of the price. Way faster delivery.
          </p>
        </div>
      </section>

      {/* ── Why So Affordable ─────────────────────────────── */}
      <section className="py-20 bg-light-cyan-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark-navy mb-3">
              How Do We Keep Prices This Low?
            </h2>
            <p className="font-body text-lg text-dark-navy-300 max-w-2xl mx-auto">
              We&apos;re not cheap — we&apos;re efficient. Here&apos;s how we do it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.number} className="bg-white rounded-2xl p-6 border border-light-cyan-200 hover:shadow-md transition-shadow">
                <span
                  className="font-heading text-3xl font-extrabold"
                  style={{ color: '#17a2b8', opacity: 0.25 }}
                >
                  {r.number}
                </span>
                <h3 className="font-heading text-lg font-bold text-dark-navy mt-1 mb-2">{r.title}</h3>
                <p className="font-body text-sm text-dark-navy-300 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
