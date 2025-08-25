// 3. FIXED UseCaseCards.tsx - Remove yellow background, fix character encoding
import { Phone, BarChart3, UserCheck, Globe, Database } from "lucide-react";

const UseCaseCards = () => {
  const useCases = [
    {
      icon: Phone,
      title: "AI-Powered Lead Calls After CRM Enquiry",
      challenge: "Leads were slipping through the cracks because follow-up calls took hours or even days.",
      solution: "We implemented a Voice AI Bot powered by LLMs to instantly call new CRM enquiries within 1—2 minutes. The bot engaged in human-like conversations, qualified leads, and scheduled meetings.",
      result: "30% increase in lead-to-meeting conversion in the first week",
      impact: "Faster follow-up improved trust and response rates"
    },
    {
      icon: BarChart3,
      title: "Daily KPI Reporting Automation",
      challenge: "Managers spent hours compiling daily reports from multiple tools.",
      solution: "We automated data collection and formatting into a single, ready-to-share report delivered to their inbox every morning.",
      result: "Saved ~10 hours/week in manual reporting",
      impact: "Decision-making speed improved thanks to real-time data"
    },
    {
      icon: UserCheck,
      title: "Automated Client Onboarding Workflow",
      challenge: "New clients faced delays in onboarding due to manual steps and inconsistent communication.",
      solution: "We built a workflow that automatically sends welcome messages, sets up accounts, assigns team members, and triggers internal tasks.",
      result: "Reduced onboarding time by 50%",
      impact: "Higher client satisfaction from day one"
    },
    {
      icon: Globe,
      title: "Programmatic SEO Content Publishing",
      challenge: "Content marketing was limited by slow, manual publishing and inconsistent keyword targeting.",
      solution: "We set up a programmatic SEO system to publish optimized landing pages at scale.",
      result: "200+ pages published in one month",
      impact: "Significant organic traffic growth within the first quarter"
    },
    {
      icon: Database,
      title: "CRM Pipeline Cleanup & Automation",
      challenge: "Sales teams struggled with outdated, incomplete CRM data.",
      solution: "We cleaned the database, standardized fields, and set up automated lead routing and follow-up reminders.",
      result: "Reduced lead response time from 48 hours to under 4 hours",
      impact: "More accurate sales forecasting and reporting"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured Use Cases
          </h2>
        </div>
        
        <div className="space-y-12 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {useCase.title}
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-orange-600 mb-2 uppercase tracking-wide">
                        The Challenge
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {useCase.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-orange-600 mb-2 uppercase tracking-wide">
                        The Solution
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {useCase.solution}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-orange-600 mb-2 uppercase tracking-wide">
                        The Result
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <p className="text-lg font-bold text-green-600 mb-1">
                            {useCase.result}
                          </p>
                          <p className="text-sm text-slate-600">
                            {useCase.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseCards;
