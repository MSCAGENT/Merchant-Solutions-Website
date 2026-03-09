import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ChevronDown, ChevronLeft, ChevronRight, DollarSign, BarChart3,
  Shield, TrendingUp, Building2, Users, CreditCard,
  ArrowRight, Zap, Globe, Briefcase, Server,
  Award, Lock, FileText, Layers, Target,
  UserCheck
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

const API_URL = process.env.REACT_APP_BACKEND_URL;

export default function WhiteLabelMerchantServices() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [blogScroll, setBlogScroll] = useState(0);

  useEffect(() => {
    fetch(`${API_URL}/api/blog`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setBlogs(data.filter(p => p.published && (
            (p.topic && p.topic.toLowerCase().includes('payment')) ||
            (p.keywords && p.keywords.some(k => k.toLowerCase().includes('payment'))) ||
            (p.title && p.title.toLowerCase().includes('payment'))
          )));
        }
      })
      .catch(() => {});
  }, []);

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
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/mscpayments/new-agent-opportunity-one-on-one?primary_color=7b31e5' });
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is a white label payment processor?", "acceptedAnswer": { "@type": "Answer", "text": "A white label processor allows businesses to sell payment processing services under their own brand." } },
      { "@type": "Question", "name": "Who should start their own ISO?", "acceptedAnswer": { "@type": "Answer", "text": "Experienced payment sales professionals and agencies with access to merchants benefit the most." } },
      { "@type": "Question", "name": "Do I need a large team to start?", "acceptedAnswer": { "@type": "Answer", "text": "No. The starter program allows individuals or small teams to begin building their brand." } },
      { "@type": "Question", "name": "What is an FSP ISO program?", "acceptedAnswer": { "@type": "Answer", "text": "An FSP program allows partners to operate their own ISO infrastructure while maintaining full revenue ownership." } },
      { "@type": "Question", "name": "How long does it take to launch?", "acceptedAnswer": { "@type": "Answer", "text": "Most partners can launch their white label program within a few weeks after onboarding." } }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>White Label Merchant Services | Start Your Own ISO Payment Company</title>
        <meta name="description" content="Launch your own merchant services brand with our white label payment processing platform. This platform is ideal for ISO agents, marketing agencies, and entrepreneurs who are initiating their own payment company." />
        <meta name="keywords" content="white label merchant services, white label payment processing, start your own ISO, merchant services reseller program, ISO agent program, merchant services white label" />
        <link rel="canonical" href="/white-label-merchant-services" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white py-24 md:py-32" data-testid="wl-hero-section">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1758518729263-e26fb50db6bc?w=1600&q=80" alt="white-label-payment-processing" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl" data-testid="wl-hero-h1">
            Start Your Own Merchant Services Company
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Build your own payment processing brand and control the customer relationship while we provide the infrastructure behind the scenes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="hero-apply-btn">
              Apply for Partnership
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6" onClick={openCalendly} data-testid="hero-book-btn">
              Book a 30-Minute Strategy Call
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400" data-testid="wl-trust-line">
            <span className="flex items-center gap-1.5"><Server className="h-4 w-4 text-purple-400" /> White Label Payment Infrastructure</span>
            <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-purple-400" /> Built for ISO Agents & Agencies</span>
            <span className="flex items-center gap-1.5"><TrendingUp className="h-4 w-4 text-purple-400" /> Scale Your Own Brand</span>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS WHITE LABEL */}
      <section className="py-20 bg-white" data-testid="wl-what-is-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="wl-what-is-h2">
                What is White Label Payment Processing?
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                White label merchant services allow sales professionals and businesses to offer payment processing under their brand.
              </p>
              <p className="text-gray-700 mb-6">
                Instead of sending merchants to another processor's website or promoting someone else's brand, you operate your merchant services company while using our infrastructure for payment processing.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">This means you can:</p>
              <div className="space-y-3 mb-6">
                {[
                  'Sell under your own company name',
                  'Build your own merchant portfolio',
                  'Control your brand reputation',
                  'Scale your own payment processing business'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <p className="text-purple-800 font-medium text-sm">
                  Merchant Solutions provides the backend infrastructure, underwriting support, and payment rails so you can focus on building your merchant network.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1758518727707-b023e285b709?w=800&q=80"
                alt="merchant-services-iso-program"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY BUILD YOUR OWN BRAND */}
      <section className="py-20 bg-gray-50" data-testid="wl-why-build-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1758518726609-c551f858cd5c?w=800&q=80"
                alt="payment-processing-reseller"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="wl-why-build-h2">
                Why Build Your Own Merchant Services Brand?
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Many agents spend years promoting another processor's brand instead of building their own.
              </p>
              <p className="text-gray-700 mb-6">
                The challenge is that many large processors develop negative reputations due to poor sales practices from other agents, which can lead to a lack of trust among potential clients and hinder business growth.
              </p>
              <p className="text-gray-700 mb-4">
                When you build your own brand, you control the relationship with your merchants and create a reputation based on your service and professionalism.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">Benefits include:</p>
              <div className="space-y-3">
                {[
                  'Brand ownership',
                  'Long-term reputation building',
                  'Higher merchant retention',
                  'Greater control over pricing and deals',
                  'Long-term portfolio value'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-5 text-sm">
                If you are good at building merchant relationships, building your own brand is one of the most powerful moves you can make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO THIS IS FOR */}
      <section className="py-20 bg-white" data-testid="wl-who-for-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="wl-who-for-h2">
              Ideal Partners for the White Label Program
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These partners already have access to businesses and want to add payment processing as a service under their own brand.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Briefcase, title: 'Independent Merchant Service Agents' },
              { icon: Building2, title: 'ISO Offices' },
              { icon: UserCheck, title: 'Payment Consultants' },
              { icon: Target, title: 'Digital Marketing Agencies' },
              { icon: Layers, title: 'Software Companies' },
              { icon: DollarSign, title: 'Lending Brokers' },
              { icon: Shield, title: 'Financial Service Providers' },
            ].map((item, i) => (
              <Card key={i} className="border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <p className="text-gray-900 font-semibold text-sm">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHITE LABEL PROGRAM OPTIONS */}
      <section className="py-20 bg-gray-50" data-testid="wl-programs-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="wl-programs-h2">
              White Label Program Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the program that fits your current scale and growth goals.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Starter */}
            <Card className="border-2 border-gray-200 hover:border-purple-400 transition-colors shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-7 w-7 text-purple-600" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-wider text-purple-600 mb-1">Starter Program</p>
                  <p className="text-gray-600 text-sm">Individual agents and small teams</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-500 mb-1">Team Size</p>
                  <p className="text-gray-900 font-bold">1-10M in processing volume</p>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-900 mb-3">Monthly Fees</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">CRM</span>
                      <span className="font-bold text-gray-900">$499/mo</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">AI Marketing &mdash; Prospecting</span>
                      <span className="font-bold text-gray-900">$599/mo</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Digital Ad Management</span>
                      <span className="font-bold text-gray-900">$999/mo</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm font-semibold text-gray-900 mb-3">Includes</p>
                  <div className="space-y-2">
                    {[
                      'White label partner portal',
                      'Co-branded marketing materials',
                      'Merchant e-statements',
                      'Basic onboarding tools',
                      'Marketing Assistance',
                      'ISO Sales Engine',
                      'Meta Google ads Consulting',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-5">
                  This program allows agents to begin building their brand while using Merchant Solutions infrastructure for underwriting and deployment.
                </p>
              </CardContent>
            </Card>

            {/* Pro */}
            <Card className="border-2 border-purple-400 shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-purple-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">Most Popular</span>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-7 w-7 text-purple-600" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-wider text-purple-600 mb-1">Pro Program</p>
                  <p className="text-gray-600 text-sm">Growing ISO teams and marketing agencies</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-500 mb-1">Team Size</p>
                  <p className="text-gray-900 font-bold">15M-40M in processing volume</p>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-900 mb-3">Pricing</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Upfront Fee</span>
                      <span className="font-bold text-gray-900">$5,999 one time</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">POS White Label</span>
                      <span className="font-bold text-gray-900">$7,500 one time + Server</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">CRM, Auto Deploy & Marketing</span>
                      <span className="font-bold text-gray-900">$999/mo</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm font-semibold text-gray-900 mb-3">Includes</p>
                  <div className="space-y-2">
                    {[
                      'Full white label platform',
                      'Custom branding',
                      'Merchant management tools',
                      'Sales team management',
                      'Portfolio reporting',
                      'Marketing agency tools',
                      'Restaurant or Professional Services white label system',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-5">
                  Merchant Solutions handles deployment and underwriting internally, allowing you to concentrate on merchant acquisition.
                </p>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="border-2 border-gray-200 hover:border-purple-400 transition-colors shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-7 w-7 text-amber-600" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-wider text-amber-600 mb-1">Enterprise ISO / FSP Program</p>
                  <p className="text-gray-600 text-sm">Large ISO offices and financial service providers</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-500 mb-1">Team Size</p>
                  <p className="text-gray-900 font-bold">40M+ in processing volume</p>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-900 mb-3">Pricing</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Visa MC Registration</span>
                      <span className="font-bold text-gray-900">$12,000 annually</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">ISO Sales Engine CRM + Voice AI</span>
                      <span className="font-bold text-gray-900">$1,500/mo</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Restaurant or Professional Services white label system</span>
                      <span className="font-bold text-gray-900">$7,500/ea + server cost</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm font-semibold text-gray-900 mb-3">Includes</p>
                  <div className="space-y-2">
                    {[
                      'Full ISO / FSP white label infrastructure',
                      'Complete brand ownership',
                      'Full merchant portfolio control',
                      'Direct revenue ownership',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-5">
                  <p className="text-xs text-amber-800">
                    Partners operating under the FSP ISO program keep 100% of the revenue generated from their merchant accounts. In this structure, the partner handles merchant deployments, underwriting relationships, and operational support. Merchant Solutions provides the payment rails and moves the funds through the acquiring network.
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Designed for experienced ISO operators who want maximum control and ownership.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. BUILD MERCHANT PORTFOLIO */}
      <section className="py-20 bg-white" data-testid="wl-portfolio-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="wl-portfolio-h2">
                Build Your Own Merchant Portfolio
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                When you operate under your brand, every merchant you sign becomes part of your portfolio.
              </p>
              <p className="text-gray-700 mb-4">
                Over time, this portfolio becomes a valuable recurring revenue asset.
              </p>
              <p className="text-gray-700 mb-6">
                Many ISO owners eventually scale their portfolio to thousands of merchants generating long-term residual income.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <p className="text-purple-800 font-medium text-sm">
                  By building your own brand from the beginning, you are building a long-term asset instead of simply working under another company.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: TrendingUp, value: 'Residual Income', label: 'Recurring revenue from every merchant' },
                { icon: Users, value: 'Your Portfolio', label: 'Every merchant belongs to you' },
                { icon: Award, value: 'Brand Equity', label: 'Build long-term company value' },
                { icon: BarChart3, value: 'Scale', label: 'Grow to thousands of merchants' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
                    <item.icon className="h-5 w-5 text-purple-600" />
                  </div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{item.value}</p>
                  <p className="text-xs text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YOUR LOGO IMAGE */}
      <section className="py-16 bg-white">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src="https://customer-assets.emergentagent.com/job_d913f905-fbe6-4eac-a560-43e237e806df/artifacts/l6da82du_slanted_logo.png" alt="Your Logo — White Label Branding" className="w-64 h-64 mx-auto object-contain" />
        </div>
      </section>

      {/* 7. INFRASTRUCTURE BEHIND YOUR BRAND */}
      <section className="py-20 bg-gray-50" data-testid="wl-infrastructure-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="wl-infrastructure-h2">
              Infrastructure Behind Your Brand
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Merchant Solutions provides the backend infrastructure, which refers to the underlying systems and services that support your operations, so you can focus on growing your ISO.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: CreditCard, title: 'Payment Processing Infrastructure' },
              { icon: FileText, title: 'Merchant Onboarding Systems' },
              { icon: Shield, title: 'Risk Monitoring' },
              { icon: Lock, title: 'Compliance Support' },
              { icon: Globe, title: 'Acquirer Integrations' },
              { icon: DollarSign, title: 'Settlement Processing' },
            ].map((item, i) => (
              <Card key={i} className="border border-gray-200">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto text-sm">
            We handle the payment rails while you focus on building your brand and merchant network.
          </p>
        </div>
      </section>

      {/* 8. CARD BRAND REGISTRATION */}
      <section className="py-20 bg-white" data-testid="wl-registration-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Card Network Registration</p>
                    <p className="text-sm text-gray-600">Required for Enterprise ISO programs</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    'Visa registration requirements',
                    'Mastercard registration requirements',
                    'Other card network compliance',
                    'Acquiring bank registration',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="wl-registration-h2">
                Card Brand Registration for ISO Programs
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Enterprise ISO partners must complete the requirements for card brand registration with acquiring banks and card networks.
              </p>
              <p className="text-gray-700 mb-6">
                Visa, Mastercard, and other networks typically require these registration fees for businesses operating as independent sales organizations.
              </p>
              <p className="text-gray-700">
                Our team guides partners through the registration process so they can operate their ISO legally and compliantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. STOP BUILDING SOMEONE ELSE'S BRAND */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white" data-testid="wl-stop-building-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="wl-stop-building-h2">
              Stop Building Someone Else's Brand
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Many agents spend years sending merchants to a large processor's website.
            </p>
            <p className="text-gray-400 mb-6">
              While those companies grow their brand, the agent often remains invisible.
            </p>
            <p className="text-gray-300 text-lg">
              By operating your own white label merchant service company, every deal you close strengthens your brand and builds your long-term reputation in the market.
            </p>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-20 bg-gray-50" itemScope itemType="https://schema.org/FAQPage" data-testid="wl-faq-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12" data-testid="wl-faq-h2">
            White Label Merchant Services FAQ
          </h2>
          <FAQItem question="What is a white label payment processor?" answer="A white label processor allows businesses to sell payment processing services under their own brand." />
          <FAQItem question="Who should start their own ISO?" answer="Experienced payment sales professionals and agencies with access to merchants benefit the most." />
          <FAQItem question="Do I need a large team to start?" answer="No. The starter program allows individuals or small teams to begin building their brand." />
          <FAQItem question="What is an FSP ISO program?" answer="An FSP program allows partners to operate their own ISO infrastructure while maintaining full revenue ownership." />
          <FAQItem question="How long does it take to launch?" answer="Most partners can launch their white label program within a few weeks after onboarding." />
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white" data-testid="wl-final-cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="wl-final-cta-h2">
            Start Your Own Merchant Services Brand
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            If you are ready to build your own merchant services company instead of promoting someone else's brand, our white label program can help you launch quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="cta-apply-btn">
              Apply for White Label Partnership
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" onClick={openCalendly} data-testid="cta-book-btn">
              Schedule a Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      {blogs.length > 0 && (
        <section className="py-20 bg-white" data-testid="wl-blog-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">From Our Blog</h2>
                <p className="text-lg text-gray-600">Industry insights, guides, and resources</p>
              </div>
              <Link to="/resources/blog">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex gap-6 transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${blogScroll * 340}px)` }}
                >
                  {blogs.map((post) => (
                    <Link
                      key={post.id}
                      to={`/resources/blog/${post.slug}`}
                      className="flex-shrink-0 w-[320px] group"
                      data-testid={`wl-blog-card-${post.slug}`}
                    >
                      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                        {post.featured_image ? (
                          <div className="h-48 overflow-hidden">
                            <img src={post.featured_image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          </div>
                        ) : (
                          <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                            <span className="text-white text-4xl font-bold opacity-30">{post.title?.charAt(0)}</span>
                          </div>
                        )}
                        <CardContent className="p-5">
                          {post.topic && (
                            <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">{post.topic}</span>
                          )}
                          <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">{post.title}</h3>
                          <p className="text-sm text-gray-500">{post.content_type || 'Article'}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
              {blogs.length > 3 && (
                <div className="flex justify-center gap-3 mt-8">
                  <button
                    onClick={() => setBlogScroll(Math.max(0, blogScroll - 1))}
                    disabled={blogScroll === 0}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 disabled:opacity-30 flex items-center justify-center transition-colors"
                    data-testid="wl-blog-carousel-prev"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                  </button>
                  <button
                    onClick={() => setBlogScroll(Math.min(blogs.length - 3, blogScroll + 1))}
                    disabled={blogScroll >= blogs.length - 3}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 disabled:opacity-30 flex items-center justify-center transition-colors"
                    data-testid="wl-blog-carousel-next"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-gray-50 border-t border-gray-200" data-testid="wl-internal-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 text-center mb-4">Related Pages</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Payment Processing Pricing', path: '/payment-processing-pricing' },
              { label: 'POS Systems', path: '/pos-systems' },
              { label: 'Free POS Program', path: '/free-pos-system' },
              { label: 'Merchant Lending', path: '/merchant-lending' },
              { label: 'Payment Terminals', path: '/payment-terminals' },
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
            <iframe src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" className="w-full h-[80vh] border-0 rounded-2xl" title="Apply for White Label Partnership" />
          </div>
        </div>
      )}
    </div>
  );
}
