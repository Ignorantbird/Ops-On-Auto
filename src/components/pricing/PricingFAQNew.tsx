'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Why is OpsOnAuto 70–85% cheaper than agencies?',
    a: "We're founder-led with zero overhead. You work directly with the CTO who builds your system — no sales teams, no account managers, no fancy offices. A modern tech stack means faster builds. We're also building our portfolio, so you get enterprise-quality work at early-stage prices.",
  },
  {
    q: 'Is this a subscription or one-time payment?',
    a: 'One-time payment for the automation project. Ongoing support after the included period is optional (₹9,999–14,999/month).',
  },
  {
    q: 'What if I need changes after launch?',
    a: 'Minor tweaks during the support period are included. Larger changes or new features will get a separate quote before we start.',
  },
  {
    q: 'How fast can you start?',
    a: 'We typically onboard new clients within 3–5 days of payment. Development starts immediately after onboarding.',
  },
  {
    q: 'Do you work with businesses outside NCR?',
    a: 'Yes! We work remotely with businesses across India. Most meetings are virtual (Zoom / Google Meet).',
  },
  {
    q: 'What if my business grows and needs more automation later?',
    a: 'All systems we build are designed to scale. You can add workflows, integrations, or upgrade to a larger package anytime.',
  },
  {
    q: 'Can I see examples of your work?',
    a: 'Yes! Check our Case Studies page for detailed breakdowns with real client results.',
    link: { label: 'See Case Studies →', href: '/case-studies' },
  },
  {
    q: 'What happens after the Free Business Audit?',
    a: "We'll send you a detailed project plan within 2–3 days. Review it. If you're happy, we start. If not, no obligation — you still get value from the audit.",
  },
  {
    q: 'Do you offer refunds?',
    a: "Yes. If we don't deliver what's in the approved project plan, you get a full refund.",
  },
];

export default function PricingFAQNew() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark-navy mb-3">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-lg text-dark-navy-300">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-light-cyan-50 rounded-2xl border border-light-cyan-200 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="font-heading text-base font-semibold text-dark-navy">{faq.q}</span>
                <span
                  className="font-bold text-xl flex-shrink-0 transition-transform duration-200"
                  style={{
                    color: '#17a2b8',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>

              {open === i && (
                <div className="px-6 pb-5">
                  <p className="font-body text-sm text-dark-navy-400 leading-relaxed">{faq.a}</p>
                  {faq.link && (
                    <a
                      href={faq.link.href}
                      className="inline-block font-heading text-sm font-semibold mt-2 hover:underline"
                      style={{ color: '#17a2b8' }}
                    >
                      {faq.link.label}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
