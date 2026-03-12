import React from 'react';
import { Helmet } from 'react-helmet-async';
import PlaceholderPage from './PlaceholderPage';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://merchantsolutionscorp.com/" },
    { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://merchantsolutionscorp.com/pricing" },
    { "@type": "ListItem", "position": 3, "name": "POS Subscription", "item": "https://merchantsolutionscorp.com/pricing/pos-subscription" }
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

export default function POSSubscription() {
  return (
    <>
      <Helmet>
        <title>POS Subscription Program | Monthly POS Plans | Merchant Solutions Corp</title>
        <meta name="description" content="Get a full POS system with an affordable monthly subscription from Merchant Solutions Corp. No large upfront costs, flexible plans for every business size." />
        <meta name="keywords" content="POS subscription, monthly POS plan, POS rental, POS lease, affordable POS system, POS monthly payment, point of sale subscription" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/pricing/pos-subscription" />
        <meta property="og:title" content="POS Subscription Program | Monthly POS Plans" />
        <meta property="og:description" content="Get a full POS system with an affordable monthly subscription from Merchant Solutions Corp. No large upfront costs, flexible plans for every business size." />
        <meta property="og:url" content="https://merchantsolutionscorp.com/pricing/pos-subscription" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <PlaceholderPage title="POS Subscription Program" subtitle="Affordable Monthly POS Plans" description="Get a full POS system with a simple monthly subscription. No large upfront costs. Full program details coming soon." />
    </>
  );
}
