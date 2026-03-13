import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronRight, CreditCard, Code, Globe, Calendar, QrCode, Users, DollarSign, Zap, Shield, TrendingUp, Smartphone, FileText, RefreshCw, Monitor, Building2, Stethoscope, UtensilsCrossed, ShoppingBag, Briefcase, Car, Dumbbell, GraduationCap, Home, Scissors, Landmark, Wrench, Truck, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const industryCarouselData = [
  { name: 'Restaurants & QSR', icon: UtensilsCrossed, features: ['Payment Links', 'Invoicing', 'Card-Present VTerminal', 'Mobile Processing'] },
  { name: 'Retail & E-Commerce', icon: ShoppingBag, features: ['Hosted Checkout', 'Recurring Billing', 'Payment Links', 'Gateway API'] },
  { name: 'Healthcare & Clinics', icon: Stethoscope, features: ['Recurring Billing', 'Invoicing', 'Card-Present VTerminal', 'Payment Links'] },
  { name: 'Professional Services', icon: Briefcase, features: ['Invoicing', 'Recurring Billing', 'Payment Links', 'Mobile Processing'] },
  { name: 'SaaS & Software', icon: Monitor, features: ['Gateway API', 'Recurring Billing', 'Hosted Checkout', 'Payment Links'] },
  { name: 'Home Services', icon: Home, features: ['Mobile Processing', 'Payment Links', 'Invoicing', 'Card-Present VTerminal'] },
  { name: 'Auto & Repair Shops', icon: Car, features: ['Invoicing', 'Card-Present VTerminal', 'Payment Links', 'Recurring Billing'] },
  { name: 'Fitness & Gyms', icon: Dumbbell, features: ['Recurring Billing', 'Mobile Processing', 'Payment Links', 'Hosted Checkout'] },
  { name: 'Education & Tutoring', icon: GraduationCap, features: ['Recurring Billing', 'Invoicing', 'Payment Links', 'Hosted Checkout'] },
  { name: 'Salons & Spas', icon: Scissors, features: ['Mobile Processing', 'Payment Links', 'Card-Present VTerminal', 'Recurring Billing'] },
  { name: 'Nonprofits', icon: Heart, features: ['Payment Links', 'Hosted Checkout', 'Recurring Billing', 'Invoicing'] },
  { name: 'Legal & Accounting', icon: Landmark, features: ['Invoicing', 'Recurring Billing', 'Payment Links', 'Gateway API'] },
  { name: 'Field Services', icon: Wrench, features: ['Mobile Processing', 'Invoicing', 'Payment Links', 'Card-Present VTerminal'] },
  { name: 'Delivery & Logistics', icon: Truck, features: ['Mobile Processing', 'Payment Links', 'Hosted Checkout', 'Invoicing'] },
  { name: 'Memberships & Subscriptions', icon: RefreshCw, features: ['Recurring Billing', 'Hosted Checkout', 'Payment Links', 'Gateway API'] },
  { name: 'Property Management', icon: Building2, features: ['Recurring Billing', 'Invoicing', 'Payment Links', 'ACH Payments'] },
];

const featureTagColors = {
  'Payment Links': 'bg-blue-100 text-blue-700',
  'Invoicing': 'bg-amber-100 text-amber-700',
  'Card-Present VTerminal': 'bg-green-100 text-green-700',
  'Mobile Processing': 'bg-pink-100 text-pink-700',
  'Hosted Checkout': 'bg-purple-100 text-purple-700',
  'Recurring Billing': 'bg-teal-100 text-teal-700',
  'Gateway API': 'bg-indigo-100 text-indigo-700',
  'ACH Payments': 'bg-orange-100 text-orange-700',
};

