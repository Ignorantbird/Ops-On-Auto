import type { Metadata } from 'next';
import Script from 'next/script';
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import Providers from './providers';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '@/index.css';
import '@/styles/performance.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '700'],
});

const siteUrl = 'https://opsonauto.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AI Automation Services - 2 Week Setup | OpsOnAuto',
    template: '%s | OpsOnAuto',
  },
  description:
    'Launch & scale faster with AI automation. CRM setup, voice AI bots, workflow optimization at 50-80% less cost. 2-week delivery, not 2-3 months. Free audit!',
  keywords:
    'AI automation for startups, entrepreneur automation, CRM setup, voice AI bots, business automation, workflow optimization, startup tools, small business AI',
  openGraph: {
    type: 'website',
    siteName: 'OpsOnAuto',
    url: siteUrl,
    images: [{ url: '/logo-social.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large' as const,
    'max-video-preview': -1,
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/opsonauto-logo.png',
  },
  verification: {
    google: 'izkidDSgsVRy6Z3fbaAvH3Ir6KK4cK1rrcoyUizBEqk',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OpsOnAuto',
  url: siteUrl,
  logo: `${siteUrl}/opsonauto-logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@opsonauto.com',
    contactType: 'customer support',
  },
  description:
    'AI automation & agentic AI workflows that remove repetitive work for SMBs and agencies.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://linkedin.com/company/opsonauto',
    'https://twitter.com/opsonauto',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-015E16BJ8Q"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-015E16BJ8Q');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
