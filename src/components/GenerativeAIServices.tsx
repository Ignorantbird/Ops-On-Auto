// src/components/GenerativeAIServices.tsx - EXACT SAME STRUCTURE AS BUSINESS AUTOMATION
import { Button } from "@/components/ui/button";
import { Database, Search, ArrowRight, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GenerativeAIServices = () => {
  const navigate = useNavigate();

  // GENERATIVE AI SERVICES - EXACT SAME STRUCTURE AS BUSINESS AUTOMATION
  const solutions = [
    {
      icon: Database,
      title: "AI Data Processing",
      badge: "🤖 Intelligent",
      description: "Custom AI models and ML integrations that process, analyze, and transform your data into actionable insights with automated workflows.",
      benefits: [
        "Custom ML model development",
        "Automated data pipeline creation",
        "Real-time data transformation",
        "Advanced analytics & predictions"
      ],
      investmentRange: "$1,200 - $2,500",
      timeline: "3-5 weeks",
      gradient: "from-blue-500 to-indigo-600",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
      link: "/data-analytics"
    },
    {
      icon: Search,
      title: "Programmatic SEO",
      badge: "📈 High ROI",
      description: "AI-powered content generation system that creates hundreds of SEO-optimized pages automatically, scaling your organic traffic exponentially.",
      benefits: [
        "Automated content generation",
        "SEO optimization & keyword targeting",
        "Bulk page creation & management",
        "Performance tracking & analytics"
      ],
      investmentRange: "$800 - $1,800",
      timeline: "2-4 weeks",
      gradient: "from-yellow-500 to-orange-600",
      iconBg: "bg-gradient-to-br from-yellow-500 to-orange-600",
      link: "/programmatic-seo"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            Our Professional Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Professional <span className="text-purple-500">Generative AI</span> Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Deploy intelligent AI systems that generate content, process data, and create digital assets at scale. Transform your creative workflows with AI that learns your brand voice and delivers consistent results.
          </p>
        </div>

        {/* Solutions Grid - 2 Services Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
                  {/* Header with Icon and Badge */}
                  <div className="p-8 pb-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 ${solution.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm font-medium px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                        {solution.badge}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {solution.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {solution.description}
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-slate-900 text-sm">What You Get:</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Investment & Timeline - Bordered Box */}
                  <div className="px-8 pb-6 mt-auto">
                    <div className="mb-6 p-6 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="text-sm text-slate-500 mb-2">Investment Range</div>
                          <div className="text-2xl font-bold text-purple-600">
                            {solution.investmentRange}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-slate-500 mb-2">Delivery Timeline</div>
                          <div className="text-2xl font-bold text-slate-900">
                            {solution.timeline}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Clean Button */}
                    <div 
                      onClick={() => window.location.href = solution.link}
                      className={`w-full bg-gradient-to-r ${solution.gradient} hover:opacity-90 text-white border-0 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-center rounded-xl flex items-center justify-center gap-2`}
                    >
                      Learn More About {solution.title}
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Not sure which AI solution is right for your business?
          </p>
          {/* Bottom CTA - Working Div-Based Button */}
          <div 
            onClick={() => window.location.href = '/workflow-audit'}
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
          >
            <Brain className="w-5 h-5" />
            Get Free AI Strategy Consultation
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerativeAIServices;