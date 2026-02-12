// Google Analytics 4 event tracking utilities

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

type EventParams = {
  [key: string]: string | number | boolean | undefined;
};

// Track custom events
export function trackEvent(
  eventName: string,
  parameters?: EventParams
): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
}

// Track page views (for SPA navigation)
export function trackPageView(url: string, title?: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    });
  }
}

// Pre-defined event tracking functions

// Contact form submission
export function trackContactFormSubmission(service?: string): void {
  trackEvent('generate_lead', {
    event_category: 'Contact',
    event_label: service || 'General Enquiry',
    value: 1,
  });
}

// Calculator usage
export function trackCalculatorUsage(
  loanAmount: number,
  interestRate: number,
  loanTerm: number
): void {
  trackEvent('calculator_used', {
    event_category: 'Engagement',
    loan_amount: loanAmount,
    interest_rate: interestRate,
    loan_term: loanTerm,
  });
}

// CTA button clicks
export function trackCtaClick(ctaName: string, location: string): void {
  trackEvent('cta_click', {
    event_category: 'Engagement',
    cta_name: ctaName,
    location: location,
  });
}

// Phone number clicks
export function trackPhoneClick(): void {
  trackEvent('phone_click', {
    event_category: 'Contact',
    event_label: 'Phone Number Click',
  });
}

// Language switch
export function trackLanguageSwitch(
  fromLocale: string,
  toLocale: string
): void {
  trackEvent('language_switch', {
    event_category: 'Navigation',
    from_language: fromLocale,
    to_language: toLocale,
  });
}

// Service page view
export function trackServiceView(serviceName: string): void {
  trackEvent('view_item', {
    event_category: 'Service',
    item_name: serviceName,
  });
}

// Scroll depth tracking
export function trackScrollDepth(depth: number): void {
  trackEvent('scroll_depth', {
    event_category: 'Engagement',
    depth_percentage: depth,
  });
}

// Form field interaction
export function trackFormFieldInteraction(fieldName: string): void {
  trackEvent('form_field_focus', {
    event_category: 'Engagement',
    field_name: fieldName,
  });
}

// External link click
export function trackExternalLink(url: string): void {
  trackEvent('external_link_click', {
    event_category: 'Navigation',
    link_url: url,
  });
}
