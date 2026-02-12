'use client';

import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useTranslations } from 'next-intl';

// Trail CRM Webwidget configuration
// Replace TRAIL_WIDGET_ID with actual widget ID from Trail CRM
const TRAIL_WIDGET_ID = 'YOUR_TRAIL_WIDGET_ID';

export function ContactForm() {
  const t = useTranslations('contact');

  useEffect(() => {
    // Load Trail CRM Webwidget script
    const script = document.createElement('script');
    script.src = `https://app.trailcrm.com/widget/${TRAIL_WIDGET_ID}.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src*="trailcrm"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">{t('title')}</CardTitle>
        <CardDescription>{t('subtitle')}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Trail CRM Webwidget Container */}
        <div id="trail-widget-container" className="min-h-[400px]">
          {/* Fallback form while Trail widget loads */}
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  {t('form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="021 123 4567"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                {t('form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium text-gray-700">
                What can we help you with?
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="">Select a service...</option>
                <option value="first-home">First Home Purchase</option>
                <option value="refinancing">Refinancing</option>
                <option value="construction">Construction Loan</option>
                <option value="investment">Investment Property</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                {t('form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                placeholder="Tell us about your situation..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {t('form.submit')}
            </button>

            <p className="text-sm text-gray-500 text-center">
              By submitting this form, you agree to be contacted by Sunshine Mortgages.
            </p>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
