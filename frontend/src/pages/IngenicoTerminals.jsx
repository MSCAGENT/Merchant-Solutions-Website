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
    { icon: CreditCard, title: 'Accept All Major Payment Types', desc: 'EMV chip cards, magnetic stripe, contactless tap-to-pay, Apple Pay, Google Pay, Samsung Pay, debit and credit cards' },
    { icon: Shield, title: 'Secure Credit Card Processing', desc: 'PCI-DSS compliant, end-to-end encryption, tokenization support, and fraud protection tools' },
    { icon: Wifi, title: 'Advanced Connectivity', desc: 'Ethernet, Wi-Fi, 4G LTE, and Bluetooth options for any business environment' },
    { icon: Settings, title: 'Seamless POS Integration', desc: 'Works with leading retail POS systems, restaurant POS software, healthcare platforms, and payment gateways' }
  ];

  const tetraTerminals = [
    {
      name: 'Link 2500 Mobile',
      series: 'TETRA',
      description: 'Ultra-compact Bluetooth mobile terminal. Pairs with your smartphone or tablet for on-the-go payments — ideal for pop-ups, delivery, and field services.',
      image: 'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/ykxi9ape_Ingenico-Link2500-face-1200px.png',
      flatRateUrl: 'https://merchantsolutionscorp.com/merchant-application-flat-rate/',
      dualPriceUrl: 'https://merchantsolutionscorp.com/merchant-application-dual-pricing/'
    },
    {
      name: 'Desk 3500 Countertop',
      series: 'TETRA',
      description: 'Reliable countertop terminal with a compact design, keypad, and high-speed printer. Perfect for retail stores and restaurants requiring a stationary checkout.',
      image: 'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/qpup27iu_Desk3500-face..png',
      flatRateUrl: 'https://merchantsolutionscorp.com/merchant-application-flat-rate/',
      dualPriceUrl: 'https://merchantsolutionscorp.com/merchant-application-dual-pricing/'
    },
    {
      name: 'Move 5000 Wireless',
      series: 'TETRA',
      description: 'Portable wireless terminal with 4G LTE, Wi-Fi, and long battery life. Built-in printer makes it ideal for tableside payments, delivery, and mobile businesses.',
      image: 'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/3jepfq9n_Move5000-face.png',
      flatRateUrl: 'https://merchantsolutionscorp.com/merchant-application-flat-rate/',
      dualPriceUrl: 'https://merchantsolutionscorp.com/merchant-application-dual-pricing/'
    },
    {
      name: 'Lane 3XXX',
      series: 'TETRA',
      description: 'Customer-facing PIN pad on a swivel stand. Designed for integrated POS systems in retail environments where the customer completes payment at the counter.',
      image: 'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/lst1ahs6_lane3000-touch-3-4-square.png',
      flatRateUrl: 'https://merchantsolutionscorp.com/merchant-application-flat-rate/',
      dualPriceUrl: 'https://merchantsolutionscorp.com/merchant-application-dual-pricing/'
    },
    {
      name: 'Lane 5000',
      series: 'TETRA',
      description: 'Mid-size customer-facing payment device with a larger screen and full keypad. Ideal for grocery, pharmacy, and high-traffic retail checkout lanes.',
      image: 'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/n9b66u9x_lane5000-square.png',
      flatRateUrl: 'https://merchantsolutionscorp.com/merchant-application-flat-rate/',
      dualPriceUrl: 'https://merchantsolutionscorp.com/merchant-application-dual-pricing/'
    },
    {
      name: 'Lane 8000',
      series: 'TETRA',
      description: 'Premium widescreen customer-facing terminal with a large touchscreen display. Built for high-volume checkout environments like supermarkets and department stores.',
      image: 'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/eggls9i5_laneserie-carrousel-8000.png',
      flatRateUrl: 'https://merchantsolutionscorp.com/merchant-application-flat-rate/',
      dualPriceUrl: 'https://merchantsolutionscorp.com/merchant-application-dual-pricing/'
    }
  ];

  const axiumTerminals = [
    {
      name: 'AXIUM DX4000 Desktop',
      series: 'AXIUM Android',
      description: 'Android-powered desktop terminal with a large touchscreen and app ecosystem. Accept all payment types and run business apps from one compact device.',
      image: 'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/3dk6lqoe_AXIUM%20DX4000%20D_face.png',
      flatRateUrl: 'https://merchantsolutionscorp.com/merchant-application-flat-rate/',
      dualPriceUrl: 'https://merchantsolutionscorp.com/merchant-application-dual-pricing/'
    },
    {
      name: 'AXIUM RX5000 Pin',
      series: 'AXIUM Android',
      description: 'Customer-facing Android PIN pad on a stand. Touchscreen with physical keypad for secure PIN entry — ideal for integrated retail POS environments.',
      image: 'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/36z6xt78_AXIUM-RX5000---Face-with-standpole.png',
      flatRateUrl: 'https://merchantsolutionscorp.com/merchant-application-flat-rate/',
      dualPriceUrl: 'https://merchantsolutionscorp.com/merchant-application-dual-pricing/'
    },
    {
      name: 'AXIUM RX7000 Multi Lane',
      series: 'AXIUM Android',
      description: 'Premium widescreen Android multi-lane terminal with a large touchscreen and side keypad. Built for high-volume checkout in supermarkets and department stores.',
      image: 'https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/wa7wfxd1_AXIUM_03_A_Wpole_72dpi.png',
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

  const faqs = [
    {
      question: 'What is the difference between Tetra and Axium?',
      answer: `Tetra runs on Ingenico's secure proprietary system, while Axium runs on Android.

Use Tetra for maximum stability and proven reliability.
Use Axium for apps, advanced features, and customization.`
    },
    {
      question: 'Do these terminals accept tap, chip, and swipe?',
      answer: `Yes. Both Tetra and Axium support:

• Tap (NFC / contactless)
• Chip (EMV)
• Swipe (magstripe)
• Apple Pay, Google Pay, Samsung Pay`
    },
    {
      question: 'Do I need internet for the terminal to work?',
      answer: `Yes. You can connect by:

• Ethernet
• WiFi
• Cellular (on supported models)

If the internet goes down, some models can store limited offline transactions.`
    },
    {
      question: 'Can I use my terminal anywhere, or is it locked?',
      answer: `Most terminals are programmed to one processor and account. They are not "plug and play" between providers.

If you change processors, the terminal must be reprogrammed or replaced.`
    },
    {
      question: 'Are Tetra and Axium terminals PCI compliant?',
      answer: `Yes. They meet:

• PCI PTS standards
• EMV security requirements
• End-to-end encryption

This protects cardholder data and reduces fraud risk.`
    },
    {
      question: 'Can these terminals run apps and POS software?',
      answer: `Axium: Yes — Supports Android apps, POS systems, loyalty, ordering, and reporting.

Tetra: Limited — Designed mainly for payments, not third-party apps.

If you need customization, Axium is the better option.`
    },
    {
      question: 'What happens if my terminal stops working?',
      answer: `We provide support for:

• Remote troubleshooting
• Software reloads
• Replacement if needed
• Warranty processing

Most issues can be fixed without replacing the device.`
    }
  ];

  const TerminalCard = ({ terminal }) => (
    <Card className="border-2 hover:border-purple-600 transition-all duration-300 h-full">
      <CardContent className="p-6">
        <div className="bg-white rounded-xl p-6 mb-6 aspect-square flex items-center justify-center">
          {terminal.image ? (
            <img src={terminal.image} alt={terminal.name} className="max-w-full max-h-full object-contain" />
          ) : (
            <div className="text-center text-gray-400">
              <Monitor className="h-20 w-20 mx-auto mb-2 text-purple-300" />
              <p className="text-xs">{terminal.name}</p>
            </div>
          )}
        </div>
        
        <div className="mb-4">
          <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
            {terminal.series}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{terminal.name}</h3>
        <p className="text-gray-600 text-sm mb-6">{terminal.description}</p>
        
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
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-purple-600 font-semibold mb-4">INGENICO TERMINALS</p>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Ingenico Payment Terminals | Tetra & AXIUM Android POS Systems
              </h1>
              
              <p className="text-lg text-purple-600 font-semibold mb-4">Secure, Fast, and PCI-Compliant Credit Card Processing Solutions</p>

              <div className="text-lg text-gray-700 space-y-4 mb-8">
                <p>
                  Looking for <strong>secure and reliable Ingenico payment terminals</strong> for your business?
                </p>
                <p>
                  Merchant Solutions Corp provides Ingenico Tetra and AXIUM Android terminals for retail stores, restaurants, hospitality, healthcare, and mobile businesses across the United States.
                </p>
                <p>
                  Our terminals support full <strong>credit card processing</strong>, EMV chip cards, NFC contactless payments, and seamless POS integration.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

            {/* Right - Video */}
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-cover"
                  src="https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/c8sp2axu_Ingenico%20Terminals%20%20Secure%20%20Fast%20POS%20Solutions.mp4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ingenico is a global leader in payment processing hardware. Their terminals are built for speed, security, and long-term durability in high-volume environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">Ingenico Tetra Terminals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Ingenico Tetra platform is built on a secure operating system designed specifically for payment processing environments. Best for retail checkout counters, restaurants, hospitality, and service businesses. All Tetra terminals are EMV certified, PCI compliant, and contactless ready.
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
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">Ingenico AXIUM Android Smart Terminals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AXIUM runs on secure Android architecture, combining payment processing with business applications in one device. Best for businesses needing smart POS functionality and app integration. AXIUM terminals support EMV chip, tap-to-pay, mobile wallets, POS app integration, and cloud-based updates.
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
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
                src="https://customer-assets.emergentagent.com/job_0e6143ea-cbd5-43ca-901c-b8ab37491cb0/artifacts/3fcdxcdc_INGENICO-2026-HOMEPAGE-TOPBANNER-VIDEO-.mp4"
              />
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

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
