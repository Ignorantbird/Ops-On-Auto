'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import dynamic from 'next/dynamic';
import { BOOKING_LINKS } from '@/lib/BookingLinks';

const Logo3D = dynamic(() => import('./Logo3D'), { ssr: false });

const OpsOnAuto3DLogo = ({
  size = 64,
  showText = true,
  className = "",
  isScrolled = true,
}: {
  size?: number;
  showText?: boolean;
  className?: string;
  isScrolled?: boolean;
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
            ...(isScrolled
              ? {
                  background: 'linear-gradient(135deg, #0f6674 0%, #17a2b8 50%, #20c997 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }
              : {
                  color: 'white',
                }),
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
  className = "",
  isScrolled = true,
}: {
  size?: number;
  showText?: boolean;
  className?: string;
  isScrolled?: boolean;
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
              background: `linear-gradient(145deg, #17a2b8 0%, #0e8fa3 100%)`
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
            ...(isScrolled
              ? {
                  background: 'linear-gradient(135deg, #0f6674 0%, #17a2b8 50%, #20c997 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }
              : {
                  color: 'white',
                }),
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

const SafeLogo = (props: { size?: number; showText?: boolean; className?: string; isScrolled?: boolean }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <FallbackLogo {...props} />;
  }

  try {
    return <OpsOnAuto3DLogo {...props} />;
  } catch {
    setHasError(true);
    return <FallbackLogo {...props} />;
  }
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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

  const isActiveRoute = (path: string) =>
    pathname === path || pathname.startsWith(path);

  // Text colours: white over hero, dark-navy when scrolled
  const navText = isScrolled ? 'text-dark-navy' : 'text-white';
  const navTextHover = isScrolled
    ? 'hover:text-brand-teal hover:bg-brand-teal-50'
    : 'hover:text-white/80 hover:bg-white/10';
  const navTextActive = isScrolled
    ? 'bg-brand-teal-50 text-brand-teal'
    : 'bg-white/15 text-white';

  const serviceCategories = [
    {
      category: '🤖 Agentic AI',
      services: [
        { title: 'Agentic AI', path: '/agentic-ai', description: 'AI that thinks, plans & acts independently', badge: '🔥 Popular' },
        { title: 'AI Sales Person', path: '/sales-ai', description: '24/7 AI sales team that never sleeps', badge: '💰 High ROI' },
        { title: 'Voice AI', path: '/voice-ai', description: 'AI phone calls & customer service' },
        { title: 'Data Analytics', path: '/data-analytics', description: 'AI-driven insights & predictions', badge: '📊 Premium' },
      ],
    },
    {
      category: '✨ Generative AI',
      services: [
        { title: 'Generative AI', path: '/generative-ai', description: 'Custom AI that creates content & designs', badge: '✨ New' },
        { title: 'AI Data Processing', path: '/data-analytics', description: 'Custom ML models & AI integrations' },
        { title: 'Programmatic SEO', path: '/programmatic-seo', description: 'AI-generated SEO content at scale' },
      ],
    },
    {
      category: '⚙️ Business Automation',
      services: [
        { title: 'Business Automation', path: '/business-automation', description: 'Smart workflows & process optimisation', badge: '🏆 Core' },
        { title: 'CRM Automation', path: '/crm-automation', description: 'Smart pipelines & lead scoring' },
        { title: 'Workflow Automation', path: '/workflow-automation', description: 'Process optimisation & task automation' },
        { title: 'Reporting Automation', path: '/reporting-automation', description: 'Automated dashboards & real-time insights' },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className={`container mx-auto px-4 transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <SafeLogo
              size={isScrolled ? 64 : 72}
              showText={true}
              isScrolled={isScrolled}
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-1">

            {/* Services mega-menu */}
            <div
              className="relative"
              ref={megaMenuRef}
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              <button
                className={`relative flex items-center px-4 py-3 font-semibold text-base transition-all duration-200 rounded-lg group ${
                  isActiveRoute('/services') || isActiveRoute('/agentic-ai') || isActiveRoute('/crm-automation') || isActiveRoute('/sales-ai') || isActiveRoute('/generative-ai')
                    ? navTextActive
                    : `${navText} ${navTextHover}`
                }`}
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMegaMenuOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 z-50"
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                  <div className="grid grid-cols-3 gap-6">
                    {serviceCategories.map((category, ci) => (
                      <div key={ci}>
                        <h3 className="font-heading font-bold text-dark-navy mb-4 text-xs uppercase tracking-wide">
                          {category.category}
                        </h3>
                        <div className="space-y-1">
                          {category.services.map((service, si) => (
                            <Link
                              key={si}
                              href={service.path}
                              className="block p-3 rounded-lg hover:bg-brand-teal-50 transition-colors duration-200 group"
                              onClick={() => setIsMegaMenuOpen(false)}
                            >
                              <div className="flex items-center justify-between mb-0.5">
                                <div className="font-heading font-semibold text-sm text-dark-navy group-hover:text-brand-teal">
                                  {service.title}
                                </div>
                                {service.badge && (
                                  <span className="text-xs bg-accent-orange-50 text-accent-orange px-2 py-0.5 rounded-full">
                                    {service.badge}
                                  </span>
                                )}
                              </div>
                              <div className="font-body text-xs text-dark-navy-300">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-100 mt-6 pt-4 flex items-center justify-between">
                    <div>
                      <p className="font-heading font-semibold text-sm text-dark-navy">Not sure which service you need?</p>
                      <p className="font-body text-xs text-dark-navy-300">Get a free consultation to find the perfect solution</p>
                    </div>
                    <Link
                      href="/workflow-audit"
                      className="text-white px-4 py-2 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#ff6b35' }}
                      onClick={() => setIsMegaMenuOpen(false)}
                    >
                      Free Audit
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {[
              { label: 'About', path: '/about' },
              { label: 'Case Studies', path: '/case-studies' },
              { label: 'Pricing', path: '/pricing' },
              { label: 'Industries', path: '/industries' },
            ].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-3 font-heading font-semibold text-base transition-all duration-200 rounded-lg ${
                  isActiveRoute(item.path) ? navTextActive : `${navText} ${navTextHover}`
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* More dropdown */}
            <div className="relative group">
              <button className={`flex items-center px-4 py-3 font-heading font-semibold text-base transition-all duration-200 rounded-lg ${navText} ${navTextHover}`}>
                More
                <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {[
                  { label: 'Use Cases', path: '/use-cases' },
                  { label: 'Integrations', path: '/integrations' },
                  { label: 'Resources', path: '/resources' },
                  { label: 'Partnerships', path: '/partnerships' },
                  { label: 'Contact', path: '/contact' },
                ].map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="block px-4 py-2.5 font-body text-sm text-dark-navy-300 hover:text-brand-teal hover:bg-brand-teal-50 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={BOOKING_LINKS.WHATSAPP_AUDIT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-xl font-heading font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: '#ff6b35' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.855L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.78 9.78 0 01-5.29-1.545l-.38-.225-3.937 1.028 1.052-3.828-.249-.394A9.78 9.78 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z" />
              </svg>
              Book Free Business Audit
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 ${navText} transition-colors duration-200`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="py-4 space-y-1">

              {/* Services */}
              <div className="px-6 pb-2">
                <p className="font-heading font-bold text-dark-navy text-sm uppercase tracking-wide mb-3">Services</p>
                {serviceCategories.map((category) =>
                  category.services.map((service, i) => (
                    <Link
                      key={i}
                      href={service.path}
                      className="block px-3 py-2 font-body text-sm text-dark-navy-300 hover:text-brand-teal hover:bg-brand-teal-50 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))
                )}
              </div>

              <div className="h-px bg-gray-100 mx-6" />

              {[
                { label: 'About', path: '/about' },
                { label: 'Case Studies', path: '/case-studies' },
                { label: 'Pricing', path: '/pricing' },
                { label: 'Industries', path: '/industries' },
                { label: 'Use Cases', path: '/use-cases' },
                { label: 'Integrations', path: '/integrations' },
                { label: 'Resources', path: '/resources' },
                { label: 'Partnerships', path: '/partnerships' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="block px-6 py-3 font-heading font-semibold text-dark-navy hover:text-brand-teal hover:bg-brand-teal-50 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="px-6 pt-3 pb-4 border-t border-gray-100">
                <a
                  href={BOOKING_LINKS.WHATSAPP_AUDIT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full text-white py-3 px-4 rounded-xl font-heading font-semibold transition-all"
                  style={{ backgroundColor: '#ff6b35' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.855L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.78 9.78 0 01-5.29-1.545l-.38-.225-3.937 1.028 1.052-3.828-.249-.394A9.78 9.78 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z" />
                  </svg>
                  Book Free Business Audit
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
