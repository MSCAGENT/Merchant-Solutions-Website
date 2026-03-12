import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ChevronDown, DollarSign, BarChart3,
  Shield, TrendingUp, Building2, MapPin, CreditCard,
  UtensilsCrossed, ShoppingBag, Coffee, Scissors, Zap,
  ArrowRight, Monitor, Users, Headphones, Settings,
  Package, ClipboardCheck, Receipt, Star, Clock
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

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

const EquipmentCard = ({ name, cost, requirement, reimbursement, features, color, badge }) => (
  <Card className={`border-2 ${color} shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden`}>
    {badge && (
      <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">{badge}</div>
    )}
    <CardContent className="p-7">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{name}</h3>
      <div className="space-y-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Subscription Cost</p>
          <p className="text-2xl font-extrabold text-gray-900">{cost}<span className="text-sm font-normal text-gray-500"> /month</span></p>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">Processing Requirement</p>
          <p className="text-lg font-bold text-blue-800">{requirement}</p>
          <p className="text-xs text-blue-600 mt-1">monthly processing for 60 days</p>
        </div>
        <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">After Qualification</p>
          <p className="text-lg font-bold text-emerald-800">{reimbursement}</p>
        </div>
      </div>
      <div className="space-y-2">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
            <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {f}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default function FreePOSProgram() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [activeTab, setActiveTab] = useState('clover');

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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How does the Advantage Program work?", "acceptedAnswer": { "@type": "Answer", "text": "Merchants sign up for a POS subscription and processing agreement with $0 upfront. If the merchant processes the required volume within 60 days, they receive a statement credit or subscription reimbursement." } },
      { "@type": "Question", "name": "Why is there a subscription agreement?", "acceptedAnswer": { "@type": "Answer", "text": "The subscription allows businesses to deploy POS hardware without paying thousands of dollars upfront." } },
      { "@type": "Question", "name": "What happens if I don't meet the volume requirement?", "acceptedAnswer": { "@type": "Answer", "text": "The subscription simply continues as agreed in the subscription term." } },
      { "@type": "Question", "name": "How long is the subscription agreement?", "acceptedAnswer": { "@type": "Answer", "text": "Most programs are structured as a 36-month subscription but can go up to 60 months depending on the amount of hardware and monthly volume for the location." } },
      { "@type": "Question", "name": "Which POS systems qualify for the Advantage Program?", "acceptedAnswer": { "@type": "Answer", "text": "The Advantage Program applies to Clover, Square, Exatouch POS systems, and payment terminals." } },
      { "@type": "Question", "name": "How long does it take to qualify?", "acceptedAnswer": { "@type": "Answer", "text": "Qualification is reviewed after the first 60 days of processing. If the merchant meets the required volume, the credit or reimbursement is applied." } },
      { "@type": "Question", "name": "What if my volume fluctuates due to low and high seasons?", "acceptedAnswer": { "@type": "Answer", "text": "Most of the time the hardware is reviewed with the minimum processing volume; this can still help you to qualify and offset 100% of your processing fees." } },
      { "@type": "Question", "name": "What if I close my business?", "acceptedAnswer": { "@type": "Answer", "text": "Businesses on the Advantage Program are tied to an agreement, which requires an early termination fee. The minimum termination fee starts at $295." } }
    ]
  };

  const equipmentData = {
    clover: [
      {
        name: 'Clover Mini',
        cost: '$69',
        requirement: '$10,000',
        reimbursement: 'Statement credit or subscription reimbursement',
        features: ['Compact countertop POS', 'Contactless & chip payments', 'Basic inventory management', 'Employee management', 'Menu implementation', 'Set up guidance', 'Onsite installation'],
        color: 'border-purple-200',
      },
      {
        name: 'Clover Flex',
        cost: '$49',
        requirement: '$10,000',
        reimbursement: 'Statement credit or subscription reimbursement',
        features: ['Portable wireless POS', 'Tableside ordering', 'Built-in printer & scanner', 'All-day battery life', 'Menu implementation', 'Set up guidance', 'Onsite installation'],
        color: 'border-blue-200',
      },
      {
        name: 'Clover Station Solo',
        cost: '$99',
        requirement: '$20,000',
        reimbursement: 'Statement credit or subscription reimbursement',
        features: ['14" HD touchscreen', 'Full POS software suite', 'Cash drawer & receipt printer', 'Advanced reporting', 'Menu implementation', 'Set up guidance', 'Onsite installation'],
        color: 'border-purple-200',
      },
      {
        name: 'Clover Station Duo',
        cost: '$119',
        requirement: '$30,000',
        reimbursement: 'Statement credit or subscription reimbursement',
        features: ['Dual-screen system', 'Customer-facing display', 'Full restaurant or retail POS', 'Online ordering integration', 'Menu implementation', 'Set up guidance', 'Onsite installation'],
        color: 'border-emerald-200',
        badge: 'MOST POPULAR',
      },
    ],
    square: [
      {
        name: 'Square Terminal',
        cost: '$30',
        requirement: '$10,000',
        reimbursement: 'Statement credit or subscription reimbursement',
        features: ['All-in-one countertop terminal', 'Contactless, chip & swipe', 'Built-in receipt printer', 'Wi-Fi & Ethernet', 'Menu implementation', 'Set up guidance', 'Onsite installation'],
        color: 'border-purple-200',
      },
      {
        name: 'Square Handheld',
        cost: '$40',
        requirement: '$10,000',
        reimbursement: 'Statement credit or subscription reimbursement',
        features: ['Portable handheld POS', 'Wireless connectivity', 'Built-in receipt printer', 'All-day battery life', 'Menu implementation', 'Set up guidance', 'Onsite installation'],
        color: 'border-blue-200',
      },
      {
        name: 'Square Stand + iPad Bundle',
        cost: '$59',
        requirement: '$15,000',
        reimbursement: 'Statement credit or subscription reimbursement',
        features: ['iPad-based POS system', 'Countertop or portable', 'Full Square ecosystem', 'Easy setup & training', 'Menu implementation', 'Set up guidance', 'Onsite installation'],
        color: 'border-purple-200',
      },
      {
        name: 'Square Register Bundle',
        cost: '$79',
        requirement: '$20,000',
        reimbursement: 'Statement credit or subscription reimbursement',
        features: ['Dual-screen POS register', 'Customer-facing display', 'Full Square POS software', 'Integrated payments', 'Menu implementation', 'Set up guidance', 'Onsite installation'],
        color: 'border-emerald-200',
        badge: 'POPULAR',
      },
    ],
    exatouch: [
      {
        name: 'Exatouch Standard',
        cost: '$69',
        requirement: '$15,000',
        reimbursement: 'Statement credit or subscription reimbursement',
        features: ['Touchscreen POS terminal', 'Barcode scanning', 'Inventory management', 'Employee time clock', 'Menu implementation', 'Set up guidance', 'Onsite installation'],
        color: 'border-purple-200',
      },
      {
        name: 'Exatouch Pro',
        cost: '$99',
        requirement: '$30,000',
        reimbursement: 'Statement credit or subscription reimbursement',
        features: ['Advanced POS system', 'Multi-station support', 'Advanced inventory & reporting', 'Loyalty program integration', 'Menu implementation', 'Set up guidance', 'Onsite installation'],
        color: 'border-blue-200',
        badge: 'BEST FOR RETAIL',
      },
    ],
    terminals: [
      {
        name: 'Countertop Terminal',
        cost: '$39',
        requirement: '$10,000',
        reimbursement: 'Statement credit or subscription reimbursement',
        features: ['EMV chip & contactless', 'Compact design', 'Fast transaction speed', 'Built-in receipt printer'],
        color: 'border-purple-200',
      },
      {
        name: 'Wireless Terminal',
        cost: '$49',
        requirement: '$10,000',
        reimbursement: 'Statement credit or subscription reimbursement',
        features: ['4G/Wi-Fi connectivity', 'Portable & battery powered', 'Tip & signature on screen', 'Ideal for mobile businesses'],
        color: 'border-blue-200',
      },
      {
        name: 'Smart Terminal',
        cost: '$59',
        requirement: '$10,000',
        reimbursement: 'Statement credit or subscription reimbursement',
        features: ['Android-based smart terminal', 'Touchscreen display', 'App marketplace', 'Advanced payment options'],
        color: 'border-emerald-200',
        badge: 'MOST POPULAR',
      },
    ],
  };

  const tabs = [
    { key: 'clover', label: 'Clover POS' },
    { key: 'square', label: 'Square POS' },
    { key: 'exatouch', label: 'Exatouch POS' },
    { key: 'terminals', label: 'Terminals' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Advantage Credit Program | POS System with No Upfront Cost</title>
        <meta property="og:title" content="Advantage Credit Program | POS System with No Upfront Cost" />
        <meta property="og:description" content="The Advantage Program lets businesses get a Clover, Square, Exatouch POS system or terminal with $0 upfront. Process the required volume in 60 days and receive a statement credit or subscription reimbursement." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/free-pos-system" />
        <meta name="description" content="The Advantage Program lets businesses get a Clover, Square, Exatouch POS system or terminal with $0 upfront. Process the required volume in 60 days and receive a statement credit or subscription reimbursement." />
        <meta name="keywords" content="advantage credit program, POS system no upfront cost, free POS program, Clover POS free, Square POS program, Exatouch POS financing, payment terminal program, POS subscription reimbursement" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/free-pos-system" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Free POS System Program","serviceType":"Free POS System and Advantage Credit Program","provider":{"@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com"},"areaServed":"United States","url":"https://merchantsolutionscorp.com/free-pos-system","description":"Get a free POS system through the Advantage Credit Program from Merchant Solutions Corp."})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://merchantsolutionscorp.com/"},{"@type":"ListItem","position":2,"name":"Pricing","item":"https://merchantsolutionscorp.com/pricing"},{"@type":"ListItem","position":3,"name":"Free POS System","item":"https://merchantsolutionscorp.com/free-pos-system"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com","logo":"https://customer-assets.emergentagent.com/job_merchant-central-11/artifacts/vmzehzol_MSC_1080x560.png","sameAs":["https://www.facebook.com/merchantsolutionscorp/","https://www.instagram.com/merchant_solutions_corp","https://www.linkedin.com/company/merchantsolutionscorp/","https://www.youtube.com/merchantsolutionscorp"]})}</script>
      </Helmet>

      {/* 1. HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80" alt="advantage-credit-program" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl" data-testid="advantage-hero-h1">
            Advantage Credit Program
          </h1>
          <p className="text-xl text-gray-300 mb-3 max-w-3xl">
            Get a POS system or terminal with $0 upfront. Process the required volume within 60 days and receive a statement credit or subscription reimbursement.
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl">
            The Advantage Program applies to Clover, Square, Exatouch POS systems and payment terminals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="hero-contact-btn">
              See If You Qualify
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6" onClick={openCalendly} data-testid="hero-book-btn">
              Book a 30-Minute Consultation
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400" data-testid="trust-line">
            <span className="flex items-center gap-1.5"><Monitor className="h-4 w-4 text-purple-400" /> Clover, Square, Exatouch & Terminals</span>
            <span className="flex items-center gap-1.5"><DollarSign className="h-4 w-4 text-purple-400" /> $0 Upfront Cost</span>
            <span className="flex items-center gap-1.5"><ClipboardCheck className="h-4 w-4 text-purple-400" /> 60-Day Qualification</span>
            <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-purple-400" /> Free Next Day Funding</span>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="how-it-works-h2">How the Advantage Program Works</h2>
              <p className="text-lg text-gray-700 mb-6">
                The Advantage Program is designed for businesses that want modern POS technology without a large upfront investment.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">Merchant signs up for:</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 bg-purple-50 rounded-lg px-5 py-3.5 border border-purple-200">
                  <Receipt className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-800 font-semibold">POS Subscription</span>
                </div>
                <div className="flex items-center gap-3 bg-blue-50 rounded-lg px-5 py-3.5 border border-blue-200">
                  <CreditCard className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-800 font-semibold">Processing Agreement</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Merchant enters subscription with <span className="font-bold text-purple-700">$0 upfront</span>.</p>
              <p className="text-gray-700 mb-4">If a merchant processes the required volume within <span className="font-bold">60 days</span>, they receive:</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="font-medium">Statement credit</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span>or <span className="font-medium">Subscription reimbursement</span></span>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <p className="text-emerald-800 font-medium text-sm">
                  This program applies to Clover, Square, Exatouch POS systems and payment terminals. Select your equipment below to see specific requirements.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80"
                alt="advantage-program-pos-systems"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. EQUIPMENT SECTIONS — Tabbed */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="equipment-h2">Choose Your Equipment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Advantage Program applies to the following POS systems and terminals. Select a category to see subscription costs, processing requirements, and reimbursement details.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === tab.key ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
                data-testid={`tab-${tab.key}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Equipment Cards */}
          <div className={`grid gap-6 ${equipmentData[activeTab].length <= 2 ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto' : equipmentData[activeTab].length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
            {equipmentData[activeTab].map((item, i) => (
              <EquipmentCard key={i} {...item} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6" onClick={() => setShowFormModal(true)} data-testid="equipment-contact-btn">
              See If You Qualify <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 4. EXAMPLE BREAKDOWN */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="example-h2">Example: How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here's a simple example of how the Advantage Program works with a terminal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-purple-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-5">
                  <Receipt className="h-7 w-7 text-purple-600" />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-purple-600 mb-2">Terminal Cost</p>
                <p className="text-4xl font-extrabold text-gray-900">$60</p>
                <p className="text-gray-500">per month subscription</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-5">
                  <BarChart3 className="h-7 w-7 text-blue-600" />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-2">Requirement</p>
                <p className="text-4xl font-extrabold text-gray-900">$10K</p>
                <p className="text-gray-500">monthly processing for 60 days</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-emerald-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                  <DollarSign className="h-7 w-7 text-emerald-600" />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-600 mb-2">After 60 Days</p>
                <p className="text-4xl font-extrabold text-emerald-700">$0</p>
                <p className="text-gray-500">statement credit or reimbursement</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto text-sm">
            When the qualification requirements are met within 60 days, the merchant receives a statement credit or subscription reimbursement, making the equipment effectively free.
          </p>
        </div>
      </section>

      {/* 5. WHY THIS STRUCTURE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                alt="advantage-program-pos-system"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="why-structure-h2">Why the Advantage Program Works for Growing Businesses</h2>
              <p className="text-lg text-gray-700 mb-6">
                POS systems are valuable business tools that normally require a large upfront investment.
              </p>
              <p className="text-gray-700 mb-4">Instead of forcing businesses to purchase expensive equipment upfront, the Advantage Program allows companies to:</p>
              <div className="space-y-3">
                {[
                  'Deploy modern POS technology immediately with $0 upfront',
                  'Get VIP installation and implementation services',
                  'Start accepting payments and managing sales from day one',
                  'Qualify for reimbursement after meeting 60-day volume requirement'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. QUALIFICATION REQUIREMENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="qualifications-h2">Qualification Requirements</h2>
              <p className="text-lg text-gray-700 mb-6">
                Each business is reviewed to ensure the Advantage Program is a good fit and it's a win-win situation.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">Factors we review include:</p>
              <div className="space-y-3 mb-6">
                {[
                  { icon: BarChart3, text: 'Monthly processing volume' },
                  { icon: Building2, text: 'Business type' },
                  { icon: Clock, text: 'Time in business' },
                  { icon: Shield, text: 'Industry risk profile' },
                  { icon: Package, text: 'Equipment requirements' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg px-5 py-3.5 border border-gray-200">
                    <item.icon className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <p className="text-emerald-800 font-semibold">
                  Businesses processing a minimum of $5,000+ per month in card payments are typically strong candidates for the Advantage Program.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                alt="business-qualification-review"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONFIDENT BUSINESSES */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="confident-h2">If You Know Your Business Does the Volume</h2>
          <p className="text-xl text-purple-200 mb-4">
            Many merchants already process the required monthly volume.
          </p>
          <p className="text-lg text-purple-300 mb-8">
            For those businesses, the Advantage Program is a smart way to upgrade their technology without a large upfront investment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            {[
              'Launch a professional POS system with $0 upfront',
              'Process the required volume for 60 days',
              'Receive statement credit or subscription reimbursement'
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <CheckCircle className="h-6 w-6 text-emerald-400 mx-auto mb-3" />
                <p className="text-sm text-white font-medium">{item}</p>
              </div>
            ))}
          </div>
          <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg mt-2" onClick={() => setShowFormModal(true)} data-testid="confident-contact-btn">
            See If You Qualify <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* 8. INDUSTRIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="industries-h2">Industries That Benefit from the Advantage Program</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These businesses typically process enough monthly card volume to qualify quickly.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: UtensilsCrossed, label: 'Restaurants' },
              { icon: Coffee, label: 'Bars & Coffee Shops' },
              { icon: ShoppingBag, label: 'Retail Stores' },
              { icon: Scissors, label: 'Salons & Spas' },
              { icon: Zap, label: 'Quick-Service Restaurants' },
              { icon: Building2, label: 'Service Businesses' },
              { icon: Monitor, label: 'C-Stores & Gas Stations' },
              { icon: Users, label: 'Professional Services' },
            ].map((item, i) => (
              <Card key={i} className="border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all">
                <CardContent className="p-5 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-3">
                    <item.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY MERCHANT SOLUTIONS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="merchant-solutions-support"
                className="w-full h-[380px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="why-msc-h2">Why Businesses Choose Our Advantage Program</h2>
              <p className="text-gray-700 mb-6">We help ensure your POS system is properly configured so your business can start processing payments immediately.</p>
              <div className="space-y-4">
                {[
                  { icon: Settings, text: 'Professional POS installation' },
                  { icon: ClipboardCheck, text: 'Menu and inventory setup' },
                  { icon: CreditCard, text: 'Payment processing integration' },
                  { icon: Users, text: 'Staff training and onboarding' },
                  { icon: Headphones, text: 'Ongoing technical support' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-purple-600" />
                    </div>
                    <p className="text-gray-700 font-medium pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-20 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12" data-testid="faq-h2">Advantage Program FAQ</h2>
          <FAQItem question="How does the Advantage Program work?" answer="Merchants sign up for a POS subscription and processing agreement with $0 upfront. If the merchant processes the required volume within 60 days, they receive a statement credit or subscription reimbursement." />
          <FAQItem question="Which POS systems qualify for the Advantage Program?" answer="The Advantage Program applies to Clover, Square, Exatouch POS systems, and payment terminals." />
          <FAQItem question="Why is there a subscription agreement?" answer="The subscription allows businesses to deploy POS hardware without paying thousands of dollars upfront." />
          <FAQItem question="What happens if I don't meet the volume requirement?" answer="The subscription simply continues as agreed in the subscription term." />
          <FAQItem question="How long is the subscription agreement?" answer="Most programs are structured as a 36-month subscription but can go up to 60 months depending on the amount of hardware and monthly volume for the location." />
          <FAQItem question="How long does it take to qualify?" answer="Qualification is reviewed after the first 60 days of processing. If the merchant meets the required volume, the credit or reimbursement is applied." />
          <FAQItem question="What if my volume fluctuates due to low and high seasons?" answer="Most of the time the hardware is reviewed with the minimum processing volume; this can still help you to qualify and offset 100% of your processing fees." />
          <FAQItem question="What if I close my business?" answer="Businesses on the Advantage Program are tied to an agreement, which requires an early termination fee. The minimum termination fee starts at $295." />
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="final-cta-h2">See If Your Business Qualifies for the Advantage Program</h2>
          <p className="text-xl text-purple-100 mb-8">
            Businesses processing $5,000 or more in monthly card transactions may qualify for the Advantage Program on Clover, Square, Exatouch, or terminals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="cta-contact-btn">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" onClick={openCalendly} data-testid="cta-book-btn">
              Book a 30-Minute Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 text-center mb-4">Related Pages</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'POS Systems Overview', path: '/pos-systems' },
              { label: 'Clover POS System', path: '/pos/clover' },
              { label: 'Square POS System', path: '/pos/square' },
              { label: 'Exatouch POS', path: '/pos/exatouch' },
              { label: 'Payment Terminals', path: '/pos/payment-terminals-overview' },
              { label: 'Subscription Processing', path: '/subscription-payment-processing' },
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
            <iframe src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" className="w-full h-[80vh] border-0 rounded-2xl" title="Contact Sales" />
          </div>
        </div>
      )}
    </div>
  );
}
