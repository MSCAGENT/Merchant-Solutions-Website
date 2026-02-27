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
  AlertTriangle,
  Globe,
  TrendingUp,
  Leaf,
  Dices,
  FlaskConical,
  BarChart3,
  FileCheck,
  RefreshCw,
  Banknote,
  Scale,
  Building2,
  ArrowRight
} from 'lucide-react';
import { Heart, ShoppingBag, Gift, Pill } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const HighRiskMerchant = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const heroImages = [
    'https://static.prod-images.emergentagent.com/jobs/4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/images/bab5ec57779a12f57a1080f73584ae62714b91f154fd1fc9a1aecf243014f48b.png',
    'https://static.prod-images.emergentagent.com/jobs/4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/images/780eed5f7d7ffb0c626ac0b7070c7e03ca90ddc288de90e546422482f14e1d67.png',
    'https://static.prod-images.emergentagent.com/jobs/4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/images/a4786b54ced0131295af787976e4a4afc33a783d1d3a1cd782b60a5a37946144.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    document.title = 'High Risk Merchant Services | Online Gambling, Peptides, Prop Firms & CBD Processing';
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = 'High risk merchant services for online gambling, peptides, prop trading firms, CBD, and kratom businesses. Secure payment processing with chargeback protection and multi-currency support.';
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
    if (!showCalendlyModal) return;
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const s = document.createElement('script');
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.head.appendChild(s);
    }
  }, [showCalendlyModal]);

  const verticals = [
    {
      icon: Dices,
      title: 'Online Gambling & iGaming',
      desc: 'Payment processing for online casinos, sports betting platforms, fantasy sports, sweepstakes, and skill-based gaming operators.',
      image: 'https://images.pexels.com/photos/4677404/pexels-photo-4677404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      features: [
        'Multi-currency payment acceptance',
        'Real-time fraud detection and velocity checks',
        'Chargeback prevention and dispute management',
        'Recurring deposit and withdrawal processing',
        'KYC/AML compliant payment flows',
        'Geo-restricted payment routing'
      ],
      challenges: 'Online gambling merchants face high chargeback ratios, regulatory complexity across jurisdictions, and frequent processor shutdowns. We provide stable, long-term processing solutions with proactive chargeback management.'
    },
    {
      icon: FlaskConical,
      title: 'Peptides & Research Chemicals',
      desc: 'Merchant accounts for peptide suppliers, research chemical vendors, nootropics companies, and specialty supplement brands.',
      image: 'https://images.unsplash.com/photo-1671493229048-4dddd00ca84a?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800',
      features: [
        'Stable merchant accounts for peptide sales',
        'Recurring billing for subscription models',
        'Secure online checkout with fraud screening',
        'Multi-gateway redundancy',
        'Age verification integration',
        'International payment support'
      ],
      challenges: 'Peptide and research chemical merchants are frequently shut down by mainstream processors due to product classification issues. We specialize in underwriting these accounts with banks that understand the industry.'
    },
    {
      icon: TrendingUp,
      title: 'Proprietary Trading Firms',
      desc: 'Payment solutions for prop firms, funded trader programs, evaluation platforms, and trading education companies.',
      image: 'https://images.pexels.com/photos/5831259/pexels-photo-5831259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      features: [
        'High-volume subscription billing',
        'Evaluation fee processing with refund management',
        'Multi-currency acceptance for global traders',
        'Chargeback prevention for digital services',
        'Payout and profit-split processing',
        'Recurring billing for challenge programs'
      ],
      challenges: 'Prop trading firms face elevated chargeback rates from failed evaluations and refund disputes. Our chargeback prevention tools and dispute management systems protect your revenue and maintain processing stability.'
    },
    {
      icon: Leaf,
      title: 'CBD, Kratom & Hemp',
      desc: 'Compliant payment processing for CBD retailers, kratom vendors, hemp-derived product companies, and smokeshops.',
      image: 'https://images.pexels.com/photos/17605611/pexels-photo-17605611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      features: [
        'CBD and kratom compliant merchant accounts',
        'In-store and eCommerce processing',
        'Age verification and compliance tools',
        'Subscription and recurring order billing',
        'Multi-location retail support',
        'State-by-state compliance guidance'
      ],
      challenges: 'CBD and kratom businesses are classified as high risk due to shifting regulations and banking restrictions. We partner with acquiring banks experienced in hemp-derived products to deliver stable, long-term processing.'
    },
    {
      icon: Heart,
      title: 'Dating & Matchmaking Platforms',
      desc: 'Card-not-present payment processing for online dating sites, matchmaking services, subscription-based relationship platforms, and social discovery apps.',
      image: 'https://images.unsplash.com/photo-1671013018958-9ed33c537c68?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800',
      features: [
        'Recurring subscription billing management',
        'In-app purchase and premium feature processing',
        'Chargeback prevention for digital memberships',
        'Global payment acceptance in multiple currencies',
        'Fraud screening for card-not-present transactions',
        'Automated renewal and cancellation workflows'
      ],
      challenges: 'Dating platforms experience high chargeback rates from disputed subscriptions, buyer\'s remorse, and unauthorized purchases. We implement robust prevention tools and work with acquiring banks that specialize in digital subscription models.'
    },
    {
      icon: ShoppingBag,
      title: 'Online Marketplaces',
      desc: 'Card-not-present merchant accounts for multi-vendor marketplaces, peer-to-peer selling platforms, dropshipping stores, and aggregated commerce sites.',
      image: 'https://images.unsplash.com/photo-1705234384435-e06172b6d2f9?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800',
      features: [
        'Split payment and multi-vendor payout processing',
        'Escrow and hold-release payment workflows',
        'Seller onboarding and KYC compliance',
        'Multi-currency and cross-border transactions',
        'Dispute resolution and buyer protection tools',
        'High-volume transaction processing at scale'
      ],
      challenges: 'Marketplaces face compounded risk from multiple sellers, inconsistent product quality, and high dispute rates. We provide payment infrastructure designed for aggregated commerce with proper risk segmentation and seller-level monitoring.'
    },
    {
      icon: Gift,
      title: 'Negative Option / Free Trial',
      desc: 'Card-not-present processing for free trial offers, continuity programs, subscription boxes, and negative option billing models across all product categories.',
      image: 'https://images.pexels.com/photos/8939570/pexels-photo-8939570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      features: [
        'Compliant free-to-paid conversion billing',
        'Clear disclosure and consent capture workflows',
        'Chargeback prevention with Verifi and Ethoca alerts',
        'Subscription lifecycle management',
        'Transparent cancellation and refund processing',
        'Real-time chargeback ratio monitoring'
      ],
      challenges: 'Negative option and free trial businesses face the highest chargeback rates in eCommerce due to billing disputes and consumer confusion. We structure compliant billing flows, implement pre-chargeback alerts, and partner with banks that accept this model when done correctly.'
    },
    {
      icon: Pill,
      title: 'Pharmacy & Prescription Products',
      desc: 'Card-not-present payment processing for online pharmacies, telemedicine prescription services, compounding pharmacies, and direct-to-patient medication delivery.',
      image: 'https://images.pexels.com/photos/7195190/pexels-photo-7195190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      features: [
        'HIPAA-aware payment workflow design',
        'Recurring prescription billing and auto-refill processing',
        'Telemedicine consultation fee processing',
        'Secure card-on-file tokenization for patients',
        'Insurance co-pay and out-of-pocket collection',
        'Compliance with state and federal pharmacy regulations'
      ],
      challenges: 'Online pharmacies and telemedicine platforms face strict regulatory oversight, product classification scrutiny, and elevated chargeback risk. We work with acquiring banks experienced in healthcare commerce and ensure payment workflows support pharmacy licensing requirements.'
    }
  ];

  const whyHighRisk = [
    'High chargeback ratios',
    'Regulatory and legal complexity',
    'Product or service classification issues',
    'Reputational risk for acquiring banks',
    'Cross-border and multi-currency transactions',
    'Recurring billing with high refund rates'
  ];

  const processingFeatures = [
    { icon: Shield, title: 'Chargeback Prevention', desc: 'Real-time alerts, Verifi and Ethoca integrations, and proactive dispute resolution' },
    { icon: Globe, title: 'Multi-Currency Processing', desc: 'Accept payments in 30+ currencies with dynamic conversion' },
    { icon: Lock, title: 'PCI-DSS Level 1 Security', desc: 'End-to-end encryption, tokenization, and 3D Secure authentication' },
    { icon: RefreshCw, title: 'Gateway Redundancy', desc: 'Multi-processor failover so transactions never stop' },
    { icon: BarChart3, title: 'Real-Time Reporting', desc: 'Detailed analytics, chargeback tracking, and revenue dashboards' },
    { icon: Scale, title: 'Compliance Support', desc: 'KYC/AML workflows, age verification, and jurisdiction-specific routing' }
  ];

  const whyChooseUs = [
    { icon: Building2, text: 'Established high risk banking relationships' },
    { icon: Shield, text: 'Chargeback prevention and dispute management' },
    { icon: Globe, text: 'Domestic and international processing' },
    { icon: DollarSign, text: 'Transparent high risk pricing' },
    { icon: Zap, text: 'Fast approvals and quick go-live' },
    { icon: Headphones, text: 'Dedicated high risk account managers' },
    { icon: RefreshCw, text: 'Multi-gateway redundancy' },
    { icon: Lock, text: 'PCI Level 1 certified infrastructure' }
  ];

  const faqs = [
    { question: 'Why is my business classified as high risk?', answer: 'Businesses are classified as high risk due to elevated chargeback rates, regulatory complexity, product restrictions, or reputational concerns for acquiring banks. Online gambling, peptides, prop firms, and CBD all fall into this category due to industry-specific risk factors.' },
    { question: 'How fast can I get approved for a high risk merchant account?', answer: 'Approval timelines vary by vertical. Most accounts are approved within 3-10 business days depending on underwriting requirements, documentation, and the acquiring bank.' },
    { question: 'What chargeback ratio is acceptable?', answer: 'Most processors require chargeback ratios below 1%. We provide tools and strategies to keep your ratio well within acceptable limits, including real-time alerts, prevention integrations, and dispute management support.' },
    { question: 'Can you process international payments for my high risk business?', answer: 'Yes. We support multi-currency processing in 30+ currencies with domestic and international acquiring bank relationships.' },
    { question: 'What happens if my current processor shuts down my account?', answer: 'We specialize in transitioning merchants from terminated accounts. Our banking partners understand high risk verticals and provide stable, long-term processing solutions.' },
    { question: 'Do you support both eCommerce and retail high risk processing?', answer: 'Yes. We provide online payment gateways, virtual terminals, and in-store POS solutions for high risk merchants across all verticals.' },
    { question: 'What documentation do I need to apply?', answer: 'Typically we require business formation documents, processing history (if available), bank statements, government-issued ID, website URL, and product/service descriptions. Requirements vary by vertical.' }
  ];

  const searchTerms = [
    'High risk merchant account',
    'Online gambling payment processing',
    'Peptide merchant services',
    'Prop firm payment processing',
    'CBD merchant account',
    'Kratom payment processing',
    'High risk credit card processing'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-gray-900">
        {heroImages.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ${i === activeSlide ? 'opacity-40' : 'opacity-0'}`}
          >
            <img
              src={src}
              alt={['Online gambling and casino', 'Proprietary trading firm', 'CBD dispensary'][i]}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-purple-900/70 to-gray-900/80" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-1.5 mb-6">
              <AlertTriangle className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-purple-200 font-medium">High Risk Merchant Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg" data-testid="hero-h1">
              High Risk Payment Processing for Businesses Banks Say No To
            </h1>
            <p className="text-xl text-purple-200 font-semibold mb-4">
              Online Gambling | Peptides | Prop Trading Firms | CBD & Kratom | Dating | Marketplaces | Free Trial | Pharmacy
            </p>
            <p className="text-lg text-gray-300 mb-4">
              Merchant Solutions Corp provides stable, long-term high risk merchant accounts for industries that mainstream processors decline.
            </p>
            <p className="text-base text-gray-400 mb-8">
              We deliver secure payment processing, chargeback prevention, multi-currency support, and dedicated account management for high risk businesses across the United States and internationally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg"
                onClick={() => setShowContactModal(true)}
                data-testid="hero-quote-btn"
              >
                Get Approved Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6"
                onClick={() => setShowCalendlyModal(true)}
                data-testid="hero-demo-btn"
              >
                Schedule a Risk Review
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Industries Are High Risk */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="why-high-risk-h2">
            Why These Industries Need Specialized Processing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Traditional processors decline these businesses due to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whyHighRisk.map((reason, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-xl py-3 px-4 border text-left">
                <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{reason}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-8 italic">
            We work with acquiring banks and payment partners that specialize in high risk verticals — delivering stable, compliant processing where others can't.
          </p>
        </div>
      </section>

      {/* Industry Verticals - Each with its own detailed section */}
      {verticals.map((vertical, index) => {
        const Icon = vertical.icon;
        const isEven = index % 2 === 0;
        return (
          <section key={index} className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900" data-testid={`vertical-${index}-h2`}>
                      {vertical.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{vertical.desc}</p>
                  <div className="space-y-3 mb-6">
                    {vertical.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 italic border-l-4 border-purple-600 pl-4 text-sm">
                    {vertical.challenges}
                  </p>
                  <div className="mt-6">
                    <Button
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      onClick={() => setShowContactModal(true)}
                    >
                      Apply for {vertical.title.split(' ')[0]} Processing
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={vertical.image}
                    alt={vertical.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Processing Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="features-h2">
              High Risk Payment Processing Features
            </h2>
            <p className="text-lg text-gray-600">Enterprise-grade tools built for high risk merchants</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="why-choose-h2">
              Why High Risk Merchants Choose Merchant Solutions Corp
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
            We specialize in merchant services for industries other processors won't touch.
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

      {/* SEO Search Terms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" data-testid="nationwide-h2">
            High Risk Payment Processing Nationwide
          </h2>
          <div className="bg-white rounded-2xl p-8 border mb-8">
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
              Merchant Solutions Corp delivers stable, compliant, and scalable high risk payment solutions for businesses that need a processor they can count on.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="final-cta-h2">
            Stop Getting Declined. Start Processing.
          </h2>
          <p className="text-xl text-purple-200 mb-4">
            Online Gambling. Peptides. Prop Firms. CBD & Kratom. Dating. Marketplaces. Free Trial. Pharmacy.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Merchant Solutions Corp provides the banking relationships, technology, and support to keep your high risk business processing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6"
              onClick={() => setShowContactModal(true)}
              data-testid="cta-quote-btn"
            >
              Get Approved Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6"
              onClick={() => setShowCalendlyModal(true)}
              data-testid="cta-demo-btn"
            >
              Schedule a Risk Review
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
            <Link to="/dental-payment-processing-emr-integration" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Dental</Link>
            <Link to="/medical-payment-processing-emr-integration" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Medical Clinics</Link>
            <Link to="/restaurant-payment-processing-florida" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Restaurants</Link>
          </div>
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides high risk merchant accounts and payment processing for online gambling, iGaming, sports betting, peptide suppliers, research chemicals, proprietary trading firms, funded trader programs, CBD retailers, kratom vendors, hemp-derived products, and other high risk verticals. We deliver chargeback prevention, multi-currency processing, gateway redundancy, and dedicated account management nationwide.
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
              title="High Risk Merchant Application"
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

export default HighRiskMerchant;
