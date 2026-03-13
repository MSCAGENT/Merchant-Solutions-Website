import React from 'react';
import { Helmet } from 'react-helmet-async';
import PlaceholderPage from './PlaceholderPage';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://merchantsolutionscorp.com/" },
    { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://merchantsolutionscorp.com/pricing" },
    { "@type": "ListItem", "position": 3, "name": "Free POS Program", "item": "https://merchantsolutionscorp.com/pricing/free-pos" }
  ]
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Merchant Solutions Corp",
  "url": "https://merchantsolutionscorp.com",
  "logo": "https://merchantsolutionscorp.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/merchantsolutionscorp/",
    "https://www.instagram.com/merchant_solutions_corp",
    "https://www.linkedin.com/company/merchantsolutionscorp/",
    "https://www.youtube.com/merchantsolutionscorp"
  ]
};

export default function FreePOS() {
  return (
    <>
      <Helmet>
        <title>Free POS Program | No Upfront Cost POS System | Merchant Solutions Corp</title>
        <meta name="description" content="Qualify for a free POS system with your merchant account from Merchant Solutions Corp. No upfront cost, full installation, and ongoing support included." />
        <meta name="keywords" content="free POS system, free point of sale, no cost POS, free POS program, merchant account free terminal, free credit card terminal" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/pricing/free-pos" />
        <meta property="og:title" content="Free POS Program | No Upfront Cost POS System" />
        <meta property="og:description" content="Qualify for a free POS system with your merchant account from Merchant Solutions Corp. No upfront cost, full installation, and ongoing support included." />
        <meta property="og:url" content="https://merchantsolutionscorp.com/pricing/free-pos" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <PlaceholderPage title="Free POS Program" subtitle="Get a POS System at No Upfront Cost" description="Qualify for a free POS system with your merchant account. Full program details coming soon." />
    </>
  );
}
