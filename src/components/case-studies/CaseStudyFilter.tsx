'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export type Filters = {
  industry: string;
  projectType: string;
  timeline: string;
};

const INDUSTRY_OPTIONS = ['All', 'Manufacturing', 'Lead Generation', 'Real Estate', 'Automotive'];
const PROJECT_TYPE_OPTIONS = ['All', 'Process Automation', 'AI Calling Agents', 'Analytics & Scoring', 'AI Products'];
const TIMELINE_OPTIONS = ['All', 'Under 1 Month', '1-3 Months', '3+ Months'];

function FilterDropdown({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-light-cyan-200 bg-white text-sm font-body font-medium text-dark-navy hover:border-brand-teal hover:shadow-sm transition-all"
      >
        <span className="text-dark-navy-400 text-xs font-heading font-semibold uppercase tracking-wide">{label}:</span>
        <span className="text-dark-navy">{value}</span>
        <ChevronDown className={`w-4 h-4 text-dark-navy-300 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1.5 w-52 bg-white rounded-xl shadow-lg border border-light-cyan-200 py-1.5 z-40">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`block w-full text-left px-4 py-2.5 text-sm font-body transition-colors ${
                value === opt
                  ? 'bg-brand-teal-50 text-brand-teal-700 font-semibold'
                  : 'text-dark-navy-300 hover:bg-light-cyan-50'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CaseStudyFilter({
  filters,
  onChange,
}: {
  filters: Filters;
  onChange: (f: Filters) => void;
}) {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setSticky(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const activeCount = [filters.industry, filters.projectType, filters.timeline].filter(
    (v) => v !== 'All'
  ).length;

  return (
    <>
      <div ref={sentinelRef} id="case-studies-content" className="h-0" />
      <div
        className={`transition-all duration-300 z-30 ${
          sticky
            ? 'fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm border-b border-light-cyan-200'
            : 'bg-light-cyan-50 border-b border-light-cyan-200'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-sm font-heading font-semibold text-dark-navy-400 mr-1">Filter:</span>
            <FilterDropdown
              label="Industry"
              value={filters.industry}
              options={INDUSTRY_OPTIONS}
              onChange={(v) => onChange({ ...filters, industry: v })}
            />
            <FilterDropdown
              label="Project Type"
              value={filters.projectType}
              options={PROJECT_TYPE_OPTIONS}
              onChange={(v) => onChange({ ...filters, projectType: v })}
            />
            <FilterDropdown
              label="Timeline"
              value={filters.timeline}
              options={TIMELINE_OPTIONS}
              onChange={(v) => onChange({ ...filters, timeline: v })}
            />
            {activeCount > 0 && (
              <button
                onClick={() => onChange({ industry: 'All', projectType: 'All', timeline: 'All' })}
                className="text-sm text-accent-orange hover:underline font-heading font-semibold ml-2"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center gap-2 text-sm font-heading font-semibold text-dark-navy"
            >
              Filters {activeCount > 0 && (
                <span className="bg-accent-orange text-white text-xs px-2 py-0.5 rounded-full">
                  {activeCount}
                </span>
              )}
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileOpen && (
              <div className="mt-3 flex flex-col gap-2">
                <FilterDropdown
                  label="Industry"
                  value={filters.industry}
                  options={INDUSTRY_OPTIONS}
                  onChange={(v) => onChange({ ...filters, industry: v })}
                />
                <FilterDropdown
                  label="Project Type"
                  value={filters.projectType}
                  options={PROJECT_TYPE_OPTIONS}
                  onChange={(v) => onChange({ ...filters, projectType: v })}
                />
                <FilterDropdown
                  label="Timeline"
                  value={filters.timeline}
                  options={TIMELINE_OPTIONS}
                  onChange={(v) => onChange({ ...filters, timeline: v })}
                />
                {activeCount > 0 && (
                  <button
                    onClick={() => onChange({ industry: 'All', projectType: 'All', timeline: 'All' })}
                    className="text-sm text-accent-orange hover:underline font-heading font-semibold mt-1"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
