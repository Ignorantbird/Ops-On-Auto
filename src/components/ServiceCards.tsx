import { Database, BarChart3, Settings, Phone, Search, Brain, Sparkles, ArrowRight, CheckCircle, Clock, DollarSign } from "lucide-react";
import { PrimaryCTA } from "./cta/StandardizedCTA";
import { Link, useNavigate } from "react-router-dom";

const ServiceCards = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Brain,
      title: "Agentic AI Implementation",
      shortTitle: "Agentic AI",
      description: "Advanced AI agents that handle complex tasks, make intelligent decisions, and learn from every interaction.",
      benefits: [
        "24/7 intelligent decision making",
        "Human-like conversation abilities", 
        "Multi-step workflow execution",
        "Continuous learning & improvement"
      ],
      pricing: "Custom Quote",
      timeline: "3-6 weeks",
      featured: true,
      gradient: "from-purple-500 via-blue-500 to-cyan-500",
      iconBg: "from-purple-100 to-blue-100",
      iconColor: "text-purple-600",
      badge: "🚀 Most Advanced",
      link: "/agentic-ai"
    },
    {
      icon: Database,
      title: "CRM Setup & Optimization",
      shortTitle: "CRM Automation",
      description: "Transform your customer data into a revenue-generating machine with smart pipelines and automated scoring.",
      benefits: [
        "Automated lead scoring & routing",
        "Smart pipeline management",
        "Data cleanup & migration",
        "Real-time performance tracking"
      ],
      pricing: "₹25,000+",
      timeline: "1-3 weeks",
      featured: false,
      gradient: "from-orange-500 to-red-500",
      iconBg: "from-orange-100 to-red-100",
      iconColor: "text-orange-600",
      badge: "⭐ Most Popular",
      link: "/crm-automation"
    },
    {
      icon: BarChart3,
      title: "Reporting & Analytics Automation",
      shortTitle: "Smart Reporting",
      description: "Stop manually creating reports. Get automated dashboards with real-time insights that update themselves.",
      benefits: [
        "Real-time dashboard updates",
        "Automated report generation",
        "Custom KPI tracking",
        "Smart alerts & notifications"
      ],
      pricing: "₹20,000+",
      timeline: "1-2 weeks",
      featured: false,
      gradient: "from-green-500 to-emerald-500",
      iconBg: "from-green-100 to-emerald-100",
      iconColor: "text-green-600",
      badge: "📊 Data-Driven",
      link: "/reporting-automation"
    },
    {
      icon: Settings,
      title: "Workflow Optimization & Automation",
      shortTitle: "Workflow Magic",
      description: "Eliminate bottlenecks and repetitive tasks with intelligent workflow automation that adapts to your processes.",
      benefits: [
        "Process mapping & optimization",
        "Cross-platform integrations",
        "Task automation & routing",
        "Performance monitoring"
      ],
      pricing: "₹30,000+",
      timeline: "2-4 weeks",
      featured: false,
      gradient: "from-blue-500 to-indigo-500",
      iconBg: "from-blue-100 to-indigo-100",
      iconColor: "text-blue-600",
      badge: "⚡ Efficiency Boost",
      link: "/workflow-automation"
    },
    {
      icon: Phone,
      title: "Voice AI Calling Bot",
      shortTitle: "Voice AI",
      description: "Human-like AI calling bots that qualify leads, book appointments, and handle customer inquiries naturally.",
      benefits: [
        "Natural conversation flow",
        "24/7 lead qualification",
        "Appointment scheduling",
        "CRM integration & tracking"
      ],
      pricing: "₹40,000+",
      timeline: "2-3 weeks",
      featured: false,
      gradient: "from-pink-500 to-rose-500",
      iconBg: "from-pink-100 to-rose-100",
      iconColor: "text-pink-600",
      badge: "🎯 High Converting",
      link: "/voice-ai"
    },
    {
      icon: Search,
      title: "Programmatic SEO & Content Automation",
      shortTitle: "SEO Automation",
      description: "Scale your content creation and SEO efforts with AI-powered systems that generate and optimize content automatically.",
      benefits: [
        "Automated content generation",
        "SEO optimization & tracking",
        "Keyword research automation",
        "Performance analytics"
      ],
      pricing: "₹35,000+",
      timeline: "3-4 weeks",
      featured: false,
      gradient: "from-yellow-500 to-orange-500",
      iconBg: "from-yellow-100 to-orange-100",
      iconColor: "text-yellow-600",
      badge: "🔍 Growth Focused",
      link: "/programmatic-seo"
    }
  ];

  // Handle CTA button clicks
  const handleGetStarted = (service: typeof services[0]) => {
    navigate(service.link);
  };

  const handleViewDetails = (service: typeof services[0]) => {
    navigate(service.link);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-600 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Automation Services
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Choose Your <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Automation Journey</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From simple CRM automation to advanced AI agents, we have the perfect solution to eliminate your repetitive work and scale your operations.
          </p>
        </div>
        
        {/* Services Grid - FIXED LAYOUT WITH EQUAL HEIGHTS */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                {/* Featured Badge - FIXED */}
                {service.featured && (
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center transform rotate-12 shadow-lg z-10">
                    <div className="text-white text-xs font-bold text-center leading-tight">
                      MOST<br/>ADVANCED
                    </div>
                  </div>
                )}
                
                {/* Service Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-700 rounded-full shadow-lg">
                    {service.badge}
                  </span>
                </div>
                
                {/* Card Content - FIXED CONSISTENT HEIGHT */}
                <div className="relative bg-white border border-slate-200 rounded-2xl p-8 h-full min-h-[700px] flex flex-col transition-all duration-300 group-hover:border-slate-300">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  
                  {/* Title - FIXED RESPONSIVE TEXT SIZE */}
                  <h3 className="font-bold text-slate-900 mb-4 transition-all duration-300 text-xl leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description - FIXED HEIGHT */}
                  <p className="text-slate-600 leading-relaxed mb-6 h-20 overflow-hidden">
                    {service.description}
                  </p>
                  
                  {/* Benefits - FIXED HEIGHT */}
                  <div className="mb-6 h-40">
                    <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      What You Get
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start text-slate-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Spacer to push content to bottom */}
                  <div className="flex-grow"></div>
                  
                  {/* Pricing & Timeline */}
                  <div className="flex items-center justify-between mb-6 p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center text-sm">
                      <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                      <span className="font-semibold text-slate-900">{service.pricing}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.timeline}
                    </div>
                  </div>
                  
                  {/* CTA - FIXED FUNCTIONALITY & CONSISTENT SIZING */}
                  <div className="space-y-3">
                    <button
                      onClick={() => handleGetStarted(service)}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 h-14 text-base"
                    >
                      <ArrowRight className="w-5 h-5" />
                      Get Started with {service.shortTitle}
                    </button>
                    
                    <button 
                      onClick={() => handleViewDetails(service)}
                      className="w-full border-2 border-slate-200 text-slate-700 rounded-xl font-medium hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 h-12 text-base flex items-center justify-center"
                    >
                      View Details & Examples
                    </button>
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

export default ServiceCards;