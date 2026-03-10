import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Code,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Terminal,
  Layers,
  Lock,
  Cpu,
  FileText,
  Users,
  CreditCard,
  Smartphone,
  BarChart3,
  Headphones
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const ISVPartnerships = () => {
  const sdkLanguages = [
    { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Python', color: 'bg-blue-100 text-blue-800' },
    { name: 'PHP', color: 'bg-indigo-100 text-indigo-800' },
    { name: 'Ruby', color: 'bg-red-100 text-red-800' },
    { name: 'Java', color: 'bg-orange-100 text-orange-800' },
    { name: '.NET', color: 'bg-purple-100 text-purple-800' },
    { name: 'Go', color: 'bg-cyan-100 text-cyan-800' },
    { name: 'REST API', color: 'bg-green-100 text-green-800' }
  ];

  const integrationFeatures = [
    {
      icon: Code,
      title: 'Developer-First APIs',
      description: 'RESTful APIs with clear documentation, predictable responses, and intuitive endpoint structures. Build payment flows in hours, not weeks.'
    },
    {
      icon: Terminal,
      title: 'SDKs in Every Major Language',
      description: 'Pre-built libraries for JavaScript, Python, PHP, Ruby, Java, .NET, and Go. Drop in, authenticate, and start processing.'
    },
    {
      icon: Zap,
      title: 'Fast Integration',
      description: 'From sandbox to production in days. Our API is designed so your team spends less time reading docs and more time shipping features.'
    },
    {
      icon: Shield,
      title: 'PCI-Compliant Infrastructure',
      description: 'Tokenization, end-to-end encryption, and PCI Level 1 compliance built in. Reduce your PCI scope without sacrificing control.'
    },
    {
      icon: Layers,
      title: 'Modular Architecture',
      description: 'Use only what you need — payments, recurring billing, invoicing, reporting, or the full stack. Every module works independently.'
    },
    {
      icon: Globe,
      title: 'US, Canada, PR & USVI Coverage',
      description: 'One integration covers merchants across the United States, Canada, Puerto Rico, and US Virgin Islands. No separate builds per region.'
    }
  ];

  const paymentCapabilities = [
    'Card-present (EMV, NFC, swipe)',
    'Card-not-present (eCommerce, MOTO)',
    'ACH and bank transfers',
    'Recurring billing and subscriptions',
    'Text-to-pay and payment links',
    'Tokenized card-on-file',
    'Split payments and marketplace payouts',
    'Multi-currency support',
    'Real-time transaction webhooks',
    'Dynamic surcharging and dual pricing',
    'Invoicing and billing APIs',
    'Comprehensive reporting APIs'
  ];

  const partnerBenefits = [
    {
      icon: BarChart3,
      title: 'Revenue Share',
      description: 'Earn recurring revenue on every transaction processed through your integration. The more merchants you bring, the more you earn.'
    },
    {
      icon: Headphones,
      title: 'Dedicated Integration Support',
      description: 'A dedicated integration engineer assigned to your project from sandbox to production. Direct Slack or email access — no ticket queues.'
    },
    {
      icon: Users,
      title: 'Co-Marketing Opportunities',
      description: 'Joint marketing, case studies, and co-branded materials to help you promote your payment-enabled solution to new merchants.'
    },
    {
      icon: FileText,
      title: 'White-Label Options',
      description: 'Offer payment processing under your own brand. Our infrastructure, your identity. Full white-label and custom branding available.'
    }
  ];

  const steps = [
    { num: '1', title: 'Apply for API Access', desc: 'Submit your application and tell us about your platform and integration goals.' },
    { num: '2', title: 'Get Sandbox Credentials', desc: 'Receive your API keys, sandbox environment, and full documentation access.' },
    { num: '3', title: 'Build & Test', desc: 'Integrate using our SDKs and test in sandbox. Our integration team is available for guidance.' },
    { num: '4', title: 'Go Live', desc: 'Pass certification, flip to production, and start processing real transactions.' }
  ];

  const faqs = [
    {
      question: 'What is an ISV partnership?',
      answer: 'An Independent Software Vendor (ISV) partnership allows software companies and developers to embed payment processing directly into their platforms using our APIs and SDKs. You build the experience, we power the payments.'
    },
    {
      question: 'How long does integration typically take?',
      answer: 'Most integrations are completed within 1-4 weeks depending on complexity. Simple payment flows can be built and tested in days. Our developer-first APIs and SDKs are designed to minimize integration time.'
    },
    {
      question: 'What markets do you support?',
      answer: 'Our platform supports merchants across the United States (all 50 states), Canada, Puerto Rico, and the US Virgin Islands. One integration covers all regions — no separate builds needed.'
    },
    {
      question: 'Do I need to be PCI compliant?',
      answer: 'Our tokenization and hosted payment fields significantly reduce your PCI scope. We handle the heavy lifting of PCI Level 1 compliance so your platform stays secure without the overhead.'
    },
    {
      question: 'Is there a cost to join the ISV program?',
      answer: 'There is no upfront cost to apply or integrate. Revenue share structures are discussed during onboarding and are based on transaction volume and partnership tier.'
    },
    {
      question: 'Can I white-label the payment experience?',
      answer: 'Yes. We offer full white-label options including custom branding on payment forms, receipts, merchant portals, and reporting. Your users see your brand, powered by our infrastructure.'
    },
    {
      question: 'What kind of support do ISV partners receive?',
      answer: 'Every ISV partner gets a dedicated integration engineer, direct communication channels (Slack/email), sandbox environment, comprehensive documentation, and ongoing technical support post-launch.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>ISV Partnership Program | Payment Integration for Software Companies</title>
        <meta property="og:title" content="ISV Partnership Program | Payment Integration for Software Companies" />
        <meta property="og:description" content="ISV partnership program for software companies. Integrate payment processing into your software with our API, earn revenue share, and provide seamless merchant services to your users." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/partnerships/isv" />
        <meta name="description" content="ISV partnership program for software companies. Integrate payment processing into your software with our API, earn revenue share, and provide seamless merchant services to your users." />
        <meta name="keywords" content="ISV partnership, software payment integration, payment API, ISV program, embedded payments, software company payments, payment integration partner" />
        <link rel="canonical" href="/partnerships/isv" />
      </Helmet>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(139,92,246,0.1) 0px, rgba(139,92,246,0.1) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, rgba(139,92,246,0.1) 0px, rgba(139,92,246,0.1) 1px, transparent 1px, transparent 60px)',
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-mono px-3 py-1 rounded-full">ISV PARTNER PROGRAM</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="isv-hero-title">
                Embed Payments Into Your Platform
              </h1>
              <p className="text-lg text-gray-300 mb-4">
                Code-friendly APIs and SDKs designed for independent software vendors and developers. Integrate payments in days, not months.
              </p>
              <p className="text-base text-gray-400 mb-8">
                Process transactions across the United States, Canada, Puerto Rico, and US Virgin Islands — all from a single integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="isv-request-access-btn">
                    Request API Access <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="#how-it-works">
                  <Button size="lg" variant="outline" className="border-2 border-gray-500 text-gray-300 hover:bg-white/10 text-lg px-8 py-6">
                    See How It Works
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                {sdkLanguages.map((lang, idx) => (
                  <span key={idx} className={`${lang.color} text-xs font-mono px-3 py-1 rounded-md`}>{lang.name}</span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-gray-800/80 rounded-xl p-6 border border-gray-700 font-mono text-sm shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-gray-500 text-xs ml-2">payment.js</span>
                </div>
                <pre className="text-gray-300 leading-relaxed overflow-x-auto">
                  <code>
{`const msc = require('msc-payments');

const client = new msc.Client({
  apiKey: process.env.MSC_API_KEY,
  environment: 'production'
});

const payment = await client.charges.create({
  amount: 4999,
  currency: 'usd',
  source: token.id,
  description: 'Monthly subscription',
  metadata: {
    merchant_id: 'merch_12345',
    platform: 'your_app'
  }
});

console.log(payment.status);
// => 'approved'`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">Why Developers Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for Engineers. Designed for Scale.</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clean APIs, comprehensive SDKs, and infrastructure that just works. Spend your time building features, not fighting payment plumbing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="border hover:border-purple-600 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">Full Payment Stack</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Every Payment Method. One API.</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether your merchants need in-store terminals, online checkout, recurring billing, or marketplace payouts — it's all available through a single, unified API.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {paymentCapabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: CreditCard, label: 'Card Present', sub: 'EMV, NFC, Swipe' },
                { icon: Globe, label: 'eCommerce', sub: 'Online & MOTO' },
                { icon: Smartphone, label: 'Mobile', sub: 'Text-to-Pay' },
                { icon: BarChart3, label: 'Reporting', sub: 'Real-Time Data' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100">
                    <Icon className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                    <p className="font-bold text-gray-900">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.sub}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Integrated in 4 Steps</h2>
            <p className="text-lg text-gray-600">From application to production in days</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <Card className="border-0 shadow-lg h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{step.num}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </CardContent>
                </Card>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ISV Partner Benefits</h2>
            <p className="text-lg text-gray-600">More than an API — a true technology partnership</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <Card key={idx} className="border-0 shadow-lg">
                  <CardContent className="p-8 flex gap-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">One Integration. Four Markets.</h2>
            <p className="text-lg text-gray-600">Process payments across all supported regions with a single API integration</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { flag: 'United States', sub: 'All 50 States' },
              { flag: 'Canada', sub: 'All Provinces' },
              { flag: 'Puerto Rico', sub: 'US Territory' },
              { flag: 'US Virgin Islands', sub: 'US Territory' }
            ].map((market, idx) => (
              <Card key={idx} className="border-2 hover:border-purple-600 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <p className="font-bold text-gray-900">{market.flag}</p>
                  <p className="text-xs text-gray-500">{market.sub}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(139,92,246,0.15) 0px, rgba(139,92,246,0.15) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, rgba(139,92,246,0.15) 0px, rgba(139,92,246,0.15) 1px, transparent 1px, transparent 60px)',
          }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Code className="h-4 w-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-mono">Ready to integrate?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Building with Our Payment APIs
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Apply for API access and get your sandbox credentials. Our integration team will guide you from first request to production deployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-10 py-6 shadow-lg" data-testid="isv-cta-request-access">
                Request API Access <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="https://www.calendly.com/mscpayments" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-gray-500 text-gray-300 hover:bg-white/10 text-lg px-10 py-6">
                Talk to Our Integration Team
              </Button>
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-8">
            No upfront costs. Sandbox access included. Dedicated integration support.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ISVPartnerships;
