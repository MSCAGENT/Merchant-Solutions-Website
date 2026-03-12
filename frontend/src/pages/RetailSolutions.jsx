import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ShoppingCart, Wine, Store, Shirt,
  BarChart3, Shield, Users, Package, CreditCard,
  Monitor, Receipt, ScanBarcode, Layers, Zap,
  Lock, Headphones, ChevronRight, Tag,
  Scale, Clock, Truck, Cigarette,
  Gift, Percent, FileText, Database,
  Wifi, WifiOff, Smartphone, CircleDollarSign,
  ArrowRight, MapPin, Settings, BookOpen,
  Leaf, Box, AlertTriangle, TrendingUp
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const RetailSolutions = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  useEffect(() => {
    if (!showDemoModal) return;
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const s = document.createElement('script');
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.head.appendChild(s);
    }
  }, [showDemoModal]);

  const retailSupports = [
    'Barcode scanning and UPC lookup',
    'Real-time inventory control',
    'Vendor management',
    'Purchase order reconciliation',
    'Stock alerts and reorder triggers',
    'Category-level reporting',
    'Dual pricing and cash discount programs',
    'EMV and contactless payment processing'
  ];

  const cloverBestFor = ['Clothing stores', 'Gift shops', 'Boutiques', 'Specialty retail', 'Bookstores'];
  const cloverFeatures = [
    'Variant and size tracking',
    'Barcode scanner support',
    'Loyalty and rewards programs',
    'Integrated credit card processing',
    'Mobile POS options',
    'Inventory alerts'
  ];

  const exatouchBestFor = ['Grocery stores', 'Convenience stores', 'Bodegas', 'Liquor stores', 'Smoke shops', 'CBD stores', 'Gas station retail'];
  const exatouchFeatures = [
    'High-speed barcode scanning',
    'Scale integration for grocery',
    'Age verification prompts',
    'Specialty tax configuration',
    'Scan data integration',
    'Vendor-level reporting',
    'Real-time stock room tracking'
  ];

  const squareBestFor = ['Small retail', 'Pop-up stores', 'New businesses', 'Apparel shops', 'Bookstores'];
  const squareFeatures = [
    'Simple product catalog setup',
    'Barcode scanning',
    'Online store integration',
    'Flat-rate pricing',
    'Fast hardware deployment'
  ];

  const inventoryFeatures = [
    { icon: ScanBarcode, text: 'Track SKUs and UPC codes' },
    { icon: MapPin, text: 'Monitor multi-location inventory' },
    { icon: FileText, text: 'Generate purchase orders' },
    { icon: TrendingUp, text: 'Analyze profit margins' },
    { icon: AlertTriangle, text: 'Identify slow-moving items' },
    { icon: Users, text: 'Manage vendor performance' }
  ];

  const paymentTypes = [
    'Credit and debit cards',
    'Tap-to-pay',
    'Apple Pay and Google Pay',
    'EBT (where supported)',
    'Cash discount programs',
    'Dual pricing models',
    'Offline processing'
  ];

  const merchantBenefits = [
    'Faster checkout',
    'Fewer reconciliation errors',
    'Clean daily reporting',
    'Next-day funding options'
  ];

  const retailNiches = [
    { name: 'Grocery Stores', icon: ShoppingCart },
    { name: 'Convenience Stores', icon: Store },
    { name: 'Bodegas', icon: Box },
    { name: 'Clothing & Apparel', icon: Shirt },
    { name: 'Smoke Shops', icon: Cigarette },
    { name: 'CBD Retailers', icon: Leaf },
    { name: 'Liquor Stores', icon: Wine },
    { name: 'Gift Shops', icon: Gift },
    { name: 'Bookstores', icon: BookOpen },
    { name: 'Specialty Retail', icon: Tag }
  ];

  const whyMSC = [
    { icon: MapPin, text: 'Nationwide installation across all 50 states' },
    { icon: Database, text: 'Inventory database configuration' },
    { icon: ScanBarcode, text: 'Barcode and peripheral setup' },
    { icon: Settings, text: 'Tax and compliance configuration' },
    { icon: Users, text: 'Staff training and go-live support' },
    { icon: Headphones, text: 'Ongoing merchant account management' }
  ];

  const faqs = [
    { q: 'What is the best POS system for grocery stores?', a: 'Exatouch is ideal for grocery and convenience stores due to scale integration and advanced inventory tools.' },
    { q: 'Do you support smoke shops and CBD stores?', a: 'Yes. We provide compliant retail payment processing solutions for specialty retailers.' },
    { q: 'Can I use barcode scanners with these systems?', a: 'Yes. All platforms support UPC barcode scanning and SKU tracking.' },
    { q: 'Do you offer dual pricing or cash discount programs?', a: 'Yes. We configure compliant dual pricing and cash discount setups.' },
    { q: 'Is installation included?', a: 'Yes. We provide full configuration, training, and go-live support nationwide.' }
  ];

  const seoKeywords = [
    'retail POS system', 'retail payment processing', 'grocery store POS',
    'convenience store POS', 'liquor store POS', 'smoke shop POS',
    'CBD store POS', 'clothing store POS', 'barcode scanning POS',
    'retail inventory management system', 'UPC barcode tracking',
    'dual pricing POS', 'cash discount retail', 'multi-location retail POS'
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Retail Payment Systems | Get a Retail POS for $0 | Merchant Solutions Corp</title>
        <meta property="og:title" content="Retail Payment Systems | Get a Retail POS for $0 | Merchant Solutions Corp" />
        <meta property="og:description" content="Retail POS systems for grocery, convenience, smoke shops, CBD, clothing & gift stores. Barcode scanning, inventory tracking, and payment processing installed nationwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/retail-payment-solutions" />
        <meta name="description" content="Retail POS systems for grocery, convenience, smoke shops, CBD, clothing & gift stores. Barcode scanning, inventory tracking, and payment processing installed nationwide." />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/retail-payment-solutions" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Retail Payment Solutions","serviceType":"Retail Payment Processing and POS Systems","provider":{"@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com"},"areaServed":"United States","url":"https://merchantsolutionscorp.com/retail-payment-solutions","description":"Payment processing and POS solutions tailored for retail businesses of all sizes."})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://merchantsolutionscorp.com/"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://merchantsolutionscorp.com/industries/restaurants"},{"@type":"ListItem","position":3,"name":"Retail","item":"https://merchantsolutionscorp.com/retail-payment-solutions"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com","logo":"https://customer-assets.emergentagent.com/job_merchant-central-11/artifacts/vmzehzol_MSC_1080x560.png","sameAs":["https://www.facebook.com/merchantsolutionscorp/","https://www.instagram.com/merchant_solutions_corp","https://www.linkedin.com/company/merchantsolutionscorp/","https://www.youtube.com/merchantsolutionscorp"]})}</script>
      </Helmet>
      {/* Hero Section with Video */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden" data-testid="retail-hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/p0m4hwu3_Square%20for%20Retail.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/65 to-blue-900/55" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl">
            <p className="text-sm md:text-base uppercase tracking-widest text-purple-300 font-semibold mb-4">For Busy Entrepreneurs</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg" data-testid="hero-h1">
              Retail Payment Processing Solutions
            </h1>
            <p className="text-xl text-purple-200 font-medium mb-3">
              Clover, Exatouch & Square for Grocery, Convenience, Apparel & Specialty Stores
            </p>
            <p className="text-lg text-purple-100 mb-3 max-w-3xl mx-auto">
              Merchant Solutions Corp delivers complete retail payment solutions with integrated POS systems, barcode scanning, and real-time inventory management.
            </p>
            <p className="text-base text-purple-200/80 mb-8 max-w-2xl mx-auto">
              Designed for inventory-driven businesses that require speed, accuracy, and reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setShowQuoteModal(true)} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-quote-btn">
                Get a Retail Quote
              </Button>
              <Button size="lg" onClick={() => setShowDemoModal(true)} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-6" data-testid="hero-demo-btn">
                Schedule a Live Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Built for High-Volume */}
      <section className="py-20 bg-white" data-testid="high-volume-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Built for High-Volume Retail Businesses</h2>
              <p className="text-lg text-gray-600 mb-2">If your store depends on UPC barcodes, SKU tracking, and rapid checkout, you need more than a basic terminal.</p>
              <p className="text-lg text-gray-700 font-semibold mb-6">Our retail POS systems support:</p>
              <div className="space-y-3">
                {retailSupports.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-purple-600 font-bold mt-8 text-lg">Everything syncs in one system.</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1601602364439-591bc32e912e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwyfHxyZXRhaWwlMjBzdG9yZSUyMGJhcmNvZGUlMjBzY2FubmluZyUyMGNoZWNrb3V0JTIwY291bnRlciUyMG1vZGVybnxlbnwwfHx8fDE3NzIzNDEzOTd8MA&ixlib=rb-4.1.0&q=85"
                alt="Retail barcode scanning and POS checkout system"
                className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* POS Platforms Header */}
      <section className="pt-20 pb-4 bg-gray-50" data-testid="platforms-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Retail POS Platforms We Offer</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">We install and support three powerful retail POS systems nationwide.</p>
        </div>
      </section>

      {/* Clover Section */}
      <section className="py-16 bg-gray-50" data-testid="clover-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Monitor className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Clover Retail POS</h3>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Best for:</p>
                <div className="flex flex-wrap gap-2">
                  {cloverBestFor.map((item, i) => (
                    <span key={i} className="bg-green-50 text-green-700 text-sm font-medium px-3 py-1.5 rounded-full border border-green-200">{item}</span>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Features include:</p>
                <div className="space-y-2.5">
                  {cloverFeatures.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm border-t pt-4">
                Clover is ideal for retailers seeking a modern checkout experience with strong reporting tools.
              </p>
              <Link to="/pos/clover" className="inline-flex items-center gap-1.5 text-green-600 font-semibold text-sm mt-4 hover:text-green-700 transition-colors">
                Learn more about Clover <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1765009433753-c7462637d21f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGJvdXRpcXVlJTIwc3RvcmUlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwwfHx8fDE3NzIzNDEzODR8MA&ixlib=rb-4.1.0&q=85"
                alt="Modern clothing store interior — ideal for Clover POS"
                className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Exatouch Section */}
      <section className="py-16 bg-gray-50" data-testid="exatouch-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1760463921642-eef64776c3bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwyfHxncm9jZXJ5JTIwc3RvcmUlMjBpbnRlcmlvciUyMHByb2R1Y2UlMjBzdXBlcm1hcmtldHxlbnwwfHx8fDE3NzIyMzg3Mjd8MA&ixlib=rb-4.1.0&q=85"
                alt="Grocery store interior — ideal for Exatouch POS"
                className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Exatouch POS for Grocery & Convenience</h3>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Best for:</p>
                <div className="flex flex-wrap gap-2">
                  {exatouchBestFor.map((item, i) => (
                    <span key={i} className="bg-emerald-50 text-emerald-700 text-sm font-medium px-3 py-1.5 rounded-full border border-emerald-200">{item}</span>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Exatouch provides:</p>
                <div className="space-y-2.5">
                  {exatouchFeatures.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm border-t pt-4">
                This system is built for high-volume retail environments requiring deep inventory control.
              </p>
              <Link to="/pos/exatouch" className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold text-sm mt-4 hover:text-emerald-700 transition-colors">
                Learn more about Exatouch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Square Section */}
      <section className="py-16 bg-gray-50" data-testid="square-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Monitor className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Square Retail POS</h3>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Best for:</p>
                <div className="flex flex-wrap gap-2">
                  {squareBestFor.map((item, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-full border border-blue-200">{item}</span>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Square offers:</p>
                <div className="space-y-2.5">
                  {squareFeatures.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm border-t pt-4">
                Ideal for retailers that want quick setup with scalable features.
              </p>
              <Link to="/pos/square" className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm mt-4 hover:text-blue-700 transition-colors">
                Learn more about Square <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1747383432385-368f15997d43?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwcmV0YWlsJTIwcG9wLXVwJTIwc3RvcmUlMjBhcHBhcmVsfGVufDB8fHx8MTc3MjM0MTQwNHww&ixlib=rb-4.1.0&q=85"
                alt="Small retail clothing shop — ideal for Square POS"
                className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Management */}
      <section className="py-20 bg-white" data-testid="inventory-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1627915589334-14a3c3e3a741?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjB3YXJlaG91c2UlMjBpbnZlbnRvcnklMjBzaGVsdmVzJTIwb3JnYW5pemVkJTIwc3RvY2t8ZW58MHx8fHwxNzcyMzQxNDExfDA&ixlib=rb-4.1.0&q=85"
                alt="Organized warehouse inventory shelves for retail"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Retail Inventory Management That Prevents Shrink</h2>
              <p className="text-lg text-gray-600 mb-6">Retail profitability depends on inventory accuracy.</p>
              <p className="text-gray-700 font-semibold mb-6">Our systems allow you to:</p>
              <div className="space-y-4">
                {inventoryFeatures.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-purple-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-purple-600 font-bold mt-8 text-lg">Stop guessing. Start managing inventory with data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Processing */}
      <section className="py-20 bg-slate-900 text-white" data-testid="payment-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Retail Payment Processing Built In</h2>
              <p className="text-slate-400 mb-6">Accept all major payment types:</p>
              <div className="space-y-3 mb-8">
                {paymentTypes.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-800/60 border border-slate-700/40 rounded-lg px-4 py-3">
                    <CreditCard className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 mt-2">Integrated retail merchant services provide:</h3>
              <div className="space-y-3 mb-8">
                {merchantBenefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-800/60 border border-slate-700/40 rounded-lg px-4 py-3">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6 mt-6">
                <p className="text-2xl font-bold text-blue-300 mb-1">One system. One deposit.</p>
                <p className="text-slate-400">Clean reporting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Retail Niches */}
      <section className="py-20 bg-white" data-testid="niches-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Designed for Retail Niches</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Our retail POS solutions are optimized for:</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {retailNiches.map((niche, i) => {
              const Icon = niche.icon;
              return (
                <div key={i} className="bg-gray-50 border-2 border-gray-100 hover:border-purple-500 rounded-xl p-5 text-center transition-all duration-300 hover:shadow-lg group" data-testid={`niche-${i}`}>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-600 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-sm font-semibold text-gray-800">{niche.name}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-gray-700 font-medium mt-10 text-lg">
            If your business relies on scanning UPC barcodes and managing active inventory, we deploy the right retail solution.
          </p>
        </div>
      </section>

      {/* Why MSC */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50" data-testid="why-msc-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Why Retailers Choose Merchant Solutions Corp</h2>
              <div className="space-y-4">
                {whyMSC.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-4 bg-white border-2 border-gray-200 hover:border-purple-500 rounded-xl px-5 py-4 transition-all duration-300 hover:shadow-md">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-purple-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-gray-600 mt-8 border-l-4 border-purple-500 pl-4">
                We combine retail POS installation and payment processing into one managed solution.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1764175760119-e1d342f95735?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxnaWZ0JTIwc2hvcCUyMGJvb2tzdG9yZSUyMHJldGFpbCUyMGludGVyaW9yJTIwc2hlbHZlc3xlbnwwfHx8fDE3NzIzNDEzOTB8MA&ixlib=rb-4.1.0&q=85"
                alt="Retail gift shop with organized shelves and inventory"
                className="w-full h-[450px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" data-testid="faq-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl border border-gray-200 px-6 overflow-hidden" data-testid={`faq-item-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-5 text-sm">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Upgrade Your Retail Store</h2>
          <p className="text-xl text-blue-100 mb-2">Get a fully installed POS with integrated payment processing.</p>
          <p className="text-lg text-blue-200 mb-10">Clover. Exatouch. Square. Installed the right way.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setShowQuoteModal(true)} className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" data-testid="cta-quote-btn">
              Get a Retail Quote
            </Button>
            <Button size="lg" onClick={() => setShowDemoModal(true)} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-6" data-testid="cta-demo-btn">
              Schedule Your Demo
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50" data-testid="seo-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-4">
            Merchant Solutions Corp provides retail payment processing solutions for grocery stores, convenience stores, liquor stores, smoke shops, CBD retailers, clothing stores, gift shops, bookstores, and specialty retail. We install and support Clover, Exatouch, and Square POS systems with barcode scanning, inventory management, dual pricing, cash discount programs, EMV and contactless payment processing, and nationwide installation with training and ongoing merchant account management.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {seoKeywords.map((keyword, i) => (
              <span key={i} className="text-xs text-gray-400 bg-gray-100 rounded px-2 py-1">{keyword}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Get Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowQuoteModal(false)} data-testid="quote-modal">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowQuoteModal(false)} className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors" data-testid="quote-modal-close">&#x2715;</button>
            <iframe src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" className="w-full h-[80vh] border-0 rounded-2xl" title="Get a Retail Quote" />
          </div>
        </div>
      )}

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowDemoModal(false)} data-testid="demo-modal">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-4 h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowDemoModal(false)} className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors" data-testid="demo-modal-close">&#x2715;</button>
            <div className="calendly-inline-widget w-full h-full" data-url="https://calendly.com/mscpayments/posdemo?hide_event_type_details=1&primary_color=5700ff" />
          </div>
        </div>
      )}
    </div>
  );
};

export default RetailSolutions;
