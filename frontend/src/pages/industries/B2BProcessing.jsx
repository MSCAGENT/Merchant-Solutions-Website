import React from 'react';
import { Helmet } from 'react-helmet-async';
import PlaceholderPage from '../PlaceholderPage';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "B2B Payment Processing",
  "serviceType": "Business-to-Business Payment Processing Solutions",
  "provider": { "@type": "Organization", "name": "Merchant Solutions Corp", "url": "https://merchantsolutionscorp.com" },
  "areaServed": "United States",
  "url": "https://merchantsolutionscorp.com/industries/b2b-processing",
  "description": "Tailored payment processing solutions for business-to-business transactions, custom billing cycles, and complex multi-party payment flows."
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://merchantsolutionscorp.com/" },
    { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://merchantsolutionscorp.com/industries/restaurants" },
    { "@type": "ListItem", "position": 3, "name": "B2B Processing", "item": "https://merchantsolutionscorp.com/industries/b2b-processing" }
  ]
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Merchant Solutions Corp",
  "url": "https://merchantsolutionscorp.com",
  "logo": "https://customer-assets.emergentagent.com/job_merchant-central-11/artifacts/vmzehzol_MSC_1080x560.png",
  "sameAs": [
    "https://www.facebook.com/merchantsolutionscorp/",
    "https://www.instagram.com/merchant_solutions_corp",
    "https://www.linkedin.com/company/merchantsolutionscorp/",
    "https://www.youtube.com/merchantsolutionscorp"
  ]
};

export default function B2BProcessing() {
  return (
    <>
      <Helmet>
        <title>B2B Payment Processing | Business-to-Business Solutions | Merchant Solutions Corp</title>
        <meta name="description" content="Tailored B2B payment processing solutions for business-to-business transactions, custom billing cycles, and complex multi-party payment flows from Merchant Solutions Corp." />
        <meta name="keywords" content="B2B payment processing, business to business payments, B2B merchant services, commercial payment processing, enterprise payment solutions, multi-party payments" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/industries/b2b-processing" />
        <meta property="og:title" content="B2B Payment Processing | Business-to-Business Solutions" />
        <meta property="og:description" content="Tailored B2B payment processing solutions for business-to-business transactions from Merchant Solutions Corp." />
        <meta property="og:url" content="https://merchantsolutionscorp.com/industries/b2b-processing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <PlaceholderPage title="B2B Payment Processing" subtitle="For Complex & Custom Business Models" description="Tailored payment processing solutions for business-to-business transactions, custom billing cycles, and complex multi-party payment flows. Full details coming soon." />
    </>
  );
}
