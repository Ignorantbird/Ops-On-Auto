'use client';

import Image from 'next/image';
import { BOOKING_LINKS } from '@/lib/BookingLinks';

export default function PricingHeroNew() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-ai-image.png"
        alt="Affordable AI automation pricing India"
        fill
        priority
        className="object-cover scale-150 origin-center"
        sizes="100vw"
        quality={90}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(23,162,184,0.88), rgba(255,107,53,0.82))',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20 text-center text-white">
        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {[
            { label: 'Fixed Price. No Surprises.' },
            { label: '1–8 Week Delivery' },
            { label: '70–85% Cheaper Than Agencies' },
          ].map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center bg-white/15 backdrop-blur-sm text-white text-sm font-body px-4 py-2 rounded-full border border-white/25"
            >
              {badge.label}
            </span>
          ))}
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          Enterprise-Grade Automation.{' '}
          <span className="block text-accent-orange-200">Without the Enterprise Price Tag.</span>
        </h1>

        <p className="font-body text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Professional automation that costs ₹10–15 lakhs elsewhere — starting at just{' '}
          <strong>₹49,000</strong>. Fixed pricing. Fast delivery. No hidden fees.
        </p>

        {/* Comparison widget */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <div className="bg-white/10 backdrop-blur-sm border border-white/25 rounded-2xl px-6 py-4 text-center min-w-[160px]">
            <p className="font-body text-white/70 text-xs mb-1 uppercase tracking-wide">Big Agencies</p>
            <p className="font-heading text-2xl font-bold text-red-300 line-through">₹10–15L</p>
          </div>
          <div className="font-heading text-white/60 text-2xl font-bold">→</div>
          <div className="bg-white/20 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-4 text-center min-w-[160px] ring-2 ring-accent-orange">
            <p className="font-body text-white/70 text-xs mb-1 uppercase tracking-wide">OpsOnAuto</p>
            <p className="font-heading text-2xl font-bold text-white">₹49k–1.99L</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BOOKING_LINKS.WHATSAPP_AUDIT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-orange hover:bg-accent-orange-600 text-white font-heading font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.855L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.78 9.78 0 01-5.29-1.545l-.38-.225-3.937 1.028 1.052-3.828-.249-.394A9.78 9.78 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z" />
            </svg>
            Book Free Business Audit
          </a>
          <button
            onClick={() => document.getElementById('pricing-packages')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-heading font-semibold text-lg px-8 py-4 rounded-xl border border-white/30 transition-all"
          >
            See Packages Below ↓
          </button>
        </div>
      </div>
    </section>
  );
}
