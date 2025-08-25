/*
 * Ops On Auto - Business Automation Platform
 * Copyright (c) 2025 Ops On Auto (https://opsonauto.com)
 * All rights reserved. Unauthorized copying prohibited.
 * 
 * Proprietary and confidential software.
 * Contact: hello@opsonauto.com for licensing inquiries.
 */

// Add this header to the top of these key files:
// - src/App.tsx
// - src/main.tsx  
// - src/components/Navigation.tsx
// - src/pages/Index.tsx
// - Any other critical component files

import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown, Search, Bot, Database, BarChart3, Settings, Phone, Brain, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../config/nav";
import { PrimaryCTA } from "./cta/StandardizedCTA";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Services mega menu data with UPDATED LINKS
  const serviceCategories = [
    {
      icon: Bot,
      title: "Agentic AI Solutions",
      description: "Advanced AI agents for complex tasks",
      link: "/agentic-ai",
      featured: true
    },
    {
      icon: Database,
      title: "CRM Automation",
      description: "Smart pipelines & lead management",
      link: "/crm-automation"
    },
    {
      icon: BarChart3,
      title: "Reporting & Analytics",
      description: "Automated dashboards & insights",
      link: "/reporting-automation"
    },
    {
      icon: Settings,
      title: "Workflow Optimization",
      description: "Streamline business operations",
      link: "/workflow-automation"
    },
    {
      icon: Phone,
      title: "Voice AI Calling",
      description: "Human-like sales & qualification calls",
      link: "/voice-ai"
    },
    {
      icon: Brain,
      title: "AI Data Processing & Insights",
      description: "Intelligent data workflows & analysis",
      link: "/ai-data-processing"
    }
  ];

  // Quick search data with UPDATED LINKS
  const searchableItems = [
    { title: "AI Automation Services", link: "/services", category: "Services" },
    { title: "Agentic AI Solutions", link: "/agentic-ai", category: "AI Solutions" },
    { title: "CRM Setup & Optimization", link: "/crm-automation", category: "Services" },
    { title: "Voice AI Calling Bot", link: "/voice-ai", category: "Services" },
    { title: "Workflow Automation", link: "/workflow-automation", category: "Services" },
    { title: "Reporting Automation", link: "/reporting-automation", category: "Services" },
    { title: "AI Data Processing & Insights", link: "/ai-data-processing", category: "AI Solutions" },
    { title: "Pricing Plans", link: "/pricing", category: "Pricing" },
    { title: "Case Studies", link: "/case-studies", category: "Resources" },
    { title: "Industries We Serve", link: "/industries", category: "Industries" },
    { title: "Contact Us", link: "/contact", category: "Contact" },
  ];

  const filteredSearchResults = searchableItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle scroll behavior for sticky navigation
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
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery("");
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

  // Filter navigation items - KEEP ONLY MAIN ITEMS IN NAVBAR
  const mainNavItems = ['Services', 'AI Solutions', 'Pricing', 'Industries'];
  
  // Everything else goes in "More" dropdown
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
          
          {/* UPDATED LOGO - BIGGER SIZE */}
          <Link to="/" className="flex items-center group">
            {/* Logo Image Container - INCREASED SIZE */}
            <div className={`flex items-center justify-center group-hover:scale-105 transition-all duration-300 ${
              isScrolled ? 'w-14 h-14' : 'w-16 h-16'
            }`}>
              {/* Your Logo Image - Replace src with your logo path */}
              <img 
                src="/src/assets/opsonauto-logo.png" 
                alt="OpsOnAuto Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to original design if image fails to load
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              
              {/* Fallback Logo (hidden by default, shows if image fails) */}
              <div className="hidden w-full h-full bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg items-center justify-center relative">
                {/* Gear Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-white rounded-full relative">
                    {/* Gear teeth */}
                    <div className="absolute -top-1 left-1/2 w-1 h-2 bg-white transform -translate-x-1/2"></div>
                    <div className="absolute -bottom-1 left-1/2 w-1 h-2 bg-white transform -translate-x-1/2"></div>
                    <div className="absolute -left-1 top-1/2 w-2 h-1 bg-white transform -translate-y-1/2"></div>
                    <div className="absolute -right-1 top-1/2 w-2 h-1 bg-white transform -translate-y-1/2"></div>
                  </div>
                  {/* Play button in center */}
                  <div className="absolute w-0 h-0 border-l-[6px] border-r-0 border-b-[4px] border-t-[4px] border-l-orange-500 border-t-transparent border-b-transparent ml-1"></div>
                </div>
                {/* Circuit lines */}
                <div className="absolute top-2 right-1 w-1 h-1 bg-orange-500 rounded-full"></div>
                <div className="absolute bottom-2 right-2 w-1 h-1 bg-orange-500 rounded-full"></div>
                <div className="absolute top-3 left-1 w-1 h-1 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - CLEAN & PROFESSIONAL */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Services Mega Menu - MORE VIBRANT */}
            <div className="relative" ref={megaMenuRef}>
              <button
                className={`relative flex items-center px-4 py-3 font-semibold text-base transition-all duration-200 rounded-lg group ${
                  isActiveRoute('/services') 
                    ? 'text-orange-600 bg-orange-50' 
                    : 'text-slate-900 hover:text-orange-600 hover:bg-orange-50'
                }`}
                onClick={() => {
                  setIsMegaMenuOpen(!isMegaMenuOpen);
                  setIsDropdownOpen(false);
                }}
                aria-expanded={isMegaMenuOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMegaMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-2xl border border-gray-100 shadow-2xl py-8 px-8 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                  <div className="grid grid-cols-2 gap-6">
                    {serviceCategories.map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <Link
                          key={index}
                          to={service.link}
                          className={`group p-4 rounded-xl transition-all duration-200 hover:bg-orange-50 border border-transparent hover:border-orange-200 ${
                            service.featured ? 'bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200' : ''
                          }`}
                          onClick={() => setIsMegaMenuOpen(false)}
                        >
                          <div className="flex items-start space-x-4">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all group-hover:scale-110 ${
                              service.featured ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-orange-500 group-hover:text-white'
                            }`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <h4 className={`font-semibold text-sm mb-1 ${
                                service.featured ? 'text-orange-900' : 'text-slate-900'
                              }`}>
                                {service.title}
                                {service.featured && (
                                  <Sparkles className="inline w-4 h-4 ml-1 text-orange-500" />
                                )}
                              </h4>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                    <Link 
                      to="/services" 
                      className="text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center"
                      onClick={() => setIsMegaMenuOpen(false)}
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* AI Solutions Link - MORE VIBRANT */}
            <Link
              to="/agentic-ai"
              className={`relative px-4 py-3 font-semibold text-base transition-all duration-200 rounded-lg group ${
                isActiveRoute('/agentic-ai') 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-slate-900 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              AI Solutions
            </Link>

            {/* Pricing - MORE VIBRANT */}
            <Link
              to="/pricing"
              className={`relative px-4 py-3 font-semibold text-base transition-all duration-200 rounded-lg group ${
                isActiveRoute('/pricing') 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-slate-900 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              Pricing
            </Link>

            {/* Industries - MORE VIBRANT */}
            <Link
              to="/industries"
              className={`relative px-4 py-3 font-semibold text-base transition-all duration-200 rounded-lg group ${
                isActiveRoute('/industries') 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-slate-900 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              Industries
            </Link>

            {/* More Dropdown - MORE VIBRANT */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center px-4 py-3 text-slate-900 hover:text-orange-600 font-semibold text-base transition-all duration-200 rounded-lg hover:bg-orange-50"
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                  setIsMegaMenuOpen(false);
                }}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                More
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl border border-gray-100 shadow-lg py-2 z-50 animate-in fade-in-0 zoom-in-95 duration-100">
                  {moreNavItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block px-4 py-3 text-slate-700 hover:text-orange-600 hover:bg-orange-50 text-sm font-medium transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA - FIXED SIZE TO BE PROFESSIONAL */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg flex items-center gap-2">
              <span>📅</span>
              Book Free Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - keeping existing structure */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg animate-in fade-in-0 slide-in-from-top-2 duration-200">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile navigation items */}
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
    </nav>
  );
};

export default Navigation;