'use client';

import Image from 'next/image';

export default function CaseStudiesHeroNew() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-ai-image.png"
        alt="AI automation case studies"
        fill
        priority
        className="object-cover scale-150 origin-center"
        sizes="100vw"
        quality={90}
      />

      {/* Gradient Overlay — matches homepage hero style */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(23,162,184,0.82), rgba(255,107,53,0.78))',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 text-center text-white">
        {/* Trust badges row — matching homepage pattern */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {[
            { icon: '🏭', label: 'Manufacturing' },
            { icon: '📞', label: 'Lead Gen' },
            { icon: '🏢', label: 'Real Estate' },
            { icon: '🔧', label: 'Automotive' },
          ].map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-sm font-body px-4 py-2 rounded-full border border-white/20"
            >
              {badge.icon} {badge.label}
            </span>
          ))}
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          Real Businesses. Real Automation.{' '}
          <span className="text-accent-orange-200">Real Results.</span>
        </h1>

        <p className="font-body text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          See how Indian SMBs in manufacturing, real estate, and lead generation
          are saving 40+ hours a week and cutting costs with custom AI
          automation — built around how they actually work.
        </p>

        {/* Scroll indicator */}
        <button
          onClick={() => {
            document.getElementById('case-studies-content')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-heading font-semibold text-lg px-8 py-4 rounded-xl border border-white/30 transition-all"
        >
          See the Case Studies ↓
        </button>
      </div>
    </section>
  );
}
