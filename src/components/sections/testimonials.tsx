'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-300">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur">
              <CardContent className="p-6 space-y-4">
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-200 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-white/20">
                  <Avatar>
                    <AvatarFallback className="bg-amber-500 text-white">
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
