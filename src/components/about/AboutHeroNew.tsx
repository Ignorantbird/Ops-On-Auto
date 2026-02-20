'use client';

import Image from 'next/image';

export default function AboutHeroNew() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/hero-ai-image.png"
        alt="OpsOnAuto founders — AI automation for Indian SMBs"
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

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-20 text-center text-white">
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {[
            '15+ Years Business Experience',
            'BTech AI/ML',
            'Founder-Led. No Middlemen.',
          ].map((b) => (
            <span
              key={b}
              className="inline-flex items-center bg-white/15 backdrop-blur-sm text-white text-sm font-body px-4 py-2 rounded-full border border-white/25"
            >
              {b}
            </span>
          ))}
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          Built by Founders.{' '}
          <span className="block text-accent-orange-200">For Growing Businesses.</span>
        </h1>

        <p className="font-body text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          We&apos;re Yash and Sarmistha — the two people who design, build, and deliver every
          automation at OpsOnAuto. No account managers. No junior developers. Just founders
          who&apos;ve seen both sides of the problem.
        </p>
      </div>
    </section>
  );
}
