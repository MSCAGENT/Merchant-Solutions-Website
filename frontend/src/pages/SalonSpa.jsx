import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AIPoweredSection from '../components/AIPoweredSection';
import {
  CheckCircle,
  Calendar,
  MessageSquare,
  CreditCard,
  BarChart3,
  Users,
  Scissors,
  Shield,
  Clock,
  Smartphone,
  Globe,
  Gift,
  Bell,
  Star,
  Sparkles,
  Heart,
  Store,
  Zap,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const SalonSpa = () => {
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

  const heroStats = [
    { value: '50+', label: 'States Covered' },
    { value: '24/7', label: 'Support Available' },
    { value: '0%', label: 'Processing Option' },
    { value: '14-Day', label: 'Free Trial' }
  ];

  const coreFeatures = [
    {
      icon: Calendar,
      title: 'Smart Online Booking',
      desc: 'Let clients book 24/7 from your custom booking page. No logins, no third-party links. Clients pick their stylist, service, and time slot — automatically synced to your calendar.',
      highlights: ['Custom booking page', 'Walk-in kiosk support', 'Drag-and-drop waitlist', 'Color-coded scheduling']
    },
    {
      icon: MessageSquare,
      title: 'Automated Reminders & Two-Way Texting',
      desc: 'Reduce no-shows by up to 50% with automated appointment confirmations via text and email. Two-way texting lets you communicate with clients while keeping your personal number private.',
      highlights: ['SMS & email confirmations', 'Two-way texting', 'Last-minute fill notifications', 'Private number protection']
    },
    {
      icon: CreditCard,
      title: 'Integrated Payment Processing',
      desc: 'Accept credit cards, debit cards, contactless payments, and mobile wallets right from your salon POS. Collect deposits to protect against cancellations and no-shows.',
      highlights: ['Tap-to-pay & chip', 'Deposit collection', 'Digital receipts', 'Next-day funding']
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Reputation Management',
      desc: 'Drive repeat visits with targeted text and email campaigns, automated review requests, and a professional website builder to showcase your services and attract new clients.',
      highlights: ['Text & email campaigns', 'Automated review requests', 'Professional website builder', 'Special offers & promos']
    },
    {
      icon: BarChart3,
      title: 'Business Management & Reporting',
      desc: 'Track revenue, staff performance, and client trends from intuitive dashboards. Manage commissions, payroll, inventory, and multi-location operations from any device.',
      highlights: ['Real-time dashboards', 'Staff scheduling & commissions', 'Inventory tracking', 'Multi-location support']
    },
    {
      icon: Users,
      title: 'Client Management & Loyalty',
      desc: 'Build detailed client profiles with service history, preferences, saved cards, and loyalty points. Personalize every visit and turn one-time clients into lifelong regulars.',
      highlights: ['Client profiles & history', 'Loyalty program', 'Saved payment methods', 'Personalized experiences']
    }
  ];

  const industries = [
    {
      icon: Scissors,
      title: 'Hair Salons',
      desc: 'Full-service scheduling, color formulas, stylist management, and rebooking tools designed for busy hair salons and barbershops.',
      keywords: 'hair salon software, salon booking system, stylist scheduling'
    },
    {
      icon: Sparkles,
      title: 'Nail Salons',
      desc: 'Walk-in kiosk check-in, waitlist management, color-coded time blocks, and fast checkout for high-volume nail salons.',
      keywords: 'nail salon software, nail salon POS, nail salon booking'
    },
    {
      icon: Heart,
      title: 'Skin Clinics & Med Spas',
      desc: 'Appointment management, deposit protection, treatment tracking, and reputation management for skin care professionals and aesthetic clinics.',
      keywords: 'skin clinic software, med spa POS, aesthetics booking'
    },
    {
      icon: Star,
      title: 'Independent Providers',
      desc: 'Booth renters and solo professionals get enterprise-level tools — online booking, client management, payment processing, and marketing — without the enterprise price tag.',
      keywords: 'independent stylist software, booth renter booking, freelance beauty professional'
    }
  ];

  const posOptions = [
    {
      tier: 'Enterprise Solution',
      name: 'DaySmart Salon',
      desc: 'The premium all-in-one salon management and booking platform trusted by thousands of beauty professionals nationwide.',
      features: [
        'Advanced online booking & scheduling',
        'Automated SMS & email reminders',
        'Two-way client texting',
        'Built-in payment processing with deposits',
        'Marketing campaigns & review management',
        'Professional website builder',
        'Staff management & commissions',
        'Inventory & product tracking',
        'Multi-location dashboard',
        'Client loyalty programs',
        'Mobile app for iOS & Android',
        'Robust reporting & analytics'
      ],
      bestFor: 'Multi-chair salons, spas, skin clinics, and multi-location beauty brands',
      badge: 'ENTERPRISE'
    },
    {
      tier: 'SMB Solution',
      name: 'Clover POS',
      desc: 'Versatile point-of-sale hardware and software for salons and spas that need powerful in-store payment processing with appointment and employee management.',
      features: [
        'Accept all payment types',
        'Appointment scheduling',
        'Employee management & shifts',
        'Customer engagement tools',
        'Inventory management',
        'Real-time reporting',
        'Gift card programs',
        'Online ordering & payments',
        'Hardware options: Flex, Mini, Station',
        'Third-party app marketplace'
      ],
      bestFor: 'Small to mid-size salons, day spas, and beauty retail shops',
      badge: 'POPULAR'
    },
    {
      tier: 'SMB Solution',
      name: 'Square POS',
      desc: 'Start free with no monthly fees. Square gives independent stylists, booth renters, and small salons a simple way to accept payments and manage their business.',
      features: [
        'Free POS software to start',
        'Online booking integration',
        'Contactless & mobile payments',
        'Client profiles & notes',
        'Digital receipts',
        'Team management & permissions',
        'Sales analytics & reporting',
        'E-commerce & gift cards',
        'Hardware: Reader, Stand, Terminal, Register',
        'No long-term contracts'
      ],
      bestFor: 'Independent stylists, booth renters, pop-up beauty services, and small salons',
      badge: null
    }
  ];

  const whyMSC = [
    'Authorized dealer for DaySmart, Clover, and Square',
    'Professional POS installation and configuration',
    'Staff training — on-site or remote',
    'Menu, service, and pricing setup',
    'Payment testing before go-live',
    'Ongoing account management and support',
    'Cash discount and flat-rate pricing options',
    'Nationwide coverage across all 50 states'
  ];

  const faqs = [
    {
      question: 'What is the best POS system for a salon or spa?',
      answer: 'The best POS system depends on your salon size and needs. For multi-chair salons and spas that need advanced booking, marketing, and client management, DaySmart Salon is the enterprise-grade solution. For small to mid-size salons that want versatile hardware and in-store payment processing, Clover POS is an excellent choice. For independent stylists and booth renters who want a free, simple solution, Square POS is ideal. Merchant Solutions Corp can help you choose and install the right system for your business.'
    },
    {
      question: 'How does online booking software help reduce no-shows?',
      answer: 'Online booking software like DaySmart sends automated appointment confirmations and reminders via text message and email. Clients receive notifications before their visit, giving them the opportunity to confirm or reschedule. Combined with deposit collection for high-value services, this can reduce no-shows by up to 50%. Two-way texting also allows you to quickly fill last-minute openings.'
    },
    {
      question: 'Can I accept credit card payments at my salon?',
      answer: 'Yes. All three of our recommended solutions — DaySmart, Clover, and Square — include integrated payment processing. You can accept credit cards, debit cards, contactless payments (Apple Pay, Google Pay), and mobile wallets. Deposits can be collected at booking to protect against cancellations. Funds are typically available the next business day.'
    },
    {
      question: 'Do you offer installation and training for salon POS systems?',
      answer: 'Absolutely. Merchant Solutions Corp provides full-service installation, configuration, and staff training for DaySmart, Clover, and Square POS systems. We handle everything from account setup to hardware configuration, menu and service entry, payment testing, and go-live support — on-site or remotely, nationwide.'
    },
    {
      question: 'What is the difference between DaySmart and Clover for salons?',
      answer: 'DaySmart Salon is a dedicated salon management platform with deep features like advanced online booking, automated marketing, reputation management, and a professional website builder. Clover POS is a versatile point-of-sale system with strong payment hardware and a broad app marketplace. Many salons use DaySmart for booking and client management alongside Clover or Square for in-store payment processing.'
    },
    {
      question: 'Is there a free salon POS option?',
      answer: 'Yes. Square POS offers a free software plan with no monthly fees. You only pay processing fees per transaction (2.6% + 10¢ for in-person payments). This is a great starting point for independent stylists, booth renters, and new salons. You can upgrade to paid plans for advanced features as your business grows.'
    },
    {
      question: 'Can I manage multiple salon locations from one system?',
      answer: 'Yes. DaySmart Salon supports multi-location management from a single dashboard, allowing you to oversee scheduling, staff, reporting, and client data across all your locations. Clover and Square also offer multi-location tools in their premium plans.'
    },
    {
      question: 'If I already use DaySmart or Clover, can I switch just my processing to Merchant Solutions Corp?',
      answer: 'No. We require merchants to start with us from the beginning. This allows us to build the right pricing plan, understand your full business model, configure hardware and software correctly, plan installation properly, train your staff the right way, and provide long-term support. We do not step in halfway. We onboard your merchant account from the start so everything is structured correctly. If you are currently with another provider and not receiving the support you expected, call us at (888) 407-8886. To move forward, we do require full merchant account boarding with Merchant Solutions Corp so we can deliver proper installation, training, and ongoing service.'
    }
  ];

  const seoKeywords = [
    'salon POS system', 'spa payment processing', 'salon booking software', 'salon scheduling software',
    'nail salon POS', 'hair salon POS', 'beauty salon merchant services', 'salon credit card processing',
    'DaySmart salon', 'Clover salon POS', 'Square salon POS', 'salon appointment software',
    'spa management software', 'salon payment terminal', 'beauty business POS',
    'salon online booking', 'salon no-show protection', 'salon marketing software'
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Salon & Spa Payment Processing | Booking Software + POS Installation | DaySmart, Clover & Square</title>
        <meta property="og:title" content="Salon & Spa Payment Processing | Booking Software + POS Installation | DaySmart, Clover & Square" />
        <meta property="og:description" content="Salon and spa payment processing with DaySmart booking software, Clover POS, and Square POS. Online scheduling, automated reminders, integrated merchant services for hair salons, nail salons, skin clinics, and independent beauty professionals. Nationwide installation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/salon-spa-payment-processing" />
        <meta name="description" content="Salon and spa payment processing with DaySmart booking software, Clover POS, and Square POS. Online scheduling, automated reminders, integrated merchant services for hair salons, nail salons, skin clinics, and independent beauty professionals. Nationwide installation." />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <link rel="canonical" href="/salon-spa-payment-processing" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      {/* Hero Section with Video */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden" data-testid="salon-hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://customer-assets.emergentagent.com/job_6e98ffa5-31c4-476f-bd08-8daa7de6f4fd/artifacts/5kgs4h0v_Salon%20spa.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/75 via-purple-900/60 to-pink-900/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl">
            <p className="text-sm md:text-base uppercase tracking-widest text-purple-300 font-semibold mb-4">Salon & Spa Payment Processing</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg" data-testid="hero-h1">
              Booking, Payments & POS — <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">All in One Place</span>
            </h1>
            <p className="text-lg text-purple-100 mb-3 max-w-3xl mx-auto">
              Merchant Solutions Corp provides salon and spa businesses with fully integrated booking software, payment processing, and POS hardware — installed and supported nationwide.
            </p>
            <p className="text-base text-purple-200/80 mb-8 max-w-2xl mx-auto">
              DaySmart Salon for enterprise booking. Clover & Square POS for SMBs. From hair salons and nail salons to skin clinics and independent stylists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setShowQuoteModal(true)} className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-quote-btn">
                Get a Salon Quote
              </Button>
              <Button size="lg" onClick={() => setShowDemoModal(true)} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-6" data-testid="hero-demo-btn">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-white" data-testid="stats-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {heroStats.map((stat, i) => (
              <div key={i} className="text-center bg-gray-50 rounded-xl p-5 border border-gray-100">
                <p className="text-2xl font-bold text-purple-600">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white" data-testid="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Everything Your Salon Needs to Book, Pay & Grow
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              From smart scheduling and automated reminders to integrated payments and powerful marketing — manage your entire beauty business from one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Card key={i} className="border-2 hover:border-purple-500 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{feature.desc}</p>
                    <div className="space-y-1.5">
                      {feature.highlights.map((h, idx) => (
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

      {/* Industry Solutions */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50" data-testid="industries-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Built for Every Beauty Business
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Specialized features for hair salons, nail salons, skin clinics, and independent beauty professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <Card key={i} className="border-2 hover:border-purple-500 transition-all duration-300 hover:shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{industry.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{industry.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* POS Solutions: DaySmart + Clover + Square */}
      <section className="py-20 bg-white" data-testid="pos-solutions-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Choose the Right Solution for Your Salon
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              We offer <strong>DaySmart Salon</strong> as the enterprise booking and management platform, and <strong>Clover</strong> and <strong>Square POS</strong> for small-to-midsize beauty businesses. All fully installed and supported.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {posOptions.map((option, i) => (
              <Card key={i} className={`border-2 transition-all duration-300 relative ${i === 0 ? 'border-purple-600 shadow-xl lg:scale-[1.03]' : 'hover:border-purple-500 hover:shadow-lg'}`}>
                <CardContent className="p-7">
                  {option.badge && (
                    <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1 rounded-full ${i === 0 ? 'bg-gradient-to-r from-purple-600 to-pink-500' : 'bg-purple-600'}`}>
                      {option.badge}
                    </span>
                  )}
                  <p className="text-xs uppercase tracking-wider text-purple-500 font-semibold mb-1">{option.tier}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.name}</h3>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">{option.desc}</p>
                  <ul className="space-y-2.5 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-purple-50 border border-purple-100 rounded-lg px-4 py-3 mb-5">
                    <p className="text-xs text-purple-700"><span className="font-semibold">Best for:</span> {option.bestFor}</p>
                  </div>
                  <Link to={i === 0 ? '/contact' : i === 1 ? '/pos/clover' : '/pos/square'}>
                    <Button className={`w-full ${i === 0 ? 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600' : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'} text-white`}>
                      {i === 0 ? 'Get' : 'Explore'} {option.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why MSC */}
      <section className="py-20 bg-gray-900 text-white" data-testid="why-msc-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Why Salons Choose Merchant Solutions Corp
              </h2>
              <p className="text-lg text-gray-300 mb-2">
                You get the power of DaySmart, Clover, and Square.
              </p>
              <p className="text-lg text-purple-300 font-semibold mb-8">
                Plus dealer-level installation and nationwide support.
              </p>
              <div className="space-y-3">
                {whyMSC.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1695527082039-5f96003b97e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHw0fHxzYWxvbiUyMHNwYSUyMGludGVyaW9yJTIwbW9kZXJuJTIwYmVhdXR5JTIwdHJlYXRtZW50fGVufDB8fHx8MTc3MjIxNDQ4M3ww&ixlib=rb-4.1.0&q=85"
                alt="Elegant salon interior with products and décor"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <AIPoweredSection onContactClick={() => setShowQuoteModal(true)} onCalendlyClick={() => setShowDemoModal(true)} />

      {/* DaySmart Deep Dive */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50" data-testid="daysmart-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-purple-600 font-semibold mb-3">Enterprise Booking Platform</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                DaySmart Salon — The #1 Salon Booking Software
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                DaySmart is the premium salon management and booking platform trusted by thousands of beauty professionals. It combines scheduling, payments, marketing, and business management in one powerful cloud-based system.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  'Online booking & scheduling',
                  'Automated SMS reminders',
                  'Two-way client texting',
                  'Built-in payment processing',
                  'Deposit & no-show protection',
                  'Email & text marketing',
                  'Review & reputation tools',
                  'Professional website builder',
                  'Staff & commission management',
                  'Client loyalty programs',
                  'Multi-location dashboard',
                  'Mobile app (iOS & Android)'
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-5">
                  Get DaySmart Installed
                </Button>
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">How It Works Together</h3>
              <div className="space-y-4">
                {[
                  { icon: Calendar, label: 'DaySmart', desc: 'Handles booking, scheduling, reminders, marketing, and client management' },
                  { icon: CreditCard, label: 'Clover or Square POS', desc: 'Handles in-store payment processing, checkout, and hardware' },
                  { icon: Shield, label: 'Merchant Solutions Corp', desc: 'Installs, configures, and supports everything nationwide' }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4 bg-purple-50 rounded-xl p-4 border border-purple-100">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <p className="text-xs text-gray-500">All three work together seamlessly. We handle the entire integration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Square POS Deep Dive */}
      <section className="py-20 bg-white" data-testid="square-deepdive-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1761931403667-a6753db21f32?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBwcm9mZXNzaW9uYWwlMjBzdHlsaW5nfGVufDB8fHx8MTc3MjIxNDkwN3ww&ixlib=rb-4.1.0&q=85"
                alt="Salon professional styling client hair with Square POS in background"
                className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
              />
              <div className="flex items-center gap-4 mt-6">
                <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-2.5 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">Free to Start</span>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl px-4 py-2.5 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-700">No Contracts</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm uppercase tracking-widest text-purple-600 font-semibold mb-3">Perfect for Independent Professionals</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Square POS — Launch Your Salon Without the Overhead
              </h2>
              <p className="text-lg text-gray-600 mb-3">
                Square gives independent stylists, booth renters, and small salons everything they need to accept payments and manage their business — with zero monthly fees to start.
              </p>
              <p className="text-base text-gray-500 mb-6">
                From a simple card reader at your station to a full Square Register at your front desk, Square scales with your business. Accept tap-to-pay, chip, and mobile wallets. Track sales, manage your team, and sell gift cards — all from one platform.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  'Free POS software — $0/month',
                  'Accept all cards & mobile wallets',
                  'Online booking integration',
                  'Client profiles & service notes',
                  'Digital receipts & invoicing',
                  'Team management & permissions',
                  'Sales analytics & daily reports',
                  'Gift cards & loyalty tools',
                  'E-commerce & online store',
                  'Hardware: Reader, Stand, Terminal, Register'
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-xl px-5 py-4 mb-6">
                <p className="text-sm text-gray-700">
                  <strong className="text-purple-700">How far can Square take you?</strong> Start as a solo booth renter with just a Square Reader and your phone. As your client list grows, upgrade to a Square Terminal for receipts or a full Square Register with a customer-facing display. Open a second location — Square supports multi-site management with no long-term contracts. You grow, Square grows with you.
                </p>
              </div>
              <Link to="/pos/square">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-5">
                  Explore Square POS for Salons
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clover POS Deep Dive */}
      <section className="py-20 bg-gray-50" data-testid="clover-deepdive-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-purple-600 font-semibold mb-3">Built for Growing Salons & Spas</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Clover POS — The Powerhouse for Multi-Chair Salons
              </h2>
              <p className="text-lg text-gray-600 mb-3">
                Clover gives established salons and day spas a full hardware and software ecosystem designed for high-volume, multi-staff operations. From countertop stations to handheld flex devices, Clover handles the busiest days with ease.
              </p>
              <p className="text-base text-gray-500 mb-6">
                With built-in appointment scheduling, employee management, customer engagement tools, and a deep third-party app marketplace, Clover transforms your front desk into a command center for your entire beauty business.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  'Accept all payment types including NFC',
                  'Built-in appointment scheduling',
                  'Employee shifts & time tracking',
                  'Customer engagement & profiles',
                  'Inventory & product management',
                  'Real-time sales reporting',
                  'Gift card programs',
                  'Third-party app marketplace (500+ apps)',
                  'Hardware: Flex, Mini, Station Duo',
                  'Online ordering & payments'
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-xl px-5 py-4 mb-6">
                <p className="text-sm text-gray-700">
                  <strong className="text-purple-700">How far can Clover take you?</strong> Start with a Clover Mini at checkout and a Clover Flex for stylists to check out clients at the chair. Add the Clover Station Duo with a customer-facing screen for a premium checkout experience. Expand with loyalty programs, gift cards, and automated marketing through the app marketplace. Open new locations — Clover scales effortlessly across multi-site operations, all managed from a single dashboard.
                </p>
              </div>
              <Link to="/pos/clover">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-5">
                  Explore Clover POS for Salons
                </Button>
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1695527081848-1e46c06e6458?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwzfHxzYWxvbiUyMHNwYSUyMGludGVyaW9yJTIwbW9kZXJuJTIwYmVhdXR5JTIwdHJlYXRtZW50fGVufDB8fHx8MTc3MjIxNDQ4M3ww&ixlib=rb-4.1.0&q=85"
                alt="Modern salon interior with stylist and client"
                className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
              />
              <div className="flex items-center gap-4 mt-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-2.5 flex items-center gap-2">
                  <Store className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-700">Multi-Location Ready</span>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl px-4 py-2.5 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-700">500+ Apps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Xerocharge / Dejavoo & Ingenico for Salons */}
      <section className="py-20 bg-white" data-testid="xerocharge-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="rounded-2xl overflow-hidden shadow-xl sticky top-24">
              <img
                src="https://customer-assets.emergentagent.com/job_4a81af7b-38a3-4377-ab4c-9466c710fd1a/artifacts/6jwdsa76_08.png"
                alt="Dejavoo Xerocharge payment terminal with loyalty rewards screen"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-purple-600 font-semibold mb-3">Booth Renters & Multi-Chair Operations</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="xerocharge-h2">
                Xerocharge Payment Terminals by Dejavoo
              </h2>
              <p className="text-lg text-gray-700 mb-3">
                For salons and spas with booth renters or multi-chair setups, Xerocharge terminals from Dejavoo offer a unique advantage: <strong>user login and Multi-MID operation</strong>.
              </p>
              <p className="text-gray-600 mb-6">
                Each stylist or booth renter can log into the same terminal with their own credentials and process payments under their own merchant account. No need for multiple terminals — one device handles it all, keeping costs low and operations simple.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">6 Benefits of Dejavoo & Ingenico Terminals for Salons</h3>
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Multi-MID Support', desc: 'Each booth renter processes under their own merchant ID on a single shared terminal. Clean accounting, separate deposits, zero confusion.' },
                  { title: 'User Login & Permissions', desc: 'Individual stylist logins with role-based access. Track sales per operator and maintain accountability across shifts.' },
                  { title: 'Compact & Countertop Ready', desc: 'Dejavoo and Ingenico terminals are small-footprint devices that fit any front desk or styling station without clutter.' },
                  { title: 'EMV, NFC & Contactless', desc: 'Accept chip cards, tap-to-pay, Apple Pay, Google Wallet, and Samsung Pay. Fast, secure checkout every time.' },
                  { title: 'Dual Pricing & Cash Discount', desc: 'Offset processing fees with compliant dual pricing programs. Display both cash and card prices automatically on the terminal.' },
                  { title: 'Reliable & Low Maintenance', desc: 'Enterprise-grade hardware built for high-volume daily use. No tablets to charge, no apps to update — just plug in and process.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">{item.title}</span>
                      <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-xl px-5 py-4 mb-6">
                <p className="text-sm text-gray-700">
                  <strong className="text-purple-700">Perfect for booth rental salons:</strong> Each renter gets their own MID, their own deposits, and their own reporting — all from one shared Dejavoo or Ingenico terminal at the front desk. No extra hardware costs, no complicated setups.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/pos/dejavoo">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-5">
                    Explore Dejavoo Terminals
                  </Button>
                </Link>
                <Link to="/pos/ingenico">
                  <Button variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-5">
                    Explore Ingenico Terminals
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50" data-testid="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500">Common questions about salon POS systems, booking software, and payment processing.</p>
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Upgrade Your Salon's Tech Stack?
          </h2>
          <p className="text-xl text-purple-100 mb-4">
            Get DaySmart booking software, Clover or Square POS, fully installed and configured by an authorized dealer.
          </p>
          <p className="text-base text-purple-200 mb-10 max-w-3xl mx-auto">
            Merchant Solutions Corp provides nationwide salon POS deployment with hands-on onboarding, staff training, and long-term support for hair salons, nail salons, skin clinics, and independent beauty professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setShowQuoteModal(true)} className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6" data-testid="cta-quote-btn">
              Get a Salon Quote
            </Button>
            <Button size="lg" onClick={() => setShowDemoModal(true)} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" data-testid="cta-demo-btn">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50" data-testid="seo-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-4">
            Merchant Solutions Corp is an authorized dealer for DaySmart Salon, Clover POS, and Square POS, providing salon and spa businesses with booking software, payment processing, POS hardware, professional installation, staff training, and ongoing support across all 50 U.S. states. Serving hair salons, nail salons, skin clinics, med spas, barbershops, and independent beauty professionals.
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
              title="Get a Salon Quote"
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
              data-url="https://calendly.com/mscpayments/posdemo?hide_event_type_details=1&primary_color=5700ff"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SalonSpa;
