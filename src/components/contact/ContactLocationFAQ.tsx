'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'How fast can you start my project?',
    a: 'We typically onboard new clients within 3–5 days of payment. Development starts immediately after onboarding.',
  },
  {
    q: 'Do you work with businesses outside NCR?',
    a: 'Yes! We work remotely with businesses across India. Most meetings are via Zoom or Google Meet.',
  },
  {
    q: 'What happens after I book the Free Business Audit?',
    a: "We'll schedule a 45–60 minute call where we discuss your business, map your processes, and provide a fixed-price quote. Zero obligation.",
  },
  {
    q: 'Can I see examples of your work first?',
    a: null,
    link: { text: 'Check our Case Studies page', href: '/case-studies' },
    suffix: ' for detailed breakdowns of past projects.',
  },
  {
    q: "What if I'm not sure which package I need?",
    a: "That's exactly what the Free Business Audit is for. We'll help you figure out the right solution for your business.",
  },
];

export default function ContactLocationFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-14 bg-light-cyan-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">

          {/* Location & hours */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-dark-navy mb-6">
              Where We&apos;re Based
            </h2>

            <div className="bg-white rounded-2xl border border-light-cyan-200 p-6 space-y-5">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-heading text-sm font-semibold text-dark-navy">Location</p>
                  <p className="font-body text-sm text-dark-navy-300 mt-0.5">
                    Gurgaon, Haryana, India
                  </p>
                  <p className="font-body text-xs text-dark-navy-300 mt-1">
                    Serving businesses across NCR and remotely across India.
                  </p>
                </div>
              </div>

              <div className="h-px bg-light-cyan-200" />

              <div className="flex items-start gap-3">
                <span className="text-2xl">🕐</span>
                <div>
                  <p className="font-heading text-sm font-semibold text-dark-navy">Business Hours</p>
                  <p className="font-body text-sm text-dark-navy-300 mt-0.5">
                    Monday – Saturday: 10:00 AM – 7:00 PM IST
                  </p>
                  <p className="font-body text-sm text-dark-navy-300">Sunday: Closed</p>
                </div>
              </div>

              <div className="h-px bg-light-cyan-200" />

              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-heading text-sm font-semibold text-dark-navy">Response Times</p>
                  <ul className="mt-1 space-y-1">
                    {[
                      { ch: 'WhatsApp', time: '2–4 hours (business hours)' },
                      { ch: 'Email', time: 'Within 24 hours' },
                      { ch: 'Phone', time: 'Immediate during business hours' },
                    ].map((r) => (
                      <li key={r.ch} className="flex justify-between font-body text-sm">
                        <span className="text-dark-navy-300">{r.ch}</span>
                        <span className="text-dark-navy font-medium">{r.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quick FAQ */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-dark-navy mb-6">
              Quick Answers
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-light-cyan-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left gap-3"
                  >
                    <span className="font-heading text-sm font-semibold text-dark-navy">
                      {faq.q}
                    </span>
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
                    <div className="px-5 pb-4">
                      <p className="font-body text-sm text-dark-navy-400 leading-relaxed">
                        {faq.a}
                        {faq.link && (
                          <>
                            <Link
                              href={faq.link.href}
                              className="font-semibold hover:underline"
                              style={{ color: '#17a2b8' }}
                            >
                              {faq.link.text}
                            </Link>
                            {faq.suffix}
                          </>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
