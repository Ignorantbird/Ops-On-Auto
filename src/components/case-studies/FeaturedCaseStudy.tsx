'use client';

export type CaseStudyData = {
  industry: string;
  industryEmoji: string;
  projectType: string;
  timeline: string;
  location: string;
  title: string;
  subtitle: string;
  problem: string;
  solutionSteps: { title: string; description: string }[];
  techStack: { name: string; type: 'integration' | 'custom' }[];
  results: { metric: string; description: string }[];
  testimonial: { quote: string; attribution: string };
  layoutDirection: 'left' | 'right';
};

export default function FeaturedCaseStudy({ data }: { data: CaseStudyData }) {
  const isLeft = data.layoutDirection === 'left';

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`flex flex-col ${
            isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } gap-10 lg:gap-16`}
        >
          {/* Content side — 60% */}
          <div className="lg:w-[60%]">
            {/* Badges — matching homepage ProofResults badge style */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="bg-brand-teal-50 text-brand-teal-700 text-xs font-heading font-semibold px-3 py-1 rounded-full">
                {data.industryEmoji} {data.industry}
              </span>
              <span className="bg-accent-orange-50 text-accent-orange-700 text-xs font-heading font-semibold px-3 py-1 rounded-full">
                {data.timeline}
              </span>
              <span className="text-xs text-dark-navy-400 font-body">
                {data.projectType} &middot; {data.location}
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark-navy mb-2">
              {data.title}
            </h2>
            <p className="font-body text-dark-navy-300 text-lg mb-8">{data.subtitle}</p>

            {/* Problem — matching homepage red/problem color */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-light-cyan-200 mb-6">
              <h3 className="font-heading text-base font-bold text-dark-navy mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                The Problem
              </h3>
              <p className="font-body text-dark-navy-300 leading-relaxed">{data.problem}</p>
            </div>

            {/* Solution Steps — styled like HowItWorks timeline */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-light-cyan-200">
              <h3 className="font-heading text-base font-bold text-dark-navy mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-teal" />
                What We Built
              </h3>
              <div className="space-y-5">
                {data.solutionSteps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center font-heading font-bold text-sm shadow-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-dark-navy text-sm">
                        {step.title}
                      </h4>
                      <p className="font-body text-dark-navy-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack — pill badges */}
            <div className="mt-6">
              <h3 className="font-heading text-sm font-bold text-dark-navy-400 uppercase tracking-wide mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className={`text-xs font-heading font-semibold px-3 py-1.5 rounded-full border ${
                      tech.type === 'integration'
                        ? 'bg-brand-teal-50 text-brand-teal-700 border-brand-teal-200'
                        : 'bg-accent-orange-50 text-accent-orange-700 border-accent-orange-200'
                    }`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual side — 40% */}
          <div className="lg:w-[40%] flex flex-col gap-6">
            {/* Results Cards — matching homepage stat cards */}
            <div>
              <h3 className="font-heading text-sm font-bold text-dark-navy-400 uppercase tracking-wide mb-4">
                Results
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {data.results.map((result, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 text-center shadow-sm border border-light-cyan-200"
                  >
                    <div className="font-heading text-2xl sm:text-3xl font-bold text-accent-orange mb-1">
                      {result.metric}
                    </div>
                    <p className="font-body text-dark-navy-400 text-xs">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial — light cyan card */}
            <div className="bg-light-cyan-100 rounded-2xl p-6 border border-light-cyan-200">
              <svg className="w-8 h-8 text-brand-teal-300 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="font-body italic text-dark-navy-300 leading-relaxed mb-4">
                &ldquo;{data.testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-white text-xs font-bold">
                  {data.testimonial.attribution.charAt(0)}
                </div>
                <p className="font-heading font-bold text-dark-navy text-sm">
                  {data.testimonial.attribution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
