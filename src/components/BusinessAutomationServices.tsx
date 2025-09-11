// src/components/BusinessAutomationServices.tsx - EXACT AISOLUTIONS STRUCTURE
import { Button } from "@/components/ui/button";
import { Settings, Workflow, BarChart3, ArrowRight, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BusinessAutomationServices = () => {
  const navigate = useNavigate();

  // BUSINESS AUTOMATION SERVICES - EXACT SAME STRUCTURE AS AISOLUTIONS
  const solutions = [
    {
      icon: Settings,
      title: "CRM Automation",
      badge: "💼 Essential",
      description: "Smart CRM systems with automated lead scoring, pipeline management, and customer journey tracking that eliminates manual data entry.",
      benefits: [
        "Automated lead scoring & routing",
        "Smart pipeline management",
        "Customer journey tracking", 
        "Data cleanup & organization"
      ],
      investmentRange: "$500 - $1,200",
      timeline: "1-3 weeks",
      gradient: "from-orange-500 to-red-600",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-600",
      link: "/crm-automation"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      badge: "🚀 Popular",
      description: "Process optimization and task automation that eliminates bottlenecks and streamlines your business operations for maximum efficiency.",
      benefits: [
        "Process optimization & mapping",
        "Task automation & scheduling",
        "Bottleneck identification",
        "Team productivity enhancement"
      ],
      investmentRange: "$600 - $1,400",
      timeline: "2-4 weeks",
      gradient: "from-blue-500 to-indigo-600",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
      link: "/workflow-automation"
    },
    {
      icon: BarChart3,
      title: "Reporting Automation",
      badge: "📊 Insights",
      description: "Automated dashboards and real-time reporting systems that provide actionable insights and eliminate manual report generation.",
      benefits: [
        "Real-time dashboard creation",
        "Automated report scheduling",
        "Data visualization & insights",
        "Custom KPI tracking"
      ],
      investmentRange: "$400 - $1,000",
      timeline: "1-2 weeks",
      gradient: "from-green-500 to-emerald-600",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
      link: "/reporting-automation"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Professional 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Business Automation</span> Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Streamline workflows, optimize CRM systems, and eliminate manual bottlenecks with 
            intelligent automation that adapts to your business processes and drives operational efficiency.
          </p>
        </div>

        {/* Service Cards Stack - EXACT SAME AS AISOLUTIONS */}
        <div className="max-w-6xl mx-auto space-y-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  
                  {/* Icon Side */}
                  <div className={`text-center ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative inline-block">
                      {/* Badge positioned outside the tilted container */}
                      <div className="absolute -top-6 -right-2 z-20">
                        <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full shadow-md">
                          {solution.badge}
                        </span>
                      </div>
                      
                      {/* 3D Icon Container - Tilted Style EXACTLY like AISolutions */}
                      <div className="relative">
                        <div className={`w-48 h-48 rounded-3xl ${solution.iconBg} flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-3 transition-all duration-500 relative`}>
                          {/* Orange accent dot - top right */}
                          <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500 rounded-full shadow-lg"></div>
                          <IconComponent className="w-20 h-20 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side - EXACT AISOLUTIONS STRUCTURE */}
                  <div className={`space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {solution.title}
                      </h3>
                      
                      <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        {solution.description}
                      </p>

                      {/* What You Get - 2x2 Grid Layout EXACTLY like AISolutions */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-slate-900 mb-4">What You Get:</h4>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                          {solution.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-700 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Investment & Timeline - Bordered Box EXACTLY like AISolutions */}
                      <div className="mb-6 p-6 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <div className="text-sm text-slate-500 mb-2">Investment Range</div>
                            <div className="text-2xl font-bold text-blue-600">
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

                      {/* REFINED DIAGNOSTIC */}
                      <div>
                        
                        {/* Working div-based button */}
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
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Not sure which automation solution is right for your business?
          </p>
          {/* Bottom CTA - Working Div-Based Button */}
          <div 
            onClick={() => window.location.href = '/workflow-audit'}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
          >
            <Brain className="w-5 h-5" />
            Get Free Business Automation Audit
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAutomationServices;