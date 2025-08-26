// Complete Navigation.tsx with Lovable 3D Logo Integration
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { PrimaryCTA } from "@/components/cta/StandardizedCTA";
// Import the Lovable 3D Logo component
import Logo3D from "./Logo3D";

// 3D Logo Wrapper Component
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
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Lovable 3D Logo - INCREASED SIZE */}
      <div className="transition-all duration-300 hover:scale-105">
        <Logo3D 
          width={size} 
          height={size} 
          gearColor="#17a2b8"  // Teal color matching your brand
          accentColor="#ff6b35" // Orange color for play button and circuits
        />
      </div>

      {/* OpsOnAuto Text - REDUCED GAP */}
      {showText && (
        <div 
          className="font-bold text-teal-600 hidden sm:block"
          style={{ 
            fontSize: `${size * 0.4}px`, // Slightly bigger text
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

// Fallback Component (in case 3D logo fails to load)
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
    <div className={`flex items-center gap-3 ${className}`}>
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

// Logo with Error Boundary
const SafeLogo = (props: { size?: number; showText?: boolean; className?: string }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset error state when props change
    setHasError(false);
  }, [props.size]);

  if (hasError) {
    return <FallbackLogo {...props} />;
  }

  try {
    return (
      <div onError={() => setHasError(true)}>
        <OpsOnAuto3DLogo {...props} />
      </div>
    );
  } catch (error) {
    return <FallbackLogo {...props} />;
  }
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Pricing", href: "/pricing" },
    { label: "Integrations", href: "/integrations" },
    { label: "Industries", href: "/industries" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" }
  ];

  // Scroll behavior for sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Helper function to check active routes
  const isActiveRoute = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Filter navigation items for main nav and dropdown
  const mainNavItems = ['Services', 'Pricing', 'Industries', 'Use Cases'];
  const moreNavItems = navItems.filter(item => 
    !mainNavItems.includes(item.label)
  );

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
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
          
          {/* LOVABLE 3D LOGO - INCREASED SIZE */}
          <Link to="/" className="flex items-center group">
            <SafeLogo 
              size={isScrolled ? 64 : 72} 
              showText={true}
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Services Dropdown */}
            <div className="relative" ref={megaMenuRef}>
              <button
                className={`relative flex items-center px-4 py-3 font-semibold text-base transition-all duration-200 rounded-lg group ${
                  isActiveRoute('/services') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMegaMenuOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                  <Link
                    to="/agentic-ai"
                    className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium"
                    onClick={() => setIsMegaMenuOpen(false)}
                  >
                    Agentic AI
                  </Link>
                  <Link
                    to="/workflow-automation"
                    className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium"
                    onClick={() => setIsMegaMenuOpen(false)}
                  >
                    Workflow Automation
                  </Link>
                  <Link
                    to="/crm-automation"
                    className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium"
                    onClick={() => setIsMegaMenuOpen(false)}
                  >
                    CRM Automation
                  </Link>
                  <Link
                    to="/voice-ai"
                    className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium"
                    onClick={() => setIsMegaMenuOpen(false)}
                  >
                    Voice AI
                  </Link>
                </div>
              )}
            </div>

            {/* Main Navigation Items */}
            {navItems.filter(item => mainNavItems.includes(item.label)).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-4 py-3 font-semibold text-base transition-all duration-200 rounded-lg ${
                  isActiveRoute(item.href)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center px-4 py-3 font-semibold text-base text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                More
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                  {moreNavItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <div className="ml-4">
              <PrimaryCTA label="Book Free Demo" icon="calendar" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="p-2 text-slate-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg animate-in fade-in-0 slide-in-from-top-2 duration-200">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block py-3 px-4 text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-gray-100">
                  <PrimaryCTA label="Book Free Demo" icon="calendar" className="w-full" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;