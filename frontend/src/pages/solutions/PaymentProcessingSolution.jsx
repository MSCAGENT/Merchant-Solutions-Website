import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, CreditCard, Smartphone, Globe, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const PaymentProcessingSolution = () => {
  const problems = [
    'High credit card processing fees',
    'Slow funding from banks',
    'Declined or shut-down merchant accounts',
    'No support for high-risk businesses'
  ];

  const paymentMethods = [
    { icon: CreditCard, label: 'Credit and debit cards' },
    { icon: Smartphone, label: 'Contactless and mobile wallets' },
    { icon: Globe, label: 'ACH and bank transfers' },
    { icon: Zap, label: 'Virtual terminal payments' }
  ];

  const featureGroups = [
    {
      title: 'Speed',
      features: ['Fast merchant approvals', 'Next-day funding options', 'Quick setup process']
    },
    {
      title: 'Cost',
      features: ['Transparent pricing models', 'Competitive processing rates', 'No hidden fees']
    },
    {
      title: 'Control',
      features: ['Smart terminals and POS support', 'Real-time reporting', 'Multiple payment methods']
    },
    {
      title: 'Growth',
      features: ['High-risk friendly underwriting', 'Scalable solutions', '24/7 support']
    }
  ];

  const industries = [
    {
      name: 'Restaurants',
      benefits: 'Accept payments tableside, integrate with kitchen systems, handle tips efficiently'
    },
    {
      name: 'Retail',
      benefits: 'Process cards in-store and online, manage inventory, track customer data'
    },
    {
      name: 'Healthcare',
      benefits: 'HIPAA-compliant processing, patient payment plans, insurance billing support'
    },
    {
      name: 'High-Risk',
      benefits: 'Specialized underwriting, chargeback protection, account stability'
    }
  ];

  const faqs = [
    {
      question: 'What is a merchant account?',
      answer: 'A merchant account allows a business to accept card and electronic payments. It acts as a holding account for funds before they are deposited into your business bank account.'
    },
    {
      question: 'How fast do I get funded?',
      answer: 'Most businesses receive funds within one business day. Some accounts qualify for same-day funding depending on the processor and account type.'
    },
    {
      question: 'What are the fees?',
      answer: 'Processing fees vary based on your business type, transaction volume, and average ticket size. We offer transparent pricing with competitive rates and no hidden fees.'
    },
    {
      question: 'Do you support high-risk businesses?',
      answer: 'Yes. We specialize in high-risk merchant accounts including CBD, supplements, telehealth, and other specialty industries.'
    },
    {
      question: 'What equipment do I need?',
      answer: 'We provide smart terminals, mobile card readers, and virtual terminal software. Equipment can be purchased or included with subscription plans.'
    },
    {
      question: 'Is there a contract?',
      answer: 'Contract terms vary by processor and account type. We offer both month-to-month and longer-term agreements depending on your business needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero / Above the Fold */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Payment Processing for Small Businesses in the United States
            </h1>
            
            <div className="text-lg text-gray-700 space-y-4 mb-8">
              <p>
                Accept credit cards, debit cards, and ACH payments in-store, online, or on the go.
              </p>
              <p>
                Merchant Solutions Corp provides secure, fast, and flexible payment processing for US businesses in retail, restaurant, healthcare, and high-risk industries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg">
                  Get Started
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6">
                  Request Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Common Problems We Solve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{problem}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            How Payment Processing Works
          </h2>
          <p className="text-center text-gray-600 mb-12">Simple. Reliable. Secure.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Customer Pays</h3>
                <p className="text-gray-600">Customer pays with card, mobile wallet, or bank transfer</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Authorization</h3>
                <p className="text-gray-600">Transaction is securely authorized</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Funding</h3>
                <p className="text-gray-600">Funds are deposited into your business bank account</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Payment Methods Supported
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <p className="text-gray-700 font-semibold">{method.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grouped */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureGroups.map((group, index) => (
              <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-purple-600 mb-4">{group.title}</h3>
                  <ul className="space-y-2">
                    {group.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases by Industry */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Who This Is For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.benefits}</p>
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
          <Accordion type="single" collapsible className="w-full">
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
            Ready to Accept Payments?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with secure payment processing today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
                Contact Sales
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Local SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            Serving businesses across all 50 US states, Canada, and the Caribbean with secure payment processing solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PaymentProcessingSolution;
