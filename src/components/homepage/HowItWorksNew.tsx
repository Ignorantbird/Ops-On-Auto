'use client';

const steps = [
  {
    number: 1,
    title: 'Free Business Audit',
    badge: '45-60 min',
    description:
      'We hop on a call, map your current workflow, and identify exactly where time and money are leaking. No jargon, no pitch — just clarity.',
    icon: '🔍',
  },
  {
    number: 2,
    title: 'Plan Before You Pay',
    badge: '2-3 days',
    description:
      'You receive a clear, jargon-free proposal with scope, timeline, and pricing. No surprises, no hidden costs. You approve before we write a single line.',
    icon: '📋',
  },
  {
    number: 3,
    title: 'Custom Build & Test',
    badge: '1-2 weeks',
    description:
      'We build your automation using battle-tested tools — CRMs, WhatsApp APIs, dashboards — customized to how your team actually works.',
    icon: '⚙️',
  },
  {
    number: 4,
    title: 'Handover & Support',
    badge: 'Ongoing',
    description:
      'Your team gets trained, documentation is handed over, and we stay on for support. If something breaks, we fix it — fast.',
    icon: '🤝',
  },
];

export default function HowItWorksNew() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark-navy mb-4">
            How It Works
          </h2>
          <p className="font-body text-lg text-dark-navy-300 max-w-2xl mx-auto">
            From first call to fully automated — in weeks, not months.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-teal-200 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Card */}
                <div className="flex-1 bg-light-cyan-50 rounded-2xl p-6 shadow-sm border border-light-cyan-200 relative">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{step.icon}</span>
                    <h3 className="font-heading text-xl font-bold text-dark-navy">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-body text-dark-navy-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Number circle */}
                <div className="relative shrink-0 order-first md:order-none">
                  <div className="w-14 h-14 rounded-full bg-brand-teal text-white flex items-center justify-center font-heading text-xl font-bold shadow-md z-10 relative">
                    {step.number}
                  </div>
                </div>

                {/* Timeline badge */}
                <div className="flex-1 flex justify-center md:justify-start">
                  <span className="inline-block bg-accent-orange-50 text-accent-orange-700 font-heading font-semibold text-sm px-4 py-1.5 rounded-full border border-accent-orange-200">
                    {step.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
