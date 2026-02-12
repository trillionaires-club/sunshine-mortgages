import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CtaSection } from '@/components/sections/cta';
import { Home, RefreshCw, Building, TrendingUp, ArrowRight, Check } from 'lucide-react';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });

  return {
    title: `${t('title')} | Sunshine Mortgages`,
    description: t('subtitle'),
  };
}

const services = [
  {
    id: 'first-home',
    icon: Home,
    color: 'bg-blue-500',
    features: [
      'First Home Grant eligibility check',
      'KiwiSaver withdrawal guidance',
      'Pre-approval assistance',
      'Deposit strategy planning',
      'Lowest rate comparison',
    ],
    highlight: 'Perfect for first-time buyers',
  },
  {
    id: 'refinancing',
    icon: RefreshCw,
    color: 'bg-green-500',
    features: [
      'Rate review and comparison',
      'Equity release options',
      'Debt consolidation',
      'Structure optimization',
      'Break fee analysis',
    ],
    highlight: 'Save money on your existing loan',
  },
  {
    id: 'construction',
    icon: Building,
    color: 'bg-purple-500',
    features: [
      'Progress payment management',
      'Builder verification',
      'Cost overrun protection',
      'Up to 1.5% cash contribution',
      'Interest-only during build',
    ],
    highlight: 'Building your dream home',
  },
  {
    id: 'investment',
    icon: TrendingUp,
    color: 'bg-amber-500',
    features: [
      'Portfolio structuring',
      'Interest-only options',
      'Tax optimization strategies',
      'Multi-property financing',
      'Rental income assessment',
    ],
    highlight: 'Grow your property portfolio',
  },
];

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'services' });

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              const titleKey = `${service.id.replace('-', '')}.title` as 'firstHome.title' | 'refinancing.title' | 'construction.title' | 'investment.title';
              const descKey = `${service.id.replace('-', '')}.description` as 'firstHome.description' | 'refinancing.description' | 'construction.description' | 'investment.description';

              // Handle the mapping properly
              const getTitleKey = (id: string) => {
                const mapping: Record<string, string> = {
                  'first-home': 'firstHome.title',
                  'refinancing': 'refinancing.title',
                  'construction': 'construction.title',
                  'investment': 'investment.title',
                };
                return mapping[id] || 'firstHome.title';
              };

              const getDescKey = (id: string) => {
                const mapping: Record<string, string> = {
                  'first-home': 'firstHome.description',
                  'refinancing': 'refinancing.description',
                  'construction': 'construction.description',
                  'investment': 'investment.description',
                };
                return mapping[id] || 'firstHome.description';
              };

              return (
                <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <Badge variant="secondary">{service.highlight}</Badge>
                    </div>
                    <CardTitle className="text-2xl mt-4">
                      {t(getTitleKey(service.id) as any)}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {t(getDescKey(service.id) as any)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-amber-500 hover:bg-amber-600">
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600">
              Our simple 4-step process makes getting a mortgage straightforward
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Initial Chat', desc: 'Tell us about your goals and situation' },
              { step: 2, title: 'We Compare', desc: 'We search across all lenders for the best deal' },
              { step: 3, title: 'Application', desc: 'We handle all the paperwork for you' },
              { step: 4, title: 'Settlement', desc: 'Move into your new home!' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
