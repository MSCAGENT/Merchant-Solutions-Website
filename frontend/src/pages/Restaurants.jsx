import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  CreditCard, 
  Smartphone, 
  Monitor,
  Shield,
  Zap,
  Phone,
  ChefHat,
  DollarSign,
  Headphones,
  MapPin,
  Star,
  Receipt,
  Banknote,
  QrCode,
  Tablet,
  HandCoins,
  RefreshCw
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const Restaurants = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);

  // SEO meta tags
  useEffect(() => {
    document.title = 'Restaurant Payment Processing Florida | POS Installation & Clover Dealer';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Restaurant payment processing and POS installation in Florida and nationwide. Clover, Square, and iTabPOS setup with training, menu build, and dealer support.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Restaurant payment processing and POS installation in Florida and nationwide. Clover, Square, and iTabPOS setup with training, menu build, and dealer support.';
      document.head.appendChild(meta);
    }
  }, []);

  // Load Calendly widget script when modal opens
  useEffect(() => {
    if (!showCalendlyModal) return;
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const s = document.createElement('script');
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.head.appendChild(s);
    }
  }, [showCalendlyModal]);

  const restaurantTypes = [
    'Quick service restaurants',
    'Full-service dining',
    'Bars and lounges',
    'Food trucks',
    'Multi-location restaurant groups'
  ];

  const processingFeatures = [
    'EMV chip and contactless payments',
    'Tap-to-pay and mobile wallets',
    'Fast funding options',
    'Chargeback management support',
    'Transparent interchange-plus or flat-rate pricing'
  ];

  const installationServices = [
    'Hardware delivery and configuration',
    'Complete menu build and modifier setup',
    'Tax rates, service charges, tips, and coursing setup',
    'Kitchen routing and printer configuration',
    'Online ordering integration',
    'Staff training and go-live supervision',
    'Ongoing account management'
  ];

  const platforms = [
    {
      name: 'Clover for Restaurants',
      bestFor: 'Best for quick service restaurants, counter service, and small operations needing speed and simplicity.',
      link: '/pos/clover',
      cta: 'See Clover Setup',
      logo: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/fga5kaim_Clover%20logo.jpg'
    },
    {
      name: 'Square for Restaurants',
      bestFor: 'Best for fast setup, modern workflows, pop-ups, and growing brands.',
      link: '/pos/square',
      cta: 'See Square Setup',
      logo: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/6q1f7o7j_Square_Logo_Landscape.png'
    },
    {
      name: 'iTabPOS for Restaurants',
      bestFor: 'Best for full-service restaurants, bars, high-volume dining, and multi-location brands.',
      link: '/contact',
      cta: 'See iTabPOS Setup',
      logo: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/saip30kz_itabPOS_logo.png'
    }
  ];

  const floridaCities = [
    'Miami', 'Fort Lauderdale', 'West Palm Beach', 'Orlando',
    'Tampa', 'Jacksonville', 'Naples', 'Sarasota'
  ];

  const searchTerms = [
    'Restaurant payment processing near me',
    'Restaurant POS dealer Florida',
    'Clover restaurant installer',
    'Square restaurant setup'
  ];

  const hardwareCategories = [
    {
      title: 'Counter & Checkout',
      icon: CreditCard,
      items: ['POS terminal', 'Receipt printer', 'Cash drawer', 'Barcode scanner']
    },
    {
      title: 'Tableside & Handheld',
      icon: Tablet,
      items: ['Mobile ordering devices', 'Pay-at-table terminals', 'Tap-to-pay capability']
    },
    {
      title: 'Kitchen',
      icon: ChefHat,
      items: ['Kitchen display systems', 'Bump bars', 'Station printers']
    },
    {
      title: 'Guest Experience',
      icon: Monitor,
      items: ['Customer-facing displays', 'Self-order kiosks', 'QR code ordering']
    }
  ];

  const cashDiscountConfig = [
    'Proper receipt wording',
    'Compliant signage',
    'Dual pricing display',
    'Staff scripting'
  ];

  const installationSteps = [
    { step: '1', title: 'Discovery Call & Quote', desc: 'We assess your restaurant workflow and provide pricing.' },
    { step: '2', title: 'Menu & Workflow Intake', desc: 'We gather menu items, modifiers, routing, and staff permissions.' },
    { step: '3', title: 'Hardware Preparation', desc: 'Devices are programmed and tested before arrival.' },
    { step: '4', title: 'On-Site or Remote Installation', desc: 'Professional installation in Florida or remote nationwide deployment.' },
    { step: '5', title: 'Staff Training', desc: 'Hands-on training for managers and staff.' },
    { step: '6', title: 'Go-Live Support', desc: 'We stay connected during your first day live.' },
    { step: '7', title: 'Post-Launch Follow-Up', desc: 'Ongoing support and account management.' }
  ];

  const whyChooseUs = [
    { icon: MapPin, text: 'Local Florida support' },
    { icon: Shield, text: 'Nationwide installation coverage' },
    { icon: DollarSign, text: 'Transparent restaurant processing pricing' },
    { icon: Zap, text: 'Fast funding options' },
    { icon: Receipt, text: 'Chargeback assistance' },
    { icon: CreditCard, text: 'Dealer-level POS configuration' },
    { icon: Headphones, text: 'Live U.S.-based support' },
    { icon: Zap, text: 'Next day replacements' }
  ];

  const faqs = [
    {
      question: 'How fast can my restaurant go live?',
      answer: 'Most restaurants in Florida can go live within 3-10 days depending on complexity.'
    },
    {
      question: 'Can you import my existing menu?',
      answer: 'Yes. We build or import your menu, modifiers, and pricing before installation.'
    },
    {
      question: 'Do you support multi-location restaurant groups?',
      answer: 'Yes. We install and manage reporting across multiple restaurant locations nationwide.'
    },
    {
      question: 'What happens if internet goes down?',
      answer: 'Most systems offer offline transaction capability to prevent downtime.'
    },
    {
      question: 'How does restaurant cash discount work?',
      answer: 'We configure compliant dual pricing so customers see both card and cash prices. This helps offset processing fees.'
    },
    {
      question: 'Do you help with chargebacks?',
      answer: 'Yes. We provide documentation guidance and support for restaurant chargeback disputes.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/u0s1cs2r_POS%20Solutions%20for%20Food%20%20Beverage%20Businesses%20%20Clover.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/75 via-purple-800/60 to-purple-600/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-5xl leading-tight drop-shadow-lg" data-testid="hero-h1">
            Restaurant Payment Processing & POS Installation in Florida | Nationwide Dealer Support
          </h1>
          <p className="text-lg md:text-xl text-purple-100 mb-4 max-w-3xl">
            Clover, Square & iTabPOS Setup with Professional Installation, Training & Ongoing Support
          </p>
          <p className="text-base text-purple-200 mb-10 max-w-3xl">
            Merchant Solutions Corp provides restaurant payment processing and POS installation services across Florida and all 50 U.S. states & Puerto Rico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg"
              onClick={() => setShowContactModal(true)}
              data-testid="hero-quote-btn"
            >
              Get a Restaurant Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-6"
              onClick={() => setShowCalendlyModal(true)}
              data-testid="hero-demo-btn"
            >
              Book a 15 Minute Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Sub-hero context */}
      <section className="py-12 bg-gradient-to-br from-purple-50 via-white to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you operate in Miami, Fort Lauderdale, Orlando, Tampa, Jacksonville, or US territories, even nationwide, we deliver secure credit card processing, full POS setup, menu build, and hands-on support to get you live fast.
          </p>
        </div>
      </section>

      {/* Restaurant Credit Card Processing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="credit-card-processing-h2">
                Restaurant Credit Card Processing Built for Florida Businesses
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We specialize in restaurant merchant services designed for:
              </p>
              <div className="space-y-3 mb-8">
                {restaurantTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Our restaurant payment processing solutions include:
              </p>
              <div className="space-y-3 mb-8">
                {processingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 italic">
                Florida restaurants trust us because we install, configure, and support everything locally while providing nationwide coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POS Installation & Dealer Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="pos-installation-h2">
              Restaurant POS Installation & Dealer Support
            </h2>
            <div className="mb-8">
              <p className="text-xl text-purple-600 font-semibold mb-2">We are not just a processor.</p>
              <p className="text-xl text-purple-600 font-semibold">We are your installer and long-term support partner.</p>
            </div>
            <p className="text-lg text-gray-700 mb-6">Our restaurant POS installation services include:</p>
            <div className="space-y-4 mb-8">
              {installationServices.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{service}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 border-l-4 border-purple-600 pl-4 text-lg">
              If you are searching for restaurant POS installation in Florida or nationwide restaurant POS support, we handle everything from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Choose the Right POS Platform */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="choose-platform-h2">
              Choose the Right Restaurant POS Platform
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="h-16 flex items-center justify-center mx-auto mb-6">
                    <img src={platform.logo} alt={platform.name} className="h-full w-auto object-contain max-w-[180px]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                  <p className="text-gray-600 mb-6">{platform.bestFor}</p>
                  <Link to={platform.link}>
                    <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 w-full">
                      {platform.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            All platforms integrate with secure restaurant credit card processing and merchant services through Merchant Solutions Corp.
          </p>
        </div>
      </section>

      {/* Florida Cities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-testid="florida-cities-h2">
            Restaurant Payment Processing in Florida Cities
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">We actively support restaurants in:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {floridaCities.map((city, index) => (
              <div key={index} className="flex items-center gap-2 justify-center bg-white rounded-xl py-3 px-4 shadow-sm border">
                <MapPin className="h-4 w-4 text-purple-600 flex-shrink-0" />
                <span className="font-medium text-gray-800">{city}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700 mb-8">
            And we provide nationwide POS installation and merchant services across all 50 U.S. states.
          </p>
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto border">
            <p className="text-gray-700 mb-4 font-medium">If you are searching for:</p>
            <div className="space-y-2 mb-6">
              {searchTerms.map((term, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                  <span className="text-gray-600">{term}</span>
                </div>
              ))}
            </div>
            <p className="text-purple-700 font-semibold">
              We provide local support backed by national infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Hardware Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="hardware-h2">
              Restaurant Hardware Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {hardwareCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="text-center text-gray-600">
            Everything is configured before installation to reduce downtime.
          </p>
        </div>
      </section>

      {/* Cash Discount & Dual Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <HandCoins className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900" data-testid="cash-discount-h2">
                  Restaurant Cash Discount & Dual Pricing Program
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Offset credit card processing fees with a compliant restaurant cash discount program.
              </p>
              <p className="text-gray-700 mb-4 font-medium">We configure:</p>
              <div className="space-y-3 mb-8">
                {cashDiscountConfig.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                This program helps many Florida restaurants reduce or eliminate traditional processing expenses.
              </p>
              <Link to="/solutions/payment-processing">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Learn About Cash Discount
                </Button>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden flex items-center justify-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/suvi0y8j_Pseries%20Dual%20Price.png" 
                alt="Dejavoo terminal showing dual pricing for restaurant cash vs card" 
                className="max-h-[500px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="installation-process-h2">
              Our Installation Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {installationSteps.slice(0, 4).map((item, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {installationSteps.slice(4).map((item, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-700 font-medium">
              Most Florida restaurant installations go live within 3-10 days.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="why-choose-h2">
              Why Restaurants Choose Merchant Solutions Corp
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-5 flex items-center gap-3">
                    <Icon className="h-6 w-6 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{item.text}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            We combine restaurant merchant services, POS installation, and payment processing into one streamlined solution.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="faq-h2">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="final-cta-h2">
            Get Restaurant Payment Processing & POS Installed the Right Way
          </h2>
          <p className="text-xl text-purple-100 mb-4">
            If you are searching for restaurant payment processing in Florida or nationwide POS installation with dealer support, Merchant Solutions Corp delivers full setup, training, and long-term service.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center text-2xl font-bold mb-8">
            <span>Secure.</span>
            <span>Installed.</span>
            <span>Supported.</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => setShowContactModal(true)}
              data-testid="cta-quote-btn"
            >
              Get a Restaurant Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6"
              onClick={() => setShowCalendlyModal(true)}
              data-testid="cta-demo-btn"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link to="/solutions/payment-processing" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Payment Processing</Link>
            <Link to="/pos/clover" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Clover POS</Link>
            <Link to="/pos/square" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Square POS</Link>
            <Link to="/pos/self-ordering-kiosk" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Self Ordering</Link>
          </div>
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides restaurant POS systems, payment processing, and merchant services for restaurants across Florida and all 50 US states. We install and support Clover, Square, and iTabPOS systems with full menu build, training, and ongoing support. Serving quick service, full service, bars, food trucks, and multi-location restaurant brands.
          </p>
        </div>
      </section>

      {/* Contact Sales Modal (Lead Connector) */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowContactModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
              data-testid="contact-modal-close"
            >
              &#x2715;
            </button>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A"
              className="w-full h-[80vh] border-0 rounded-2xl"
              title="Get a Restaurant Quote"
            />
          </div>
        </div>
      )}

      {/* Calendly Modal */}
      {showCalendlyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowCalendlyModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-4 h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowCalendlyModal(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
              data-testid="calendly-modal-close"
            >
              &#x2715;
            </button>
            <div
              className="calendly-inline-widget w-full h-full"
              data-url="https://calendly.com/mscpayments/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=5c36f5"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Restaurants;
