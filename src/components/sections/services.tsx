'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, RefreshCw, Building, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
  {
    key: 'firstHome',
    icon: Home,
    href: '/services/first-home',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    key: 'refinancing',
    icon: RefreshCw,
    href: '/services/refinancing',
    color: 'bg-green-100 text-green-600',
  },
  {
    key: 'construction',
    icon: Building,
    href: '/services/construction',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    key: 'investment',
    icon: TrendingUp,
    href: '/services/investment',
    color: 'bg-amber-100 text-amber-600',
  },
] as const;

export function ServicesSection() {
  const t = useTranslations('services');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-amber-200"
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl">
                    {t(`${service.key}.title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {t(`${service.key}.description`)}
                  </CardDescription>
                  <Button asChild variant="ghost" className="group/btn p-0 h-auto text-amber-600 hover:text-amber-700">
                    <Link href={service.href}>
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
