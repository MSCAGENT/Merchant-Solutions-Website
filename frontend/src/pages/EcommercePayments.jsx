import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ChevronDown, ChevronRight, ArrowRight, CreditCard, Globe,
  Shield, Lock, Smartphone, Monitor, BarChart3, Zap, Mail, QrCode,
  ShoppingBag, FileText, Users, Headphones, Target, TrendingUp,
  Layers, Clock, AlertTriangle, Megaphone
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-5 text-left" aria-expanded={open}>
        <span className="text-lg font-semibold text-gray-900 pr-4" itemProp="name">{question}</span>
        <ChevronDown className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-5 text-gray-600 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <div itemProp="text">{answer}</div>
        </div>
      )}
    </div>
  );
};

export default function EcommercePayments() {
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    if (!document.querySelector('link[href*="calendly.com"]')) {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const s = document.createElement('script');
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/mscpayments/posdemo?hide_event_type_details=1&primary_color=1400ff' });
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ecommerce Payment Processing",
    "serviceType": "Ecommerce Payment Processing and Hosted Payment Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Merchant Solutions Corp",
      "url": "https://merchantsolutionscorp.com"
    },
    "areaServed": "United States",
    "url": "https://merchantsolutionscorp.com/ecommerce-payments",
    "description": "Merchant Solutions Corp provides secure ecommerce payment processing, hosted payment pages, QR code payments, payment links, and advanced fraud protection for businesses.",
    "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is ecommerce payment processing?", "acceptedAnswer": { "@type": "Answer", "text": "Ecommerce payment processing is the system that allows businesses to accept online payments through websites, hosted checkout pages, payment links, and digital invoices." } },
      { "@type": "Question", "name": "What is a hosted payment page?", "acceptedAnswer": { "@type": "Answer", "text": "A hosted payment page is a secure checkout page managed by the payment provider so the business does not need to store sensitive card data on its own site." } },
      { "@type": "Question", "name": "Are hosted payment pages secure?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Hosted payment pages are designed to improve security, simplify compliance, and protect customer payment information during online transactions." } },
      { "@type": "Question", "name": "Can I accept payments online without a website?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Businesses can use hosted payment pages, payment links, and QR code payments to collect money online without needing a full ecommerce website." } },
      { "@type": "Question", "name": "What is the difference between a payment gateway and a hosted payment page?", "acceptedAnswer": { "@type": "Answer", "text": "A payment gateway is the technology that securely transmits transaction data. A hosted payment page is a ready-made secure checkout page that uses that payment infrastructure." } },
      { "@type": "Question", "name": "Can Merchant Solutions Corp help with payment links and CRM workflows?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Merchant Solutions Corp can help businesses deploy payment links, hosted payment pages, and CRM-based payment workflows. Through LeadJourney Agency, the company also supports funnel building, digital automation, and lead-to-payment systems." } }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://merchantsolutionscorp.com/" },
      { "@type": "ListItem", "position": 2, "name": "Online Payments", "item": "https://merchantsolutionscorp.com/online-payments" },
      { "@type": "ListItem", "position": 3, "name": "Ecommerce Payments", "item": "https://merchantsolutionscorp.com/ecommerce-payments" }
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

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Ecommerce Payment Processing &amp; Hosted Payment Solutions | Merchant Solutions Corp</title>
        <meta name="description" content="Accept payments online with secure ecommerce payment processing, hosted payment pages, QR code payments, and payment links with advanced fraud protection from Merchant Solutions Corp." />
        <meta name="keywords" content="ecommerce payment processing, hosted payment solutions, hosted payment page, online payment gateway, secure online payment processing, payment links for business, QR code payments, ecommerce merchant account, online credit card processing, fraud protection for ecommerce" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/ecommerce-payments" />
        <meta property="og:title" content="Ecommerce Payment Processing & Hosted Payment Solutions" />
        <meta property="og:description" content="Accept payments online with secure ecommerce payment processing, hosted payment pages, QR code payments, and payment links with advanced fraud protection from Merchant Solutions Corp." />
        <meta property="og:url" content="https://merchantsolutionscorp.com/ecommerce-payments" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500" data-testid="breadcrumb">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/online-payments" className="hover:text-purple-600 transition-colors">Online Payments</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gray-900 font-medium">Ecommerce Payments</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80" alt="Secure ecommerce payment processing and hosted payment solutions for online businesses" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl" data-testid="hero-h1">
            Ecommerce Payment Processing &amp; Hosted Payment Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl">
            Accept payments online securely, quickly, and from anywhere.
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl">
            Merchant Solutions Corp provides secure ecommerce payment processing, hosted payment pages, and payment links that help businesses accept credit cards, debit cards, ACH, and digital wallet payments without unnecessary complexity.
          </p>
          <p className="text-base text-gray-400 mb-10 max-w-3xl">
            Whether you operate an ecommerce store, a service-based business, a subscription model, or a company that sends invoices remotely, our <Link to="/online-payments" className="text-purple-300 hover:text-white underline">online payment solutions</Link> help you create a secure checkout experience with advanced fraud protection and flexible payment tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="hero-quote-btn">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6" onClick={openCalendly} data-testid="hero-demo-btn">
              Book a Demo
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-purple-400" /> PCI Compliant</span>
            <span className="flex items-center gap-1.5"><Globe className="h-4 w-4 text-purple-400" /> Hosted Payment Pages</span>
            <span className="flex items-center gap-1.5"><QrCode className="h-4 w-4 text-purple-400" /> QR Code Payments</span>
            <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-purple-400" /> Fraud Protection</span>
          </div>
        </div>
      </section>

      {/* HOW ECOMMERCE PAYMENT PROCESSING WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="how-it-works-h2">How Ecommerce Payment Processing Works</h2>
              <p className="text-lg text-gray-700 mb-4">
                Ecommerce <Link to="/payment-processing-pricing" className="text-purple-600 hover:underline">payment processing</Link> allows businesses to accept online payments through websites, landing pages, hosted checkout forms, and digital payment links.
              </p>
              <p className="text-gray-700 mb-6">
                When a customer submits payment information online, the transaction moves through a secure payment gateway, is encrypted for safety, and is then sent to the processor and issuing bank for approval. Once approved, the funds are routed into the merchant account and settled into the business bank account.
              </p>
              <p className="text-gray-700 font-semibold mb-4">This process gives businesses the ability to:</p>
              <div className="space-y-3 mb-6">
                {['Accept payments 24/7', 'Process sales from any device', 'Offer secure online checkout', 'Support remote billing and invoicing', 'Reduce missed sales opportunities'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600">
                For growing businesses, ecommerce payment processing is no longer optional. It is a core part of modern sales, customer convenience, and revenue growth.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
              <div className="space-y-5">
                {[
                  { icon: Globe, step: '1', title: 'Customer Pays Online', desc: 'Customer enters payment details on your website, hosted page, or payment link.' },
                  { icon: Lock, step: '2', title: 'Secure Gateway Processing', desc: 'Transaction data is encrypted and sent through the payment gateway for authorization.' },
                  { icon: Shield, step: '3', title: 'Bank Authorization', desc: 'The issuing bank approves or declines the transaction in real time.' },
                  { icon: CreditCard, step: '4', title: 'Funds Settled', desc: 'Approved funds are routed to your merchant account and deposited into your bank.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-200">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Step {item.step}: {item.title}</p>
                      <p className="text-gray-600 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURE ECOMMERCE PAYMENT GATEWAY SOLUTIONS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="gateway-h2">Secure Ecommerce Payment Gateway Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A payment gateway is the technology that securely transfers online payment data from the customer to the processor. Merchant Solutions Corp offers secure online payment gateway solutions that help businesses accept payments through ecommerce stores, custom websites, landing pages, invoicing systems, and CRM workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CreditCard, title: 'Credit & Debit Card Acceptance', desc: 'Accept Visa, Mastercard, Discover, and American Express securely online.' },
              { icon: FileText, title: 'ACH & Bank Transfers', desc: 'Support ACH payments and direct bank transfers for lower processing costs.' },
              { icon: Smartphone, title: 'Mobile-Friendly Checkout', desc: 'Optimized checkout experiences that work seamlessly on all mobile devices.' },
              { icon: Clock, title: 'Recurring Billing', desc: 'Set up subscription payments and automated recurring billing schedules.' },
              { icon: Users, title: 'Customer-Friendly Forms', desc: 'Clean, professional online payment forms that build customer trust.' },
              { icon: Layers, title: 'Website Integrations', desc: 'Connect with websites, custom applications, and ecommerce platforms.' },
            ].map((f, i) => (
              <Card key={i} className="border hover:border-purple-300 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <f.icon className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-gray-600 text-center mt-8 max-w-3xl mx-auto">
            A secure payment gateway is one of the most important parts of ecommerce payment processing because it protects customer data and helps businesses maintain trust during checkout.
          </p>
        </div>
      </section>

      {/* HOSTED PAYMENT PAGES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="hosted-pages-h2">Hosted Payment Pages for Easy Online Checkout</h2>
              <p className="text-lg text-gray-700 mb-4">
                Hosted payment pages are one of the fastest and safest ways to accept online payments.
              </p>
              <p className="text-gray-700 mb-6">
                Instead of collecting card data directly on your website, the customer is redirected to a secure hosted checkout page that is managed through the payment infrastructure. This reduces the need for custom development and simplifies PCI compliance.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Hosted payment solutions are ideal for businesses that want:</p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {['A secure checkout page', 'Faster setup', 'Lower development costs', 'Mobile-optimized payments', 'Simplified compliance', 'Professional payment experience'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-700 font-semibold mb-3">Hosted payment pages work especially well for:</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Service businesses', 'Consultants', 'Online sellers', 'Medical providers', 'Nonprofits', 'Invoice & deposit collection', 'Custom checkout alternatives'].map((item, i) => (
                  <span key={i} className="text-xs bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full border border-purple-100">{item}</span>
                ))}
              </div>
              <p className="text-gray-600">
                With Merchant Solutions Corp, hosted payment pages help businesses get online quickly while keeping transactions secure and conversion-friendly.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80" alt="Secure ecommerce payment processing and hosted payment solutions for online businesses" className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT LINKS AND QR CODE PAYMENTS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1594025741613-c039c2c3bffa?w=800&q=80" alt="Payment links and QR code payment solutions for businesses" className="w-full h-[420px] object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="payment-links-h2">Payment Links and QR Code Payments</h2>
              <p className="text-lg text-gray-700 mb-4">
                Not every business needs a full ecommerce website to accept online payments. Payment links and QR code payments make it easy to collect funds digitally through a secure checkout page.
              </p>
              <p className="text-gray-700 font-semibold mb-3">A payment link can be sent by:</p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {['Email', 'Text message', 'Invoice', 'CRM workflow', 'Chat message', 'Proposal or estimate'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <Mail className="h-4 w-4 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mb-4">QR code payments work the same way. A business creates a QR code that opens a secure payment page when scanned on a mobile device.</p>
              <p className="text-gray-700 font-semibold mb-3">These tools are ideal for:</p>
              <div className="flex flex-wrap gap-2">
                {['Remote payments', 'Digital invoices', 'Service deposits', 'Event registrations', 'Fundraiser donations', 'Professional service billing', 'B2B collections', 'Contractors & field service'].map((item, i) => (
                  <span key={i} className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full border border-blue-100">{item}</span>
                ))}
              </div>
              <p className="text-gray-600 mt-6">
                Payment links and QR payments give businesses a fast and flexible way to collect money without forcing customers through a traditional checkout site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANCED FRAUD PROTECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="fraud-protection-h2">Advanced Fraud Protection for Online Payments</h2>
              <p className="text-lg text-gray-300 mb-4">
                Online payments create opportunity, but they also create risk. Merchant Solutions Corp helps businesses protect transactions with advanced fraud protection tools designed to detect suspicious activity and reduce losses before they happen.
              </p>
              <p className="text-gray-400 font-semibold mb-4">Our fraud prevention features can include:</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  'AVS address verification', 'CVV verification', 'Real-time transaction monitoring', 'Risk scoring',
                  'Suspicious activity flagging', 'Velocity checks', 'Device & location review', 'Chargeback reduction support'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <Shield className="h-4 w-4 text-purple-400 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-400">
                A secure ecommerce payment system should not only accept payments. It should help protect your business while improving approval rates for legitimate buyers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: AlertTriangle, title: 'Fraud Detection', desc: 'Real-time monitoring flags suspicious transactions', color: 'from-red-500 to-red-700' },
                { icon: Shield, title: 'Data Encryption', desc: 'End-to-end encryption on all payment data', color: 'from-purple-500 to-purple-700' },
                { icon: Lock, title: 'PCI Compliance', desc: 'Hosted pages reduce your compliance burden', color: 'from-blue-500 to-blue-700' },
                { icon: BarChart3, title: 'Risk Analytics', desc: 'Score and review transactions automatically', color: 'from-indigo-500 to-indigo-700' },
              ].map((item, i) => (
                <div key={i} className={`bg-gradient-to-br ${item.color} rounded-2xl p-5 text-white`}>
                  <item.icon className="h-7 w-7 mb-3 opacity-80" />
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs opacity-80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACCEPT MULTIPLE PAYMENT METHODS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="payment-methods-h2">Accept Multiple Payment Methods Online</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Today's customers expect payment flexibility. Your business should be able to accept the payment methods your customers already prefer.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { label: 'Visa', icon: CreditCard },
              { label: 'Mastercard', icon: CreditCard },
              { label: 'Discover', icon: CreditCard },
              { label: 'American Express', icon: CreditCard },
              { label: 'Debit Cards', icon: CreditCard },
              { label: 'ACH Payments', icon: FileText },
              { label: 'Digital Wallets', icon: Smartphone },
              { label: 'Recurring Payments', icon: Clock },
              { label: 'Invoiced Payments', icon: FileText },
              { label: 'Payment Links', icon: Globe },
            ].map((method, i) => (
              <div key={i} className="flex flex-col items-center bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all">
                <method.icon className="h-8 w-8 text-purple-500 mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">{method.label}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-center mt-8 max-w-2xl mx-auto">
            Offering multiple payment methods can improve conversion rates, reduce checkout abandonment, and give customers more confidence to complete their purchases.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE MSC */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="why-msc-h2">Why Choose Merchant Solutions Corp for Ecommerce Payments</h2>
              <p className="text-lg text-gray-700 mb-4">
                Many online payment providers offer a gateway. Merchant Solutions Corp helps businesses build a complete online payment system.
              </p>
              <p className="text-gray-700 mb-6">
                We do more than help you <Link to="/how-to-accept-credit-card-payments" className="text-purple-600 hover:underline">accept credit card payments</Link>. We help you choose the right ecommerce payment flow, connect the right tools, and build a reliable payment system that supports long-term growth.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Businesses choose Merchant Solutions Corp because we help with:</p>
              <div className="space-y-3 mb-6">
                {[
                  'Secure ecommerce payment processing',
                  'Hosted payment page deployment',
                  'Payment link and QR payment setup',
                  'Merchant account support',
                  'Advanced fraud protection',
                  'CRM payment integration',
                  'Checkout optimization',
                  'Personalized support instead of generic big-box service',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600">
                Unlike many large providers, we focus on helping businesses create payment systems that match their actual workflow instead of forcing them into a one-size-fits-all model. That means better support, better flexibility, and a more tailored ecommerce payment solution.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/889xwcgb_IT%20tech_installer.png" alt="MSC ecommerce payment support specialist" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL MARKETING, FUNNEL BUILDING, CRM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Target, title: 'Funnel Building', desc: 'Convert traffic into paying customers', color: 'from-purple-500 to-purple-700' },
                  { icon: Megaphone, title: 'Lead Capture', desc: 'Automated lead capture workflows', color: 'from-blue-500 to-blue-700' },
                  { icon: Zap, title: 'CRM Automation', desc: 'Payment forms inside CRM workflows', color: 'from-indigo-500 to-indigo-700' },
                  { icon: TrendingUp, title: 'Conversion Optimization', desc: 'Improve online sales performance', color: 'from-purple-600 to-pink-600' },
                ].map((item, i) => (
                  <div key={i} className={`bg-gradient-to-br ${item.color} rounded-2xl p-5 text-white`}>
                    <item.icon className="h-7 w-7 mb-3 opacity-80" />
                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs opacity-80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="marketing-h2">Digital Marketing, Funnel Building, and CRM Payment Automation</h2>
              <p className="text-lg text-gray-700 mb-4">
                Merchant Solutions Corp also helps businesses go beyond payment collection. Through our sister company, LeadJourney Agency, we help businesses connect their <Link to="/payment-processing-pricing" className="text-purple-600 hover:underline">payment processing solutions</Link> with digital marketing, funnel building, workflows, and CRM automation.
              </p>
              <p className="text-gray-700 font-semibold mb-3">Our digital marketing and automation support can include:</p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {['Funnel building', 'Landing page design', 'Lead capture workflows', 'CRM integrations', 'Payment form integration', 'Automated follow-up sequences', 'Conversion-focused campaigns', 'Online sales optimization'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600">
                By combining payment technology with digital marketing and CRM workflows, Merchant Solutions Corp and LeadJourney Agency help businesses create a more scalable online sales engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12" data-testid="faq-h2">Frequently Asked Questions</h2>
          <FAQItem question="What is ecommerce payment processing?" answer="Ecommerce payment processing is the system that allows businesses to accept online payments through websites, hosted checkout pages, payment links, and digital invoices." />
          <FAQItem question="What is a hosted payment page?" answer="A hosted payment page is a secure checkout page managed by the payment provider so the business does not need to store sensitive card data on its own site." />
          <FAQItem question="Are hosted payment pages secure?" answer="Yes. Hosted payment pages are designed to improve security, simplify compliance, and protect customer payment information during online transactions." />
          <FAQItem question="Can I accept payments online without a website?" answer="Yes. Businesses can use hosted payment pages, payment links, and QR code payments to collect money online without needing a full ecommerce website." />
          <FAQItem question="What is the difference between a payment gateway and a hosted payment page?" answer="A payment gateway is the technology that securely transmits transaction data. A hosted payment page is a ready-made secure checkout page that uses that payment infrastructure." />
          <FAQItem question="Can Merchant Solutions Corp help with payment links and CRM workflows?" answer="Yes. Merchant Solutions Corp can help businesses deploy payment links, hosted payment pages, and CRM-based payment workflows. Through LeadJourney Agency, we also support funnel building, digital automation, and lead-to-payment systems." />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="cta-h2">Start Accepting Payments Online with Confidence</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Whether you need a secure ecommerce payment gateway, a hosted payment page, or payment links with fraud protection, Merchant Solutions Corp can help you launch the right solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="cta-quote-btn">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" onClick={openCalendly} data-testid="cta-demo-btn">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* OPTIONAL BOTTOM CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Need a Secure Online Payment Solution That Fits Your Business?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            From hosted payment pages to ecommerce gateways, payment links, and CRM-integrated checkout systems, Merchant Solutions Corp helps businesses build secure online payment systems that are ready to scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-5" onClick={() => setShowFormModal(true)} data-testid="bottom-pricing-btn">
              Request Pricing
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-5" onClick={openCalendly} data-testid="bottom-specialist-btn">
              Speak With a Specialist
            </Button>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 text-center mb-4">Related Pages</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Online Payments', path: '/online-payments' },
              { label: 'Merchant Services', path: '/merchant-services' },
              { label: 'Credit Card Processing', path: '/credit-card-processing' },
              { label: 'Payment Processing Solutions', path: '/payment-processing-pricing' },
              { label: 'Best POS for Small Business', path: '/best-pos-for-small-business' },
              { label: 'Best POS System for Retail', path: '/best-pos-system-for-retail' },
              { label: 'Restaurant POS System Guide', path: '/restaurant-pos-system-guide' },
              { label: 'How to Accept Credit Card Payments', path: '/how-to-accept-credit-card-payments' },
            ].map((link, i) => (
              <Link key={i} to={link.path} className="text-sm text-purple-600 bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM MODAL */}
      {showFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowFormModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowFormModal(false)} className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors" data-testid="close-form-modal">&#x2715;</button>
            <iframe src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" className="w-full h-[80vh] border-0 rounded-2xl" title="Get a Quote" />
          </div>
        </div>
      )}
    </div>
  );
}
