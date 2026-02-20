'use client';

import Image from 'next/image';

export default function ContactHeroNew() {
  return (
    <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/hero-ai-image.png"
        alt="Contact OpsOnAuto"
        fill
        priority
        className="object-cover scale-150 origin-center"
        sizes="100vw"
        quality={90}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(23,162,184,0.88), rgba(255,107,53,0.82))',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-24 pb-16 text-center text-white">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          {['2–4 hr WhatsApp Response', 'Mon–Sat 10 AM–7 PM IST', 'Based in Gurgaon, India'].map((b) => (
            <span
              key={b}
              className="inline-flex items-center bg-white/15 backdrop-blur-sm text-white text-sm font-body px-4 py-2 rounded-full border border-white/25"
            >
              {b}
            </span>
          ))}
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5 drop-shadow-lg">
          Let&apos;s Talk About{' '}
          <span className="block text-accent-orange-200">Your Automation</span>
        </h1>

        <p className="font-body text-lg sm:text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
          Book a Free Business Audit or reach out with questions. We typically respond
          within 2–4 hours during business hours.
        </p>
      </div>
    </section>
  );
}
