import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { WhyUsSection } from '@/components/sections/why-us';
import { CalculatorPreview } from '@/components/sections/calculator-preview';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { CtaSection } from '@/components/sections/cta';
import { LendersSection } from '@/components/sections/lenders';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <LendersSection />
      <ServicesSection />
      <WhyUsSection />
      <CalculatorPreview />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
