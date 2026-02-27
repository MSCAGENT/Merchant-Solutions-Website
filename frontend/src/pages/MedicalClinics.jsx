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
  Smartphone,
  MessageSquare,
  FileText,
  RefreshCw,
  Heart,
  Users,
  BarChart3,
  Megaphone,
  CalendarCheck,
  Building2,
  Stethoscope,
  Activity,
  ClipboardList
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

  const heroVideos = [
    'https://customer-assets.emergentagent.com/job_4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/artifacts/8hutwwfs_Medical.mp4',
    'https://customer-assets.emergentagent.com/job_4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/artifacts/4c9275jq_Medical2.mp4'
  ];

  useEffect(() => {
    document.title = 'Medical Clinic Payment Processing & EHR Integration | Healthcare Merchant Services';
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = 'Medical clinic payment processing integrated with athenahealth, eClinicalWorks, NextGen and more. Healthcare merchant services, EHR integration, and patient billing solutions in Florida and nationwide.';
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
    if (currentRef) {
      currentRef.play().catch(() => {});
    }
  }, [activeVideo]);

  const handleVideoEnded = () => {
    setActiveVideo((prev) => (prev + 1) % heroVideos.length);
  };

  useEffect(() => {
    if (!showCalendlyModal) return;
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const s = document.createElement('script');
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.head.appendChild(s);
    }
  }, [showCalendlyModal]);

  const merchantServices = [
    'Credit card processing for medical clinics',
    'ACH and recurring patient billing',
    'Co-pay and deductible collection at check-in',
    'Contactless and EMV chip payments',
    'Text-to-pay and online patient payment portals',
    'Insurance balance and statement processing'
  ];

  const ehrBenefits = [
    'Automatic payment posting to patient accounts',
    'Reduced front-desk billing errors',
    'Faster end-of-day reconciliation',
    'Secure tokenized card-on-file storage',
    'Recurring billing for ongoing treatments',
    'Real-time payment reporting and analytics'
  ];

  const securityFeatures = [
    { icon: Shield, title: 'PCI-DSS Compliant', desc: 'Level 1 certified payment infrastructure' },
    { icon: Lock, title: 'End-to-End Encryption', desc: 'Patient payment data protected at every step' },
    { icon: CreditCard, title: 'Tokenized Card Storage', desc: 'Secure card-on-file without exposing card numbers' },
    { icon: FileText, title: 'HIPAA-Aware Workflows', desc: 'Payment processes designed for healthcare privacy requirements' }
  ];

  const collectionFeatures = [
    'Text-to-pay after visits and procedures',
    'Email statements with secure payment links',
    'Automated patient balance reminders',
    'Flexible payment plan configuration',
    'Online patient payment portals',
    'In-office contactless tap-to-pay'
  ];

  const marketingFeatures = [
    { icon: Star, text: 'Online reputation management' },
    { icon: MessageSquare, text: 'Automated patient review requests' },
    { icon: Users, text: 'Patient communication and messaging' },
    { icon: CalendarCheck, text: 'Appointment reminders and recall' },
    { icon: RefreshCw, text: 'Patient retention campaigns' },
    { icon: Megaphone, text: 'SEO and digital marketing for clinics' }
  ];

  const whyChooseUs = [
    { icon: Headphones, text: 'Dedicated healthcare account manager' },
    { icon: MapPin, text: 'Nationwide medical merchant services' },
    { icon: Activity, text: 'Medical EHR payment integrations' },
    { icon: DollarSign, text: 'Transparent healthcare processing pricing' },
    { icon: Zap, text: 'Next-day funding options' },
    { icon: Receipt, text: 'Chargeback and dispute assistance' },
    { icon: Building2, text: 'On-site installation and configuration' },
    { icon: Megaphone, text: 'Digital Marketing, Ads and Voice AI services' }
  ];

  const whoWeServe = [
    'Primary Care Clinics', 'Urgent Care Centers', 'Specialty Practices', 'Surgical Centers',
    'OB/GYN Offices', 'Pediatric Clinics', 'Multi-location Medical Groups', 'Telehealth Providers'
  ];

  const faqs = [
    { question: 'Can you integrate payment processing with my medical EHR?', answer: 'Yes. We integrate with leading medical EHR and practice management systems including athenahealth, eClinicalWorks, NextGen, DrChrono, AdvancedMD, and more to automate payment posting and reconciliation.' },
    { question: 'Do you support recurring patient billing and payment plans?', answer: 'Yes. We configure recurring billing, card-on-file storage, and flexible payment plans for patient balances, co-pays, and ongoing treatment costs.' },
    { question: 'Is medical payment processing different from standard merchant services?', answer: 'Yes. Medical clinics require EHR integration, HIPAA-aware workflows, insurance co-pay collection, and recurring billing tools that standard processing does not provide.' },
    { question: 'How fast do medical clinics receive funding?', answer: 'Most medical practices receive funding within 1-2 business days. Next-day funding is available depending on account configuration.' },
    { question: 'Can you help reduce patient payment chargebacks?', answer: 'Yes. We provide chargeback documentation tools, dispute support, and receipt delivery systems to prevent and manage disputes.' },
    { question: 'Do you support telehealth and virtual visit payments?', answer: 'Yes. Our payment solutions support online payment links, virtual terminal processing, and text-to-pay for telehealth and remote consultations.' },
    { question: 'Can you process CareCredit and third-party financing cards?', answer: 'Yes. We have the ability to process CareCredit cards and other third-party healthcare financing cards within our system.' }
  ];

  const searchTerms = [
    'Medical clinic payment processing Florida',
    'Healthcare merchant services near me',
    'Medical EHR payment integration',
    'Credit card processing for medical offices',
    'HIPAA compliant payment processing'
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
              Medical Clinic Payment Processing & EHR Integration
            </h1>
            <p className="text-xl text-purple-200 font-semibold mb-4">
              Secure Credit Card Processing Integrated with Your Medical EHR or Practice Management System
            </p>
            <p className="text-lg text-purple-100 mb-4">
              Merchant Solutions Corp provides medical clinic payment processing and healthcare merchant services fully integrated with leading EHR and practice management platforms.
            </p>
            <p className="text-base text-purple-200/80 mb-8">
              Through HealthcarePMB.com, we combine secure credit card processing, electronic health record integrations, and clinic marketing services into one platform for modern medical practices across Florida and all 50 U.S. states.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg"
                onClick={() => setShowCalendlyModal(true)}
                data-testid="hero-demo-btn"
              >
                Book a Clinic Demo
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

      {/* Medical Merchant Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="merchant-services-h2">
                Healthcare Merchant Services Built for Medical Clinics
              </h2>
              <div className="mb-6">
                <p className="text-lg text-gray-700">Medical clinics need more than a card terminal.</p>
                <p className="text-lg text-purple-600 font-semibold">They need secure, HIPAA-aware, and EHR-integrated payment processing.</p>
              </div>
              <p className="text-gray-700 mb-4 font-medium">Our medical merchant services include:</p>
              <div className="space-y-3 mb-6">
                {merchantServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 italic border-l-4 border-purple-600 pl-4">
                We help medical clinics reduce billing errors, accelerate funding, and improve the patient payment experience from check-in to balance collection.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/7108329/pexels-photo-7108329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Patients at medical clinic reception desk checking in"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EHR/PMS Integration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="ehr-integration-h2">
              Integrated Payment Processing for Medical EHR & Practice Management Systems
            </h2>
            <p className="text-xl text-purple-600 font-semibold mb-4">Stop double-entering patient payments.</p>
            <p className="text-lg text-gray-600">
              HealthcarePMB.com connects your payment processing directly to your electronic health record (EHR) or practice management software (PMS), eliminating manual reconciliation.
            </p>
          </div>

          <div className="mb-10">
            <p className="text-center text-sm text-gray-500 font-medium uppercase tracking-wide mb-4">Supported integrations include leading medical platforms</p>
            <FloatingLogos />
            <p className="text-center text-sm text-gray-400 mt-3">+ Other cloud-based medical EHR and PMS systems</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg font-semibold text-gray-900 mb-6 text-center">Benefits of EHR/PMS Payment Integration:</p>
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
              Integrated medical payment processing reduces administrative overhead and improves revenue cycle management.
            </p>
          </div>
        </div>
      </section>

      {/* PCI & HIPAA Security */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="security-h2">
              Medical Credit Card Processing with PCI & HIPAA Compliance
            </h2>
            <p className="text-xl text-purple-600 font-semibold mb-2">Patient data security is non-negotiable.</p>
            <p className="text-lg text-gray-600">Our healthcare payment solutions are built with compliance at every layer:</p>
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
            We configure your medical clinic payment system to protect patient data while maintaining full compliance with PCI-DSS and HIPAA standards.
          </p>
        </div>
      </section>

      {/* Improve Collections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1758691461888-b74515208d7a?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800"
                alt="Doctor at modern medical office using computer for patient management"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="collections-h2">
                Improve Patient Collections & Reduce Billing Friction
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                HealthcarePMB.com helps medical clinics increase collections without adding friction to the patient experience.
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
                Medical clinics see improved collection rates, faster insurance balance recovery, and fewer outstanding patient balances.
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
              Medical Clinic Marketing + Payments in One Platform
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
            By combining medical clinic marketing with integrated payment processing, your practice improves both revenue and patient retention.
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
            We specialize in merchant services for healthcare providers and medical clinics.
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="who-we-serve-h2">
              Medical Specialties We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {whoWeServe.map((specialty, index) => (
              <div key={index} className="flex items-center gap-2 justify-center bg-gray-50 rounded-xl py-4 px-4 border hover:border-purple-600 transition-all duration-300">
                <Stethoscope className="h-4 w-4 text-purple-600 flex-shrink-0" />
                <span className="font-medium text-gray-800 text-sm">{specialty}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Whether you operate a single-location primary care clinic in Florida or manage a multi-state medical group, we design scalable healthcare payment processing systems.
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
            Medical Clinic Payment Processing in Florida & Nationwide
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
              Merchant Solutions Corp delivers secure, integrated, and scalable healthcare payment solutions for medical clinics of all sizes.
            </p>
          </div>
          <p className="text-center text-gray-600 mb-8">
            Through HealthcarePMB.com, we combine payments, EHR integration, and marketing services into one system built specifically for medical practices.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="final-cta-h2">
            Get Medical Clinic Payment Processing & EHR Integration Done Right
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
              onClick={() => setShowCalendlyModal(true)}
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
            <Link to="/dental-payment-processing-emr-integration" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Dental Practices</Link>
            <Link to="/industries/chiropractors" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Chiropractors</Link>
            <Link to="/restaurant-payment-processing-florida" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Restaurants</Link>
          </div>
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides medical clinic payment processing, EHR integration, and healthcare merchant services across Florida and all 50 U.S. states. We integrate with athenahealth, eClinicalWorks, NextGen Healthcare, DrChrono, AdvancedMD, Rectangle Health, and other leading medical practice management systems. Serving primary care, urgent care, specialty practices, surgical centers, OB/GYN, pediatrics, multi-location medical groups, and telehealth providers.
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
              data-url="https://calendly.com/mscpayments/paynet-health-integration?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=7048fc"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalClinics;
