import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  ArrowRight,
  Shield,
  DollarSign,
  Clock,
  CreditCard,
  Smartphone,
  RefreshCw,
  Lock,
  Users,
  BarChart3,
  Zap,
  FileText,
  Headphones,
  Monitor,
  AlertTriangle
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const Chiropractors = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
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

  const videos = [
    'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/ic6xpucz_Chiropractor%20office_.mp4',
    'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/2w9xah99_Healthcare%20Practice%20POS%20%20Management%20Solutions%20%20Clover.mp4'
  ];

  const handleVideoEnded = useCallback(() => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  }, [videos.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Video Hero */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <video
          key={videos[currentVideo]}
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/75 via-purple-800/60 to-purple-600/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight drop-shadow-lg" data-testid="chiro-hero-title">
            Chiropractor Payment Processing Solutions
          </h1>
          <p className="text-lg md:text-xl font-semibold text-white mb-2">
            Integrated Payments Built for Chiropractic Offices
          </p>
          <p className="text-base md:text-lg text-purple-100 mb-10 max-w-2xl">
            Optimize collections. Automate billing. Improve cash flow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="chiro-hero-cta" onClick={openCalendly}>
                Schedule a Free Demo
              </Button>
            <a href="#how-it-works">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-6">
                See How It Works
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">Pymt Bridge Gateway</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Connect Your Practice to Smarter Payments
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Pymt Bridge Gateway connects your chiropractic practice management system directly to secure, compliant payment processing — in-office and online.
          </p>
          <p className="text-lg font-medium text-gray-800">
            Increase patient payments. Reduce administrative workload. Strengthen revenue performance.
          </p>
        </div>
      </section>

      {/* Section 1 – The Problem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <p className="text-sm font-semibold text-red-500 uppercase tracking-wider">The Problem</p>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Manual Billing Slows Down Cash Flow</h2>
              <p className="text-lg text-gray-600 mb-8">Chiropractic offices often deal with:</p>
              <div className="space-y-4">
                {[
                  'Delayed patient payments',
                  'Manual posting errors',
                  'Disconnected terminals and software',
                  'Recurring care plans that are hard to manage',
                  'High administrative overhead'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 font-semibold text-gray-800">Inefficient payment workflows create revenue leaks.</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <AlertTriangle className="h-20 w-20 text-red-400 mx-auto" />
                <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-2xl font-bold text-red-500">62%</p>
                    <p className="text-xs text-gray-500">Practices with billing delays</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-2xl font-bold text-red-500">$15K+</p>
                    <p className="text-xs text-gray-500">Avg. revenue leakage/yr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 – The Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Zap className="h-20 w-20 text-purple-600 mx-auto" />
                <div className="space-y-3 text-left max-w-xs mx-auto">
                  <div className="bg-white rounded-lg p-3 shadow-sm flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-700">Every transaction syncs</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-700">Every payment reconciles</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-700">Every report is clear</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider">The Solution</p>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Fully Integrated Chiropractic Payment System</h2>
              <p className="text-lg text-gray-600 mb-6">Pymt Bridge Gateway delivers:</p>
              <div className="space-y-3 mb-8">
                {[
                  'Integrated payment processing',
                  'Automatic payment posting into your PM system',
                  'Text-to-pay and email pay links',
                  'Recurring billing for treatment plans',
                  'Online patient bill pay',
                  'PCI-compliant secure gateway'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" onClick={openCalendly}>
                  Optimize My Payments <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 – How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Three steps to optimized payments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: '1',
                title: 'Integration',
                desc: 'We connect your chiropractic practice management software to our secure gateway.',
                icon: Monitor
              },
              {
                step: '2',
                title: 'Automation',
                desc: 'Payments automatically post and reconcile.',
                icon: RefreshCw
              },
              {
                step: '3',
                title: 'Optimization',
                desc: 'Enable recurring billing, patient financing, and digital payment options.',
                icon: BarChart3
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-sm font-bold text-purple-600 mb-2">Step {item.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 text-center mb-6">Result:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Faster collections', 'Improved patient experience', 'Reduced billing errors', 'Stronger monthly cash flow'].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 – Payment Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Payment Options for Modern Chiropractic Offices</h2>
            <p className="text-lg text-gray-600">Your patients expect convenience.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: CreditCard, label: 'In-office chip and contactless payments' },
              { icon: Smartphone, label: 'Mobile and tablet checkout' },
              { icon: Monitor, label: 'Online payment portal' },
              { icon: FileText, label: 'Text-to-pay' },
              { icon: RefreshCw, label: 'Automated recurring plans' },
              { icon: BarChart3, label: 'Multi-location reporting' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="border hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Icon className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                    <p className="text-sm font-medium text-gray-700">{item.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="text-center text-gray-600 mt-8 font-medium">Flexible payment acceptance increases collection rates.</p>
        </div>
      </section>

      {/* Section 5 – Security */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm font-semibold text-green-600 uppercase tracking-wider">Security & Compliance</p>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Healthcare Payments Require Strict Security</h2>
              <p className="text-lg text-gray-600 mb-8">Pymt Bridge Gateway includes:</p>
              <div className="space-y-4">
                {[
                  'End-to-end encryption',
                  'PCI-compliant processing',
                  'Secure tokenization',
                  'HIPAA-conscious workflows'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 font-medium text-gray-800">Protect patient data while accelerating payments.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'PCI Level 1', desc: 'Compliant' },
                { label: 'End-to-End', desc: 'Encryption' },
                { label: 'Tokenization', desc: 'Secure' },
                { label: 'HIPAA', desc: 'Conscious' }
              ].map((badge, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md text-center border border-green-100">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <p className="font-bold text-gray-900">{badge.label}</p>
                  <p className="text-sm text-gray-500">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 – Revenue Optimization */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Revenue Optimization for Chiropractors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chiropractic offices using integrated payment systems often see:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { metric: 'Reduced', label: 'Accounts Receivable', icon: DollarSign },
              { metric: 'Higher', label: 'Same-Day Collections', icon: Clock },
              { metric: 'Lower', label: 'Chargebacks', icon: Shield },
              { metric: 'Improved', label: 'Front Desk Efficiency', icon: Users }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <p className="text-lg font-bold text-purple-600">{item.metric}</p>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-2">Payment optimization is not just convenience.</p>
            <p className="text-lg font-bold text-gray-900 mb-6">It is revenue strategy.</p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" onClick={openCalendly}>
                Request a Revenue Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
          </div>
        </div>
      </section>

      {/* Section 7 – Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Practices Choose Us</h2>
            <p className="text-lg text-gray-600">We specialize in healthcare payment optimization.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto mb-10">
            {[
              { icon: Headphones, label: 'Dedicated Support' },
              { icon: Zap, label: 'Seamless Onboarding' },
              { icon: DollarSign, label: 'Transparent Pricing' },
              { icon: Clock, label: 'Fast Deployment' },
              { icon: BarChart3, label: 'Ongoing Optimization' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <Icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-gray-700">We do not just process payments.</p>
            <p className="text-lg font-bold text-purple-700">We improve your revenue flow.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Streamline Your Chiropractic Payments?
          </h2>
          <p className="text-xl mb-4 text-purple-100">Book your free consultation and discover how to:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            {['Increase patient collections', 'Automate billing workflows', 'Reduce administrative burden', 'Improve practice profitability'].map((item, idx) => (
              <div key={idx} className="bg-white/15 rounded-lg p-4 backdrop-blur-sm">
                <CheckCircle className="h-5 w-5 text-white mx-auto mb-2" />
                <p className="text-sm font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6" onClick={openCalendly}>
                Book My Free Demo
              </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
                Speak With a Healthcare Payments Specialist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Chiropractor Payments</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="faq-1" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                What makes your payment system different for chiropractic offices?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-3">Our system is designed specifically for healthcare environments. Pymt Bridge Gateway:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Integrates with chiropractic practice management software</li>
                  <li>Automates payment posting</li>
                  <li>Supports recurring treatment plans</li>
                  <li>Reduces manual billing errors</li>
                </ul>
                <p className="text-sm text-gray-500">It is built to improve cash flow while simplifying front desk operations.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Can your system integrate with my current chiropractic software?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-3">Yes. We integrate with many chiropractic and healthcare practice management systems. This allows:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Automatic posting of payments</li>
                  <li>Simplified reconciliation</li>
                  <li>Cleaner reporting</li>
                  <li>Fewer manual adjustments</li>
                </ul>
                <p className="text-sm text-gray-500">No double entry. No disconnected systems.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Do you support recurring payments for care plans and memberships?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-3">Yes. Our platform supports:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Auto-debit wellness plans</li>
                  <li>Monthly membership billing</li>
                  <li>Installment treatment programs</li>
                  <li>Secure card-on-file storage</li>
                </ul>
                <p className="text-sm text-gray-500">Recurring billing increases collection consistency and reduces accounts receivable.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Can patients pay online or through text?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-3">Yes. We provide:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Online patient payment portals</li>
                  <li>Text-to-pay links</li>
                  <li>Email payment requests</li>
                  <li>Mobile-friendly checkout</li>
                </ul>
                <p className="text-sm text-gray-500">Digital payment options increase convenience and improve payment speed.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Is your chiropractic payment system secure and compliant?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-3">Yes. We provide:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>PCI-compliant processing</li>
                  <li>End-to-end encryption</li>
                  <li>Secure tokenization</li>
                  <li>Healthcare-conscious data handling</li>
                </ul>
                <p className="text-sm text-gray-500">Patient data protection is built into the system.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                How quickly can I get started?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-3">Most chiropractic offices can be onboarded within 7 to 10 business days. The process includes:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>System integration</li>
                  <li>Gateway setup</li>
                  <li>Terminal configuration</li>
                  <li>Staff training</li>
                </ul>
                <p className="text-sm text-gray-500">We ensure a smooth transition with minimal disruption.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                How does this improve my practice's cash flow?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-3">Integrated payment systems help you:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Collect more at time of service</li>
                  <li>Reduce outstanding balances</li>
                  <li>Automate recurring payments</li>
                  <li>Improve reconciliation accuracy</li>
                </ul>
                <p className="text-sm text-gray-500">Faster collections mean stronger monthly revenue and less administrative strain.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Chiropractors;
