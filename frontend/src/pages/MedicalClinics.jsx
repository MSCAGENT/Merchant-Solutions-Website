import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
  MessageSquare,
  FileText,
  RefreshCw,
  Users,
  Megaphone,
  CalendarCheck,
  Building2,
  Stethoscope,
  Activity,
  Clock,
  UserCheck,
  ClipboardCheck,
  Wallet
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
  { name: 'athenahealth', src: 'https://static.prod-images.emergentagent.com/jobs/4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/images/e62942bbdbaa834c7631bbdea6c5ae9555a372e410d5555a6607d33fa02fc2d5.png' },
  { name: 'eClinicalWorks', src: 'https://static.prod-images.emergentagent.com/jobs/4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/images/45ccaf48001ecb288af413944e8c4157a1399678979b9d3fe8619cf5f657304c.png' },
  { name: 'NextGen Healthcare', src: 'https://static.prod-images.emergentagent.com/jobs/4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/images/19b04a0c238dea715302ef86b9ad321a504a132bc08bc85331cc2970ca666c07.png' },
  { name: 'DrChrono', src: 'https://static.prod-images.emergentagent.com/jobs/4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/images/89796f9f3603c6d4d67f44f4c7b79faaf252eacdda1ba5b9ee93058224522cd3.png' },
  { name: 'AdvancedMD', src: 'https://static.prod-images.emergentagent.com/jobs/4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/images/93f7600b7a75c0a097d381690e499fb3111da2613e8af0e5ac42cdde5588fe2f.png' },
  { name: 'Rectangle Health', src: 'https://customer-assets.emergentagent.com/job_4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/artifacts/q0gyba60_rectangle%20health.png' }
];

const FloatingLogos = () => (
  <div className="relative overflow-hidden py-4" data-testid="emr-floating-logos">
    <div className="flex animate-med-scroll gap-10">
      {[...emrLogos, ...emrLogos].map((logo, i) => (
        <div key={i} className="flex-shrink-0 bg-white rounded-xl shadow-sm border border-gray-100 px-8 py-5 flex items-center justify-center min-w-[220px] h-[110px]">
          <img src={logo.src} alt={logo.name} className="max-h-[75px] max-w-[180px] object-contain" />
        </div>
      ))}
    </div>
    <style>{`
      @keyframes medScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      .animate-med-scroll { animation: medScroll 14s linear infinite; display: flex; width: max-content; }
      .animate-med-scroll:hover { animation-play-state: paused; }
    `}</style>
  </div>
);

