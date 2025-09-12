// src/components/ServiceCards.tsx - FINAL FIXED VERSION
import React from 'react';
import { 
  Brain, 
  Zap, 
  Phone, 
  BarChart3, 
  Users,
  Sparkles,
  Search,
  Settings,
  Workflow,
  Database,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock
} from 'lucide-react';
import { CTA_ACTIONS } from '@/lib/BookingLinks';

const ServiceCards = () => {
  const handleGetStarted = (service: any) => {
    CTA_ACTIONS.GET_WORKFLOW_AUDIT();
  };

  const handleViewDetails = (service: any) => {
    window.location.href = service.link;
  };

  // NEW SERVICE STRUCTURE - Following the 3-Category Approach
  const serviceCategories = [
    {
      category: "🤖 Agentic AI",
      subtitle: "AI That Thinks & Acts",
      description: "Advanced AI agents that make decisions, take actions, and solve complex problems independently",
      services: [
        {
          icon: Users,
          title: "AI Sales Agent",
          shortTitle: "Sales AI",
          description: "Intelligent AI agent that handles sales conversations, qualifies leads, and closes deals 24/7",
          benefits: [
            "24/7 lead qualification & scoring",
            "Automated sales conversations",
            "CRM integration & pipeline management",
            "Revenue tracking & analytics"
          ],
          pricing: "$1,000+",
          timeline: "2-3 weeks",
          featured: true,
          gradient: "from-blue-500 to-indigo-500",
          iconBg: "from-blue-100 to-indigo-100",
          iconColor: "text-blue-600",
          badge: "🔥 Most Popular",
          link: "/sales-ai"
        },
        {
          icon: Phone,
          title: "AI Voice Agent",
          shortTitle: "Voice AI",
          description: "Human-like AI calling bot that makes calls, books appointments, and handles customer service",
          benefits: [
            "Natural conversation flow",
            "Appointment scheduling automation",
            "Lead qualification calls",
            "Customer service & support"
          ],
          pricing: "$800+",
          timeline: "2-3 weeks",
          featured: false,
          gradient: "from-pink-500 to-rose-500",
          iconBg: "from-pink-100 to-rose-100",
          iconColor: "text-pink-600",
          badge: "🎯 High Converting",
          link: "/voice-ai"
        },
        {
          icon: BarChart3,
          title: "AI Data Analytics Agent",
          shortTitle: "Data Analytics",
          description: "AI agent that analyzes data, generates insights, and provides predictive recommendations",
          benefits: [
            "Automated data analysis & reporting",
            "Predictive insights & forecasting",
            "Custom dashboard creation",
            "Real-time performance monitoring"
          ],
          pricing: "$1,200+",
          timeline: "3-4 weeks",
          featured: false,
          gradient: "from-green-500 to-emerald-500",
          iconBg: "from-green-100 to-emerald-100",
          iconColor: "text-green-600",
          badge: "📊 Premium",
          link: "/data-analytics"
        }
      ]
    },
    {
      category: "✨ Generative AI",
      subtitle: "AI That Creates",
      description: "AI systems that generate content, designs, and creative assets at scale",
      services: [
        {
          icon: Search,
          title: "Programmatic SEO System",
          shortTitle: "SEO Automation",
          description: "AI-powered content generation system that creates SEO-optimized pages and content at scale",
          benefits: [
            "Automated content generation",
            "SEO optimization & keyword targeting",
            "Bulk page creation & management",
            "Performance tracking & analytics"
          ],
          pricing: "$700+",
          timeline: "3-4 weeks",
          featured: false,
          gradient: "from-yellow-500 to-orange-500",
          iconBg: "from-yellow-100 to-orange-100",
          iconColor: "text-yellow-600",
          badge: "📈 Growth Focused",
          link: "/programmatic-seo"
        },
        {
          icon: Sparkles,
          title: "Custom AI Content Generator",
          shortTitle: "Generative AI",
          description: "Tailored AI systems for creating marketing content, proposals, and brand-consistent materials",
          benefits: [
            "Custom AI model training",
            "Brand-consistent content creation",
            "Multi-format content generation",
            "Integration with existing workflows"
          ],
          pricing: "$900+",
          timeline: "3-5 weeks",
          featured: false,
          gradient: "from-purple-500 to-indigo-500",
          iconBg: "from-purple-100 to-indigo-100",
          iconColor: "text-purple-600",
          badge: "✨ Custom",
          link: "/generative-ai"
        }
      ]
    },
    {
      category: "⚙️ Business Automation",
      subtitle: "Smart Workflows",
      description: "Process optimization and workflow automation without AI complexity",
      services: [
        {
          icon: Database,
          title: "CRM Automation & Setup",
          shortTitle: "CRM Setup",
          description: "Complete CRM optimization with automated pipelines, lead scoring, and workflow management",
          benefits: [
            "CRM setup & configuration",
            "Automated lead scoring & routing",
            "Pipeline optimization",
            "Integration with existing tools"
          ],
          pricing: "$500+",
          timeline: "1-2 weeks",
          featured: false,
          gradient: "from-teal-500 to-cyan-500",
          iconBg: "from-teal-100 to-cyan-100",
          iconColor: "text-teal-600",
          badge: "⚡ Quick Setup",
          link: "/crm-automation"
        },
        {
          icon: Workflow,
          title: "Workflow Process Automation",
          shortTitle: "Workflow Automation",
          description: "Streamline business processes with smart automation that eliminates manual bottlenecks",
          benefits: [
            "Process mapping & optimization",
            "Cross-platform integrations",
            "Task automation & routing",
            "Performance monitoring"
          ],
          pricing: "$600+",
          timeline: "2-4 weeks",
          featured: false,
          gradient: "from-slate-500 to-gray-500",
          iconBg: "from-slate-100 to-gray-100",
          iconColor: "text-slate-600",
          badge: "⚙️ Efficiency Boost",
          link: "/workflow-automation"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our AI Automation Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Choose from three specialized categories designed to transform different aspects of your business operations
          </p>
        </div>
        
        {/* Service Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20 last:mb-0">
            {/* Category Header */}
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                {category.category}
              </h3>
              <div className="text-lg font-semibold text-blue-600 mb-4">
                {category.subtitle}
              </div>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                {category.description}
              </p>
            </div>
            
            {/* Services Grid */}
            <div className={`grid gap-8 max-w-7xl mx-auto ${
              category.services.length === 1 ? 'lg:grid-cols-1 max-w-md' :
              category.services.length === 2 ? 'lg:grid-cols-2' :
              'lg:grid-cols-3 md:grid-cols-2'
            }`}>
              {category.services.map((service, serviceIndex) => {
                const IconComponent = service.icon;
                
                return (
                  <div 
                    key={serviceIndex}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Card Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                    
                    {/* Featured Badge */}
                    {service.featured && (
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center transform rotate-12 shadow-lg z-10">
                        <div className="text-white text-xs font-bold text-center leading-tight">
                          MOST<br/>POPULAR
                        </div>
                      </div>
                    )}
                    
                    {/* Service Badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-700 rounded-full shadow-lg">
                        {service.badge}
                      </span>
                    </div>
                    
                    {/* Card Content */}
                    <div className="relative bg-white border border-slate-200 rounded-2xl p-8 h-full min-h-[600px] flex flex-col transition-all duration-300 group-hover:border-slate-300">
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                      </div>
                      
                      {/* Title */}
                      <h4 className="font-bold text-slate-900 mb-4 transition-all duration-300 text-xl leading-tight">
                        {service.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      {/* Benefits */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                          What You Get
                        </h5>
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
                      
                      {/* CTA Buttons */}
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
        ))}
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Not Sure Which Category Fits Your Business?
          </h3>
          <p className="text-slate-600 mb-6 text-lg">
            Get a free consultation to discover the perfect automation strategy for your specific needs
          </p>
          <button
            onClick={() => CTA_ACTIONS.BOOK_STRATEGY_SESSION()}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center gap-3 mx-auto"
          >
            <ArrowRight className="w-5 h-5" />
            Book 30-Min Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;