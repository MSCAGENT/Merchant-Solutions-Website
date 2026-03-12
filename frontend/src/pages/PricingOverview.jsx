import React from 'react';
import { Helmet } from 'react-helmet-async';
import PlaceholderPage from './PlaceholderPage';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://merchantsolutionscorp.com/" },
    { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://merchantsolutionscorp.com/pricing" }
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

export default function PricingOverview() {
  return (
    <>
      <Helmet>
        <title>Payment Processing Pricing | Flat Rate, Interchange Plus & Dual Pricing | Merchant Solutions Corp</title>
        <meta name="description" content="Compare transparent payment processing pricing from Merchant Solutions Corp. Flat rate, interchange plus, and dual pricing programs for every business." />
        <meta name="keywords" content="payment processing pricing, credit card processing rates, merchant services pricing, flat rate processing, interchange plus pricing, dual pricing program, payment processing fees" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/pricing" />
        <meta property="og:title" content="Payment Processing Pricing | Transparent Rates for Every Business" />
        <meta property="og:description" content="Compare transparent payment processing pricing from Merchant Solutions Corp. Flat rate, interchange plus, and dual pricing programs for every business." />
        <meta property="og:url" content="https://merchantsolutionscorp.com/pricing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <PlaceholderPage title="Pricing Overview" subtitle="Transparent Pricing for Every Business" description="Compare flat rate, interchange plus, and dual pricing programs. Full pricing details coming soon." />
    </>
  );
}
