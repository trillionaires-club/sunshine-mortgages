'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageSwitcher } from './language-switcher';

const navItems = [
  { href: '/', key: 'home' },
  { href: '/services', key: 'services' },
  { href: '/calculator', key: 'calculator' },
  { href: '/about', key: 'about' },
  { href: '/blog', key: 'blog' },
  { href: '/contact', key: 'contact' },
] as const;

export function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-amber-500">☀️</span>
            <span className="ml-2 text-xl font-semibold text-gray-900">
              Sunshine Mortgages
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.endsWith(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  isActive ? 'text-amber-600' : 'text-gray-600'
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <LanguageSwitcher />
          <a
            href="tel:099544963"
            className="flex items-center text-sm text-gray-600 hover:text-amber-600"
          >
            <Phone className="mr-2 h-4 w-4" />
            09 954 4963
          </a>
          <Button asChild className="bg-amber-500 hover:bg-amber-600">
            <Link href="/contact">{t('getStarted')}</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden items-center space-x-4">
          <LanguageSwitcher />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-gray-900 hover:text-amber-600"
                  >
                    {t(item.key)}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <a
                    href="tel:099544963"
                    className="flex items-center text-gray-600 hover:text-amber-600"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    09 954 4963
                  </a>
                </div>
                <Button asChild className="bg-amber-500 hover:bg-amber-600 w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    {t('getStarted')}
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
