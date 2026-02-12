import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { CtaSection } from '@/components/sections/cta';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'team' });

  return {
    title: `${t('title')} | Sunshine Mortgages`,
    description: t('subtitle'),
  };
}

const team = [
  {
    name: 'Grace',
    role: 'Founder & Principal Adviser',
    bio: 'Grace founded Sunshine Mortgages with a mission to make home ownership accessible to all Aucklanders. With extensive experience in the NZ mortgage market, she leads our team with passion and expertise.',
    initials: 'G',
    phone: '021 232 0608',
  },
  {
    name: 'Steven',
    role: 'Business Manager',
    bio: 'Steven brings extensive experience in financial services and client relationship management. He ensures smooth operations and exceptional client experiences.',
    initials: 'S',
    phone: '021 048 8746',
  },
  {
    name: 'Nicole Xu',
    role: 'Senior Mortgage Adviser',
    bio: 'With over 10 years of experience in the mortgage industry, Nicole specializes in complex lending scenarios and investment property financing.',
    initials: 'NX',
    phone: '021 866 543',
  },
  {
    name: 'Rao Fu',
    role: 'Assistant',
    bio: 'Rao supports our team with administrative tasks and client communication, ensuring every enquiry is handled promptly and professionally.',
    initials: 'RF',
    phone: '',
  },
];

const values = [
  {
    title: 'Client First',
    description: 'Your goals and circumstances guide every recommendation we make.',
  },
  {
    title: 'Transparency',
    description: 'We explain everything clearly with no hidden fees or surprises.',
  },
  {
    title: 'Expertise',
    description: 'Continuous learning keeps us at the forefront of the mortgage industry.',
  },
  {
    title: 'Community',
    description: 'We give back through partnerships like our KidsCan fundraising.',
  },
];

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Sunshine Mortgages
            </h1>
            <p className="text-lg text-gray-600">
              We&apos;re a team of dedicated mortgage advisers passionate about helping
              Aucklanders achieve their property dreams. Since our founding, we&apos;ve
              helped hundreds of families secure their homes with personalized service
              and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Experienced advisers dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="text-2xl bg-amber-100 text-amber-700">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className="mb-4">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/\s/g, '')}`}
                      className="text-sm text-amber-600 hover:underline"
                    >
                      {member.phone}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* KidsCan Partnership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl mb-4">❤️</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Giving Back to Our Community
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We&apos;re proud to be official fundraisers for KidsCan, supporting
              Kiwi kids in need. A portion of every successful loan goes towards
              helping children across New Zealand.
            </p>
            <Badge className="bg-amber-500">Official KidsCan Fundraiser</Badge>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
