import React from 'react';
import { Helmet } from 'react-helmet-async';
import PlaceholderPage from '../PlaceholderPage';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Virtual Terminal",
  "serviceType": "Browser-Based Virtual Payment Terminal",
  "provider": { "@type": "Organization", "name": "Merchant Solutions Corp", "url": "https://merchantsolutionscorp.com" },
  "areaServed": "United States",
  "url": "https://merchantsolutionscorp.com/pos/virtual-terminal",
  "description": "Process card-not-present transactions through a secure browser-based virtual terminal from Merchant Solutions Corp."
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://merchantsolutionscorp.com/" },
    { "@type": "ListItem", "position": 2, "name": "POS Systems", "item": "https://merchantsolutionscorp.com/pos-systems" },
    { "@type": "ListItem", "position": 3, "name": "Virtual Terminal", "item": "https://merchantsolutionscorp.com/pos/virtual-terminal" }
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

export default function VirtualTerminal() {
  return (
    <>
      <Helmet>
        <title>Virtual Terminal | Accept Payments from Any Computer | Merchant Solutions Corp</title>
        <meta name="description" content="Process card-not-present transactions through a secure browser-based virtual terminal. Accept payments manually from any computer with Merchant Solutions Corp." />
        <meta name="keywords" content="virtual terminal, online payment terminal, card not present, manual payment processing, browser payment terminal, MOTO processing, phone order payments" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/pos/virtual-terminal" />
        <meta property="og:title" content="Virtual Terminal | Accept Payments from Any Computer" />
        <meta property="og:description" content="Process card-not-present transactions through a secure browser-based virtual terminal from Merchant Solutions Corp." />
        <meta property="og:url" content="https://merchantsolutionscorp.com/pos/virtual-terminal" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <PlaceholderPage title="Virtual Terminal" subtitle="Accept Payments Manually from Any Computer" description="Process card-not-present transactions through a secure browser-based terminal. Full details coming soon." />
    </>
  );
}
