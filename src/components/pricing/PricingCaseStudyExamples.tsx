'use client';

import Link from 'next/link';

const caseStudies = [
  {
    industry: 'Manufacturing',
    emoji: '🏭',
    title: 'JSS Structures',
    scope: 'Enterprise Automation',
    packageValue: '₹3–4L range',
    timeline: '3 months',
    what: [
      'HR workflow automation (attendance, leave, onboarding)',
      'Sales pipeline + CRM integration',
      'Real-time reporting dashboards',
      'AI calling agent for inbound leads',
    ],
    results: [
      { metric: '40+ hrs/wk', label: 'Saved in manual reporting' },
      { metric: '3 → 1', label: 'Employees needed for reporting' },
      { metric: 'Instant', label: 'Lead response time' },
    ],
    roi: 'System paid for itself in 4 months through headcount savings alone.',
  },
  {
    industry: 'Lead Generation',
    emoji: '📞',
    title: 'Lead Gen Agency',
    scope: 'AI Call Analytics',
    packageValue: '₹2–2.5L range',
    timeline: '1 month',
    what: [
      'Ringba + AssemblyAI + Lemur integration',
      'Automated call transcription & lead scoring',
      'GoHighLevel CRM sync',
      'Real-time performance dashboard',
    ],
    results: [
      { metric: '30+ hrs/wk', label: 'Saved on manual call review' },
      { metric: '0', label: 'Manual call reviews needed' },
      { metric: 'Real-time', label: 'Campaign performance visibility' },
    ],
    roi: 'Agency recovered investment in first 2 months of time savings.',
  },
  {
    industry: 'Real Estate',
    emoji: '🏢',
    title: 'Real Estate Developer, Gurgaon',
    scope: 'AI Calling Agent',
    packageValue: '₹1.5–2L range',
    timeline: '6 weeks',
    what: [
      'AI voice agent for inbound lead qualification (24/7)',
      'CRM integration + data logging',
      'Automated appointment booking',
      'Lead scoring & routing to sales team',
    ],
    results: [
      { metric: '0', label: 'Missed leads (24/7 coverage)' },
      { metric: '75%', label: 'Faster lead response time' },
      { metric: '₹20L+', label: 'Additional deals in 30 days' },
    ],
    roi: '₹20L+ in additional deals closed within 30 days of going live.',
  },
];

export default function PricingCaseStudyExamples() {
  return (
    <section className="py-20 bg-light-cyan-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark-navy mb-4">
            Real Projects. Real Pricing. Real Results.
          </h2>
          <p className="font-body text-lg text-dark-navy-300 max-w-2xl mx-auto">
            See what other businesses paid and what they got.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="bg-white rounded-2xl border border-light-cyan-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow"
            >
              {/* Header bar */}
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{ backgroundColor: '#17a2b8' }}
              >
                <span className="text-2xl">{cs.emoji}</span>
                <div>
                  <p className="font-heading text-xs font-semibold text-white/75 uppercase tracking-wide">
                    {cs.industry}
                  </p>
                  <p className="font-heading text-sm font-bold text-white">{cs.title}</p>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                {/* Package info */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-light-cyan-100 text-brand-teal-700 font-body text-xs px-2.5 py-1 rounded-full">
                    {cs.scope}
                  </span>
                  <span className="bg-accent-orange-50 text-accent-orange-700 font-body text-xs px-2.5 py-1 rounded-full">
                    {cs.packageValue}
                  </span>
                  <span className="bg-dark-navy-50 text-dark-navy-300 font-body text-xs px-2.5 py-1 rounded-full">
                    ⏱ {cs.timeline}
                  </span>
                </div>

                {/* What they got */}
                <h4 className="font-heading text-xs font-semibold text-dark-navy-300 uppercase tracking-wide mb-2">
                  What They Got
                </h4>
                <ul className="space-y-1 mb-4">
                  {cs.what.map((w) => (
                    <li key={w} className="flex items-start gap-1.5 font-body text-xs text-dark-navy-400">
                      <span className="text-brand-teal mt-0.5 font-bold">✓</span>
                      {w}
                    </li>
                  ))}
                </ul>

                {/* Results */}
                <h4 className="font-heading text-xs font-semibold text-dark-navy-300 uppercase tracking-wide mb-2">
                  Results
                </h4>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {cs.results.map((r) => (
                    <div key={r.label} className="text-center bg-light-cyan-50 rounded-xl p-2">
                      <p className="font-heading text-sm font-bold text-dark-navy leading-tight">{r.metric}</p>
                      <p className="font-body text-[10px] text-dark-navy-300 leading-tight mt-0.5">{r.label}</p>
                    </div>
                  ))}
                </div>

                {/* ROI note */}
                <div className="bg-accent-orange-50 border border-accent-orange-100 rounded-xl px-4 py-3 mb-4">
                  <p className="font-body text-xs text-accent-orange-700">
                    <strong>ROI:</strong> {cs.roi}
                  </p>
                </div>

                {/* Link to full case study */}
                <div className="mt-auto">
                  <Link
                    href="/case-studies"
                    className="font-heading text-sm font-semibold hover:underline"
                    style={{ color: '#17a2b8' }}
                  >
                    View full case study →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
