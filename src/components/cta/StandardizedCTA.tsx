// src/components/cta/StandardizedCTA.tsx - UPDATED WITH CENTRALIZED BOOKING
import React from "react";
import { Calendar, MessageCircle, Phone, ArrowRight, Bot, FileSearch, CheckCircle } from "lucide-react";
import { CTA_ACTIONS } from "@/lib/BookingLinks";

interface OptimizedCTAProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'lg';
  label?: string;
  icon?: 'calendar' | 'message' | 'phone' | 'arrow' | 'bot' | 'search';
  onClick?: () => void;
  className?: string;
  animate?: boolean;
  actionType?: 'demo' | 'audit' | 'consultation' | 'contact' | 'pricing' | 'custom';
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

// Get default action based on actionType
const getDefaultAction = (actionType: OptimizedCTAProps['actionType']) => {
  switch (actionType) {
    case 'demo':
      return CTA_ACTIONS.BOOK_DEMO;
    case 'audit':
      return CTA_ACTIONS.GET_WORKFLOW_AUDIT;
    case 'consultation':
      return CTA_ACTIONS.SCHEDULE_CONSULTATION;
    case 'contact':
      return CTA_ACTIONS.CONTACT_US;
    case 'pricing':
      return CTA_ACTIONS.VIEW_PRICING;
    default:
      return CTA_ACTIONS.BOOK_DEMO;
  }
};

// PRIMARY CTA - High-converting orange button
export const PrimaryCTA: React.FC<OptimizedCTAProps> = ({ 
  label = 'Book Free Demo',
  icon = 'calendar',
  onClick,
  className = "",
  animate = false,
  actionType = 'demo'
}) => {
  const IconComponent = iconMap[icon];
  const defaultAction = getDefaultAction(actionType);
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      defaultAction();
    }
  };
  
  return (
    <button 
      className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-lg font-semibold bg-orange-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/20 ${animate ? 'animate-pulse' : ''} ${className}`}
      onClick={handleClick}
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
  className = "",
  actionType = 'contact'
}) => {
  const IconComponent = iconMap[icon];
  const defaultAction = getDefaultAction(actionType);
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      defaultAction();
    }
  };
  
  return (
    <button 
      className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-lg font-semibold bg-white text-blue-600 border-2 border-blue-600 shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 ${className}`}
      onClick={handleClick}
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
  className = "",
  actionType = 'contact'
}) => {
  const IconComponent = iconMap[icon];
  const defaultAction = getDefaultAction(actionType);
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      defaultAction();
    }
  };
  
  return (
    <button 
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-blue-600 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/20 ${className}`}
      onClick={handleClick}
    >
      <IconComponent className="w-5 h-5" />
      {label}
    </button>
  );
};

// HERO SECTION CTA - Optimized for hero backgrounds
interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  background?: 'gradient' | 'white' | 'dark';
  primaryAction?: () => void;
  secondaryAction?: () => void;
  primaryActionType?: OptimizedCTAProps['actionType'];
  secondaryActionType?: OptimizedCTAProps['actionType'];
  trustIndicators?: string[];
}

export const OptimizedHeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryLabel = "Book Free Demo",
  secondaryLabel = "Learn More",
  background = "gradient",
  primaryAction,
  secondaryAction,
  primaryActionType = 'demo',
  secondaryActionType = 'contact',
  trustIndicators = []
}) => {
  const backgroundClasses = {
    gradient: "bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600",
    white: "bg-white",
    dark: "bg-slate-900"
  };

  const textClasses = {
    gradient: "text-white",
    white: "text-slate-900",
    dark: "text-white"
  };

  return (
    <section className={`py-20 ${backgroundClasses[background]}`}>
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${textClasses[background]}`}>
            {title}
          </h2>
          <p className={`text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${
            background === 'gradient' ? 'text-white/90' : 
            background === 'white' ? 'text-slate-600' : 'text-slate-300'
          }`}>
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <PrimaryCTA 
              label={primaryLabel}
              onClick={primaryAction}
              actionType={primaryActionType}
              className="text-lg px-10 py-5 shadow-2xl"
            />
            
            <SecondaryCTA
              label={secondaryLabel}
              onClick={secondaryAction}
              actionType={secondaryActionType}
              className={`text-lg px-10 py-5 ${
                background === 'gradient' ? 'bg-white/95 text-blue-600 border-white hover:bg-white' :
                background === 'dark' ? 'bg-white text-slate-900 border-white hover:bg-slate-100' :
                'bg-white text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            />
          </div>
          
          {/* Trust indicators */}
          {trustIndicators.length > 0 && (
            <div className={`flex flex-wrap justify-center gap-8 mt-12 ${
              background === 'gradient' ? 'text-white/80' : 'text-slate-600'
            }`}>
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{indicator}</span>
                </div>
              ))}
            </div>
          )}
          
          {/* Default trust indicators for gradient background */}
          {background === 'gradient' && trustIndicators.length === 0 && (
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">30-day guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">Setup in 2 weeks</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export const OptimizedCTASection: React.FC<HeroSectionProps> = (props) => {
  return <OptimizedHeroSection {...props} />;
};

// QUICK ACTION BUTTONS - For specific use cases
export const QuickActionCTA = {
  BookDemo: () => (
    <PrimaryCTA 
      label="Book Free Demo" 
      icon="calendar" 
      actionType="demo"
      className="shadow-lg"
    />
  ),
  
  GetAudit: () => (
    <PrimaryCTA 
      label="Get Free Audit" 
      icon="search" 
      actionType="audit"
      className="shadow-lg"
    />
  ),
  
  ScheduleCall: () => (
    <PrimaryCTA 
      label="Schedule Strategy Call" 
      icon="phone" 
      onClick={CTA_ACTIONS.BOOK_STRATEGY_CALL}
      className="shadow-lg"
    />
  ),
  
  ContactUs: () => (
    <SecondaryCTA 
      label="Contact Us" 
      icon="message" 
      actionType="contact"
    />
  ),
  
  ViewPricing: () => (
    <SecondaryCTA 
      label="View Pricing" 
      icon="arrow" 
      actionType="pricing"
    />
  )
};

export default { PrimaryCTA, SecondaryCTA, GhostCTA, OptimizedHeroSection, OptimizedCTASection, QuickActionCTA };