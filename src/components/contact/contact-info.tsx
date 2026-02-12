'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactInfo() {
  const t = useTranslations('contact');

  const contactDetails = [
    {
      icon: Phone,
      label: 'Phone',
      value: t('info.phone'),
      href: 'tel:099544963',
    },
    {
      icon: Mail,
      label: 'Email',
      value: t('info.email'),
      href: 'mailto:info@sunshinemortgages.co.nz',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: t('info.address'),
      href: null,
    },
  ];

  const team = [
    { name: 'Grace', phone: '021 232 0608', email: 'grace@sunshinemortgages.co.nz' },
    { name: 'Steven', phone: '021 048 8746', email: 'steven@sunshinemortgages.co.nz' },
    { name: 'Nicole Xu', phone: '021 866 543', email: 'nicole@sunshinemortgages.co.nz' },
  ];

  return (
    <div className="space-y-6">
      {/* Contact Details Card */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="font-semibold text-lg text-gray-900">Contact Details</h3>
          <div className="space-y-4">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-gray-900 hover:text-amber-600">
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-medium text-gray-900">{item.value}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Office Hours */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-amber-600" />
            <h3 className="font-semibold text-lg text-gray-900">Office Hours</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Monday - Friday</span>
              <span className="font-medium">9:00 AM - 5:30 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Saturday</span>
              <span className="font-medium">By appointment</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sunday</span>
              <span className="font-medium">Closed</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Direct Contact */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">Speak Directly</h3>
          <div className="space-y-4">
            {team.map((member, index) => (
              <div key={index} className="text-sm">
                <div className="font-medium text-gray-900">{member.name}</div>
                <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-amber-600 hover:underline block">
                  {member.phone}
                </a>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
