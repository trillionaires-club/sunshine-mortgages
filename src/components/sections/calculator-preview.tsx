'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export function CalculatorPreview() {
  const t = useTranslations('calculator');
  const [loanAmount, setLoanAmount] = useState(600000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  // Calculate monthly payment using the standard mortgage formula
  const calculateMonthlyPayment = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      return principal / numberOfPayments;
    }

    const payment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return payment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment = monthlyPayment * loanTerm * 12;
  const totalInterest = totalPayment - loanAmount;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NZ', {
      style: 'currency',
      currency: 'NZD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('subtitle')}
            </p>

            {/* Results */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-amber-800">
                    {t('monthlyPayment')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-amber-900">
                    {formatCurrency(monthlyPayment)}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {t('totalInterest')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">
                    {formatCurrency(totalInterest)}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {t('totalPayment')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">
                    {formatCurrency(totalPayment)}
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-sm text-gray-500 italic">
              {t('disclaimer')}
            </p>

            <Button asChild className="bg-amber-500 hover:bg-amber-600">
              <Link href="/contact">
                {t('cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Calculator */}
          <Card className="shadow-xl border-2">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="loanAmount">{t('loanAmount')}</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    id="loanAmount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="pl-8 text-lg"
                    min={0}
                    step={10000}
                  />
                </div>
                <input
                  type="range"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  min={100000}
                  max={2000000}
                  step={10000}
                  className="w-full accent-amber-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interestRate">{t('interestRate')}</Label>
                <Input
                  id="interestRate"
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="text-lg"
                  min={0}
                  max={15}
                  step={0.1}
                />
                <input
                  type="range"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  min={2}
                  max={12}
                  step={0.1}
                  className="w-full accent-amber-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="loanTerm">{t('loanTerm')}</Label>
                <Input
                  id="loanTerm"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="text-lg"
                  min={1}
                  max={30}
                />
                <input
                  type="range"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  min={5}
                  max={30}
                  step={1}
                  className="w-full accent-amber-500"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
