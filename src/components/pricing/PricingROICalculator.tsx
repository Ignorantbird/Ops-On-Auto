'use client';

import { useState, useMemo } from 'react';
import { BOOKING_LINKS } from '@/lib/BookingLinks';

const industries = [
  'Manufacturing',
  'Real Estate',
  'Textile',
  'Automotive',
  'Lead Generation',
  'Other',
];

function getRecommendedPackage(hours: number): {
  name: string;
  price: number;
  label: string;
} {
  if (hours < 15) return { name: 'Quick Win', price: 49000, label: '₹49,000' };
  if (hours <= 30) return { name: 'Starter', price: 99000, label: '₹99,000' };
  return { name: 'Growth', price: 199000, label: '₹1,99,000' };
}

function formatINR(n: number): string {
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(0)}k`;
  return `₹${n}`;
}

export default function PricingROICalculator() {
  const [industry, setIndustry] = useState('Manufacturing');
  const [employeeCost, setEmployeeCost] = useState(25000);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);

  const result = useMemo(() => {
    const pkg = getRecommendedPackage(hoursPerWeek);
    const annualCost = employeeCost * 12;
    const breakEvenMonths = Math.ceil(pkg.price / employeeCost);
    const year1Savings = annualCost - pkg.price;
    const threeYearROI = Math.round(((annualCost * 3 - pkg.price) / pkg.price) * 100);

    return { pkg, annualCost, breakEvenMonths, year1Savings, threeYearROI };
  }, [employeeCost, hoursPerWeek]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark-navy mb-3">
            Calculate Your Savings
          </h2>
          <p className="font-body text-lg text-dark-navy-300 max-w-2xl mx-auto">
            See how fast OpsOnAuto automation pays for itself.
          </p>
        </div>

        <div className="bg-light-cyan-50 rounded-2xl border border-light-cyan-200 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Inputs */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-light-cyan-200">
              <h3 className="font-heading text-lg font-bold text-dark-navy mb-6">Your Business</h3>

              {/* Industry */}
              <div className="mb-6">
                <label className="font-heading text-sm font-semibold text-dark-navy block mb-2">
                  Your Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full font-body text-sm text-dark-navy bg-white border border-light-cyan-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': '#17a2b8' } as React.CSSProperties}
                >
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>

              {/* Employee cost */}
              <div className="mb-6">
                <label className="font-heading text-sm font-semibold text-dark-navy block mb-2">
                  Monthly Employee Cost for Manual Work
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-dark-navy-300">₹</span>
                  <input
                    type="number"
                    value={employeeCost}
                    onChange={(e) => setEmployeeCost(Math.max(1000, Number(e.target.value)))}
                    className="w-full font-body text-sm text-dark-navy bg-white border border-light-cyan-200 rounded-xl pl-8 pr-4 py-3 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': '#17a2b8' } as React.CSSProperties}
                    min={1000}
                    step={1000}
                  />
                </div>
              </div>

              {/* Hours slider */}
              <div className="mb-2">
                <label className="font-heading text-sm font-semibold text-dark-navy block mb-2">
                  Hours on Manual Work per Week:{' '}
                  <span style={{ color: '#17a2b8' }}>{hoursPerWeek} hrs</span>
                </label>
                <input
                  type="range"
                  min={5}
                  max={80}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-brand-teal"
                  style={{ accentColor: '#17a2b8' }}
                />
                <div className="flex justify-between font-body text-xs text-dark-navy-300 mt-1">
                  <span>5 hrs</span>
                  <span>80 hrs</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="p-8 bg-white">
              <h3 className="font-heading text-lg font-bold text-dark-navy mb-6">Your Results</h3>

              <div className="space-y-4">
                <ResultRow
                  label="Current Annual Cost"
                  value={formatINR(result.annualCost)}
                  sub="(employee cost × 12)"
                  muted
                />
                <div className="h-px bg-light-cyan-200" />
                <ResultRow
                  label="Recommended Package"
                  value={result.pkg.name}
                  highlight
                />
                <ResultRow
                  label="OpsOnAuto Investment"
                  value={result.pkg.label}
                />
                <div className="h-px bg-light-cyan-200" />
                <ResultRow
                  label="Break-Even Time"
                  value={`${result.breakEvenMonths} month${result.breakEvenMonths !== 1 ? 's' : ''}`}
                />
                <ResultRow
                  label="Year 1 Net Savings"
                  value={result.year1Savings > 0 ? formatINR(result.year1Savings) : '—'}
                  highlight={result.year1Savings > 0}
                />
                <ResultRow
                  label="3-Year ROI"
                  value={result.threeYearROI > 0 ? `${result.threeYearROI}%` : '—'}
                  highlight={result.threeYearROI > 0}
                />
              </div>

              <a
                href={BOOKING_LINKS.WHATSAPP_AUDIT}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-heading font-semibold text-white text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ backgroundColor: '#17a2b8' }}
              >
                Book Free Audit for Custom ROI Analysis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultRow({
  label,
  value,
  sub,
  highlight,
  muted,
}: {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
  muted?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-body text-sm text-dark-navy-300">{label}</p>
        {sub && <p className="font-body text-xs text-dark-navy-300/60">{sub}</p>}
      </div>
      <span
        className={`font-heading text-base font-bold ${
          highlight
            ? 'text-brand-teal'
            : muted
            ? 'text-dark-navy-300'
            : 'text-dark-navy'
        }`}
        style={highlight ? { color: '#17a2b8' } : undefined}
      >
        {value}
      </span>
    </div>
  );
}
