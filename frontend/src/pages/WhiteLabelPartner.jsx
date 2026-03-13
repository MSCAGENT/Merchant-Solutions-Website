import React from 'react';
import { Helmet } from 'react-helmet-async';
import PlaceholderPage from './PlaceholderPage';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "White Label Payment Solutions",
  "serviceType": "White Label Merchant Services Partnership",
  "provider": { "@type": "Organization", "name": "Merchant Solutions Corp", "url": "https://merchantsolutionscorp.com" },
  "areaServed": "United States",
  "url": "https://merchantsolutionscorp.com/partnerships/white-label",
  "description": "Offer payment processing, POS systems, and merchant services under your own brand with Merchant Solutions Corp white label partnership."
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://merchantsolutionscorp.com/" },
    { "@type": "ListItem", "position": 2, "name": "Partnerships", "item": "https://merchantsolutionscorp.com/partnerships" },
    { "@type": "ListItem", "position": 3, "name": "White Label Partner", "item": "https://merchantsolutionscorp.com/partnerships/white-label" }
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

export default function WhiteLabelPartner() {
  return (
    <>
      <Helmet>
        <title>White Label Payment Solutions | Brand Our Services as Your Own | Merchant Solutions Corp</title>
        <meta name="description" content="Offer payment processing, POS systems, and merchant services under your own brand with Merchant Solutions Corp white label partnership program." />
        <meta name="keywords" content="white label payment processing, white label merchant services, white label POS, reseller payment processing, branded payment solutions, payment ISO program" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/partnerships/white-label" />
        <meta property="og:title" content="White Label Payment Solutions | Brand Our Services as Your Own" />
        <meta property="og:description" content="Offer payment processing, POS systems, and merchant services under your own brand with Merchant Solutions Corp white label partnership program." />
        <meta property="og:url" content="https://merchantsolutionscorp.com/partnerships/white-label" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <PlaceholderPage title="White Label Partner Program" subtitle="Brand Our Payment Solutions as Your Own" description="Offer payment processing, POS systems, and merchant services under your brand. Full partnership details coming soon." />
    </>
  );
}
