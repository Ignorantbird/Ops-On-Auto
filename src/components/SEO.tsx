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
      {/* Google Analytics 4 */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-015E16B3Q0"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-015E16B3Q0', {
            page_title: '${fullTitle}',
            page_location: '${fullCanonical}',
            custom_map: {
              'custom_dimension_1': 'page_type',
              'custom_dimension_2': 'service_category'
            }
          });
        `}
      </script>
  

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
      
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="izkidDSgsVRy6Z3fbaAvH3Ir6KK4cK1rrcoyUizBEqk" />
      
      {/* JSON-LD Organization Schema - Enhanced */}
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
          },
          "sameAs": [
            "https://linkedin.com/company/opsonauto",
            "https://twitter.com/opsonauto"
          ],
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};