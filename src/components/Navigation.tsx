// Navigation.tsx - FINAL with Correct Mechanical Gear Logo (Like Image 2)
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { PrimaryCTA } from "@/components/cta/StandardizedCTA";

// Exact Industrial Logo Component - Matching Your Image
const OpsOnAutoIndustrialLogo = ({ 
  size = 64, 
  showText = true,
  className = "" 
}: { 
  size?: number; 
  showText?: boolean;
  className?: string; 
}) => {
  const gearSize = size;
  const textSize = size * 0.35;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Industrial Gear with PCB Traces */}
      <div 
        className="relative cursor-pointer transition-all duration-300 hover:scale-105"
        style={{ width: `${gearSize * 1.6}px`, height: `${gearSize}px` }}
      >
        {/* Main Industrial Gear Body */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${gearSize * 0.75}px`,
            height: `${gearSize * 0.75}px`,
            background: `
              radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6) 0%, transparent 40%),
              linear-gradient(145deg, #17a2b8 0%, #138496 30%, #0f6674 100%)
            `,
            borderRadius: '50%',
            boxShadow: `
              0 ${gearSize * 0.12}px ${gearSize * 0.24}px rgba(23, 162, 184, 0.3),
              0 ${gearSize * 0.04}px ${gearSize * 0.08}px rgba(0, 0, 0, 0.2),
              inset 0 ${gearSize * -0.04}px ${gearSize * 0.08}px rgba(0, 0, 0, 0.4),
              inset 0 ${gearSize * 0.04}px ${gearSize * 0.08}px rgba(255, 255, 255, 0.4)
            `,
            animation: 'industrialRotate 30s linear infinite'
          }}
        />

        {/* Chunky Industrial Gear Teeth - 8 thick teeth */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: `${gearSize * 0.16}px`,
              height: `${gearSize * 0.28}px`,
              background: `
                radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.5) 0%, transparent 50%),
                linear-gradient(145deg, #17a2b8 0%, #138496 40%, #0f6674 100%)
              `,
              borderRadius: `${gearSize * 0.02}px`,
              transformOrigin: 'center bottom',
              transform: `rotate(${i * 45}deg) translateY(-${gearSize * 0.375}px)`,
              left: '50%',
              top: '50%',
              marginLeft: `${-gearSize * 0.08}px`,
              marginTop: `${-gearSize * 0.14}px`,
              boxShadow: `
                0 ${gearSize * 0.03}px ${gearSize * 0.06}px rgba(0, 0, 0, 0.4),
                inset 0 ${gearSize * -0.01}px ${gearSize * 0.02}px rgba(0, 0, 0, 0.3),
                inset 0 ${gearSize * 0.01}px ${gearSize * 0.02}px rgba(255, 255, 255, 0.3)
              `
            }}
          />
        ))}

        {/* Inner Ring */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: `${gearSize * 0.45}px`,
            height: `${gearSize * 0.45}px`,
            background: `
              radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
              linear-gradient(145deg, #4169E1 0%, #2b5ce6 30%, #1e40af 100%)
            `,
            boxShadow: `
              0 ${gearSize * 0.06}px ${gearSize * 0.12}px rgba(65, 105, 225, 0.4),
              inset 0 ${gearSize * -0.03}px ${gearSize * 0.06}px rgba(0, 0, 0, 0.5),
              inset 0 ${gearSize * 0.03}px ${gearSize * 0.06}px rgba(255, 255, 255, 0.4)
            `
          }}
        >
          {/* 3D Orange Triangle Play Button */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-y-1/2"
            style={{
              marginLeft: `${gearSize * 0.015}px`,
              width: 0,
              height: 0,
              borderLeft: `${gearSize * 0.1}px solid #ff6b35`,
              borderTop: `${gearSize * 0.06}px solid transparent`,
              borderBottom: `${gearSize * 0.06}px solid transparent`,
              filter: `
                drop-shadow(0 ${gearSize * 0.02}px ${gearSize * 0.04}px rgba(255, 107, 53, 0.6))
                drop-shadow(0 ${gearSize * 0.01}px ${gearSize * 0.02}px rgba(0, 0, 0, 0.5))
                drop-shadow(0 0 ${gearSize * 0.03}px rgba(255, 107, 53, 0.4))
              `,
              animation: 'playButtonPulse 4s ease-in-out infinite'
            }}
          />
        </div>

        {/* PCB Circuit Traces with 3D Orange Spheres */}
        {[
          { x: gearSize * 0.9, y: gearSize * 0.2, lineLength: gearSize * 0.35 },
          { x: gearSize * 0.95, y: gearSize * 0.5, lineLength: gearSize * 0.3 },
          { x: gearSize * 0.9, y: gearSize * 0.8, lineLength: gearSize * 0.25 },
          { x: gearSize * 0.1, y: gearSize * 0.15, lineLength: gearSize * 0.2 },
          { x: gearSize * 0.05, y: gearSize * 0.85, lineLength: gearSize * 0.22 }
        ].map((trace, i) => (
          <div key={`trace-${i}`}>
            {/* Circuit Line */}
            <div
              className="absolute"
              style={{
                width: `${trace.lineLength}px`,
                height: `${gearSize * 0.02}px`,
                left: `${trace.x}px`,
                top: `${trace.y}px`,
                background: `linear-gradient(90deg, #ff6b35 0%, #ff8c00 100%)`,
                borderRadius: `${gearSize * 0.01}px`,
                boxShadow: `0 0 ${gearSize * 0.025}px rgba(255, 107, 53, 0.6)`,
                animation: `traceGlow 3s ease-in-out infinite ${i * 0.4}s`
              }}
            />
            
            {/* 3D Orange Connection Sphere */}
            <div
              className="absolute rounded-full"
              style={{
                width: `${gearSize * 0.06}px`,
                height: `${gearSize * 0.06}px`,
                left: `${trace.x + trace.lineLength - gearSize * 0.03}px`,
                top: `${trace.y - gearSize * 0.02}px`,
                background: `
                  radial-gradient(circle at 25% 25%, #ffaa44 0%, #ff6b35 40%, #e55a2b 100%)
                `,
                boxShadow: `
                  0 ${gearSize * 0.025}px ${gearSize * 0.05}px rgba(255, 107, 53, 0.6),
                  0 0 ${gearSize * 0.04}px rgba(255, 107, 53, 0.4),
                  inset 0 ${gearSize * 0.01}px ${gearSize * 0.02}px rgba(255, 255, 255, 0.6),
                  inset 0 ${gearSize * -0.01}px ${gearSize * 0.02}px rgba(0, 0, 0, 0.3)
                `,
                animation: `spherePulse 2.5s ease-in-out infinite ${i * 0.3}s`
              }}
            />
          </div>
        ))}
      </div>

      {/* OpsOnAuto Text */}
      {showText && (
        <div 
          className="font-bold text-teal-600 hidden sm:block"
          style={{ 
            fontSize: `${textSize}px`,
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            textShadow: `0 ${textSize * 0.05}px ${textSize * 0.1}px rgba(0, 0, 0, 0.2)`,
            color: '#0f6674'
          }}
        >
          OpsOnAuto
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes industrialRotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes playButtonPulse {
          0%, 100% { 
            transform: translateY(-50%) scale(1);
          }
          50% { 
            transform: translateY(-50%) scale(1.08);
          }
        }

        @keyframes traceGlow {
          0%, 100% { 
            opacity: 0.8;
            box-shadow: 0 0 ${gearSize * 0.025}px rgba(255, 107, 53, 0.6);
          }
          50% { 
            opacity: 1;
            box-shadow: 0 0 ${gearSize * 0.05}px rgba(255, 107, 53, 1);
          }
        }

        @keyframes spherePulse {
          0%, 100% { 
            transform: scale(1);
          }
          50% { 
            transform: scale(1.15);
          }
        }
      `}</style>
    </div>
  );
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActiveRoute = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const mainNavItems = ['Services', 'AI Solutions', 'Pricing', 'Industries'];
  
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
          
          {/* INDUSTRIAL LOGO WITH TEXT - FINAL VERSION */}
          <Link to="/" className="flex items-center group">
            <OpsOnAutoIndustrialLogo 
              size={isScrolled ? 48 : 56} 
              showText={true}
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
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
            </div>

            {navItems.slice(0, 4).map((item) => (
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

            <div className="ml-4">
              <PrimaryCTA label="Book Free Demo" icon="calendar" />
            </div>
          </div>

          {/* Mobile Menu Button */}
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