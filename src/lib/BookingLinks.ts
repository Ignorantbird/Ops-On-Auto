// src/lib/BookingLinks.ts - COMPLETE UNIFIED CTA SYSTEM
export const BOOKING_LINKS = {
  // Primary Booking Link (Microsoft Outlook)
  MAIN_BOOKING: 'https://outlook.office.com/bookwithme/user/dbacc901ee0f46f6b263cb42d71d72fd@OpsOnAuto.onmicrosoft.com?anonymous&ismsaljsauthenabled&ep=plink',
  
  // Internal Pages
  WORKFLOW_AUDIT: '/workflow-audit',
  CRM_AUDIT: '/crm-audit',
  CONTACT: '/contact',
  PRICING: '/pricing',
  SERVICES: '/services',
  
  // WhatsApp Integration
  WHATSAPP: 'https://wa.me/918777671056',
  WHATSAPP_AUDIT: 'https://wa.me/918777671056?text=Hi%20OpsOnAuto%2C%20I%27d%20like%20a%20free%20business%20audit%20for%20my%20company.',
  
  // Phone Number
  PHONE: 'tel:+918777671056'
} as const;

// Analytics Tracking Function
function trackEvent(eventName: string, category: string, label?: string) {
  // Google Analytics 4 tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: category,
      event_label: label,
      custom_parameter_1: 'cta_interaction',
      page_context: window.location.pathname
    });
  }
  
  // Console logging for development
  console.log(`🎯 Event Tracked: ${eventName} | Category: ${category} | Label: ${label}`);
}

// UNIFIED CTA ACTIONS - Supporting both old and new naming
export const CTA_ACTIONS = {
  // PRIMARY CTAs - Funnel-based strategy
  
  // Homepage & main pages - Top funnel (Low friction)
  GET_WORKFLOW_AUDIT: () => {
    window.location.href = BOOKING_LINKS.WORKFLOW_AUDIT;
    trackEvent('workflow_audit_request', 'conversion', 'top_funnel');
  },

  // Service pages - Middle funnel (Qualified leads)
  BOOK_STRATEGY_SESSION: () => {
    window.open(BOOKING_LINKS.MAIN_BOOKING, '_blank');
    trackEvent('strategy_session_booked', 'conversion', 'middle_funnel');
  },

  // Pricing page - Bottom funnel (Hot leads)
  TALK_TO_EXPERT: () => {
    window.open(BOOKING_LINKS.WHATSAPP, '_blank');
    trackEvent('expert_contact_request', 'conversion', 'bottom_funnel');
  },

  // LEGACY SUPPORT - Backward compatibility for existing components
  BOOK_DEMO: () => {
    window.open(BOOKING_LINKS.MAIN_BOOKING, '_blank');
    trackEvent('book_demo', 'conversion', 'legacy');
  },

  BOOK_AI_DEMO: () => {
    window.open(BOOKING_LINKS.MAIN_BOOKING, '_blank');
    trackEvent('book_ai_demo', 'conversion', 'legacy');
  },

  BOOK_SALES_DEMO: () => {
    window.open(BOOKING_LINKS.MAIN_BOOKING, '_blank');
    trackEvent('book_sales_demo', 'conversion', 'legacy');
  },

  SCHEDULE_CONSULTATION: () => {
    window.open(BOOKING_LINKS.MAIN_BOOKING, '_blank');
    trackEvent('schedule_consultation', 'conversion', 'legacy');
  },

  // ALIAS - Map old function names to new strategy
  BOOK_STRATEGY_CALL: () => {
    window.open(BOOKING_LINKS.MAIN_BOOKING, '_blank');
    trackEvent('strategy_session_booked', 'conversion', 'middle_funnel');
  },

  // Secondary CTAs
  CONTACT_US: () => {
    window.location.href = BOOKING_LINKS.CONTACT;
    trackEvent('contact_us', 'navigation');
  },

  VIEW_PRICING: () => {
    window.location.href = BOOKING_LINKS.PRICING;
    trackEvent('view_pricing', 'navigation');
  },

  VIEW_SERVICES: () => {
    window.location.href = BOOKING_LINKS.SERVICES;
    trackEvent('view_services', 'navigation');
  },

  WHATSAPP_CHAT: () => {
    window.open(BOOKING_LINKS.WHATSAPP, '_blank');
    trackEvent('whatsapp_chat', 'communication');
  },

  PHONE_CALL: () => {
    window.location.href = BOOKING_LINKS.PHONE;
    trackEvent('phone_call', 'communication');
  },

  EMAIL_CONTACT: () => {
    window.location.href = 'mailto:info@opsonauto.com?subject=Business Automation Inquiry';
    trackEvent('email_contact', 'communication');
  },

  // Audit specific actions
  GET_CRM_AUDIT: () => {
    window.location.href = BOOKING_LINKS.CRM_AUDIT;
    trackEvent('crm_audit_request', 'conversion', 'top_funnel');
  },

  GET_CONTENT_AUDIT: () => {
    window.location.href = BOOKING_LINKS.WORKFLOW_AUDIT;
    trackEvent('content_audit_request', 'conversion', 'top_funnel');
  },

  GET_SALES_AUDIT: () => {
    window.location.href = BOOKING_LINKS.WORKFLOW_AUDIT;
    trackEvent('sales_audit_request', 'conversion', 'top_funnel');
  }
} as const;

// PAGE-SPECIFIC CTA RECOMMENDATIONS
export const PAGE_CTA_MAPPING = {
  // Homepage and main content pages
  HOMEPAGE: {
    primary: 'GET_WORKFLOW_AUDIT',
    secondary: 'VIEW_PRICING'
  },
  
  // All service pages
  SERVICE_PAGES: {
    primary: 'BOOK_STRATEGY_SESSION', 
    secondary: 'GET_WORKFLOW_AUDIT'
  },
  
  // Pricing page
  PRICING: {
    primary: 'TALK_TO_EXPERT',
    secondary: 'BOOK_STRATEGY_SESSION'
  }
};

// Global type declarations for analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export default CTA_ACTIONS;