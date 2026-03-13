import React from 'react';
import { Helmet } from 'react-helmet-async';
import PlaceholderPage from '../PlaceholderPage';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "PAX Payment Terminals",
  "serviceType": "PAX Smart Payment Terminal Sales and Deployment",
  "provider": { "@type": "Organization", "name": "Merchant Solutions Corp", "url": "https://merchantsolutionscorp.com" },
  "areaServed": "United States",
  "url": "https://merchantsolutionscorp.com/pos/pax-terminals",
  "description": "Enterprise-grade PAX payment devices with EMV, NFC, and contactless support from Merchant Solutions Corp."
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://merchantsolutionscorp.com/" },
    { "@type": "ListItem", "position": 2, "name": "POS Systems", "item": "https://merchantsolutionscorp.com/pos-systems" },
    { "@type": "ListItem", "position": 3, "name": "PAX Terminals", "item": "https://merchantsolutionscorp.com/pos/pax-terminals" }
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

export default function PAXTerminals() {
  return (
    <>
      <Helmet>
        <title>PAX Payment Terminals | Android Smart Terminals | Merchant Solutions Corp</title>
        <meta name="description" content="Enterprise-grade PAX Android smart payment terminals with EMV, NFC, and contactless support. Secure, reliable POS hardware from Merchant Solutions Corp." />
        <meta name="keywords" content="PAX terminals, PAX payment terminal, PAX A920, PAX smart terminal, Android payment terminal, EMV terminal, NFC payment terminal, PAX POS" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/pos/pax-terminals" />
        <meta property="og:title" content="PAX Payment Terminals | Android Smart Terminals" />
        <meta property="og:description" content="Enterprise-grade PAX Android smart payment terminals with EMV, NFC, and contactless support from Merchant Solutions Corp." />
        <meta property="og:url" content="https://merchantsolutionscorp.com/pos/pax-terminals" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <PlaceholderPage title="PAX Terminals" subtitle="Secure Android-Based Smart Payment Terminals" description="Enterprise-grade PAX payment devices with EMV, NFC, and contactless support. Full product line coming soon." />
    </>
  );
}
