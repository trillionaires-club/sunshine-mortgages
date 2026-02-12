'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const tContact = useTranslations('contact');
  const tNav = useTranslations('nav');

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#f16421] rounded-full flex items-center justify-center">
                <span className="text-xl text-white">☀</span>
              </div>
              <span className="ml-3 text-xl font-bold text-white">
                Sunshine Mortgages
              </span>
            </div>
            <p className="text-sm leading-relaxed">{t('tagline')}</p>
            <div className="inline-flex items-center gap-2 bg-[#f16421]/20 text-[#f16421] rounded-full px-4 py-2 text-sm font-medium">
              {t('partner')}
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#f16421] rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#f16421] rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#f16421] rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-[#f16421] transition-colors">
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#f16421] transition-colors">
                  {tNav('services')}
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-[#f16421] transition-colors">
                  {tNav('calculator')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#f16421] transition-colors">
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#f16421] transition-colors">
                  {tNav('blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('services')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="hover:text-[#f16421] transition-colors">
                  First Home Buyers
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#f16421] transition-colors">
                  Refinancing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#f16421] transition-colors">
                  Construction Loans
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#f16421] transition-colors">
                  Investment Properties
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{tNav('contact')}</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:099544963" className="flex items-center gap-3 hover:text-[#f16421] transition-colors">
                  <div className="w-10 h-10 bg-[#f16421]/20 rounded-full flex items-center justify-center">
                    <Phone className="h-4 w-4 text-[#f16421]" />
                  </div>
                  <span>{tContact('info.phone')}</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@sunshinemortgages.co.nz" className="flex items-center gap-3 hover:text-[#f16421] transition-colors">
                  <div className="w-10 h-10 bg-[#f16421]/20 rounded-full flex items-center justify-center">
                    <Mail className="h-4 w-4 text-[#f16421]" />
                  </div>
                  <span className="break-all">{tContact('info.email')}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#f16421]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-[#f16421]" />
                  </div>
                  <span>{tContact('info.address')}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">{t('copyright')}</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-[#f16421] transition-colors">
                {t('privacy')}
              </Link>
              <Link href="/terms" className="hover:text-[#f16421] transition-colors">
                {t('terms')}
              </Link>
              <Link href="/disclosure" className="hover:text-[#f16421] transition-colors">
                {t('disclaimer')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
