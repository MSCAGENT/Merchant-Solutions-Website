import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CreditCard, Globe, Store, Shield, CheckCircle, ArrowRight,
  ChevronLeft, ChevronRight, ChevronDown, Smartphone, Monitor,
  UtensilsCrossed, ShoppingBag, Zap, Headphones, MapPin, Package,
  BarChart3, Users, Truck, Clock, DollarSign
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const API_URL = process.env.REACT_APP_BACKEND_URL;

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

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogScroll, setBlogScroll] = useState(0);

  useEffect(() => {
    fetch(`${API_URL}/api/blog`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setBlogs(data.filter(p => p.published));
        }
      })
      .catch(() => {});
  }, []);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Merchant Solutions Corp",
    "url": "https://merchantsolutionscorp.com",
    "logo": "https://merchantsolutionscorp.com/logo.png",
    "foundingDate": "2012",
    "description": "Merchant services and POS systems provider for restaurants, retail, healthcare and service businesses.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Florida",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/merchant-solutions-corp"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What does Merchant Solutions Corp do?", "acceptedAnswer": { "@type": "Answer", "text": "Merchant Solutions Corp provides merchant services, payment processing, and POS systems for businesses across restaurants, retail, healthcare, and service industries. Our team installs, programs, and supports modern payment technology, including Clover, Square, Ingenico, Dejavoo and PAX POS systems, so businesses can accept payments securely both in person and online." } },
      { "@type": "Question", "name": "Is Merchant Solutions a direct provider or a third party?", "acceptedAnswer": { "@type": "Answer", "text": "Merchant Solutions Corp is a direct provider of payment processing services through their six acquiring banks, which work with businesses of all types, including card-present, CNP, online, high-risk, and low-risk businesses. They also provide direct services as a certified dealer for Exatouch, Skytab, Clover, and Square POS and Square Financial." } },
      { "@type": "Question", "name": "Does Merchant Solutions Corp offer subscription-based payment processing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Merchant Solutions Corp offers subscription-based merchant service programs designed for businesses that want transparent and predictable payment processing costs. Instead of traditional percentage markups, many businesses can choose a flat monthly subscription model that includes payment processing infrastructure and merchant technology services." } },
      { "@type": "Question", "name": "Can businesses get POS systems without paying upfront?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many businesses qualify for our Free POS Program, which allows merchants to deploy systems like Clover POS or Square POS with no upfront equipment cost. Qualified merchants subscribe to a POS program, and businesses that meet processing requirements may receive full reimbursement of their equipment subscription after the qualification period." } },
      { "@type": "Question", "name": "What POS systems does Merchant Solutions Corp support?", "acceptedAnswer": { "@type": "Answer", "text": "Merchant Solutions Corp installs and supports several industry-leading POS systems including Clover POS systems, Square POS systems, Payanywhere POS and PAX terminals, itabPOS restaurant and Kiosk systems, Union POS, and Skytab by Shift4." } },
      { "@type": "Question", "name": "Does Merchant Solutions Corp offer marketing and payroll integrations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Merchant Solutions Corp integrates POS systems with digital marketing tools and payroll management software to help businesses automate operations including customer loyalty programs, automated marketing campaigns, employee scheduling, payroll processing, and Voice AI order taking." } },
      { "@type": "Question", "name": "What industries does Merchant Solutions Corp support?", "acceptedAnswer": { "@type": "Answer", "text": "Merchant Solutions Corp supports businesses across many industries including restaurants and food service, retail stores, healthcare practices, specialty and high risk, salons and spas, service businesses, food trucks and cloud kitchens." } }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Merchant Services &amp; POS Systems | Payment Processing Solutions</title>
        <meta name="description" content="Merchant Solutions Corp provides payment processing and POS systems for restaurants, retail, healthcare and service businesses. Accept payments with Clover, Square, Ingenico and PAX systems installed and supported nationwide." />
        <meta name="keywords" content="merchant services, payment processing, POS systems, credit card processing company, restaurant POS systems, retail POS systems, merchant services provider, payment terminals, cloud kitchen POS, food truck POS" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/" />
        <meta property="og:title" content="Merchant Services & POS Systems | Merchant Solutions Corp" />
        <meta property="og:description" content="Full-service payment processing and POS systems for restaurants, retail, healthcare and service businesses. Clover, Square, Ingenico and PAX systems installed and supported." />
        <meta property="og:url" content="https://merchantsolutionscorp.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://merchantsolutionscorp.com/images/merchant-solutions-og.jpg" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://merchantsolutionscorp.com/"}]})}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/5ih9ogjl_Power%20your%20entire%20business%20%20Square.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-purple-950/75 to-gray-900/65" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-5xl leading-tight" data-testid="hero-h1">
            Merchant Services &amp; POS Systems for Restaurants, Retail, Healthcare &amp; Service Businesses
          </h1>
          <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-3xl">
            Full-service payment processing and POS installation with Clover, Square, Ingenico and PAX systems. Merchant Solutions installs, programs and supports everything so you can focus on serving customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-quote-btn">
                Get a Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-6" data-testid="hero-demo-btn">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* COMPLETE PAYMENT SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="payment-solutions-h2">Complete Payment Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Everything you need to accept payments and grow your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Payment Processing */}
            <Card className="border-2 hover:border-purple-400 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <CreditCard className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Processing</h3>
                <p className="text-gray-600 mb-4">Comprehensive payment processing solutions for businesses of all sizes.</p>
                <ul className="space-y-2.5 mb-6">
                  {['Accept all major cards', 'Next-day funding', 'Transparent pricing'].map((f, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/payment-processing-pricing" className="inline-flex items-center text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Online Payments */}
            <Card className="border-2 hover:border-purple-400 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <Globe className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Online Payments</h3>
                <p className="text-gray-600 mb-4">Secure e-commerce payment solutions with advanced fraud protection.</p>
                <ul className="space-y-2.5 mb-6">
                  {['Shopping cart integration', 'Mobile optimized checkout', 'Fraud prevention tools'].map((f, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/ecommerce-payments" className="inline-flex items-center text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* In-Person Payments */}
            <Card className="border-2 hover:border-purple-400 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <Store className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">In-Person Payments</h3>
                <p className="text-gray-600 mb-4">Modern POS terminals and card readers for restaurants and retail stores.</p>
                <ul className="space-y-2.5 mb-6">
                  {['EMV chip readers', 'Contactless payments', 'Receipt printing'].map((f, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/payment-terminals" className="inline-flex items-center text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* POS SYSTEMS & PAYMENT TERMINALS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="pos-systems-h2">POS Systems &amp; Payment Terminals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Merchant Solutions provides industry-leading POS systems designed for modern businesses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Clover */}
            <Link to="/clover-pos-system" className="group">
              <Card className="h-full border-2 border-transparent hover:border-purple-400 hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                    <Monitor className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Clover POS Systems</h3>
                  <p className="text-sm text-gray-600 mb-4">Powerful POS systems for restaurants, retail stores and service businesses.</p>
                  <ul className="space-y-1.5 mb-4">
                    {['Inventory tracking', 'Employee management', 'Sales reporting', 'Online ordering'].map((f, i) => (
                      <li key={i} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="h-3.5 w-3.5 text-green-500 mr-1.5 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <span className="text-purple-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:underline">
                    View Clover POS <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            {/* Square */}
            <Link to="/pos/square" className="group">
              <Card className="h-full border-2 border-transparent hover:border-purple-400 hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Square POS Systems</h3>
                  <p className="text-sm text-gray-600 mb-4">Simple and flexible POS solutions for small businesses and mobile vendors.</p>
                  <span className="text-purple-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:underline">
                    View Square POS <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            {/* Payanywhere & PAX */}
            <Link to="/payanywhere-pos" className="group">
              <Card className="h-full border-2 border-transparent hover:border-purple-400 hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                    <CreditCard className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Payanywhere &amp; PAX POS</h3>
                  <p className="text-sm text-gray-600 mb-4">Compact POS systems perfect for food trucks, pop-ups and mobile vendors.</p>
                  <span className="text-purple-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:underline">
                    View Payanywhere POS <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            {/* Ingenico */}
            <Link to="/payment-terminals" className="group">
              <Card className="h-full border-2 border-transparent hover:border-purple-400 hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Ingenico Payment Terminals</h3>
                  <p className="text-sm text-gray-600 mb-4">Enterprise-grade payment terminals built for high-volume environments.</p>
                  <span className="text-purple-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:underline">
                    View Terminals <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRY-SPECIFIC PAYMENT SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="industries-h2">Industry-Specific Payment Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Tailored POS systems and merchant services for specific industries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Restaurants */}
            <Link to="/restaurant-payment-processing-services" className="group">
              <Card className="h-full border-2 border-transparent hover:border-purple-400 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-200 transition-colors">
                    <UtensilsCrossed className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Restaurants</h3>
                  <p className="text-gray-600 mb-4">Restaurant POS systems with integrated ordering, delivery and reporting.</p>
                  <span className="text-purple-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:underline">
                    Restaurant Solutions <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            {/* Retail */}
            <Link to="/industries/retail" className="group">
              <Card className="h-full border-2 border-transparent hover:border-purple-400 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-200 transition-colors">
                    <ShoppingBag className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Retail</h3>
                  <p className="text-gray-600 mb-4">Inventory-driven POS systems designed for retail stores and boutiques.</p>
                  <span className="text-purple-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:underline">
                    Retail Solutions <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            {/* Healthcare */}
            <Link to="/industries/healthcare" className="group">
              <Card className="h-full border-2 border-transparent hover:border-purple-400 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-200 transition-colors">
                    <Shield className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare</h3>
                  <p className="text-gray-600 mb-4">HIPAA-compliant payment processing for healthcare practices.</p>
                  <span className="text-purple-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:underline">
                    Healthcare Solutions <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* SMART AUTOMATION */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="automation-h2">Smart Automation for Modern Businesses</h2>
              <p className="text-lg text-gray-300 mb-8">
                Merchant Solutions integrates POS systems with automation tools that help businesses operate more efficiently.
              </p>
              <p className="text-gray-400 font-semibold mb-4">Automation tools include:</p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: Zap, label: 'Voice AI phone ordering' },
                  { icon: Smartphone, label: 'QR ordering systems' },
                  { icon: Monitor, label: 'Self-ordering kiosks' },
                  { icon: Package, label: 'Customer notifications' },
                  { icon: Truck, label: 'Delivery platform integration' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-purple-800/60 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-purple-300" />
                    </div>
                    <span className="text-gray-200">{item.label}</span>
                  </div>
                ))}
              </div>
              <Link to="/voice-ai-business-automation">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-5">
                  Learn About Voice AI <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, title: 'AI Phone Ordering', desc: 'Answer calls and take orders automatically', color: 'from-purple-500 to-purple-700' },
                { icon: Smartphone, title: 'QR Ordering', desc: 'Guests order from their phones', color: 'from-blue-500 to-blue-700' },
                { icon: Monitor, title: 'Self-Order Kiosks', desc: 'Reduce lines and increase ticket size', color: 'from-indigo-500 to-indigo-700' },
                { icon: BarChart3, title: 'Smart Analytics', desc: 'Real-time sales and performance data', color: 'from-purple-600 to-pink-600' },
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

      {/* SERVING FLORIDA SINCE 2012 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-testid="florida-h2">Serving Florida Businesses Since 2012</h2>
              <p className="text-lg text-gray-700 mb-6">
                Merchant Solutions Corp has helped businesses across Florida and surrounding states deploy reliable payment processing and POS technology since 2012.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Industries served include:</p>
              <div className="grid grid-cols-2 gap-3">
                {['Restaurants', 'Retail stores', 'Healthcare providers', 'Service businesses', 'Hospitality venues'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { val: '2012', label: 'Founded' },
                { val: '100K+', label: 'Merchants Served' },
                { val: '50+', label: 'POS Models Deployed' },
                { val: '24/7', label: 'Technical Support' },
              ].map((stat, i) => (
                <div key={i} className="bg-purple-50 rounded-2xl p-6 text-center border border-purple-100">
                  <div className="text-3xl font-bold text-purple-600 mb-1">{stat.val}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FREE POS PROGRAM */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="free-pos-h2">Get a POS System with No Upfront Cost</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Many businesses qualify for our Free POS Program which allows merchants to deploy Clover or Square POS systems without paying thousands of dollars upfront.
          </p>
          <Link to="/free-pos-system">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" data-testid="free-pos-btn">
              Learn About Our Free POS Program <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12" data-testid="faq-h2">Merchant Services FAQ</h2>

          <FAQItem
            question="What does Merchant Solutions Corp do?"
            answer="Merchant Solutions Corp provides merchant services, payment processing, and POS systems for businesses across restaurants, retail, healthcare, and service industries. Our team installs, programs, and supports modern payment technology, including Clover, Square, Ingenico, Dejavoo and PAX POS systems, so businesses can accept payments securely both in person and online."
          />

          <FAQItem
            question="Is Merchant Solutions a direct provider or a third party?"
            answer="Merchant Solutions Corp is a direct provider of payment processing services through their six acquiring banks, which work with businesses of all types, including card-present, CNP, online, high-risk, and low-risk businesses. But they also provide direct services as a certified dealer for Exatouch, Skytab, Clover, and Square POS and Square Financial, which are only available at their store. Merchant Solutions Corp offers complete merchant services including payment processing, POS systems, payment terminals, online payments, and business automation tools designed to simplify operations and improve customer experience."
          />

          <FAQItem
            question="Does Merchant Solutions Corp offer subscription-based payment processing?"
            answer="Yes. Merchant Solutions Corp offers subscription-based merchant service programs designed for businesses that want transparent and predictable payment processing costs. Instead of traditional percentage markups, many businesses can choose a flat monthly subscription model that includes payment processing infrastructure and merchant technology services. This approach is especially beneficial for businesses processing higher transaction volumes or operating multiple locations."
          />

          <FAQItem
            question="Can businesses get POS systems without paying upfront?"
            answer="Yes. Many businesses qualify for our Free POS Program, which allows merchants to deploy systems like Clover POS or Square POS with no upfront equipment cost. Qualified merchants subscribe to a POS program, and businesses that meet processing requirements may receive full reimbursement of their equipment subscription after the qualification period. This allows businesses to launch modern POS technology without large upfront investments."
          />

          <FAQItem
            question="What POS systems does Merchant Solutions Corp support?"
            answer="Merchant Solutions Corp installs and supports several industry-leading POS systems including: Clover POS systems, Square POS systems, Payanywhere POS and PAX terminals, itabPOS restaurant and Kiosk systems, Union POS, and Skytab by Shift4. These platforms support inventory management, sales reporting, employee management, and payment processing to help businesses operate more efficiently."
          />

          <FAQItem
            question="Does Merchant Solutions Corp offer marketing and payroll integrations?"
            answer="Yes. Merchant Solutions Corp integrates POS (point of sale) systems with digital marketing tools and payroll management software to help businesses automate operations. Businesses can connect their POS systems to solutions that manage: customer loyalty programs, automated marketing campaigns, employee scheduling, payroll processing, and Voice AI order taking. This allows businesses to run their operations from a unified technology platform."
          />

          <FAQItem
            question="What industries does Merchant Solutions Corp support?"
            answer="Merchant Solutions Corp supports businesses across many industries, including: restaurants and food service, retail stores, healthcare practices, specialty and high risk, salons and spas, service businesses, food trucks and cloud kitchens. Each industry requires different payment workflows, which is why we provide industry-specific POS systems and merchant service solutions designed to meet those needs."
          />
        </div>
      </section>

      {/* BLOG SECTION */}
      {blogs.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">From Our Blog</h2>
                <p className="text-lg text-gray-600">Industry insights, guides, and resources</p>
              </div>
              <Link to="/resources/blog">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex gap-6 transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${blogScroll * 340}px)` }}
                >
                  {blogs.map((post) => (
                    <Link
                      key={post.id}
                      to={`/resources/blog/${post.slug}`}
                      className="flex-shrink-0 w-[320px] group"
                      data-testid={`blog-card-${post.slug}`}
                    >
                      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                        {post.featured_image ? (
                          <div className="h-48 overflow-hidden">
                            <img src={post.featured_image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          </div>
                        ) : (
                          <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                            <span className="text-white text-4xl font-bold opacity-30">{post.title?.charAt(0)}</span>
                          </div>
                        )}
                        <CardContent className="p-5">
                          {post.topic && (
                            <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">{post.topic}</span>
                          )}
                          <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">{post.title}</h3>
                          <p className="text-sm text-gray-500">{post.content_type || 'Article'}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
              {blogs.length > 3 && (
                <div className="flex justify-center gap-3 mt-8">
                  <button
                    onClick={() => setBlogScroll(Math.max(0, blogScroll - 1))}
                    disabled={blogScroll === 0}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 disabled:opacity-30 flex items-center justify-center transition-colors"
                    data-testid="blog-carousel-prev"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                  </button>
                  <button
                    onClick={() => setBlogScroll(Math.min(blogs.length - 3, blogScroll + 1))}
                    disabled={blogScroll >= blogs.length - 3}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 disabled:opacity-30 flex items-center justify-center transition-colors"
                    data-testid="blog-carousel-next"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 text-center mb-4">Explore More</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'POS Systems', path: '/pos-systems' },
              { label: 'Payment Terminals', path: '/payment-terminals' },
              { label: 'Clover POS', path: '/clover-pos-system' },
              { label: 'Payanywhere POS', path: '/payanywhere-pos' },
              { label: 'Restaurant POS', path: '/restaurant-payment-processing-services' },
              { label: 'Cloud Kitchen POS', path: '/cloud-kitchen-pos-system' },
              { label: 'Food Truck POS', path: '/food-trucks-pos' },
              { label: 'Free POS Program', path: '/free-pos-system' },
              { label: 'White Label Services', path: '/white-label-merchant-services' },
              { label: 'Pricing', path: '/payment-processing-pricing' },
            ].map((link, i) => (
              <Link key={i} to={link.path} className="text-sm text-purple-600 bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Payment Processing?</h2>
          <p className="text-xl mb-8 text-purple-100">Join thousands of businesses that trust us with their payments</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="final-cta-btn">
                Get Started Today
              </Button>
            </Link>
            <a href="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
                Talk to Sales
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
