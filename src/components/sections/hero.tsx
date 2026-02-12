'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Phone } from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden gradient-hero swoosh pb-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#f16421]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-[#f16421]/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-gray-100">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">500+ Happy Clients</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Get expert advice from{' '}
              <span className="text-[#f16421]">Auckland&apos;s</span> trusted mortgage advisers
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Book a Free Chat
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="tel:099544963" className="btn-secondary inline-flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                09 954 4963
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">$200M+</div>
                <div className="text-sm text-gray-500">Loans Settled</div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">20+</div>
                <div className="text-sm text-gray-500">Lender Partners</div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">Free</div>
                <div className="text-sm text-gray-500">Our Service</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Card */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#f16421]/10 to-[#ff7a3d]/10 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🏡</div>
                    <p className="text-xl font-semibold text-gray-700">Your Dream Home Awaits</p>
                  </div>
                </div>

                {/* Quick info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-[#f16421]">48hr</div>
                    <div className="text-xs text-gray-500">Fast Pre-Approval</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-[#f16421]">$0</div>
                    <div className="text-xs text-gray-500">Service Fee</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#f16421] text-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold">We compare 20+ lenders</div>
                  <div className="text-sm opacity-90">To find you the best deal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
