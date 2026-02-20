'use client';

import { BOOKING_LINKS } from '@/lib/BookingLinks';

const channels = [
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.855L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.78 9.78 0 01-5.29-1.545l-.38-.225-3.937 1.028 1.052-3.828-.249-.394A9.78 9.78 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z" />
      </svg>
    ),
    iconBg: '#25D366',
    title: 'WhatsApp',
    best: 'Quick questions, quotes, scheduling',
    detail: '+91 87776 71056',
    response: 'Usually within 2–4 hours',
    btnLabel: 'Chat on WhatsApp',
    btnHref: BOOKING_LINKS.WHATSAPP,
    btnColor: '#25D366',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: '#17a2b8',
    title: 'Email',
    best: 'Detailed inquiries, proposals, partnerships',
    detail: 'info@opsonauto.com',
    response: 'Within 24 hours',
    btnLabel: 'Send Email',
    btnHref: 'mailto:info@opsonauto.com',
    btnColor: '#17a2b8',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    iconBg: '#ff6b35',
    title: 'Phone',
    best: 'Direct conversation',
    detail: '+91 87776 71056',
    response: 'Immediate during business hours',
    btnLabel: 'Call Us',
    btnHref: BOOKING_LINKS.PHONE,
    btnColor: '#ff6b35',
  },
];

export default function ContactChannels() {
  return (
    <section className="py-14 bg-light-cyan-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-dark-navy mb-2">
            Other Ways to Get In Touch
          </h2>
          <p className="font-body text-dark-navy-300 text-sm">
            Pick whatever is easiest for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {channels.map((ch) => (
            <div
              key={ch.title}
              className="bg-white rounded-2xl border border-light-cyan-200 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-4 shadow-sm"
                style={{ backgroundColor: ch.iconBg }}
              >
                {ch.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-dark-navy mb-1">{ch.title}</h3>
              <p className="font-body text-xs text-dark-navy-300 mb-3">
                <strong className="text-dark-navy">Best for:</strong> {ch.best}
              </p>
              <p className="font-heading text-sm font-semibold text-dark-navy mb-1">{ch.detail}</p>
              <p className="font-body text-xs text-dark-navy-300 mb-5">⏱ {ch.response}</p>
              <a
                href={ch.btnHref}
                target={ch.btnHref.startsWith('http') ? '_blank' : undefined}
                rel={ch.btnHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="mt-auto w-full py-3 rounded-xl font-heading font-semibold text-sm text-white text-center transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ backgroundColor: ch.btnColor }}
              >
                {ch.btnLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
