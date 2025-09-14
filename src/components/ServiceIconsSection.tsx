// ServiceIconsSection.tsx - FINAL MOBILE-FIXED VERSION
// Replace your current ServiceIconsSection.tsx with this enhanced version

import React, { useState, useRef, useCallback } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
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
  const isMobile = useIsMobile();
  const touchTimeoutRef = useRef(null);
  const isTouch = useRef(false);

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
      howItWorks: "The AI voice system connects to your phone lines, understands natural speech, and responds intelligently. It can take appointments, qualify leads, answer FAQs, and transfer complex issues to humans.",
      perfectFor: [
        "Service businesses with high call volume",
        "Medical practices handling appointments",
        "Sales teams needing lead qualification calls",
        "Support teams overwhelmed with repetitive calls"
      ],
      keyBenefits: [
        "24/7 phone coverage & appointment booking",
        "Natural conversation & appointment scheduling",
        "Call routing & lead qualification",
        "Integration with calendars & CRMs"
      ]
    },
    {
      icon: BarChart3,
      title: "AI Data Analytics",
      shortTitle: "Data AI",
      category: "🤖 Agentic AI",
      categoryColor: "from-purple-500 to-indigo-500",
      iconBg: "from-purple-100 to-indigo-100",
      iconColor: "text-purple-600",
      badge: "💼 Enterprise",
      link: "/data-analytics-ai",
      pricing: "$1,200+",
      timeline: "2-4 weeks",
      description: "AI agent that analyzes your data, generates insights, creates reports, and answers business questions",
      whyBeneficial: "Data analysts cost $70K+/year and take days to generate reports. AI Data Analytics provides instant insights 24/7, identifies trends humans miss, and scales infinitely without additional headcount costs.",
      howItWorks: "The AI connects to your data sources (CRM, analytics, databases), learns your business metrics, and provides real-time insights through natural language queries. It generates automated reports and proactive alerts.",
      perfectFor: [
        "Companies drowning in data but lacking insights",
        "Executives needing instant business intelligence",
        "Teams spending hours creating reports manually",
        "Businesses wanting predictive analytics"
      ],
      keyBenefits: [
        "Natural language data queries",
        "Automated insight generation",
        "Predictive trend analysis", 
        "Real-time business intelligence dashboards"
      ]
    },
    {
      icon: Search,
      title: "Programmatic SEO",
      shortTitle: "Auto SEO",
      category: "✨ Generative AI",
      categoryColor: "from-green-500 to-teal-500",
      iconBg: "from-green-100 to-teal-100",
      iconColor: "text-green-600",
      badge: "🚀 Fast Growth",
      link: "/programmatic-seo",
      pricing: "$700+",
      timeline: "1-2 weeks",
      description: "AI creates hundreds of SEO-optimized pages automatically, targeting every profitable keyword in your niche",
      whyBeneficial: "Manual content creation costs $100+ per page and takes weeks. Programmatic SEO creates hundreds of pages for the cost of 10 manual pages, ranks faster, and scales infinitely.",
      howItWorks: "AI analyzes your niche, identifies thousands of profitable keywords, generates unique optimized content for each, and publishes automatically. Built-in tracking monitors rankings and traffic.",
      perfectFor: [
        "SaaS companies wanting to dominate search results",
        "Service businesses targeting local markets",
        "E-commerce brands with large product catalogs",
        "Content companies needing scale"
      ],
      keyBenefits: [
        "Automated content generation at scale",
        "Advanced keyword research & targeting",
        "Built-in SEO optimization",
        "Performance tracking & analytics"
      ]
    },
    {
      icon: Sparkles,
      title: "Custom AI Content",
      shortTitle: "Content AI",
      category: "✨ Generative AI",
      categoryColor: "from-violet-500 to-purple-500",
      iconBg: "from-violet-100 to-purple-100",
      iconColor: "text-violet-600",
      badge: "🎨 Creative",
      link: "/custom-ai-content",
      pricing: "$900+",
      timeline: "2-3 weeks",
      description: "AI content creation system that produces blogs, social media, emails, and marketing copy in your brand voice",
      whyBeneficial: "Content writers cost $50K+/year and create 2-3 pieces daily. Custom AI Content creates unlimited content 24/7, maintains consistent brand voice, and adapts to any format or platform instantly.",
      howItWorks: "AI learns your brand voice, target audience, and content strategy. It then creates unlimited content across all channels - blogs, social posts, emails, ads - all optimized for engagement and conversions.",
      perfectFor: [
        "Marketing teams needing consistent content",
        "Agencies managing multiple client brands",
        "Solo entrepreneurs wearing many hats",
        "Businesses struggling with content calendar consistency"
      ],
      keyBenefits: [
        "Brand voice consistency across all content",
        "Multi-platform content optimization",
        "Automated content scheduling",
        "Performance-based content optimization"
      ]
    },
    {
      icon: Database,
      title: "CRM Automation",
      shortTitle: "Smart CRM",
      category: "⚙️ Business Automation",
      categoryColor: "from-blue-500 to-cyan-500",
      iconBg: "from-blue-100 to-cyan-100",
      iconColor: "text-blue-600",
      badge: "💎 Essential",
      link: "/crm-automation",
      pricing: "$500+",
      timeline: "1-2 weeks",
      description: "Complete CRM automation that manages leads, nurtures prospects, and tracks sales pipeline automatically",
      whyBeneficial: "Sales reps spend 65% of time on admin tasks instead of selling. CRM Automation eliminates data entry, ensures no leads fall through cracks, and provides perfect follow-up timing every time.",
      howItWorks: "Automatically captures leads from all sources, scores and routes them, triggers personalized follow-up sequences, updates deal stages, and provides real-time pipeline insights.",
      perfectFor: [
        "Sales teams losing leads to poor follow-up",
        "Growing businesses outgrowing spreadsheets",
        "Companies wanting predictable sales pipeline",
        "Teams spending too much time on data entry"
      ],
      keyBenefits: [
        "Automated lead capture & scoring",
        "Smart follow-up sequences",
        "Pipeline management & forecasting",
        "Sales performance analytics"
      ]
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      shortTitle: "Smart Workflows",
      category: "⚙️ Business Automation",
      categoryColor: "from-orange-500 to-red-500",
      iconBg: "from-orange-100 to-red-100",
      iconColor: "text-orange-600",
      badge: "⚡ Efficiency Boost",
      link: "/workflow-automation",
      pricing: "$600+",
      timeline: "1-3 weeks",
      description: "Custom workflow automation that connects all your tools and eliminates repetitive manual tasks",
      whyBeneficial: "Employees spend 40% of time on repetitive tasks that could be automated. Workflow Automation eliminates human error, works 24/7, and scales infinitely without hiring.",
      howItWorks: "We map your current processes, identify automation opportunities, build custom workflows that connect your tools, and create intelligent triggers that handle tasks automatically.",
      perfectFor: [
        "Teams doing repetitive manual work",
        "Growing businesses needing scalable processes", 
        "Companies with disconnected tool stacks",
        "Operations managers wanting consistency"
      ],
      keyBenefits: [
        "Custom process automation design",
        "Multi-tool integration & data sync",
        "Intelligent triggers & conditional logic",
        "Process optimization & monitoring"
      ]
    },
    {
      icon: Settings,
      title: "Reporting Automation",
      shortTitle: "Auto Reports",
      category: "⚙️ Business Automation", 
      categoryColor: "from-teal-500 to-green-500",
      iconBg: "from-teal-100 to-green-100",
      iconColor: "text-teal-600",
      badge: "📊 Insights",
      link: "/reporting-automation",
      pricing: "$400+",
      timeline: "1-2 weeks",
      description: "Automated reporting system that generates and distributes business insights, KPI dashboards, and performance reports",
      whyBeneficial: "Manual reporting takes 8+ hours weekly and is often outdated by the time it's shared. Automated Reporting delivers real-time insights, saves massive time, and enables data-driven decision making.",
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

  // Enhanced position calculation for mobile
  const calculatePopupPosition = useCallback((rect, isMobileDevice) => {
    if (isMobileDevice) {
      // Center popup horizontally on mobile, position above the card
      const viewportWidth = window.innerWidth;
      const popupWidth = 288; // w-72 = 288px
      
      return {
        x: Math.max(16, Math.min(viewportWidth - popupWidth - 16, rect.left + rect.width / 2 - popupWidth / 2)),
        y: Math.max(16, rect.top - 10)
      };
    } else {
      // Desktop positioning (existing logic)
      return {
        x: rect.left + rect.width / 2,
        y: rect.top - 10
      };
    }
  }, []);

  // Enhanced mouse enter handler
  const handleMouseEnter = useCallback((service, event) => {
    // Don't trigger on mobile if it was a touch event
    if (isMobile && isTouch.current) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const popup = calculatePopupPosition(rect, isMobile);
    
    setPopupPosition(popup);
    setHoveredService(service);
  }, [isMobile, calculatePopupPosition]);

  // Enhanced mouse leave handler  
  const handleMouseLeave = useCallback(() => {
    // Don't hide immediately on mobile (let touch handle it)
    if (isMobile && isTouch.current) {
      return;
    }
    
    setHoveredService(null);
  }, [isMobile]);

  // Touch start handler for mobile
  const handleTouchStart = useCallback((service, event) => {
    isTouch.current = true;
    
    // Clear any existing timeout
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const popup = calculatePopupPosition(rect, true);
    
    setPopupPosition(popup);
    setHoveredService(service);

    // Auto-hide popup after 4 seconds on mobile
    touchTimeoutRef.current = setTimeout(() => {
      setHoveredService(null);
      isTouch.current = false;
    }, 4000);

    // Prevent default to avoid triggering mouse events
    event.preventDefault();
  }, [calculatePopupPosition]);

  // Touch end handler
  const handleTouchEnd = useCallback(() => {
    // Small delay to distinguish between tap-to-show-popup vs tap-to-navigate
    setTimeout(() => {
      isTouch.current = false;
    }, 100);
  }, []);

  // Handle popup touch (prevent auto-hide when interacting with popup)
  const handlePopupTouch = useCallback(() => {
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
      // Reset the auto-hide timer
      touchTimeoutRef.current = setTimeout(() => {
        setHoveredService(null);
        isTouch.current = false;
      }, 4000);
    }
  }, []);

  // Enhanced click handler
  const handleCardClick = useCallback((service, event) => {
    // On mobile, if popup is already shown, navigate. If not shown, show popup first
    if (isMobile && hoveredService && hoveredService.link === service.link) {
      navigateToService(service.link);
    } else if (isMobile && !hoveredService) {
      // Show popup first on mobile
      handleTouchStart(service, event);
    } else {
      // Desktop behavior - navigate immediately
      navigateToService(service.link);
    }
  }, [isMobile, hoveredService, handleTouchStart]);

  const navigateToService = useCallback((link) => {
    window.open(link, '_blank');
  }, []);

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
      }
    };
  }, []);

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
            
            {/* Services Grid - Enhanced with touch events */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
              {allServices.map((service, index) => {
                const IconComponent = service.icon;
                
                return (
                  <div
                    key={index}
                    className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105 touch-manipulation"
                    // Desktop events
                    onMouseEnter={(e) => handleMouseEnter(service, e)}
                    onMouseLeave={handleMouseLeave}
                    // Mobile touch events
                    onTouchStart={(e) => handleTouchStart(service, e)}
                    onTouchEnd={handleTouchEnd}
                    // Click handler for both desktop and mobile
                    onClick={(e) => handleCardClick(service, e)}
                    // Accessibility
                    role="button"
                    tabIndex={0}
                    aria-label={`Learn more about ${service.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        navigateToService(service.link);
                      }
                    }}
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
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto touch-manipulation"
              >
                <ArrowRight className="w-5 h-5" />
                Get Free Strategy Session
              </button>
            </div>
          </div>
        </div>
        
        {/* Enhanced Popup with Mobile Touch Support */}
        {hoveredService && (
          <div 
            className="fixed z-50"
            style={{ 
              left: `${popupPosition.x}px`, 
              top: `${popupPosition.y}px`,
              pointerEvents: isMobile ? 'auto' : 'none'
            }}
            onTouchStart={isMobile ? handlePopupTouch : undefined}
          >
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-slate-200 p-4 sm:p-6 w-72 sm:w-80 animate-fade-in max-h-[80vh] overflow-y-auto relative">
              
              {/* Mobile Close Button */}
              {isMobile && (
                <button
                  onClick={() => {
                    setHoveredService(null);
                    if (touchTimeoutRef.current) {
                      clearTimeout(touchTimeoutRef.current);
                    }
                    isTouch.current = false;
                  }}
                  className="absolute top-2 right-2 p-1 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-10"
                  aria-label="Close popup"
                >
                  <X className="w-4 h-4 text-slate-600" />
                </button>
              )}

              {/* Header - Mobile Optimized */}
              <div className="flex items-start justify-between mb-3 sm:mb-4 pr-8 sm:pr-2">
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
                  {hoveredService.perfectFor.slice(0, isMobile ? 2 : 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                  {hoveredService.perfectFor.length > (isMobile ? 2 : 3) && (
                    <li className="text-xs text-slate-400 italic">
                      +{hoveredService.perfectFor.length - (isMobile ? 2 : 3)} more use cases
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