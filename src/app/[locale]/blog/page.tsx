import { setRequestLocale } from 'next-intl/server';
import { CtaSection } from '@/components/sections/cta';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata() {
  return {
    title: 'Blog | Sunshine Mortgages',
    description: 'Stay updated with the latest mortgage news, tips, and insights from Sunshine Mortgages.',
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-lg text-gray-600">
              Stay updated with the latest mortgage news, tips, and insights.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">📝</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600">
              We&apos;re working on bringing you valuable content about mortgages,
              home buying tips, and market insights. Check back soon!
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
