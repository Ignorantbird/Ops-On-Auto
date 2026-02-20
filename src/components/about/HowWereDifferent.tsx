'use client';

const differences = [
  {
    number: '01',
    title: "You Work with People Who've Actually Scaled Businesses",
    them: {
      label: 'Typical Agencies',
      text: 'Junior developers supervised by account managers who have never run a business.',
    },
    us: {
      label: 'OpsOnAuto',
      text: 'Yash has 15+ years scaling digital operations across SAP, Microsoft, and multiple companies. Sarmistha has built automation systems for HR, sales, and operations. We understand what actually works because we\'ve done it.',
    },
  },
  {
    number: '02',
    title: "We Know Exactly Why Agencies Overcharge (We've Seen It from Inside)",
    them: {
      label: 'Typical Agencies',
      text: 'Layers of overhead — sales teams, account managers, fancy offices. They pass all those costs to you.',
    },
    us: {
      label: 'OpsOnAuto',
      text: "We've worked inside those companies. We saw the markup. That's why we can charge ₹49k–1.99L for what they charge ₹10–20L — we just don't have the bloat.",
    },
  },
  {
    number: '03',
    title: "We're Building Our Portfolio (You Benefit from the Timing)",
    them: {
      label: 'Typical Agencies',
      text: 'Established rates. They charge full enterprise prices because they can.',
    },
    us: {
      label: 'OpsOnAuto',
      text: "We're early stage with 3 solid case studies and we need 10+. So you get the same quality at a fraction of the price while we build our reputation. This pricing won't last forever — in 6–12 months when we have 15+ case studies, prices will increase.",
    },
  },
];

export default function HowWereDifferent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark-navy mb-4">
            Why OpsOnAuto Isn&apos;t Like Other Agencies
          </h2>
          <p className="font-body text-lg text-dark-navy-300 max-w-xl mx-auto">
            Three reasons that actually matter when you&apos;re choosing who to trust with your operations.
          </p>
        </div>

        <div className="space-y-8">
          {differences.map((d) => (
            <div key={d.number} className="rounded-2xl border border-light-cyan-200 overflow-hidden">
              {/* Number + title */}
              <div className="px-6 py-5 border-b border-light-cyan-200 bg-light-cyan-50 flex items-center gap-4">
                <span
                  className="font-heading text-3xl font-extrabold flex-shrink-0"
                  style={{ color: '#17a2b8', opacity: 0.4 }}
                >
                  {d.number}
                </span>
                <h3 className="font-heading text-lg font-bold text-dark-navy leading-snug">
                  {d.title}
                </h3>
              </div>

              {/* Two-column comparison */}
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-light-cyan-200">
                {/* Them */}
                <div className="px-6 py-5">
                  <p className="font-heading text-xs font-semibold text-dark-navy-300 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="text-red-400">✕</span> {d.them.label}
                  </p>
                  <p className="font-body text-sm text-dark-navy-300 leading-relaxed">{d.them.text}</p>
                </div>

                {/* Us */}
                <div className="px-6 py-5 bg-light-cyan-50/50">
                  <p
                    className="font-heading text-xs font-semibold uppercase tracking-wide mb-3 flex items-center gap-2"
                    style={{ color: '#17a2b8' }}
                  >
                    <span>✓</span> {d.us.label}
                  </p>
                  <p className="font-body text-sm text-dark-navy-400 leading-relaxed">{d.us.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency note */}
        <div className="mt-10 bg-accent-orange-50 border border-accent-orange-100 rounded-2xl px-6 py-5 text-center">
          <p className="font-body text-sm text-accent-orange-700">
            <strong>Current pricing window:</strong> We&apos;re early stage and intentionally charging less to build our portfolio. As case studies grow, prices will rise.{' '}
            <strong>Now is the best time to work with us.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
