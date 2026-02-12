import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sunshinemortgages.co.nz';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/calculator',
    '/about',
    '/contact',
  ];

  const locales = ['en', 'zh'];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add routes for each locale
  for (const route of routes) {
    for (const locale of locales) {
      const url = locale === 'en' ? `${baseUrl}${route}` : `${baseUrl}/${locale}${route}`;
      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}${route}`,
            zh: `${baseUrl}/zh${route}`,
          },
        },
      });
    }
  }

  return sitemap;
}
