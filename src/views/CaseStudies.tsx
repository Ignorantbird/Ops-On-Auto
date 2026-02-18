'use client';

import { useState, useMemo } from 'react';
import CaseStudiesHeroNew from '@/components/case-studies/CaseStudiesHeroNew';
import CaseStudyFilter, { type Filters } from '@/components/case-studies/CaseStudyFilter';
import FeaturedCaseStudy, { type CaseStudyData } from '@/components/case-studies/FeaturedCaseStudy';
import ProjectCard, { type ProjectCardData } from '@/components/case-studies/ProjectCard';
import CaseStudiesCTANew from '@/components/case-studies/CaseStudiesCTANew';

/* ── Case Study Data ─────────────────────────────────────── */

const jssStructures: CaseStudyData = {
  industry: 'Manufacturing & Engineering',
  industryEmoji: '\uD83C\uDFED',
  projectType: 'Process Automation',
  timeline: '3 Months',
  location: 'NCR, India',
  title: 'JSS Structures',
  subtitle: 'End-to-end operational automation for a growing engineering firm',
  problem:
    'JSS Structures relied on manual HR, sales, and operations reporting across disconnected spreadsheets. Three full-time employees spent their weeks consolidating data instead of acting on it — leading to missed leads, delayed payroll, and zero real-time visibility into business performance.',
  solutionSteps: [
    {
      title: 'HR Workflow Automation',
      description:
        'Digitised attendance, leave tracking, and payroll processing — eliminating manual entry and reducing errors.',
    },
    {
      title: 'Sales Pipeline & CRM Integration',
      description:
        'Built a structured pipeline that captures leads from all channels and auto-assigns follow-ups so nothing falls through the cracks.',
    },
    {
      title: 'Real-Time Dashboards',
      description:
        'Custom dashboards that pull live data from HR, sales, and operations into a single view — accessible from any device.',
    },
    {
      title: 'AI Calling Agent',
      description:
        'Deployed a VAPI-powered voice agent for instant inbound lead response and qualification — even outside business hours.',
    },
  ],
  techStack: [
    { name: 'FastAPI', type: 'custom' },
    { name: 'VAPI', type: 'integration' },
    { name: 'Google Sheets', type: 'integration' },
    { name: 'Custom Dashboard', type: 'custom' },
    { name: 'CRM Integration', type: 'integration' },
  ],
  results: [
    { metric: '40+ hrs/wk', description: 'Saved in manual reporting' },
    { metric: '3 → 1', description: 'Employees needed for reporting' },
    { metric: 'Instant', description: 'Lead response with AI agent' },
    { metric: 'Real-time', description: 'Visibility across operations' },
  ],
  testimonial: {
    quote:
      'We went from three people doing nothing but copying data between spreadsheets to having one person oversee a fully automated system. The AI calling agent alone has transformed how fast we respond to new enquiries.',
    attribution: 'Operations Head, JSS Structures',
  },
  layoutDirection: 'left',
};

const leadGenAgency: CaseStudyData = {
  industry: 'Lead Generation',
  industryEmoji: '\uD83D\uDCDE',
  projectType: 'Analytics & Scoring',
  timeline: '1 Month',
  location: 'India',
  title: 'Lead Gen Agency',
  subtitle: 'AI-powered call scoring and campaign analytics for a performance marketing agency',
  problem:
    'This agency handled hundreds of call recordings every week but reviewed them manually — a time-consuming process that delayed campaign optimisation and made it impossible to score lead quality at scale.',
  solutionSteps: [
    {
      title: 'Automatic Call Transcription',
      description:
        'Every call recording is transcribed within minutes using AssemblyAI, with speaker diarisation for clear attribution.',
    },
    {
      title: 'AI-Powered Lead Scoring',
      description:
        'Lemur analyses each transcript and assigns a quality score based on intent signals, objections, and conversion likelihood.',
    },
    {
      title: 'CRM & Campaign Integration',
      description:
        'Scores and transcripts push directly into GoHighLevel and Outlook, so the sales team sees enriched leads instantly.',
    },
    {
      title: 'Live Campaign Dashboard',
      description:
        'A custom dashboard tracks call volume, average scores, and conversion trends across every campaign in real time.',
    },
  ],
  techStack: [
    { name: 'Ringba', type: 'integration' },
    { name: 'AssemblyAI', type: 'integration' },
    { name: 'Lemur', type: 'integration' },
    { name: 'Google Drive', type: 'integration' },
    { name: 'Outlook', type: 'integration' },
    { name: 'GoHighLevel', type: 'integration' },
    { name: 'Custom Dashboard', type: 'custom' },
  ],
  results: [
    { metric: 'Minutes', description: 'Auto scoring replaces hours of review' },
    { metric: '0', description: 'Manual call reviews needed' },
    { metric: 'Better', description: 'Lead prioritisation & follow-up' },
    { metric: 'Real-time', description: 'Campaign performance visibility' },
  ],
  testimonial: {
    quote:
      'We used to spend half the week just listening to calls. Now every call is scored automatically and the best leads surface on their own. It completely changed how we run campaigns.',
    attribution: 'Founder, Lead Generation Agency',
  },
  layoutDirection: 'right',
};

