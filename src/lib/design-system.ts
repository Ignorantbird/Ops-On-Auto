// src/lib/design-system.ts
// OpsOnAuto Design System - Standardized Constants & Patterns

export const DESIGN_TOKENS = {
    // Typography Scale - Consistent heading sizes
    typography: {
      hero: {
        h1: "text-5xl md:text-7xl font-bold leading-tight text-white",
        h2: "text-4xl md:text-6xl font-bold leading-tight text-white",
        subtitle: "text-xl md:text-2xl text-white/90 leading-relaxed"
      },
      section: {
        h2: "text-4xl md:text-5xl font-bold mb-6 text-slate-900",
        h3: "text-3xl md:text-4xl font-bold mb-4 text-slate-900",
        subtitle: "text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
      },
      card: {
        title: "text-xl font-semibold mb-3 text-slate-900",
        subtitle: "text-lg font-medium mb-2 text-slate-700",
        description: "text-sm text-slate-600 leading-relaxed"
      }
    },
  
    // Icon System - Consistent sizes and animations
    icons: {
      sizes: {
        xs: "w-4 h-4",
        sm: "w-5 h-5", 
        md: "w-6 h-6",
        lg: "w-8 h-8",
        xl: "w-12 h-12",
        hero: "w-16 h-16"
      },
      animations: {
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        ping: "animate-ping",
        spin: "animate-spin"
      },
      colors: {
        primary: "text-blue-600",
        accent: "text-orange-500", 
        muted: "text-slate-600",
        success: "text-green-600",
        warning: "text-amber-500"
      }
    },
  
    // Spacing System - Consistent padding/margins
    spacing: {
      section: "py-20",
      sectionSm: "py-16", 
      sectionLg: "py-24",
      container: "container mx-auto px-6",
      card: "p-6 md:p-8",
      cardLg: "p-8 md:p-12"
    },
  
    // CTA Button Standards
    buttons: {
      primary: {
        base: "bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all duration-300",
        hero: "bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300",
        cta: "bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
      },
      secondary: {
        base: "border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition-all duration-300",
        ghost: "text-blue-600 hover:bg-blue-50 border border-blue-200 hover:border-blue-300 transition-all duration-300"
      },
      sizes: {
        default: "h-12 px-6 py-3 text-sm font-semibold rounded-lg",
        lg: "h-14 px-8 py-4 text-base font-semibold rounded-lg", 
        xl: "h-16 px-10 py-5 text-lg font-semibold rounded-lg"
      }
    },
  
    // Background Patterns
    backgrounds: {
      hero: "bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600",
      section: "bg-gradient-to-b from-white to-slate-50", 
      card: "bg-white",
      primary: "bg-gradient-to-r from-orange-500 to-orange-600",
      white: "bg-white",
      muted: "bg-slate-50"
    },
  
    // Shadow System
    shadows: {
      soft: "shadow-sm",
      card: "shadow-md", 
      cta: "shadow-lg",
      hover: "hover:shadow-lg",
      ctaHover: "hover:shadow-xl"
    },
  
    // Animation Delays for Staggered Effects
    delays: {
      none: "",
      short: "delay-200",
      medium: "delay-500", 
      long: "delay-700",
      xl: "delay-1000"
    }
  };
  
  // Utility Functions for Consistent Styling
  export const createIconClass = (size: keyof typeof DESIGN_TOKENS.icons.sizes, color?: keyof typeof DESIGN_TOKENS.icons.colors, animation?: keyof typeof DESIGN_TOKENS.icons.animations) => {
    const sizeClass = DESIGN_TOKENS.icons.sizes[size];
    const colorClass = color ? DESIGN_TOKENS.icons.colors[color] : "";
    const animationClass = animation ? DESIGN_TOKENS.icons.animations[animation] : "";
    
    return `${sizeClass} ${colorClass} ${animationClass}`.trim();
  };
  
  export const createButtonClass = (variant: 'primary' | 'secondary' | 'hero' | 'cta' | 'ghost', size: keyof typeof DESIGN_TOKENS.buttons.sizes = 'default') => {
    const baseClass = "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/20 disabled:pointer-events-none disabled:opacity-50";
    
    let variantClass = "";
    switch(variant) {
      case 'primary':
        variantClass = DESIGN_TOKENS.buttons.primary.base;
        break;
      case 'hero': 
        variantClass = DESIGN_TOKENS.buttons.primary.hero;
        break;
      case 'cta':
        variantClass = DESIGN_TOKENS.buttons.primary.cta;
        break;
      case 'secondary':
        variantClass = DESIGN_TOKENS.buttons.secondary.base;
        break;
      case 'ghost':
        variantClass = DESIGN_TOKENS.buttons.secondary.ghost;
        break;
    }
    
    const sizeClass = DESIGN_TOKENS.buttons.sizes[size];
    
    return `${baseClass} ${variantClass} ${sizeClass}`;
  };
  
  export const createSectionClass = (background: keyof typeof DESIGN_TOKENS.backgrounds = 'white', spacing: keyof typeof DESIGN_TOKENS.spacing = 'section') => {
    return `${DESIGN_TOKENS.spacing[spacing]} ${DESIGN_TOKENS.backgrounds[background]}`;
  };