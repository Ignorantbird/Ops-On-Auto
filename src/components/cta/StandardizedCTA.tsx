// src/components/cta/ConversionOptimizedCTA.tsx
// Designer-optimized CTAs for maximum visibility and conversion

import React from "react";
import { Calendar, MessageCircle, Phone, ArrowRight, Bot, FileSearch, CheckCircle } from "lucide-react";

interface OptimizedCTAProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'lg';
  label?: string;
  icon?: 'calendar' | 'message' | 'phone' | 'arrow' | 'bot' | 'search';
  onClick?: () => void;
  className?: string;
  animate?: boolean;
}

// Icon mapping
const iconMap = {
  calendar: Calendar,
  message: MessageCircle, 
  phone: Phone,
  arrow: ArrowRight,
  bot: Bot,
  search: FileSearch
};

// PRIMARY CTA - High-converting orange button
export const PrimaryCTA: React.FC<OptimizedCTAProps> = ({ 
  label = 'Book Free Demo',
  icon = 'calendar',
  onClick,
  className = "",
  animate = false
}) => {
  const IconComponent = iconMap[icon];
  
  return (
    <button 
      className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-lg font-semibold bg-orange-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/20 ${animate ? 'animate-pulse' : ''} ${className}`}
      onClick={onClick}
    >
      <IconComponent className="w-5 h-5" />
      {label}
    </button>
  );
};

// SECONDARY CTA - Clean white with blue border
export const SecondaryCTA: React.FC<OptimizedCTAProps> = ({ 
  label = 'Learn More',
  icon = 'arrow',
  onClick,
  className = ""
}) => {
  const IconComponent = iconMap[icon];
  
  return (
    <button 
      className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-lg font-semibold bg-white text-blue-600 border-2 border-blue-600 shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 ${className}`}
      onClick={onClick}
    >
      <IconComponent className="w-5 h-5" />
      {label}
    </button>
  );
};

// GHOST CTA - Subtle option
export const GhostCTA: React.FC<OptimizedCTAProps> = ({ 
  label = 'Contact Us',
  icon = 'message',
  onClick,
  className = ""
}) => {
  const IconComponent = iconMap[icon];
  
  return (
    <button 
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-blue-600 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/20 ${className}`}
      onClick={onClick}
    >
      <IconComponent className="w-5 h-5" />
      {label}
    </button>
  );
};

// HERO SECTION - Optimized for blue gradient background
interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  trustIndicators?: string[];
  primaryAction?: () => void;
  secondaryAction?: () => void;
  className?: string;
}

export const OptimizedHeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryLabel = "Book Free Audit",
  secondaryLabel = "Contact Us", 
  trustIndicators = [
    "No long-term contracts",
    "30-day money-back guarantee", 
    "Setup in 2 weeks or less"
  ],
  primaryAction,
  secondaryAction,
  className = ""
}) => {
  return (
    <section className={`bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center ${className}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-float delay-1000 blur-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-float delay-500 blur-md"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* High-converting CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <PrimaryCTA 
              label={primaryLabel}
              icon="calendar"
              onClick={primaryAction}
              animate={true}
            />
            <SecondaryCTA 
              label={secondaryLabel}
              icon="message"
              onClick={secondaryAction}
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue-600"
            />
          </div>

          {/* Trust indicators with checkmarks */}
          <div className="flex flex-wrap justify-center gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90 text-sm">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>{indicator}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA SECTION - For use throughout the site
interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryAction?: () => void;
  secondaryAction?: () => void;
  background?: 'white' | 'gradient';
  className?: string;
}

export const OptimizedCTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  primaryLabel = "Get Started",
  secondaryLabel = "Learn More", 
  primaryAction,
  secondaryAction,
  background = 'white',
  className = ""
}) => {
  const sectionClass = background === 'gradient' 
    ? 'bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 text-white' 
    : 'bg-white text-slate-900';

  return (
    <section className={`py-20 ${sectionClass} ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={background === 'gradient' ? 'text-5xl font-bold mb-6 text-white' : 'text-4xl md:text-5xl font-bold mb-6 text-slate-900'}>
            {title}
          </h2>
          
          <p className={`text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${
            background === 'gradient' ? 'text-white/90' : 'text-slate-600'
          }`}>
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryCTA 
              label={primaryLabel}
              onClick={primaryAction}
            />
            <SecondaryCTA 
              label={secondaryLabel}
              onClick={secondaryAction}
              className={background === 'gradient' ? 'bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue-600' : ''}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// FLOATING ICONS - For visual interest
interface FloatingIconsProps {
  icons?: Array<'bot' | 'message' | 'calendar' | 'phone'>;
  className?: string;
}

export const FloatingIcons: React.FC<FloatingIconsProps> = ({
  icons = ['bot', 'message', 'calendar'],
  className = ""
}) => {
  return (
    <div className={`flex justify-center mb-8 space-x-8 ${className}`}>
      {icons.map((iconType, index) => {
        const IconComponent = iconMap[iconType];
        const animations = ['animate-float', 'animate-float delay-500', 'animate-float delay-1000'];
        
        return (
          <div key={iconType} className="relative">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <IconComponent className={`w-12 h-12 text-white ${animations[index]}`} />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full animate-pulse"></div>
          </div>
        );
      })}
    </div>
  );
};

// Export all components for easy import
export {
  PrimaryCTA as OptimizedPrimaryCTA,
  SecondaryCTA as OptimizedSecondaryCTA,
  GhostCTA as OptimizedGhostCTA
};