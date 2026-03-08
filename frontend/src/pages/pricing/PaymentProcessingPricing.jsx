import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ChevronDown, ChevronRight, DollarSign, BarChart3,
  Shield, TrendingUp, Scale, Layers, Receipt, CreditCard,
  UtensilsCrossed, ShoppingBag, Coffee, Scissors, Briefcase, Store, Globe,
  ArrowRight
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

export default function PaymentProcessingPricing() {
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is interchange plus pricing?", "acceptedAnswer": { "@type": "Answer", "text": "Interchange plus pricing separates the card network cost from the processor markup, providing a transparent pricing model." } },
      { "@type": "Question", "name": "What is flat rate payment processing?", "acceptedAnswer": { "@type": "Answer", "text": "Flat rate pricing charges the same percentage for every transaction regardless of the card used." } },
      { "@type": "Question", "name": "What is dual pricing?", "acceptedAnswer": { "@type": "Answer", "text": "Dual pricing allows businesses to display separate prices for cash and credit card payments." } },
      { "@type": "Question", "name": "Which payment pricing model is best?", "acceptedAnswer": { "@type": "Answer", "text": "The best option depends on the type of business, transaction volume, and payment methods customers prefer." } },
      { "@type": "Question", "name": "Can businesses switch pricing models?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many businesses change pricing models as their payment volume grows." } }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Payment Processing Pricing Explained | Interchange Plus, Flat Rate &amp; Dual Pricing</title>
        <meta name="description" content="Learn how payment processing pricing works including interchange plus, flat rate and dual pricing programs. Discover which option is best for your business." />
        <meta name="keywords" content="payment processing pricing, interchange plus pricing, flat rate payment processing, dual pricing credit card processing, merchant processing fees, credit card processing rates, transparent payment processing" />
        <link rel="canonical" href="/payment-processing-pricing" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* 1. HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80" alt="payment-processing-pricing" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl" data-testid="pricing-hero-h1">
            Transparent Payment Processing Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Every business is different. That is why we offer multiple payment processing pricing programs designed to fit your business model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="hero-contact-btn">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6" onClick={openCalendly} data-testid="hero-book-btn">
              Book a 30-Minute Consultation
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400" data-testid="trust-line">
            <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-purple-400" /> Transparent Pricing</span>
            <span className="flex items-center gap-1.5"><Scale className="h-4 w-4 text-purple-400" /> No One-Size-Fits-All Model</span>
            <span className="flex items-center gap-1.5"><Layers className="h-4 w-4 text-purple-400" /> Flexible Payment Programs</span>
          </div>
        </div>
      </section>

      {/* 2. WHY PRICING VARIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="why-varies-h2">Why Payment Processing Is Not One-Size-Fits-All</h2>
              <p className="text-lg text-gray-700 mb-4">
                Payment processing fees can vary depending on the type of business, transaction volume, average ticket size, and the way payments are accepted.
              </p>
              <p className="text-gray-700 mb-4">
                Restaurants, retail stores, service businesses, and e-commerce companies all have different payment processing needs.
              </p>
              <p className="text-gray-700 mb-4">
                Some businesses process a large number of small transactions, while others process fewer but higher value transactions.
              </p>
              <p className="text-gray-700 mb-4">
                Because of these differences, the best payment processing program for one business may not be the best solution for another.
              </p>
              <p className="text-gray-600">
                That is why Merchant Solutions offers multiple pricing models designed to provide flexibility and transparency.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
                alt="payment-processing-pricing"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW FEES WORK */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="fees-h2">Understanding Credit Card Processing Fees</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every credit card transaction includes several components. Understanding how these fees work helps businesses choose the most appropriate pricing program.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: CreditCard, title: 'Interchange Fees', desc: 'Set by the card networks and issuing banks. These vary depending on card type, payment method, transaction risk level, and business category.' },
              { icon: Globe, title: 'Card Network Fees', desc: 'Assessed by card brands like Visa and Mastercard for using their payment network infrastructure to route and settle transactions.' },
              { icon: Receipt, title: 'Processor Fees', desc: 'The markup or pricing structure added by the payment processor on top of the underlying interchange and network costs.' },
            ].map((item, i) => (
              <Card key={i} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Interchange fees vary depending on:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Type of card', 'Method of payment', 'Transaction risk level', 'Business category'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              A payment processor then adds a markup or pricing structure on top of these underlying costs.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PRICING OPTIONS INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="pricing-options-h2">Our Payment Processing Pricing Programs</h2>
          <p className="text-lg text-gray-600">
            Merchant Solutions offers three primary pricing models so businesses can select the structure that best fits their operations.
          </p>
        </div>
      </section>

      {/* 5. INTERCHANGE PLUS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <BarChart3 className="h-4 w-4" /> Pricing Model 1
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="interchange-h2">Interchange Plus Pricing</h2>
              <p className="text-lg text-gray-700 mb-4">
                Interchange plus pricing is one of the most transparent payment processing models available.
              </p>
              <p className="text-gray-700 mb-6">
                With this model, businesses pay the exact interchange fee set by the card networks plus a small fixed markup from the payment processor.
              </p>
              <div className="bg-white rounded-xl border border-purple-200 p-6 mb-6">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Example Structure</p>
                <p className="text-2xl font-bold text-purple-700">Interchange + Processor Markup</p>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Benefits of interchange plus pricing</h3>
              <div className="space-y-2.5">
                {[
                  'Transparent cost structure',
                  'Lower processing costs for many businesses',
                  'Ideal for higher-volume merchants',
                  'Clear reporting of interchange and markup'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-5 text-sm">
                This pricing model is commonly preferred by businesses that want detailed visibility into their payment processing costs.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="interchange-plus-pricing"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FLAT RATE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800&q=80"
                alt="credit-card-processing-fees"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <DollarSign className="h-4 w-4" /> Pricing Model 2
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="flatrate-h2">Flat Rate Pricing</h2>
              <p className="text-lg text-gray-700 mb-4">
                Flat rate pricing simplifies payment processing by charging the same rate for every transaction regardless of the card type.
              </p>
              <div className="bg-white rounded-xl border border-blue-200 p-6 mb-6">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Example Structure</p>
                <p className="text-2xl font-bold text-blue-700">One flat percentage + small transaction fee</p>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Benefits of flat rate pricing</h3>
              <div className="space-y-2.5">
                {[
                  'Predictable pricing',
                  'Simple monthly reconciliation',
                  'Easy to understand fee structure',
                  'Ideal for smaller businesses'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-5 text-sm">
                Many new businesses and startups choose flat rate processing because of its simplicity and predictable costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DUAL PRICING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <Scale className="h-4 w-4" /> Pricing Model 3
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="dualprice-h2">Dual Pricing / Cash Discount Program</h2>
              <p className="text-lg text-gray-700 mb-4">
                Dual pricing allows businesses to offer separate pricing for cash and card payments.
              </p>
              <p className="text-gray-700 mb-6">
                With this model, the listed price reflects the card price while customers paying with cash receive a discount.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Benefits of dual pricing</h3>
              <div className="space-y-2.5">
                {[
                  'Significantly reduce credit card processing costs',
                  'Encourage cash payments',
                  'Maintain transparency for customers',
                  'Legal and compliant when properly implemented'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-5 text-sm">
                Many retail stores, restaurants, and service businesses use dual pricing as a way to offset rising card processing fees.
              </p>
              <Link to="/dual-pricing-cash-discount-payment-processing" className="inline-flex items-center gap-2 text-purple-600 font-semibold mt-4 hover:text-purple-700 transition-colors">
                Learn more about Dual Pricing <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80"
                alt="dual-pricing-cash-discount"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. CHOOSING THE RIGHT MODEL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="choosing-h2">Choosing the Right Payment Processing Program</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The best pricing structure depends on several factors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: BarChart3, label: 'Transaction Volume' },
              { icon: DollarSign, label: 'Average Ticket Size' },
              { icon: Store, label: 'Industry Type' },
              { icon: CreditCard, label: 'Customer Payment Preferences' },
            ].map((item, i) => (
              <Card key={i} className="border border-gray-200 shadow-sm text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <p className="font-semibold text-gray-900">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { color: 'purple', title: 'High-Volume Businesses', desc: 'May benefit from interchange plus pricing due to transparent cost structure and lower per-transaction markup.' },
              { color: 'blue', title: 'Small Businesses', desc: 'May prefer flat rate simplicity with predictable monthly costs and easy-to-understand fee structures.' },
              { color: 'emerald', title: 'Retail & Cash-Heavy Businesses', desc: 'May benefit from dual pricing to significantly reduce credit card processing costs.' },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl border-2 ${i === 0 ? 'border-purple-200 bg-purple-50' : i === 1 ? 'border-blue-200 bg-blue-50' : 'border-emerald-200 bg-emerald-50'} p-6`}>
                <h3 className={`text-lg font-bold mb-3 ${i === 0 ? 'text-purple-900' : i === 1 ? 'text-blue-900' : 'text-emerald-900'}`}>{item.title}</h3>
                <p className={`text-sm ${i === 0 ? 'text-purple-700' : i === 1 ? 'text-blue-700' : 'text-emerald-700'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Our team helps evaluate these factors to recommend the best pricing structure for each business.
          </p>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="industries-h2">Payment Processing by Industry</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each industry may benefit from a different pricing approach depending on customer behavior and payment volume.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: UtensilsCrossed, label: 'Restaurants', path: '/restaurant-payment-processing-services' },
              { icon: ShoppingBag, label: 'Retail Stores', path: '/retail-payment-solutions' },
              { icon: Coffee, label: 'Coffee Shops', path: '/industries/restaurants' },
              { icon: Scissors, label: 'Salons & Spas', path: '/salon-spa-payment-processing' },
              { icon: Briefcase, label: 'Professional Services', path: '/professional-services-payment-processing-clover-pos' },
              { icon: Store, label: 'Convenience Stores', path: '/retail-payment-solutions' },
              { icon: Globe, label: 'E-Commerce', path: '/solutions/payment-processing' },
            ].map((item, i) => (
              <Link key={i} to={item.path} className="group">
                <Card className="border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all h-full">
                  <CardContent className="p-5 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center mb-3 transition-colors">
                      <item.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-purple-500 mt-2 transition-colors" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WHY MERCHANT SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="merchant-solutions-team"
                className="w-full h-[380px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="why-msc-h2">Why Businesses Choose Merchant Solutions</h2>
              <p className="text-gray-700 mb-6">Our goal is to help businesses find the most efficient and cost-effective payment processing solution.</p>
              <div className="space-y-4">
                {[
                  'Transparent pricing structure',
                  'Multiple pricing options available',
                  'Professional setup and support',
                  'Modern payment technology',
                  'Integration with POS systems'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                    </div>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white mt-8 px-8 py-6" onClick={() => setShowFormModal(true)} data-testid="why-msc-contact-btn">
                Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-20 bg-gray-50" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12" data-testid="faq-h2">Payment Processing Pricing FAQ</h2>
          <FAQItem question="What is interchange plus pricing?" answer="Interchange plus pricing separates the card network cost from the processor markup, providing a transparent pricing model." />
          <FAQItem question="What is flat rate payment processing?" answer="Flat rate pricing charges the same percentage for every transaction regardless of the card used." />
          <FAQItem question="What is dual pricing?" answer="Dual pricing allows businesses to display separate prices for cash and credit card payments." />
          <FAQItem question="Which payment pricing model is best?" answer="The best option depends on the type of business, transaction volume, and payment methods customers prefer." />
          <FAQItem question="Can businesses switch pricing models?" answer="Yes. Many businesses change pricing models as their payment volume grows." />
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="final-cta-h2">Find the Best Payment Processing Program for Your Business</h2>
          <p className="text-xl text-purple-100 mb-8">
            Choosing the right pricing structure can significantly impact your payment processing costs. Our team can help evaluate your current payment setup and recommend the best solution.
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
              { label: 'Payment Terminals', path: '/payment-terminals' },
              { label: 'Restaurant POS', path: '/restaurant-payment-processing-services' },
              { label: 'QR Mobile Ordering', path: '/qr-code-mobile-ordering' },
              { label: 'Self-Ordering Kiosk', path: '/clover-kiosk' },
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
