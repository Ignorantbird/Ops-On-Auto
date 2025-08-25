import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

export const SEO = ({ 
  title, 
  description, 
  keywords,
  canonical,
  ogType = "website",
  ogImage = "/logo-social.png"
}: SEOProps) => {
  const siteUrl = "https://opsonauto.com";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullTitle = title.includes("OpsOnAuto") ? title : `${title} | OpsOnAuto`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      
      {/* UPDATED: Multiple favicon formats for best compatibility */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/opsonauto-logo.png" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="OpsOnAuto" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* JSON-LD Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "OpsOnAuto",
          "url": siteUrl,
          "logo": `${siteUrl}/src/assets/opsonauto-logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "hello@opsonauto.com",
            "contactType": "customer support"
          },
          "description": "AI automation & agentic AI workflows that remove repetitive work for SMBs and agencies.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          }
        })}
      </script>
    </Helmet>
  );
};