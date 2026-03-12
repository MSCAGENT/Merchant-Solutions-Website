import React from 'react';
import { Helmet } from 'react-helmet-async';
import PlaceholderPage from '../PlaceholderPage';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ACH & E-Check Processing",
  "serviceType": "ACH Payment Processing and Electronic Check Services",
  "provider": { "@type": "Organization", "name": "Merchant Solutions Corp", "url": "https://merchantsolutionscorp.com" },
  "areaServed": "United States",
  "url": "https://merchantsolutionscorp.com/solutions/ach-processing",
  "description": "Lower-cost payment acceptance through ACH and e-check processing from Merchant Solutions Corp."
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://merchantsolutionscorp.com/" },
    { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://merchantsolutionscorp.com/solutions/payment-processing" },
    { "@type": "ListItem", "position": 3, "name": "ACH Processing", "item": "https://merchantsolutionscorp.com/solutions/ach-processing" }
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

export default function ACHProcessing() {
  return (
    <>
      <Helmet>
        <title>ACH & E-Check Processing | Direct Bank Transfers | Merchant Solutions Corp</title>
        <meta name="description" content="Accept direct bank transfers and electronic checks with lower processing fees through Merchant Solutions Corp ACH and e-check processing solutions." />
        <meta name="keywords" content="ACH processing, e-check processing, electronic check, direct bank transfer, ACH payment, bank transfer processing, ACH merchant services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/solutions/ach-processing" />
        <meta property="og:title" content="ACH & E-Check Processing | Direct Bank Transfers" />
        <meta property="og:description" content="Accept direct bank transfers and electronic checks with lower processing fees through Merchant Solutions Corp." />
        <meta property="og:url" content="https://merchantsolutionscorp.com/solutions/ach-processing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <PlaceholderPage title="ACH & E-Check Processing" subtitle="Accept Direct Bank Transfers and Electronic Checks" description="Lower-cost payment acceptance through ACH and e-check processing. Details coming soon." />
    </>
  );
}
