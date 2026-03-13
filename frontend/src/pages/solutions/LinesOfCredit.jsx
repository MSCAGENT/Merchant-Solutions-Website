import React from 'react';
import { Helmet } from 'react-helmet-async';
import PlaceholderPage from '../PlaceholderPage';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Lines of Credit & SBA Loans",
  "serviceType": "Small Business Financing and Lines of Credit",
  "provider": { "@type": "Organization", "name": "Merchant Solutions Corp", "url": "https://merchantsolutionscorp.com" },
  "areaServed": "United States",
  "url": "https://merchantsolutionscorp.com/solutions/lines-of-credit",
  "description": "Merchant Solutions Corp processes loans and lines of credit for small businesses with the compliance and help of Lendio."
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://merchantsolutionscorp.com/" },
    { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://merchantsolutionscorp.com/solutions/payment-processing" },
    { "@type": "ListItem", "position": 3, "name": "Lines of Credit", "item": "https://merchantsolutionscorp.com/solutions/lines-of-credit" }
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

export default function LinesOfCredit() {
  return (
    <>
      <Helmet>
        <title>Lines of Credit & SBA Loans | Small Business Financing | Merchant Solutions Corp</title>
        <meta name="description" content="Access lines of credit and SBA loans for your small business through Merchant Solutions Corp and Lendio. Flexible financing options to grow your business." />
        <meta name="keywords" content="lines of credit, SBA loans, small business loans, business financing, Lendio loans, merchant cash advance, business line of credit" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/solutions/lines-of-credit" />
        <meta property="og:title" content="Lines of Credit & SBA Loans | Small Business Financing" />
        <meta property="og:description" content="Access lines of credit and SBA loans for your small business through Merchant Solutions Corp and Lendio." />
        <meta property="og:url" content="https://merchantsolutionscorp.com/solutions/lines-of-credit" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <PlaceholderPage title="Lines of Credit & SBA Loans" subtitle="Small Business Financing Through Lendio" description="We process loans and lines of credit for small businesses with the compliance and help of Lendio. Full details coming soon." />
    </>
  );
}
