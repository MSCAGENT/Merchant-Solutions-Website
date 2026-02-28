import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ShoppingCart, Wine, Store, Cigarette,
  BarChart3, Shield, Users, Package, CreditCard,
  Monitor, Receipt, Repeat, Layers, Zap,
  Lock, Headphones, ChevronRight, Tag,
  Scale, ScanBarcode, Clock, Truck,
  UserCheck, Gift, Percent, FileText, Database,
  Wifi, WifiOff, Smartphone, CircleDollarSign,
  ChevronDown, ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const Exatouch = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [activeVertical, setActiveVertical] = useState('grocery');

  useEffect(() => {
    document.title = 'Exatouch POS System | Grocery, Liquor & Retail Point of Sale | Merchant Solutions Corp';
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = 'Exatouch POS by Electronic Payments — the all-in-one point of sale system built for grocery stores, liquor stores, convenience stores, smoke shops, and retail. Inventory management, age verification, scan data reporting, EMV & contactless payments. Free installation & training.';
    if (metaDesc) {
      metaDesc.setAttribute('content', content);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);

  useEffect(() => {
    if (!showDemoModal) return;
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const s = document.createElement('script');
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.head.appendChild(s);
    }
  }, [showDemoModal]);

  const verticals = {
    grocery: {
      icon: ShoppingCart,
      label: 'Grocery & Convenience',
      tagline: 'From weighing deli items to processing EBT — Exatouch handles it all.',
      image: 'https://images.unsplash.com/photo-1760463921642-eef64776c3bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwyfHxncm9jZXJ5JTIwc3RvcmUlMjBpbnRlcmlvciUyMHByb2R1Y2UlMjBzdXBlcm1hcmtldHxlbnwwfHx8fDE3NzIyMzg3Mjd8MA&ixlib=rb-4.1.0&q=85',
      features: [
        { title: 'Integrated Scale & Scanner', desc: 'Weigh deli items, produce, and salads with in-counter scales. Price by weight, volume, or label for fast checkout.' },
        { title: 'EBT & Non-EBT Transactions', desc: 'Process both EBT and non-EBT items within a single transaction — no need to split sales.' },
        { title: 'Cash Discounting', desc: 'Built-in cash discounting support helps offset credit card processing fees and increase margins.' },
        { title: 'Bottle Deposit & Coupons', desc: 'Handle bottle deposits and manufacturer coupons seamlessly during checkout.' },
        { title: 'Inventory by Case Breakdown', desc: 'Simplify stock counts with case-to-carton breakdown and precise real-time inventory data.' },
        { title: 'Promos & Lotto Tracking', desc: 'Create categories, track discounts, lotto sales, and payouts for easy reconciliation.' }
      ]
    },
    liquor: {
      icon: Wine,
      label: 'Liquor Stores',
      tagline: 'Uncork your store\'s potential with automatic age verification and smart inventory.',
      image: 'https://images.unsplash.com/photo-1758542113402-b46079642dc9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxiYXJjb2RlJTIwc2Nhbm5lciUyMGludmVudG9yeSUyMG1hbmFnZW1lbnQlMjB3YXJlaG91c2V8ZW58MHx8fHwxNzcyMjM4NzQ0fDA&ixlib=rb-4.1.0&q=85',
      features: [
        { title: 'Automatic Age Verification', desc: 'Mark age-sensitive items for prompted ID scanning — restrict sales to minors automatically.' },
        { title: 'Scan Data Integration', desc: 'Transmit sales data to manufacturers like RJ Reynolds and Philip Morris. Earn rebates up to $0.15/carton.' },
        { title: 'Specialty Tax Accounting', desc: 'Track and account for specialty taxes on alcohol products with built-in tax settings.' },
        { title: 'Category Management', desc: 'Organize products by Cognacs, Vodka, Wine (Reds/Whites), Scotch, Cordials, and more with custom categories.' },
        { title: 'Loyalty & Frequent Buyer', desc: 'Implement loyalty programs with frequent buyer discounts to build repeat business.' },
        { title: 'Vendor Management', desc: 'Manage vendors directly, generate purchase orders, and reconcile incoming deliveries in real-time.' }
      ]
    },
    retail: {
      icon: Store,
      label: 'Retail Stores',
      tagline: 'Supercharge your store\'s growth with a POS designed for modern retail.',
      image: 'https://images.unsplash.com/photo-1726137569854-ce11cc10cf67?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxQT1MlMjBzeXN0ZW0lMjByZXRhaWwlMjBjaGVja291dCUyMHRlcm1pbmFsfGVufDB8fHx8MTc3MjIzODcyMnww&ixlib=rb-4.1.0&q=85',
      features: [
        { title: 'Barcode Scanning & Labels', desc: 'Scan items for faster checkout. Print labels and tags on-site with customizable formats.' },
        { title: 'Custom Register Buttons', desc: 'Add and customize register buttons for your most popular items and categories.' },
        { title: 'Mobile Inventory on Tablet', desc: 'Use a tablet for mobile inventory counts on the floor — no need to be tied to the register.' },
        { title: 'EMV & Contactless Payments', desc: 'Accept chip cards, Apple Pay, Google Pay, and contactless payments securely.' },
        { title: 'Employee Management', desc: 'Create schedules, reconcile payroll, set access controls, and monitor employee performance.' },
        { title: 'Data-Driven Purchasing', desc: 'Make smart purchasing decisions based on sales reports, profit margins, and inventory analytics.' }
      ]
    },
    smoke: {
      icon: Cigarette,
      label: 'Smoke & Tobacco Shops',
      tagline: 'Maximize tobacco rebates and stay compliant with scan data reporting.',
      image: 'https://images.unsplash.com/photo-1740355668529-1d42931b6850?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxjb252ZW5pZW5jZSUyMHN0b3JlJTIwc21va2UlMjBzaG9wJTIwcmV0YWlsJTIwY291bnRlcnxlbnwwfHx8fDE3NzIyMzg3Mzh8MA&ixlib=rb-4.1.0&q=85',
      features: [
        { title: 'Scan Data Rebates', desc: 'Earn up to $0.15/carton through manufacturer rebate programs with automatic sales data transmission.' },
        { title: 'Age Verification Prompts', desc: 'Automatic prompts for age-restricted products — scan or key customer licenses for compliance.' },
        { title: 'Manufacturer Incentives', desc: 'Leverage incentives from leading manufacturers like RJ Reynolds and Philip Morris.' },
        { title: 'Brand-Level Reporting', desc: 'Analyze sales by brand, tobacco type, packs vs. cartons — identify top sellers and zero-movement items.' },
        { title: 'Multi-Pack Promotions', desc: 'Set up multi-pack deals, BOGO offers, and brand loyalty discounts to drive volume.' },
        { title: 'Inventory Optimization', desc: 'Base inventory orders off report data to eliminate zero-movement items and reduce overstock.' }
      ]
    }
  };

  const coreFeatures = [
    { icon: Monitor, title: 'Easy-to-Use Register', desc: 'Intuitive touchscreen interface with Full Menu, Favorites, Custom Buttons, and Floor Plan layouts for lightning-fast order entry.' },
    { icon: Package, title: 'Real-Time Inventory', desc: 'Monitor stockroom counts in real-time, generate purchase orders, reconcile deliveries, and manage vendors — all from one system.' },
    { icon: CreditCard, title: 'All Payment Types', desc: 'Accept EMV chip, contactless/NFC, credit, debit, EBT, and gift cards. Single deposit for all card types with next-day funding.' },
    { icon: Users, title: 'Customer Database', desc: 'Build detailed customer profiles with purchase history. Capture contacts for email campaigns and identify your top customers.' },
    { icon: BarChart3, title: 'Advanced Reporting', desc: 'Track sales, profit margins, batch/transaction details, and specialty taxes. Make data-driven decisions with real-time analytics.' },
    { icon: Shield, title: 'Employee Controls', desc: 'Create schedules, set access permissions, streamline onboarding, monitor performance, and detect employee fraud.' }
  ];

  const hardwareItems = [
    { name: 'Exatouch POS Terminal', desc: 'High-performance touchscreen all-in-one terminal with intuitive Exatouch software.' },
    { name: '10" Customer-Facing Display', desc: 'Let customers see items being rung up in real-time — reduces errors and builds trust.' },
    { name: 'Epson Receipt Printer', desc: 'Fast, reliable thermal receipt printing for every transaction.' },
    { name: 'Cash Drawer', desc: 'Durable, secure cash drawer integrated with the POS system.' },
    { name: 'Barcode Scanner', desc: 'High-speed barcode scanning for faster checkout and inventory management.' },
    { name: 'In-Counter Scale', desc: 'Integrated scale for weighing produce, deli items, and bulk goods by weight.' },
    { name: 'PAX/Clover Payment Terminal', desc: 'EMV-certified, semi-integrated terminals for secure card processing.' },
    { name: 'Tablet for Mobile Inventory', desc: 'Take inventory anywhere on the floor with a dedicated mobile tablet.' }
  ];

  const freeOffers = [
    { icon: Headphones, title: 'Free POS Training', desc: 'Comprehensive training for you and your staff to get up and running fast.' },
    { icon: Zap, title: 'Free Installation', desc: 'Professional on-site installation and complete inventory build at no extra cost.' },
    { icon: Gift, title: 'Free Gift Card Processing', desc: 'Accept and process gift cards with zero processing fees through eGiftSolutions.' },
    { icon: Clock, title: '24/7 In-House Support', desc: 'Round-the-clock technical support from a U.S.-based team whenever you need it.' }
  ];

  const scanDataSteps = [
    { step: '01', title: 'POS Captures Sales Data', desc: 'Exatouch automatically records every tobacco product sale including brand, type, and quantity.' },
    { step: '02', title: 'Data Transmitted to Manufacturers', desc: 'Sales reports are transmitted directly to participating manufacturers like RJ Reynolds and Philip Morris.' },
    { step: '03', title: 'Manufacturers Analyze Data', desc: 'Manufacturers use your data for market research to understand purchasing trends in your area.' },
    { step: '04', title: 'You Earn Quarterly Rebates', desc: 'Receive rebates of up to $0.15/carton — directly increasing your profit from tobacco sales.' }
  ];

  const faqs = [
    { q: 'What types of businesses is Exatouch best suited for?', a: 'Exatouch is specifically designed for grocery stores, convenience stores, liquor stores, smoke shops, tobacco retailers, and general retail businesses. It excels in environments that need age verification, scale integration, scan data reporting, and complex inventory management.' },
    { q: 'Does Exatouch support EBT (food stamps)?', a: 'Yes. Exatouch allows you to process both EBT and non-EBT items within a single transaction, so customers don\'t need to split their purchases into separate orders.' },
    { q: 'What is Scan Data Integration?', a: 'Scan Data Integration allows your POS to automatically transmit tobacco sales data to participating manufacturers like RJ Reynolds and Philip Morris. In return, you earn quarterly rebates of up to $0.15 per carton, along with valuable market insights about your sales performance.' },
    { q: 'Is the installation really free?', a: 'Yes. Exatouch offers free professional installation, inventory build, POS training, and gift card processing as part of the onboarding package. You also receive 24/7 in-house technical support.' },
    { q: 'What payment types does Exatouch accept?', a: 'Exatouch accepts all major credit and debit cards, EMV chip cards, contactless/NFC payments (Apple Pay, Google Pay), EBT, and gift cards. It also supports cash discounting and offline processing for uninterrupted sales.' },
    { q: 'Can I use Exatouch for mobile inventory?', a: 'Yes. Exatouch provides a tablet-based mobile inventory solution so you can perform stock counts anywhere on the floor without being tied to the register.' },
    { q: 'Does Exatouch help with age-restricted product sales?', a: 'Absolutely. You can mark age-sensitive items in the system, which will automatically prompt the cashier to scan or manually enter the customer\'s ID before completing the sale. This helps with compliance for alcohol, tobacco, and other age-restricted products.' },
    { q: 'How much does Exatouch cost?', a: 'Software licensing starts at approximately $39/month per register. Hardware bundles are available through authorized partners like Merchant Solutions Corp. Contact us for a personalized quote based on your specific business needs.' }
  ];

  const seoKeywords = [
    'Exatouch POS system', 'grocery store POS', 'liquor store point of sale',
    'convenience store POS system', 'smoke shop POS', 'retail POS with inventory management',
    'EBT payment processing', 'age verification POS', 'scan data integration tobacco',
    'cash discounting POS', 'Exatouch Electronic Payments', 'free POS installation',
    'barcode scanner POS', 'customer-facing display POS', 'tobacco rebate program'
  ];

  const activeData = verticals[activeVertical];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-24 lg:py-32 overflow-hidden" data-testid="exatouch-hero">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 30%, rgba(16,185,129,0.4) 0%, transparent 50%), radial-gradient(circle at 75% 70%, rgba(59,130,246,0.3) 0%, transparent 50%)' }} />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Powered by Electronic Payments</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="hero-h1">
            Exatouch Point of Sale — Built for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300"> Grocery, Liquor & Retail</span>
          </h1>
          <p className="text-lg text-slate-300 mb-4 max-w-3xl mx-auto">
            The all-in-one POS system designed for businesses that need more than basic checkout. Integrated scales, age verification, scan data reporting, EBT processing, and real-time inventory management.
          </p>
          <p className="text-base text-slate-400 mb-8 max-w-2xl mx-auto">
            Free installation. Free training. Free gift card processing. 24/7 U.S.-based support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setShowDemoModal(true)} className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg px-8 py-6 shadow-lg shadow-emerald-900/30" data-testid="hero-demo-btn">
              Schedule a Free Demo
            </Button>
            <Button size="lg" onClick={() => setShowQuoteModal(true)} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6" data-testid="hero-quote-btn">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Verticals Tabs */}
      <section className="py-20 bg-white" data-testid="verticals-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">One POS. Every Retail Vertical.</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Exatouch is purpose-built for the unique needs of each industry it serves.</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.entries(verticals).map(([key, v]) => {
              const Icon = v.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveVertical(key)}
                  data-testid={`tab-${key}`}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeVertical === key
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {v.label}
                </button>
              );
            })}
          </div>

          {/* Active Vertical Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {React.createElement(activeData.icon, { className: 'h-7 w-7 text-emerald-600' })}
                <h3 className="text-2xl font-bold text-gray-900">Exatouch for {activeData.label}</h3>
              </div>
              <p className="text-lg text-gray-600 mb-8 border-l-4 border-emerald-500 pl-4">{activeData.tagline}</p>
              <div className="space-y-4">
                {activeData.features.map((f, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-200">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{f.title}</h4>
                      <p className="text-sm text-gray-600 mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <img
                src={activeData.image}
                alt={`Exatouch POS for ${activeData.label}`}
                className="w-full h-[450px] object-cover rounded-2xl shadow-xl"
              />
              <div className="mt-6 bg-slate-900 rounded-xl p-6 text-center">
                <p className="text-emerald-400 font-semibold text-sm mb-2">Ready to transform your {activeData.label.toLowerCase()} business?</p>
                <Button onClick={() => setShowDemoModal(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6" data-testid={`vertical-cta-${activeVertical}`}>
                  Schedule Your Free Demo <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20 bg-gray-50" data-testid="core-features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Powerful Features, Simple Interface</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Everything you need to run your business — from the register to the back office.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Card key={i} className="border-2 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg group" data-testid={`feature-card-${i}`}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <section className="py-20 bg-white" data-testid="hardware-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-emerald-600 font-semibold mb-3">High-Performance Hardware</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Everything You Need in One Bundle</h2>
              <p className="text-lg text-gray-600 mb-8">
                Exatouch provides affordable POS bundles with high-performance hardware and assorted peripherals to suit every business need.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hardwareItems.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-emerald-50 rounded-2xl p-8 lg:p-12">
                <img
                  src="https://images.unsplash.com/photo-1746723391801-1a24f7a57730?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxQT1MlMjBzeXN0ZW0lMjByZXRhaWwlMjBjaGVja291dCUyMHRlcm1pbmFsfGVufDB8fHx8MTc3MjIzODcyMnww&ixlib=rb-4.1.0&q=85"
                  alt="Exatouch POS hardware bundle with terminal, display, and peripherals"
                  className="w-full h-[350px] object-cover rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white rounded-xl px-5 py-3 shadow-lg">
                  <p className="text-xs font-semibold uppercase tracking-wider">Starting at</p>
                  <p className="text-2xl font-bold">$39<span className="text-sm font-normal">/mo</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scan Data Integration */}
      <section className="py-20 bg-slate-900 text-white" data-testid="scan-data-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-4">
              <CircleDollarSign className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Exclusive Feature</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Scan Data Integration — Turn Tobacco Sales Into Rebates</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Exatouch automatically transmits your tobacco sales data to manufacturers like RJ Reynolds and Philip Morris. In return, you earn quarterly rebates of up to $0.15 per carton — plus valuable market insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {scanDataSteps.map((step, i) => (
              <div key={i} className="relative bg-slate-800/60 border border-slate-700/40 rounded-xl p-6 hover:border-emerald-500/40 transition-all duration-300">
                <span className="text-4xl font-black text-emerald-500/20 absolute top-3 right-4">{step.step}</span>
                <h3 className="font-bold text-white text-base mb-2 mt-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-600/10 border border-emerald-500/20 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-emerald-400">$0.15</p>
              <p className="text-sm text-slate-400 mt-1">Per carton rebate potential</p>
            </div>
            <div className="bg-emerald-600/10 border border-emerald-500/20 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-emerald-400">Quarterly</p>
              <p className="text-sm text-slate-400 mt-1">Automatic rebate payments</p>
            </div>
            <div className="bg-emerald-600/10 border border-emerald-500/20 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-emerald-400">Automatic</p>
              <p className="text-sm text-slate-400 mt-1">Data transmission — no manual reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Offers Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50" data-testid="free-offers-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Get Started at No Extra Cost</h2>
            <p className="text-lg text-gray-500">Every Exatouch system comes with these included benefits.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {freeOffers.map((offer, i) => {
              const Icon = offer.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center" data-testid={`free-offer-${i}`}>
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{offer.title}</h3>
                  <p className="text-sm text-gray-600">{offer.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payments & Processing */}
      <section className="py-20 bg-white" data-testid="payments-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1726066012768-9aee2dc59e5f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxQT1MlMjBzeXN0ZW0lMjByZXRhaWwlMjBjaGVja291dCUyMHRlcm1pbmFsfGVufDB8fHx8MTc3MjIzODcyMnww&ixlib=rb-4.1.0&q=85"
                alt="Contactless payment processing at Exatouch POS terminal"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Accept Every Payment, Every Time</h2>
              <p className="text-lg text-gray-600 mb-8">Exatouch processes all payment types quickly and securely — so you never miss a sale.</p>
              <div className="space-y-4">
                {[
                  { icon: CreditCard, title: 'EMV Chip & Contactless', desc: 'Accept chip cards, Apple Pay, Google Pay, and tap-to-pay transactions.' },
                  { icon: CircleDollarSign, title: 'Cash Discounting', desc: 'Offset processing costs by offering cash discounts — built right into the system.' },
                  { icon: Receipt, title: 'Single Deposit, All Cards', desc: 'Receive one daily deposit for all card types. Next-day funding available.' },
                  { icon: WifiOff, title: 'Offline Processing', desc: 'Internet goes down? Exatouch keeps processing payments offline so your business never stops.' },
                  { icon: Gift, title: 'Gift Card Integration', desc: 'Process gift cards with free eGiftSolutions — create, sell, and redeem in-store.' }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" data-testid="faq-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-500">Everything you need to know about Exatouch POS.</p>
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
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-teal-700 text-white" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Upgrade Your POS System?</h2>
          <p className="text-xl text-emerald-100 mb-2">Get Exatouch installed in your store — free installation, free training, 24/7 support.</p>
          <p className="text-base text-emerald-200 mb-10">Grocery. Liquor. Convenience. Tobacco. Retail. We've got you covered.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setShowDemoModal(true)} className="bg-white text-emerald-700 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" data-testid="cta-demo-btn">
              Schedule Your Free Demo
            </Button>
            <Button size="lg" onClick={() => setShowQuoteModal(true)} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 text-lg px-8 py-6" data-testid="cta-quote-btn">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50" data-testid="seo-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-4">
            Merchant Solutions Corp is an authorized Exatouch POS provider powered by Electronic Payments. We provide Exatouch point of sale systems for grocery stores, convenience stores, liquor stores, smoke shops, tobacco retailers, and general retail businesses. Features include integrated scales, barcode scanning, age verification, EBT processing, scan data integration for tobacco rebates, cash discounting, real-time inventory management, employee controls, customer loyalty programs, and 24/7 U.S.-based technical support. Free installation, training, and gift card processing included.
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
            <iframe src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" className="w-full h-[80vh] border-0 rounded-2xl" title="Get a Free Exatouch Quote" />
          </div>
        </div>
      )}

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowDemoModal(false)} data-testid="demo-modal">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-4 h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowDemoModal(false)} className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors" data-testid="demo-modal-close">&#x2715;</button>
            <div className="calendly-inline-widget w-full h-full" data-url="https://calendly.com/mscpayments/posdemo?hide_event_type_details=1&primary_color=059669" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Exatouch;
