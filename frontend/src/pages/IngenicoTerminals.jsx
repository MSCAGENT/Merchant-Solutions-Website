import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  CreditCard, 
  Smartphone, 
  Monitor,
  Shield,
  Zap,
  Wifi,
  Globe,
  Building2,
  Utensils,
  ShoppingBag,
  Truck,
  Hotel,
  Store,
  Lock,
  BarChart3,
  Layers,
  Settings,
  ExternalLink
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const IngenicoTerminals = () => {
  const keyBenefits = [
    { title: 'EMV Certified', desc: 'Chip card compliant' },
    { title: 'Contactless Ready', desc: 'Tap-to-pay enabled' },
    { title: 'PCI Compliant', desc: 'Bank-level security' },
    { title: 'Fast Processing', desc: 'Quick transactions' }
  ];

  const whyIngenico = [
    { icon: CreditCard, title: 'Accept All Major Payments', desc: 'Chip, swipe, and contactless payments including Apple Pay, Google Pay, and Samsung Pay' },
    { icon: Shield, title: 'Fast, Secure Transactions', desc: 'EMV, PCI-DSS compliance, and encryption for fraud protection' },
    { icon: Layers, title: 'Versatile Solutions', desc: 'Mobile, countertop, and wireless POS devices for any business' },
    { icon: Settings, title: 'Easy Integration', desc: 'Works with leading POS software and payment gateways' },
    { icon: Wifi, title: 'Advanced Connectivity', desc: 'Wi-Fi, 4G LTE, Bluetooth, and Ethernet compatibility' },
    { icon: Zap, title: 'Compact & Durable', desc: 'Built for high-traffic environments with long-lasting battery life' }
  ];

  const tetraTerminals = [
    {
      name: 'DESK 2600 / 3500',
      series: 'TETRA',
      description: 'Reliable countertop terminal with a sleek design. Perfect for retail stores and restaurants requiring a stationary checkout solution.',
      features: ['Countertop design', 'High-speed printing', 'Large display', 'Multiple connectivity options'],
      flatRateUrl: 'https://merchantsolutionscorp.com/merchant-application-flat-rate/',
      dualPriceUrl: 'https://merchantsolutionscorp.com/merchant-application-dual-pricing/'
    },
    {
      name: 'MOVE 5000 4G',
      series: 'TETRA',
      description: 'Portable wireless terminal with 4G LTE connectivity. Ideal for tableside payments, delivery services, and mobile businesses.',
      features: ['4G LTE wireless', 'Long battery life', 'Portable design', 'Fast thermal printer'],
      flatRateUrl: 'https://merchantsolutionscorp.com/merchant-application-flat-rate/',
      dualPriceUrl: 'https://merchantsolutionscorp.com/merchant-application-dual-pricing/'
    },
    {
      name: 'LANE 3000 PIN Series',
      series: 'TETRA',
      description: 'Customer-facing PIN pad for integrated POS systems. Designed for retail environments requiring a separate customer payment device.',
      features: ['Customer-facing display', 'PIN entry keypad', 'Integrated with POS', 'Compact footprint'],
      flatRateUrl: 'https://merchantsolutionscorp.com/merchant-application-flat-rate/',
      dualPriceUrl: 'https://merchantsolutionscorp.com/merchant-application-dual-pricing/'
    }
  ];

  const axiumTerminals = [
    {
      name: 'AXIUM DX4000 Desktop',
      series: 'AXIUM Android',
      description: 'Android-powered desktop terminal with touchscreen interface. Access business apps and accept all payment types from one device.',
      features: ['Android OS', 'Touchscreen display', 'App store access', 'Built-in printer'],
      flatRateUrl: 'https://merchantsolutionscorp.com/merchant-application-flat-rate/',
      dualPriceUrl: 'https://merchantsolutionscorp.com/merchant-application-dual-pricing/'
    },
    {
      name: 'AXIUM DX8000 Series',
      series: 'AXIUM Android',
      description: 'Premium Android smart terminal with large touchscreen. Ideal for businesses needing advanced apps and loyalty programs.',
      features: ['Large touchscreen', 'Android apps', 'Cloud-based management', 'Multi-payment support'],
      flatRateUrl: 'https://merchantsolutionscorp.com/merchant-application-flat-rate/',
      dualPriceUrl: 'https://merchantsolutionscorp.com/merchant-application-dual-pricing/'
    },
    {
      name: 'AXIUM RX7000',
      series: 'AXIUM Android',
      description: 'Mobile Android terminal for on-the-go payments. Combines smartphone-like functionality with professional payment processing.',
      features: ['Mobile Android device', 'Camera for QR codes', 'Wireless connectivity', 'Lightweight design'],
      flatRateUrl: 'https://merchantsolutionscorp.com/merchant-application-flat-rate/',
      dualPriceUrl: 'https://merchantsolutionscorp.com/merchant-application-dual-pricing/'
    }
  ];

  const industries = [
    { icon: ShoppingBag, title: 'Retail Stores', desc: 'Faster, secure checkout experience for customers' },
    { icon: Utensils, title: 'Restaurants & Cafes', desc: 'Table-side and contactless payments with ease' },
    { icon: Hotel, title: 'Hotels & Hospitality', desc: 'Seamless POS solution for guest services' },
    { icon: Truck, title: 'Mobile Businesses', desc: 'Take payments on-the-go with wireless terminals' },
    { icon: Globe, title: 'E-commerce & Omnichannel', desc: 'Integrate with online and in-store sales' }
  ];

  const businessBenefits = [
    { icon: Zap, title: 'Faster Transaction Processing', desc: 'Reduce checkout times and enhance customer satisfaction' },
    { icon: Shield, title: 'Enhanced Data Security', desc: 'Protect customer data with PCI-DSS compliant encryption' },
    { icon: Wifi, title: 'Seamless Connectivity', desc: 'Work with Wi-Fi, Bluetooth, and 4G LTE networks' },
    { icon: CreditCard, title: 'Increase Sales', desc: 'Accept tap-to-pay and mobile wallet transactions' }
  ];

  const TerminalCard = ({ terminal }) => (
    <Card className="border-2 hover:border-purple-600 transition-all duration-300 h-full">
      <CardContent className="p-6">
        <div className="bg-gradient-to-br from-purple-50 to-yellow-50 rounded-xl p-6 mb-6 aspect-square flex items-center justify-center">
          <div className="text-center text-gray-400">
            <Monitor className="h-20 w-20 mx-auto mb-2 text-purple-300" />
            <p className="text-xs">{terminal.name}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
            {terminal.series}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{terminal.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{terminal.description}</p>
        
        <ul className="space-y-2 mb-6">
          {terminal.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="space-y-3">
          <a 
            href={terminal.flatRateUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
              Enroll Flat Rate
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </a>
          <a 
            href={terminal.dualPriceUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
              Enroll Dual Price
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-purple-600 font-semibold mb-4">INGENICO TERMINALS</p>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ingenico Payment Terminals—Secure, Fast, & Reliable
            </h1>
            
            <div className="text-lg text-gray-700 space-y-4 mb-8">
              <p>
                Looking for a secure, efficient, and high-performance payment terminal for your business? <strong>Ingenico payment terminals</strong> offer state-of-the-art EMV, NFC, and contactless payment technology.
              </p>
              <p>
                Whether you run a retail store, restaurant, or service-based business, our Ingenico POS solutions provide speed, security, and versatility.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="#tetra">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg">
                  Tetra Terminals
                </Button>
              </a>
              <a href="#axium">
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6">
                  Axium Terminals
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Ingenico */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Ingenico Payment Terminals?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyIngenico.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* TETRA Terminals Section */}
      <section id="tetra" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full">TETRA</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">Our TETRA Terminals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Designed for any environment, TETRA terminals enable you to accept any payment method with seamless security and user-friendly interfaces. Powered by a specialized OS that has withstood the test of time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tetraTerminals.map((terminal, index) => (
              <TerminalCard key={index} terminal={terminal} />
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Ingenico Terminals Boost Your Business</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AXIUM Terminals Section */}
      <section id="axium" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full">AXIUM Android</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">Our AXIUM Android Terminals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Running entirely on Android, the AXIUM platform supplies you with an innovative POS range, extensive payment applications, and global APIs. Whether you are a small merchant or a large retailer, our Android terminals meet all of your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {axiumTerminals.map((terminal, index) => (
              <TerminalCard key={index} terminal={terminal} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AXIUM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose AXIUM?</h2>
              <p className="text-lg text-gray-600 mb-6">
                AXIUM integrates value-added applications with payments, connecting you to an extensive network of partners worldwide. Cloud-based Android architecture makes it easy for developers to implement business apps.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Multiple Payment Options</strong>
                    <p className="text-gray-600 text-sm">Accept EMV chip cards, swipe, tap, and mobile wallets</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Secure Payment Processing</strong>
                    <p className="text-gray-600 text-sm">Built-in fraud detection, encryption, and chargeback protection</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Mobile & Wireless Solutions</strong>
                    <p className="text-gray-600 text-sm">Take payments anywhere with 4G LTE and Wi-Fi connectivity</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">PCI-Compliant Security</strong>
                    <p className="text-gray-600 text-sm">End-to-end encryption and tokenization for maximum protection</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Smartphone className="h-24 w-24 mx-auto mb-4 text-purple-300" />
                <p className="text-sm">AXIUM Terminal Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Use Ingenico Payment Terminals?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <Icon className="h-10 w-10 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">{industry.title}</h3>
                    <p className="text-gray-600 text-xs">{industry.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Upgrade Your Payment Terminal?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get an Ingenico terminal with professional installation and support. Secure, fast, and reliable payment processing for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
                Contact Sales
              </Button>
            </Link>
            <a href="https://calendly.com/mscpayments" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
                Schedule a Call
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides Ingenico payment terminals, TETRA terminals, and AXIUM Android smart terminals for retail, restaurants, hospitality, and mobile businesses across all 50 US states. EMV certified, PCI compliant, and contactless payment ready terminals with professional installation and support.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IngenicoTerminals;
