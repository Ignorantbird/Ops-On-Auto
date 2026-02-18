'use client';

import { useEffect, useRef, useState } from 'react';

/* ── Animated counter hook ── */
function useCountUp(end: number, suffix: string, duration = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setValue(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, display: `${value}${suffix}` };
}

const stats = [
  { end: 10, suffix: ' hrs', label: 'Saved Per Week', prefix: '5-' },
  { end: 60, suffix: '%', label: 'Faster ROI' },
  { end: 75, suffix: '%', label: 'Fewer Errors', prefix: '40-' },
  { end: 75, suffix: '%', label: 'Faster Response' },
];

const caseStudies = [
  {
    title: 'Engineering Firm',
    industry: 'Manufacturing',
    problem: 'Vendor follow-ups and purchase orders were manual — 3 hours/day lost.',
    solution: 'Automated PO generation + WhatsApp vendor reminders.',
    result: 'Saved 15 hrs/week, zero missed deliveries.',
  },
  {
    title: 'Lead Gen Agency',
    industry: 'Digital Marketing',
    problem: 'Leads from 5 sources dumped into one messy sheet. No follow-up system.',
    solution: 'Centralized CRM with auto lead routing and follow-up sequences.',
    result: '3x response rate, clients finally saw ROI dashboards.',
  },
  {
    title: 'Real Estate Developer',
    industry: 'Real Estate',
    problem: '200+ leads/month from portals, 80% never contacted.',
    solution: 'Instant WhatsApp auto-reply + CRM pipeline with task reminders.',
    result: '90% of leads contacted within 5 minutes. 40% more site visits.',
  },
  {
    title: 'Mechanic Assist',
    industry: 'Automotive',
    problem: 'Customers called repeatedly for vehicle status. Staff overwhelmed.',
    solution: 'Automated service status updates via WhatsApp + digital job cards.',
    result: '75% fewer status calls. Customer satisfaction up significantly.',
  },
];

export default function ProofResults() {
  return (
    <section id="proof" className="py-20 bg-light-cyan-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark-navy mb-4">
            Proof &amp; Results
          </h2>
          <p className="font-body text-lg text-dark-navy-300 max-w-2xl mx-auto">
            Real numbers from real Indian businesses we&apos;ve helped automate.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => {
            const counter = useCountUp(s.end, s.suffix);
            return (
              <div
                key={s.label}
                ref={counter.ref}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-light-cyan-200"
              >
                <div className="font-heading text-3xl sm:text-4xl font-bold text-brand-teal mb-1">
                  {s.prefix ?? ''}{counter.display}
                </div>
                <div className="font-body text-sm text-dark-navy-400">{s.label}</div>
              </div>
            );
          })}
        </div>

        {/* Case studies */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="bg-white rounded-2xl p-6 shadow-md border border-light-cyan-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-brand-teal-50 text-brand-teal-700 text-xs font-heading font-semibold px-3 py-1 rounded-full">
                  {cs.industry}
                </span>
                <h3 className="font-heading text-lg font-bold text-dark-navy">
                  {cs.title}
                </h3>
              </div>
              <div className="space-y-2 font-body text-sm">
                <p>
                  <span className="font-semibold text-red-500">Problem:</span>{' '}
                  <span className="text-dark-navy-300">{cs.problem}</span>
                </p>
                <p>
                  <span className="font-semibold text-brand-teal">Solution:</span>{' '}
                  <span className="text-dark-navy-300">{cs.solution}</span>
                </p>
                <p>
                  <span className="font-semibold text-accent-orange">Result:</span>{' '}
                  <span className="text-dark-navy-300">{cs.result}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 font-body text-xs text-dark-navy-400 italic">
          * Client names anonymized under NDA. Results are representative of typical
          outcomes and may vary.
        </p>
      </div>
    </section>
  );
}
