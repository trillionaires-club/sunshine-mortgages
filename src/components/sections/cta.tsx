'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export function CtaSection() {
  const t = useTranslations('cta');

  return (
    <section className="py-20 bg-amber-500">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t('ready')}
          </h2>
          <p className="text-lg text-amber-100">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-100">
              <Link href="/contact">
                {t('button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:099544963">
                <Phone className="mr-2 h-5 w-5" />
                09 954 4963
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
