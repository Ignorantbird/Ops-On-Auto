// src/components/Navigation.tsx - RESTORED PROPER LOGO
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { toast } from 'sonner';
import Logo3D from './Logo3D';

// RESTORED: Your existing proper logo components
const OpsOnAuto3DLogo = ({ 
  size = 64, 
  showText = true,
  className = "" 
}: { 
  size?: number; 
  showText?: boolean;
  className?: string; 
}) => {
  return (
    <div className={`flex items-center gap-0 ${className}`}>
      <div className="transition-all duration-300 hover:scale-105">
        <Logo3D 
          width={size} 
          height={size} 
          gearColor="#17a2b8"
          accentColor="#ff6b35"
        />
      </div>
      {showText && (
        <div 
          className="font-bold hidden sm:block"
          style={{ 
            fontSize: `${size * 0.4}px`,
            fontFamily: "'Montserrat', 'Poppins', 'Inter', sans-serif",
            fontWeight: '800',
            background: 'linear-gradient(135deg, #0f6674 0%, #17a2b8 50%, #20c997 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
            marginLeft: `${-size * 0.08}px`,
            letterSpacing: '-0.5px',
            lineHeight: '1',
          }}
        >
          psOnAuto
        </div>
      )}
    </div>
  );
};

const FallbackLogo = ({ 
  size = 64, 
  showText = true,
  className = "" 
}: { 
  size?: number; 
  showText?: boolean;
  className?: string; 
}) => {
  return (
    <div className={`flex items-center gap-0 ${className}`}>
      <div 
        className="relative transition-all duration-300 hover:scale-105"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: `${size * 0.8}px`,
            height: `${size * 0.8}px`,
            background: `linear-gradient(145deg, #17a2b8 0%, #138496 100%)`,
            boxShadow: `0 ${size * 0.1}px ${size * 0.2}px rgba(23, 162, 184, 0.3)`
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: `${size * 0.4}px`,
              height: `${size * 0.4}px`,
              background: `linear-gradient(145deg, #4169E1 0%, #1E3A8A 100%)`
            }}
          >
            <div
              className="absolute top-1/2 left-1/2 transform -translate-y-1/2"
              style={{
                marginLeft: `${size * 0.02}px`,
                width: 0,
                height: 0,
                borderLeft: `${size * 0.08}px solid #FF6B35`,
                borderTop: `${size * 0.05}px solid transparent`,
                borderBottom: `${size * 0.05}px solid transparent`,
              }}
            />
          </div>
        </div>
      </div>
      {showText && (
        <div 
          className="font-bold hidden sm:block"
          style={{ 
            fontSize: `${size * 0.35}px`,
            fontFamily: "'Montserrat', 'Poppins', 'Inter', sans-serif",
            fontWeight: '800',
            background: 'linear-gradient(135deg, #0f6674 0%, #17a2b8 50%, #20c997 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginLeft: `${size * 0.05}px`,
            letterSpacing: '-0.5px',
            lineHeight: '1',
          }}
        >
          psOnAuto
        </div>
      )}
    </div>
  );
};

