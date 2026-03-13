import React from 'react';
import { Helmet } from 'react-helmet-async';
import PlaceholderPage from '../PlaceholderPage';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Merchant Rewards Program",
  "serviceType": "Merchant Loyalty and Rewards Program",
  "provider": { "@type": "Organization", "name": "Merchant Solutions Corp", "url": "https://merchantsolutionscorp.com" },
  "areaServed": "United States",
  "url": "https://merchantsolutionscorp.com/solutions/merchant-rewards",
  "description": "Earn statement credits, equipment upgrades, and referral bonuses as your business grows with Merchant Solutions Corp Rewards Program."
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://merchantsolutionscorp.com/" },
    { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://merchantsolutionscorp.com/solutions/payment-processing" },
    { "@type": "ListItem", "position": 3, "name": "Merchant Rewards", "item": "https://merchantsolutionscorp.com/solutions/merchant-rewards" }
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

export default function MerchantRewards() {
  return (
    <>
      <Helmet>
        <title>Merchant Rewards Program | Earn Credits & Bonuses | Merchant Solutions Corp</title>
        <meta name="description" content="Earn statement credits, equipment upgrades, and referral bonuses as your business grows with the Merchant Solutions Corp Rewards Program." />
        <meta name="keywords" content="merchant rewards, merchant loyalty program, processing rewards, statement credits, referral bonuses, merchant incentives, payment processing rewards" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/solutions/merchant-rewards" />
        <meta property="og:title" content="Merchant Rewards Program | Earn Credits & Bonuses" />
        <meta property="og:description" content="Earn statement credits, equipment upgrades, and referral bonuses as your business grows with Merchant Solutions Corp." />
        <meta property="og:url" content="https://merchantsolutionscorp.com/solutions/merchant-rewards" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <PlaceholderPage title="Merchant Rewards Program by MSC" subtitle="Get Rewarded for Processing with Merchant Solutions" description="Earn statement credits, equipment upgrades, and referral bonuses as your business grows. Full program details coming soon." />
    </>
  );
}
