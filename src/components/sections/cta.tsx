'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

export function CtaSection() {
  const t = useTranslations('cta');

  return (
    <section className="relative py-24 gradient-orange overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {t('ready')}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#f16421] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              {t('button')}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:099544963"
              className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur text-white font-semibold px-8 py-4 rounded-full border-2 border-white/30 hover:bg-white/30 transition-all duration-200"
            >
              <Phone className="h-5 w-5" />
              09 954 4963
            </a>
          </div>

          <p className="text-white/70 text-sm pt-4">
            Free consultation - No obligation - Expert advice
          </p>
        </div>
      </div>
    </section>
  );
}
