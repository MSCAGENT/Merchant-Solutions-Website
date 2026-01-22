import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';

const PayAnywhere = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);

  const devices = [
    {
      id: 'phone-tap',
      name: 'Phone Tap to Pay',
      subtitle: 'Mobile Solution',
      price: '$0',
      image: '/api/placeholder/200/200',
      features: [
        'No hardware needed',
        'Accept contactless payments',
        'Works with iPhone & Android',
        'Instant setup'
      ],
      dualPricing: {
        merchantFee: '$0',
        cardholderFee: '4%',
        description: 'Zero cost to merchant'
      },
      flatRate: {
        rate: '2.60% + $0.15',
        description: 'Per transaction'
      }
    },
    {
      id: 'pax-a77',
      name: 'PAX A77',
      subtitle: 'From Mini',
      price: '$150',
      monthlyFee: '$19.95/month',
      image: '/api/placeholder/200/200',
      features: [
        '4" touchscreen',
        'EMV chip & NFC',
        'WiFi & 4G enabled',
        'Built-in printer'
      ],
      dualPricing: {
        merchantFee: '$0',
        cardholderFee: '4%',
        description: 'Zero cost to merchant'
      },
      flatRate: {
        rate: '2.60% + $0.15',
        description: 'Per transaction'
      }
    },
    {
      id: 'pax-a920',
      name: 'PAX A920 Pro',
      subtitle: 'Pro Mobile',
      price: '$349',
      monthlyFee: '$19.95/month',
      image: '/api/placeholder/200/200',
      features: [
        '5.5" touchscreen',
        'Android OS',
        'Long battery life',
        '4G/WiFi connectivity'
      ],
      dualPricing: {
        merchantFee: '$0',
        cardholderFee: '4%',
        description: 'Zero cost to merchant'
      },
      flatRate: {
        rate: '2.60% + $0.15',
        description: 'Per transaction'
      }
    },
    {
      id: 'smart-pos',
      name: 'E600 Mini & E700 Smart POS',
      subtitle: 'For Mobile',
      price: '$249',
      monthlyFee: '$19.95/month',
      image: '/api/placeholder/200/200',
      features: [
        'Full POS capabilities',
        'Inventory management',
        'Customer display',
        'Receipt printer'
      ],
      dualPricing: {
        merchantFee: '$0',
        cardholderFee: '4%',
        description: 'Zero cost to merchant'
      },
      flatRate: {
        rate: '2.60% + $0.15',
        description: 'Per transaction'
      }
    }
  ];

  const PricingModal = ({ device }) => {
    if (!device) return null;

    return (
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {device.name} - Pricing Options
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* Dual Pricing Option */}
          <Card className="border-2 border-purple-600 bg-purple-50">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dual Pricing Program</h3>
                  <p className="text-gray-600">{device.dualPricing.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-green-600">{device.dualPricing.merchantFee}</div>
                  <div className="text-sm text-gray-600">Fee to Merchant</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">{device.dualPricing.cardholderFee}</div>
                  <div className="text-sm text-gray-600">Fee to Cardholder</div>
                </div>
              </div>
              <a href="https://form.jotform.com/242266135050145" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg shadow-lg">
                  Apply Now <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Flat Rate Option */}
          <Card className="border-2 border-blue-600 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Flat Rate Program</h3>
                  <p className="text-gray-600">{device.flatRate.description}</p>
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg mb-6">
                <div className="text-3xl font-bold text-blue-600">{device.flatRate.rate}</div>
                <div className="text-sm text-gray-600">Per Transaction</div>
              </div>
              <a href="https://form.jotform.com/242266135050145" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg shadow-lg">
                  Apply Now <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get Free PayAnywhere POS with Zero Processing Fees
              </h1>
              <div className="space-y-4 mb-8">
                <p className="text-xl text-purple-100">
                  Approved in <span className="font-bold">15 minutes or less</span>. 100% compliant.
                </p>
                <p className="text-lg text-purple-100">Built for retail and service businesses.</p>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="h-6 w-6 text-green-400" />
                  <span className="text-lg">No upfront cost</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-6 w-6 text-green-400" />
                  <span className="text-lg">Free smart terminal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-6 w-6 text-green-400" />
                  <span className="text-lg">Cash discount or flat rate pricing</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-lg px-8 py-6 shadow-lg">
                    Request a Free Demo
                  </Button>
                </Link>
                <a href="https://form.jotform.com/242266135050145" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
                    Apply Now <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://customer-assets.emergentagent.com/job_merchant-central-11/artifacts/yj1egxn8_image.png" 
                alt="PayAnywhere POS Terminal" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Simple Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Three Simple Steps to Save on Processing Fees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-purple-600 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Request a Free Demo</h3>
                <p className="text-gray-600">See how PayAnywhere works for your business</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-purple-600 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Get Approved in Minutes</h3>
                <p className="text-gray-600">Fast approval process, typically under 15 minutes</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-purple-600 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Choose Your Pricing Option</h3>
                <p className="text-gray-600">Select dual pricing or flat rate program</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-6">$19.95/month software subscription per device</p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                Start Saving Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Device Showcase */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Choose Your Terminal
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Select the perfect device for your business needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {devices.map((device) => (
              <Card key={device.id} className="border-2 hover:border-purple-600 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-32 h-32 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-20 h-20 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{device.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{device.subtitle}</p>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-purple-600">{device.price}</div>
                    {device.monthlyFee && (
                      <div className="text-sm text-gray-600">{device.monthlyFee} software subscription</div>
                    )}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {device.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Check className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
                        onClick={() => setSelectedDevice(device)}
                      >
                        View Pricing
                      </Button>
                    </DialogTrigger>
                    <PricingModal device={selectedDevice} />
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 text-sm text-gray-600">
            <p>Final pricing shown after approval</p>
          </div>
        </div>
      </section>

      {/* Why Choose PayAnywhere */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose PayAnywhere POS?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">No credit card processing fees with cash discount pricing</h3>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Free placement of smart PAX terminals</h3>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Flat rate option with low monthly fee available</h3>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Mobile and countertop terminals</h3>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Next-day or same-day funding</h3>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Works for retail, restaurants, and service businesses</h3>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://customer-assets.emergentagent.com/job_merchant-central-11/artifacts/yj1egxn8_image.png" 
                alt="PayAnywhere Device" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Trusted by Thousands of Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <Check className="h-8 w-8 text-green-600" />
              <span className="text-xl font-semibold text-gray-900">No upfront cost</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Check className="h-8 w-8 text-green-600" />
              <span className="text-xl font-semibold text-gray-900">No processing fees</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Check className="h-8 w-8 text-green-600" />
              <span className="text-xl font-semibold text-gray-900">Fast approval</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-lg px-8 py-6 shadow-lg">
                Request a Free Demo
              </Button>
            </Link>
            <a href="https://form.jotform.com/242266135050145" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6">
                Apply Now <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Get Started with PayAnywhere POS</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of businesses saving on payment processing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg">
                Contact Sales Team
              </Button>
            </Link>
            <a href="https://form.jotform.com/242266135050145" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
                Apply Online Now <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PayAnywhere;
