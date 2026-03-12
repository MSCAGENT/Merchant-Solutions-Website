import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  CreditCard,
  FileText,
  RefreshCcw,
  Bitcoin,
  Code,
  BarChart3,
  Shield,
  Headphones,
  Building2,
  Truck,
  Globe,
  Server,
  ShoppingCart,
  Layers,
  Zap,
  Lock,
  Users,
  ChevronRight,
  Search,
  Monitor,
  Receipt,
  Repeat,
  Webhook,
  Database
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const SpecialtyMerchant = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  useEffect(() => {
    if (!showDemoModal) return;
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const s = document.createElement('script');
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.head.appendChild(s);
    }
  }, [showDemoModal]);

  const weServe = [
    'Wholesale distributors', 'Manufacturers', 'Import/export companies',
    'B2B service providers', 'Industrial suppliers', 'Subscription-based B2B businesses',
    'Technology and SaaS companies', 'Specialty e-commerce platforms', 'High-volume invoice-driven businesses'
  ];

  const challenges = [
    { icon: Layers, title: 'Unique Workflows', desc: 'Multi-step approvals, purchase orders, deposits, and milestone payments.' },
    { icon: Code, title: 'Custom Integrations', desc: 'ERP, CRM, accounting software, and custom portals require API-based payment solutions that allow different software systems to communicate and process payments seamlessly.' },
    { icon: BarChart3, title: 'Specialized Reporting', desc: 'B2B businesses need SKU-level reporting, department tracking, and advanced reconciliation.' },
    { icon: Shield, title: 'Compliance Requirements', desc: 'PCI compliance, ACH rules, crypto compliance, and high-risk category requirements.' }
  ];

  const solutions = [
    {
      icon: Monitor,
      title: 'Virtual Terminal Processing',
      desc: 'Secure browser-based payment acceptance for phone orders, manual invoice payments, B2B remote transactions, and corporate client billing.',
      features: ['Phone orders', 'Manual invoice payments', 'B2B remote transactions', 'Corporate client billing'],
      footer: 'Accept credit cards, ACH, and crypto payments through a secure virtual terminal dashboard.'
    },
    {
      icon: Receipt,
      title: 'Advanced Invoicing & Quote Tools',
      desc: 'Send professional B2B invoices and quotes with integrated payment links. Ideal for wholesale and contract-driven businesses.',
      features: ['Custom branded invoices', 'Quote-to-invoice conversion', 'Partial payments', 'Deposit collection', 'Automated reminders', 'Multi-currency billing'],
      footer: null
    },
    {
      icon: Repeat,
      title: 'Recurring Billing & Subscription Management',
      desc: 'Automate revenue and reduce manual billing to improve cash flow stability.',
      features: ['Recurring ACH billing', 'Credit card auto-pay', 'Subscription management', 'Installment payment plans', 'Tokenized card-on-file storage'],
      footer: null
    },
    {
      icon: Bitcoin,
      title: 'Crypto Payment Integration',
      desc: 'Accept cryptocurrency payments directly alongside traditional methods. Crypto payments are integrated into your payment workflow, not separated from it.',
      features: ['Bitcoin', 'Ethereum', 'Stablecoins (USDT & USDC)', 'Faster cross-border transactions', 'Lower international fees', 'Alternative settlement options'],
      footer: null
    },
    {
      icon: Webhook,
      title: 'Custom API & Gateway Integration',
      desc: 'We build payment systems that integrate with your existing tech stack. We adapt to your workflow — not the other way around.',
      features: ['REST API integration', 'Tokenization', 'Webhook automation', 'Payment gateway customization', 'ERP & CRM integration', 'Custom SaaS portals'],
      footer: null
    },
    {
      icon: Database,
      title: 'Advanced Reporting & B2B Analytics',
      desc: 'Make informed financial decisions with real-time business intelligence.',
      features: ['Department-level reporting', 'Multi-location reconciliation', 'SKU-level breakdown', 'Custom export formats', 'Automated settlement reports', 'Recurring revenue tracking'],
      footer: null
    }
  ];

  const complianceFeatures = [
    'PCI-DSS compliance', 'End-to-end encryption', 'Tokenization',
    'ACH compliance', 'Chargeback mitigation', 'Risk monitoring'
  ];

  const supportFeatures = [
    'Dedicated account management', 'Risk monitoring assistance', 'Integration guidance',
    'Ongoing optimization', 'Volume-based pricing reviews'
  ];

  const whyMSC = [
    'Custom-built solutions', 'Crypto + traditional payments combined',
    'Advanced invoicing & recurring billing', 'Dedicated integration support',
    'Flexible underwriting for specialty markets', 'Nationwide U.S. coverage'
  ];

  const searchTerms = [
    'B2B payment processing solutions', 'Specialty merchant services',
    'Virtual terminal for wholesale business', 'Recurring billing for B2B companies',
    'Crypto payment processing for businesses', 'Custom API payment integration',
    'Wholesale merchant account', 'High-volume B2B payment gateway'
  ];

  const seoKeywords = [
    'specialty merchant services', 'B2B payment processing', 'virtual terminal payment solutions',
    'recurring billing for businesses', 'crypto payment processing', 'custom API payment integration',
    'wholesale merchant account', 'B2B invoicing tools', 'ACH recurring billing',
    'tokenized payment gateway', 'custom payment workflows', 'high-risk B2B merchant services'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>B2B Specialty Merchant Payment Solutions | Virtual Terminal, Invoicing & Crypto Payments</title>
        <meta property="og:title" content="B2B Specialty Merchant Payment Solutions | Virtual Terminal, Invoicing & Crypto Payments" />
        <meta property="og:description" content="Customized B2B payment solutions for specialty merchants. Virtual terminals, invoicing, recurring billing, API integrations, and crypto payment processing for wholesale, manufacturing, and service providers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/specialty-merchant-payment-solutions" />
        <meta name="description" content="Customized B2B payment solutions for specialty merchants. Virtual terminals, invoicing, recurring billing, API integrations, and crypto payment processing for wholesale, manufacturing, and service providers." />
        <meta name="keywords" content="B2B payment solutions, specialty merchant services, virtual terminal, B2B invoicing, recurring billing, crypto payment processing, wholesale payment processing, B2B credit card processing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/specialty-merchant-payment-solutions" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Specialty Merchant Payment Solutions","serviceType":"Specialized Merchant Services and Payment Processing","provider":{"@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com"},"areaServed":"United States","url":"https://merchantsolutionscorp.com/specialty-merchant-payment-solutions","description":"Specialized payment processing solutions for unique and niche business types from Merchant Solutions Corp."})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://merchantsolutionscorp.com/"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://merchantsolutionscorp.com/industries/restaurants"},{"@type":"ListItem","position":3,"name":"Specialty Merchants","item":"https://merchantsolutionscorp.com/specialty-merchant-payment-solutions"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com","logo":"https://customer-assets.emergentagent.com/job_merchant-central-11/artifacts/vmzehzol_MSC_1080x560.png","sameAs":["https://www.facebook.com/merchantsolutionscorp/","https://www.instagram.com/merchant_solutions_corp","https://www.linkedin.com/company/merchantsolutionscorp/","https://www.youtube.com/merchantsolutionscorp"]})}</script>
      </Helmet>
      {/* Hero */}
      <section className="relative w-full bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 py-24 lg:py-32 overflow-hidden" data-testid="specialty-hero">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(59,130,246,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(168,85,247,0.3) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base uppercase tracking-widest text-blue-400 font-semibold mb-4">Specialty Merchant B2B Payment Solutions</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="hero-h1">
            B2B Payment Processing for Complex & Custom Business Models
          </h1>
          <p className="text-lg text-slate-300 mb-4 max-w-3xl mx-auto">
            Merchant Solutions Corp provides advanced B2B payment processing solutions for specialty markets with complex workflows, recurring billing needs, custom integrations, and crypto payment acceptance.
          </p>
          <p className="text-base text-slate-400 mb-8 max-w-2xl mx-auto">
            If your business requires more than a basic credit card processor, we build custom merchant solutions designed around your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setShowQuoteModal(true)} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-quote-btn">
              Get Custom Solution
            </Button>
            <Button size="lg" onClick={() => setShowDemoModal(true)} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6" data-testid="hero-demo-btn">
              Schedule a Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white" data-testid="serve-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">B2B Payment Processing Built for Specialty Merchants</h2>
              <p className="text-lg text-gray-600 mb-2">Not all businesses fit into a standard checkout model.</p>
              <p className="text-lg text-gray-600 mb-6">We serve:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {weServe.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6 border-l-4 border-blue-600 pl-4 text-sm">
                Our specialty merchant services are designed for businesses that operate on contracts, quotes, invoices, deposits, and recurring billing models.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1763038311036-6d18805537e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHRlY2hub2xvZ3klMjBkYXRhJTIwYW5hbHl0aWNzJTIwb2ZmaWNlfGVufDB8fHx8MTc3MjIxODE3M3ww&ixlib=rb-4.1.0&q=85"
                alt="Business professional analyzing B2B data and analytics"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-20 bg-gray-50" data-testid="challenges-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Industry Challenges We Solve</h2>
            <p className="text-lg text-gray-500">We understand the unique payment challenges facing specialty merchants.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, i) => {
              const Icon = challenge.icon;
              return (
                <Card key={i} className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{challenge.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{challenge.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <p className="text-lg font-semibold text-gray-700">Generic processors are not built for this.</p>
            <p className="text-lg font-bold text-blue-600">We are.</p>
          </div>
        </div>
      </section>

      {/* B2B Payment Solutions */}
      <section className="py-20 bg-white" data-testid="solutions-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Our B2B Payment Solutions</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">Specifically tailored to meet the needs of specialty merchants.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <Card key={i} className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{solution.desc}</p>
                    <div className="space-y-1.5">
                      {solution.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-3.5 w-3.5 text-blue-500 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{f}</span>
                        </div>
                      ))}
                    </div>
                    {solution.footer && (
                      <p className="text-xs text-blue-600 font-medium mt-4 border-t pt-3">{solution.footer}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance & Support (side by side) */}
      <section className="py-20 bg-gray-900 text-white" data-testid="compliance-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">Compliance & Security</h2>
              </div>
              <p className="text-slate-400 mb-6">Specialty markets often operate in regulated industries. We support:</p>
              <div className="space-y-3">
                {complianceFeatures.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-800/50 border border-slate-700/40 rounded-lg px-4 py-3">
                    <Lock className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-sm mt-6">
                For specialty and high-risk merchants, we structure compliant payment frameworks designed for long-term stability.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">Dedicated Support</h2>
              </div>
              <p className="text-slate-400 mb-6">B2B merchants cannot afford generic support. You receive:</p>
              <div className="space-y-3">
                {supportFeatures.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-800/50 border border-slate-700/40 rounded-lg px-4 py-3">
                    <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-purple-300 font-semibold text-sm mt-6">
                We operate as your payment partner — not just a processor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50" data-testid="testimonial-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl text-blue-300 mb-4">"</div>
          <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
            Switching to Merchant Solutions Corp was the best decision for our specialty merchant business. Their specialized solutions helped us reduce processing fees by 30% and improved our checkout speed significantly.
          </blockquote>
          <p className="text-sm text-gray-500 font-semibold">— Industry Client</p>
        </div>
      </section>

      {/* Who This Is For / Search Terms */}
      <section className="py-20 bg-white" data-testid="who-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who This Is For</h2>
              <p className="text-lg text-gray-600 mb-6">If you are searching for:</p>
              <div className="space-y-2.5">
                {searchTerms.map((term, i) => (
                  <div key={i} className="flex items-center gap-3 bg-blue-50 rounded-lg px-4 py-2.5">
                    <Search className="h-4 w-4 text-blue-500 flex-shrink-0" />
                    <span className="text-blue-700 font-medium text-sm italic">{term}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mt-6 font-semibold">
                Merchant Solutions Corp delivers custom payment infrastructure designed for complex business models.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Merchant Solutions Corp</h3>
              <div className="space-y-3">
                {whyMSC.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white border-2 border-gray-200 hover:border-blue-500 rounded-xl px-5 py-4 transition-all duration-300 hover:shadow-md">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-6">
                We specialize in payment solutions for businesses that don't fit into standard merchant processing boxes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Specialty Merchant Business?</h2>
          <p className="text-xl text-blue-100 mb-3">Get a customized payment solution built around your business model.</p>
          <p className="text-base text-blue-200 mb-10">Accept payments securely. Automate billing. Integrate crypto. Scale confidently.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setShowQuoteModal(true)} className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6" data-testid="cta-quote-btn">
              Get Custom Solution
            </Button>
            <Button size="lg" onClick={() => setShowDemoModal(true)} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6" data-testid="cta-demo-btn">
              Schedule Your Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50" data-testid="seo-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-4">
            Merchant Solutions Corp provides advanced B2B payment processing solutions for specialty merchants including virtual terminal processing, invoicing, recurring billing, crypto payment integration, custom API gateway development, and compliance support. Serving wholesale distributors, manufacturers, SaaS companies, and complex B2B business models nationwide.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {seoKeywords.map((keyword, i) => (
              <span key={i} className="text-xs text-gray-400 bg-gray-100 rounded px-2 py-1">{keyword}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Get Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowQuoteModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowQuoteModal(false)} className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors" data-testid="quote-modal-close">&#x2715;</button>
            <iframe src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" className="w-full h-[80vh] border-0 rounded-2xl" title="Get Custom Solution" />
          </div>
        </div>
      )}

      {/* Strategy Call Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowDemoModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-4 h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowDemoModal(false)} className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors" data-testid="demo-modal-close">&#x2715;</button>
            <div className="calendly-inline-widget w-full h-full" data-url="https://calendly.com/mscpayments/posdemo?hide_event_type_details=1&primary_color=5700ff" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialtyMerchant;
