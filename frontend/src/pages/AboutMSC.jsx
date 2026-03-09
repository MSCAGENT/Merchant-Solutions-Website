import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ChevronDown, ChevronRight, CreditCard, Shield, Zap,
  Building2, MapPin, Monitor, Users, Headphones, BarChart3, Globe,
  UtensilsCrossed, ShoppingBag, Scissors, Briefcase, Heart, Store,
  Smartphone, Handshake, TrendingUp, Award, Clock
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

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

export default function AboutMSC() {
  const [showFormModal, setShowFormModal] = useState(false);

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

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Merchant Solutions Corp",
    "url": "https://merchantsolutionscorp.com",
    "logo": "https://merchantsolutionscorp.com/logo.png",
    "foundingDate": "2012",
    "areaServed": [
      { "@type": "State", "name": "Florida" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" }
    ],
    "description": "Merchant Solutions Corp provides merchant services and POS systems to businesses across Florida and the United States since 2012.",
    "sameAs": []
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is a merchant services company?", "acceptedAnswer": { "@type": "Answer", "text": "A merchant services company provides businesses with the technology and infrastructure required to accept credit card and digital payments." } },
      { "@type": "Question", "name": "What is a POS Dealer and how do they differ from the Software company?", "acceptedAnswer": { "@type": "Answer", "text": "A POS dealer is an exclusive service and implementation arm of the POS software company servicing their local community." } },
      { "@type": "Question", "name": "How long has Merchant Solutions Corp been in business?", "acceptedAnswer": { "@type": "Answer", "text": "Merchant Solutions Corp has served businesses since 2012." } },
      { "@type": "Question", "name": "What industries do you support?", "acceptedAnswer": { "@type": "Answer", "text": "We support restaurants, retail stores, service businesses, healthcare providers, and many other industries." } }
    ]
  };

  const IMG = {
    hero: 'https://customer-assets.emergentagent.com/job_d913f905-fbe6-4eac-a560-43e237e806df/artifacts/kg0b62fl_Vivid_LP_FeatureImage_hero_mobile.jpg',
    boostProfit: 'https://customer-assets.emergentagent.com/job_d913f905-fbe6-4eac-a560-43e237e806df/artifacts/b2esovjf_Vivid-LP-FeatureValue-image-boostprofit-v2.jpg',
    custExp: 'https://customer-assets.emergentagent.com/job_d913f905-fbe6-4eac-a560-43e237e806df/artifacts/4qf0q4lp_Vivid-LP-FeatureValue-image-custexp-v2.jpg',
    operations: 'https://customer-assets.emergentagent.com/job_d913f905-fbe6-4eac-a560-43e237e806df/artifacts/ypw5fvzc_Vivid-LP-FeatureValue-image-operations-v2.jpg',
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Merchant Services &amp; POS Systems Provider | Merchant Solutions Corp</title>
        <meta name="description" content="Merchant Solutions Corp has provided merchant services and POS systems to businesses across Florida since 2012. Payment processing, POS technology, and payment solutions for growing businesses." />
        <meta name="keywords" content="merchant services company, payment processing provider, POS systems provider, merchant services Florida, restaurant POS systems, retail POS systems" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/about-merchant-solutions-corp" />
        <meta property="og:title" content="Merchant Services & POS Systems Provider | Merchant Solutions Corp" />
        <meta property="og:description" content="Merchant Solutions Corp has provided merchant services and POS systems to businesses across Florida since 2012." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="about-hero-h1">
                Merchant Services &amp; POS Systems Provider Since 2012
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                Merchant Solutions Corp helps businesses accept payments, deploy modern POS systems, and streamline operations through reliable payment technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="hero-contact-btn">
                  Contact Sales
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6" onClick={openCalendly} data-testid="hero-book-btn">
                  Book a Consultation
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400" data-testid="trust-line">
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-purple-400" /> Serving Florida &amp; Surrounding States</span>
                <span className="flex items-center gap-1.5"><Globe className="h-4 w-4 text-purple-400" /> International Coverage since 2020</span>
                <span className="flex items-center gap-1.5"><Monitor className="h-4 w-4 text-purple-400" /> POS Systems &amp; Payment Processing</span>
                <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-purple-400" /> Trusted Since 2012</span>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/20 rounded-2xl z-10 mix-blend-multiply" />
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={IMG.hero} alt="merchant-services-pos-systems-overview" className="w-full h-[440px] object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: About */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="about-section-h2">A Merchant Services Company Built for Modern Businesses</h2>
              <p className="text-lg text-gray-700 mb-4">
                Merchant Solutions Corp is a payment technology company specializing in merchant services and point-of-sale systems for businesses across Florida and the United States.
              </p>
              <p className="text-gray-700 mb-4">
                Founded in 2012, the company began with a mission to help small and midsized businesses accept payments efficiently while reducing the complexity associated with credit card processing.
              </p>
              <p className="text-gray-700 mb-4">
                Over the past decade, Merchant Solutions Corp has evolved into a full-service payment infrastructure provider supporting restaurants, retail stores, service companies, and enterprise organizations.
              </p>
              <p className="text-gray-700">
                By combining merchant services with modern POS technology, businesses gain access to tools that help them manage transactions, track sales performance, and deliver better customer experiences.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-blue-500/10 rounded-2xl z-10" />
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={IMG.boostProfit} alt="merchant-services-payment-processing" className="w-full h-[420px] object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Payment Processing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-blue-500/10 rounded-2xl z-10" />
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={IMG.custExp} alt="credit-card-payment-terminal" className="w-full h-[420px] object-cover object-top" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="payment-processing-h2">Payment Processing Solutions for Growing Businesses</h2>
              <p className="text-lg text-gray-700 mb-6">
                Merchant Solutions Corp provides secure and scalable merchant services that allow businesses to accept credit cards, debit cards, and mobile payments at an affordable rate.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">Payment processing services include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {['Credit card processing', 'Contactless payments', 'Mobile wallet payments', 'Online payment gateways', 'ACH payment solutions', 'QR code payments'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                Our payment infrastructure connects businesses directly to major card networks and acquiring banks to ensure secure and reliable transaction processing.
              </p>
              <p className="text-gray-700 mb-6">
                Businesses benefit from flexible pricing models and transparent payment processing programs designed to fit different industries and transaction volumes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/payment-processing-pricing"><Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">Payment Processing Pricing <ChevronRight className="ml-1 h-4 w-4" /></Button></Link>
                <Link to="/subscription-payment-processing"><Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">Subscription Processing <ChevronRight className="ml-1 h-4 w-4" /></Button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: POS Systems */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="pos-systems-h2">Modern POS Systems for Restaurants, Retail &amp; Service Businesses</h2>
              <p className="text-lg text-gray-700 mb-6">
                Merchant Solutions Corp deploys modern point-of-sale systems that help businesses manage payments, inventory, and reporting from a single platform.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">POS solutions include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {['Restaurant POS systems', 'Retail POS systems', 'Self-ordering kiosks', 'Mobile POS devices', 'QR ordering systems', 'Inventory management POS'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                By combining POS technology with payment processing infrastructure, businesses gain a complete commerce platform designed to streamline operations.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/pos-systems"><Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">POS Systems Overview <ChevronRight className="ml-1 h-4 w-4" /></Button></Link>
                <Link to="/clover-pos-system"><Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">Clover POS <ChevronRight className="ml-1 h-4 w-4" /></Button></Link>
                <Link to="/pos/square"><Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">Square POS <ChevronRight className="ml-1 h-4 w-4" /></Button></Link>
                <Link to="/pos/exatouch"><Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">Exatouch POS <ChevronRight className="ml-1 h-4 w-4" /></Button></Link>
                <Link to="/ingenico-payment-terminals"><Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">Ingenico Terminals <ChevronRight className="ml-1 h-4 w-4" /></Button></Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-blue-500/10 rounded-2xl z-10" />
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={IMG.operations} alt="restaurant-pos-system" className="w-full h-[420px] object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="industries-h2">Supporting Businesses Across Multiple Industries</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Merchant Solutions Corp supports businesses across many industries that depend on reliable payment technology.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-8">
            {[
              { icon: UtensilsCrossed, label: 'Restaurants & Hospitality', path: '/restaurant-payment-processing-services' },
              { icon: ShoppingBag, label: 'Retail Stores', path: '/retail-payment-solutions' },
              { icon: Scissors, label: 'Salons & Spas', path: '/salon-spa-payment-solutions' },
              { icon: Briefcase, label: 'Professional Services', path: '/professional-services-payment-processing-clover-pos' },
              { icon: Heart, label: 'Healthcare Providers', path: '/healthcare-payment-solutions' },
              { icon: Globe, label: 'E-Commerce Businesses', path: '/solutions/payment-processing' },
              { icon: Store, label: 'Specialty Businesses', path: '/high-risk-merchant-account' },
            ].map((ind, i) => (
              <Link key={i} to={ind.path} className="block">
                <Card className="border hover:border-purple-300 hover:shadow-lg transition-all h-full">
                  <CardContent className="p-5 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                      <ind.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{ind.label}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            Each industry requires different payment workflows and POS capabilities, which is why Merchant Solutions Corp offers flexible technology solutions tailored to the operational needs of each business.
          </p>
        </div>
      </section>

      {/* SECTION 5: Florida */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="florida-h2">Serving Businesses Across Florida and Surrounding States</h2>
              <p className="text-xl text-purple-200 mb-4">
                Since 2012, Merchant Solutions Corp has supported businesses across Florida and neighboring states with reliable merchant services and POS technology.
              </p>
              <p className="text-purple-300 mb-4">
                Our team works with local businesses that require secure payment processing and modern commerce solutions to keep up with evolving customer expectations.
              </p>
              <p className="text-purple-300">
                By combining local expertise with national payment infrastructure, we provide businesses with both personalized service and enterprise-grade payment technology.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '2012', label: 'Founded' },
                { num: '1000+', label: 'Merchants Served' },
                { num: '50+', label: 'Industries Supported' },
                { num: '24/7', label: 'Merchant Support' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <p className="text-3xl font-extrabold text-white mb-1">{stat.num}</p>
                  <p className="text-sm text-purple-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Dealership Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-blue-500/10 rounded-2xl z-10" />
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={IMG.boostProfit} alt="merchant-services-dealer-partner-network" className="w-full h-[400px] object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="dealer-h2">A Dealer Network for Merchant Services &amp; POS Systems</h2>
              <p className="text-lg text-gray-700 mb-4">
                Merchant Solutions Corp operates through a dealership-style distribution model that allows independent sales agents, consultants, and technology partners to deploy merchant services and POS systems under their own brand.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">This model allows partners to:</p>
              <div className="space-y-3 mb-6">
                {[
                  'Sell payment processing solutions',
                  'Deploy POS technology to businesses',
                  'Build recurring merchant portfolios',
                  'Support merchants in their local markets',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                By combining centralized infrastructure with decentralized distribution, Merchant Solutions Corp expands access to modern payment technology while empowering partners to build their own brand in the merchant services industry.
              </p>
              <Link to="/white-label-merchant-services">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6">
                  White Label Merchant Services <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="why-choose-h2">Focused on Transparency, Technology and Partnership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Businesses choose Merchant Solutions Corp because of its commitment to transparency and modern payment technology.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: BarChart3, title: 'Transparent Pricing', desc: 'Clear payment processing pricing with no hidden fees or unexpected charges.' },
              { icon: Monitor, title: 'Modern POS Systems', desc: 'Modern POS systems and payment devices from leading brands like Clover, Square, and Exatouch.' },
              { icon: TrendingUp, title: 'Scalable Infrastructure', desc: 'Payment infrastructure that scales with your business from one location to hundreds.' },
              { icon: Headphones, title: 'Dedicated Support', desc: 'Merchant support teams available to help with setup, training, and ongoing operations.' },
              { icon: Handshake, title: 'Flexible Programs', desc: 'Flexible programs designed to fit growing businesses across multiple industries.' },
            ].map((item, i) => (
              <Card key={i} className="border hover:border-purple-300 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-gray-700 text-center mt-8 max-w-3xl mx-auto">
            Our goal is to provide businesses with reliable payment technology while maintaining clear communication and long-term partnerships.
          </p>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-20 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12" data-testid="faq-h2">Merchant Services FAQ</h2>
          <FAQItem question="What is a merchant services company?" answer="A merchant services company provides businesses with the technology and infrastructure required to accept credit card and digital payments." />
          <FAQItem question="What is a POS Dealer and how do they differ from the Software company?" answer="A POS dealer is an exclusive service and implementation arm of the POS software company servicing their local community." />
          <FAQItem question="How long has Merchant Solutions Corp been in business?" answer="Merchant Solutions Corp has served businesses since 2012." />
          <FAQItem question="What industries do you support?" answer="We support restaurants, retail stores, service businesses, healthcare providers, and many other industries." />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="final-cta-h2">Work With a Merchant Services Partner That Understands Your Business</h2>
          <p className="text-xl text-purple-100 mb-8">
            Whether you need reliable payment processing, a modern POS system, or a partner to help scale your business operations, Merchant Solutions Corp provides the technology and support to help you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="cta-contact-btn">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" onClick={openCalendly} data-testid="cta-book-btn">
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 text-center mb-4">Explore Our Solutions</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'POS Systems Overview', path: '/pos-systems' },
              { label: 'Payment Terminals', path: '/pos/payment-terminals-overview' },
              { label: 'Advantage Credit Program', path: '/free-pos-system' },
              { label: 'White Label Merchant Services', path: '/white-label-merchant-services' },
              { label: 'Payment Processing Pricing', path: '/payment-processing-pricing' },
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
