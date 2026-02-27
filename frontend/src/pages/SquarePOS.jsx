import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  CreditCard, 
  Smartphone, 
  Monitor,
  Shield,
  BarChart3,
  Users,
  ShoppingBag,
  Package,
  Globe,
  Settings,
  Calendar,
  Gift,
  Utensils,
  Briefcase,
  Scissors,
  Store,
  MapPin,
  Truck,
  Headphones,
  ClipboardCheck,
  Wrench,
  GraduationCap,
  Rocket,
  ChevronRight,
  Search
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const SquarePOS = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  const heroVideos = [
    'https://customer-assets.emergentagent.com/job_6e98ffa5-31c4-476f-bd08-8daa7de6f4fd/artifacts/lmdvozpf_Power%20your%20entire%20business%20%20Square2.mp4',
    'https://customer-assets.emergentagent.com/job_6e98ffa5-31c4-476f-bd08-8daa7de6f4fd/artifacts/dy8bhpgj_Square%20for%20Beauty.mp4'
  ];

  useEffect(() => {
    const refs = [video1Ref, video2Ref];
    const currentRef = refs[activeVideo]?.current;
    if (currentRef) {
      currentRef.play().catch(() => {});
    }
  }, [activeVideo]);

  const handleVideoEnded = () => {
    setActiveVideo((prev) => (prev + 1) % heroVideos.length);
  };

  useEffect(() => {
    document.title = 'Square Point of Sale Systems | Authorized Square Dealer | Installation & Training Nationwide';
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = 'Authorized Square dealer providing complete Square POS setup, installation, training, and ongoing support across all 50 U.S. states. Square Register, Terminal, Stand & Reader hardware with professional onboarding.';
    if (metaDesc) {
      metaDesc.setAttribute('content', content);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);

  const dealerPainPoints = [
    'Choosing the right hardware',
    'Configuring menus and inventory',
    'Setting tax rules',
    'Connecting printers and cash drawers',
    'Training staff',
    'Understanding reporting',
    'Going live without errors'
  ];

  const keyBenefits = [
    { title: 'Free Software', desc: 'No monthly fees to start' },
    { title: 'Fast Setup', desc: 'Start selling in minutes' },
    { title: 'Flat-Rate Pricing', desc: 'Simple, predictable fees' },
    { title: 'All-in-One Platform', desc: 'Payments, inventory, staff, reporting' }
  ];

  const coreFeaturesBasic = [
    'Accept all major credit and debit cards',
    'Tap-to-pay and mobile wallet payments',
    'Send digital receipts via email or text',
    'Real-time sales reporting',
    'Inventory tracking and stock alerts',
    'Process refunds and voids',
    'Offline payment mode',
    'Next-day deposits available'
  ];

  const hardwareOptions = [
    {
      name: 'Square Reader',
      type: 'Mobile Card Reader',
      desc: 'Compact Bluetooth card reader for chip and magstripe payments.',
      bestFor: 'Mobile sellers, markets, pop-ups.',
      icon: Smartphone
    },
    {
      name: 'Square Stand',
      type: 'Countertop iPad POS',
      desc: 'Turn your iPad into a full POS terminal with integrated card reader and customer display.',
      bestFor: 'Retail counters, cafes, quick service.',
      icon: Monitor
    },
    {
      name: 'Square Terminal',
      type: 'All-in-One POS Device',
      desc: 'Portable device with built-in touchscreen and receipt printer.',
      bestFor: 'Small retail, delivery, salons, service providers.',
      icon: CreditCard
    },
    {
      name: 'Square Register',
      type: 'Complete Dual-Screen POS',
      desc: 'Powerful full POS system with customer-facing display and integrated payments.',
      bestFor: 'Full-service retail, multi-location businesses.',
      icon: Store
    }
  ];

  const softwarePlans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      features: [
        'POS app',
        'Accept card payments',
        'Basic reporting',
        'Item management',
        'Digital receipts',
        'Online checkout links'
      ],
      processing: '2.6% + 10¢ in-person',
      badge: null
    },
    {
      name: 'Plus',
      price: '$49',
      period: '/month',
      features: [
        'Advanced inventory',
        'Team management',
        'Customer profiles',
        'Loyalty program',
        'Marketing tools'
      ],
      processing: '2.5% + 10¢ in-person',
      badge: 'BEST VALUE'
    },
    {
      name: 'Premium',
      price: '$149',
      period: '/month',
      features: [
        'Custom processing rates',
        'Dedicated support',
        'Multi-location tools',
        'Advanced integrations',
        'API access'
      ],
      processing: 'Custom rates',
      badge: null
    }
  ];

  const industryFeatures = [
    {
      industry: 'Retail POS System',
      icon: ShoppingBag,
      desc: 'Inventory tracking, barcode scanning, vendor management, purchase orders.'
    },
    {
      industry: 'Restaurant POS',
      icon: Utensils,
      desc: 'Table management, menu modifiers, tip handling, kitchen tickets.'
    },
    {
      industry: 'Service Businesses',
      icon: Briefcase,
      desc: 'Appointment booking, invoicing, deposits, recurring billing.'
    },
    {
      industry: 'Beauty & Wellness',
      icon: Scissors,
      desc: 'Online booking, staff calendars, service packages, no-show protection.'
    }
  ];

  const additionalFeatures = [
    { icon: Globe, title: 'Online Store', desc: 'Launch a free website or integrate with WooCommerce or Wix.' },
    { icon: Calendar, title: 'Appointments', desc: 'Automated booking and reminders.' },
    { icon: Gift, title: 'Gift Cards', desc: 'Sell digital and physical gift cards.' },
    { icon: Users, title: 'Team Management', desc: 'Track hours, manage permissions, payroll integration.' },
    { icon: BarChart3, title: 'Advanced Analytics', desc: 'Real-time insights and reporting.' },
    { icon: Package, title: 'Inventory', desc: 'Stock alerts, vendor tracking, product management.' }
  ];

  const integrations = [
    'QuickBooks', 'Xero', 'WooCommerce', 'Wix', 'DoorDash',
    'Uber Eats', 'Mailchimp', 'Homebase', 'TSheets'
  ];

  const whySquareBenefits = [
    'No long-term contracts',
    'Transparent flat-rate pricing',
    'Free software updates',
    'Next-day funding',
    '24/7 Square platform support'
  ];

  const dealerServices = [
    'Account setup and underwriting guidance',
    'Hardware configuration before delivery',
    'Menu and inventory build',
    'Tax and modifier configuration',
    'Printer and peripheral setup',
    'On-site or remote installation',
    'Staff training',
    'Go-live supervision',
    'Ongoing account management'
  ];

  const setupSteps = [
    { icon: ClipboardCheck, label: 'Account creation assistance' },
    { icon: Search, label: 'Hardware selection consultation' },
    { icon: Package, label: 'Inventory and menu build' },
    { icon: Settings, label: 'Tax configuration' },
    { icon: CreditCard, label: 'Payment testing' },
    { icon: GraduationCap, label: 'Staff training' },
    { icon: Rocket, label: 'Live launch support' }
  ];

  const seoKeywords = [
    'Square POS system', 'Square point of sale', 'Square POS installation',
    'Square authorized dealer', 'Square reseller', 'Square merchant services',
    'Square credit card processing', 'Square POS setup', 'Square dealer nationwide',
    'Retail POS system', 'Restaurant POS system', 'Square hardware',
    'Square Register', 'Square Terminal'
  ];

  const localSearchTerms = [
    'Square POS installer near me',
    'Square dealer installation',
    'Square POS setup help',
    'Square account onboarding'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden" data-testid="hero-video-section">
        {heroVideos.map((src, i) => (
          <video
            key={i}
            ref={i === 0 ? video1Ref : video2Ref}
            autoPlay={i === 0}
            muted
            playsInline
            onEnded={handleVideoEnded}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === activeVideo ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/65 to-blue-900/55" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl">
            <p className="text-sm md:text-base uppercase tracking-widest text-purple-300 font-semibold mb-4" data-testid="hero-badge">
              Authorized Square Dealer | Installation & Training Nationwide
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg" data-testid="hero-h1">
              Square Point of Sale Systems
            </h1>
            <p className="text-2xl text-white font-semibold mb-4">
              Simple. Powerful. Fully Installed.
            </p>
            <p className="text-lg text-purple-100 mb-3 max-w-3xl mx-auto">
              Merchant Solutions Corp is an authorized Square dealer of Block, Inc., providing complete Square POS setup, installation, training, and ongoing support across all 50 U.S. states.
            </p>
            <p className="text-base text-purple-200/80 mb-8 max-w-2xl mx-auto">
              You don't just receive hardware in a box. We take you from account creation to unboxing, configuration, staff training, and live launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-get-started-btn">
                  Get Square POS
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-6" data-testid="hero-demo-btn">
                  Request a Dealer Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy Through a Dealer */}
      <section className="py-20 bg-gray-50" data-testid="why-dealer-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Buy Square Through a Dealer Instead of Direct?
              </h2>
              <p className="text-lg text-gray-700 mb-2">
                Square is powerful.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                But most businesses struggle with:
              </p>
              <div className="space-y-3 mb-8">
                {dealerPainPoints.map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg font-semibold text-purple-700 mb-2">That's where we come in.</p>
              <p className="text-gray-700 mb-4">
                As an exclusive Square dealer partner, Merchant Solutions Corp provides <strong>full-service onboarding nationwide.</strong>
              </p>
              <p className="text-gray-600 italic">
                We do not just activate your account. We install it the right way.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-50 rounded-2xl p-10 border border-purple-200/50">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Service Dealer</h3>
                <p className="text-gray-600 mb-6">We handle everything so you can focus on running your business.</p>
                <div className="grid grid-cols-2 gap-4 text-left">
                  {['Setup', 'Install', 'Train', 'Support'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Square POS Systems Header + Benefits */}
      <section className="py-16 bg-gray-900 text-white" data-testid="benefits-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Square POS Systems</h2>
            <p className="text-lg text-purple-300 font-medium mb-2">Simple, Powerful POS for Every Business</p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Accept payments, manage inventory, and grow your business with Square's all-in-one point of sale platform. Start free with no monthly software fees or upgrade for advanced features.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="text-center bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything You Need to Sell */}
      <section className="py-20 bg-white" data-testid="core-features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Sell</h2>
              <p className="text-lg text-gray-600 mb-8">
                Square POS includes powerful built-in tools:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coreFeaturesBasic.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-8 text-base border-l-4 border-purple-600 pl-4">
                Square combines payment processing, POS software, and business management tools in one unified system.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 flex items-center justify-center min-h-[360px]" data-testid="core-features-image">
              <div className="text-center text-gray-400">
                <CreditCard className="h-24 w-24 mx-auto mb-4 text-purple-300" />
                <p className="text-sm">Square POS Interface</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Save Money */}
      <section className="py-20 bg-gray-900 text-white" data-testid="steps-save-money-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">How to Save Money with Square + Merchant Solutions Corp</h2>
            <p className="text-lg text-gray-400">Five simple steps from sign-up to processing payments.</p>
          </div>
          <div className="relative">
            {/* Vertical connector line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-purple-700/40 -translate-x-1/2" />
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-1 md:gap-0">
              {[
                { num: 1, title: 'Create an Account', desc: 'Sign up and get your Square merchant account started with our guided onboarding.' },
                { num: 2, title: 'Book a Call with a Specialist', desc: 'Your dedicated specialist will walk you through our different install and hardware programs to find the best fit.' },
                { num: 3, title: 'Choose Your Pricing Method', desc: 'Select the plan that maximizes your savings — Cash Discount or Flat Rate processing.' },
                { num: 4, title: 'Place Your Order & Wait for Arrival', desc: 'We pre-configure your hardware before shipping so it\'s ready to go out of the box.' },
                { num: 5, title: 'We Arrive, Install & Get You Processing', desc: 'Our team arrives on-site to install everything and get you processing payments ASAP.' }
              ].map((step, i) => (
                <div key={i} className={`flex items-center gap-6 md:gap-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:text-${i % 2 === 0 ? 'right' : 'left'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                    {i % 2 === 0 && (
                      <div className="bg-gray-800/60 border border-gray-700/50 rounded-xl p-5 inline-block max-w-md ml-auto">
                        <h3 className="font-bold text-lg text-white mb-1">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.desc}</p>
                      </div>
                    )}
                  </div>
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-600/30 border-2 border-purple-400/30">
                      {step.num}
                    </div>
                  </div>
                  <div className={`flex-1 ${i % 2 !== 0 ? 'md:text-left' : 'md:text-left'}`}>
                    {i % 2 !== 0 ? (
                      <div className="bg-gray-800/60 border border-gray-700/50 rounded-xl p-5 inline-block max-w-md">
                        <h3 className="font-bold text-lg text-white mb-1">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.desc}</p>
                      </div>
                    ) : (
                      <div className="md:hidden bg-gray-800/60 border border-gray-700/50 rounded-xl p-5">
                        <h3 className="font-bold text-lg text-white mb-1">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Options */}
      <section className="py-20 bg-gray-50" data-testid="hardware-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Square Hardware Options</h2>
            <p className="text-lg text-gray-600">Choose the right Square POS hardware for your setup.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hardwareOptions.map((hardware, index) => {
              const Icon = hardware.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{hardware.name}</h3>
                        <p className="text-purple-600 font-medium mb-2">{hardware.type}</p>
                        <p className="text-gray-600 mb-3">{hardware.desc}</p>
                        <p className="text-sm text-gray-500"><strong>Best for:</strong> {hardware.bestFor}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-5 text-base" data-testid="hardware-pricing-btn">
                Get Hardware Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Software Plans */}
      <section className="py-20 bg-white" data-testid="software-plans-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Square Software Plans</h2>
            <p className="text-lg text-gray-600">Start free or upgrade as your business grows.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {softwarePlans.map((plan, index) => (
              <Card key={index} className={`border-2 transition-all duration-300 relative ${plan.badge ? 'border-purple-600 shadow-xl scale-[1.02]' : 'hover:border-purple-600 hover:shadow-lg'}`}>
                <CardContent className="p-8">
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">{plan.badge}</span>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name} Plan</h3>
                  <div className="my-4">
                    <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-gray-500 border-t pt-4">
                    <strong>Processing:</strong> {plan.processing}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Your Industry */}
      <section className="py-20 bg-gray-50" data-testid="industry-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Built for Your Industry</h2>
            <p className="text-lg text-gray-600">Square adapts to multiple business types.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryFeatures.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">{industry.industry}</h3>
                    <p className="text-gray-600 text-sm">{industry.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
            Square works across retail stores, salons, restaurants, service providers, and multi-location brands.
          </p>
        </div>
      </section>

      {/* More Than Just Payments */}
      <section className="py-20 bg-white" data-testid="ecosystem-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">More Than Just Payments</h2>
            <p className="text-lg text-gray-600">Square is an ecosystem built to grow your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <Icon className="h-10 w-10 text-purple-600 mb-4" />
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Integrations */}
          <div className="mt-16" data-testid="integrations-section">
            <h3 className="text-xl font-bold text-gray-900 text-center mb-6">Integrations Include:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-gray-50 border-2 border-gray-200 hover:border-purple-600 rounded-lg px-5 py-2.5 text-gray-700 font-medium transition-all duration-300 text-sm">
                  {integration}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Square Through MSC */}
      <section className="py-20 bg-gray-900 text-white" data-testid="why-msc-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose Square Through Merchant Solutions Corp
              </h2>
              <p className="text-lg text-gray-300 mb-2">You get the power of Square.</p>
              <p className="text-lg text-purple-300 font-semibold mb-8">Plus dealer-level installation and nationwide support.</p>
              
              <div className="space-y-3 mb-8">
                {whySquareBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-300 mb-6">Plus our exclusive dealer services:</h3>
              <div className="space-y-3 mb-8">
                {dealerServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <ChevronRight className="h-4 w-4 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
              <div className="bg-purple-800/30 border border-purple-700/50 rounded-xl p-5 mt-6">
                <p className="text-purple-200 text-sm font-medium">
                  This service is exclusive to Merchant Solutions Corp as an authorized Square dealer. We handle installation and support nationwide across all 50 states.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nationwide Installation */}
      <section className="py-20 bg-white" data-testid="nationwide-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Nationwide Square POS Installation Services</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">Searching for:</p>
              <div className="space-y-2 mb-8">
                {localSearchTerms.map((term, i) => (
                  <div key={i} className="flex items-center gap-2 bg-purple-50 rounded-lg px-4 py-2.5">
                    <Search className="h-4 w-4 text-purple-500 flex-shrink-0" />
                    <span className="text-purple-700 font-medium text-sm italic">{term}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                Merchant Solutions Corp provides professional installation services throughout Florida and nationwide.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you operate one location or multiple sites across the U.S., we deploy, configure, and train your team properly.
              </p>
              <p className="text-purple-700 font-semibold">
                You are not left to figure it out alone.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 flex items-center justify-center min-h-[360px]" data-testid="nationwide-image">
              <div className="text-center">
                <Truck className="h-20 w-20 mx-auto mb-4 text-purple-300" />
                <p className="text-gray-400 text-sm">Nationwide Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Handle the Setup */}
      <section className="py-20 bg-gray-50" data-testid="setup-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Settings className="h-7 w-7 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">We Handle the Setup</h2>
            <p className="text-lg text-gray-600">From signup to successful launch:</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {setupSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-center gap-4 bg-white border-2 border-gray-200 hover:border-purple-600 rounded-xl p-5 transition-all duration-300 hover:shadow-md">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <Icon className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{step.label}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-lg text-purple-700 font-semibold mt-8">
              You open your doors with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Launch with Square the Right Way?
          </h2>
          <p className="text-xl text-purple-100 mb-4">
            Get Square POS fully installed, configured, and supported by an authorized dealer partner.
          </p>
          <p className="text-base text-purple-200 mb-10 max-w-3xl mx-auto">
            Merchant Solutions Corp provides nationwide Square POS deployment with hands-on onboarding and long-term support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6" data-testid="cta-get-started-btn">
                Get Square POS
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" data-testid="cta-demo-btn">
                Request a Dealer Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Footer with Keywords */}
      <section className="py-12 bg-gray-50" data-testid="seo-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-4">
            Merchant Solutions Corp is an authorized Square dealer providing Square POS systems, Square Terminal, Square Register, Square Stand, and Square Reader hardware with professional installation, staff training, and ongoing support across all 50 U.S. states.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {seoKeywords.map((keyword, i) => (
              <span key={i} className="text-xs text-gray-400 bg-gray-100 rounded px-2 py-1">{keyword}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SquarePOS;
