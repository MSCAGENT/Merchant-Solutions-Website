import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, CreditCard, Clock, Shield, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const PayAnywhere = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);

  const devices = [
    {
      id: 'phone-tap',
      name: 'Phone Tap to Pay',
      subtitle: 'No hardware needed for iPhone',
      price: '$0',
      priceLabel: 'Pay as you Go',
      monthlyFee: null,
      image: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/r0iknwf4_taptopay_iphone.png',
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
      price: 'Free placement or purchase for $150.95',
      priceLabel: '$19.95/mo/device software fee',
      monthlyFee: null,
      image: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/x3tpxvi3_A77_Slider3.png',
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
      price: 'Free placement or purchase for $349.95',
      priceLabel: '$19.95/mo/device software fee',
      monthlyFee: null,
      image: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/dmkrtxpl_hardware-smartTerminal-hero3.png',
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
      name: 'E600 & E700 Smart POS',
      subtitle: 'Full POS System',
      price: 'Free placement or purchase for $949.95',
      priceLabel: '$99.95 one-time setup fee. $49.95/mo/device software fee',
      monthlyFee: null,
      image: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/4s4phyyv_hardware-smartpos-hero3.png',
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
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Get Free PayAnywhere POS with Zero Processing Fees
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                Approved in <span className="font-semibold">15 minutes or less</span>. 100% compliant.
              </p>
              <p className="text-lg text-gray-600 mb-8">Built for retail and service businesses.</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">No upfront cost</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Free smart terminal</span>
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
            </div>

            {/* Right - Device Image */}
            <div className="hidden lg:flex justify-center items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/7l58y5a8_img-satisfy-payment-processing.png" 
                alt="PayAnywhere POS payment processing terminals" 
                className="w-full max-w-lg rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Three Simple Steps */}
      <section className="py-20 bg-white">
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
                  {/* Device Image */}
                  <div className="aspect-square rounded-lg mb-4 flex items-center justify-center overflow-hidden bg-gray-50">
                    <img src={device.image} alt={device.name} className="w-full h-full object-contain p-2" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{device.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{device.subtitle}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm font-bold text-purple-600 leading-snug">{device.price}</div>
                    {device.priceLabel && (
                      <div className="text-xs text-gray-500 mt-1">{device.priceLabel}</div>
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
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-12 py-6 shadow-lg">
                Start Saving Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose PayAnywhere */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Benefits */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Why Choose PayAnywhere POS?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">No credit card processing fees with cash discount pricing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Free placement of smart PAX terminals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Flat rate option with low monthly fee available</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Mobile and countertop terminals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Next-day or same-day funding</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Works for retail, restaurants, and service businesses</p>
                </div>
              </div>
            </div>

            {/* Right - Device Visual */}
            <div className="hidden lg:flex justify-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/u1g56erp_hardware-slider-flex-3.png" 
                alt="PayAnywhere POS terminal with card insert" 
                className="w-full max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Trusted by Thousands of Businesses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <span className="text-xl font-semibold text-gray-900">24/7 Technical Assistance</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <span className="text-xl font-semibold text-gray-900">Next Day Funding</span>
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about PayAnywhere POS</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-1" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Is there a contract required?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <ul className="list-disc pl-5 space-y-2">
                  <li>No contract when you purchase the equipment outright.</li>
                  <li>A 1-year agreement applies when you receive free equipment placement.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                What are the processing rates?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed space-y-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Flat rate pricing:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>2.60% + $0.10 for swiped, dipped, or tapped cards</li>
                    <li>3.50% + $0.19 for manually entered cards</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Optional Cash Discount Program:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>4% is applied to the consumer</li>
                    <li>Merchant only pays the monthly software fee</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                What hardware options are available?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">Payanywhere offers:</p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Smart terminals</li>
                  <li>Mobile POS devices</li>
                  <li>Full countertop POS systems</li>
                  <li>Tablets with stands and peripherals</li>
                </ul>
                <p>Built-in receipt printers available on select models.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Can I use dual pricing or cash discount?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">Yes.</p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Flat rate option available</li>
                  <li>4% cash discount program available</li>
                  <li>System automatically calculates pricing at checkout</li>
                </ul>
                <p>You choose the structure that fits your business.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                What businesses is Payanywhere good for?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Retail stores</li>
                  <li>Restaurants and quick service</li>
                  <li>Salons and spas</li>
                  <li>Mobile service businesses</li>
                  <li>Healthcare and professional services</li>
                </ul>
                <p>Works well for low to mid-volume merchants.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Does the POS include software features?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">Yes. Depending on the plan, features may include:</p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Inventory management</li>
                  <li>Employee management</li>
                  <li>Reporting and analytics</li>
                  <li>Customer database</li>
                  <li>Invoicing</li>
                  <li>Online payments</li>
                </ul>
                <p>Software fee varies by business type.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                What happens if I cancel?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Purchased equipment — no contract obligation</li>
                  <li>Free placement program — early termination may apply within the 1-year term</li>
                </ul>
                <p>After the agreement term, service continues month-to-month.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500 text-white">
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
