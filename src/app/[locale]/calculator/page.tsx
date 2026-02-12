import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { MortgageCalculator } from '@/components/calculator/mortgage-calculator';
import { CtaSection } from '@/components/sections/cta';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'calculator' });

  return {
    title: `${t('title')} | Sunshine Mortgages`,
    description: t('subtitle'),
  };
}

export default async function CalculatorPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Mortgage Calculator
              </h1>
              <p className="text-lg text-gray-600">
                Get an estimate of your monthly repayments and see how much you could borrow.
                Adjust the sliders to explore different scenarios.
              </p>
            </div>

            <MortgageCalculator />

            {/* Additional Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-semibold text-gray-900 mb-2">Estimate Only</h3>
                <p className="text-sm text-gray-600">
                  This calculator provides estimates. Actual rates and terms depend on your
                  individual circumstances and lender assessment.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-semibold text-gray-900 mb-2">Get Expert Advice</h3>
                <p className="text-sm text-gray-600">
                  For accurate figures based on your situation, speak with one of our
                  mortgage advisers. It&apos;s free!
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-3xl mb-3">🏦</div>
                <h3 className="font-semibold text-gray-900 mb-2">Compare Lenders</h3>
                <p className="text-sm text-gray-600">
                  We compare options across all major NZ lenders to find the best deal
                  for your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third-party Calculator Embed */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need More Detailed Calculations?
            </h2>
            <p className="text-gray-600 mb-6">
              Try the comprehensive calculator from Sorted.org.nz for more detailed
              scenarios including different rate structures and payment frequencies.
            </p>
            <a
              href="https://sorted.org.nz/tools/mortgage-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors"
            >
              Open Sorted.org.nz Calculator
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
