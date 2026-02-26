import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronRight, CreditCard, Smartphone, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';

const heroImages = [
  'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/jco4fk2s_people%20p18.webp',
  'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/8f0xq2gd_ipospays_djv.jpg',
];

const DejavooTerminals = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  // Hero image slideshow - 3s interval
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const terminals = [
    {
      id: 'xerocharge-go',
      name: 'XerochargeGO',
      description: 'Android and Apple Tap to Pay option on mobile phones.',
      image: 'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/boxo3424_XerochargeGo.jpg'
    },
    {
      id: 'qd4',
      name: 'QD4 Countertop',
      description: 'Great for retail and restaurant, healthcare or service businesses.',
      image: 'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/m3bya6nt_unnamed%20%283%29.jpg'
    },
    {
      id: 'qd4-dual',
      name: 'QD4 Dual Pin',
      description: 'Ideal for businesses with checkout counters that require a separate PIN pad.',
      image: 'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/rgyasxqr_QD4%20BUNDLE%20Dual.png'
    },
    {
      id: 'qd2',
      name: 'QD2 Wireless',
      description: 'Wireless device for businesses on the go. Subscription includes SIM card — a $35/mo value.',
      image: 'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/yo4qp6nh_QD2_flip.png'
    },
    {
      id: 'p1',
      name: 'P1 Terminal',
      description: 'Compact all-in-one countertop POS terminal.',
      image: 'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/uy9yluhc_P1A_branded_no-background.png'
    },
    {
      id: 'p5',
      name: 'P5 Wireless Terminal',
      description: 'Lightweight wireless terminal — no printer.',
      image: 'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/rkw95xvj_unnamed%20%286%29.jpg'
    },
    {
      id: 'p8',
      name: 'P8 Smart Wireless Terminal',
      description: 'Sleek Android wireless terminal with a large touchscreen display.',
      image: 'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/p246p0r5_p8%20terminal.webp'
    },
    {
      id: 'p18',
      name: 'P18 Countertop POS',
      description: 'Advanced countertop POS with a large flip-screen display.',
      image: 'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/t0scf4fh_p18blk%20bgrn.jfif'
    }
  ];

  const subscriptionPlans = [
    {
      name: 'Starter',
      price: '$49.99',
      bestFor: 'Retail shops, salons, mobile vendors',
      features: ['Basic POS software', 'Free hardware swaps', 'SIM included']
    },
    {
      name: 'Standard',
      price: '$69.99',
      bestFor: 'Quick-service restaurants, cafés',
      features: ['Recurring billing', 'Invoicing tools', 'Unlimited users', '$9.99 per additional device']
    },
    {
      name: 'Premium',
      price: '$99.99',
      bestFor: 'Full-service restaurants, franchises',
      features: ['Loyalty tools', 'Online ordering', 'Appointments', 'Multi-user', '$14.95 per additional device']
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: 'Switched from Clover and haven\'t looked back. Zero fees, smooth onboarding.',
      author: 'Jason D.',
      location: 'Florida'
    },
    {
      id: 2,
      quote: 'The subscription includes everything—hardware, SIM, and software. No surprises.',
      author: 'Linda M.',
      location: 'Texas'
    },
    {
      id: 3,
      quote: 'Setup was fast, and the support team was amazing. Our salon runs on the QD4 now.',
      author: 'Brianna G.',
      location: 'New York'
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
                <div className="text-3xl font-bold text-blue-600 mb-2">2.69% + $0.10</div>
                <div className="text-sm text-gray-600 mb-3">Qualified Transactions</div>
                <div className="text-xs text-gray-500 border-t border-gray-300 pt-2">
                  Non-qualified: 3.5% + $0.20
                </div>
              </div>
              
              <div className="text-xs text-gray-500 mb-4">
                Plans start at $49.99/month
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
              <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Powered by Xerocharge Pay
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Free Dejavoo POS Terminals with Zero Processing Fees
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                Get Approved in Minutes. No Upfront Cost.
              </p>
              <p className="text-lg text-gray-600 mb-8">Built for Retail, Restaurants, and Service Businesses.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  data-testid="hero-contact-sales-btn"
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg"
                  onClick={() => setShowContactModal(true)}
                >
                  Contact Sales
                </Button>
                <Button
                  data-testid="hero-apply-now-btn"
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6"
                  onClick={() => setShowApplyModal(true)}
                >
                  Apply Now <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right - Hero Image Slideshow */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-[480px] h-[400px] rounded-3xl overflow-hidden shadow-xl">
                {heroImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Dejavoo terminal ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                    style={{ opacity: heroIndex === i ? 1 : 0 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Why Choose Dejavoo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Dejavoo for In-Person Payments?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-purple-600 transition-all duration-300">
              <CardContent className="p-6">
                <CheckCircle className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">No upfront hardware cost</h3>
                <p className="text-gray-600">Get started immediately with zero initial investment</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-purple-600 transition-all duration-300">
              <CardContent className="p-6">
                <Smartphone className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Free smart terminals</h3>
                <p className="text-gray-600">Built-in receipt printers and touchscreen displays included</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-purple-600 transition-all duration-300">
              <CardContent className="p-6">
                <Zap className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Zero processing fees</h3>
                <p className="text-gray-600">Cash discount program offsets 100% of processing costs</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-purple-600 transition-all duration-300">
              <CardContent className="p-6">
                <CreditCard className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Flat rate option available</h3>
                <p className="text-gray-600">Choose the pricing model that works for you</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-purple-600 transition-all duration-300">
              <CardContent className="p-6">
                <CheckCircle className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Simple monthly subscription</h3>
                <p className="text-gray-600">One price covers everything - no surprises</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-purple-600 transition-all duration-300">
              <CardContent className="p-6">
                <CheckCircle className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Optimized for all businesses</h3>
                <p className="text-gray-600">Perfect for retail stores, salons, restaurants, and mobile businesses</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Step 1 */}
            <div className="relative">
              <Card className="text-center h-full border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-5">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">Choose Your Device Below</h3>
                  <p className="text-sm text-gray-600">Browse our full lineup of Dejavoo smart terminals and pick the one that fits your business.</p>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ChevronRight className="w-6 h-6 text-purple-600" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <Card className="text-center h-full border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-5">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">Select Your Pricing Model</h3>
                  <p className="text-sm text-gray-600 mb-3">Dual Pricing or Flat Rate</p>
                  <div className="text-left space-y-2">
                    <p className="text-xs text-gray-500"><span className="font-semibold text-gray-700">Dual Pricing:</span> Includes free equipment with a 24-month agreement.</p>
                    <p className="text-xs text-gray-500"><span className="font-semibold text-gray-700">Flat Rate:</span> Purchase made outright with no contract.</p>
                  </div>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ChevronRight className="w-6 h-6 text-purple-600" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <Card className="text-center h-full border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-5">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">Apply & Get Onboarded Fast</h3>
                  <p className="text-sm text-gray-600">Click the Apply Now button and fill out your information. No hard credit pull required.</p>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ChevronRight className="w-6 h-6 text-purple-600" />
              </div>
            </div>

            {/* Step 4 */}
            <Card className="text-center h-full border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-3xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">Receive & Get Trained</h3>
                <p className="text-sm text-gray-600">Once your equipment arrives, call us and get a quick training session to start accepting payments right away.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zero-Fee Credit Card Processing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
            Zero-Fee Credit Card Processing is Here
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Our built-in cash discount pricing model allows you to keep 100% of your sale
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">No IRS TIN fees, PCI fees, or hidden junk fees</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">SIM card service included (a $25/month value)</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Free terminal replacements for the duration of the plan</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">36-month warranty on all devices</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">100% ownership of hardware after plan completion</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Next Day and Same day funding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Subscription Plan Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan, index) => (
              <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-4">{plan.price}<span className="text-lg text-gray-500">/month</span></div>
                  <p className="text-sm text-gray-600 mb-6 font-semibold">Best For: {plan.bestFor}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Flat Rate</h3>
              <p className="text-sm text-gray-500 mb-4">Credit Card Rates</p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Qualified</p>
                  <p className="text-2xl font-bold text-purple-600">2.69% + $0.10</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Non-Qualified</p>
                  <p className="text-2xl font-bold text-gray-600">3.5% + $0.20</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-purple-600">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Dual Pricing – Xerocharge</h3>
              <p className="text-sm text-gray-500 mb-4">Eliminate up to 90% off your processing bill</p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">To the Merchant</p>
                  <p className="text-2xl font-bold text-purple-600">3.89%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">To the Consumer</p>
                  <p className="text-2xl font-bold text-purple-600">4%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Terminal - 2x4 Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Choose Your Terminal
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {terminals.map((terminal) => (
              <Card key={terminal.id} className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-5">
                  <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={terminal.image}
                      alt={terminal.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{terminal.name}</h3>
                  <p className="text-sm text-gray-600 mb-5 min-h-[3rem]">{terminal.description}</p>
                  
                  <div className="space-y-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                          onClick={() => setSelectedDevice(terminal)}
                        >
                          Pricing
                        </Button>
                      </DialogTrigger>
                      <PricingModal device={selectedDevice} />
                    </Dialog>
                    
                    <Button
                      variant="outline"
                      className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                      onClick={() => setShowApplyModal(true)}
                    >
                      Enroll Now <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Trusted by Thousands of Businesses Nationwide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <span className="text-lg font-semibold text-gray-900">No upfront hardware cost</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <span className="text-lg font-semibold text-gray-900">No processing fees</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <span className="text-lg font-semibold text-gray-900">Fast approvals</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <span className="text-lg font-semibold text-gray-900">US-based support</span>
            </div>
          </div>

          <p className="text-center text-gray-600 mb-8">
            Used by thousands of retailers, restaurants, and mobile merchants
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              data-testid="bottom-contact-sales-btn"
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg"
              onClick={() => setShowContactModal(true)}
            >
              Contact Sales
            </Button>
            <Button
              data-testid="bottom-apply-now-btn"
              size="lg"
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6"
              onClick={() => setShowApplyModal(true)}
            >
              Apply Now <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/pos/clover">
              <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-6">
                Compare Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Sales Modal (Lead Connector) */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowContactModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              data-testid="contact-modal-close-btn"
              onClick={() => setShowContactModal(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
            >
              &#x2715;
            </button>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A"
              className="w-full h-[80vh] border-0 rounded-2xl"
              title="Contact Sales"
            />
          </div>
        </div>
      )}

      {/* Apply Now Modal (Maverick Widget via iframe) */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowApplyModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <button
              data-testid="apply-modal-close-btn"
              onClick={() => setShowApplyModal(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
            >
              &#x2715;
            </button>
            <div className="flex justify-center pt-6 pb-4 border-b border-gray-100">
              <img
                src="https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/grllatvs_TSYSFH.png"
                alt="TSYS Merchant Solutions"
                className="h-16 object-contain"
              />
            </div>
            <iframe
              src="/maverick-apply.html"
              className="w-full flex-1 border-0"
              title="Apply Now - Boarding Application"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DejavooTerminals;