const moreProjects: ProjectCardData[] = [
  {
    industry: 'Real Estate',
    industryEmoji: '\uD83C\uDFE2',
    title: 'AI Calling Agent for Inbound Lead Qualification',
    problem:
      'A Gurgaon-based real estate developer was losing high-intent leads because the sales team couldn\u2019t answer every inbound call promptly.',
    solution:
      'We deployed an AI voice agent that qualifies inbound leads 24/7 — asking about budget, timeline, and property preferences — then routes hot leads directly to the sales team.',
    result: 'Instant lead qualification, zero missed calls',
  },
  {
    industry: 'Automotive',
    industryEmoji: '\uD83D\uDD27',
    title: 'Mechanic Assist — AI Repair Companion',
    status: 'In Pilot',
    problem:
      'Independent mechanics waste time diagnosing unfamiliar vehicles and searching for repair procedures across scattered manuals.',
    solution:
      'An AI-powered mobile assistant that takes symptom descriptions and returns step-by-step repair guides, parts lists, and estimated labour times.',
    result: 'Faster diagnostics, fewer misdiagnoses',
  },
];

/* ── Filter logic ────────────────────────────────────────── */

function matchesFilter(filters: Filters, item: { industry: string; projectType: string; timeline: string }) {
  if (filters.industry !== 'All' && !item.industry.toLowerCase().includes(filters.industry.toLowerCase()))
    return false;
  if (filters.projectType !== 'All' && item.projectType !== filters.projectType) return false;
  if (filters.timeline !== 'All') {
    const t = filters.timeline;
    if (t === 'Under 1 Month' && item.timeline !== '< 1 Month' && item.timeline !== 'Under 1 Month')
      return false;
    if (t === '1-3 Months' && !['1 Month', '2 Months', '3 Months', '1-3 Months'].includes(item.timeline))
      return false;
    if (t === '3+ Months' && !item.timeline.match(/^[3-9]\+?\s*Months?$|^\d{2,}/)) return false;
  }
  return true;
}

/* ── Main View ───────────────────────────────────────────── */

const CaseStudies = () => {
  const [filters, setFilters] = useState<Filters>({
    industry: 'All',
    projectType: 'All',
    timeline: 'All',
  });

  const showJSS = useMemo(
    () =>
      matchesFilter(filters, {
        industry: 'Manufacturing',
        projectType: 'Process Automation',
        timeline: '3 Months',
      }),
    [filters]
  );

  const showLeadGen = useMemo(
    () =>
      matchesFilter(filters, {
        industry: 'Lead Generation',
        projectType: 'Analytics & Scoring',
        timeline: '1 Month',
      }),
    [filters]
  );

  const filteredProjects = useMemo(
    () =>
      moreProjects.filter((p) =>
        matchesFilter(filters, {
          industry: p.industry,
          projectType:
            p.industry === 'Real Estate' ? 'AI Calling Agents' : 'AI Products',
          timeline:
            p.industry === 'Real Estate' ? 'Under 1 Month' : '1-3 Months',
        })
      ),
    [filters]
  );

  const nothingVisible = !showJSS && !showLeadGen && filteredProjects.length === 0;

  return (
    <div className="min-h-screen bg-white">
      <CaseStudiesHeroNew />
      <CaseStudyFilter filters={filters} onChange={setFilters} />

      {nothingVisible && (
        <div className="py-20 text-center bg-light-cyan-50">
          <p className="font-heading text-xl text-dark-navy-400">
            No case studies match the current filters.
          </p>
          <button
            onClick={() => setFilters({ industry: 'All', projectType: 'All', timeline: 'All' })}
            className="mt-4 text-accent-orange hover:underline font-heading font-semibold"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Featured #1 — light cyan background */}
      {showJSS && (
        <div className="bg-light-cyan-50">
          <FeaturedCaseStudy data={jssStructures} />
        </div>
      )}

      {/* Featured #2 — white background (alternating) */}
      {showLeadGen && (
        <div className="bg-white">
          <FeaturedCaseStudy data={leadGenAgency} />
        </div>
      )}

      {/* More Projects — matching homepage section style */}
      {filteredProjects.length > 0 && (
        <section className="py-20 bg-light-cyan-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark-navy mb-4">
                More Projects
              </h2>
              <p className="font-body text-lg text-dark-navy-300 max-w-2xl mx-auto">
                Ongoing and recently launched work across other industries.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {filteredProjects.map((project, i) => (
                <ProjectCard key={i} data={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CaseStudiesCTANew />
    </div>
  );
};

export default CaseStudies;
