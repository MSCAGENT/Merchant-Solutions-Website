import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ChevronDown, ChevronRight, DollarSign, BarChart3,
  Shield, TrendingUp, Building2, Layers, MapPin, CreditCard,
  UtensilsCrossed, ShoppingBag, Hotel, Music, Briefcase, Store,
  ArrowRight, Lock, Settings, Headphones, Clock, Users
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

export default function SubscriptionPaymentProcessing() {
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
      { "@type": "Question", "name": "What is subscription payment processing?", "acceptedAnswer": { "@type": "Answer", "text": "Subscription processing replaces traditional markup pricing with a fixed monthly subscription per location." } },
      { "@type": "Question", "name": "Who benefits most from subscription processing?", "acceptedAnswer": { "@type": "Answer", "text": "Businesses processing high transaction volumes across multiple locations benefit the most." } },
      { "@type": "Question", "name": "Can subscription pricing reduce payment processing costs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. High-volume merchants often see lower effective processing rates using subscription pricing." } },
      { "@type": "Question", "name": "How long are subscription agreements?", "acceptedAnswer": { "@type": "Answer", "text": "Terms typically range from 24 months to 60 months depending on equipment and support requirements." } },
      { "@type": "Question", "name": "Can subscription pricing work with POS systems?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many businesses bundle POS software and payment processing into one subscription program." } }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Subscription Payment Processing for Multi-Location Businesses</title>
        <meta property="og:title" content="Subscription Payment Processing for Multi-Location Businesses" />
        <meta property="og:description" content="Wholesale subscription payment processing designed for high-volume businesses. Lock in long-term processing rates with transparent subscription pricing per location." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/subscription-payment-processing" />
        <meta name="description" content="Wholesale subscription payment processing designed for high-volume businesses. Lock in long-term processing rates with transparent subscription pricing per location." />
        <meta name="keywords" content="subscription payment processor, wholesale credit card processing, enterprise payment processing, multi location payment processing, subscription credit card processing, interchange wholesale processing, payment processor for franchises" />
        <link rel="canonical" href="/subscription-payment-processing" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* 1. HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80" alt="enterprise-credit-card-processing" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl" data-testid="subscription-hero-h1">
            Subscription Payment Processing for High-Volume Businesses
          </h1>
          <p className="text-xl text-gray-300 mb-3 max-w-3xl">
            Our subscription model is specifically tailored for established businesses that generate millions of dollars in annual revenue and manage multiple locations.
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl">
            Our subscription model eliminates traditional markups and replaces them with transparent monthly pricing per location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="hero-contact-btn">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6" onClick={openCalendly} data-testid="hero-book-btn">
              Book a 30-Minute Strategy Call
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400" data-testid="trust-line">
            <span className="flex items-center gap-1.5"><Building2 className="h-4 w-4 text-purple-400" /> Enterprise Pricing Model</span>
            <span className="flex items-center gap-1.5"><DollarSign className="h-4 w-4 text-purple-400" /> Wholesale Processing Rates</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-purple-400" /> Multi-Location Optimization</span>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS SUBSCRIPTION PROCESSING */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="what-is-h2">What is Subscription-Based Payment Processing?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Subscription payment processing is a pricing model designed for businesses that want the lowest possible processing costs while maintaining predictable monthly expenses.
              </p>
              <p className="text-gray-700 mb-4">
                Instead of paying traditional processor markups on each transaction, businesses pay a fixed monthly subscription fee per location.
              </p>
              <p className="text-gray-700 mb-5">
                With this structure, merchants receive payment processing at or near wholesale interchange pricing while paying a flat monthly subscription for the payment infrastructure, technology, and support.
              </p>
              <p className="text-gray-700 mb-3 font-semibold">This model is particularly beneficial for:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                {['High-volume merchants', 'Franchise operators', 'Restaurant groups', 'Retail chains', 'Multi-location businesses'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                By separating payment processing costs from subscription technology fees, businesses gain greater transparency and long-term pricing stability.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                alt="subscription-payment-processing"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY HIGH-VOLUME MERCHANTS CHOOSE THIS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="why-choose-h2">Why High-Volume Merchants Choose Subscription Pricing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, title: 'Lower Processing Costs', desc: 'High-volume merchants benefit from wholesale processing rates instead of percentage markups added by traditional processors.' },
              { icon: BarChart3, title: 'Predictable Monthly Costs', desc: 'Subscription pricing creates predictable monthly expenses that are easier to forecast and manage.' },
              { icon: MapPin, title: 'Multi-Location Efficiency', desc: 'Businesses operating several locations can consolidate processing infrastructure and reduce operational complexity, which can lead to significant cost savings and improved resource allocation across all locations.' },
              { icon: Lock, title: 'Long-Term Rate Protection', desc: 'Subscription programs allow businesses to lock in processing structures for extended contract periods.' },
              { icon: Layers, title: 'Scalable Infrastructure', desc: 'As businesses expand to new locations, the payment infrastructure can scale accordingly.' },
            ].map((item, i) => (
              <Card key={i} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-5">
                    <item.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO THIS IS DESIGNED FOR */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                alt="multi-location-payment-processing"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="ideal-h2">Ideal Businesses for Subscription Payment Processing</h2>
              <p className="text-lg text-gray-700 mb-4">
                This program is designed for established businesses that process high transaction volumes and require reliable payment infrastructure across multiple locations.
              </p>
              <p className="text-gray-700 mb-3 font-semibold">Typical businesses include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  { icon: UtensilsCrossed, label: 'Restaurant groups' },
                  { icon: Store, label: 'Franchise operators' },
                  { icon: ShoppingBag, label: 'Retail chains' },
                  { icon: Hotel, label: 'Hospitality venues' },
                  { icon: Music, label: 'Entertainment venues' },
                  { icon: Briefcase, label: 'Large service companies' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700 bg-gray-50 rounded-lg px-4 py-3">
                    <item.icon className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <p className="text-purple-800 font-semibold">
                  Businesses processing over $10 million annually typically benefit the most from this pricing structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING TIERS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="pricing-tiers-h2">Subscription Pricing Per Location</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Instead of traditional markups, businesses pay a monthly subscription fee per location. Pricing tiers are structured based on the number of locations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                tier: 'Bronze Program',
                locations: '1-10 Locations',
                price: '$499',
                interchange: 'Interchange Cost +15 bps & $0.05/txn',
                color: 'purple',
                desc: 'Designed for businesses operating a small number of high-volume locations that require advanced payment infrastructure and support.'
              },
              {
                tier: 'Silver Program',
                locations: '11-30 Locations',
                price: '$299',
                interchange: 'Interchange Cost +10 bps & $0.03/txn',
                color: 'blue',
                desc: 'This arrangement is perfect for regional businesses that are expanding into multiple markets. Franchises and Corporate locations.'
              },
              {
                tier: 'Platinum Program',
                locations: '30+ Locations',
                price: '$99',
                interchange: 'Interchange Cost +0 bps & $0.02/txn',
                color: 'emerald',
                desc: 'This product is specifically designed for large enterprises who manage multiple high-volume locations. This enterprise model gathers the Volume from all locations and creates a custom plan with the lowest rate at $99/month per location.'
              },
            ].map((item, i) => (
              <Card key={i} className={`border-2 ${i === 0 ? 'border-purple-300' : i === 1 ? 'border-blue-300' : 'border-emerald-300'} shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden`}>
                {i === 2 && (
                  <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">BEST VALUE</div>
                )}
                <CardContent className="p-8 text-center">
                  <p className={`text-lg font-bold mb-1 ${i === 0 ? 'text-purple-600' : i === 1 ? 'text-blue-600' : 'text-emerald-600'}`}>{item.tier}</p>
                  <p className={`text-sm font-medium uppercase tracking-wider mb-2 ${i === 0 ? 'text-purple-500' : i === 1 ? 'text-blue-500' : 'text-emerald-500'}`}>{item.locations}</p>
                  <div className="mb-2">
                    <span className={`text-5xl font-extrabold ${i === 0 ? 'text-purple-700' : i === 1 ? 'text-blue-700' : 'text-emerald-700'}`}>{item.price}</span>
                    <span className="text-gray-500 text-lg"> /mo per location</span>
                  </div>
                  <p className={`text-sm font-semibold mb-4 ${i === 0 ? 'text-purple-600' : i === 1 ? 'text-blue-600' : 'text-emerald-600'}`}>{item.interchange}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                  <Button className={`w-full ${i === 0 ? 'bg-purple-600 hover:bg-purple-700' : i === 1 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-emerald-600 hover:bg-emerald-700'} text-white`} onClick={() => setShowFormModal(true)} data-testid={`tier-${i + 1}-cta`}>
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Important Note</h3>
            <p className="text-gray-700 mb-3">
              Subscription pricing includes wholesale payment processing infrastructure and technology services. Processing fees are based on interchange and card network costs.
            </p>
            <p className="text-gray-700 mb-2 font-semibold">Final pricing may vary based on:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {['Equipment requirements', 'Industry risk profile', 'Transaction mix', 'Support requirements'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SUBSCRIPTION TERM OPTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="terms-h2">Long-Term Pricing Stability</h2>
              <p className="text-lg text-gray-700 mb-6">
                Subscription programs are typically structured with longer service terms in order to provide the most competitive processing rates.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">Typical subscription terms include:</p>
              <div className="space-y-3 mb-6">
                {[
                  { term: '24-month agreements', desc: 'Standard entry point for subscription pricing' },
                  { term: '36-month agreements', desc: 'Popular choice for growing businesses' },
                  { term: '48-month agreements', desc: 'Preferred for multi-location deployments' },
                  { term: '60-month agreements', desc: 'Maximum savings for enterprise clients' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg px-5 py-3.5">
                    <Clock className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">{item.term}</p>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                Businesses requiring extensive equipment deployment or technical support may benefit from longer agreements that help reduce monthly costs.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="wholesale-processing-rates"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. POS SUBSCRIPTION PROGRAMS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="pos-sub-h2">POS Subscription Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Many merchants choose to bundle their POS systems and payment infrastructure into a single subscription program.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              { name: 'Starter', color: 'gray', features: ['Basic POS software', 'Standard hardware', 'Gateway access', 'Email support'] },
              { name: 'Standard', color: 'purple', features: ['Full POS software', 'Advanced hardware', 'Gateway access', 'Priority support', 'Inventory management'] },
              { name: 'Premium', color: 'blue', features: ['Enterprise POS software', 'Premium hardware', 'Advanced gateway', 'Dedicated support', 'Full analytics suite', 'Multi-location dashboard'] },
            ].map((item, i) => (
              <Card key={i} className={`border ${i === 1 ? 'border-purple-300 shadow-lg ring-2 ring-purple-100' : 'border-gray-200 shadow-sm'} hover:shadow-md transition-shadow`}>
                {i === 1 && (
                  <div className="bg-purple-600 text-white text-center text-xs font-bold py-1.5 uppercase tracking-wider">Most Popular</div>
                )}
                <CardContent className="p-7">
                  <h3 className={`text-xl font-bold mb-5 ${i === 1 ? 'text-purple-700' : 'text-gray-900'}`}>{item.name}</h3>
                  <div className="space-y-2.5">
                    {item.features.map((f, fi) => (
                      <div key={fi} className="flex items-center gap-2 text-gray-700 text-sm">
                        <CheckCircle className={`h-4 w-4 flex-shrink-0 ${i === 1 ? 'text-purple-500' : 'text-green-500'}`} /> {f}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            The subscription model simplifies billing by combining POS technology and payment infrastructure into one predictable monthly cost.
          </p>
        </div>
      </section>

      {/* 8. WHY MERCHANT SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="enterprise-payment-support-team"
                className="w-full h-[380px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="why-msc-h2">Why Choose Merchant Solutions for Enterprise Processing</h2>
              <p className="text-gray-700 mb-6">Our team works directly with businesses to analyze their payment processing environment and design the most efficient pricing structure.</p>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: 'Transparent pricing structures' },
                  { icon: Building2, text: 'Enterprise payment infrastructure' },
                  { icon: MapPin, text: 'Multi-location deployment expertise' },
                  { icon: Settings, text: 'POS system integration' },
                  { icon: Headphones, text: 'Dedicated support team' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-purple-600" />
                    </div>
                    <p className="text-gray-700 font-medium pt-1">{item.text}</p>
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

      {/* 9. FAQ */}
      <section className="py-20 bg-gray-50" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12" data-testid="faq-h2">Subscription Payment Processing FAQ</h2>
          <FAQItem question="What is subscription payment processing?" answer="Subscription processing replaces traditional markup pricing with a fixed monthly subscription per location." />
          <FAQItem question="Who benefits most from subscription processing?" answer="Businesses processing high transaction volumes across multiple locations benefit the most." />
          <FAQItem question="Can subscription pricing reduce payment processing costs?" answer="Yes. High-volume merchants often see lower effective processing rates using subscription pricing." />
          <FAQItem question="How long are subscription agreements?" answer="Terms typically range from 24 months to 60 months depending on equipment and support requirements." />
          <FAQItem question="Can subscription pricing work with POS systems?" answer="Yes. Many businesses bundle POS software and payment processing into one subscription program." />
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="final-cta-h2">Explore Enterprise Payment Processing</h2>
          <p className="text-xl text-purple-100 mb-8">
            If your business processes millions annually and operates multiple locations, our subscription payment processing program may significantly reduce your processing costs.
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
              { label: 'Payment Processing Pricing', path: '/payment-processing-pricing' },
              { label: 'POS Systems Overview', path: '/pos-systems' },
              { label: 'Payment Terminals', path: '/payment-terminals' },
              { label: 'Restaurant POS', path: '/restaurant-payment-processing-services' },
              { label: 'Enterprise Payment Solutions', path: '/solutions/payment-processing' },
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
