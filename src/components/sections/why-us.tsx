'use client';

import { useTranslations } from 'next-intl';
import { DollarSign, Users, Zap, Building2, Heart, Shield } from 'lucide-react';

const features = [
  {
    key: 'free',
    icon: DollarSign,
    color: 'from-green-400 to-green-600',
    lightColor: 'bg-green-50',
  },
  {
    key: 'expert',
    icon: Users,
    color: 'from-blue-400 to-blue-600',
    lightColor: 'bg-blue-50',
  },
  {
    key: 'fast',
    icon: Zap,
    color: 'from-[#f16421] to-[#d45519]',
    lightColor: 'bg-orange-50',
  },
  {
    key: 'choice',
    icon: Building2,
    color: 'from-purple-400 to-purple-600',
    lightColor: 'bg-purple-50',
  },
] as const;

export function WhyUsSection() {
  const t = useTranslations('whyUs');

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#f16421]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-[#f16421] uppercase tracking-wider mb-3">
            Why Choose Us
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We make getting a mortgage simple, fast, and stress-free
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.key}
                className="group text-center p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#f16421]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-20 h-20 ${feature.lightColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`${feature.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`${feature.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-500">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#f16421]" />
            <span className="text-sm font-medium">Licensed & Regulated</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#f16421]" />
            <span className="text-sm font-medium">KidsCan Partner</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#f16421]" />
            <span className="text-sm font-medium">500+ Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
