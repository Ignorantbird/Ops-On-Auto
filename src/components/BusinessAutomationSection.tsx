// src/components/BusinessAutomationSection.tsx - COMPLETE COMBINED STRUCTURE
import { Button } from "@/components/ui/button";
import { Settings, Workflow, BarChart3, Database, ArrowRight, Brain, CheckCircle, Clock, TrendingUp, Users, Target, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BusinessAutomationSection = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  // BUSINESS AUTOMATION SERVICES - Image 1 Structure
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
        "Automated dashboard creation",
        "Real-time data visualization",
        "Custom KPI tracking",
        "Scheduled report delivery"
      ],
      investmentRange: "$400 - $1,000",
      timeline: "1-2 weeks",
      gradient: "from-green-500 to-emerald-600",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
      link: "/reporting-automation"
    }
  ];

  // Additional sections from Image 2
  const benefits = [
    {
      icon: Clock,
      title: "Save 15+ Hours Weekly",
      description: "Eliminate manual data entry, repetitive tasks, and process bottlenecks"
    },
    {
      icon: TrendingUp,
      title: "Increase Efficiency by 300%",
      description: "Streamlined workflows that scale with your business growth"
    },
    {
      icon: Target,
      title: "99% Task Accuracy",
      description: "Automated processes eliminate human error and ensure consistency"
    },
    {
      icon: BarChart3,
      title: "Real-time Insights",
      description: "Monitor performance with automated dashboards and reporting"
    }
  ];

  const integrations = [
    { name: "HubSpot", logo: "🔵", description: "Complete CRM automation" },
    { name: "Salesforce", logo: "🔵", description: "Enterprise sales workflows" },
    { name: "Zapier", logo: "🟠", description: "Multi-app connections" },
    { name: "Make.com", logo: "🟣", description: "Visual workflow builder" },
    { name: "Microsoft", logo: "🔵", description: "Office 365 team ecosystem" },
    { name: "Google", logo: "🔴", description: "Workspace automation" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "Analyze current processes and identify automation opportunities",
      icon: Users
    },
    {
      step: "02", 
      title: "Design",
      description: "Create optimized workflow blueprints tailored to your business",
      icon: Target
    },
    {
      step: "03",
      title: "Build",
      description: "Configure automation workflows and integrate with existing tools",
      icon: Settings
    },
    {
      step: "04",
      title: "Launch",
      description: "Deploy, test, and monitor automated processes for optimal performance",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* HERO SECTION - Matching Agentic AI Style */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-36 h-36 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/5 rounded-full blur-lg"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/5 rounded-full blur-md"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <Settings className="w-4 h-4 mr-2" />
              Business Automation Services
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Smart Workflows That 
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Scale Your Business</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Streamline operations without AI complexity. Perfect for businesses ready to eliminate manual processes and boost efficiency with proven automation strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                onClick={() => navigate('/workflow-audit')}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Brain className="mr-2 h-5 w-5" />
                Get Free Process Audit
              </Button>
              <Button 
                onClick={() => navigate('/pricing')}
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6"
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                View Pricing Plans
              </Button>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="w-8 h-8 text-orange-400 mb-2" />
                <span className="text-white/80 text-sm">Free consultation included</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="w-8 h-8 text-orange-400 mb-2" />
                <span className="text-white/80 text-sm">No long-term contracts</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="w-8 h-8 text-orange-400 mb-2" />
                <span className="text-white/80 text-sm">ROI guaranteed</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="w-8 h-8 text-orange-400 mb-2" />
                <span className="text-white/80 text-sm">Expert guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE BUSINESS AUTOMATION - From Image 2 */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Business Automation?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR PROFESSIONAL BUSINESS AUTOMATION SERVICES - Image 1 Structure */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Professional 
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Business Automation Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Streamline workflows, optimize CRM systems, and eliminate manual bottlenecks with intelligent automation 
              that adapts to your business processes and drives operational efficiency.
            </p>
          </div>

          {/* Service Cards Stack - Image 1 Layout */}
          <div className="max-w-6xl mx-auto space-y-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    
                    {/* Icon Side */}
                    <div className={`text-center ${!isEven ? 'lg:order-2' : ''}`}>
                      <div className="relative inline-block">
                        <div className="absolute -top-6 -right-2 z-20">
                          <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full shadow-md">
                            {solution.badge}
                          </span>
                        </div>
                        
                        <div className="relative">
                          <div className={`w-48 h-48 rounded-3xl ${solution.iconBg} flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-3 transition-all duration-500 relative`}>
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500 rounded-full shadow-lg"></div>
                            <IconComponent className="w-20 h-20 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                          {solution.title}
                        </h3>
                        
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                          {solution.description}
                        </p>

                        {/* What You Get - 2x2 Grid Layout */}
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

                        {/* Investment & Timeline - Bordered Box */}
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

                        {/* CTA Button */}
                        <Button 
                          onClick={() => navigate(solution.link)}
                          className={`w-full bg-gradient-to-r ${solution.gradient} hover:opacity-90 text-white border-0 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          Learn More About {solution.title}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
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
              Need help choosing the right automation solution for your business?
            </p>
            <Button 
              onClick={() => navigate('/workflow-audit')}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0 font-bold"
            >
              <Brain className="w-6 h-6 mr-3" />
              Get Free Business Automation Audit
            </Button>
          </div>
        </div>
      </section>

      {/* SEAMLESS INTEGRATIONS - From Image 2 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Seamless Integrations</h2>
            <p className="text-xl text-slate-600">Connect with your existing tools and platforms</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                  <span className="text-2xl">{integration.logo}</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-1">{integration.name}</h4>
                <p className="text-sm text-slate-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROVEN PROCESS - From Image 2 */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-slate-600">How we deliver automation success in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESULTS SECTION - From Image 2 */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-teal-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Real Results: TechConsulting Pro</h2>
              <div className="text-white/90">
                <p className="text-lg mb-4"><strong>The Challenge:</strong></p>
                <p className="mb-6">Manual client onboarding taking 5 weeks per new client with 40+ manual steps</p>
                <p className="text-lg mb-4"><strong>Our Solution:</strong></p>
                <p>Implemented automated client onboarding workflow with smart routing</p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-sm text-white/80 mb-2">Onboarding Time</div>
                <div className="text-3xl font-bold text-white">After: 3 days</div>
              </div>
              <div>
                <div className="text-sm text-white/80 mb-2">Manual Steps</div>
                <div className="text-3xl font-bold text-white">After: 5 steps</div>
              </div>
              <div>
                <div className="text-sm text-white/80 mb-2">Error Rate</div>
                <div className="text-3xl font-bold text-white">After: 1%</div>
              </div>
              <div>
                <div className="text-sm text-white/80 mb-2">Team Productivity</div>
                <div className="text-3xl font-bold text-white">After: 340%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - From Image 2 */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free process audit and discover how much money you could save with smart automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleNavigation('/workflow-audit')}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4"
            >
              📊 Book Free Process Audit
            </Button>
            <Button 
              onClick={() => handleNavigation('/contact')}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4"
            >
              📞 Call Now
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>No commitment — 30 day money back</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>ROI guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessAutomationSection;