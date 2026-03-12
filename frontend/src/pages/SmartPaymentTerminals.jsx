import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ChevronDown, ChevronRight, ArrowRight,
  Smartphone, Wifi, Printer, CreditCard, Shield, Monitor,
  BarChart3, Zap, Users, ShoppingBag, UtensilsCrossed,
  Briefcase, Truck, QrCode, Nfc, Settings, Package,
  TabletSmartphone, Globe
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

export default function SmartPaymentTerminals() {
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
    "name": "Smart Payment Terminals",
    "provider": { "@type": "Organization", "name": "Merchant Solutions Corp" },
    "description": "Smart payment terminals including Sunmi and Verifone devices for secure credit card processing and POS integration.",
    "serviceType": "Payment Terminal Solutions",
    "url": "https://merchantsolutionscorp.com/smart-payment-terminals"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is a smart payment terminal?", "acceptedAnswer": { "@type": "Answer", "text": "A smart payment terminal is an advanced POS device that combines credit card processing with business management features such as reporting, inventory tracking, and mobile payment support." } },
      { "@type": "Question", "name": "What businesses use smart POS terminals?", "acceptedAnswer": { "@type": "Answer", "text": "Restaurants, retail stores, service businesses, and mobile merchants commonly use smart POS terminals to accept payments and manage transactions." } },
      { "@type": "Question", "name": "Do smart terminals support contactless payments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Smart payment terminals support NFC contactless payments including mobile wallets like Apple Pay and Google Pay." } }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://merchantsolutionscorp.com/" },
      { "@type": "ListItem", "position": 2, "name": "Hardware", "item": "https://merchantsolutionscorp.com/pos/payment-terminals-overview" },
      { "@type": "ListItem", "position": 3, "name": "Smart Payment Terminals", "item": "https://merchantsolutionscorp.com/smart-payment-terminals" }
    ]
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Merchant Solutions Corp",
    "url": "https://merchantsolutionscorp.com",
    "logo": "https://customer-assets.emergentagent.com/job_merchant-central-11/artifacts/vmzehzol_MSC_1080x560.png"
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Smart Payment Terminals | Sunmi V3, Verifone Victa &amp; Android POS Devices</title>
        <meta name="description" content="Discover modern smart payment terminals, including Sunmi V3, Sunmi V2, and Verifone Victa devices. Accept cards, contactless payments, and mobile wallets with secure Android POS technology." />
        <meta name="keywords" content="smart payment terminals, Android POS terminal, Sunmi V3 terminal, Sunmi V2 POS, Verifone Victa terminal, smart POS device, credit card processing terminal, POS terminal for business, restaurant smart terminal, mobile POS terminal, contactless payment terminal, tap to pay terminal" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/smart-payment-terminals" />
        <meta property="og:title" content="Smart Payment Terminals for Businesses | Merchant Solutions Corp" />
        <meta property="og:description" content="Discover modern smart payment terminals, including Sunmi V3, Sunmi V2, and Verifone Victa devices. Accept cards, contactless payments, and mobile wallets with secure Android POS technology." />
        <meta property="og:url" content="https://merchantsolutionscorp.com/smart-payment-terminals" />
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
            <Link to="/pos/payment-terminals-overview" className="hover:text-purple-600 transition-colors">Hardware</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gray-900 font-medium">Smart Payment Terminals</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white py-24 md:py-32 overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="hero-h1">
                Smart Payment Terminals for Modern Businesses
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Smart payment terminals combine the functionality of a traditional credit card machine with the power of modern POS technology.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Merchant Solutions Corp provides next-generation Android smart terminals designed to help businesses accept payments, manage transactions, and operate efficiently from a single device.
              </p>
              <p className="text-gray-300 font-semibold mb-3">These terminals support:</p>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {['Credit and debit cards', 'EMV chip payments', 'Contactless tap-to-pay', 'Mobile wallets', 'QR code payments', 'Digital receipts'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 mb-8">
                Smart terminals are widely used by restaurants, retail stores, service businesses, and mobile merchants who need flexible payment technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="hero-pricing-btn">
                  Request Terminal Pricing
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6" onClick={openCalendly} data-testid="hero-demo-btn">
                  Schedule a Demo
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1607609972246-a14762f20d3e?w=600&q=80"
                alt="Modern smart payment terminals including Sunmi V3 and Verifone Victa POS devices"
                className="rounded-2xl shadow-2xl w-full object-cover border border-purple-500/20"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT ARE SMART PAYMENT TERMINALS */}
      <section className="py-20 bg-white" data-testid="what-are-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="what-are-h2">What Are Smart Payment Terminals?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Smart payment terminals are advanced POS devices powered by Android or similar operating systems.
              </p>
              <p className="text-gray-700 mb-6">
                Unlike traditional credit card machines, smart terminals include touchscreen interfaces, app capabilities, wireless connectivity, and business management tools.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Smart POS terminals can handle multiple business functions including:</p>
              <div className="space-y-3">
                {[
                  { icon: CreditCard, label: 'Payment processing' },
                  { icon: Package, label: 'Inventory tracking' },
                  { icon: Printer, label: 'Digital receipts' },
                  { icon: Users, label: 'Customer management' },
                  { icon: BarChart3, label: 'Reporting and analytics' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4.5 w-4.5 text-purple-600" />
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6">These devices provide businesses with an all-in-one payment and operations platform.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: 'Android', label: 'Operating System', icon: TabletSmartphone },
                { val: 'NFC', label: 'Tap-to-Pay Ready', icon: Nfc },
                { val: '4G/WiFi', label: 'Connectivity', icon: Wifi },
                { val: 'Built-in', label: 'Receipt Printer', icon: Printer },
                { val: 'Apps', label: 'Ecosystem', icon: Settings },
                { val: 'EMV', label: 'Chip Card Support', icon: Shield },
              ].map((stat, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-200 hover:border-purple-200 transition-colors">
                  <stat.icon className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-purple-600">{stat.val}</div>
                  <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUNMI SMART TERMINALS */}
      <section className="py-20 bg-gray-50" data-testid="sunmi-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="sunmi-h2">Sunmi Smart Terminals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sunmi smart terminals are widely used across retail and restaurant environments due to their reliability, mobility, and Android-based platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Sunmi V3 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden" data-testid="sunmi-v3-card">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Sunmi V3 Smart Terminal</h3>
                <p className="text-purple-200 text-sm">Powerful handheld smart terminal for mobility and performance</p>
              </div>
              <div className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1631005551863-8168afd249e7?w=500&q=80"
                  alt="Sunmi V3 Android smart POS terminal for businesses"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                  loading="lazy"
                />
                <p className="text-gray-700 font-semibold mb-3">Key features include:</p>
                <div className="space-y-2 mb-5">
                  {['Android operating system', 'Built-in receipt printer', 'High-speed processor', '4G, Wi-Fi, and Bluetooth connectivity', 'Large touchscreen display', 'Contactless payment support'].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {f}
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 font-semibold mb-2">Ideal for:</p>
                <div className="flex flex-wrap gap-2">
                  {['Restaurants', 'Retail stores', 'Delivery businesses', 'Mobile merchants'].map((u, i) => (
                    <span key={i} className="text-xs bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full border border-purple-100 font-medium">{u}</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">This device allows staff to take payments anywhere in the store or at the table.</p>
              </div>
            </div>

            {/* Sunmi V2 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden" data-testid="sunmi-v2-card">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Sunmi V2 Smart POS</h3>
                <p className="text-indigo-200 text-sm">Versatile handheld POS with integrated printer and touchscreen</p>
              </div>
              <div className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1753199917594-e79ee1ba6f71?w=500&q=80"
                  alt="Sunmi V2 smart POS device for restaurants and retail"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                  loading="lazy"
                />
                <p className="text-gray-700 font-semibold mb-3">Key capabilities include:</p>
                <div className="space-y-2 mb-5">
                  {['Android POS environment', 'Barcode scanning capability', 'Built-in printer', 'Wireless payment acceptance', 'Inventory and sales tracking'].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-indigo-500 flex-shrink-0" /> {f}
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 font-semibold mb-2">Popular for:</p>
                <div className="flex flex-wrap gap-2">
                  {['Quick-service restaurants', 'Retail counters', 'Kiosks', 'Food trucks'].map((u, i) => (
                    <span key={i} className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full border border-indigo-100 font-medium">{u}</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">The Sunmi V2 provides a balance between portability and full POS functionality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFONE SMART TERMINALS */}
      <section className="py-20 bg-white" data-testid="verifone-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="verifone-h2">Verifone Smart Terminals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Verifone terminals are known globally for their reliability and secure payment infrastructure. Merchant Solutions Corp offers several devices from the Verifone Victa and V Series designed for modern payment environments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Verifone Victa */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white" data-testid="verifone-victa-card">
              <h3 className="text-2xl font-bold mb-2">Verifone Victa Series</h3>
              <p className="text-gray-400 mb-6">New generation of payment terminals for high-performance business environments</p>
              <img
                src="https://images.unsplash.com/photo-1664490697404-5c84e8829f49?w=500&q=80"
                alt="Verifone Victa smart payment terminal for retail and restaurants"
                className="w-full h-48 object-cover rounded-xl mb-6"
                loading="lazy"
              />
              <p className="text-gray-300 font-semibold mb-3">Features include:</p>
              <div className="space-y-2 mb-5">
                {['Advanced security architecture', 'Touchscreen interface', 'Android-based platform', 'High-speed transaction processing', 'Integrated payment applications'].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <p className="text-gray-300 font-semibold mb-2">Supports:</p>
              <div className="flex flex-wrap gap-2">
                {['Contactless payments', 'EMV chip cards', 'Mobile wallets', 'Digital receipts'].map((s, i) => (
                  <span key={i} className="text-xs bg-white/10 text-purple-300 px-3 py-1.5 rounded-full border border-purple-500/30 font-medium">{s}</span>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4">Commonly used in retail stores, restaurants, and service businesses.</p>
            </div>

            {/* Verifone V Series */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white" data-testid="verifone-v-series-card">
              <h3 className="text-2xl font-bold mb-2">Verifone V Series Payment Terminals</h3>
              <p className="text-gray-400 mb-6">Reliable countertop and portable terminals used by merchants worldwide</p>
              <img
                src="https://images.unsplash.com/photo-1716388008248-09c77a05606c?w=500&q=80"
                alt="Verifone V series payment terminal for businesses"
                className="w-full h-48 object-cover rounded-xl mb-6"
                loading="lazy"
              />
              <p className="text-gray-300 font-semibold mb-3">These terminals offer:</p>
              <div className="space-y-2 mb-5">
                {['Secure payment processing', 'Fast transaction approval', 'Robust encryption standards', 'NFC tap-to-pay capability', 'Compatibility with multiple POS systems'].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4">Businesses rely on Verifone terminals for stable, secure payment acceptance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS OF SMART PAYMENT TERMINALS */}
      <section className="py-20 bg-gray-50" data-testid="benefits-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="benefits-h2">Benefits of Smart Payment Terminals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Smart terminals provide several advantages over traditional credit card machines.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Truck, title: 'Mobility', desc: 'Staff can accept payments anywhere in the store, restaurant, or event space.' },
              { icon: Zap, title: 'Faster Transactions', desc: 'Modern processors and payment software reduce transaction time.' },
              { icon: Nfc, title: 'Contactless Payments', desc: 'Customers can pay quickly using mobile wallets and tap-to-pay cards.' },
              { icon: BarChart3, title: 'Integrated Business Tools', desc: 'Smart terminals often include built-in reporting, inventory tools, and sales analytics.' },
              { icon: Settings, title: 'App Ecosystems', desc: 'Many smart POS devices support apps that expand business functionality.' },
              { icon: Shield, title: 'Secure Processing', desc: 'Advanced encryption and EMV compliance protect every transaction.' },
            ].map((benefit, i) => (
              <Card key={i} className="border-2 border-transparent hover:border-purple-300 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT METHODS SUPPORTED */}
      <section className="py-20 bg-white" data-testid="payment-methods-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="payment-methods-h2">Payment Methods Supported</h2>
              <p className="text-lg text-gray-700 mb-6">Smart payment terminals support a wide range of payment methods including:</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: CreditCard, label: 'Visa' },
                  { icon: CreditCard, label: 'Mastercard' },
                  { icon: CreditCard, label: 'Discover' },
                  { icon: CreditCard, label: 'American Express' },
                  { icon: CreditCard, label: 'Debit cards' },
                  { icon: Smartphone, label: 'Mobile wallets' },
                  { icon: Nfc, label: 'NFC tap-to-pay' },
                  { icon: QrCode, label: 'QR code payments' },
                  { icon: Printer, label: 'Digital receipts' },
                ].map((method, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                    <method.icon className="h-4 w-4 text-purple-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{method.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6">Providing multiple payment options improves checkout speed and customer convenience.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Accepted Everywhere</h3>
              <p className="text-purple-100 mb-6">Smart terminals process all major payment types from a single device, eliminating the need for multiple machines.</p>
              <div className="space-y-4">
                {[
                  { title: 'EMV Chip', desc: 'Secure chip card insertion for verified transactions.' },
                  { title: 'Contactless / NFC', desc: 'Tap-to-pay with phones, watches, and cards.' },
                  { title: 'Magnetic Stripe', desc: 'Legacy swipe support for older cards.' },
                  { title: 'QR Codes', desc: 'Camera-based scanning for mobile payments.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-4">
                    <p className="font-bold text-sm">{item.title}</p>
                    <p className="text-xs text-purple-100">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMART TERMINALS FOR INDUSTRIES */}
      <section className="py-20 bg-gray-50" data-testid="industries-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="industries-h2">Smart Terminals for Restaurants, Retail &amp; Service Businesses</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Smart POS terminals are widely used across industries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: UtensilsCrossed, title: 'Restaurants', desc: 'Servers can take orders and accept payments directly at the table.', link: '/restaurant-payment-processing-services' },
              { icon: ShoppingBag, title: 'Retail Stores', desc: 'Staff can assist customers on the sales floor and process payments instantly.', link: '/retail-payment-solutions' },
              { icon: Briefcase, title: 'Service Businesses', desc: 'Contractors and technicians can accept payments on location.', link: '/professional-services-payment-processing-clover-pos' },
              { icon: Truck, title: 'Events & Mobile', desc: 'Portable terminals allow businesses to process payments anywhere.', link: '/food-trucks-pos' },
            ].map((ind, i) => (
              <Link key={i} to={ind.link} className="group">
                <Card className="h-full border-2 border-transparent hover:border-purple-400 hover:shadow-xl transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                      <ind.icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{ind.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{ind.desc}</p>
                    <span className="text-purple-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:underline">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <p className="text-gray-600 text-center mt-8">These devices eliminate the need for separate payment terminals and POS systems.</p>
        </div>
      </section>

      {/* WHY BUSINESSES CHOOSE MSC */}
      <section className="py-20 bg-white" data-testid="why-msc-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="why-msc-h2">Why Businesses Choose Merchant Solutions Corp</h2>
              <p className="text-lg text-gray-700 mb-6">
                Merchant Solutions Corp helps businesses deploy payment technology that improves efficiency and reduces payment friction.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Our services include:</p>
              <div className="space-y-3 mb-6">
                {[
                  { icon: CreditCard, label: 'Merchant account setup' },
                  { icon: Monitor, label: 'POS terminal deployment' },
                  { icon: Globe, label: 'Payment gateway integration' },
                  { icon: ShoppingBag, label: 'Ecommerce payment processing' },
                  { icon: Settings, label: 'Smart terminal configuration' },
                  { icon: Users, label: 'Merchant onboarding and training' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-purple-600" />
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>
              <p className="text-gray-600">We help businesses choose the right smart payment terminal based on their industry, payment volume, and operational needs.</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1758519289705-cf9fda8a9a3a?w=600&q=80"
                alt="Business accepting contactless payment with smart terminal"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50" itemScope itemType="https://schema.org/FAQPage" data-testid="faq-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12" data-testid="faq-h2">Frequently Asked Questions</h2>
          <FAQItem question="What is a smart payment terminal?" answer="A smart payment terminal is an advanced POS device that combines credit card processing with business management features such as reporting, inventory tracking, and mobile payment support." />
          <FAQItem question="What businesses use smart POS terminals?" answer="Restaurants, retail stores, service businesses, and mobile merchants commonly use smart POS terminals to accept payments and manage transactions." />
          <FAQItem question="Do smart terminals support contactless payments?" answer="Yes. Smart payment terminals support NFC contactless payments including mobile wallets like Apple Pay and Google Pay." />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="cta-h2">Upgrade to Smart Payment Technology</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Merchant Solutions Corp provides modern smart terminals that combine payment processing, POS functionality, and business management tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="cta-pricing-btn">
              Request Pricing
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" onClick={openCalendly} data-testid="cta-demo-btn">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-white border-t border-gray-200" data-testid="internal-links-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 text-center mb-4">Related Pages</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Merchant Services', path: '/merchant-services' },
              { label: 'Online Payments', path: '/ecommerce-payments' },
              { label: 'POS Systems', path: '/pos-systems' },
              { label: 'Restaurant POS', path: '/restaurant-payment-processing-services' },
              { label: 'Ingenico Terminals', path: '/pos/ingenico-terminals' },
              { label: 'Dejavoo Terminals', path: '/pos/dejavoo-terminals' },
              { label: 'Clover POS', path: '/clover-pos-system' },
              { label: 'Service Areas', path: '/service-areas' },
            ].map((link, i) => (
              <Link key={i} to={link.path} className="text-sm text-purple-600 bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM MODAL */}
      {showFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowFormModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowFormModal(false)} className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors" data-testid="close-form-modal">&#x2715;</button>
            <iframe src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" className="w-full h-[80vh] border-0 rounded-2xl" title="Request Terminal Pricing" />
          </div>
        </div>
      )}
    </div>
  );
}
