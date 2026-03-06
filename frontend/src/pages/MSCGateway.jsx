import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronRight, CreditCard, Code, Globe, Calendar, QrCode, Users, DollarSign, Zap, Shield, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const MSCGateway = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const features = [
    {
      icon: CreditCard,
      title: 'Virtual Terminal',
      description: 'Accept payments from any device — no hardware required.',
      details: [
        'Key in credit card or ACH transactions',
        'Set custom amounts, add notes, apply taxes',
        'Email or SMS receipts instantly'
      ]
    },
    {
      icon: Globe,
      title: 'Payment Links',
      description: 'Create branded Pay Links to collect payments online or via SMS/email.',
      details: [
        'Custom amounts or fixed-price items',
        'Perfect for remote payments, deposits, and service invoices',
        'No website required'
      ]
    },
    {
      icon: Calendar,
      title: 'Recurring Billing & Invoicing',
      description: 'Automate your cash flow with recurring payments.',
      details: [
        'Weekly, monthly, or custom schedules',
        'Send automatic invoices with due dates',
        'Built-in card updater and failed payment notifications'
      ]
    },
    {
      icon: QrCode,
      title: 'QR Code Payments',
      description: 'Generate QR codes for easy scan-to-pay at point of sale or remotely.',
      details: [
        'Ideal for contactless payments in-store or on printed materials',
        'Works with mobile wallets and cards'
      ]
    },
    {
      icon: Users,
      title: 'Customer Payment Portal',
      description: 'Give customers a self-service portal to view and pay invoices.',
      details: [
        'Update cards on file',
        'Review transaction history',
        'Set up recurring payments'
      ]
    },
    {
      icon: DollarSign,
      title: 'ACH / Bank Transfers',
      description: 'Expand your options with integrated ACH payment processing.',
      details: [
        'Lower fees than cards',
        'Ideal for high-ticket and subscription billing',
        'Bank account verification via Plaid'
      ]
    }
  ];

  const apiFeatures = [
    'Create, retrieve, and manage transactions',
    'Generate invoices, subscriptions, and payment tokens',
    'Secure OAuth2 authorization',
    'Webhooks for real-time updates',
    'Sandbox available for testing'
  ];

  const industries = [
    { name: 'Software platforms & SaaS', icon: Code },
    { name: 'Healthcare & clinics', icon: Shield },
    { name: 'Service-based businesses', icon: Users },
    { name: 'Retail & eCommerce', icon: CreditCard },
    { name: 'Memberships & subscriptions', icon: Calendar },
    { name: 'Nonprofits and education', icon: TrendingUp }
  ];

  const benefits = [
    'All-in-one dashboard for card, ACH, and subscription billing',
    'API access + no-code tools like Pay Links and Portals',
    'Branded receipts, links, and payment pages',
    'Built-in fraud tools, tokenization, and PCI compliance',
    'Optional next-day funding'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              MSC Payments Gateway
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transaction Gateway by MSC Payments
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Accept payments anywhere with our all-in-one payment gateway, designed for retail, service, healthcare, SaaS, and billing platforms. Whether you're sending invoices, setting up recurring billing, or integrating with custom software, our tools give you full control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg">
                  Contact Sales
                </Button>
              </a>
              <a href="https://developers.merchantsolutionscorpdb.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6">
                  Explore Developer Docs <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
            What's Included with Our Gateway?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16">
            Everything you need to accept and manage payments
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          {detail}
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

      {/* Developer API Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                For Developers
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Open API Access
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Build custom integrations with our REST-based API suite.
              </p>
              
              <div className="space-y-3 mb-8">
                {apiFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <p className="text-sm text-gray-600 mb-2">Explore full API documentation:</p>
                <a 
                  href="https://developers.merchantsolutionscorpdb.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-semibold text-lg break-all"
                >
                  developers.merchantsolutionscorpdb.com
                </a>
              </div>

              <a href="https://developers.merchantsolutionscorpdb.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  View API Documentation <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            {/* Right - Code Example */}
            <div>
              <Card className="bg-gray-900 text-gray-100 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-400 ml-4">API Example</span>
                  </div>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Initialize MSC Gateway API
const gateway = new MSCGateway({
  apiKey: 'your_api_key',
  environment: 'production'
});

// Create a payment
const payment = await gateway.createPayment({
  amount: 99.99,
  currency: 'USD',
  source: {
    type: 'card',
    number: '4111111111111111',
    exp_month: 12,
    exp_year: 2025,
    cvv: '123'
  },
  customer: {
    email: 'customer@example.com',
    name: 'John Doe'
  }
});

console.log(payment.id); // 'txn_abc123'
console.log(payment.status); // 'approved'`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Industries We Serve
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{industry.name}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ideal for Your Industry - Contact Sales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ideal for Your Industry</h2>
            <p className="text-lg text-gray-600 mb-8">Our gateway works for every business type. Contact our sales team for a customized solution.</p>
            <Button
              size="lg"
              onClick={() => setShowContactForm(!showContactForm)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-10 py-6 shadow-lg"
              data-testid="contact-sales-toggle"
            >
              Contact Sales <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          {showContactForm && (
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden" data-testid="contact-sales-form">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A"
                className="w-full border-0 rounded-2xl"
                style={{ height: '80vh', minHeight: '600px' }}
                title="Contact Sales"
                scrolling="auto"
              />
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Gateway */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Gateway?
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">99.99%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600">Currencies Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">PCI Level 1</div>
              <div className="text-gray-600">Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Complete Feature Set
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <CreditCard className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Payment Processing</h3>
                <p className="text-sm text-gray-600 mb-4">Cards, ACH, digital wallets</p>
                <a href="https://apply.paymentshub.com/?source=50926.9" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" data-testid="signup-payment-processing">
                    Sign Up Now
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Virtual Terminal</h3>
                <p className="text-sm text-gray-600 mb-4">Accept payments anywhere</p>
                <a href="https://apply.paymentshub.com/?source=50926.9" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" data-testid="signup-virtual-terminal">
                    Sign Up Now
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Recurring Billing</h3>
                <p className="text-sm text-gray-600 mb-4">Automated subscriptions</p>
                <a href="https://apply.paymentshub.com/?source=50926.9" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" data-testid="signup-recurring">
                    Sign Up Now
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Developer API</h3>
                <p className="text-sm text-gray-600 mb-4">Full REST API access</p>
                <a href="https://apply.paymentshub.com/?source=50926.9" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" data-testid="signup-api">
                    Sign Up Now
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <QrCode className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">QR Code Payments</h3>
                <p className="text-sm text-gray-600 mb-4">Contactless scan-to-pay</p>
                <a href="https://apply.paymentshub.com/?source=50926.9" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" data-testid="signup-qr">
                    Sign Up Now
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Customer Portal</h3>
                <p className="text-sm text-gray-600 mb-4">Self-service payments</p>
                <a href="https://apply.paymentshub.com/?source=50926.9" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" data-testid="signup-portal">
                    Sign Up Now
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Fraud Protection</h3>
                <p className="text-sm text-gray-600 mb-4">Advanced security tools</p>
                <a href="https://apply.paymentshub.com/?source=50926.9" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" data-testid="signup-fraud">
                    Sign Up Now
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Real-time Reporting</h3>
                <p className="text-sm text-gray-600 mb-4">Instant transaction data</p>
                <a href="https://apply.paymentshub.com/?source=50926.9" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" data-testid="signup-reporting">
                    Sign Up Now
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start accepting payments today with our powerful gateway platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg">
                Contact Sales
              </Button>
            </a>
            <a href="https://developers.merchantsolutionscorpdb.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
                Explore Developer Docs <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MSCGateway;
