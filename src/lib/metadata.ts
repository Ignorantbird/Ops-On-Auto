import type { Metadata } from 'next';

const siteUrl = 'https://opsonauto.com';

interface PageMetaOptions {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

export function pageMeta({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = '/logo-social.jpg',
}: PageMetaOptions): Metadata {
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: { canonical: fullCanonical },
    openGraph: {
      title,
      description,
      type: ogType as 'website',
      url: fullCanonical,
      images: [{ url: `${siteUrl}${ogImage}` }],
    },
    twitter: {
      title,
      description,
      images: [`${siteUrl}${ogImage}`],
    },
  };
}
