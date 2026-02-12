'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
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
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#f16421] rounded-full flex items-center justify-center">
              <span className="text-xl text-white">☀</span>
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">
              Sunshine <span className="text-[#f16421]">Mortgages</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.endsWith(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'text-[#f16421] bg-[#f16421]/10'
                    : 'text-gray-600 hover:text-[#f16421] hover:bg-gray-50'
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
            className="flex items-center text-sm font-medium text-gray-600 hover:text-[#f16421] transition-colors"
          >
            <Phone className="mr-2 h-4 w-4" />
            09 954 4963
          </a>
          <Link href="/contact" className="btn-primary text-sm">
            {t('getStarted')}
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden items-center space-x-4">
          <LanguageSwitcher />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-[#f16421]/10">
                <Menu className="h-6 w-6 text-gray-700" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-2 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-gray-900 hover:text-[#f16421] px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                ))}
                <div className="pt-6 border-t mt-4">
                  <a
                    href="tel:099544963"
                    className="flex items-center text-gray-600 hover:text-[#f16421] px-4 py-3"
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    09 954 4963
                  </a>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center mx-4 mt-4"
                >
                  {t('getStarted')}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
