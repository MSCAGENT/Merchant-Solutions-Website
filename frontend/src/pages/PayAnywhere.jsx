import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, CreditCard, Clock, Shield } from 'lucide-react';
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
      monthlyFee: null,
      features: [
        'No hardware needed',
        'Accept contactless payments',
        'Works with iPhone & Android',
        'Instant setup'
      ],
      dualPricing: {
        merchantFee: '$0',
        cardholderFee: '4%'
      },
      flatRate: {
        rate: '2.60% + $0.15'
      }
    },
    {
      id: 'pax-a77',
      name: 'PAX A77',
      subtitle: 'From Mini',
      price: '$150',
      monthlyFee: '$19.95/month',
      features: [
        '4" touchscreen',
        'EMV chip & NFC',
        'WiFi & 4G enabled',
        'Built-in printer'
      ],
      dualPricing: {
        merchantFee: '$0',
        cardholderFee: '4%'
      },
      flatRate: {
        rate: '2.60% + $0.15'
      }
    },
    {
      id: 'pax-a920',
      name: 'PAX A920 Pro',
      subtitle: 'Pro Mobile',
      price: '$349',
      monthlyFee: '$19.95/month',
      features: [
        '5.5" touchscreen',
        'Android OS',
        'Long battery life',
        '4G/WiFi connectivity'
      ],
      dualPricing: {
        merchantFee: '$0',
        cardholderFee: '4%'
      },
      flatRate: {
        rate: '2.60% + $0.15'
      }
    },
    {
      id: 'smart-pos',
      name: 'E600 Mini & E700 Smart POS',
      subtitle: 'For Mobile',
      price: '$249',
      monthlyFee: '$19.95/month',
      features: [
        'Full POS capabilities',
        'Inventory management',
        'Customer display',
        'Receipt printer'
      ],
      dualPricing: {
        merchantFee: '$0',
        cardholderFee: '4%'
      },
      flatRate: {
        rate: '2.60% + $0.15'
      }
    }
  ];

  const PricingModal = ({ device }) => {
    if (!device) return null;

    return (
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-6">
            {device.name} - Choose Your Pricing Plan
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          {/* Dual Pricing */}
          <Card className="border-2 border-purple-600">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dual Pricing Program</h3>
              <p className="text-sm text-gray-600 mb-6">Zero cost to merchant</p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-1">{device.dualPricing.merchantFee}</div>
                  <div className="text-sm text-gray-600">Fee to Merchant</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-1">{device.dualPricing.cardholderFee}</div>
                  <div className="text-sm text-gray-600">to the Cardholder</div>
                </div>
              </div>
              
              <a href="https://form.jotform.com/242266135050145" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg">
                  Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Flat Rate */}
          <Card className="border-2 border-blue-600">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flat Rate Program</h3>
              <p className="text-sm text-gray-600 mb-6">Simple, straightforward pricing</p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{device.flatRate.rate}</div>
                <div className="text-sm text-gray-600">Per Transaction</div>
              </div>
              
              <a href="https://form.jotform.com/242266135050145" target="_blank" rel="noopener noreferrer" className="block mt-20">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                  Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Get Free PayAnywhere POS with Zero Processing Fees
              </h1>
              <p className="text-xl text-purple-100 mb-2">
                Approved in <span className="font-semibold">15 minutes or less</span>. 100% compliant.
              </p>
              <p className="text-lg text-purple-100 mb-8">Built for retail and service businesses.</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-purple-900" />
                  </div>
                  <span className="text-lg">No upfront cost</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-purple-900" />
                  </div>
                  <span className="text-lg">Free smart terminal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-purple-900" />
                  </div>
                  <span className="text-lg">Cash discount or flat rate pricing</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold text-lg px-8 py-6 shadow-lg">
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

            {/* Right - Device Image */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="w-80 h-96 bg-white/10 backdrop-blur-sm rounded-3xl p-8 flex items-center justify-center">
                  <CreditCard className="w-48 h-48 text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Simple Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
            Three Simple Steps to Save on Processing Fees
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="relative">
              <Card className="text-center h-full border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Request a Free Demo</h3>
                  <p className="text-gray-600">See how PayAnywhere works for your business</p>
                </CardContent>
              </Card>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ChevronRight className="w-8 h-8 text-purple-600" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <Card className="text-center h-full border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Get Approved in Minutes</h3>
                  <p className="text-gray-600">Fast approval process, typically under 15 minutes</p>
                </CardContent>
              </Card>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ChevronRight className="w-8 h-8 text-purple-600" />
              </div>
            </div>

            {/* Step 3 */}
            <Card className="text-center h-full border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Choose Your Pricing Option</h3>
                <p className="text-gray-600">Select dual pricing or flat rate program</p>
              </CardContent>
            </Card>
          </div>

          {/* Device Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {devices.map((device) => (
              <Card key={device.id} className="border-2 border-gray-200 hover:border-purple-600 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  {/* Device Image Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                    <CreditCard className="w-24 h-24 text-purple-600" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{device.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{device.subtitle}</p>
                  
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-purple-600">{device.price}</div>
                    {device.monthlyFee && (
                      <div className="text-xs text-gray-500 mt-1">{device.monthlyFee} software subscription</div>
                    )}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                        onClick={() => setSelectedDevice(device)}
                      >
                        Pricing
                      </Button>
                    </DialogTrigger>
                    <PricingModal device={selectedDevice} />
                  </Dialog>
                  
                  <p className="text-xs text-gray-500 text-center mt-3">Final pricing shown after approval</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">$19.95/month software subscription per device</p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold text-lg px-12 py-6 shadow-lg">
                Start Saving Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose PayAnywhere */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Benefits */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Why Choose PayAnywhere POS?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-gray-900" />
                  </div>
                  <p className="text-lg text-gray-700">No credit card processing fees with cash discount pricing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-gray-900" />
                  </div>
                  <p className="text-lg text-gray-700">Free placement of smart PAX terminals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-gray-900" />
                  </div>
                  <p className="text-lg text-gray-700">Flat rate option with low monthly fee available</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-gray-900" />
                  </div>
                  <p className="text-lg text-gray-700">Mobile and countertop terminals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-gray-900" />
                  </div>
                  <p className="text-lg text-gray-700">Next-day or same-day funding</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-gray-900" />
                  </div>
                  <p className="text-lg text-gray-700">Works for retail, restaurants, and service businesses</p>
                </div>
              </div>
            </div>

            {/* Right - Device Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 flex items-center justify-center">
                  <CreditCard className="w-64 h-64 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Trusted by Thousands of Businesses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Check className="h-5 w-5 text-gray-900" />
              </div>
              <span className="text-xl font-semibold text-gray-900">No upfront cost</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Check className="h-5 w-5 text-gray-900" />
              </div>
              <span className="text-xl font-semibold text-gray-900">No processing fees</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Check className="h-5 w-5 text-gray-900" />
              </div>
              <span className="text-xl font-semibold text-gray-900">Fast approval</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold text-lg px-8 py-6 shadow-lg">
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

      {/* Get Started Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Get Started with PayAnywhere POS
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of businesses saving on payment processing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold text-lg px-8 py-6 shadow-lg">
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
