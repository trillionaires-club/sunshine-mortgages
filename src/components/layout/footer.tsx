'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const tContact = useTranslations('contact');
  const tNav = useTranslations('nav');

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl">☀️</span>
              <span className="ml-2 text-xl font-semibold text-white">
                Sunshine Mortgages
              </span>
            </div>
            <p className="text-sm">{t('tagline')}</p>
            <div className="flex items-center text-sm text-amber-400">
              {t('partner')}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">
                  {tNav('services')}
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-amber-400 transition-colors">
                  {tNav('calculator')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-400 transition-colors">
                  {tNav('blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('services')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/first-home" className="hover:text-amber-400 transition-colors">
                  First Home Buyers
                </Link>
              </li>
              <li>
                <Link href="/services/refinancing" className="hover:text-amber-400 transition-colors">
                  Refinancing
                </Link>
              </li>
              <li>
                <Link href="/services/construction" className="hover:text-amber-400 transition-colors">
                  Construction Loans
                </Link>
              </li>
              <li>
                <Link href="/services/investment" className="hover:text-amber-400 transition-colors">
                  Investment Properties
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{tNav('contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-amber-400" />
                <a href="tel:099544963" className="hover:text-amber-400 transition-colors">
                  {tContact('info.phone')}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-amber-400" />
                <a href="mailto:info@sunshinemortgages.co.nz" className="hover:text-amber-400 transition-colors">
                  {tContact('info.email')}
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-amber-400" />
                <span>{tContact('info.address')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">{t('copyright')}</p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">
              {t('privacy')}
            </Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">
              {t('terms')}
            </Link>
            <Link href="/disclosure" className="hover:text-amber-400 transition-colors">
              {t('disclaimer')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