const SafeLogo = (props: { size?: number; showText?: boolean; className?: string }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <FallbackLogo {...props} />;
  }

  try {
    return <OpsOnAuto3DLogo {...props} />;
  } catch (error) {
    setHasError(true);
    return <FallbackLogo {...props} />;
  }
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const handleBookDemo = async () => {
    try {
      const response = await fetch('https://formspree.io/f/xvgblgdn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: 'navigation_cta',
          message: 'User clicked "Book Free Demo" from navigation',
          page: window.location.pathname,
          timestamp: new Date().toISOString(),
          action: 'book_demo_request'
        }),
      });

      if (response.ok) {
        toast.success("Demo request submitted! We'll contact you within 24 hours.");
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'book_demo_nav', {
            event_category: 'conversion',
            event_label: 'header_cta_success'
          });
        }
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Demo request failed:', error);
      toast.error("Request failed. Please contact hello@opsonauto.com directly.");
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'book_demo_nav_failed', {
          event_category: 'error',
          event_label: 'header_cta_error'
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActiveRoute = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  // UPDATED: Restructured service categories according to the plan
  const serviceCategories = [
    {
      category: "🤖 Agentic AI",
      services: [
        { 
          title: "Agentic AI", 
          path: "/agentic-ai", 
          description: "AI that thinks, plans & acts independently", 
          badge: "🔥 Popular" 
        },
        { 
          title: "AI Sales Person", 
          path: "/sales-ai", 
          description: "24/7 AI sales team that never sleeps", 
          badge: "💰 High ROI" 
        },
        { 
          title: "Voice AI", 
          path: "/voice-ai", 
          description: "AI phone calls & customer service" 
        },
        { 
          title: "Data Analytics", 
          path: "/data-analytics", 
          description: "AI-driven insights & predictions", 
          badge: "📊 Premium" 
        }
      ]
    },
    {
      category: "✨ Generative AI",
      services: [
        { 
          title: "Generative AI", 
          path: "/generative-ai", 
          description: "Custom AI that creates content & designs", 
          badge: "✨ New" 
        },
        { 
          title: "AI Data Processing", 
          path: "/data-analytics", 
          description: "Custom ML models & AI integrations" 
        },
        { 
          title: "Programmatic SEO", 
          path: "/programmatic-seo", 
          description: "AI-generated SEO content at scale" 
        }
      ]
    },
    {
      category: "⚙️ Business Automation",
      services: [
        // 🔧 FIXED: Added missing "Business Automation" main category page as first item
        { 
          title: "Business Automation", 
          path: "/business-automation", 
          description: "Smart workflows & process optimization", 
          badge: "🏆 Core" 
        },
        { 
          title: "CRM Automation", 
          path: "/crm-automation", 
          description: "Smart pipelines & lead scoring" 
        },
        { 
          title: "Workflow Automation", 
          path: "/workflow-automation", 
          description: "Process optimization & task automation" 
        },
        { 
          title: "Reporting Automation", 
          path: "/reporting-automation", 
          description: "Automated dashboards & real-time insights" 
        }
      ]
    }
  ];

  // FINAL USD PRICING FIX
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className={`container mx-auto px-4 transition-all duration-300 ${
        isScrolled ? 'h-16' : 'h-20'
      }`}>
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          
          {/* LOGO - UNCHANGED */}
          <Link to="/" className="flex items-center group">
            <SafeLogo 
              size={isScrolled ? 64 : 72} 
              showText={true}
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* DESKTOP NAVIGATION - UNCHANGED */}
          <div className="hidden lg:flex items-center space-x-1">
            
            {/* Services Mega Menu - Only serviceCategories array changed */}
            <div className="relative" ref={megaMenuRef}
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}>
            
              <button
                className={`relative flex items-center px-4 py-3 font-semibold text-base transition-all duration-200 rounded-lg group ${
                  isActiveRoute('/services') || isActiveRoute('/agentic-ai') || isActiveRoute('/crm-automation') || isActiveRoute('/sales-ai') || isActiveRoute('/generative-ai')
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu - UPDATED TO 3-COLUMN LAYOUT */}
              {isMegaMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-50"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}>
                  <div className="grid grid-cols-3 gap-6">
                    {serviceCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                          {category.category}
                        </h3>
                        <div className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                              onClick={() => setIsMegaMenuOpen(false)}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <div className="font-medium text-slate-900 group-hover:text-blue-600">
                                  {service.title}
                                </div>
                                {service.badge && (
                                  <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                                    {service.badge}
                                  </span>
                                )}
                              </div>
                              <div className="text-sm text-slate-600">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Quick CTA in Mega Menu - UNCHANGED */}
                  <div className="border-t border-gray-100 mt-6 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-slate-900">Not sure which service you need?</div>
                        <div className="text-sm text-slate-600">Get a free consultation to find the perfect solution</div>
                      </div>
                      <Link 
                        to="/workflow-audit" 
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        Free Audit
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* NAVIGATION LINKS - UNCHANGED */}
            <Link 
              to="/use-cases" 
              className={`px-4 py-3 font-semibold text-base transition-all duration-200 rounded-lg ${
                isActiveRoute('/use-cases') 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Use Cases
            </Link>
            
            <Link 
              to="/pricing" 
              className={`px-4 py-3 font-semibold text-base transition-all duration-200 rounded-lg ${
                isActiveRoute('/pricing') 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Pricing
            </Link>

            <Link 
              to="/industries" 
              className={`px-4 py-3 font-semibold text-base transition-all duration-200 rounded-lg ${
                isActiveRoute('/industries') 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Industries
            </Link>

            {/* More Dropdown - UNCHANGED */}
            <div className="relative group">
              <button className="relative flex items-center px-4 py-3 font-semibold text-base transition-all duration-200 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50">
                More
                <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link to="/about" className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 text-sm transition-colors duration-200">About</Link>
                <Link to="/integrations" className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 text-sm transition-colors duration-200">Integrations</Link>
                <Link to="/case-studies" className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 text-sm transition-colors duration-200">Case Studies</Link>
                <Link to="/resources" className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 text-sm transition-colors duration-200">Resources</Link>
                <Link to="/partnerships" className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 text-sm transition-colors duration-200">Partnerships</Link>
                <Link to="/contact" className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 text-sm transition-colors duration-200">Contact</Link>
              </div>
            </div>
          </div>

          {/* CTA BUTTON - UNCHANGED */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={handleBookDemo}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Book Free Demo
            </button>
          </div>

          {/* MOBILE MENU BUTTON - UNCHANGED */}
          <button
            className="lg:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU - UNCHANGED EXCEPT SERVICE CATEGORIES */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg max-h-96 overflow-y-auto">
            <div className="py-4 space-y-2">
              {/* Services Section */}
              <div className="px-6 py-2">
                <div className="font-semibold text-slate-900 mb-3">Services</div>
                {serviceCategories.map((category) =>
                  category.services.map((service, index) => (
                    <Link 
                      key={index}
                      to={service.path} 
                      className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 text-sm transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))
                )}
              </div>
              
              {/* Other Links - UNCHANGED */}
              <Link 
                to="/use-cases" 
                className="block px-6 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Use Cases
              </Link>
              <Link 
                to="/pricing" 
                className="block px-6 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/industries" 
                className="block px-6 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Industries
              </Link>
              
              {/* More section in mobile - UNCHANGED */}
              <div className="px-6 py-2">
                <div className="font-semibold text-slate-900 mb-3">More</div>
                <Link to="/about" className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 text-sm transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                <Link to="/integrations" className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 text-sm transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Integrations</Link>
                <Link to="/case-studies" className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 text-sm transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>
                <Link to="/resources" className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 text-sm transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Resources</Link>
                <Link to="/partnerships" className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 text-sm transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Partnerships</Link>
                <Link to="/contact" className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 text-sm transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              </div>
              
              {/* CTA Button Mobile - UNCHANGED */}
              <div className="px-6 pt-4 border-t border-gray-200">
                <button
                  onClick={handleBookDemo}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200"
                >
                  Book Free Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;