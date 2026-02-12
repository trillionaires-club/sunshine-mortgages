'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah & Mike Thompson',
    role: 'First Home Buyers, North Shore',
    content: "Grace made our first home buying journey so much easier. She explained everything clearly and found us a rate we didn't think was possible!",
    rating: 5,
    initials: 'ST',
  },
  {
    name: 'David Chen',
    role: 'Property Investor, Auckland CBD',
    content: 'Sunshine Mortgages helped me expand my investment portfolio with strategic financing. Their expertise in investment lending is unmatched.',
    rating: 5,
    initials: 'DC',
  },
  {
    name: 'Emma Wilson',
    role: 'Refinancing Client, West Auckland',
    content: "I saved $400 per month by refinancing through Sunshine. The process was quick and the team kept me informed every step of the way.",
    rating: 5,
    initials: 'EW',
  },
];

export function TestimonialsSection() {
  const t = useTranslations('testimonials');

  return (
    <section className="relative section-padding bg-gray-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f16421]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f16421]/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header with star rating summary */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-6 py-3 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#fbbf24] text-[#fbbf24]" />
              ))}
            </div>
            <span className="text-lg font-semibold">500+ five-star reviews</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm card-hover">
              <CardContent className="p-8 space-y-6">
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#f16421]/30" />
                  <p className="text-gray-200 text-lg leading-relaxed pl-6">
                    {testimonial.content}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-[#f16421] text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
