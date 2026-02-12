'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function MortgageCalculator() {
  const t = useTranslations('calculator');
  const [loanAmount, setLoanAmount] = useState(600000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [paymentFrequency, setPaymentFrequency] = useState<'monthly' | 'fortnightly' | 'weekly'>('monthly');

  // Calculate payment using the standard mortgage formula
  const calculatePayment = () => {
    const principal = loanAmount;
    let periodsPerYear = 12;

    if (paymentFrequency === 'fortnightly') periodsPerYear = 26;
    if (paymentFrequency === 'weekly') periodsPerYear = 52;

    const periodicRate = interestRate / 100 / periodsPerYear;
    const numberOfPayments = loanTerm * periodsPerYear;

    if (periodicRate === 0) {
      return principal / numberOfPayments;
    }

    const payment =
      (principal * (periodicRate * Math.pow(1 + periodicRate, numberOfPayments))) /
      (Math.pow(1 + periodicRate, numberOfPayments) - 1);

    return payment;
  };

  const payment = calculatePayment();
  const periodsPerYear = paymentFrequency === 'monthly' ? 12 : paymentFrequency === 'fortnightly' ? 26 : 52;
  const totalPayment = payment * loanTerm * periodsPerYear;
  const totalInterest = totalPayment - loanAmount;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NZ', {
      style: 'currency',
      currency: 'NZD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getFrequencyLabel = () => {
    switch (paymentFrequency) {
      case 'monthly': return 'Monthly';
      case 'fortnightly': return 'Fortnightly';
      case 'weekly': return 'Weekly';
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Calculator Inputs */}
      <Card className="shadow-xl border-2">
        <CardHeader>
          <CardTitle>Calculate Your Repayments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Loan Amount */}
          <div className="space-y-2">
            <Label htmlFor="loanAmount">Loan Amount</Label>
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
            <div className="flex justify-between text-sm text-gray-500">
              <span>$100k</span>
              <span>$2M</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-2">
            <Label htmlFor="interestRate">Interest Rate (%)</Label>
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
            <div className="flex justify-between text-sm text-gray-500">
              <span>2%</span>
              <span>12%</span>
            </div>
          </div>

          {/* Loan Term */}
          <div className="space-y-2">
            <Label htmlFor="loanTerm">Loan Term (years)</Label>
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
            <div className="flex justify-between text-sm text-gray-500">
              <span>5 years</span>
              <span>30 years</span>
            </div>
          </div>

          {/* Payment Frequency */}
          <div className="space-y-2">
            <Label>Payment Frequency</Label>
            <div className="grid grid-cols-3 gap-2">
              {(['monthly', 'fortnightly', 'weekly'] as const).map((freq) => (
                <button
                  key={freq}
                  onClick={() => setPaymentFrequency(freq)}
                  className={`py-2 px-4 rounded-lg border-2 text-sm font-medium transition-colors ${
                    paymentFrequency === freq
                      ? 'border-amber-500 bg-amber-50 text-amber-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {freq.charAt(0).toUpperCase() + freq.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="space-y-6">
        {/* Main Result */}
        <Card className="bg-amber-500 text-white">
          <CardContent className="p-8 text-center">
            <div className="text-sm uppercase tracking-wide opacity-90 mb-2">
              {getFrequencyLabel()} Payment
            </div>
            <div className="text-5xl font-bold mb-4">
              {formatCurrency(payment)}
            </div>
            <div className="text-amber-100 text-sm">
              Based on {interestRate}% interest over {loanTerm} years
            </div>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-sm text-gray-500 mb-1">Loan Amount</div>
              <div className="text-2xl font-bold text-gray-900">
                {formatCurrency(loanAmount)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-sm text-gray-500 mb-1">Total Interest</div>
              <div className="text-2xl font-bold text-gray-900">
                {formatCurrency(totalInterest)}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-sm text-gray-500 mb-1">Total Amount Payable</div>
            <div className="text-3xl font-bold text-gray-900">
              {formatCurrency(totalPayment)}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-500 italic">
            {t('disclaimer')}
          </p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 w-full">
            <Link href="/contact">
              {t('cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
