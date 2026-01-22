import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronRight, CreditCard } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';

const CloverPOS = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);

  const cloverDevices = [
    {
      id: 'clover-go',
      name: 'Clover Go',
      subtitle: 'Mobile Card Reader',
      price: '$49',
      monthlyFee: '$9.95/month software',
      image: '/api/placeholder/300/300',
      description: 'Compact mobile card reader'
    },
    {
      id: 'clover-compact',
      name: 'Clover Compact',
      subtitle: 'Countertop Terminal',
      price: '$399',
      monthlyFee: '$14.95/month software',
      image: '/api/placeholder/300/300',
      description: 'All-in-one countertop solution'
    },
    {
      id: 'clover-flex',
      name: 'Clover Flex',
      subtitle: 'Handheld POS',
      price: '$499',
      monthlyFee: '$19.95/month software',
      image: '/api/placeholder/300/300',
      description: 'Portable handheld device'
    },
    {
      id: 'clover-pocket',
      name: 'Clover Flex Pocket',
      subtitle: 'Compact Mobile',
      price: '$299',
      monthlyFee: '$14.95/month software',
      image: '/api/placeholder/300/300',
      description: 'Pocket-sized mobile POS'
    },
    {
      id: 'clover-mini-4g',
      name: 'Clover Mini 4G',
      subtitle: 'Compact POS',
      price: '$749',
      monthlyFee: '$19.95/month software',
      image: '/api/placeholder/300/300',
      description: 'Compact countertop with 4G'
    },
    {
      id: 'clover-station-solo',
      name: 'Clover Station Solo',
      subtitle: 'Full POS System',
      price: '$1,349',
      monthlyFee: '$39.95/month software',
      image: '/api/placeholder/300/300',
      description: 'Complete POS workstation'
    },
    {
      id: 'clover-station-duo',
      name: 'Clover Station Duo',
      subtitle: 'Dual-Screen POS',
      price: '$1,649',
      monthlyFee: '$49.95/month software',
      image: '/api/placeholder/300/300',
      description: 'Premium dual-screen system'
    }
  ];

  const PricingModal = ({ device }) => {
    if (!device) return null;

    return (
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-6">
            {device.name} - Pricing Options
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
                  <div className="text-3xl font-bold text-purple-600 mb-1">$0</div>
                  <div className="text-sm text-gray-600">Fee to Merchant</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-1">4%</div>
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
              
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">2.60% + $0.10</div>
                <div className="text-sm text-gray-600 mb-3">Per Transaction</div>
                <div className="text-xs text-gray-500 border-t border-gray-300 pt-2">
                  Non-qualified: 3.59% + $0.19
                </div>
              </div>
              
              <div className="text-xs text-gray-500 mb-4">
                Software: {device.monthlyFee}
              </div>
              
              <a href="https://form.jotform.com/242266135050145" target="_blank" rel="noopener noreferrer" className="block">
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
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Free Clover Flex POS Systems with Zero Processing Fees
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                Get approved in <span className="font-semibold">15 minutes or less</span>.
              </p>
              <p className="text-lg text-gray-600 mb-8">Built for retail and service businesses.</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">No upfront cost</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Free Clover Flex or Clover Pocket terminal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Cash discount or flat rate pricing</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg">
                    Request a Free Demo
                  </Button>
                </Link>
                <a href="https://form.jotform.com/242266135050145" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6">
                    Apply Now <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
              
              <div className="mt-6 flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>$17.90 <span className="line-through">$49</span></span>
                </div>
                <span>•</span>
                <span>Promotional Offer</span>
              </div>
            </div>

            {/* Right - Device Image */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-purple-100 to-yellow-100 rounded-3xl p-8 flex items-center justify-center shadow-xl">
                  <CreditCard className="w-64 h-64 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Three Simple Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
            Three Simple Steps to Save on Processing Fees
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="relative">
              <Card className="text-center h-full border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CreditCard className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Request a Free Demo</h3>
                  <p className="text-gray-600">See how Clover works for your business</p>
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
                    <CheckCircle className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Get Approved in Minutes</h3>
                  <p className="text-gray-600">Fast approval process</p>
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
                  <span className="text-2xl font-bold text-white">$$$</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Choose Your Pricing Option</h3>
                <p className="text-gray-600">Dual pricing or flat rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Featured Devices */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-8 bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl mb-4 flex items-center justify-center mx-auto">
                  <CreditCard className="w-20 h-20 text-purple-600" />
                </div>
                <div className="font-semibold text-gray-900">All-in-One POS</div>
                <div className="text-sm text-gray-500">Clover Pocket</div>
                <div className="text-2xl font-bold text-purple-600 mt-2">$350</div>
                <div className="text-xs text-gray-500">Clover Flex 2 from $499</div>
                <div className="text-xs text-gray-500 mt-1">$19.95/month software subscription per device</div>
                <div className="text-xs text-gray-400">Final pricing shown after approval</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">$19.95/month software subscription per device</p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-12 py-6 shadow-lg">
                Start Saving Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Clover */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Benefits */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Clover Flex or Clover Pocket?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">No credit card processing fees with cash discount pricing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Free placement of smart Clover terminals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Flat rate option with low monthly fee available</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">All-in-one mobile POS systems</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">End-to-end payment security</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Works for retail, restaurants, and service businesses</p>
                </div>
              </div>
            </div>

            {/* Right - Device Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 flex items-center justify-center shadow-xl">
                  <CreditCard className="w-64 h-64 text-purple-600" />
                </div>
                <div className="absolute bottom-8 right-8 bg-white rounded-lg shadow-lg p-4">
                  <div className="text-sm font-semibold">All-in-One POS</div>
                  <div className="text-xs text-gray-500">Clover Pocket from $350</div>
                  <div className="text-xs text-gray-500">Clover Flex 2 from $499</div>
                  <div className="text-xs text-gray-400 mt-1">$19.95/month software subscription per device</div>
                  <div className="text-xs text-gray-400">Final pricing shown after approval</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clover Device Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Choose Your Clover Device
          </h2>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {cloverDevices.map((device) => (
                <CarouselItem key={device.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl">
                      <CardContent className="p-6">
                        {/* Device Image */}
                        <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                          <CreditCard className="w-32 h-32 text-purple-600" />
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{device.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{device.subtitle}</p>
                        <p className="text-xs text-gray-600 mb-4">{device.description}</p>
                        
                        <div className="mb-4">
                          <div className="text-2xl font-bold text-purple-600">{device.price}</div>
                          <div className="text-xs text-gray-500 mt-1">{device.monthlyFee}</div>
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
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Trusted by Thousands of Businesses Nationwide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <span className="text-xl font-semibold text-gray-900">No upfront cost</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <span className="text-xl font-semibold text-gray-900">No processing fees</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <span className="text-xl font-semibold text-gray-900">Fast approval</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg">
                Request a Free Demo
              </Button>
            </Link>
            <a href="https://form.jotform.com/242266135050145" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6">
                Apply Now <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          
          <p className="text-center text-sm text-gray-500 mt-8">
            US based support | Built for retail, restaurants, and service businesses
          </p>
        </div>
      </section>
    </div>
  );
};

export default CloverPOS;
