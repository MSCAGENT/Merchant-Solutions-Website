import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AIPoweredSection from '../components/AIPoweredSection';
import {
  CheckCircle,
  CreditCard,
  Shield,
  Zap,
  Lock,
  DollarSign,
  Headphones,
  MapPin,
  Star,
  Receipt,
  Smartphone,
  MessageSquare,
  FileText,
  RefreshCw,
  Heart,
  Users,
  BarChart3,
  Megaphone,
  CalendarCheck,
  Building2
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const emrLogos = [
  { name: 'Dentrix', src: 'https://static.prod-images.emergentagent.com/jobs/4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/images/5ebf76a01470ce12358c993d9cca65344b9fd0b583920fbd3d54cd935b074c6d.png' },
  { name: 'Eaglesoft', src: 'https://static.prod-images.emergentagent.com/jobs/4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/images/aad2ec1e16b29c6c1996aba1b932020a918e74dde44b2179fa25996c13a9c26e.png' },
  { name: 'Open Dental', src: 'https://static.prod-images.emergentagent.com/jobs/4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/images/3c990032ed76c1d478097b4fd4e9b3f65a2992c0aa7733cebc3547c714964107.png' },
  { name: 'Curve Dental', src: 'https://static.prod-images.emergentagent.com/jobs/4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/images/ab0e3a38b74eee904ee29b552bb64215c22729528238ca46a33f950ba0aafc4b.png' },
  { name: 'CareStack', src: 'https://static.prod-images.emergentagent.com/jobs/4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/images/91d7c53008037e2846ee68d80a7a423a1d0c837bed75cf95952f5267cc3e7a26.png' },
  { name: 'Oryx', src: 'https://static.prod-images.emergentagent.com/jobs/4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/images/b40c55ed2844453bebaa27458d9fedf2f31ceca0245b88d1ed70b165e4d42e41.png' }
];

const FloatingLogos = () => (
  <div className="relative overflow-hidden py-4" data-testid="emr-floating-logos">
    <div className="flex animate-scroll gap-10">
      {[...emrLogos, ...emrLogos].map((logo, i) => (
        <div key={i} className="flex-shrink-0 bg-white rounded-xl shadow-sm border border-gray-100 px-8 py-5 flex items-center justify-center min-w-[220px] h-[110px]">
          <img src={logo.src} alt={logo.name} className="max-h-[75px] max-w-[180px] object-contain" />
        </div>
      ))}
    </div>
    <style>{`
      @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      .animate-scroll { animation: scroll 14s linear infinite; display: flex; width: max-content; }
      .animate-scroll:hover { animation-play-state: paused; }
    `}</style>
  </div>
);

const DentalPractices = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);
  const video1Ref = React.useRef(null);
  const video2Ref = React.useRef(null);
  const calendlyRef = React.useRef(null);

  const heroVideos = [
    'https://customer-assets.emergentagent.com/job_4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/artifacts/bpqzr73d_Dental.mp4',
    'https://customer-assets.emergentagent.com/job_4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/artifacts/pkf9e46y_Dental2.mp4'
  ];

  useEffect(() => {
    const refs = [video1Ref, video2Ref];
    const currentRef = refs[activeVideo]?.current;
    if (currentRef) {
      currentRef.play().catch(() => {});
    }
  }, [activeVideo]);

  const handleVideoEnded = () => {
    setActiveVideo((prev) => (prev + 1) % heroVideos.length);
  };

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
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/mscpayments/paynet-health-integration?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=6c2cf1' });
    }
  };

  const merchantServices = [
    'Credit card processing for dental offices',
    'ACH and recurring billing setup',
    'Payment plans and financing integrations',
    'Contactless and EMV chip payments',
    'Text-to-pay and online payment links',
    'Insurance co-pay and balance collection tools'
  ];

  const emrBenefits = [
    'Automatic payment posting',
    'Reduced billing errors',
    'Faster end-of-day reconciliation',
    'Secure tokenized card-on-file storage',
    'Recurring billing for treatment plans',
    'Real-time reporting'
  ];

  const securityFeatures = [
    { icon: Shield, title: 'PCI-DSS Compliant', desc: 'Meets the highest standards for payment data security' },
    { icon: Lock, title: 'Encrypted End-to-End', desc: 'Data protected from terminal to processor' },
    { icon: CreditCard, title: 'Tokenized Storage', desc: 'Card-on-file storage with secure tokens' },
    { icon: FileText, title: 'HIPAA-Aware', desc: 'Workflow design respects healthcare privacy requirements' }
  ];

  const collectionFeatures = [
    'Text-to-pay after appointments',
    'Email invoices with secure payment links',
    'Automated balance reminders',
    'Payment plan setup',
    'Online bill pay portals',
    'In-office tap-to-pay'
  ];

  const marketingFeatures = [
    { icon: Star, text: 'Reputation management' },
    { icon: MessageSquare, text: 'Automated review requests' },
    { icon: Users, text: 'Patient communication tools' },
    { icon: CalendarCheck, text: 'Appointment reminders' },
    { icon: RefreshCw, text: 'Recall campaigns' },
    { icon: Megaphone, text: 'SEO and digital marketing services' }
  ];

  const whyChooseUs = [
    { icon: Headphones, text: 'Local account manager support' },
    { icon: MapPin, text: 'Nationwide merchant services coverage' },
    { icon: CreditCard, text: 'Dental EMR payment integrations' },
    { icon: DollarSign, text: 'Transparent processing pricing' },
    { icon: Zap, text: 'Fast funding options' },
    { icon: Receipt, text: 'Chargeback assistance' },
    { icon: Building2, text: 'Dealer-level installation and configuration' },
    { icon: Megaphone, text: 'Digital Marketing, Ads and Voice AI services' }
  ];

  const whoWeServe = [
    'General Dentistry', 'Orthodontists', 'Oral Surgeons', 'Pediatric Dentists',
    'Endodontists', 'Periodontists', 'Multi-location Dental Groups', 'DSOs'
  ];

  const faqs = [
    { question: 'Can you integrate payment processing with my dental EMR?', answer: 'Yes. We integrate with leading dental practice management and EHR systems to automate payment posting and reconciliation.' },
    { question: 'Do you support recurring billing and payment plans?', answer: 'Yes. We configure recurring billing for treatment plans and card-on-file storage.' },
    { question: 'Is dental credit card processing different from standard merchant services?', answer: 'Yes. Dental practices require integration with PMS systems, HIPAA-aware workflows, and recurring billing tools.' },
    { question: 'How fast do dental offices receive funding?', answer: 'Most dental practices receive funding within 1-2 business days depending on account setup.' },
    { question: 'Can you help reduce dental chargebacks?', answer: 'Yes. We provide chargeback documentation tools and dispute support.' },
    { question: 'What if we take payments in GoHighLevel?', answer: 'We can also support GHL with our plugin, allowing a seamless integration with our services.' },
    { question: 'I use a third-party company for financing. Can you integrate those cards?', answer: 'Given that we have the ability to process CareCredit cards in our own system, you will be able to accept them.' }
  ];

  const searchTerms = [
    'Dental payment processing Florida',
    'Merchant services for dental offices',
    'Dental EMR integration',
    'Dental credit card processing near me'
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
        <title>Dental Payment Processing & EMR Integration | Merchant Services for Dental Offices</title>
        <meta property="og:title" content="Dental Payment Processing & EMR Integration | Merchant Services for Dental Offices" />
        <meta property="og:description" content="Secure dental payment processing integrated with Dentrix, Eaglesoft, Open Dental and more. Merchant services, EMR integration, and dental marketing solutions nationwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/dental-payment-processing-emr-integration" />
        <meta name="description" content="Secure dental payment processing integrated with Dentrix, Eaglesoft, Open Dental and more. Merchant services, EMR integration, and dental marketing solutions nationwide." />
        <meta name="keywords" content="dental payment processing, dental EMR integration, dental merchant services, Dentrix payment processing, Eaglesoft payment integration, Open Dental payments, dental credit card processing, dental office POS, dental billing solutions" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/dental-payment-processing-emr-integration" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Dental Payment Processing","serviceType":"Dental Office Payment Processing and EMR Integration","provider":{"@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com"},"areaServed":"United States","url":"https://merchantsolutionscorp.com/dental-payment-processing-emr-integration","description":"Payment processing for dental practices with EMR integration, patient payment plans, and streamlined billing."})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://merchantsolutionscorp.com/"},{"@type":"ListItem","position":2,"name":"Healthcare","item":"https://merchantsolutionscorp.com/industries/healthcare"},{"@type":"ListItem","position":3,"name":"Dental Practices","item":"https://merchantsolutionscorp.com/dental-payment-processing-emr-integration"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com","logo":"https://merchantsolutionscorp.com/logo.png","sameAs":["https://www.facebook.com/merchantsolutionscorp/","https://www.instagram.com/merchant_solutions_corp","https://www.linkedin.com/company/merchantsolutionscorp/","https://www.youtube.com/merchantsolutionscorp"]})}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        {heroVideos.map((src, i) => (
          <video
            key={i}
            ref={i === 0 ? video1Ref : video2Ref}
            autoPlay={i === 0}
            muted
            playsInline
            onEnded={handleVideoEnded}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === activeVideo ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/75 via-purple-800/60 to-blue-900/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg" data-testid="hero-h1">
              Dental Payment Processing & EMR Integration
            </h1>
            <p className="text-xl text-purple-200 font-semibold mb-4">
              Secure Credit Card Processing Integrated with Your Dental EMR or PMS
            </p>
            <p className="text-lg text-purple-100 mb-4">
              Merchant Solutions Corp provides dental payment processing and merchant services fully integrated with leading dental EMR and practice management systems.
            </p>
            <p className="text-base text-purple-200/80 mb-8">
              Through HealthcarePMB.com, we combine secure credit card processing, electronic health record integrations, and dental marketing services into one streamlined platform for modern dental offices across Florida and all 50 U.S. states.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg"
                onClick={openCalendly}
                data-testid="hero-demo-btn"
              >
                Book a Discovery Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-6"
                onClick={() => setShowContactModal(true)}
                data-testid="hero-sales-btn"
              >
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dental Merchant Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="merchant-services-h2">
                Dental Merchant Services Built for Modern Practices
              </h2>
              <div className="mb-6">
                <p className="text-lg text-gray-700">Dental offices need more than a terminal.</p>
                <p className="text-lg text-purple-600 font-semibold">They need secure, compliant, and integrated payment processing.</p>
              </div>
              <p className="text-gray-700 mb-4 font-medium">Our dental merchant services include:</p>
              <div className="space-y-3 mb-6">
                {merchantServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 italic border-l-4 border-purple-600 pl-4">
                We help dental practices reduce chargebacks, speed up funding, and improve patient payment experience.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/6812444/pexels-photo-6812444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Advanced dental clinic equipment and chair"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EMR/PMS Integration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="emr-integration-h2">
              Integrated Payment Processing for Dental EMR & PMS Systems
            </h2>
            <p className="text-xl text-purple-600 font-semibold mb-4">Stop double-entering payments.</p>
            <p className="text-lg text-gray-600">
              HealthcarePMB.com connects your payment processing directly to your electronic health record (EHR) or practice management software (PMS).
            </p>
          </div>

          {/* Floating Logos */}
          <div className="mb-10">
            <p className="text-center text-sm text-gray-500 font-medium uppercase tracking-wide mb-4">Supported integrations include major dental platforms</p>
            <FloatingLogos />
            <p className="text-center text-sm text-gray-400 mt-3">+ Other cloud-based dental PMS systems</p>
          </div>

          {/* Benefits */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg font-semibold text-gray-900 mb-6 text-center">Benefits of EMR/PMS Payment Integration:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {emrBenefits.map((benefit, index) => (
                <Card key={index} className="border hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-4 flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-gray-600 italic">
              Integrated dental payment processing improves efficiency and reduces front-desk workload.
            </p>
          </div>
        </div>
      </section>

      {/* PCI & HIPAA Security */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="security-h2">
              Dental Credit Card Processing with PCI & HIPAA Awareness
            </h2>
            <p className="text-xl text-purple-600 font-semibold mb-2">Security matters in healthcare.</p>
            <p className="text-lg text-gray-600">Our solutions for processing dental credit card payments are:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="text-center text-gray-600">
            We configure your system to protect patient payment data while maintaining compliance standards.
          </p>
        </div>
      </section>

      {/* Improve Collections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/4971500/pexels-photo-4971500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Patient smiling in dental chair after a positive experience"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="collections-h2">
                Improve Collections & Patient Experience
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                HealthcarePMB.com helps dental practices increase collections without increasing friction.
              </p>
              <p className="text-gray-700 mb-4 font-medium">Features include:</p>
              <div className="space-y-3 mb-6">
                {collectionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 italic border-l-4 border-purple-600 pl-4">
                Dental offices see improved collection rates and faster insurance balance recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing + Payments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="marketing-h2">
              Dental Marketing + Payments in One Platform
            </h2>
            <p className="text-xl text-purple-600 font-semibold mb-2">HealthcarePMB.com goes beyond merchant services.</p>
            <p className="text-lg text-gray-600">We provide:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {marketingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-5 flex items-center gap-3">
                    <Icon className="h-6 w-6 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            By combining dental marketing services with integrated payment processing, your office improves both revenue and patient retention.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="why-choose-h2">
              Why Dental Offices Choose Merchant Solutions Corp
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
          <p className="text-center text-lg text-gray-700">
            We specialize in merchant services for healthcare providers and dental offices.
          </p>
        </div>
      </section>

      <AIPoweredSection onContactClick={() => setShowContactModal(true)} onCalendlyClick={openCalendly} />

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="who-we-serve-h2">
              Who We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {whoWeServe.map((specialty, index) => (
              <div key={index} className="flex items-center gap-2 justify-center bg-gray-50 rounded-xl py-4 px-4 border hover:border-purple-600 transition-all duration-300">
                <Heart className="h-4 w-4 text-purple-600 flex-shrink-0" />
                <span className="font-medium text-gray-800 text-sm">{specialty}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Whether you operate a single-location dental office in Florida or manage a nationwide DSO, we design scalable dental payment processing systems.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
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

      {/* Florida & Nationwide */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" data-testid="nationwide-h2">
            Dental Payment Processing in Florida & Nationwide
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8 border mb-8">
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
              Merchant Solutions Corp delivers secure, integrated, and scalable healthcare payment solutions.
            </p>
          </div>
          <p className="text-center text-gray-600 mb-8">
            Through HealthcarePMB.com, we combine payments, EMR integration, and marketing services into one system built specifically for dental practices.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="final-cta-h2">
            Get Dental Payment Processing & EMR Integration Done Right
          </h2>
          <p className="text-xl text-purple-100 mb-4">
            Secure. Integrated. Supported.
          </p>
          <p className="text-lg text-purple-200 mb-8">
            Merchant Solutions Corp + HealthcarePMB.com
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={openCalendly}
              data-testid="cta-demo-btn"
            >
              Schedule a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6"
              onClick={() => setShowContactModal(true)}
              data-testid="cta-quote-btn"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Internal Links + SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link to="/solutions/payment-processing" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Payment Processing</Link>
            <Link to="/industries/healthcare" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Healthcare</Link>
            <Link to="/industries/chiropractors" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Chiropractors</Link>
            <Link to="/pos/clover" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Clover POS</Link>
            <Link to="/restaurant-payment-processing-florida" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Restaurants</Link>
          </div>
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides dental payment processing, EMR integration, and merchant services for dental offices across Florida and all 50 U.S. states. We integrate with Dentrix, Eaglesoft, Open Dental, Curve Dental, CareStack, Oryx, and other leading dental practice management systems. Serving general dentistry, orthodontists, oral surgeons, pediatric dentists, endodontists, periodontists, multi-location dental groups, and DSOs.
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
              title="Talk to Sales"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DentalPractices;
