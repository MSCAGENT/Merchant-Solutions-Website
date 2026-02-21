import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  CreditCard, 
  Smartphone, 
  Monitor,
  Clock,
  DollarSign,
  Shield,
  Zap,
  BarChart3,
  Users,
  ShoppingBag,
  Package,
  Globe,
  Settings,
  Calendar,
  Gift,
  Utensils,
  ShoppingCart,
  Briefcase,
  Scissors,
  Store,
  QrCode,
  Wifi,
  Receipt,
  TrendingUp,
  Layers
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const SquarePOS = () => {
  const keyBenefits = [
    { title: 'Free Software', desc: 'No monthly fees to start' },
    { title: 'Fast Setup', desc: 'Start selling in minutes' },
    { title: 'Flat-Rate Pricing', desc: 'Simple, predictable fees' },
    { title: 'All-in-One', desc: 'Payments, inventory, team' }
  ];

  const coreFeaturesBasic = [
    'Accept all major credit and debit cards',
    'Contactless and mobile wallet payments',
    'Send digital receipts via email or text',
    'Track sales and view reports',
    'Manage items and inventory',
    'Process refunds and voids',
    'Offline payment mode',
    'Next-day deposits available'
  ];

  const hardwareOptions = [
    {
      name: 'Square Reader',
      type: 'Mobile Card Reader',
      desc: 'Compact magstripe and chip reader that connects to your phone or tablet via Bluetooth.',
      bestFor: 'Mobile sellers, markets, pop-ups',
      icon: Smartphone
    },
    {
      name: 'Square Stand',
      type: 'Countertop Solution',
      desc: 'Turn your iPad into a full point-of-sale terminal with built-in card reader and customer display.',
      bestFor: 'Retail counters, cafes, quick service',
      icon: Monitor
    },
    {
      name: 'Square Terminal',
      type: 'All-in-One Device',
      desc: 'Portable device with built-in screen, receipt printer, and payment processing. No phone required.',
      bestFor: 'Tableside, delivery, small retail',
      icon: CreditCard
    },
    {
      name: 'Square Register',
      type: 'Full POS System',
      desc: 'Dual-screen system with customer-facing display, built-in payments, and powerful POS software.',
      bestFor: 'Full-service retail, restaurants',
      icon: Store
    }
  ];

  const softwarePlans = [
    {
      name: 'Free',
      price: '$0/mo',
      desc: 'Essential POS features for getting started',
      features: [
        'Point of sale app',
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
      price: '$49/mo',
      desc: 'Advanced features for growing businesses',
      features: [
        'Everything in Free',
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
      price: '$149/mo',
      desc: 'Tailored solutions for high-volume businesses',
      features: [
        'Everything in Plus',
        'Custom processing rates',
        'Dedicated support',
        'API access',
        'Multi-location tools',
        'Advanced integrations'
      ],
      processing: 'Custom rates',
      badge: null
    }
  ];

  const faqs = [
    {
      question: 'What is a POS (Point of Sale) system?',
      answer: 'A POS (Point of Sale) system is the hardware and software that allows your business to accept payments and manage sales. It includes features like payment processing, inventory tracking, sales reporting, and customer management. Modern POS systems like Square are cloud-based, meaning your data syncs across devices and you can access reports from anywhere.'
    },
    {
      question: 'How do I take payments with Square Point of Sale?',
      answer: 'Square Point of Sale lets you accept all major credit and debit cards, contactless payments like Apple Pay and Google Pay, and cash. Simply download the free Square POS app, connect a Square card reader or terminal, and you can start accepting payments immediately. Funds are typically deposited in your bank account the next business day.'
    },
    {
      question: 'How long does it take to set up my point of sale?',
      answer: 'Basic setup with Square can be completed in minutes. Download the app, create your account, and connect a card reader to start taking payments right away. For more complex setups with inventory, menus, and team permissions, our team can have you fully configured within a few days depending on your needs.'
    },
    {
      question: 'How does Square Point of Sale work for different business types?',
      answer: 'Square offers specialized features for different industries. Restaurants get table management, menu modifiers, and kitchen tickets. Retail stores get inventory tracking, barcode scanning, and purchase orders. Service businesses get appointment booking, invoicing, and client management. You can customize Square to fit your specific workflow.'
    },
    {
      question: 'Can I change my plan after I choose one?',
      answer: 'Yes, you can upgrade or downgrade your Square plan at any time. Start with the free plan to test features, then upgrade to Plus or Premium as your business grows. There are no long-term contracts, so you have flexibility to adjust based on your needs.'
    },
    {
      question: 'Do I need to purchase hardware to use Square Point of Sale?',
      answer: 'You can use Square Point of Sale for free on your smartphone or tablet without purchasing any hardware. However, to accept card payments, you will need a Square card reader (starting at $49) or a full terminal. We offer various hardware options from mobile readers to full countertop registers depending on your business setup.'
    }
  ];

  const industryFeatures = [
    {
      industry: 'Retail',
      icon: ShoppingBag,
      features: ['Inventory tracking', 'Barcode scanning', 'Purchase orders', 'Vendor management', 'Product variants']
    },
    {
      industry: 'Restaurants',
      icon: Utensils,
      features: ['Table management', 'Menu modifiers', 'Kitchen tickets', 'Tip management', 'Coursing']
    },
    {
      industry: 'Services',
      icon: Briefcase,
      features: ['Appointment booking', 'Client management', 'Invoicing', 'Deposits', 'Recurring payments']
    },
    {
      industry: 'Beauty & Wellness',
      icon: Scissors,
      features: ['Online booking', 'Staff calendars', 'Service packages', 'Retail add-ons', 'No-show protection']
    }
  ];

  const integrations = [
    'QuickBooks',
    'Xero',
    'WooCommerce',
    'Wix',
    'DoorDash',
    'Uber Eats',
    'Postmates',
    'Mailchimp',
    'Homebase',
    'TSheets'
  ];

  const additionalFeatures = [
    { icon: Globe, title: 'Online Store', desc: 'Sell online with a free website or integrate with your existing site' },
    { icon: Calendar, title: 'Appointments', desc: 'Let customers book and pay online with automated reminders' },
    { icon: Gift, title: 'Gift Cards', desc: 'Sell physical and digital gift cards to boost revenue' },
    { icon: Users, title: 'Team Management', desc: 'Track hours, manage permissions, and run payroll' },
    { icon: BarChart3, title: 'Analytics', desc: 'Real-time sales data, trends, and business insights' },
    { icon: Package, title: 'Inventory', desc: 'Track stock levels, set alerts, and manage vendors' }
  ];

  const whySquare = [
    'No long-term contracts or cancellation fees',
    'Transparent flat-rate processing',
    'Free software updates and features',
    'Hardware protection program available',
    '24/7 customer support',
    'Funds available as fast as next business day'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Square Point of Sale Systems
            </h1>
            
            <p className="text-xl text-purple-600 font-semibold mb-4">
              Simple, Powerful POS for Every Business
            </p>
            
            <div className="text-lg text-gray-700 space-y-4 mb-8">
              <p>
                Accept payments, manage inventory, and grow your business with Square's all-in-one point of sale platform.
              </p>
              <p>
                Start free with no monthly fees, or upgrade for advanced features. Hardware options for every setup.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-get-started-btn">
                  Get Square POS
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6" data-testid="hero-demo-btn">
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Sell</h2>
              <p className="text-lg text-gray-600 mb-8">
                Square POS comes with powerful features right out of the box. Accept payments, track inventory, and understand your business—all from one system.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coreFeaturesBasic.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center" data-testid="core-features-image">
              <div className="text-center text-gray-400">
                <CreditCard className="h-24 w-24 mx-auto mb-4 text-purple-300" />
                <p className="text-sm">Square POS Interface Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Square Hardware Options</h2>
            <p className="text-lg text-gray-600">Choose the right hardware for your business setup</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hardwareOptions.map((hardware, index) => {
              const Icon = hardware.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
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
          
          <div className="text-center mt-8">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                Get Hardware Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Software Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Software Plans</h2>
            <p className="text-lg text-gray-600">Start free or upgrade for more features</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {softwarePlans.map((plan, index) => (
              <Card key={index} className={`border-2 transition-all duration-300 ${plan.badge ? 'border-purple-600 shadow-lg' : 'hover:border-purple-600'}`}>
                <CardContent className="p-8">
                  {plan.badge && (
                    <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">{plan.badge}</span>
                  )}
                  <h3 className={`text-2xl font-bold text-gray-900 ${plan.badge ? 'mt-4' : ''}`}>{plan.name}</h3>
                  <p className="text-3xl font-bold text-purple-600 my-4">{plan.price}</p>
                  <p className="text-gray-600 mb-6">{plan.desc}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 border-t pt-4">
                    <strong>Processing:</strong> {plan.processing}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Your Industry</h2>
            <p className="text-lg text-gray-600">Specialized features for different business types</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryFeatures.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-4">{industry.industry}</h3>
                    <ul className="space-y-2">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Than Just Payments</h2>
            <p className="text-lg text-gray-600">A complete ecosystem to run and grow your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-6">
                    <Icon className="h-10 w-10 text-purple-600 mb-4" />
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Connects to Your Tools</h2>
            <p className="text-lg text-gray-600">Square integrates with popular business apps</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 hover:border-purple-600 rounded-lg px-6 py-3 text-gray-700 font-medium transition-all duration-300">
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Square */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center" data-testid="why-square-image">
              <div className="text-center text-gray-400">
                <Shield className="h-24 w-24 mx-auto mb-4 text-purple-300" />
                <p className="text-sm">Square Benefits Image</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Square</h2>
              <p className="text-lg text-gray-600 mb-8">
                Square makes it easy to start, run, and grow your business with transparent pricing and no surprises.
              </p>
              <div className="space-y-4">
                {whySquare.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Settings className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">We Handle the Setup</h2>
              </div>
              <p className="text-xl text-purple-600 font-medium mb-4">Local Dealer Installation & Support</p>
              <p className="text-lg text-gray-600 mb-6">
                As an authorized Square reseller, we provide hands-on setup, training, and ongoing support. You get the power of Square with local service.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Hardware configuration and delivery</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Menu and item setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Staff training on-site or remote</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Go-live support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Ongoing account management</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center" data-testid="installation-image">
              <div className="text-center text-gray-400">
                <Users className="h-24 w-24 mx-auto mb-4 text-purple-300" />
                <p className="text-sm">Installation Support Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started with Square?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get Square POS with local installation and support. Start selling faster with a system that grows with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6" data-testid="cta-get-started-btn">
                Get Square POS
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" data-testid="cta-contact-btn">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp is an authorized Square reseller providing Square POS systems, Square Terminal, Square Register, and Square Reader hardware with local installation and support across all 50 US states. Square point of sale solutions for retail, restaurants, services, and appointments.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SquarePOS;
