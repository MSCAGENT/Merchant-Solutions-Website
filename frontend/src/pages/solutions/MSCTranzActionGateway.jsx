import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, CreditCard, Globe, RefreshCw, Shield, FileText, Users, Zap, BarChart3, Lock, Smartphone, Building2, Code } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';

const MSCTranzActionGateway = () => {
  const [showDevDocsForm, setShowDevDocsForm] = useState(false);
  const [devFormData, setDevFormData] = useState({ name: '', email: '', company: '', reason: '' });
  const [devDocsGranted, setDevDocsGranted] = useState(false);
  const paymentMethods = [
    { icon: CreditCard, label: 'Credit Cards', desc: 'Visa, Mastercard, Amex, Discover' },
    { icon: CreditCard, label: 'Debit Cards', desc: 'All major debit networks' },
    { icon: Building2, label: 'ACH Payments', desc: 'Direct bank transfers' },
    { icon: RefreshCw, label: 'Recurring Payments', desc: 'Subscriptions & auto-pay' }
  ];

  const channels = [
    { icon: Globe, label: 'Online', desc: 'Website & eCommerce integration' },
    { icon: Building2, label: 'In-Store', desc: 'POS system integration' },
    { icon: Smartphone, label: 'By Phone', desc: 'Virtual terminal processing' }
  ];

  const coreFeatures = [
    {
      icon: Smartphone,
      title: 'Virtual Terminal',
      description: 'Process card-not-present transactions directly from your browser. Accept payments by phone, mail, or fax without additional hardware.',
      features: ['Browser-based processing', 'No software installation', 'Keyed transaction entry', 'Receipt generation']
    },
    {
      icon: Globe,
      title: 'Website Integration',
      description: 'Seamlessly integrate with your website or shopping cart using our robust API and hosted payment pages.',
      features: ['REST API access', 'Hosted payment forms', 'Shopping cart plugins', 'Custom checkout flows']
    },
    {
      icon: Building2,
      title: 'POS Integration',
      description: 'Connect your point-of-sale system for unified reporting and inventory management across all sales channels.',
      features: ['Terminal integration', 'Unified reporting', 'Inventory sync', 'Multi-location support']
    },
    {
      icon: BarChart3,
      title: 'Unified Dashboard',
      description: 'Manage all your payments, billing, and reporting from a single intuitive dashboard.',
      features: ['Real-time transactions', 'Custom reports', 'User management', 'Multi-merchant support']
    }
  ];

  const securityFeatures = [
    { icon: Shield, title: 'Fraud Protection', desc: 'Advanced fraud screening and velocity checks' },
    { icon: Lock, title: 'Tokenization', desc: 'Secure card data storage for repeat customers' },
    { icon: CheckCircle, title: 'PCI Compliance', desc: 'Level 1 PCI DSS compliant infrastructure' },
    { icon: Shield, title: 'Encryption', desc: 'End-to-end encryption for all transactions' }
  ];

  const billingFeatures = [
    { icon: FileText, title: 'Invoicing', desc: 'Send professional invoices with payment links' },
    { icon: RefreshCw, title: 'Subscriptions', desc: 'Automated recurring billing management' },
    { icon: Users, title: 'Customer Vault', desc: 'Securely store customer payment profiles' },
    { icon: Zap, title: 'Automated Payments', desc: 'Schedule and automate payment collection' }
  ];

  const industries = [
    { name: 'Retail', description: 'In-store and online payment acceptance with inventory integration' },
    { name: 'Restaurants', description: 'Tableside payments, online ordering, and tip management' },
    { name: 'Professional Services', description: 'Invoice payments, recurring billing, and client management' },
    { name: 'eCommerce', description: 'Shopping cart integration, hosted checkout, and fraud prevention' }
  ];

  const faqs = [
    {
      question: 'What is MSC TranzAction Gateway?',
      answer: 'MSC TranzAction Gateway is a secure, cloud-based payment gateway powered by NMI. It enables businesses to accept credit cards, debit cards, ACH, and recurring payments through multiple channels including online, in-store, and phone.'
    },
    {
      question: 'Do I need special hardware?',
      answer: 'No special hardware is required for virtual terminal or online transactions. For in-store payments, we support integration with various POS terminals and systems.'
    },
    {
      question: 'Is it PCI compliant?',
      answer: 'Yes, MSC TranzAction Gateway is built on Level 1 PCI DSS compliant infrastructure. We also provide tokenization and hosted payment pages to reduce your PCI scope.'
    },
    {
      question: 'Can I accept recurring payments?',
      answer: 'Yes, the platform includes full subscription and recurring billing capabilities. You can set up automated payment schedules, manage customer payment profiles, and handle subscription lifecycle management.'
    },
    {
      question: 'How do I integrate with my website?',
      answer: 'We offer multiple integration options including REST APIs, hosted payment pages, and plugins for popular shopping carts like WooCommerce, Shopify, and Magento.'
    },
    {
      question: 'What reporting is available?',
      answer: 'Real-time transaction reporting, settlement reports, chargeback tracking, and custom report builders are all available through the merchant dashboard.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              MSC TranzAction Gateway
            </h1>
            
            <p className="text-xl text-purple-600 font-semibold mb-4">
              Secure, Cloud-Based Payment Gateway Powered by NMI
            </p>
            
            <div className="text-lg text-gray-700 space-y-4 mb-8">
              <p>
                Accept credit cards, debit cards, ACH, and recurring payments online, in-store, and by phone.
              </p>
              <p>
                Process transactions through a virtual terminal, integrate with websites and POS systems, and manage billing from one dashboard.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-get-started-btn">
                  Get Started
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6" data-testid="hero-request-demo-btn">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods & Channels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Payment Methods */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Methods Accepted</h2>
              <div className="grid grid-cols-2 gap-4">
                {paymentMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                      <CardContent className="p-4">
                        <Icon className="h-8 w-8 text-purple-600 mb-2" />
                        <h3 className="font-semibold text-gray-900">{method.label}</h3>
                        <p className="text-sm text-gray-600">{method.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Channels */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Accept Payments Anywhere</h2>
              <div className="space-y-4">
                {channels.map((channel, index) => {
                  const Icon = channel.icon;
                  return (
                    <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                      <CardContent className="p-4 flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{channel.label}</h3>
                          <p className="text-sm text-gray-600">{channel.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Powerful Payment Tools
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Everything you need to accept, manage, and optimize payments in one platform.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg" data-testid={`core-feature-${index}`}>
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                    <ul className="grid grid-cols-2 gap-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
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

      {/* Security & Billing Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Security & Compliance</h2>
              <p className="text-gray-600 mb-6">Enterprise-grade security to protect your business and customers.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {securityFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                      <CardContent className="p-4">
                        <Icon className="h-8 w-8 text-purple-600 mb-2" />
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Billing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing & Automation</h2>
              <p className="text-gray-600 mb-6">Streamline your billing operations with powerful automation tools.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {billingFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                      <CardContent className="p-4">
                        <Icon className="h-8 w-8 text-purple-600 mb-2" />
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose MSC TranzAction Gateway
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Speed</h3>
                <p className="text-gray-600">Fast transaction processing with real-time authorizations and quick settlements.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reliability</h3>
                <p className="text-gray-600">99.99% uptime guarantee with redundant infrastructure and 24/7 monitoring.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Scalability</h3>
                <p className="text-gray-600">Grows with your business from startup to enterprise with flexible pricing.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Ideal For Your Industry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300" data-testid={`industry-card-${index}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Simplify Your Payments?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with MSC TranzAction Gateway today and experience the power of unified payment processing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6" data-testid="cta-get-started-btn">
                Get Started
              </Button>
            </Link>
            <a href="https://developers.merchantsolutionscorpdb.com/#/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" data-testid="cta-api-docs-btn">
                View API Docs
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Local SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            MSC TranzAction Gateway is available for businesses across all 50 US states, Canada, and the Caribbean. Contact us for integration support.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MSCTranzActionGateway;
