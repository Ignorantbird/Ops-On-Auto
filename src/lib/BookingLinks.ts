// src/lib/BookingLinks.ts - CENTRALIZED BOOKING LINK SYSTEM
// This utility centralizes all booking and CTA actions across the application

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
    WHATSAPP: 'https://wa.me/918777671056', // Replace with actual WhatsApp number
    
    // Phone Number
    PHONE: 'tel:+918777671056' // Replace with actual phone number
  } as const;
  
  export const CTA_ACTIONS = {
    // Demo and Consultation Bookings
    BOOK_DEMO: () => {
      window.open(BOOKING_LINKS.MAIN_BOOKING, '_blank');
      trackEvent('book_demo', 'cta_click');
    },
    
    BOOK_AI_DEMO: () => {
      window.open(BOOKING_LINKS.MAIN_BOOKING, '_blank');
      trackEvent('book_ai_demo', 'cta_click');
    },
    
    BOOK_SALES_DEMO: () => {
      window.open(BOOKING_LINKS.MAIN_BOOKING, '_blank');
      trackEvent('book_sales_demo', 'cta_click');
    },
    
    SCHEDULE_CONSULTATION: () => {
      window.open(BOOKING_LINKS.MAIN_BOOKING, '_blank');
      trackEvent('schedule_consultation', 'cta_click');
    },
    
    BOOK_STRATEGY_CALL: () => {
      window.open(BOOKING_LINKS.MAIN_BOOKING, '_blank');
      trackEvent('book_strategy_call', 'cta_click');
    },
    
    // Audit Actions
    GET_WORKFLOW_AUDIT: () => {
      window.open(BOOKING_LINKS.WORKFLOW_AUDIT, '_blank');
      trackEvent('workflow_audit_request', 'cta_click');
    },
    
    GET_CRM_AUDIT: () => {
      window.open(BOOKING_LINKS.CRM_AUDIT, '_blank');
      trackEvent('crm_audit_request', 'cta_click');
    },
    
    GET_CONTENT_AUDIT: () => {
      window.open(BOOKING_LINKS.WORKFLOW_AUDIT, '_blank');
      trackEvent('content_audit_request', 'cta_click');
    },
    
    GET_SALES_AUDIT: () => {
      window.open(BOOKING_LINKS.WORKFLOW_AUDIT, '_blank');
      trackEvent('sales_audit_request', 'cta_click');
    },
    
    // Navigation Actions
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
    
    // Communication Actions
    WHATSAPP_CHAT: () => {
      window.open(BOOKING_LINKS.WHATSAPP, '_blank');
      trackEvent('whatsapp_chat', 'communication');
    },
    
    PHONE_CALL: () => {
      window.location.href = BOOKING_LINKS.PHONE;
      trackEvent('phone_call', 'communication');
    },
    
    // Email Action
    EMAIL_CONTACT: () => {
      window.location.href = 'mailto:info@opsonauto.com?subject=Business Automation Inquiry';
      trackEvent('email_contact', 'communication');
    }
  } as const;
  
  // Analytics Tracking Function
  function trackEvent(eventName: string, category: string, label?: string) {
    // Google Analytics 4 tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: category,
        event_label: label,
        custom_parameter_1: 'cta_interaction'
      });
    }
    
    // Facebook Pixel tracking
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_category: category,
        content_name: eventName
      });
    }
    
    // Console logging for development
    console.log(`📊 Event Tracked: ${eventName} | Category: ${category} | Label: ${label}`);
  }
  
  // Global type declarations for analytics
  declare global {
    interface Window {
      gtag?: (...args: any[]) => void;
      fbq?: (...args: any[]) => void;
    }
  }
  
  export default CTA_ACTIONS;