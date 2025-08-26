// src/components/Navigation.tsx - UPDATED WITH EXPANDED SERVICES
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { PrimaryCTA } from "@/components/cta/StandardizedCTA";
import Logo3D from "./Logo3D";

// Logo component remains the same with fixed spacing
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
          className="font-bold text-teal-600 hidden sm:block"
          style={{ 
            fontSize: `${size * 0.4}px`,
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            textShadow: `0 ${size * 0.02}px ${size * 0.04}px rgba(0, 0, 0, 0.1)`,
            color: '#0f6674'
          }}
        >
          OpsOnAuto
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
              background: `linear-gradient(145deg, #4169E1 0%, #1E3A8A 100())`
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
          className="font-bold text-teal-600 hidden sm:block"
          style={{ fontSize: `${size * 0.35}px`, color: '#0f6674' }}
        >
          OpsOnAuto
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

  // EXPANDED SERVICE LINKS - Organized by Category
  const serviceCategories = [
    {
      category: "AI Solutions",
      services: [
        { title: "Agentic AI", path: "/agentic-ai", description: "AI that thinks, plans & acts independently", badge: "🔥 Popular" },
        { title: "Generative AI", path: "/generative-ai", description: "Custom AI that creates content & designs", badge: "✨ New" },
        { title: "AI Sales Person", path: "/ai-sales-person", description: "24/7 AI sales team that never sleeps" },
        { title: "AI Development", path: "/ai-development", description: "Custom ML models & AI integrations" }
      ]
    },
    {
      category: "Business Systems",
      services: [
        { title: "CRM Automation", path: "/crm-automation", description: "Smart pipelines & lead scoring" },
        { title: "Business Consulting", path: "/business-consulting", description: "Strategic AI roadmap & transformation" },
        { title: "Process Automation", path: "/process-automation", description: "Turn manual work into AI workflows" },
        { title: "Data Analytics", path: "/data-analytics", description: "AI-driven insights & predictions" }
      ]
    }
  ];

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
          
          {/* LOGO - Fixed Spacing */}
          <Link to="/" className="flex items-center group">
            <SafeLogo 
              size={isScrolled ? 64 : 72} 
              showText={true}
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            
            {/* ENHANCED Services Mega Menu */}
            <div className="relative" ref={megaMenuRef}>
              <button
                className={`relative flex items-center px-4 py-3 font-semibold text-base transition-all duration-200 rounded-lg group ${
                  isActiveRoute('/services') || isActiveRoute('/agentic-ai') || isActiveRoute('/crm-automation')
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* EXPANDED Mega Menu */}
              {isMegaMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-50">
                  <div className="grid grid-cols-2 gap-6">
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
                  
                  {/* Quick CTA in Mega Menu */}
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

            {/* Other navigation links remain the same */}
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
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-4 py-3 font-semibold text-base text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg">
                More
                <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                <Link to="/about" className="block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">About</Link>
                <Link to="/integrations" className="block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">Integrations</Link>
                <Link to="/case-studies" className="block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">Case Studies</Link>
                <Link to="/resources" className="block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">Resources</Link>
                <Link to="/partnerships" className="block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">Partnerships</Link>
                <Link to="/faq" className="block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">FAQ</Link>
                <Link to="/contact" className="block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">Contact</Link>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <PrimaryCTA 
              label="Book Free Demo" 
              icon="calendar"
              className="font-bold px-6 py-3 text-base"
            />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu - Enhanced with all services */}
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
              
              {/* Other Links */}
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
              <Link 
                to="/about" 
                className="block px-6 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block px-6 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-6 pt-4">
                <PrimaryCTA 
                  label="Book Free Demo" 
                  icon="calendar"
                  className="w-full justify-center"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;