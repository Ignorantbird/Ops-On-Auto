'use client';

export type ProjectCardData = {
  industry: string;
  industryEmoji: string;
  title: string;
  status?: string;
  problem: string;
  solution: string;
  result: string;
};

export default function ProjectCard({ data }: { data: ProjectCardData }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-light-cyan-200 hover:shadow-lg transition-shadow">
      {/* Header — matching homepage ProofResults card style */}
      <div className="flex items-center gap-3 mb-4">
        <span className="bg-brand-teal-50 text-brand-teal-700 text-xs font-heading font-semibold px-3 py-1 rounded-full">
          {data.industryEmoji} {data.industry}
        </span>
        {data.status && (
          <span className="bg-accent-orange-50 text-accent-orange-700 text-xs font-heading font-semibold px-3 py-1 rounded-full">
            {data.status}
          </span>
        )}
      </div>

      <h3 className="font-heading text-lg font-bold text-dark-navy mb-4">
        {data.title}
      </h3>

      {/* Problem / Solution / Result — matching homepage card color coding */}
      <div className="space-y-2 font-body text-sm">
        <p>
          <span className="font-semibold text-red-500">Problem:</span>{' '}
          <span className="text-dark-navy-300">{data.problem}</span>
        </p>
        <p>
          <span className="font-semibold text-brand-teal">Solution:</span>{' '}
          <span className="text-dark-navy-300">{data.solution}</span>
        </p>
        <p>
          <span className="font-semibold text-accent-orange">Result:</span>{' '}
          <span className="text-dark-navy-300">{data.result}</span>
        </p>
      </div>
    </div>
  );
}
