'use client';

const industries = [
  {
    emoji: '🏗️',
    name: 'Real Estate',
    pain: '"I lose leads because no one follows up on time."',
    problem: 'Leads from MagicBricks, 99acres, and walk-ins fall through the cracks.',
    solution: 'Automated lead capture, WhatsApp follow-ups, and CRM pipeline tracking.',
    result: 'No lead left behind — every inquiry gets a response within minutes.',
  },
  {
    emoji: '🏭',
    name: 'Manufacturing',
    pain: '"Our production tracking is still on paper and WhatsApp."',
    problem: 'Order tracking, vendor coordination, and inventory live across 10 spreadsheets.',
    solution: 'Centralized dashboards, auto purchase orders, and real-time production logs.',
    result: 'One screen to track everything from raw material to dispatch.',
  },
  {
    emoji: '🧵',
    name: 'Textile & Garment',
    pain: '"We waste hours matching orders to fabric stock."',
    problem: 'Order books, fabric inventory, and job-work coordination are manual and error-prone.',
    solution: 'Automated order-to-stock matching, WhatsApp job-work updates, digital challans.',
    result: 'Cut order processing time by 60% and eliminate mismatch errors.',
  },
  {
    emoji: '🔧',
    name: 'Automotive & Service',
    pain: '"Customers call 5 times asking about their vehicle status."',
    problem: 'No system for service tracking, parts inventory, or customer updates.',
    solution: 'Automated service status updates via WhatsApp, digital job cards, parts alerts.',
    result: 'Customers stay informed, your team stays focused on repairs.',
  },
  {
    emoji: '📈',
    name: 'Lead Gen Agencies',
    pain: '"We generate leads but can\'t prove ROI to clients."',
    problem: 'Lead handoff is messy, follow-up is inconsistent, reporting is manual.',
    solution: 'Auto lead routing, follow-up sequences, and real-time client dashboards.',
    result: 'Prove every lead\'s journey from click to close — automatically.',
  },
];

export default function IndustriesWeServe() {
  return (
    <section id="industries" className="py-20 bg-light-cyan-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark-navy mb-4">
            Industries We Serve
          </h2>
          <p className="font-body text-lg text-dark-navy-300 max-w-2xl mx-auto">
            We don&apos;t do generic automation. We solve the exact operational
            bottlenecks your industry faces every day.
          </p>
        </div>

        {/* Mobile: horizontal scroll; Desktop: grid */}
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 md:overflow-visible -mx-6 px-6 md:mx-0 md:px-0">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="snap-center shrink-0 w-72 md:w-auto bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-light-cyan-200 flex flex-col"
            >
              <div className="text-4xl mb-3">{ind.emoji}</div>
              <h3 className="font-heading text-xl font-bold text-dark-navy mb-2">
                {ind.name}
              </h3>
              <p className="font-body text-sm italic text-dark-navy-400 mb-4">
                {ind.pain}
              </p>

              <div className="space-y-3 text-sm font-body flex-1">
                <div>
                  <span className="font-semibold text-red-500">Problem:</span>{' '}
                  <span className="text-dark-navy-300">{ind.problem}</span>
                </div>
                <div>
                  <span className="font-semibold text-brand-teal">Solution:</span>{' '}
                  <span className="text-dark-navy-300">{ind.solution}</span>
                </div>
                <div>
                  <span className="font-semibold text-accent-orange">Result:</span>{' '}
                  <span className="text-dark-navy-300">{ind.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