const IndustryCarousel = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animationId;
    let scrollPos = 0;
    const speed = 0.6;
    const totalWidth = container.scrollWidth / 2;

    const animate = () => {
      if (!isPaused) {
        scrollPos += speed;
        if (scrollPos >= totalWidth) scrollPos = 0;
        container.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const doubled = [...industryCarouselData, ...industryCarouselData];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50" data-testid="industry-carousel-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-3">
          Powering Payments Across Every Industry
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Gateway, payment links, hosted checkout, invoicing, recurring billing, card-present virtual terminals, and mobile processing on iPhone or Android.
        </p>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-hidden cursor-pointer px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        data-testid="industry-carousel-track"
      >
        {doubled.map((industry, idx) => {
          const Icon = industry.icon;
          return (
            <div
              key={`${industry.name}-${idx}`}
              className="flex-shrink-0 w-72 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:border-purple-400 transition-all duration-300 p-6"
              data-testid={`industry-card-${idx}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-base leading-tight">{industry.name}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {industry.features.map((f) => (
                  <span key={f} className={`text-xs font-medium px-2 py-1 rounded-full ${featureTagColors[f] || 'bg-gray-100 text-gray-600'}`}>
                    {f}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const MSCGateway = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const features = [
    {
      icon: CreditCard,
      title: 'Virtual Terminal',
      description: 'Accept payments from any device — no hardware required.',
      details: [
        'Key in credit card or ACH transactions',
        'Set custom amounts, add notes, apply taxes',
        'Email or SMS receipts instantly'
      ]
    },
    {
      icon: Globe,
      title: 'Payment Links',
      description: 'Create branded Pay Links to collect payments online or via SMS/email.',
      details: [
        'Custom amounts or fixed-price items',
        'Perfect for remote payments, deposits, and service invoices',
        'No website required'
      ]
    },
    {
      icon: Calendar,
      title: 'Recurring Billing & Invoicing',
      description: 'Automate your cash flow with recurring payments.',
      details: [
        'Weekly, monthly, or custom schedules',
        'Send automatic invoices with due dates',
        'Built-in card updater and failed payment notifications'
      ]
    },
    {
      icon: QrCode,
      title: 'QR Code Payments',
      description: 'Generate QR codes for easy scan-to-pay at point of sale or remotely.',
      details: [
        'Ideal for contactless payments in-store or on printed materials',
        'Works with mobile wallets and cards'
      ]
    },
    {
      icon: Users,
      title: 'Customer Payment Portal',
      description: 'Give customers a self-service portal to view and pay invoices.',
      details: [
        'Update cards on file',
        'Review transaction history',
        'Set up recurring payments'
      ]
    },
    {
      icon: DollarSign,
      title: 'ACH / Bank Transfers',
      description: 'Expand your options with integrated ACH payment processing.',
      details: [
        'Lower fees than cards',
        'Ideal for high-ticket and subscription billing',
        'Bank account verification via Plaid'
      ]
    }
  ];

  const apiFeatures = [
    'Create, retrieve, and manage transactions',
    'Generate invoices, subscriptions, and payment tokens',
    'Secure OAuth2 authorization',
    'Webhooks for real-time updates',
    'Sandbox available for testing'
  ];

  const industries = [
    { name: 'Software platforms & SaaS', icon: Code },
    { name: 'Healthcare & clinics', icon: Shield },
    { name: 'Service-based businesses', icon: Users },
    { name: 'Retail & eCommerce', icon: CreditCard },
    { name: 'Memberships & subscriptions', icon: Calendar },
    { name: 'Nonprofits and education', icon: TrendingUp }
  ];

  const benefits = [
    'All-in-one dashboard for card, ACH, and subscription billing',
    'API access + no-code tools like Pay Links and Portals',
    'Branded receipts, links, and payment pages',
    'Built-in fraud tools, tokenization, and PCI compliance',
    'Optional next-day funding'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>MSC Payments Gateway | All-in-One Payment Processing Platform</title>
        <meta property="og:title" content="MSC Payments Gateway | All-in-One Payment Processing Platform" />
        <meta property="og:description" content="MSC Payments Gateway provides an all-in-one payment processing platform. Accept payments online, in-store, and on mobile with integrated invoicing, recurring billing, and multi-industry support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/gateway/payments-gateway" />
        <meta name="description" content="MSC Payments Gateway provides an all-in-one payment processing platform. Accept payments online, in-store, and on mobile with integrated invoicing, recurring billing, and multi-industry support." />
        <meta name="keywords" content="MSC payments gateway, payment processing platform, all-in-one payment gateway, merchant payment gateway, online payments, mobile payments, invoice payments, multi-industry payment processing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/gateway/payments-gateway" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"MSC Payments Gateway","serviceType":"All-in-One Payment Processing Platform","provider":{"@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com"},"areaServed":"United States","url":"https://merchantsolutionscorp.com/gateway/payments-gateway","description":"MSC Payments Gateway provides an all-in-one payment processing platform for online, in-store, and mobile payments."})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://merchantsolutionscorp.com/"},{"@type":"ListItem","position":2,"name":"Gateway","item":"https://merchantsolutionscorp.com/gateway/payments-gateway"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com","logo":"https://merchantsolutionscorp.com/logo.png","sameAs":["https://www.facebook.com/merchantsolutionscorp/","https://www.instagram.com/merchant_solutions_corp","https://www.linkedin.com/company/merchantsolutionscorp/","https://www.youtube.com/merchantsolutionscorp"]})}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              MSC Payments Gateway
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transaction Gateway by MSC Payments
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Accept payments anywhere with our all-in-one payment gateway, designed for retail, service, healthcare, SaaS, and billing platforms. Whether you're sending invoices, setting up recurring billing, or integrating with custom software, our tools give you full control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg">
                  Contact Sales
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6"
                onClick={() => document.getElementById('dev-api-section')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="hero-explore-dev-docs"
              >
                Explore Developer Docs <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
            What's Included with Our Gateway?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16">
            Everything you need to accept and manage payments
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Developer API Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                For Developers
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Open API Access
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Build custom integrations with our REST-based API suite.
              </p>
              
              <div className="space-y-3 mb-8">
                {apiFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <p className="text-sm text-gray-600 mb-2">Explore full API documentation:</p>
                <a 
                  href="https://developers.merchantsolutionscorpdb.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-semibold text-lg break-all"
                >
                  developers.merchantsolutionscorpdb.com
                </a>
              </div>

              <a href="https://developers.merchantsolutionscorpdb.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  View API Documentation <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            {/* Right - Code Example */}
            <div>
              <Card className="bg-gray-900 text-gray-100 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-400 ml-4">API Example</span>
                  </div>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Initialize MSC Gateway API
const gateway = new MSCGateway({
  apiKey: 'your_api_key',
  environment: 'production'
});

// Create a payment
const payment = await gateway.createPayment({
  amount: 99.99,
  currency: 'USD',
  source: {
    type: 'card',
    number: '4111111111111111',
    exp_month: 12,
    exp_year: 2025,
    cvv: '123'
  },
  customer: {
    email: 'customer@example.com',
    name: 'John Doe'
  }
});

console.log(payment.id); // 'txn_abc123'
console.log(payment.status); // 'approved'`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Industries We Serve
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{industry.name}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ideal for Your Industry - Contact Sales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ideal for Your Industry</h2>
            <p className="text-lg text-gray-600 mb-8">Our gateway works for every business type. Contact our sales team for a customized solution.</p>
            <Button
              size="lg"
              onClick={() => setShowContactForm(!showContactForm)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-10 py-6 shadow-lg"
              data-testid="contact-sales-toggle"
            >
              Contact Sales <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          {showContactForm && (
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden" data-testid="contact-sales-form">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A"
                className="w-full border-0 rounded-2xl"
                style={{ height: '80vh', minHeight: '600px' }}
                title="Contact Sales"
                scrolling="auto"
              />
            </div>
          )}
        </div>
      </section>

      {/* Industry Carousel */}
      <IndustryCarousel />

      {/* Why Choose Our Gateway */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Gateway?
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">99.99%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600">Currencies Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">PCI Level 1</div>
              <div className="text-gray-600">Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Complete Feature Set
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CreditCard, title: 'Payment Processing', desc: 'Cards, ACH, digital wallets', tid: 'signup-payment-processing' },
              { icon: Globe, title: 'Virtual Terminal', desc: 'Accept payments anywhere', tid: 'signup-virtual-terminal' },
              { icon: Calendar, title: 'Recurring Billing', desc: 'Automated subscriptions', tid: 'signup-recurring' },
              { icon: Code, title: 'Developer API', desc: 'Full REST API access', tid: 'signup-api', scrollTo: 'dev-api-section' },
              { icon: QrCode, title: 'QR Code Payments', desc: 'Contactless scan-to-pay', tid: 'signup-qr' },
              { icon: Users, title: 'Customer Portal', desc: 'Self-service payments', tid: 'signup-portal' },
              { icon: Shield, title: 'Fraud Protection', desc: 'Advanced security tools', tid: 'signup-fraud' },
              { icon: Zap, title: 'Real-time Reporting', desc: 'Instant transaction data', tid: 'signup-reporting' }
            ].map((item) => (
              <Card key={item.tid} className="border-2">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  <Button onClick={() => item.scrollTo ? document.getElementById(item.scrollTo)?.scrollIntoView({ behavior: 'smooth' }) : setShowPricing(true)} className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" data-testid={item.tid}>
                    Sign Up Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start accepting payments today with our powerful gateway platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg">
                Contact Sales
              </Button>
            </a>
            <a href="https://developers.merchantsolutionscorpdb.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg animate-heartbeat">
                Explore Developer Docs <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Developer API Section */}
      <section id="dev-api-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Developer API
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get API Access</h2>
            <p className="text-lg text-gray-600 mb-2">Complete the form below to get started with our Transaction Gateway API.</p>
            <p className="text-sm text-gray-500">Once submitted, you'll be directed to the Developer Integration Portal.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8" data-testid="dev-api-form">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A"
              className="w-full border-0 rounded-2xl"
              style={{ height: '70vh', minHeight: '500px' }}
              title="Developer API Access"
              scrolling="auto"
            />
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">After completing the form, access the Integration Portal:</p>
            <a href="https://mscpayments.transactiongateway.com/merchants/resources/integration/integration_portal.php?tid=db3875e88814078b00473d03128ee2d9" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-10 py-6 shadow-lg animate-heartbeat" data-testid="dev-portal-btn">
                <Code className="mr-2 h-5 w-5" /> Open Integration Portal <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Gateway Pricing Modal */}
      {showPricing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowPricing(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowPricing(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
              data-testid="gateway-pricing-close"
            >
              &#x2715;
            </button>
            <div className="p-6 pt-8">
              <h2 className="text-2xl font-bold text-center mb-2">Transaction Gateway Pricing</h2>
              <p className="text-center text-gray-500 mb-6">Choose the plan that works best for your business</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Dual Price with ACH */}
                <Card className="border-2 border-purple-600 relative overflow-hidden">
                  <div className="bg-purple-600 text-white text-center py-1.5 text-xs font-bold uppercase tracking-wider">Most Popular</div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Dual Price with ACH</h3>
                    <p className="text-sm text-purple-600 font-medium mb-5">Zero cost processing to merchant</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-900 font-semibold">$0 Processing Fees</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-900 font-semibold">4% to the Consumer</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-900 font-semibold">ACH Payments Included</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-900 font-semibold">$0 Fee Next Day Funding</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 mb-6">Dual pricing compliant program</p>

                    <a href="https://apply.paymentshub.com/?source=50925.16" target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg py-5" data-testid="gateway-dual-apply">
                        Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* Flat Rate */}
                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6 pt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Flat Rate Program</h3>
                    <p className="text-sm text-blue-600 font-medium mb-5">Traditional Pricing</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-900 font-semibold">Simple predictable processing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-900 font-semibold">No fees to consumer</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-900 font-semibold">$0 Fee Next Day Funding</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 mb-6">
                      <p className="text-xs text-gray-500">2.79% + $0.15 per qualified transaction</p>
                      <p className="text-xs text-gray-500">3.59% + $0.15 per trans Non-Qualified</p>
                      <p className="text-xs text-gray-400 mt-1">Software fee applies</p>
                    </div>

                    <a href="https://apply.paymentshub.com/?source=50925.16" target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg py-5" data-testid="gateway-flat-apply">
                        Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MSCGateway;
