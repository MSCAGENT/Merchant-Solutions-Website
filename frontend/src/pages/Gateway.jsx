import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Code, Shield, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mockData } from '../mock';

const Gateway = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Payment Gateway Solutions | Online & In-Store Payment Processing</title>
        <meta property="og:title" content="Payment Gateway Solutions | Online & In-Store Payment Processing" />
        <meta property="og:description" content="Secure payment gateway solutions for online and in-store businesses. API integration, hosted payment pages, virtual terminals, and recurring billing with PCI DSS compliance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/gateway/payments-gateway" />
        <meta name="description" content="Secure payment gateway solutions for online and in-store businesses. API integration, hosted payment pages, virtual terminals, and recurring billing with PCI DSS compliance." />
        <meta name="keywords" content="payment gateway, online payment processing, payment API, virtual terminal, hosted payment page, payment gateway integration, secure payments, PCI compliant gateway" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/gateway/payments-gateway" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Payment Gateway Solutions","serviceType":"Online and In-Store Payment Gateway","provider":{"@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com"},"areaServed":"United States","url":"https://merchantsolutionscorp.com/gateway/payments-gateway","description":"Secure payment gateway solutions for online and in-store businesses with API integration, hosted payment pages, and PCI DSS compliance."})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://merchantsolutionscorp.com/"},{"@type":"ListItem","position":2,"name":"Gateway","item":"https://merchantsolutionscorp.com/gateway/payments-gateway"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com","logo":"https://merchantsolutionscorp.com/logo.png","sameAs":["https://www.facebook.com/merchantsolutionscorp/","https://www.instagram.com/merchant_solutions_corp","https://www.linkedin.com/company/merchantsolutionscorp/","https://www.youtube.com/merchantsolutionscorp"]})}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Payment Gateway & API Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Powerful, secure, and developer-friendly payment gateway with 99.99% uptime
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg text-white">
                Start Integration
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gateway Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Gateway Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.gateway.map((item) => (
              <Card key={item.id} className="border-2 hover:border-purple-400 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="link" className="mt-4 p-0 text-purple-600 hover:text-purple-700">
                      Learn More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Built for Developers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">RESTful API</h3>
                <p className="text-gray-600">Modern REST API with comprehensive documentation and SDKs</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">PCI Level 1</h3>
                <p className="text-gray-600">Highest level of PCI DSS compliance for maximum security</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                <p className="text-gray-600">Average response time under 500ms with 99.99% uptime</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API Example */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Simple Integration</h2>
          <p className="text-center text-gray-600 mb-12">Get started with just a few lines of code</p>
          <Card className="bg-gray-900 text-gray-100 overflow-hidden">
            <CardContent className="p-6">
              <pre className="text-sm overflow-x-auto">
                <code>{`// Initialize the payment gateway
const merchant = new MerchantGateway({
  apiKey: 'your_api_key',
  environment: 'production'
});

// Process a payment
const payment = await merchant.processPayment({
  amount: 99.99,
  currency: 'USD',
  card: {
    number: '4111111111111111',
    expiry: '12/25',
    cvv: '123'
  },
  customer: {
    email: 'customer@example.com'
  }
});

console.log(payment.status); // 'approved'`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Building?</h2>
          <p className="text-xl mb-8 text-purple-100">Access our API documentation and start integrating today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Get API Access
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600">
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gateway;