// 1. DIRECT REPLACEMENT FOR: src/components/CaseStudyCards.tsx
import { Badge } from "@/components/ui/badge";
import { Phone, BarChart3, Search, UserCheck } from "lucide-react";

export const CaseStudyCards = () => {
  const caseStudies = [
    {
      icon: Phone,
      title: "Instant AI Lead Calls Boost Conversions",
      industry: "PPC Agency",
      challenge: "Leads from paid campaigns were contacted too late, resulting in lost opportunities.",
      solution: "Implemented a Voice AI Bot that called leads within 2 minutes of form submission, engaged them with human-like conversations, and booked meetings directly into the sales calendar.",
      results: [
        "+30% increase in lead-to-meeting conversion rate",
        "Reduced lead response time from hours to minutes", 
        "Improved campaign ROI without increasing ad spend"
      ]
    },
    {
      icon: BarChart3,
      title: "Automated KPI Reporting Saves 10+ Hours/Week",
      industry: "SMB - Services",
      challenge: "Managers spent hours compiling daily KPI reports from multiple sources.",
      solution: "Built an automated reporting system integrating CRM, Google Sheets, and Power BI to deliver ready-to-share reports every morning.",
      results: [
        "Saved ~10 hours per week in reporting",
        "Real-time data access improved decision-making speed"
      ]
    },
    {
      icon: Search,
      title: "Scalable SEO Content Production",
      industry: "E-commerce",
      challenge: "SEO growth was limited by slow, manual publishing processes.",
      solution: "Deployed a programmatic SEO system to create and publish hundreds of optimized landing pages in bulk.",
      results: [
        "200+ pages published in one month",
        "Organic traffic growth within the first quarter"
      ]
    },
    {
      icon: UserCheck,
      title: "End-to-End Client Onboarding Automation",
      industry: "Consultancy",
      challenge: "Onboarding was manual and inconsistent, causing delays in service delivery.",
      solution: "Automated the process from welcome emails to account setup, task assignments, and first deliverable scheduling.",
      results: [
        "Reduced onboarding time by 50%",
        "Improved client satisfaction scores"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured <span className="text-orange-500">Case Studies</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See how businesses like yours achieved measurable results with our automation solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-slate-300 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <IconComponent className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">
                        {study.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-700 w-fit">
                        {study.industry}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2 text-sm uppercase tracking-wide">
                      The Challenge
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2 text-sm uppercase tracking-wide">
                      Our Solution
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orange-600 mb-3 text-sm uppercase tracking-wide">
                      Key Results
                    </h4>
                    <ul className="space-y-3">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700 font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
