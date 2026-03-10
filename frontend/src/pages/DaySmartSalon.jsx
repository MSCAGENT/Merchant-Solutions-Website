import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Calendar,
  CreditCard,
  Users,
  BarChart3,
  Package,
  MessageSquare,
  Scissors,
  Clock,
  Shield,
  TrendingUp,
  DollarSign,
  Star,
  Sparkles,
  Heart,
  Briefcase,
  ChevronRight,
  Globe,
  Smartphone,
  Mail
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const DaySmartSalon = () => {
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

  const keyBenefits = [
    {
      icon: Calendar,
      title: 'Streamline Appointments & Scheduling',
      desc: "DaySmart's scheduling tools let your clients book online anytime — directly from your website or social media. Clients can select services, choose their stylist, and book appointments without calling your front desk.",
      highlights: ['Online booking 24/7', 'Walk-in kiosk check-in', 'Automated appointment reminders', 'Drag-and-drop calendar view']
    },
    {
      icon: CreditCard,
      title: 'Built-In Payment Processing',
      desc: 'DaySmart Salon integrates payment processing directly into your software to speed up checkout, reduce errors, and improve client experience. This eliminates manual payment entry and keeps your front desk running smoothly.',
      highlights: ['Contactless payments', 'Chip and swipe credit card acceptance', 'Online deposits to reduce no-shows', 'Accurate reconciliation and reporting']
    },
    {
      icon: Users,
      title: 'Client & CRM Tools',
      desc: 'Build detailed client profiles that let you personalize service, target marketing, and boost repeat business with a centralized client database.',
      highlights: ['Contact details', 'Service history', 'Product purchases', 'Preferences and notes']
    },
    {
      icon: Package,
      title: 'Inventory & Business Management',
      desc: 'Stay in control of salon products and supplies with automated inventory tracking. DaySmart alerts you when stock is low and tracks use in real time. Reduce waste and maximize retail revenue.',
      highlights: ['Product reorder triggers', 'Supplier management', 'Service and product profit tracking']
    },
    {
      icon: DollarSign,
      title: 'Payroll & Workforce Management',
      desc: 'Automate payroll with flexible payment structures for hourly, commission, or mixed compensation. DaySmart calculates commissions, tracks hours, and reduces manual errors so your team gets paid accurately and on time.',
      highlights: ['Hourly & commission tracking', 'Automated calculations', 'Staff scheduling', 'Reduced payroll errors']
    },
    {
      icon: Mail,
      title: 'Salon Marketing Tools',
      desc: 'Grow your salon with built-in marketing automation tools. Engage clients before and after appointments for better retention and higher lifetime value.',
      highlights: ['Email campaigns', 'Text marketing', 'Loyalty programs', 'Client review prompts']
    }
  ];

  const perfectFor = [
    { icon: Scissors, label: 'Hair Salons' },
    { icon: Star, label: 'Barbershops' },
    { icon: Sparkles, label: 'Nail Spas' },
    { icon: Heart, label: 'Massage Studios' },
    { icon: Sparkles, label: 'Waxing & Esthetics' },
    { icon: Star, label: 'Tattoo Salons' },
    { icon: Heart, label: 'Wellness Centers' }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$29',
      users: '1 User',
      desc: 'Essential features to get your salon running',
      features: ['Online Booking', 'Appointment Confirmations', 'Instagram & Facebook Booking', 'Payment Processing', 'Online Deposits', 'Kiosk Walk-In Manager', 'Mobile App', 'Reports', '500 Texts / 1,000 Emails per month'],
      badge: null
    },
    {
      name: 'Deluxe',
      price: '$69',
      users: '3 Users',
      desc: 'Everything in Basic, plus tools to grow',
      features: ['Everything in Basic', 'Online Gift Cards', 'Digital Forms', 'Client Loyalty System', 'Basic Payroll', 'Email Marketing', 'Productivity Dashboard', 'Multi-Ticket Checkout', 'Resource Management', '1,000 Texts / 5,000 Emails per month'],
      badge: null
    },
    {
      name: 'Deluxe Growth',
      price: '$149',
      users: '3 Users',
      desc: 'Everything in Deluxe, plus marketing power',
      features: ['Everything in Deluxe', 'Text Marketing', 'Two-Way Texting', 'Reputation Management', '1,000 Texts / 10,000 Emails per month'],
      badge: 'MOST POPULAR'
    },
    {
      name: 'Premium',
      price: '$199',
      users: '6 Users',
      desc: 'Great for advancing growth',
      features: ['Everything in Deluxe Growth', 'QuickBooks Connect', 'Client Loyalty System', '2,500 Texts / 10,000 Emails per month'],
      badge: null
    },
    {
      name: 'Premium Growth',
      price: 'Custom',
      users: 'Unlimited Users',
      desc: 'Full power for large salons & multi-location',
      features: ['Everything in Premium', 'Expense Tracking', 'Advanced Payroll', 'Sliding Scale Commission', 'Commission Exceptions', 'Overtime Rules', '5,000 Texts / 20,000 Emails per month'],
      badge: 'ENTERPRISE'
    }
  ];

  const addOns = [
    { title: 'Website Builder', desc: 'Attract new clients with a custom website that highlights your services — no coding skills needed.' },
    { title: 'Reputation Management', desc: 'Collect and display honest client feedback to polish your image and increase credibility.' },
    { title: 'Text Marketing', desc: 'Boost visits, fill last-minute openings, and share promos with automated targeted messages.' },
    { title: 'Two-Way Texting', desc: 'Send and receive messages instantly to handle client requests and keep your schedule on track.' }
  ];

  const whyChoose = [
    'All-in-one salon software — no need for multiple tools',
    'Cloud-based access from anywhere',
    'Reduce no-shows and gaps in schedule',
    'Improve checkout speed and client experience',
    'Better inventory, payroll, and sales oversight',
    'Automated marketing & client retention tools',
    'Scalable software that grows with your salon'
  ];

  const faqs = [
    { question: 'Does DaySmart Salon accept credit cards?', answer: "Yes. DaySmart's integrated payment processing supports chip, swipe, and contactless payments. Funds are deposited quickly so you get paid faster." },
    { question: 'Can clients book online?', answer: 'Yes. Clients can book appointments online 24/7 through a branded booking page linked from your website or social media profiles.' },
    { question: 'Is scheduling customizable for different stylists?', answer: 'Yes. You can assign schedules, durations, and availability by stylist. Each team member can have their own calendar with individual service offerings.' },
    { question: 'Does the software manage inventory?', answer: 'Yes. DaySmart automates inventory tracking with alerts for low stock, supplier management, and real-time product usage tracking.' },
    { question: 'Can I run payroll inside DaySmart?', answer: 'DaySmart includes payroll automation features that calculate hours and commissions for hourly, commission-based, or mixed compensation structures.' },
    { question: 'Does DaySmart work for multi-location salons?', answer: 'Yes. The Premium plan includes multi-location management from a single dashboard, allowing you to oversee scheduling, staff, reporting, and client data across all your locations.' }
  ];

  const seoKeywords = [
    'salon management software', 'salon POS system', 'salon payment processing',
    'online salon booking software', 'inventory management for salons', 'CRM for beauty businesses',
    'salon scheduling software', 'salon payroll automation', 'salon marketing tools',
    'hair salon software', 'DaySmart Salon', 'salon appointment software'
  ];

  const whatIs = [
    'Salon appointment scheduling',
    'Integrated payment processing',
    'Inventory control',
    'Client relationship management',
    'Marketing automation',
    'Reporting & business analytics'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>DaySmart Salon Software | All-in-One Salon Management & Payment Processing</title>
        <meta property="og:title" content="DaySmart Salon Software | All-in-One Salon Management & Payment Processing" />
        <meta property="og:description" content="DaySmart Salon is a cloud-based software solution for appointment scheduling, integrated payments, inventory, CRM, payroll, and salon growth tools. Professional installation and training." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/daysmart-salon-pos-software" />
        <meta name="description" content="DaySmart Salon is a cloud-based software solution for appointment scheduling, integrated payments, inventory, CRM, payroll, and salon growth tools. Professional installation and training." />
        <meta name="keywords" content="DaySmart Salon, salon software, salon management software, salon appointment scheduling, salon POS system, salon payment processing, salon booking software" />
        <link rel="canonical" href="/daysmart-salon-pos-software" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-24 lg:py-32 overflow-hidden" data-testid="daysmart-hero">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(168,85,247,0.4) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(236,72,153,0.3) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-sm md:text-base uppercase tracking-widest text-purple-400 font-semibold mb-4">Salon Management Software & POS</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="hero-h1">
                All-in-One Salon Business Software for Appointments, Payments & Growth
              </h1>
              <p className="text-lg text-purple-200 mb-4 max-w-3xl mx-auto lg:mx-0">
                DaySmart Salon is a cloud-based salon management platform designed to help salon owners streamline operations, automate scheduling, accept payments, and grow revenue — all from one system.
              </p>
              <p className="text-base text-purple-300/70 mb-8">
                Trusted by hair salons, barbershops, spas, and beauty studios of every size.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" onClick={() => setShowQuoteModal(true)} className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-trial-btn">
                  Start Your Free Trial
                </Button>
                <Button size="lg" onClick={() => setShowDemoModal(true)} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-6" data-testid="hero-demo-btn">
                  Request a Demo
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://customer-assets.emergentagent.com/job_6e98ffa5-31c4-476f-bd08-8daa7de6f4fd/artifacts/1wft6s2h_Salon_Homepage-Heros_1466x928_Tech.f1690820328.webp"
                alt="DaySmart Salon management software with scheduling, payments, and business tools"
                className="w-full max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Is DaySmart */}
      <section className="py-20 bg-white" data-testid="what-is-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Is DaySmart Salon Software?</h2>
              <p className="text-lg text-gray-600 mb-6">
                DaySmart Salon is a comprehensive salon management system that combines everything you need to run and grow your beauty business:
              </p>
              <div className="space-y-3">
                {whatIs.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6 border-l-4 border-purple-600 pl-4">
                This all-in-one solution lets you manage your salon, spa, or beauty business with one powerful platform.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://customer-assets.emergentagent.com/job_6e98ffa5-31c4-476f-bd08-8daa7de6f4fd/artifacts/xw7od8io_Unified-Website_Feature-Icons_Salon_500x281_Barber.png"
                alt="DaySmart Salon barber and salon management tools"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50" data-testid="benefits-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Key Benefits of Using DaySmart Salon</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              From appointment scheduling to marketing automation — everything your salon needs in one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <Card key={i} className="border-2 hover:border-purple-500 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{benefit.desc}</p>
                    <div className="space-y-1.5">
                      {benefit.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-3.5 w-3.5 text-purple-500 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{h}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reporting & Insights */}
      <section className="py-20 bg-white" data-testid="reporting-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <img
                src="https://customer-assets.emergentagent.com/job_6e98ffa5-31c4-476f-bd08-8daa7de6f4fd/artifacts/79g5grju_Unified-Website_Feature-Icons_Salon_500x281_Salon.png"
                alt="DaySmart Salon reporting and analytics tools"
                className="w-full max-w-md object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Integrated Reporting & Business Insights</h2>
              <p className="text-lg text-gray-600 mb-4">
                Detailed reports help you understand sales performance, retail product trends, client behaviors, and staff productivity.
              </p>
              <p className="text-gray-600 mb-6">
                Live reporting dashboards let you make decisions confidently and identify growth opportunities.
              </p>
              <div className="bg-purple-50 border border-purple-100 rounded-xl px-5 py-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-purple-700">Integrated Payment Reconciliation:</strong> DaySmart supports built-in credit card processing that ties directly into your salon workflow. Accept payments inside the system and automatically reconcile your transactions without manual bookkeeping. Funds are deposited quickly so you get paid faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50" data-testid="who-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Who DaySmart Salon Is Perfect For</h2>
            <p className="text-lg text-gray-500">DaySmart Salon serves a wide variety of beauty businesses.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {perfectFor.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-3 bg-white border-2 border-gray-200 hover:border-purple-500 rounded-xl px-5 py-3 shadow-sm transition-all duration-300 hover:shadow-md">
                  <Icon className="h-5 w-5 text-purple-600" />
                  <span className="font-medium text-gray-700">{item.label}</span>
                </div>
              );
            })}
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            Whether you're a solo stylist or managing a multi-chair salon, DaySmart scales with your business.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white" data-testid="pricing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Flexible Pricing Options</h2>
            <p className="text-lg text-gray-500">DaySmart offers tiered plans to fit salons of all sizes. All plans include a 14-day free trial.</p>
          </div>

          {/* Plan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {pricingPlans.map((plan, i) => (
              <Card key={i} className={`border-2 transition-all duration-300 relative ${plan.badge === 'MOST POPULAR' ? 'border-purple-600 shadow-xl lg:scale-[1.04] z-10' : plan.badge === 'ENTERPRISE' ? 'border-gray-800 bg-gray-900 text-white' : 'hover:border-purple-500 hover:shadow-lg'}`}>
                <CardContent className="p-5">
                  {plan.badge && (
                    <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold px-3 py-0.5 rounded-full ${plan.badge === 'ENTERPRISE' ? 'bg-gray-700' : 'bg-gradient-to-r from-purple-600 to-pink-500'}`}>{plan.badge}</span>
                  )}
                  <h3 className={`text-lg font-bold mb-1 ${plan.badge === 'ENTERPRISE' ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                  <div className="mb-2">
                    <span className={`text-3xl font-bold ${plan.badge === 'ENTERPRISE' ? 'text-purple-400' : 'text-purple-600'}`}>{plan.price}</span>
                    {plan.price !== 'Custom' && <span className={`text-sm ${plan.badge === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'}`}>/month</span>}
                  </div>
                  <p className={`text-xs font-semibold mb-1 ${plan.badge === 'ENTERPRISE' ? 'text-purple-300' : 'text-purple-600'}`}>{plan.users}</p>
                  <p className={`text-xs mb-4 ${plan.badge === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'}`}>{plan.desc}</p>
                  <ul className="space-y-2 mb-4">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs">
                        <CheckCircle className={`h-3.5 w-3.5 flex-shrink-0 mt-0.5 ${plan.badge === 'ENTERPRISE' ? 'text-purple-400' : 'text-purple-600'}`} />
                        <span className={plan.badge === 'ENTERPRISE' ? 'text-gray-300' : 'text-gray-700'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Sales Button */}
          <div className="mt-10 text-center">
            <a href="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-sm px-10 py-5 rounded-lg shadow-md" data-testid="pricing-contact-btn">
                Contact Sales
              </Button>
            </a>
          </div>

          {/* Additional user pricing note */}
          <p className="text-center text-xs text-gray-400 mt-4">Additional users available at $9/month each on eligible plans.</p>

          {/* Add-Ons */}
          <div className="mt-14">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Plan Add-Ons</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {addOns.map((addon, i) => (
                <div key={i} className="bg-purple-50 border border-purple-100 rounded-xl p-5 hover:border-purple-300 transition-colors duration-300">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">{addon.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{addon.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Salon Owners Choose DaySmart */}
      <section className="py-20 bg-gray-900 text-white" data-testid="why-choose-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Why Salon Owners Choose DaySmart</h2>
          </div>
          <div className="space-y-3 max-w-2xl mx-auto">
            {whyChoose.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-800/50 border border-gray-700/40 rounded-lg px-5 py-3.5 hover:border-purple-500/40 transition-colors duration-300">
                <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white" data-testid="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-gray-900">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Streamline Your Salon Operations?
          </h2>
          <p className="text-xl text-purple-100 mb-4">
            Start your free trial of DaySmart Salon today and transform how you manage appointments, payments, inventory, and clients — all in one intuitive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" onClick={() => setShowQuoteModal(true)} className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6" data-testid="cta-trial-btn">
              Get Your Free Trial
            </Button>
            <Button size="lg" onClick={() => setShowDemoModal(true)} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" data-testid="cta-demo-btn">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50" data-testid="seo-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-4">
            DaySmart Salon is an all-in-one salon management software platform offering appointment scheduling, integrated payment processing, inventory management, CRM, payroll automation, and marketing tools for hair salons, barbershops, nail spas, massage studios, and beauty professionals. Merchant Solutions Corp is an authorized dealer providing installation, training, and support nationwide.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {seoKeywords.map((keyword, i) => (
              <span key={i} className="text-xs text-gray-400 bg-gray-100 rounded px-2 py-1">{keyword}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Get Quote Modal (Lead Connector) */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowQuoteModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowQuoteModal(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
              data-testid="quote-modal-close"
            >
              &#x2715;
            </button>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A"
              className="w-full h-[80vh] border-0 rounded-2xl"
              title="Start Your Free Trial"
            />
          </div>
        </div>
      )}

      {/* Book a Demo Modal (Calendly) */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowDemoModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-4 h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowDemoModal(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
              data-testid="demo-modal-close"
            >
              &#x2715;
            </button>
            <div
              className="calendly-inline-widget w-full h-full"
              data-url="https://calendly.com/mscpayments/posdemo?hide_event_type_details=1&primary_color=a200ff"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DaySmartSalon;
