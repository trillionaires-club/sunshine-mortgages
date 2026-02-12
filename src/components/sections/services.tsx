'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, RefreshCw, Building, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
  {
    key: 'firstHome',
    icon: Home,
    href: '/services',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
  },
  {
    key: 'refinancing',
    icon: RefreshCw,
    href: '/services',
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
  },
  {
    key: 'construction',
    icon: Building,
    href: '/services',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
  },
  {
    key: 'investment',
    icon: TrendingUp,
    href: '/services',
    color: 'bg-[#f16421]',
    lightColor: 'bg-orange-50',
  },
] as const;

export function ServicesSection() {
  const t = useTranslations('services');

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-[#f16421] uppercase tracking-wider mb-3">
            What We Do
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.key}
                className="group bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden"
              >
                <CardHeader className="pb-2">
                  <div className={`w-16 h-16 rounded-2xl ${service.lightColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-10 h-10 rounded-xl ${service.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {t(`${service.key}.title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {t(`${service.key}.description`)}
                  </CardDescription>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-[#f16421] font-semibold hover:gap-3 gap-2 transition-all"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
