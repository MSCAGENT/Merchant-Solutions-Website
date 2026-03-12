import React from 'react';
import { Helmet } from 'react-helmet-async';
import PlaceholderPage from '../PlaceholderPage';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Payment Links",
  "serviceType": "Secure Payment Link Generation and Processing",
  "provider": { "@type": "Organization", "name": "Merchant Solutions Corp", "url": "https://merchantsolutionscorp.com" },
  "areaServed": "United States",
  "url": "https://merchantsolutionscorp.com/pos/payment-links",
  "description": "Send secure payment links by email or SMS to collect payments without a website through Merchant Solutions Corp."
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://merchantsolutionscorp.com/" },
    { "@type": "ListItem", "position": 2, "name": "POS Systems", "item": "https://merchantsolutionscorp.com/pos-systems" },
    { "@type": "ListItem", "position": 3, "name": "Payment Links", "item": "https://merchantsolutionscorp.com/pos/payment-links" }
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

export default function PaymentLinks() {
  return (
    <>
      <Helmet>
        <title>Payment Links | Send Secure Payment Requests by Email & SMS | Merchant Solutions Corp</title>
        <meta name="description" content="Collect payments without a website by sharing secure payment links via email or SMS. Simple, fast payment collection from Merchant Solutions Corp." />
        <meta name="keywords" content="payment links, pay by link, email payment link, SMS payment, text to pay, payment request link, online payment link, invoice payment link" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/pos/payment-links" />
        <meta property="og:title" content="Payment Links | Send Secure Payment Requests by Email & SMS" />
        <meta property="og:description" content="Collect payments without a website by sharing secure payment links via email or SMS from Merchant Solutions Corp." />
        <meta property="og:url" content="https://merchantsolutionscorp.com/pos/payment-links" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <PlaceholderPage title="Payment Links" subtitle="Send Secure Payment Links by Email or SMS" description="Collect payments without a website by sharing a secure link. Full details coming soon." />
    </>
  );
}
