'use client';

import { useTranslations } from 'next-intl';
import { DollarSign, Users, Zap, Building2 } from 'lucide-react';

const features = [
  {
    key: 'free',
    icon: DollarSign,
    color: 'bg-green-500',
  },
  {
    key: 'expert',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    key: 'fast',
    icon: Zap,
    color: 'bg-amber-500',
  },
  {
    key: 'choice',
    icon: Building2,
    color: 'bg-purple-500',
  },
] as const;

export function WhyUsSection() {
  const t = useTranslations('whyUs');

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.key} className="text-center">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(`${feature.key}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`${feature.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
