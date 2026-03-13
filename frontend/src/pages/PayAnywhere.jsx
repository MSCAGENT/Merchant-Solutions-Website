import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, CreditCard, Clock, Shield, CheckCircle, Monitor, FileText, RefreshCw, Smartphone, LinkIcon, QrCode, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const PayAnywhere = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [purchaseDevice, setPurchaseDevice] = useState(null);
  const [showActivation, setShowActivation] = useState(false);
  const [pricingDevice, setPricingDevice] = useState(null);

  useEffect(() => {
    if (!document.querySelector('link[href*="calendly.com"]')) {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const s = document.createElement('script');
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/mscpayments/posdemo?hide_event_type_details=1&primary_color=1400ff' });
    }
  };
  const [activeTab, setActiveTab] = useState('virtual-terminal');

  const devices = [
    {
      id: '3in1-reader',
      name: '3-in-1 Reader',
      subtitle: 'Compact Card Reader',
      price: 'Purchase for $99',
      priceLabel: 'Pay as you Go',
      image: 'https://customer-assets.emergentagent.com/job_e0de31d0-c8f6-44f8-af93-bc2fb5cc9b2f/artifacts/eq5c5u30_D135-3.webp',
      description: 'Portable 3-in-1 card reader that accepts chip, swipe, and contactless payments.',
      bestFor: ['Mobile businesses', 'Pop-up shops', 'Market vendors', 'Service providers'],
      features: ['EMV chip reader', 'Magnetic stripe', 'NFC contactless', 'Bluetooth connectivity'],
      purchaseIncludes: ['3-in-1 card reader', 'USB charging cable', 'Quick start guide'],
      wirelessDevice: true,
      dualPricing: { merchantFee: '$0', cardholderFee: '4%' },
      flatRate: { rate: '2.60% + $0.15' }
    },
    {
      id: 'phone-tap',
      name: 'iPhone Tap to Pay',
      subtitle: 'No hardware needed',
      price: '$0',
      priceLabel: 'No hardware needed',
      image: 'https://customer-assets.emergentagent.com/job_e0de31d0-c8f6-44f8-af93-bc2fb5cc9b2f/artifacts/wq1awhtt_taptopay.png',
      description: 'Accept contactless payments directly on your iPhone. No extra hardware required.',
      bestFor: ['Mobile businesses', 'Pop-up shops', 'Service providers', 'Freelancers'],
      features: ['No hardware needed', 'Accept contactless payments', 'Works with iPhone & Android', 'Instant setup'],
      purchaseIncludes: ['Tap to Pay app activation', 'Payment processing setup', 'Merchant portal access'],
      wirelessDevice: false,
      tapToPay: true,
      dualPricing: { merchantFee: '$0', cardholderFee: '4%' },
      flatRate: { rate: '2.60% + $0.15' }
    },
    {
      id: 'pax-a77',
      name: 'PAX A77 Mini',
      subtitle: 'Compact Terminal',
      price: 'Free placement or purchase for $199.95',
      priceLabel: '$19.95/mo/device software fee',
      image: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/x3tpxvi3_A77_Slider3.png',
      description: 'Compact countertop terminal great for retail, restaurants, healthcare, and service businesses.',
      bestFor: ['Retail stores', 'Small restaurants', 'Healthcare offices', 'Service businesses'],
      features: ['4" touchscreen', 'EMV chip & NFC', 'WiFi & 4G enabled', 'Built-in printer'],
      purchaseIncludes: ['Terminal device', 'Power cables & charger', 'Card cleaner', 'Ethernet cable'],
      wirelessDevice: false,
      dualPricing: { merchantFee: '$0', cardholderFee: '4%' },
      flatRate: { rate: '2.60% + $0.15' }
    },
    {
      id: 'pax-a80-keypad',
      name: 'A80 Smart Keypad',
      subtitle: 'Single Terminal',
      price: 'Free placement or purchase for $299.95',
      priceLabel: '$19.95/mo/device software fee',
      image: 'https://customer-assets.emergentagent.com/job_e0de31d0-c8f6-44f8-af93-bc2fb5cc9b2f/artifacts/yhnor83x_solo%20a80.png',
      description: 'Reliable smart keypad terminal for businesses that need a dedicated countertop card payment device.',
      bestFor: ['Retail stores', 'Quick-service restaurants', 'Healthcare offices', 'Service businesses'],
      features: ['Smart keypad entry', 'EMV chip & NFC', 'WiFi & Ethernet', 'Built-in printer'],
      purchaseIncludes: ['Terminal device', 'Power cables & charger', 'Card cleaner', 'Ethernet cable'],
      wirelessDevice: false,
      dualPricing: { merchantFee: '$0', cardholderFee: '4%' },
      flatRate: { rate: '2.60% + $0.15' }
    },
    {
      id: 'pax-a80-pinpad',
      name: 'A80 Smart Pinpad',
      subtitle: 'Pinpad Hardware',
      price: 'Free placement or purchase for $499.95',
      priceLabel: '$49.95 one-time setup fee. $29.95/mo/device software fee',
      image: 'https://customer-assets.emergentagent.com/job_e0de31d0-c8f6-44f8-af93-bc2fb5cc9b2f/artifacts/cumhow1n_newhardware-smartPinPad.png',
      description: 'Smart pinpad hardware with full PIN entry, ideal for retail and service businesses requiring secure customer-facing payment.',
      bestFor: ['Retail chains', 'Grocery stores', 'Healthcare practices', 'Service businesses'],
      features: ['PIN entry keypad', 'EMV chip & NFC', 'Customer-facing display', 'WiFi & Ethernet'],
      purchaseIncludes: ['Pinpad device', 'Power cables & charger', 'Card cleaner', 'Ethernet cable'],
      wirelessDevice: false,
      dualPricing: { merchantFee: '$0', cardholderFee: '4%' },
      flatRate: { rate: '2.60% + $0.15' }
    },
    {
      id: 'pax-a920',
      name: 'PAX A920 Pro',
      subtitle: 'Pro Mobile',
      price: 'Free placement or purchase for $499.95',
      priceLabel: '$19.95/mo/device software fee',
      image: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/dmkrtxpl_hardware-smartTerminal-hero3.png',
      description: 'Portable wireless terminal ideal for restaurants with tableside ordering, food trucks, and mobile service providers.',
      bestFor: ['Full-service restaurants', 'Food trucks', 'Mobile services', 'Events & catering'],
      features: ['5.5" touchscreen', 'Android OS', 'Long battery life', '4G/WiFi connectivity'],
      purchaseIncludes: ['Terminal device', 'Power cables & charger', 'Card cleaner', 'Ethernet cable'],
      wirelessDevice: true,
      dualPricing: { merchantFee: '$0', cardholderFee: '4%' },
      flatRate: { rate: '2.60% + $0.15' }
    },
    {
      id: 'e600-smart-flex',
      name: 'E600 Smart Flex',
      subtitle: 'Smart Flex POS',
      price: 'Free placement or purchase for $649.95',
      priceLabel: '$49.95 one-time setup fee. $29.95/mo/device software fee',
      image: 'https://customer-assets.emergentagent.com/job_e0de31d0-c8f6-44f8-af93-bc2fb5cc9b2f/artifacts/omn4cfq8_hardware-smartFlex-hero2.png',
      description: 'Versatile smart flex POS with touchscreen and customer display, built for retail and hospitality.',
      bestFor: ['Retail stores', 'Restaurants', 'Hospitality', 'Service businesses'],
      features: ['Touchscreen display', 'Customer-facing screen', 'EMV chip & NFC', 'Built-in printer'],
      purchaseIncludes: ['POS terminal & customer display', 'Power cables & charger', 'Card cleaner', 'Ethernet cable'],
      wirelessDevice: false,
      dualPricing: { merchantFee: '$0', cardholderFee: '4%' },
      flatRate: { rate: '2.60% + $0.15' }
    },
    {
      id: 'e700-smart-pos',
      name: 'E700 Smart POS',
      subtitle: 'Full POS System',
      price: 'Free placement or purchase for $949.95',
      priceLabel: '$99.95 one-time setup fee. $49.95/mo/device software fee',
      image: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/4s4phyyv_hardware-smartpos-hero3.png',
      description: 'Full-featured POS system with customer display, built for high-volume retail, restaurants, and healthcare practices.',
      bestFor: ['High-volume retail', 'Restaurants & QSR', 'Healthcare practices', 'Multi-location businesses'],
      features: ['Full POS capabilities', 'Inventory management', 'Customer display', 'Receipt printer'],
      purchaseIncludes: ['POS terminal & customer display', 'Power cables & charger', 'Card cleaner', 'Ethernet cable'],
      wirelessDevice: false,
      dualPricing: { merchantFee: '$0', cardholderFee: '4%' },
      flatRate: { rate: '2.60% + $0.15' }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>PayAnywhere Smart POS | Mobile Payment Processing & Smart Terminal</title>
        <meta property="og:title" content="PayAnywhere Smart POS | Mobile Payment Processing & Smart Terminal" />
        <meta property="og:description" content="PayAnywhere smart POS terminals and mobile payment processing. Smart Flex, Smart Terminal, and card readers for businesses of all sizes with next-day funding and transparent pricing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/pos/payanywhere" />
        <meta name="description" content="PayAnywhere smart POS terminals and mobile payment processing. Smart Flex, Smart Terminal, and card readers for businesses of all sizes with next-day funding and transparent pricing." />
        <meta name="keywords" content="PayAnywhere POS, PayAnywhere smart terminal, mobile payment processing, smart POS terminal, PayAnywhere card reader, portable payment terminal, mobile credit card processing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/payanywhere" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"PayAnywhere Mobile POS","serviceType":"Mobile Payment Processing and POS","provider":{"@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com"},"areaServed":"United States","url":"https://merchantsolutionscorp.com/payanywhere","description":"PayAnywhere mobile POS system for accepting payments anywhere with mobile card readers and POS terminals."})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://merchantsolutionscorp.com/"},{"@type":"ListItem","position":2,"name":"POS Systems","item":"https://merchantsolutionscorp.com/pos-systems"},{"@type":"ListItem","position":3,"name":"PayAnywhere","item":"https://merchantsolutionscorp.com/payanywhere"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com","logo":"https://merchantsolutionscorp.com/logo.png","sameAs":["https://www.facebook.com/merchantsolutionscorp/","https://www.instagram.com/merchant_solutions_corp","https://www.linkedin.com/company/merchantsolutionscorp/","https://www.youtube.com/merchantsolutionscorp"]})}</script>
      </Helmet>
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
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={openCalendly}>
                    Request a Free Demo
                  </Button>
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
            Four Simple Steps to Start Accepting Payments
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {/* Step 1 */}
            <div className="relative">
              <Card className="text-center h-full border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Select Your Equipment</h3>
                  <p className="text-gray-600">Choose the right terminal or POS for your business</p>
                </CardContent>
              </Card>
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
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Choose Your Pricing</h3>
                  <p className="text-gray-600">Select dual pricing or flat rate program</p>
                </CardContent>
              </Card>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ChevronRight className="w-8 h-8 text-purple-600" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <Card className="text-center h-full border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Apply and Get Approved in Minutes</h3>
                  <p className="text-gray-600">Fast approval process, typically under 15 minutes</p>
                </CardContent>
              </Card>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ChevronRight className="w-8 h-8 text-purple-600" />
              </div>
            </div>

            {/* Step 4 */}
            <Card className="text-center h-full border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Start Accepting Payments</h3>
                <p className="text-gray-600">You're live and ready to process transactions</p>
              </CardContent>
            </Card>
          </div>

          {/* Device Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {devices.map((device) => (
              <Card key={device.id} className="border-2 border-gray-200 hover:border-purple-600 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="aspect-square rounded-lg mb-4 flex items-center justify-center overflow-hidden bg-white">
                    <img src={device.image} alt={device.name} className="max-w-full max-h-full object-contain" style={{ mixBlendMode: 'multiply' }} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{device.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{device.subtitle}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm font-bold text-purple-600 leading-snug">{device.price}</div>
                    {device.priceLabel && (
                      <div className="text-xs text-gray-500 mt-1">{device.priceLabel}</div>
                    )}
                  </div>

                  {device.tapToPay ? (
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      onClick={() => setPricingDevice(device)}
                    >
                      Apply Now
                    </Button>
                  ) : (
                    <>
                      <Button
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                        onClick={() => setPricingDevice(device)}
                      >
                        Free Placement
                      </Button>

                      <Button 
                        variant="outline"
                        className="w-full mt-2 border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                        onClick={() => setPurchaseDevice(device)}
                        data-testid={`purchase-btn-${device.id}`}
                      >
                        Purchase Now
                      </Button>
                    </>
                  )}
                  
                  <p className="text-xs text-gray-500 text-center mt-3">Final pricing shown after approval</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Old standalone terms removed - now inside Free Placement popup */}

          <div className="text-center">
            <a href="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-12 py-6 shadow-lg">
                Start Saving Today
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Payment Features Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">More Ways to Get Paid</h2>
            <p className="text-lg text-gray-600">Flexible payment tools built into every plan</p>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-full p-1.5 gap-1">
              {[
                { key: 'virtual-terminal', label: 'Virtual Terminal', icon: Monitor },
                { key: 'invoicing', label: 'Invoicing', icon: FileText },
                { key: 'recurring', label: 'Recurring Payments', icon: RefreshCw },
                { key: 'payment-links', label: 'Payment Links', icon: LinkIcon },
                { key: 'qr-ecommerce', label: 'QR Codes & eCommerce', icon: QrCode }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeTab === tab.key
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                    data-testid={`tab-${tab.key}`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto">
            {activeTab === 'virtual-terminal' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Monitor className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Virtual Terminal</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Send secure payment links without requiring customers to create accounts. Accept payments from anywhere using any device with a browser.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Process keyed-in card payments from any device',
                      'Send pay-by-link via text or email',
                      'No customer account required',
                      'Ideal for phone orders and remote services',
                      'Real-time transaction reporting'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href="https://apply.paymentshub.com/?source=50926.9" target="_blank" rel="noopener noreferrer" className="inline-block mt-6">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg px-8 py-3" data-testid="vt-apply-btn">
                      Get Approved in Minutes <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
                <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-blue-50">
                  <CardContent className="p-10 text-center">
                    <Monitor className="h-20 w-20 text-purple-600 mx-auto mb-6" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Accept Payments Anywhere</h4>
                    <p className="text-gray-600 mb-6">No hardware needed — just a browser and an internet connection.</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">Visa</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">Mastercard</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">Amex</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">Discover</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'invoicing' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <FileText className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Invoicing</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Save payment methods on file and enable autopay. Create and send professional invoices that get paid faster.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Create and send invoices in seconds',
                      'Save cards on file for repeat customers',
                      'Enable autopay for recurring clients',
                      'Automatic payment reminders',
                      'Track invoice status in real time'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href="https://apply.paymentshub.com/?source=50926.9" target="_blank" rel="noopener noreferrer" className="inline-block mt-6">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg px-8 py-3" data-testid="invoicing-apply-btn">
                      Get Approved in Minutes <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
                <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-blue-50">
                  <CardContent className="p-10 text-center">
                    <FileText className="h-20 w-20 text-purple-600 mx-auto mb-6" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Get Paid Faster</h4>
                    <p className="text-gray-600 mb-6">Secure card-on-file storage with PCI-compliant vaulting.</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">Card on File</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">Autopay</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">Reminders</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'recurring' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <RefreshCw className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Recurring Payments</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Accept Apple Pay payments and all major digital wallets. Set up automatic billing schedules for memberships, subscriptions, and service plans.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Accept Apple Pay and contactless payments',
                      'Set custom billing cycles (weekly, monthly, annual)',
                      'Automatic retry on failed payments',
                      'Customer payment portal for self-management',
                      'Supports memberships, subscriptions, and installments'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href="https://apply.paymentshub.com/?source=50926.9" target="_blank" rel="noopener noreferrer" className="inline-block mt-6">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg px-8 py-3" data-testid="recurring-apply-btn">
                      Get Approved in Minutes <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
                <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-blue-50">
                  <CardContent className="p-10 text-center">
                    <Smartphone className="h-20 w-20 text-purple-600 mx-auto mb-6" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Modern Payment Methods</h4>
                    <p className="text-gray-600 mb-6">Accept every way your customers want to pay.</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">Apple Pay</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">Google Pay</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">Samsung Pay</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">Contactless</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'payment-links' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <LinkIcon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Payment Links</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Generate shareable payment links and send them via text, email, or social media. Customers pay instantly — no app download or account required.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Create payment links in seconds',
                      'Share via SMS, email, or social media',
                      'No customer account or app needed',
                      'Custom amounts or preset pricing',
                      'Track link status and payment in real time'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href="https://apply.paymentshub.com/?source=50926.9" target="_blank" rel="noopener noreferrer" className="inline-block mt-6">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg px-8 py-3" data-testid="payment-links-apply-btn">
                      Get Approved in Minutes <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
                <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-blue-50">
                  <CardContent className="p-10 text-center">
                    <LinkIcon className="h-20 w-20 text-purple-600 mx-auto mb-6" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Instant Payment Collection</h4>
                    <p className="text-gray-600 mb-6">One link. Any device. Paid in seconds.</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">SMS</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">Email</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">Social</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">Chat</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'qr-ecommerce' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <QrCode className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">QR Codes & Hosted eCommerce</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Create QR codes that link to a hosted checkout page. Turn any surface into a point of sale — menus, flyers, receipts, storefronts, or social media profiles.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Generate QR codes linked to hosted checkout',
                      'Accept payments from printed menus, signage, or flyers',
                      'Hosted eCommerce storefront — no website needed',
                      'Mobile-optimized checkout experience',
                      'Inventory and product catalog support',
                      'Ideal for pop-ups, events, and mobile businesses'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href="https://apply.paymentshub.com/?source=50926.9" target="_blank" rel="noopener noreferrer" className="inline-block mt-6">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg px-8 py-3" data-testid="qr-apply-btn">
                      Get Approved in Minutes <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
                <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-blue-50">
                  <CardContent className="p-10 text-center">
                    <ShoppingCart className="h-20 w-20 text-purple-600 mx-auto mb-6" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Sell Anywhere with a QR Code</h4>
                    <p className="text-gray-600 mb-6">No website required. Hosted checkout handles everything.</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">QR Codes</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">Hosted Store</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">Product Catalog</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">Mobile Checkout</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Card Present Virtual Terminal Section */}
      <section className="py-20 bg-white" data-testid="card-present-vt-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero / Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Featured Function
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Card Present Virtual Terminal</h2>
              <h3 className="text-xl text-gray-700 font-medium mb-4">How It Works</h3>
              <p className="text-lg text-gray-600 mb-6">
                Process payments from your computer while your team completes the transaction on a POS device.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800 font-medium">
                  <span className="font-bold">Note:</span> Use the same login credentials for both Payanywhere and Payments Hub to ensure transactions process correctly.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://customer-assets.emergentagent.com/job_e0de31d0-c8f6-44f8-af93-bc2fb5cc9b2f/artifacts/mkag8x0u_step1.png" alt="Card Present Virtual Terminal" className="w-full h-auto" />
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Enter the Transaction Amount</h4>
                </div>
                <p className="text-gray-600 mb-4 text-lg">Open the Virtual Terminal and enter the payment details.</p>
                <p className="text-sm font-semibold text-gray-700 mb-3">Fields include:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Customer email address</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Transaction amount</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 italic">This allows you to prepare the payment before it is completed on the device.</p>
              </div>
              <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img src="https://customer-assets.emergentagent.com/job_e0de31d0-c8f6-44f8-af93-bc2fb5cc9b2f/artifacts/tgu60x6m_step2.png" alt="Step 1 - Enter Transaction Amount" className="w-full h-auto" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img src="https://customer-assets.emergentagent.com/job_e0de31d0-c8f6-44f8-af93-bc2fb5cc9b2f/artifacts/dhvv8kv2_step%203.png" alt="Step 2 - Select POS Device" className="w-full h-auto" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Select POS Device as Payment Method</h4>
                </div>
                <p className="text-gray-600 mb-4 text-lg">Under Payment Method, choose:</p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg px-5 py-3 inline-block mb-4">
                  <span className="font-bold text-purple-700 text-lg">Use POS Device</span>
                </div>
                <p className="text-gray-500">This sends the transaction request directly to your connected terminal instead of manually entering the card.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Click Process Payment</h4>
                </div>
                <p className="text-gray-600 mb-4 text-lg">Once the payment details are entered, click:</p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg px-5 py-3 inline-block mb-4">
                  <span className="font-bold text-purple-700 text-lg">Process Payment</span>
                </div>
                <p className="text-gray-500">The transaction will immediately appear on your POS device.</p>
              </div>
              <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img src="https://customer-assets.emergentagent.com/job_e0de31d0-c8f6-44f8-af93-bc2fb5cc9b2f/artifacts/w7v3rquu_step%204.png" alt="Step 3 - Process Payment" className="w-full h-auto" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img src="https://customer-assets.emergentagent.com/job_e0de31d0-c8f6-44f8-af93-bc2fb5cc9b2f/artifacts/9ec5r4qs_step%205.png" alt="Step 4 - Customer Completes Payment" className="w-full h-auto" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Customer Completes Payment on the Terminal</h4>
                </div>
                <p className="text-gray-600 mb-4 text-lg">The customer finishes the payment directly on the device.</p>
                <p className="text-sm font-semibold text-gray-700 mb-3">Accepted payment methods include:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Tap (contactless)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Dip (chip card)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Swipe (magnetic stripe)</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 italic">The terminal will display the total and guide the customer through the payment process.</p>
              </div>
            </div>
          </div>

          {/* Built for Mobile */}
          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 mt-16">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Built for Mobile and Field Businesses</h3>
              <p className="text-lg text-gray-600 mb-4">
                This feature allows your team to accept payments anywhere. Your POS device does not need to be physically connected to the computer where the Virtual Terminal transaction was created.
              </p>
              <p className="font-semibold text-gray-700 mb-4">Ideal for businesses such as:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {['Field service companies', 'Contractors and installers', 'Mobile service providers', 'Delivery teams', 'Remote sales staff'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600">Your team can process payments in the field while your office manages transactions from the dashboard.</p>
            </CardContent>
          </Card>

          {/* Apply Now CTA */}
          <div className="text-center mt-12">
            <a href="https://apply.paymentshub.com/?source=50926.9" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-12 py-6 shadow-lg" data-testid="card-present-vt-apply-btn">
                Apply Now <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
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
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={openCalendly}>
                Request a Free Demo
              </Button>
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
            <a href="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold text-lg px-8 py-6 shadow-lg">
                Contact Sales Team
              </Button>
            </a>
            <a href="https://form.jotform.com/242266135050145" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
                Apply Online Now <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Modal (Controlled) */}
      {pricingDevice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setPricingDevice(null)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setPricingDevice(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
            >
              &#x2715;
            </button>
            <div className="p-6 pt-8">
              <h2 className="text-2xl font-bold text-center mb-2">{pricingDevice.name}</h2>
              <p className="text-center text-gray-500 mb-6">Choose the plan that works best for your business</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Dual Pricing - Benefits First */}
                <Card className="border-2 border-purple-600 relative overflow-hidden">
                  <div className="bg-purple-600 text-white text-center py-1.5 text-xs font-bold uppercase tracking-wider">Most Popular</div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Dual Pricing Program</h3>
                    <p className="text-sm text-purple-600 font-medium mb-5">Zero cost processing to merchant</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-900 font-semibold">$0 Processing Fees</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-900 font-semibold">Free Terminal/POS Included</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-900 font-semibold">4% to the Cardholder</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-900 font-semibold">$0 Fee Next Day Funding / Same-Day Funding</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 mb-1">Dual pricing compliant program</p>
                    <p className="text-xs text-gray-400 mb-6">Software fee applies - New or Established Business</p>

                    <Button onClick={() => { setPricingDevice(null); setShowActivation(true); }} className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg py-5">
                      Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                {/* Flat Rate - Benefits First */}
                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6 pt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Flat Rate Program</h3>
                    <p className="text-sm text-blue-600 font-medium mb-5">Traditional Pricing</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-900 font-semibold">Simple predictable processing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-900 font-semibold">No fees to consumer</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-900 font-semibold">Free Terminal/POS Included</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-900 font-semibold">$0 Fee Next Day Funding / Same-Day Funding</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 mb-6">
                      <p className="text-xs text-gray-500">2.6% + $0.15</p>
                      <p className="text-xs text-gray-500">3.5% + $0.20 keyed</p>
                      <p className="text-xs text-gray-400 mt-1">Software fee applies</p>
                    </div>

                    <Button onClick={() => { setPricingDevice(null); setShowActivation(true); }} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg py-5">
                      Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
                <p className="text-xs font-semibold text-gray-700 mb-2">All Free Placement terminals are provided under the Advantage Program and are subject to the following terms.</p>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>&#8226; 36-month service agreement required</li>
                  <li>&#8226; $595 early termination fee (ETF) if the agreement is cancelled before the end of the term</li>
                  <li>&#8226; $99 annual Advantage Program fee</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2 font-medium">30-day trial period from the date the account is activated</p>
                <p className="text-xs text-gray-500 mt-1">During the 30-day trial period, merchants may cancel the program without the early termination fee. After the trial period, the standard agreement terms apply.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Activation & Shipping Deposit Popup */}
      {showActivation && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowActivation(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              data-testid="activation-modal-close-btn"
              onClick={() => setShowActivation(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
            >
              &#x2715;
            </button>

            <div className="p-8 pt-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Activation & Shipping Deposit</h2>

              <p className="text-gray-600 text-center mb-6">
                To reserve your POS/Terminal system and begin the onboarding process, a small <span className="font-bold text-gray-900">$35 activation</span> and <span className="font-bold text-gray-900">$10 shipping deposit</span> are required.
              </p>

              <p className="text-sm text-gray-500 text-center mb-6">
                This step helps us verify legitimate applications and prepare your equipment for shipment.
              </p>

              <div className="bg-purple-50 rounded-xl p-5 mb-6">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Your deposit covers:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Free Equipment reservation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Processing account setup</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Terminal Configuring / SIM Card setup</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Shipping and handling</span>
                  </li>
                </ul>
              </div>

              <p className="text-xs text-gray-500 text-center mb-6">
                Once you have completed this step, you will proceed to the secure business application to create and activate your merchant account. This will take roughly 5-10 min.
              </p>

              <a href="https://form.jotform.com/242266135050145" target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  data-testid="continue-setup-btn"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg py-6 shadow-lg"
                >
                  Continue Activation <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Purchase Now Modal */}
      {purchaseDevice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setPurchaseDevice(null)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              data-testid="purchase-modal-close-btn"
              onClick={() => setPurchaseDevice(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
            >
              &#x2715;
            </button>

            <div className="p-6 pt-8">
              <div className="w-48 h-48 mx-auto mb-6 flex items-center justify-center">
                <img src={purchaseDevice.image} alt={purchaseDevice.name} className="max-w-full max-h-full object-contain" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{purchaseDevice.name}</h2>
              <p className="text-sm text-gray-500 text-center mb-4">{purchaseDevice.description}</p>

              {purchaseDevice.bestFor && (
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Great for:</p>
                  <div className="flex flex-wrap gap-2">
                    {purchaseDevice.bestFor.map((item, i) => (
                      <span key={i} className="bg-purple-50 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">{item}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-purple-50 rounded-xl p-5 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Your Purchase Includes:</h3>
                <ul className="space-y-2">
                  {(purchaseDevice.purchaseIncludes || ['Terminal device', 'Power cables & charger', 'Card cleaner', 'Ethernet cable']).map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                {purchaseDevice.wirelessDevice ? (
                  <p className="text-xs text-gray-500 mt-3 italic">SIM card is not included unless a wireless device.</p>
                ) : (
                  <p className="text-xs text-gray-500 mt-3 italic">SIM card not included.</p>
                )}
              </div>

              <a href="https://form.jotform.com/242266135050145" target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  data-testid="buy-now-btn"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg py-6 shadow-lg"
                >
                  Buy Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayAnywhere;
