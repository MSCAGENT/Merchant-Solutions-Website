import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  CreditCard, 
  Globe, 
  Smartphone, 
  Building2, 
  Shield, 
  Zap,
  RefreshCw,
  Lock,
  BarChart3,
  Plug,
  Users,
  FileText,
  ShoppingCart,
  Phone,
  Wallet,
  QrCode,
  Banknote,
  Server,
  Calculator,
  HandCoins,
  ClipboardCheck,
  TrendingDown,
  Monitor,
  FileCheck,
  BadgeCheck,
  Store
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

const PaymentProcessingSolution = () => {
  const acceptanceChannels = [
    { icon: Building2, label: 'In-Store', desc: 'Retail & restaurant' },
    { icon: Globe, label: 'Online', desc: 'eCommerce & web' },
    { icon: Phone, label: 'By Phone', desc: 'MOTO transactions' },
    { icon: Smartphone, label: 'Mobile', desc: 'On-the-go payments' }
  ];

  const benefits = [
    { title: 'Faster Funding', desc: 'Next-day deposits keep your cash flow healthy' },
    { title: 'Reduced Fraud', desc: 'Advanced screening protects every transaction' },
    { title: 'Scalable Solutions', desc: 'Grows with your business from startup to enterprise' },
    { title: 'Seamless Integration', desc: 'Works with your existing systems and software' }
  ];

  const cardPresentFeatures = [
    'EMV chip card acceptance',
    'Contactless tap-to-pay',
    'Magnetic stripe swipe',
    'Apple Pay & Google Pay',
    'Samsung Pay support',
    'Retail checkout terminals',
    'Restaurant tableside devices',
    'Quick service countertop units'
  ];

  const cardNotPresentFeatures = [
    'Phone order processing',
    'Keyed transaction entry',
    'Recurring billing automation',
    'Customer vault storage',
    'Saved payment profiles',
    'Scheduled payments',
    'Invoice payment links',
    'Mail order support'
  ];

  const ecommerceFeatures = [
    'Hosted checkout pages',
    'API integrations',
    'Shopping cart plugins',
    'WooCommerce compatible',
    'Shopify integration',
    'Magento support',
    'Subscription billing',
    'Digital invoicing'
  ];

  const mobileFeatures = [
    'Tap-to-pay on phone',
    'QR code payments',
    'Mobile card readers',
    'Field service processing',
    'Delivery payments',
    'Event sales',
    'Pop-up retail',
    'Service technician use'
  ];

  const achFeatures = [
    'Lower processing costs',
    'Recurring ACH billing',
    'Same-day ACH options',
    'Direct bank transfers',
    'Automated collections',
    'Batch processing',
    'Return handling',
    'Verification services'
  ];

  const integrationFeatures = [
    'POS system connectivity',
    'CRM integration',
    'QuickBooks sync',
    'Xero compatibility',
    'Custom API access',
    'ERP connections',
    'Inventory systems',
    'Custom platforms'
  ];

  const securityFeatures = [
    { icon: Shield, title: 'PCI Compliance', desc: 'Level 1 PCI DSS certified infrastructure' },
    { icon: Lock, title: 'End-to-End Encryption', desc: 'Data protected from terminal to processor' },
    { icon: CreditCard, title: 'Tokenization', desc: 'Card numbers replaced with secure tokens' },
    { icon: BarChart3, title: 'Fraud Tools', desc: 'Real-time screening and velocity checks' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Payment Processing Solutions for Every Business
            </h1>
            
            <p className="text-xl text-gray-700 mb-4">
              Accept payments in-store, online, by phone, and on mobile devices.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Secure, fast, and fully integrated credit card processing and merchant services designed to help your business grow.
            </p>

            {/* Acceptance Channels */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {acceptanceChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <Icon className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">{channel.label}</p>
                    <p className="text-sm text-gray-500">{channel.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-get-started-btn">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6" data-testid="hero-request-quote-btn">
                  Request a Quote
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
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card Present Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Card-Present Processing</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Accept payments face-to-face with secure EMV chip, contactless tap, and swipe transactions. Perfect for retail stores, restaurants, and service businesses.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {cardPresentFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]" data-testid="card-present-image-block">
              <img 
                src="https://images.unsplash.com/photo-1654263937079-f63a3ea4d48b?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800" 
                alt="Customer inserting chip card into payment terminal at store counter" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Card Not Present Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden aspect-[4/3]" data-testid="card-not-present-image-block">
              <img 
                src="https://images.pexels.com/photos/8353781/pexels-photo-8353781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Business professional processing phone order payment at desk" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Card-Not-Present Processing</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Process phone orders, keyed transactions, and recurring billing with ease. Store customer payment profiles securely for faster repeat transactions.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {cardNotPresentFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* eCommerce Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">eCommerce Payment Processing</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Sell online with secure checkout pages, powerful API integrations, and compatibility with all major shopping cart platforms. Manage subscriptions and digital invoicing from one dashboard.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {ecommerceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]" data-testid="ecommerce-image-block">
              <img 
                src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Person holding credit card while shopping online on laptop" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Payments Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden aspect-[4/3]" data-testid="mobile-payments-image-block">
              <img 
                src="https://images.pexels.com/photos/12935076/pexels-photo-12935076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Smartphone making contactless payment at modern terminal" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Mobile Payments</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Accept payments anywhere with tap-to-pay on your phone, QR code payments, and portable card readers. Ideal for field service, delivery, events, and pop-up retail.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {mobileFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACH Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Banknote className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">ACH Processing & Bank Transfers</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Lower your processing costs with direct bank transfers. Set up recurring ACH billing for memberships and subscriptions. Same-day ACH options available for faster access to funds.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {achFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]" data-testid="ach-image-block">
              <img 
                src="https://images.pexels.com/photos/6862457/pexels-photo-6862457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Business professional processing bank transfer and ACH payment" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Integrations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center" data-testid="integrations-image-block">
              <div className="text-center text-gray-400">
                <Plug className="h-24 w-24 mx-auto mb-4 text-purple-300" />
                <p className="text-sm">Payment Integrations Image</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Plug className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Payment Integrations</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Connect payments to your existing business systems. Integrate with POS platforms, CRM software, QuickBooks, Xero, and custom applications through our flexible APIs.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {integrationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security & Compliance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Protect your business and customers with enterprise-grade security. Our payment processing meets the highest industry standards for data protection and fraud prevention.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 text-center" data-testid={`security-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cash Discount & Dual Pricing */}
      <section className="py-20 bg-gray-50" data-testid="cash-discount-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <HandCoins className="h-7 w-7 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cash Discount & Dual Pricing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reduce or eliminate credit card processing fees with a compliant cash discount or dual pricing program — configured, installed, and supported by Merchant Solutions Corp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Compliance */}
            <Card className="border-2 border-purple-100 hover:border-purple-600 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                  <ClipboardCheck className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance Built In</h3>
                <p className="text-gray-600 mb-5">
                  Cash discount and dual pricing programs must meet card brand rules and state regulations. We handle compliance from day one so you avoid fines and disputes.
                </p>
                <ul className="space-y-2">
                  {[
                    'Card brand compliant receipt formatting',
                    'Required signage provided and placed',
                    'Proper disclosure at point of sale',
                    'Staff scripting for customer communication',
                    'State law review before activation'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Why Small Businesses Need It */}
            <Card className="border-2 border-purple-100 hover:border-purple-600 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                  <Store className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why Small Businesses Are Adopting</h3>
                <p className="text-gray-600 mb-5">
                  Processing fees eat into thin margins. For restaurants, retail, and service businesses, cash discount programs can save thousands annually while keeping pricing transparent.
                </p>
                <ul className="space-y-2">
                  {[
                    'Eliminate 2-4% in credit card processing fees',
                    'Protect margins without raising menu or shelf prices',
                    'Customers choose: pay card price or save with cash',
                    'Especially impactful for high-volume, low-margin businesses',
                    'Growing adoption across restaurants, salons, and trades'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Technology */}
            <Card className="border-2 border-purple-100 hover:border-purple-600 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                  <Monitor className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Technology Makes It Easy</h3>
                <p className="text-gray-600 mb-5">
                  We pre-configure your terminals and POS systems so dual pricing is automatic — no manual calculations, no staff confusion, and no compliance gaps.
                </p>
                <ul className="space-y-2">
                  {[
                    'Automatic dual pricing on every transaction',
                    'Customer-facing display shows card and cash prices',
                    'Compliant receipts generated automatically',
                    'Works on Clover, Dejavoo, Ingenico, and more',
                    'Remote or on-site programming by our team'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Dual pricing visual + CTA */}
          <div className="bg-white rounded-2xl border-2 border-purple-100 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/suvi0y8j_Pseries%20Dual%20Price.png" 
                alt="Terminal showing dual pricing - cash vs card price" 
                className="max-h-[322px] w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">See It in Action</h3>
              <p className="text-gray-600 mb-6">
                Our terminals display both prices automatically at the point of sale. Customers see exactly what they pay with card or cash — fully transparent, fully compliant, fully configured before we install.
              </p>
              <a href="https://payprotec.formstack.com/forms/edgeproposal_msc" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" data-testid="cash-discount-cta-btn">
                  Prepare a Cash Discount Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Businesses Choose Our Payment Processing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete business payment solutions backed by dedicated support and transparent pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Funding</h3>
                <p className="text-gray-600">Get your money faster with next-day funding. Improve cash flow and keep your business running smoothly.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden fees or surprise charges. Know exactly what you're paying with clear, competitive rates.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Support</h3>
                <p className="text-gray-600">Real people, real help. Our US-based support team is here when you need them, 24/7.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Simplify Your Payment Processing?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get a free consultation and custom quote for your business. No obligation, no pressure—just expert guidance on the right payment solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6" data-testid="cta-consultation-btn">
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" data-testid="cta-apply-btn">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides payment processing, credit card processing, and merchant services to businesses across all 50 US states, Canada, and the Caribbean. We specialize in card-present processing, eCommerce payment processing, ACH processing, and mobile payments for businesses of all sizes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PaymentProcessingSolution;
