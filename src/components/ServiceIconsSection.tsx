// New Enhanced ServiceIconsSection.tsx - All Subcategory Services with Hover Popups
// Replace the entire ServiceIconsSection.tsx component

import React, { useState } from 'react';
import { 
  Users, 
  Phone, 
  BarChart3, 
  Search, 
  Sparkles, 
  Database, 
  Workflow, 
  Settings, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  DollarSign,
  X,
  ExternalLink
} from 'lucide-react';

const ServiceIconsSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  // Complete list of all subcategory services with detailed popup information
  const allServices = [
    {
      icon: Users,
      title: "AI Sales Agent",
      shortTitle: "Sales AI",
      category: "🤖 Agentic AI",
      categoryColor: "from-blue-500 to-indigo-500",
      iconBg: "from-blue-100 to-indigo-100",
      iconColor: "text-blue-600",
      badge: "🔥 Most Popular",
      link: "/sales-ai",
      pricing: "$1,000+",
      timeline: "2-3 weeks",
      description: "Intelligent AI agent that handles sales conversations, qualifies leads, and closes deals 24/7",
      whyBeneficial: "Unlike traditional sales reps who work 8 hours/day, AI Sales Agents work 24/7 without breaks, sick days, or commission costs. They never forget to follow up and maintain consistent messaging.",
      howItWorks: "The AI agent integrates with your CRM, learns your sales process, and engages prospects through multiple channels (email, chat, phone). It qualifies leads using your criteria and hands off qualified prospects to human closers.",
      perfectFor: [
        "SaaS companies with high lead volume",
        "Service businesses needing 24/7 lead response",
        "Sales teams struggling with follow-up consistency",
        "Companies wanting to reduce cost per acquisition"
      ],
      keyBenefits: [
        "24/7 lead qualification & scoring",
        "Automated sales conversations", 
        "CRM integration & pipeline management",
        "Revenue tracking & analytics"
      ]
    },
    {
      icon: Phone,
      title: "AI Voice Agent", 
      shortTitle: "Voice AI",
      category: "🤖 Agentic AI",
      categoryColor: "from-pink-500 to-rose-500",
      iconBg: "from-pink-100 to-rose-100", 
      iconColor: "text-pink-600",
      badge: "🎯 High Converting",
      link: "/voice-ai",
      pricing: "$800+",
      timeline: "2-3 weeks",
      description: "Human-like AI calling bot that makes calls, books appointments, and handles customer service",
      whyBeneficial: "Human receptionists cost $30K+/year and make mistakes. AI Voice Agents cost less, never miss calls, work 24/7, and provide consistent service quality. They can handle unlimited concurrent calls.",
      howItWorks: "The AI voice system connects to your phone lines, understands natural speech, and responds intelligently. It can book appointments in your calendar, qualify leads, answer FAQs, and transfer complex calls to humans.",
      perfectFor: [
        "Dental/medical practices with high call volume",
        "Service businesses needing appointment booking",
        "Companies with repetitive customer inquiries",
        "Businesses losing leads to missed calls"
      ],
      keyBenefits: [
        "Natural conversation flow",
        "Appointment scheduling automation",
        "Lead qualification calls", 
        "Customer service & support"
      ]
    },
    {
      icon: BarChart3,
      title: "AI Data Analytics",
      shortTitle: "Data Analytics", 
      category: "🤖 Agentic AI",
      categoryColor: "from-green-500 to-emerald-500",
      iconBg: "from-green-100 to-emerald-100",
      iconColor: "text-green-600", 
      badge: "📊 Premium",
      link: "/data-analytics",
      pricing: "$1,200+",
      timeline: "3-4 weeks",
      description: "AI agent that analyzes data, generates insights, and provides predictive recommendations",
      whyBeneficial: "Manual data analysis takes hours and often misses patterns. AI Analytics agents process massive datasets in minutes, spot trends humans miss, and predict future outcomes with 85%+ accuracy.",
      howItWorks: "The AI connects to your data sources (CRM, analytics, sales platforms), processes information continuously, and generates automated reports with actionable insights. It alerts you to anomalies and opportunities in real-time.",
      perfectFor: [
        "E-commerce businesses tracking performance",
        "Marketing agencies managing client data", 
        "SaaS companies monitoring user behavior",
        "Any business drowning in spreadsheets"
      ],
      keyBenefits: [
        "Automated data analysis & reporting",
        "Predictive insights & forecasting",
        "Custom dashboard creation", 
        "Real-time performance monitoring"
      ]
    },
    {
      icon: Search,
      title: "Programmatic SEO",
      shortTitle: "SEO Automation",
      category: "✨ Generative AI", 
      categoryColor: "from-yellow-500 to-orange-500",
      iconBg: "from-yellow-100 to-orange-100",
      iconColor: "text-yellow-600",
      badge: "📈 Growth Focused", 
      link: "/programmatic-seo",
      pricing: "$700+",
      timeline: "3-4 weeks",
      description: "AI-powered content generation system that creates SEO-optimized pages and content at scale",
      whyBeneficial: "Manual content creation costs $100+/article and takes days. Programmatic SEO creates hundreds of pages automatically, targeting thousands of keywords simultaneously for exponential traffic growth.",
      howItWorks: "The AI analyzes your industry keywords, creates content templates, and generates unique pages for each target keyword. It optimizes meta tags, internal linking, and content structure for maximum SEO impact.",
      perfectFor: [
        "SaaS companies targeting feature keywords",
        "Local businesses needing location pages",
        "E-commerce sites with large product catalogs", 
        "Content marketers scaling their efforts"
      ],
      keyBenefits: [
        "Automated content generation",
        "SEO optimization & keyword targeting",
        "Bulk page creation & management",
        "Performance tracking & analytics"
      ]
    },
    {
      icon: Sparkles,
      title: "Custom AI Content",
      shortTitle: "Generative AI",
      category: "✨ Generative AI",
      categoryColor: "from-purple-500 to-indigo-500", 
      iconBg: "from-purple-100 to-indigo-100",
      iconColor: "text-purple-600",
      badge: "✨ Custom",
      link: "/generative-ai", 
      pricing: "$900+",
      timeline: "3-5 weeks",
      description: "Tailored AI systems for creating marketing content, proposals, and brand-consistent materials",
      whyBeneficial: "Generic AI tools create generic content. Custom AI Content systems learn your brand voice, industry terminology, and style preferences to create content that sounds authentically you at scale.",
      howItWorks: "We train AI models on your best content, brand guidelines, and industry knowledge. The system then generates proposals, marketing materials, and content that maintains your unique voice and expertise.",
      perfectFor: [
        "Agencies creating client proposals",
        "Consulting firms with thought leadership",
        "SaaS companies needing technical content", 
        "Service businesses with custom offerings"
      ],
      keyBenefits: [
        "Custom AI model training", 
        "Brand-consistent content creation",
        "Multi-format content generation",
        "Integration with existing workflows"
      ]
    },
    {
      icon: Database,
      title: "CRM Automation", 
      shortTitle: "CRM Setup",
      category: "⚙️ Business Automation",
      categoryColor: "from-teal-500 to-cyan-500",
      iconBg: "from-teal-100 to-cyan-100", 
      iconColor: "text-teal-600",
      badge: "⚡ Quick Setup",
      link: "/crm-automation",
      pricing: "$500+", 
      timeline: "1-2 weeks",
      description: "Complete CRM optimization with automated pipelines, lead scoring, and workflow management",
      whyBeneficial: "Manual CRM management leads to missed follow-ups, data inconsistencies, and lost deals. CRM Automation ensures no lead falls through cracks, maintains data quality, and provides sales team visibility.",
      howItWorks: "We configure your CRM with automated workflows, lead scoring rules, and pipeline stages. The system automatically assigns leads, triggers follow-ups, and updates deal stages based on prospect actions.",
      perfectFor: [
        "Sales teams with inconsistent processes", 
        "Growing businesses managing more leads",
        "Companies with poor lead visibility",
        "Teams wasting time on data entry"
      ],
      keyBenefits: [
        "CRM setup & configuration",
        "Automated lead scoring & routing", 
        "Pipeline optimization",
        "Integration with existing tools"
      ]
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      shortTitle: "Workflow Automation", 
      category: "⚙️ Business Automation",
      categoryColor: "from-slate-500 to-gray-500",
      iconBg: "from-slate-100 to-gray-100",
      iconColor: "text-slate-600",
      badge: "⚙️ Efficiency Boost", 
      link: "/workflow-automation",
      pricing: "$600+",
      timeline: "2-4 weeks", 
      description: "Streamline business processes with smart automation that eliminates manual bottlenecks",
      whyBeneficial: "Manual processes are slow, error-prone, and prevent scaling. Workflow Automation eliminates repetitive tasks, reduces errors by 90%+, and frees your team for high-value work.",
      howItWorks: "We map your current processes, identify bottlenecks, and create automated workflows using tools like Zapier, Make, or custom solutions. Tasks trigger automatically based on conditions you define.",
      perfectFor: [
        "Teams doing repetitive manual tasks",
        "Businesses with disconnected tools", 
        "Companies struggling to scale operations",
        "Organizations wanting process consistency"
      ],
      keyBenefits: [
        "Process mapping & optimization",
        "Cross-platform integrations",
        "Task automation & routing", 
        "Performance monitoring"
      ]
    },
    {
      icon: Settings,
      title: "Reporting Automation",
      shortTitle: "Reporting", 
      category: "⚙️ Business Automation",
      categoryColor: "from-indigo-500 to-purple-500",
      iconBg: "from-indigo-100 to-purple-100",
      iconColor: "text-indigo-600",
      badge: "📊 Insights", 
      link: "/reporting-automation",
      pricing: "$400+",
      timeline: "1-3 weeks",
      description: "Automated dashboards and real-time reporting systems that provide actionable insights",
      whyBeneficial: "Manual reporting consumes 10+ hours weekly and data is always outdated. Automated Reporting delivers real-time insights, saves massive time, and enables data-driven decision making.",
      howItWorks: "We connect your data sources to automated dashboards that update in real-time. Reports are generated and distributed automatically on schedules you define, with alerts for important metrics.",
      perfectFor: [
        "Agencies reporting to clients",
        "Executives needing KPI visibility", 
        "Teams spending hours on reports",
        "Companies wanting proactive alerts"
      ],
      keyBenefits: [
        "Automated dashboard creation",
        "Real-time data synchronization",
        "Scheduled report distribution", 
        "Custom alert systems"
      ]
    }
  ];

  const handleMouseEnter = (service, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const popup = {
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    };
    setPopupPosition(popup);
    setHoveredService(service);
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
  };

  const navigateToService = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section id="services-section" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Automate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From AI agents that think and act independently to smart workflows that eliminate busy work - discover all our automation services in one comprehensive overview.
          </p>
        </div>
        
        {/* Big Container Box with All Services */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 rounded-3xl shadow-2xl border border-slate-200 p-8 md:p-12">
            
            {/* Services Grid - Compact Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
              {allServices.map((service, index) => {
                const IconComponent = service.icon;
                
                return (
                  <div
                    key={index}
                    className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
                    onMouseEnter={(e) => handleMouseEnter(service, e)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => navigateToService(service.link)}
                  >
                    {/* Service Box */}
                    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 h-full min-h-[140px] md:min-h-[160px] flex flex-col items-center justify-center text-center group-hover:border-slate-300">
                      
                      {/* Badge */}
                      {service.badge && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full shadow-lg z-10">
                          {service.badge}
                        </div>
                      )}
                      
                      {/* Icon */}
                      <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${service.iconBg} rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-6 h-6 md:w-8 md:h-8 ${service.iconColor}`} />
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-bold text-slate-900 text-sm md:text-base leading-tight mb-2">
                        {service.title}
                      </h3>
                      
                      {/* Category */}
                      <div className="text-xs text-slate-500 font-medium">
                        {service.category}
                      </div>
                      
                      {/* Quick pricing */}
                      <div className="mt-2 text-xs font-semibold text-green-600">
                        From {service.pricing}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center mt-12 pt-8 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Not Sure Which Service Fits Your Business?
              </h3>
              <p className="text-slate-600 mb-6 text-lg max-w-2xl mx-auto">
                Get a free consultation to discover the perfect automation strategy for your specific needs and budget.
              </p>
              <button
                onClick={() => window.open('/workflow-audit', '_blank')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto"
              >
                <ArrowRight className="w-5 h-5" />
                Get Free Strategy Session
              </button>
            </div>
          </div>
        </div>
        
        {/* Hover Popup - Fully Responsive */}
        {hoveredService && (
          <div 
            className="fixed z-50 pointer-events-none"
            style={{ 
              left: `${popupPosition.x}px`, 
              top: `${popupPosition.y}px`
            }}
          >
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-slate-200 p-4 sm:p-6 w-72 sm:w-80 animate-fade-in max-h-[80vh] overflow-y-auto">
              {/* Header - Mobile Optimized */}
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 pr-2 leading-tight">
                    {hoveredService.title}
                  </h4>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    {hoveredService.category}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-sm font-semibold text-green-600">
                    {hoveredService.pricing}
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {hoveredService.timeline}
                  </div>
                </div>
              </div>
              
              {/* Description - Mobile Optimized */}
              <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                {hoveredService.description}
              </p>
              
              {/* Why Beneficial - Condensed for Mobile */}
              <div className="mb-3 sm:mb-4">
                <h5 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-1">
                  💡 Why It's Better:
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {hoveredService.whyBeneficial}
                </p>
              </div>
              
              {/* How It Works - Show only on larger screens */}
              <div className="mb-3 sm:mb-4 hidden sm:block">
                <h5 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-1">
                  ⚡ How It Works:
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {hoveredService.howItWorks}
                </p>
              </div>
              
              {/* Perfect For - Mobile Optimized */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-1">
                  🎯 Perfect For:
                </h5>
                <ul className="text-xs text-slate-600 space-y-1">
                  {/* Show only 2 items on mobile, 3 on desktop */}
                  {hoveredService.perfectFor.slice(0, window.innerWidth < 640 ? 2 : 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                  {hoveredService.perfectFor.length > (window.innerWidth < 640 ? 2 : 3) && (
                    <li className="text-xs text-slate-400 italic">
                      +{hoveredService.perfectFor.length - (window.innerWidth < 640 ? 2 : 3)} more use cases
                    </li>
                  )}
                </ul>
              </div>
              
              {/* CTA Button - Mobile Optimized */}
              <button 
                onClick={() => navigateToService(hoveredService.link)}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm pointer-events-auto touch-manipulation"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">View Full Details</span>
                <span className="sm:hidden">View Details</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceIconsSection;