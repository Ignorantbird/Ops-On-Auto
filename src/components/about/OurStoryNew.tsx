'use client';

const milestones = [
  {
    label: 'The Problem',
    text: 'Working as a Business Analyst, Sarmistha saw the same pattern everywhere: businesses being massively overcharged for basic automation. Agencies quoting ₹15–20 lakhs for projects that should cost ₹3–5 lakhs — because of layers of account managers, project managers, and salespeople adding cost without adding value.',
  },
  {
    label: 'The Turning Point',
    text: 'A friend running JSS Structures asked for help. His team was drowning in spreadsheets — three people spending their entire week just consolidating data. Sarmistha built them a complete automation system. The result? 40+ hours saved every week. Three employees doing manual work became one person managing an automated system.',
  },
  {
    label: 'The Realization',
    text: "If we can deliver the same quality as ₹15L agencies — but charge ₹3–4L because we don't have the overhead — we can help hundreds of businesses that have been priced out of good automation.",
  },
  {
    label: 'Yash Joined',
    text: "After 15+ years scaling digital operations at SAP, Microsoft, and across Fortune 500 companies, Yash had seen the same problem from the business side. Growing businesses needed automation, but agencies were pricing them out with enterprise rates. Together, we built OpsOnAuto.",
  },
];

export default function OurStoryNew() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark-navy mb-4">
            How OpsOnAuto Started
          </h2>
          <p className="font-body text-lg text-dark-navy-300 max-w-xl mx-auto">
            A story of seeing the same problem from two different sides — and deciding to fix it.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 hidden sm:block"
            style={{ backgroundColor: '#17a2b8', opacity: 0.25 }}
          />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div key={m.label} className="sm:flex items-start gap-8">
                {/* Dot */}
                <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-heading text-sm font-bold text-white z-10"
                    style={{ backgroundColor: '#17a2b8' }}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-light-cyan-50 rounded-2xl border border-light-cyan-200 p-6">
                  <h3 className="font-heading text-lg font-bold text-dark-navy mb-2">{m.label}</h3>
                  <p className="font-body text-sm text-dark-navy-400 leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our promise */}
        <div
          className="mt-14 rounded-2xl p-8 text-white"
          style={{ backgroundColor: '#0a1628' }}
        >
          <h3 className="font-heading text-xl font-bold mb-5 text-center">Our Promise</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Transparent Pricing', desc: 'No vague quotes. No hidden fees. You see the number before you commit.' },
              { title: 'Fast Delivery', desc: 'Weeks, not months. We ship in 1–8 weeks, not 6–12.' },
              { title: 'Direct Access', desc: 'Work with founders who\'ve actually scaled businesses — not account managers.' },
              { title: 'Honest Prices', desc: 'Enterprise-quality work without the enterprise price tag.' },
            ].map((p) => (
              <div key={p.title} className="flex items-start gap-3">
                <span className="font-bold mt-0.5 text-lg" style={{ color: '#17a2b8' }}>✓</span>
                <div>
                  <p className="font-heading text-sm font-semibold text-white">{p.title}</p>
                  <p className="font-body text-xs text-white/60 mt-0.5">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
