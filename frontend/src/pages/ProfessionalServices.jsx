import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  ChevronRight,
  FileText,
  DollarSign,
  BarChart3,
  Users,
  Clock,
  Send,
  PenTool,
  CreditCard,
  Building2,
  Briefcase,
  Calculator,
  Scale,
  Megaphone,
  Wrench,
  Monitor,
  Landmark,
  ArrowRight,
  Phone,
  CalendarDays,
  Receipt,
  Wallet,
  LineChart,
  Shield,
  Zap
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../components/ui/accordion';

const ProfessionalServices = () => {
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  const heroVideos = [
    'https://customer-assets.emergentagent.com/job_e0de31d0-c8f6-44f8-af93-bc2fb5cc9b2f/artifacts/75t88239_Professional%20svc%201.mp4',
    'https://customer-assets.emergentagent.com/job_e0de31d0-c8f6-44f8-af93-bc2fb5cc9b2f/artifacts/1uxmzbvt_Professional%20Svc%202.mp4'
  ];

  const handleVideoEnd = useCallback(() => {
    setActiveVideo(prev => {
      const next = (prev + 1) % 2;
      const nextRef = next === 0 ? video1Ref : video2Ref;
      const currRef = prev === 0 ? video1Ref : video2Ref;
      if (nextRef.current) {
        nextRef.current.style.opacity = '1';
        nextRef.current.currentTime = 0;
        nextRef.current.play();
      }
      if (currRef.current) currRef.current.style.opacity = '0';
      return next;
    });
  }, []);

  useEffect(() => {
    // Load Calendly
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
    window.scrollTo(0, 0);
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/mscpayments/posdemo?hide_event_type_details=1&primary_color=1400ff' });
    }
  };

  const estimateFeatures = [
    'Create detailed, itemized estimates',
    'Convert estimates into invoices instantly',
    'Capture e-signatures',
    'Manage contract workflows',
    'Reduce approval delays'
  ];

  const estimateIdeal = [
    { icon: Wrench, label: 'Contractors' },
    { icon: Briefcase, label: 'Consultants' },
    { icon: Megaphone, label: 'Marketing agencies' },
    { icon: Monitor, label: 'IT service providers' },
    { icon: Building2, label: 'Home service companies' }
  ];

  const invoiceFeatures = [
    'Send itemized invoices',
    'Automate invoice reminders',
    'Track payment status in real time',
    'Provide clients a secure payment portal',
    'Accept card and ACH payments'
  ];

  const invoiceIdeal = [
    { icon: Scale, label: 'Law firms' },
    { icon: Calculator, label: 'Accounting firms' },
    { icon: Receipt, label: 'Bookkeepers' },
    { icon: Landmark, label: 'Architects' },
    { icon: Building2, label: 'Engineers' }
  ];

  const vendorFeatures = [
    'Pay vendors via secure ACH',
    'Pay by business credit card',
    'Track expenses in one dashboard',
    'Improve cash flow control'
  ];

  const reportingFeatures = [
    'Cash flow analytics',
    'Sales and profitability trends',
    'Outstanding invoice tracking',
    'Payment status summaries'
  ];

  const whyChooseUs = [
    'Install and program your Clover system',
    'Configure invoicing and estimates',
    'Set up ACH and bill pay',
    'Train your team',
    'Provide ongoing support'
  ];

  const industries = [
    { icon: Scale, label: 'Law firms', keyword: 'Payment processing for law firms' },
    { icon: Calculator, label: 'Accountants', keyword: 'Payment processing for accountants' },
    { icon: Briefcase, label: 'Consultants', keyword: 'Payment processing for consultants' },
    { icon: Megaphone, label: 'Marketing agencies', keyword: 'Payment processing for marketing agencies' },
    { icon: Wrench, label: 'Contractors', keyword: 'Payment processing for contractors' },
    { icon: Building2, label: 'Home service companies', keyword: 'Payment processing for home service companies' },
    { icon: Monitor, label: 'IT service providers', keyword: 'Payment processing for IT service providers' },
    { icon: Landmark, label: 'Architects & Engineers', keyword: 'Payment processing for architects and engineers' }
  ];

  const comingSoon = [
    'Estimate templates',
    'Project management tools',
    'Vendor and purchase order management',
    'Contract lifecycle management'
  ];

  const faqs = [
    {
      q: 'What is the best payment processing for professional services?',
      a: 'Clover Professional Services offers an all-in-one solution with estimates, invoicing, ACH payments, cash flow reporting, and e-signature support — designed specifically for consultants, law firms, accountants, and service providers. Merchant Solutions Corp installs and configures the entire system.'
    },
    {
      q: 'Does Clover support invoicing and estimates?',
      a: 'Yes. With the Clover Services Growth plan, you can create itemized estimates, convert them into invoices, capture e-signatures, and automate payment reminders — all from your Clover POS or dashboard.'
    },
    {
      q: 'Can I accept ACH payments with Clover?',
      a: 'Yes. Clover Professional Services supports ACH payments for both client billing and vendor bill pay, giving you flexible payment options and improved cash flow management.'
    },
    {
      q: 'Is there a free trial for Clover Professional Services?',
      a: 'Yes. Qualified merchants in eligible MCC categories who enroll in the Services Growth plan receive a free 90-day trial with full access to Professional Services features. The promotion runs for six months and may be extended.'
    },
    {
      q: 'What industries does Clover Professional Services support?',
      a: 'Clover Professional Services is built for consultants, law firms, accounting firms, marketing agencies, contractors, home service companies, IT providers, architects, engineers, and other service-based businesses.'
    },
    {
      q: 'How is Merchant Solutions Corp different from ordering Clover online?',
      a: 'We don\'t just ship hardware. We install your Clover system, configure invoicing and estimates, set up ACH and bill pay, train your staff, and provide ongoing technical support. You launch faster and avoid setup delays.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Professional Services Payment Processing | Clover & PYMT360 POS for Contractors</title>
        <meta property="og:title" content="Professional Services Payment Processing | Clover & PYMT360 POS for Contractors" />
        <meta property="og:description" content="Contractor payment processing and field service invoicing with Clover and PYMT360 POS. Estimates, e-signatures, ACH payments, and job-based reporting for service businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/professional-services-payment-processing-clover-pos" />
        <meta name="description" content="Contractor payment processing and field service invoicing with Clover and PYMT360 POS. Estimates, e-signatures, ACH payments, and job-based reporting for service businesses." />
        <meta name="keywords" content="contractor payment processing, field service invoicing, professional services POS, Clover for contractors, PYMT360 POS, service business payment processing, contractor billing, mobile invoicing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/professional-services-payment-processing-clover-pos" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Professional Services Payment Processing","serviceType":"B2B and Professional Services Payment Processing","provider":{"@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com"},"areaServed":"United States","url":"https://merchantsolutionscorp.com/professional-services-payment-processing-clover-pos","description":"Payment processing solutions for professional services businesses including law firms, accounting, consulting, and more."})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://merchantsolutionscorp.com/"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://merchantsolutionscorp.com/industries/restaurants"},{"@type":"ListItem","position":3,"name":"Professional Services","item":"https://merchantsolutionscorp.com/professional-services-payment-processing-clover-pos"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com","logo":"https://merchantsolutionscorp.com/logo.png","sameAs":["https://www.facebook.com/merchantsolutionscorp/","https://www.instagram.com/merchant_solutions_corp","https://www.linkedin.com/company/merchantsolutionscorp/","https://www.youtube.com/merchantsolutionscorp"]})}</script>
      </Helmet>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden min-h-[600px] flex items-center">
        <video ref={video1Ref} autoPlay muted playsInline onEnded={handleVideoEnd} className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700" style={{ opacity: 1 }}>
          <source src={heroVideos[0]} type="video/mp4" />
        </video>
        <video ref={video2Ref} muted playsInline onEnded={handleVideoEnd} className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700" style={{ opacity: 0 }}>
          <source src={heroVideos[1]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-purple-300 font-semibold mb-4">Powered by Merchant Solutions Corp + Clover</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="hero-h1">
              Contractor Payment Processing & Field Service Invoicing with Clover and PYMT360 POS
            </h1>
            <h2 className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto" data-testid="hero-h2">
              Estimates, E-Signatures, ACH Payments & Job-Based Reporting for Service Businesses
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Appointment scheduling', 'Itemized estimates with e-signature', 'Professional invoicing & automated reminders', 'ACH & vendor payments', 'Cash flow and job profitability reporting', 'Settlement and payout visibility'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle className="h-4 w-4 text-purple-300" />
                  <span className="text-white text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-purple-200 mb-8 text-lg">We install, configure, and support everything. You focus on clients.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setShowLeadModal(true)} className="bg-white text-purple-700 hover:bg-purple-50 text-lg px-8 py-6 shadow-xl" data-testid="hero-quote-btn">
                Get a Quote <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" onClick={openCalendly} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-6" data-testid="hero-demo-btn">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Bar */}
      <section className="py-10 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Estimates & E-Sign', icon: PenTool },
              { label: 'Invoicing & ACH', icon: FileText },
              { label: 'Cash Flow Insights', icon: LineChart },
              { label: 'Full-Service Install', icon: Zap }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <Icon className="h-6 w-6 text-purple-400" />
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why You Need More */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 mb-6">
              If you run a service-based business, you need more than a card reader.
            </p>
            <p className="text-xl text-purple-700 font-semibold">
              Merchant Solutions Corp delivers Clover Professional Services tools designed for growing service businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Clover Professional Services Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="features-h2">Clover Professional Services Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Now available on the <span className="font-semibold text-purple-700">Services Growth</span> SaaS plan, with limited features on the Essentials and Growth plans.
            </p>
          </div>
        </div>
      </section>

      {/* Estimates & Contracts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <PenTool className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Streamlined Estimates & Contracts</h3>
              </div>
              <div className="space-y-3 mb-8">
                {estimateFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 font-semibold mb-4">Ideal for:</p>
              <div className="flex flex-wrap gap-3">
                {estimateIdeal.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 bg-purple-50 border border-purple-100 px-4 py-2 rounded-full">
                      <Icon className="h-4 w-4 text-purple-600" />
                      <span className="text-sm text-gray-800 font-medium">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <PenTool className="h-16 w-16 text-purple-400 mb-4" />
              <p className="text-2xl font-bold text-gray-900 mb-2">Estimate → E-Sign → Invoice</p>
              <p className="text-gray-600">One seamless workflow for service professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Invoicing & Client Portal */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <Receipt className="h-16 w-16 text-purple-400 mb-4" />
              <p className="text-2xl font-bold text-gray-900 mb-2">Invoice → Remind → Get Paid</p>
              <p className="text-gray-600">Automated invoicing with a secure client payment portal</p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Enhanced Invoicing & Client Payment Portal</h3>
              </div>
              <div className="space-y-3 mb-8">
                {invoiceFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 font-semibold mb-4">Perfect for:</p>
              <div className="flex flex-wrap gap-3">
                {invoiceIdeal.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 bg-purple-50 border border-purple-100 px-4 py-2 rounded-full">
                      <Icon className="h-4 w-4 text-purple-600" />
                      <span className="text-sm text-gray-800 font-medium">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor & Bill Pay + Reporting side by side */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vendor */}
            <Card className="border-2 hover:border-purple-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Wallet className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Simplified Vendor & Bill Payments</h3>
                </div>
                <div className="space-y-3">
                  {vendorFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Reporting */}
            <Card className="border-2 hover:border-purple-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Advanced Reporting & Financial Insights</h3>
                </div>
                <div className="space-y-3 mb-6">
                  {reportingFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
                <p className="text-purple-700 font-semibold">Make smarter decisions with real numbers.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Finances Overview Dashboard */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">New Finances Overview Dashboard</h3>
            <div className="space-y-3 mb-6">
              {['See settlement bank transactions', 'Monitor financial health in one view', 'Powered by Finicity integration'].map((f, i) => (
                <div key={i} className="flex items-center justify-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-300 flex-shrink-0" />
                  <span className="text-purple-100">{f}</span>
                </div>
              ))}
            </div>
            <p className="text-xl font-semibold text-white">Understand where your money moves.</p>
          </div>
        </div>
      </section>

      {/* Why Choose MSC */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="why-choose-h2">Why Professional Service Businesses Choose Merchant Solutions Corp</h2>
              <p className="text-lg text-gray-700 mb-2">We don't just ship hardware.</p>
              <p className="text-lg text-gray-700 mb-6">We:</p>
              <div className="space-y-3 mb-8">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mb-1">You avoid setup delays.</p>
              <p className="text-purple-700 font-bold text-lg">You launch faster.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-10">
              <div className="space-y-6">
                {[
                  { icon: Zap, title: 'Full-Service Installation', desc: 'We set up everything on-site or remotely' },
                  { icon: Shield, title: 'Ongoing Support', desc: 'Dedicated team for troubleshooting and optimization' },
                  { icon: Clock, title: 'Fast Deployment', desc: 'Get operational in days, not weeks' }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free 90-Day Trial */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-purple-600 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6">LIMITED TIME OFFER</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="trial-h2">FREE 90-Day Trial for Eligible Professional Services Merchants</h2>
            <p className="text-lg text-gray-700 mb-6">Qualified MCC categories that enroll in the Services Growth plan receive:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {['First 90 days free', 'Full Professional Services feature access', 'Optional upgrade from Essentials or Growth'].map((item, i) => (
                <div key={i} className="bg-white border border-purple-200 rounded-xl px-5 py-4 shadow-sm">
                  <CheckCircle className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 italic mb-6">Promotion runs for six months and may be extended.</p>
            <Button size="lg" onClick={openCalendly} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6" data-testid="trial-cta">
              Check If You Qualify <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Industries We Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" data-testid="industries-h2">Industries We Support</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Card key={i} className="border-2 hover:border-purple-400 hover:shadow-lg transition-all duration-300" data-testid={`industry-${i}`}>
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{ind.label}</h3>
                    <p className="text-xs text-gray-500">{ind.keyword}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming in 2026 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Coming in 2026</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {comingSoon.map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl px-4 py-4 shadow-sm">
                  <Clock className="h-5 w-5 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600">Clover continues expanding tools for professional services businesses.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white" data-testid="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Professional Services Payment Processing FAQ</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-gray-50 rounded-xl border px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="cta-h2">Get Started Today</h2>
          <p className="text-lg text-purple-200 mb-4">
            Upgrade to Clover Services Growth and streamline your operations.
          </p>
          <p className="text-lg text-purple-200 mb-8">
            Book a consultation with Merchant Solutions Corp and see how Professional Services POS and payment processing can simplify your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setShowLeadModal(true)} className="bg-white text-purple-700 hover:bg-purple-50 text-lg px-8 py-6 shadow-xl" data-testid="cta-quote-btn">
              Get a Professional Services Quote <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" onClick={openCalendly} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-6" data-testid="cta-demo-btn">
              <Phone className="h-5 w-5 mr-2" /> Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link to="/pos/clover" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Clover POS</Link>
            <Link to="/solutions/payment-processing" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Payment Processing</Link>
            <Link to="/industries/healthcare" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Healthcare</Link>
            <Link to="/retail-payment-solutions" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Retail</Link>
            <Link to="/restaurant-payment-processing-services" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Restaurants</Link>
          </div>
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides professional services payment processing, Clover POS for consultants, invoicing software for contractors, payment processing for law firms, payment processing for accountants, POS for consultants, estimate and invoice software with e-signature, ACH payments for service businesses, and cash flow reporting for professional services. Serving businesses across all 50 U.S. states, Canada, and Puerto Rico.
          </p>
        </div>
      </section>

      {/* Lead Connector Modal */}
      {showLeadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowLeadModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowLeadModal(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
              data-testid="lead-modal-close"
            >
              &#x2715;
            </button>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A"
              className="w-full h-[80vh] border-0 rounded-2xl"
              title="Get a Quote"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessionalServices;
