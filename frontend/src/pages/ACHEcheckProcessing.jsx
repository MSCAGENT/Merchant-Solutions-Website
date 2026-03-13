import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ChevronDown, ChevronRight, ArrowRight,
  Shield, Lock, Zap, BarChart3, Clock, Users, FileText,
  CreditCard, Globe, TrendingUp, Layers, RefreshCw, Building2
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-5 text-left" aria-expanded={open} data-testid={`faq-toggle-${question.slice(0, 20).replace(/\s+/g, '-').toLowerCase()}`}>
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

export default function ACHEcheckProcessing() {
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
    "name": "ACH Payment Processing",
    "provider": {
      "@type": "Organization",
      "name": "Merchant Solutions Corp",
      "url": "https://merchantsolutionscorp.com"
    },
    "serviceType": "ACH & eCheck Payment Processing",
    "description": "ACH and eCheck payment processing solutions for businesses accepting bank transfer payments and recurring billing.",
    "areaServed": "United States",
    "url": "https://merchantsolutionscorp.com/ach-echeck-processing"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is ACH payment processing?", "acceptedAnswer": { "@type": "Answer", "text": "ACH payment processing allows businesses to transfer funds electronically between bank accounts using the Automated Clearing House network." } },
      { "@type": "Question", "name": "What is an eCheck payment?", "acceptedAnswer": { "@type": "Answer", "text": "An eCheck is a digital version of a paper check that allows customers to pay directly from their bank account through an online payment system." } },
      { "@type": "Question", "name": "How long do ACH payments take to settle?", "acceptedAnswer": { "@type": "Answer", "text": "Most ACH payments settle within one to three business days depending on bank processing times." } },
      { "@type": "Question", "name": "Are ACH payments cheaper than credit cards?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. ACH payments generally have lower processing fees compared to credit card transactions." } }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://merchantsolutionscorp.com/" },
      { "@type": "ListItem", "position": 2, "name": "Payments & Processing", "item": "https://merchantsolutionscorp.com/solutions/payment-processing" },
      { "@type": "ListItem", "position": 3, "name": "ACH & eCheck Processing", "item": "https://merchantsolutionscorp.com/ach-echeck-processing" }
    ]
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Merchant Solutions Corp",
    "url": "https://merchantsolutionscorp.com",
    "logo": "https://merchantsolutionscorp.com/logo.png"
  };

  return (
    <div className="min-h-screen bg-white" data-testid="ach-echeck-page">
      <Helmet>
        <title>ACH &amp; eCheck Payment Processing | Merchant Solutions Corp</title>
        <meta name="description" content="Accept secure ACH payments and eCheck bank transfers online with low processing costs. Merchant Solutions Corp provides ACH merchant accounts, recurring billing, and fraud protection." />
        <meta name="keywords" content="ACH payment processing, eCheck payments, ACH merchant account, bank transfer payments, ACH processing for businesses, accept ACH payments online, electronic check payments, ACH payment gateway, ACH billing system, eCheck merchant services, ACH recurring payments, ACH invoicing payments" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/ach-echeck-processing" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="ACH & eCheck Payment Processing for Businesses" />
        <meta property="og:description" content="Accept secure ACH payments and eCheck bank transfers online with low processing costs and recurring billing solutions." />
        <meta property="og:url" content="https://merchantsolutionscorp.com/ach-echeck-processing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center text-sm text-gray-500" aria-label="Breadcrumb" data-testid="breadcrumb-nav">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
            <Link to="/solutions/payment-processing" className="hover:text-purple-600 transition-colors">Payments &amp; Processing</Link>
            <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
            <span className="text-gray-900 font-medium">ACH &amp; eCheck Processing</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 py-20 lg:py-28" data-testid="hero-section">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="hero-h1">
                ACH &amp; eCheck Payment Processing for Businesses
              </h1>
              <p className="text-lg text-gray-300 mb-4">
                ACH and eCheck payment processing allows businesses to accept bank-to-bank payments securely without relying on credit cards.
              </p>
              <p className="text-base text-gray-400 mb-4">
                Merchant Solutions Corp provides ACH merchant accounts and electronic check payment solutions that help businesses reduce payment processing fees while offering customers a convenient way to pay directly from their bank accounts.
              </p>
              <p className="text-base text-gray-400 mb-8">
                ACH payments are widely used for recurring billing, invoices, subscriptions, and large transactions where traditional credit card fees can become expensive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  data-testid="hero-get-pricing-btn"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg"
                  onClick={() => setShowFormModal(true)}
                >
                  Get ACH Pricing <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  data-testid="hero-schedule-demo-btn"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
                  onClick={openCalendly}
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1733503747506-773e56e4078f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800"
                alt="ACH payment processing and eCheck bank transfer payments for businesses"
                className="rounded-2xl shadow-2xl border border-white/10"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is ACH */}
      <section className="py-20 bg-white" data-testid="what-is-ach-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What is ACH Payment Processing?</h2>
            <p className="text-lg text-gray-600 mb-4">
              ACH payment processing uses the Automated Clearing House network to transfer funds electronically between bank accounts.
            </p>
            <p className="text-base text-gray-500">
              Instead of processing a credit card transaction, ACH payments debit funds directly from a customer's checking account and deposit them into the merchant's business account.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: RefreshCw, title: 'Recurring Subscriptions', desc: 'Automate subscription and membership billing with ACH debit authorization.' },
              { icon: Building2, title: 'B2B Payments', desc: 'Simplify business-to-business payments with direct bank transfers.' },
              { icon: FileText, title: 'Invoice Payments', desc: 'Allow customers to pay invoices directly from their bank accounts.' },
              { icon: Users, title: 'Membership Billing', desc: 'Collect recurring membership dues automatically through ACH.' },
              { icon: Layers, title: 'Payroll Services', desc: 'Process payroll payments through the ACH network efficiently.' },
              { icon: CreditCard, title: 'Rent & Utility Payments', desc: 'Accept rent and utility payments securely via bank transfer.' },
            ].map((item, idx) => (
              <Card key={idx} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Are eCheck Payments */}
      <section className="py-20 bg-gray-50" data-testid="echeck-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What Are eCheck Payments?</h2>
              <p className="text-lg text-gray-600 mb-4">
                eChecks (electronic checks) are digital versions of traditional paper checks. When a customer submits an eCheck payment, the system converts the banking information into an electronic transaction processed through the ACH network.
              </p>
              <p className="text-base text-gray-500 mb-6">
                This allows customers to pay directly from their bank account without writing a physical check.
              </p>
              <div className="space-y-3">
                {['Bank routing numbers', 'Checking account numbers', 'Online payment forms', 'Payment links', 'Invoices'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1734004691776-d7f04732c174?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800"
                alt="Electronic check payments and ACH bank transfers"
                className="rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white" data-testid="benefits-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">Benefits of ACH &amp; eCheck Processing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: 'Lower Processing Fees', desc: 'ACH transactions typically have lower fees than credit card payments, significantly reducing payment processing expenses.' },
              { icon: RefreshCw, title: 'Recurring Payment Automation', desc: 'Automate subscription payments, memberships, and monthly billing through ACH debit authorization.' },
              { icon: Shield, title: 'Reduced Chargebacks', desc: 'ACH payments tend to have fewer disputes compared to credit card transactions.' },
              { icon: Zap, title: 'Ideal for Large Transactions', desc: 'For higher ticket transactions, ACH payments eliminate large credit card processing fees.' },
              { icon: Globe, title: 'Reliable Bank Transfers', desc: 'The ACH network processes billions of transactions annually and is widely used across the U.S. banking system.' },
              { icon: Lock, title: 'Secure Processing', desc: 'Bank-level encryption and verification tools protect every ACH and eCheck transaction.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How ACH Payments Work */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white" data-testid="how-it-works-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">How ACH Payments Work</h2>
          <div className="space-y-0">
            {[
              { step: '1', text: 'The customer authorizes a bank account payment.' },
              { step: '2', text: 'The payment information is securely transmitted through the ACH network.' },
              { step: '3', text: 'The transaction is verified and processed through the banking system.' },
              { step: '4', text: 'Funds are transferred from the customer\'s bank account to the merchant account.' },
              { step: '5', text: 'The funds are deposited into the business bank account.' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-6 py-6 border-b border-white/10 last:border-b-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                  {item.step}
                </div>
                <p className="text-lg text-gray-300 pt-2">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8">Most ACH payments settle within 1-3 business days.</p>
        </div>
      </section>

      {/* Accept ACH Payments Online */}
      <section className="py-20 bg-white" data-testid="accept-ach-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Accept ACH Payments Online</h2>
            <p className="text-lg text-gray-600">
              Merchant Solutions Corp provides ACH solutions that allow businesses to accept bank payments through multiple channels.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: 'Hosted Payment Pages', desc: 'Secure, branded checkout pages for ACH payments.' },
              { icon: FileText, title: 'Online Checkout Forms', desc: 'Embed ACH payment forms directly on your website.' },
              { icon: Zap, title: 'Payment Links', desc: 'Send ACH payment links via email or SMS.' },
              { icon: BarChart3, title: 'Invoices', desc: 'Accept bank payments on invoices with one click.' },
              { icon: Users, title: 'CRM Payment Forms', desc: 'Integrate ACH payments into CRM workflows.' },
              { icon: RefreshCw, title: 'Recurring Subscription Billing', desc: 'Automate ACH billing for subscriptions.' },
            ].map((item, idx) => (
              <Card key={idx} className="border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <item.icon className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8">
            These options make it easy for customers to pay electronically without needing a credit card. Learn more about our{' '}
            <Link to="/ecommerce-payments" className="text-purple-600 font-semibold hover:underline">ecommerce payment solutions</Link>.
          </p>
        </div>
      </section>

      {/* ACH Recurring Billing */}
      <section className="py-20 bg-gray-50" data-testid="recurring-billing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6">ACH Recurring Billing &amp; Subscription Payments</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            ACH payments are ideal for recurring billing models. Recurring ACH billing allows businesses to automatically collect payments while reducing the risk of missed payments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {['SaaS companies', 'Membership organizations', 'Healthcare practices', 'Property management companies', 'Consulting firms', 'Service providers'].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-gray-200 flex items-center gap-3 hover:shadow-md transition-all">
                <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 bg-white" data-testid="security-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">ACH Payment Security &amp; Fraud Protection</h2>
              <p className="text-lg text-gray-600 mb-4">
                Security is critical when processing bank payments. Merchant Solutions Corp integrates fraud protection and verification tools to protect businesses and customers during ACH transactions.
              </p>
              <div className="space-y-4 mt-8">
                {[
                  { icon: Shield, text: 'Bank account verification' },
                  { icon: BarChart3, text: 'Transaction monitoring' },
                  { icon: Users, text: 'Identity verification' },
                  { icon: Lock, text: 'Fraud risk scoring' },
                  { icon: FileText, text: 'Payment authorization records' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Secure Processing</h3>
              <p className="text-gray-600">These tools help ensure ACH transactions are processed securely and reliably.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50" data-testid="industries-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6">Who Uses ACH &amp; eCheck Payment Processing?</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            ACH payments are used across many industries where businesses accept recurring payments or large invoices. These industries benefit from reduced transaction costs and simplified billing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Restaurants and hospitality',
              'Retail and ecommerce businesses',
              'Healthcare and medical offices',
              'Professional service firms',
              'Property management companies',
              'Contractors and service providers',
              'Membership organizations',
              'SaaS and subscription companies',
            ].map((industry, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-purple-300 transition-all text-center">
                <Building2 className="h-6 w-6 text-purple-500 mx-auto mb-3" />
                <p className="text-gray-800 font-medium text-sm">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MSC */}
      <section className="py-20 bg-white" data-testid="why-msc-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6">Why Businesses Choose Merchant Solutions Corp for ACH Processing</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Merchant Solutions Corp provides flexible ACH payment solutions that integrate with modern payment infrastructure. We help businesses deploy ACH payment systems that work seamlessly with their existing payment and invoicing processes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'ACH merchant account setup',
              'eCheck payment gateway integration',
              'Recurring ACH billing systems',
              'Payment link and invoice payments',
              'CRM and workflow payment automation',
              'Fraud monitoring and transaction reporting',
            ].map((service, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-5">
                <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm">
              See how ACH fits into our full suite of{' '}
              <Link to="/merchant-services" className="text-purple-600 font-semibold hover:underline">merchant services</Link>,{' '}
              <Link to="/online-payments" className="text-purple-600 font-semibold hover:underline">online payments</Link>, and{' '}
              <Link to="/credit-card-processing" className="text-purple-600 font-semibold hover:underline">credit card processing</Link> solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50 border-t border-gray-200" data-testid="internal-links-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Related Solutions</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Online Payments', path: '/online-payments' },
              { label: 'Ecommerce Payments', path: '/ecommerce-payments' },
              { label: 'Credit Card Processing', path: '/credit-card-processing' },
              { label: 'Merchant Services', path: '/merchant-services' },
              { label: 'Smart Payment Terminals', path: '/smart-payment-terminals' },
            ].map((link, idx) => (
              <Link key={idx} to={link.path} className="bg-white border border-gray-200 hover:border-purple-300 text-gray-700 hover:text-purple-600 px-4 py-2 rounded-full text-sm font-medium transition-all">
                {link.label} <ArrowRight className="inline h-3 w-3 ml-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white" itemScope itemType="https://schema.org/FAQPage" data-testid="faq-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <FAQItem question="What is ACH payment processing?" answer="ACH payment processing allows businesses to transfer funds electronically between bank accounts using the Automated Clearing House network." />
          <FAQItem question="What is an eCheck payment?" answer="An eCheck is a digital version of a paper check that allows customers to pay directly from their bank account through an online payment system." />
          <FAQItem question="How long do ACH payments take to settle?" answer="Most ACH payments settle within one to three business days depending on bank processing times." />
          <FAQItem question="Are ACH payments cheaper than credit cards?" answer="Yes. ACH payments generally have lower processing fees compared to credit card transactions." />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Start Accepting ACH &amp; eCheck Payments</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Merchant Solutions Corp helps businesses deploy secure ACH payment solutions that reduce transaction costs and simplify recurring billing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              data-testid="cta-get-pricing-btn"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-6 text-lg rounded-full shadow-lg"
              onClick={() => setShowFormModal(true)}
            >
              Get ACH Pricing <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              data-testid="cta-schedule-demo-btn"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg rounded-full"
              onClick={openCalendly}
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Form Modal */}
      {showFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowFormModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              data-testid="form-modal-close-btn"
              onClick={() => setShowFormModal(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600"
            >
              &#x2715;
            </button>
            <div className="p-2">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/DroGa2mUmc4u9f2lTQhI"
                style={{ width: '100%', height: '500px', border: 'none', borderRadius: '12px' }}
                title="ACH Pricing Request"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
