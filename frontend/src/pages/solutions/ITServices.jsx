import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  MapPin,
  Wrench,
  GraduationCap,
  ClipboardCheck,
  Shield,
  Headphones,
  ArrowRight,
  Eye,
  Cable,
  Monitor,
  Users,
  Zap,
  Clock,
  Building2,
  Store,
  Stethoscope,
  ChefHat,
  Star
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';

const ITServices = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);

  useEffect(() => {
    if (!showCalendlyModal) return;
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const s = document.createElement('script');
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.head.appendChild(s);
    }
  }, [showCalendlyModal]);

  const processSteps = [
    { icon: Eye, step: '1', title: 'On-Site Survey', desc: 'Our team visits your location to assess the physical space, existing infrastructure, power, connectivity, and operational workflow.' },
    { icon: Cable, step: '2', title: 'Infrastructure Mapping', desc: 'We document network requirements, terminal placements, printer routing, kitchen display positioning, and cabling needs.' },
    { icon: Wrench, step: '3', title: 'Installation & Configuration', desc: 'We install all hardware, configure your POS software, build menus, set up payment processing, and integrate peripherals.' },
    { icon: GraduationCap, step: '4', title: 'Training & Go-Live', desc: 'Hands-on staff training, manager walkthroughs, and supervised go-live to ensure your team is confident from day one.' },
    { icon: Headphones, step: '5', title: 'Ongoing Support', desc: 'Post-installation support, remote troubleshooting, software updates, and on-site emergency response when you need it.' }
  ];

  const platforms = [
    {
      name: 'Clover POS',
      desc: 'Full installation, menu build, payment configuration, and peripheral setup for Clover Flex, Mini, Station, and Duo.',
      link: '/pos/clover',
      logo: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/fga5kaim_Clover%20logo.jpg'
    },
    {
      name: 'Square POS',
      desc: 'We are the only dealer offering Square POS on-site installation services. Professional setup, configuration, and staff training for Square Register, Terminal, and Reader.',
      link: '/pos/square',
      logo: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/6q1f7o7j_Square_Logo_Landscape.png',
      exclusive: true
    },
    {
      name: 'iTabPOS',
      desc: 'Enterprise-grade installation for full-service restaurants, bars, and multi-location brands. Complete menu build, kitchen routing, and staff permissions.',
      link: '/contact',
      logo: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/saip30kz_itabPOS_logo.png'
    }
  ];

  const industries = [
    { icon: ChefHat, title: 'Restaurants & Hospitality', items: ['POS terminal and kitchen display installation', 'Menu build and modifier configuration', 'Online ordering and QR code setup', 'Tableside pay and tip configuration', 'Kitchen routing and printer setup'] },
    { icon: Store, title: 'Retail Businesses', items: ['Checkout terminal installation', 'Barcode scanner and receipt printer setup', 'Inventory system configuration', 'Customer-facing display installation', 'Multi-register networking'] },
    { icon: Stethoscope, title: 'Healthcare Practices', items: ['HIPAA-aware terminal placement', 'Patient check-in kiosk setup', 'Co-pay collection terminal configuration', 'EMR-integrated payment device installation', 'Secure network configuration'] }
  ];

  const floridaCities = [
    'Miami', 'Fort Lauderdale', 'West Palm Beach', 'Orlando',
    'Tampa', 'Jacksonville', 'Naples', 'Sarasota',
    'St. Petersburg', 'Boca Raton', 'Tallahassee', 'Gainesville'
  ];

  const surroundingStates = ['Georgia', 'Alabama', 'South Carolina', 'North Carolina', 'Tennessee', 'Louisiana', 'Mississippi', 'Texas'];

  const whyChooseUs = [
    { icon: MapPin, text: 'On-site service in all 50 states and Puerto Rico' },
    { icon: Star, text: 'Only dealer offering Square POS on-site installation' },
    { icon: Clock, text: 'No fluff, no confusion, no delays' },
    { icon: Shield, text: 'PCI-compliant installations' },
    { icon: Users, text: 'Dedicated installation team, not a call center' },
    { icon: Zap, text: 'Fast deployment — most installs in 3-10 days' },
    { icon: Building2, text: 'Multi-location rollout capability' },
    { icon: Headphones, text: 'Post-install support and account management' }
  ];

  const faqs = [
    { question: 'What areas do you service for on-site POS installation?', answer: 'We provide on-site POS installation services across all 50 US states and select cities in Puerto Rico. Our highest density of local technicians is in Florida, Georgia, and the Southeast, but we install nationwide.' },
    { question: 'Are you really the only dealer offering on-site Square POS installation?', answer: 'Yes. Square does not offer on-site installation. We are the only authorized dealer providing professional on-site Square POS setup, configuration, and training. Clients choose us because they want someone reliable handling their setup — no guesswork, no delays.' },
    { question: 'How long does a typical POS installation take?', answer: 'A single-location installation typically takes 1-2 days depending on complexity. We schedule around your business hours and can perform after-hours or weekend installations to minimize disruption.' },
    { question: 'What does the on-site survey include?', answer: 'Our technician visits your location to assess the physical layout, power and network infrastructure, terminal placement options, kitchen routing needs, and any custom requirements. We then provide a detailed installation plan before starting work.' },
    { question: 'Do you provide staff training?', answer: 'Yes. Every installation includes hands-on training for your staff and managers. We cover daily operations, end-of-day procedures, troubleshooting basics, and manager-level functions. Additional training sessions can be scheduled as needed.' },
    { question: 'What happens after installation?', answer: 'We provide post-installation support including remote troubleshooting, software updates, and on-site emergency response. You have a dedicated account manager — not a generic support line.' },
    { question: 'Can you handle multi-location rollouts?', answer: 'Yes. We specialize in multi-location deployments with standardized configurations, centralized reporting, and coordinated installation schedules across any number of sites nationwide.' },
    { question: 'Do you install network infrastructure and cabling?', answer: 'Yes. We handle structured cabling, network switch and router installation, Wi-Fi configuration, and all connectivity required for your POS system to operate reliably.' }
  ];

  const searchTerms = [
    'POS installation services Florida',
    'On-site POS setup near me',
    'Square POS installation service',
    'Clover POS installer Florida',
    'Restaurant POS installation',
    'Payment terminal installation nationwide',
    'POS technician on-site service'
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>POS Installation Services Florida | On-Site Tech & Payment Device Setup Nationwide</title>
        <meta name="description" content="Professional POS installation services in Florida and all 50 states. On-site survey, infrastructure mapping, Clover, Square, and iTabPOS setup, training, and support for restaurants, retail, and healthcare." />
        <meta name="keywords" content="POS installation services, POS setup Florida, on-site POS installation, Clover installation, Square POS setup, restaurant POS installation, retail POS installation, payment device setup, POS technician" />
        <link rel="canonical" href="/solutions/it-services" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-gray-900">
        <img
          src="https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1600"
          alt="IT professional installing network cabling infrastructure"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/60 to-gray-900/70" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg" data-testid="hero-h1">
              Tech & Installation Services
            </h1>
            <p className="text-xl text-purple-200 font-semibold mb-4">
              On-Site POS Installation, Infrastructure Setup & Training in All 50 States
            </p>
            <p className="text-lg text-gray-300 mb-4">
              We send a dedicated team to survey your location, map the required infrastructure, install your software and payment devices, and finalize with hands-on training and support.
            </p>
            <p className="text-base text-gray-400 mb-4">
              No fluff. No confusion. No delays.
            </p>
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-8">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-yellow-200 font-medium">The only dealer offering Square POS on-site installation</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg"
                onClick={() => setShowContactModal(true)}
                data-testid="hero-get-quote-btn"
              >
                Get an Installation Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6"
                onClick={() => setShowCalendlyModal(true)}
                data-testid="hero-schedule-btn"
              >
                Schedule a Site Survey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="process-h2">
              How We Install Your POS System
            </h2>
            <p className="text-lg text-gray-600">Survey. Map. Install. Train. Support.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-0 shadow-lg text-center relative">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="absolute top-3 right-3 w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-600">{item.step}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Square POS Exclusive */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-4">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-yellow-200 font-medium">Exclusive Service</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4" data-testid="square-exclusive-h2">
                The Only Dealer Offering Square POS On-Site Installation
              </h2>
              <p className="text-gray-300 mb-4">
                Square does not send anyone to set up your system. Most businesses are left figuring it out on their own — or hiring someone who doesn't know the platform.
              </p>
              <p className="text-gray-300 mb-6">
                Our clients choose to go through us because they have someone they can rely on for their setup and installation. We handle everything: hardware placement, software configuration, payment processing activation, menu build, and staff training.
              </p>
              <div className="space-y-3 mb-6">
                {['Professional on-site Square POS setup', 'Square Register, Terminal, and Reader installation', 'Full menu and item configuration', 'Payment processing activation', 'Staff and manager training', 'Post-install support'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                onClick={() => setShowContactModal(true)}
              >
                Get Square Installation Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/12935066/pexels-photo-12935066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Cashier using Square POS touchscreen system at modern retail counter"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platforms We Install */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="platforms-h2">
              POS Platforms We Install
            </h2>
            <p className="text-lg text-gray-600">Professional on-site setup for the leading POS systems</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className={`border-2 hover:border-purple-600 transition-all duration-300 relative ${platform.exclusive ? 'ring-2 ring-yellow-400' : ''}`}>
                {platform.exclusive && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    EXCLUSIVE ON-SITE DEALER
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <div className="h-14 flex items-center justify-center mx-auto mb-6">
                    <img src={platform.logo} alt={platform.name} className="h-full w-auto object-contain max-w-[160px]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{platform.desc}</p>
                  <Link to={platform.link}>
                    <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="industries-h2">
              Industries We Install For
            </h2>
            <p className="text-lg text-gray-600">On-site POS installation for retail, healthcare, and restaurant businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                    <div className="space-y-2">
                      {industry.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="coverage-h2">
              POS Installation Services in Florida & Nationwide
            </h2>
            <p className="text-lg text-gray-600">Local expertise in Florida. On-site installation in all 50 states and Puerto Rico.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">Florida Cities We Serve</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {floridaCities.map((city, index) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-50 rounded-lg py-2 px-3 border">
                    <MapPin className="h-3.5 w-3.5 text-purple-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-800">{city}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">Surrounding States</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {surroundingStates.map((state, index) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-50 rounded-lg py-2 px-3 border">
                    <MapPin className="h-3.5 w-3.5 text-purple-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-800">{state}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm italic">
                + All 50 US states and select cities in Puerto Rico
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Install */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/12935084/pexels-photo-12935084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="POS terminal installed in restaurant kitchen with touchscreen ordering display"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="what-we-install-h2">
                What We Install & Configure
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'POS terminals and registers',
                  'Payment processing devices',
                  'Kitchen display systems',
                  'Receipt and label printers',
                  'Barcode scanners',
                  'Cash drawers',
                  'Customer-facing displays',
                  'Self-ordering kiosks',
                  'Network switches and routers',
                  'Structured cabling and wiring',
                  'Wi-Fi access points',
                  'Security and backup systems'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="why-choose-h2">
              Why Businesses Choose Our Installation Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
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
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="faq-h2">Frequently Asked Questions</h2>
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

      {/* SEO Search Terms */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 border">
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
              Merchant Solutions Corp provides professional on-site POS installation, infrastructure setup, and ongoing support for businesses across Florida and all 50 states.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="final-cta-h2">
            Get Your POS Installed the Right Way
          </h2>
          <p className="text-xl text-purple-100 mb-2">
            No fluff. No confusion. No delays.
          </p>
          <p className="text-lg text-purple-200 mb-8">
            Survey. Install. Train. Support. Done.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => setShowContactModal(true)}
              data-testid="cta-quote-btn"
            >
              Get an Installation Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6"
              onClick={() => setShowCalendlyModal(true)}
              data-testid="cta-schedule-btn"
            >
              Schedule a Site Survey
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link to="/pos/clover" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Clover POS</Link>
            <Link to="/pos/square" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Square POS</Link>
            <Link to="/solutions/payment-processing" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Payment Processing</Link>
            <Link to="/restaurant-payment-processing-florida" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Restaurants</Link>
            <Link to="/dental-payment-processing-emr-integration" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Dental</Link>
            <Link to="/medical-payment-processing-emr-integration" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Medical</Link>
          </div>
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides professional POS installation services in Florida, Georgia, Alabama, South Carolina, North Carolina, Tennessee, Louisiana, Mississippi, Texas, and all 50 US states including Puerto Rico. We are the only authorized dealer offering on-site Square POS installation. We install Clover, Square, and iTabPOS systems for restaurants, retail businesses, and healthcare practices. Services include on-site survey, infrastructure mapping, hardware installation, software configuration, menu build, staff training, and ongoing support.
          </p>
        </div>
      </section>

      {/* Contact Modal (Lead Connector) */}
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
              title="Installation Quote Request"
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

export default ITServices;