const MedicalClinics = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const calendlyRef = useRef(null);

  const heroVideos = [
    'https://customer-assets.emergentagent.com/job_4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/artifacts/8hutwwfs_Medical.mp4',
    'https://customer-assets.emergentagent.com/job_4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/artifacts/4c9275jq_Medical2.mp4'
  ];

  useEffect(() => {
    document.title = 'Medical Payment Processing & EMR Integration | Merchant Services for Clinics';
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = 'Secure medical payment processing integrated with leading EMR systems. Merchant services for medical offices and urgent care clinics nationwide.';
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
    const refs = [video1Ref, video2Ref];
    const currentRef = refs[activeVideo]?.current;
    if (currentRef) currentRef.play().catch(() => {});
  }, [activeVideo]);

  const handleVideoEnded = () => setActiveVideo((prev) => (prev + 1) % heroVideos.length);

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

  const clinicTypes = [
    'Family medicine clinics',
    'Urgent care centers',
    'Specialty practices',
    'Multi-provider medical groups',
    'Outpatient facilities'
  ];

  const merchantServices = [
    'Credit card processing for medical offices',
    'ACH and recurring billing',
    'Contactless and EMV payments',
    'Card-on-file tokenization',
    'Text-to-pay and online bill pay',
    'Fast funding options'
  ];

  const industryChallenges = [
    { icon: Clock, title: 'Patient Flow', desc: 'Fast, secure checkout reduces wait times and improves front desk efficiency.' },
    { icon: Users, title: 'Multiple Providers', desc: 'Centralized reporting and provider-level tracking ensure accurate reconciliation.' },
    { icon: ClipboardCheck, title: 'Insurance Verification', desc: 'Payment tools integrate seamlessly with insurance billing workflows.' },
    { icon: Wallet, title: 'Copay Collection', desc: 'Automated copay prompts and pre-authorization tools during check-in.' }
  ];

  const ehrBenefits = [
    'Automatic payment posting',
    'Reduced billing errors',
    'Real-time reconciliation',
    'Secure tokenized card storage',
    'Recurring billing for treatment plans',
    'Faster end-of-day reporting'
  ];

  const copayFeatures = [
    'Collect copays at check-in',
    'Store cards on file securely',
    'Send text-to-pay reminders',
    'Offer payment plans',
    'Accept HSA and FSA payments',
    'Process balances after insurance'
  ];

  const urgentCareFeatures = [
    'Fast EMV and contactless checkout',
    'Multi-terminal setups',
    'Provider-based reporting',
    'Offline processing capability',
    'Insurance-friendly workflows'
  ];

  const securityFeatures = [
    { icon: Shield, title: 'PCI-DSS Compliant', desc: 'Meets the highest payment data security standards' },
    { icon: Lock, title: 'Encrypted End-to-End', desc: 'Patient payment data protected at every step' },
    { icon: CreditCard, title: 'Tokenized Card Storage', desc: 'Secure card-on-file without exposing card numbers' },
    { icon: FileText, title: 'HIPAA-Aware Workflows', desc: 'Designed with healthcare privacy considerations' }
  ];

  const marketingFeatures = [
    { icon: MessageSquare, text: 'Patient communication automation' },
    { icon: Star, text: 'Review generation' },
    { icon: CalendarCheck, text: 'Appointment reminders' },
    { icon: RefreshCw, text: 'Recall campaigns' },
    { icon: MapPin, text: 'Local SEO for medical practices' },
    { icon: Megaphone, text: 'Online reputation management' }
  ];

  const whyChooseUs = [
    { icon: MapPin, text: 'Florida-based support with nationwide coverage' },
    { icon: Activity, text: 'Integrated EMR payment solutions' },
    { icon: DollarSign, text: 'Transparent medical processing pricing' },
    { icon: Zap, text: 'Fast funding' },
    { icon: Receipt, text: 'Chargeback support' },
    { icon: Building2, text: 'Professional installation and onboarding' }
  ];

  const searchTerms = [
    'Medical payment processing Florida',
    'Merchant services for medical clinics',
    'Urgent care payment solutions',
    'EMR-integrated payment processing',
    'Healthcare credit card processing near me'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Dual Video */}
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
              Medical Payment Processing & EMR Integration
            </h1>
            <p className="text-xl text-purple-200 font-semibold mb-4">
              Secure Merchant Services for Medical Offices, Urgent Care & Multi-Provider Clinics
            </p>
            <p className="text-lg text-purple-100 mb-4">
              Merchant Solutions Corp provides comprehensive payment solutions for medical clinics and urgent care centers across Florida and all 50 U.S. states.
            </p>
            <p className="text-base text-purple-200/80 mb-8">
              Through HealthcarePMB.com, we deliver secure medical payment processing, EMR integration, automated copay collection, and insurance billing support designed specifically for healthcare providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg"
                onClick={() => setShowContactModal(true)}
                data-testid="hero-quote-btn"
              >
                Get Custom Solution
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-6"
                onClick={openCalendly}
                data-testid="hero-demo-btn"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Merchant Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="merchant-services-h2">
                Medical Merchant Services Built for Modern Clinics
              </h2>
              <p className="text-lg text-gray-700 mb-2">Medical offices face unique operational and compliance challenges.</p>
              <p className="text-lg text-purple-600 font-semibold mb-6">Our healthcare merchant services are designed to support:</p>
              <div className="space-y-3 mb-8">
                {clinicTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-700 mb-4 font-medium">We provide:</p>
              <div className="space-y-3 mb-6">
                {merchantServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 italic border-l-4 border-purple-600 pl-4">
                Our systems improve front desk efficiency and reduce billing delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges We Solve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="challenges-h2">
              Industry Challenges We Solve
            </h2>
            <p className="text-lg text-gray-600">We understand the payment challenges facing medical clinics.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {industryChallenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{challenge.title}</h3>
                    <p className="text-gray-600 text-sm">{challenge.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="text-center text-gray-600 italic">
            Our goal is to streamline payments while maintaining compliance and accuracy.
          </p>
        </div>
      </section>

      {/* EMR/PMS Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="emr-integration-h2">
              Integrated Payment Processing for Medical EMR & PMS Systems
            </h2>
            <p className="text-xl text-purple-600 font-semibold mb-4">Stop manually posting transactions.</p>
            <p className="text-lg text-gray-600">
              HealthcarePMB.com integrates payment processing directly into your electronic medical record (EMR) or practice management system (PMS).
            </p>
          </div>

          <div className="mb-10">
            <p className="text-center text-sm text-gray-500 font-medium uppercase tracking-wide mb-4">Supported integrations include major medical systems</p>
            <FloatingLogos />
            <p className="text-center text-sm text-gray-400 mt-3">+ Kareo + Other cloud-based medical platforms</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg font-semibold text-gray-900 mb-6 text-center">Benefits of EMR payment integration:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {ehrBenefits.map((benefit, index) => (
                <Card key={index} className="border hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-4 flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-gray-600 italic">
              Integrated medical payment solutions reduce administrative burden and increase collection rates.
            </p>
          </div>
        </div>
      </section>

      {/* Automated Copay & Balance Collection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/9413559/pexels-photo-9413559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Patient at medical office reception discussing copay and payment"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="copay-h2">
                Automated Copay & Balance Collection
              </h2>
              <p className="text-xl text-purple-600 font-semibold mb-6">Missed copays hurt revenue.</p>
              <p className="text-gray-700 mb-4 font-medium">Our medical payment systems allow clinics to:</p>
              <div className="space-y-3 mb-6">
                {copayFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 italic border-l-4 border-purple-600 pl-4">
                Automated copay collection increases upfront revenue and reduces outstanding receivables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Care & High-Volume Clinic Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="urgent-care-h2">
                Urgent Care & High-Volume Clinic Solutions
              </h2>
              <p className="text-xl text-purple-600 font-semibold mb-6">Urgent care centers require speed and stability.</p>
              <p className="text-gray-700 mb-4 font-medium">Our payment processing solutions for urgent care provide:</p>
              <div className="space-y-3 mb-6">
                {urgentCareFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 italic border-l-4 border-purple-600 pl-4">
                Specifically designed to accommodate high patient volume and ensure rapid patient turnover.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1758691461888-b74515208d7a?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800"
                alt="Doctor using computer in modern urgent care clinic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HIPAA & PCI Security */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="security-h2">
              HIPAA-Aware & PCI-Compliant Security
            </h2>
            <p className="text-xl text-purple-600 font-semibold mb-2">Healthcare requires strict data protection.</p>
            <p className="text-lg text-gray-600">Our medical payment processing systems are:</p>
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
            We protect patient payment data while supporting regulatory standards.
          </p>
        </div>
      </section>

      {/* Healthcare Marketing + Payments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="marketing-h2">
              Healthcare Marketing and Payments in One Platform
            </h2>
            <p className="text-xl text-purple-600 font-semibold mb-2">HealthcarePMB.com combines payment solutions with medical marketing services.</p>
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
            Payment processing integrated with marketing tools improves revenue and patient retention.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="why-choose-h2">
              Why Medical Clinics Choose Merchant Solutions Corp
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
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
            We specialize in merchant services for healthcare providers.
          </p>
        </div>
      </section>

      {/* Florida & Nationwide + Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" data-testid="nationwide-h2">
            Medical Payment Processing in Florida & Nationwide
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
              Merchant Solutions Corp delivers secure, scalable, and integrated healthcare payment solutions.
            </p>
          </div>
          <p className="text-center text-gray-600 mb-8">
            Through HealthcarePMB.com, we connect medical payment processing, EMR integration, insurance workflows, and marketing services into one unified system.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="final-cta-h2">
            Get Medical Payment Processing & EMR Integration Done Right
          </h2>
          <p className="text-xl text-purple-100 mb-4">
            Secure. Integrated. HIPAA-Aware. Supported.
          </p>
          <p className="text-lg text-purple-200 mb-8">
            Merchant Solutions Corp + HealthcarePMB.com
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => setShowContactModal(true)}
              data-testid="cta-quote-btn"
            >
              Get Custom Solution
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6"
              onClick={openCalendly}
              data-testid="cta-demo-btn"
            >
              Book a Demo
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
            <Link to="/dental-payment-processing-emr-integration" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Dental Practices</Link>
            <Link to="/industries/chiropractors" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Chiropractors</Link>
            <Link to="/restaurant-payment-processing-florida" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Restaurants</Link>
          </div>
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides medical payment processing, EMR integration, and healthcare merchant services across Florida and all 50 U.S. states. We integrate with athenahealth, eClinicalWorks, NextGen Healthcare, DrChrono, AdvancedMD, Kareo, Rectangle Health, and other leading medical practice management systems. Serving family medicine, urgent care, specialty practices, multi-provider groups, outpatient facilities, and telehealth providers.
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
              title="Get Custom Solution"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalClinics;
