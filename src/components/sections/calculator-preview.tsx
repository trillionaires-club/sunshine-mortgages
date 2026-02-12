'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Calculator } from 'lucide-react';

export function CalculatorPreview() {
  const t = useTranslations('calculator');
  const [loanAmount, setLoanAmount] = useState(600000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

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
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-orange-50 to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#f16421]/10 text-[#f16421] rounded-full px-4 py-2 text-sm font-semibold">
              <Calculator className="w-4 h-4" />
              Free Calculator
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('subtitle')}
            </p>

            {/* Results */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-[#f16421] border-0 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium opacity-90">
                    {t('monthlyPayment')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {formatCurrency(monthlyPayment)}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 border-0">
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

              <Card className="bg-gray-50 border-0">
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

            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              {t('cta')}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Calculator */}
          <Card className="shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8 space-y-8">
              <div className="space-y-3">
                <Label htmlFor="loanAmount" className="text-sm font-semibold text-gray-700">{t('loanAmount')}</Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                  <Input
                    id="loanAmount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="pl-8 text-lg h-14 rounded-xl border-2 border-gray-200 focus:border-[#f16421]"
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
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#f16421]"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="interestRate" className="text-sm font-semibold text-gray-700">{t('interestRate')}</Label>
                <Input
                  id="interestRate"
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="text-lg h-14 rounded-xl border-2 border-gray-200 focus:border-[#f16421]"
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
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#f16421]"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="loanTerm" className="text-sm font-semibold text-gray-700">{t('loanTerm')}</Label>
                <Input
                  id="loanTerm"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="text-lg h-14 rounded-xl border-2 border-gray-200 focus:border-[#f16421]"
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
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#f16421]"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
