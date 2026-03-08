import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown, ChevronRight, CreditCard, Shield, Zap, BarChart3, Package, Users, Heart, UtensilsCrossed, ShoppingBag, Scissors, Briefcase, Settings, GraduationCap, Smartphone, MapPin, Headphones } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-5 text-left" aria-expanded={open}>
        <span className="text-lg font-semibold text-gray-900 pr-4" itemProp="name">{question}</span>
        <ChevronDown className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-5 text-gray-600 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <div itemProp="text">{answer}</div>
        </div>
      )}
    </div>
  );
};

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
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg" data-testid="pricing-modal-apply-dual">
                Apply Now <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </CardContent>
        </Card>
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
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg" data-testid="pricing-modal-apply-flat">
                Apply Now <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </DialogContent>
  );
};

const CloverPOS = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const carouselImages = [
    { src: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/9cuaw0s3_as234.jpg', alt: 'Retail checkout with Clover POS' },
    { src: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/t767mlcn_kds-built-for-restaurant-image-desktop.webp', alt: 'Clover KDS restaurant orders' },
    { src: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/q44tav0t_Kiosk%20in2%6012%20%281%29.png', alt: 'Clover Kiosk ordering' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const cloverDevices = [
    { id: 'clover-go', name: 'Clover Go', subtitle: 'Mobile Card Reader', buyPrice: '$199 one-time', subPrice: '$9.99/mo', shipping: null, image: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/6c9v5py4_Clover%20GO.jpeg', monthlyFee: '$9.95/month software' },
    { id: 'clover-compact', name: 'Clover Compact', subtitle: 'Countertop Terminal', buyPrice: '$279', subPrice: '$30/mo', shipping: '+ Free Shipping', image: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/l4wr7o07_Clover%20Stand%20Alone%20%281%29.png', monthlyFee: '$14.95/month software' },
    { id: 'clover-flex', name: 'Clover Flex', subtitle: 'Handheld POS', buyPrice: '$799', subPrice: '$49/mo', shipping: '+ Free Shipping', image: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/7wyaqc40_Clover-FlexLRG.jpg', monthlyFee: '$19.95/month software' },
    { id: 'clover-mini', name: 'Clover Mini', subtitle: 'Compact POS', buyPrice: '$899', subPrice: '$69/mo', shipping: '+ Free Shipping', image: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/4xf4v4f5_clover%20mini%203%20gen.jfif', monthlyFee: '$19.95/month software' },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is Clover POS?", "acceptedAnswer": { "@type": "Answer", "text": "Clover POS is a cloud-based point of sale system that combines payment processing, inventory management, employee tracking, and business reporting into a single platform. It runs on Clover's proprietary Android-based hardware devices including Station, Mini, Flex, Compact, and Go." } },
      { "@type": "Question", "name": "How much does Clover POS cost?", "acceptedAnswer": { "@type": "Answer", "text": "Clover POS costs vary depending on your hardware choice and software plan. Hardware ranges from compact readers to full station systems. Monthly software plans start at $14.95/month. Processing rates are customized based on your business type and volume. Qualified businesses may receive hardware at no upfront cost through Merchant Solutions' placement program." } },
      { "@type": "Question", "name": "Is Clover good for restaurants?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Clover is one of the most popular restaurant POS systems available. It includes table management, kitchen display system (KDS) integration, tip management, online ordering, and menu modifier support. The Clover Station Duo with its customer-facing screen is especially popular for full-service restaurants." } },
      { "@type": "Question", "name": "Does Clover accept tap to pay?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every Clover device accepts contactless NFC payments including Apple Pay, Google Pay, Samsung Pay, and contactless credit and debit cards. Tap to pay is supported on the Station, Mini, Flex, Compact, and Go devices." } },
      { "@type": "Question", "name": "Which Clover device is best for small businesses?", "acceptedAnswer": { "@type": "Answer", "text": "The Clover Mini is the most popular choice for small businesses. It offers full POS functionality including a touchscreen, built-in printer, and complete software access in a compact form factor. For mobile businesses, the Clover Go paired with a smartphone is the most affordable starting point." } },
      { "@type": "Question", "name": "Can Clover track inventory?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Clover includes built-in inventory management across all plans. You can track stock levels, set low-stock alerts, manage product variants (size, color), view inventory reports, and sync inventory across multiple locations. Advanced inventory features are available through Clover's app marketplace." } }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Clover POS System for Restaurants and Retail | Clover Point of Sale</title>
        <meta name="description" content="Explore Clover POS systems including Clover Station, Clover Mini and Clover Flex. Manage payments, inventory and business operations with a powerful cloud POS system." />
        <meta name="keywords" content="Clover POS, Clover POS system, Clover point of sale, Clover POS for small business, Clover Station POS, Clover Mini POS, Clover Flex POS" />
        <link rel="canonical" href="/clover-pos-system" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-testid="clover-hero-h1">
                Clover POS System for Restaurants, Retail and Service Businesses
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl">
                Accept payments, manage inventory and run your business with Clover POS systems including Clover Station, Mini and Flex.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#hardware">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-pricing-btn">
                    Get Clover POS Pricing
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6" onClick={openCalendly} data-testid="hero-demo-btn">
                  Schedule a Demo
                </Button>
              </div>
              <p className="text-sm text-gray-500" data-testid="trust-line">
                <Shield className="inline h-4 w-4 mr-1 text-purple-500" /> Clover Authorized Partner &nbsp;|&nbsp; <Settings className="inline h-4 w-4 mr-1 text-purple-500" /> Professional Installation &nbsp;|&nbsp; <Headphones className="inline h-4 w-4 mr-1 text-purple-500" /> Ongoing Support
              </p>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-xl bg-white">
                {carouselImages.map((image, index) => (
                  <img key={index} src={image.src} alt={image.alt} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} />
                ))}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                  {carouselImages.map((_, index) => (
                    <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-purple-600 w-6' : 'bg-gray-300'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* 2. WHAT IS CLOVER POS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What Is Clover POS?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Clover POS is a cloud-based point of sale system designed for restaurants, retail stores and service businesses. The platform combines payment processing, inventory management, employee tracking and reporting into one system.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Clover hardware devices, such as <strong>Clover Station</strong>, <strong>Clover Mini</strong>, and <strong>Clover Flex</strong>, allow businesses to accept credit cards, mobile wallets, and contactless payments while managing their daily operations.
              </p>
              <p className="text-gray-600">
                Whether you run a busy restaurant kitchen, a retail store with barcode inventory, or a salon with appointment scheduling, Clover adapts to your business with its large app marketplace and flexible software plans. New businesses may qualify for a <Link to="/pricing/free-pos" className="text-purple-600 font-semibold hover:underline">free Clover POS</Link> through our placement program.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100">
              <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/t767mlcn_kds-built-for-restaurant-image-desktop.webp" alt="clover-pos-restaurant-system" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS OF CLOVER POS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Benefits of Clover POS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Zap, title: 'Fast Checkout', desc: 'Process transactions in seconds with tap-to-pay, chip, swipe, and mobile wallet acceptance on every Clover device.' },
              { icon: Package, title: 'Inventory Management', desc: 'Track stock automatically, set low-stock alerts, and manage product variants across all sales channels.' },
              { icon: Users, title: 'Employee Tracking', desc: 'Manage shifts, track hours, set permissions, and monitor employee sales performance from one dashboard.' },
              { icon: BarChart3, title: 'Sales Reporting', desc: 'Access real-time sales data, daily reports, top-selling items, and trends from your Clover dashboard or phone.' },
              { icon: Heart, title: 'Customer Loyalty', desc: 'Build repeat business with built-in loyalty programs, points tracking, digital receipts, and customer profiles.' },
            ].map((b, i) => (
              <Card key={i} className="border hover:border-purple-300 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <b.icon className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-600">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLOVER HARDWARE OPTIONS — Promotional Offers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">Clover POS Hardware Options</h2>
          <p className="text-lg text-gray-600 text-center mb-12">Get a Free Placement with $0 out of pocket.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Clover Compact */}
            <Card className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl overflow-hidden" data-testid="promo-card-compact">
              <div className="aspect-square bg-white flex items-center justify-center p-6">
                <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/xv187z8q_Clover%20Stand%20Alone%20%281%29.png" alt="clover-compact-pos-terminal" className="w-full h-full object-contain" style={{ mixBlendMode: 'multiply' }} />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Clover Compact</h3>
                <div className="space-y-1 mb-4">
                  <p className="text-sm text-gray-600">Buy for <span className="font-bold text-purple-600 text-lg">$199</span></p>
                  <p className="text-sm text-gray-500">or Subscribe and get it <span className="font-bold text-green-600 text-lg">Free</span></p>
                  <p className="text-xs text-gray-400">36-month agreement required</p>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" onClick={openCalendly}>
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Clover Flex - Most Popular */}
            <Card className="border-2 border-purple-600 shadow-xl relative overflow-hidden" data-testid="promo-card-flex">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold text-center py-1.5 z-10">Most Popular</div>
              <div className="aspect-square bg-white flex items-center justify-center p-6 mt-6">
                <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/hm5yf2w0_Clover-FlexLRG.jpg" alt="clover-flex-terminal" className="w-full h-full object-contain" style={{ mixBlendMode: 'multiply' }} />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Clover Flex</h3>
                <div className="space-y-1 mb-4">
                  <p className="text-sm text-gray-600">Buy for <span className="font-bold text-purple-600 text-lg">$399</span></p>
                  <p className="text-sm text-gray-500">or Subscribe and get it <span className="font-bold text-green-600 text-lg">Free</span></p>
                  <p className="text-xs text-gray-400">36-month agreement required</p>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" onClick={openCalendly}>
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Clover Mini */}
            <Card className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl overflow-hidden" data-testid="promo-card-mini">
              <div className="aspect-square bg-white flex items-center justify-center p-6">
                <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/ns43y2j9_clover%203rd%20gen.jfif" alt="clover-mini-pos" className="w-full h-full object-contain" style={{ mixBlendMode: 'multiply' }} />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Clover Mini POS</h3>
                <div className="space-y-1 mb-4">
                  <p className="text-sm text-gray-600">Buy for <span className="font-bold text-purple-600 text-lg">$599</span></p>
                  <p className="text-sm text-gray-500">or Subscribe and get it <span className="font-bold text-green-600 text-lg">Free</span></p>
                  <p className="text-xs text-gray-400">36-month agreement required</p>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" onClick={openCalendly}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Device Grid with Pricing Modals */}
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8" id="hardware">Choose Your Clover Device</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloverDevices.map((device) => (
              <Card key={device.id} className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl" data-testid={`device-card-${device.id}`}>
                <CardContent className="p-6">
                  <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img src={device.image} alt={device.name.toLowerCase().replace(/\s/g, '-') + '-pos'} className="w-full h-full object-contain p-2" style={{ mixBlendMode: 'multiply' }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{device.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{device.subtitle}</p>
                  <div className="mb-4 space-y-1">
                    <p className="text-sm text-gray-600">Buy for <span className="font-bold text-purple-600 text-lg">{device.buyPrice}</span></p>
                    <p className="text-sm text-gray-500">or Subscribe for <span className="font-bold text-purple-600 text-lg">{device.subPrice}</span></p>
                    {device.shipping && <p className="text-xs text-green-600 font-medium">{device.shipping}</p>}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" data-testid={`pricing-btn-${device.id}`}>
                        Pricing
                      </Button>
                    </DialogTrigger>
                    <PricingModal device={device} />
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMPLETE CLOVER STATION SYSTEMS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">Complete Clover Station Systems</h2>
          <p className="text-center text-gray-600 mb-12">Full-featured POS solutions for your business</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Clover Solo */}
            <Card className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl" data-testid="station-card-solo">
              <CardContent className="p-6">
                <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/ip9swahq_clover_station_solo.png" alt="clover-station-pos-system" className="w-full h-full object-contain p-2" style={{ mixBlendMode: 'multiply' }} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Clover Station Solo</h3>
                <p className="text-sm text-gray-500 mb-4">Complete countertop POS system</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Buy for <span className="font-bold text-purple-600 text-xl">$1,999</span></p>
                  <p className="text-sm text-gray-500">or <span className="font-bold text-purple-600 text-lg">$99/mo</span> for 36 months</p>
                </div>
                <div className="mb-6 bg-gray-50 rounded-lg p-3 space-y-1">
                  <p className="text-xs font-semibold text-gray-700">Software:</p>
                  <p className="text-xs text-gray-600">Retail: $84.95/mo (1st device) + $19.95 add'l</p>
                  <p className="text-xs text-gray-600">Restaurant: $89.95/mo (1st device) + $19.95 add'l</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" data-testid="pricing-btn-station-solo">Pricing</Button>
                  </DialogTrigger>
                  <PricingModal device={{ id: 'clover-station-solo', name: 'Clover Station Solo', subtitle: 'Full POS System', monthlyFee: '$84.95/month software' }} />
                </Dialog>
              </CardContent>
            </Card>

            {/* Clover Duo */}
            <Card className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl" data-testid="station-card-duo">
              <CardContent className="p-6">
                <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/0hmeybl3_clover%20station%20duo.png" alt="clover-station-duo-pos" className="w-full h-full object-contain p-2" style={{ mixBlendMode: 'multiply' }} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Clover Station Duo</h3>
                <p className="text-sm text-gray-500 mb-4">Dual-screen POS system</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Buy for <span className="font-bold text-purple-600 text-xl">$2,199</span></p>
                  <p className="text-sm text-gray-500">or <span className="font-bold text-purple-600 text-lg">$119/mo</span> for 36 months</p>
                </div>
                <div className="mb-6 bg-gray-50 rounded-lg p-3 space-y-1">
                  <p className="text-xs font-semibold text-gray-700">Software:</p>
                  <p className="text-xs text-gray-600">Retail: $84.95/mo (1st device) + $19.95 add'l</p>
                  <p className="text-xs text-gray-600">Restaurant: $89.95/mo (1st device) + $19.95 add'l</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" data-testid="pricing-btn-station-duo">Pricing</Button>
                  </DialogTrigger>
                  <PricingModal device={{ id: 'clover-station-duo', name: 'Clover Station Duo', subtitle: 'Dual-Screen POS', monthlyFee: '$84.95/month software' }} />
                </Dialog>
              </CardContent>
            </Card>

            {/* Clover Kiosk */}
            <Card className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl" data-testid="station-card-kiosk">
              <CardContent className="p-6">
                <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/787vimmt_kiosk-qsr-restaurant-image__1_.webp" alt="clover-kiosk-self-ordering" className="w-full h-full object-contain p-2" style={{ mixBlendMode: 'multiply' }} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Clover Kiosk</h3>
                <p className="text-sm text-gray-500 mb-4">Self-service kiosk system</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Buy for <span className="font-bold text-purple-600 text-xl">$4,595</span></p>
                  <p className="text-sm text-gray-500">or <span className="font-bold text-purple-600 text-lg">$199/mo</span> for 36 months</p>
                </div>
                <div className="mb-6 bg-gray-50 rounded-lg p-3 space-y-1">
                  <p className="text-xs font-semibold text-gray-700">Software:</p>
                  <p className="text-xs text-gray-600">Kiosk SaaS fee: $34.95/mo per Kiosk</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" data-testid="pricing-btn-kiosk">Pricing</Button>
                  </DialogTrigger>
                  <PricingModal device={{ id: 'clover-kiosk', name: 'Clover Kiosk', subtitle: 'Self-Service System', monthlyFee: '$34.95/month software' }} />
                </Dialog>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-xs text-gray-500 mt-8">Final pricing shown after approval</p>
        </div>
      </section>

      {/* 6. DEVICE COMPARISON TABLE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">Which Clover Device Is Right for Your Business?</h2>
          <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">Compare Clover devices to find the best fit for your business size and needs.</p>
          <div className="bg-white rounded-2xl shadow-lg overflow-x-auto border border-gray-200" data-testid="clover-device-table">
            <table className="w-full min-w-[650px]">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <th className="text-left py-4 px-5 font-semibold">Device</th>
                  <th className="text-left py-4 px-5 font-semibold">Best For</th>
                  <th className="text-center py-4 px-5 font-semibold">Mobility</th>
                  <th className="text-center py-4 px-5 font-semibold">Printer</th>
                  <th className="text-center py-4 px-5 font-semibold">Display</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Clover Station Solo', 'Full-service restaurants & retail', 'No', 'Yes', '14"'],
                  ['Clover Station Duo', 'High-volume restaurants & retail', 'No', 'Yes', '14" + 8"'],
                  ['Clover Mini', 'Small counters & QSR', 'No', 'Yes', '8"'],
                  ['Clover Flex', 'Mobile businesses & tableside', 'Yes', 'Yes', '6"'],
                  ['Clover Compact', 'Payment-focused countertops', 'No', 'Yes', '4"'],
                  ['Clover Go', 'Mobile vendors & field service', 'Yes', 'No', 'Phone'],
                ].map(([device, bestFor, mobile, printer, display], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3.5 px-5 font-semibold text-gray-900">{device}</td>
                    <td className="py-3.5 px-5 text-gray-700">{bestFor}</td>
                    <td className="py-3.5 px-5 text-center">{mobile === 'Yes' ? <CheckCircle className="h-5 w-5 text-purple-500 mx-auto" /> : <span className="text-gray-400">-</span>}</td>
                    <td className="py-3.5 px-5 text-center">{printer === 'Yes' ? <CheckCircle className="h-5 w-5 text-purple-500 mx-auto" /> : <span className="text-gray-400">-</span>}</td>
                    <td className="py-3.5 px-5 text-center text-gray-700">{display}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. CLOVER POS BY INDUSTRY */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Clover POS Systems by Industry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: UtensilsCrossed, title: 'Restaurant POS', desc: 'Clover for restaurants includes table management with floor plan layouts, tip management on the customer-facing screen, kitchen display system (KDS) integration for order routing, and online ordering for pickup and delivery. The Clover Dining app turns your Station into a full restaurant management platform.', link: '/restaurant-payment-processing-services', features: ['Table management', 'Tipping on screen', 'Kitchen display integration', 'Online ordering'] },
              { icon: ShoppingBag, title: 'Retail POS', desc: 'Clover for retail provides barcode scanning, inventory tracking with product variants (size, color), purchase order management, and multi-location inventory sync. The system tracks stock automatically and generates reorder alerts when items run low.', link: '/retail-payment-solutions', features: ['Barcode scanning', 'Inventory tracking', 'Product variants', 'Multi-location sync'] },
              { icon: Scissors, title: 'Salon POS', desc: 'Clover integrates with salon scheduling apps for appointment booking, client profile management, recurring membership billing, and employee commission tracking. Businesses can send automated reminders and manage their entire client relationship through the POS.', link: '/salon-spa-payment-processing', features: ['Appointment scheduling', 'Client profiles', 'Commission tracking', 'Membership billing'] },
              { icon: Briefcase, title: 'Service Business POS', desc: 'Service businesses use Clover for mobile payments with Clover Go and Flex, invoicing from the dashboard, estimate and quote generation, and customer database management. Clover Flex is especially popular for field service work and on-location billing.', link: '/professional-services-payment-processing-clover-pos', features: ['Mobile payments', 'Invoicing', 'Quote generation', 'Customer database'] },
            ].map((ind, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-purple-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <ind.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{ind.title}</h3>
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{ind.desc}</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {ind.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {f}
                    </div>
                  ))}
                </div>
                <Link to={ind.link} className="text-purple-600 font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  Learn more <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE MERCHANT SOLUTIONS */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Get Your Clover POS Through Merchant Solutions?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Clover's website does not offer professional installation, onsite training, or dedicated local support. That is where Merchant Solutions makes the difference.
              </p>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: 'Professional installation (Nationwide)', desc: 'Our certified technicians install and configure your system onsite.' },
                  { icon: UtensilsCrossed, label: 'Menu and inventory setup', desc: 'We build your menu, import your inventory, and configure categories before you open.' },
                  { icon: GraduationCap, label: 'Staff training', desc: 'Hands-on training for your team so they are confident from day one.' },
                  { icon: Headphones, label: 'Local support', desc: 'Dedicated support from a real team, not a call center.' },
                  { icon: CreditCard, label: 'Competitive processing rates', desc: 'Custom interchange-plus pricing that can save you hundreds per month.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{item.label}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/889xwcgb_IT%20tech_installer.png" alt="MSC technician installing Clover POS" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. INSTALLATION AND SETUP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Clover POS Installation and Setup</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Choose Hardware', desc: 'Select the Clover device that fits your business. Our team helps you choose the right hardware based on your industry and transaction volume.', color: 'bg-purple-600' },
              { step: '2', title: 'Configure Software', desc: 'We set up your Clover software including menus, inventory categories, employee accounts, tax settings, and receipt templates before installation day.', color: 'bg-purple-500' },
              { step: '3', title: 'Install Hardware', desc: 'A certified technician arrives at your location, installs the hardware, connects printers and peripherals, and tests every payment method.', color: 'bg-blue-500' },
              { step: '4', title: 'Train Staff', desc: 'Hands-on training for your team covering transactions, refunds, reports, inventory management, and any specific workflows your business needs.', color: 'bg-blue-600' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className={`w-16 h-16 ${s.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg`}>
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/solutions/it-services">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                Learn About Our Installation Services <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. $0 UPFRONT PROGRAM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">How Much Does Clover POS Cost?</h2>
            <p className="text-lg text-gray-700 mb-2">Clover POS pricing has three components: hardware, software subscriptions, and payment processing fees.</p>
            <p className="text-lg text-gray-600 italic">"Our Clover system is available with $0 upfront for qualified businesses using our Dual Pricing program."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <Card className="border-purple-200">
              <CardContent className="p-6 text-center">
                <CreditCard className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Hardware</h3>
                <p className="text-sm text-gray-600">Ranges from the compact Clover Go reader to full Clover Station systems. Qualified businesses may receive hardware at no upfront cost through our placement program.</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardContent className="p-6 text-center">
                <Settings className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Software</h3>
                <p className="text-sm text-gray-600">Monthly SaaS subscription fees vary by plan. Starter plans begin at $14.95/month, with advanced restaurant and retail plans available for higher-volume businesses.</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Processing</h3>
                <p className="text-sm text-gray-600">Payment processing rates depend on your business type and volume. Merchant Solutions offers competitive interchange-plus and flat-rate pricing options.</p>
              </CardContent>
            </Card>
          </div>

          <Accordion type="single" collapsible className="space-y-3 mt-10">
            <AccordionItem value="step-1" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Step 1 — Get Started With $0 Down
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>No upfront hardware cost</li>
                  <li>Equipment is provided under a monthly subscription</li>
                  <li>Approval based on creditworthiness</li>
                  <li>Processing runs on Dual Pricing (4%–5% program)</li>
                </ul>
                <p className="font-medium text-gray-800">You can begin accepting payments right away.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-2" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Step 2 — Performance Qualification (First 30 Days)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">During your first 30 processing days, you agree to process at least:</p>
                <p className="font-bold text-purple-600 text-lg mb-2">$10,000 per month in card volume</p>
                <p>This determines whether your system becomes free.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-3" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Step 3 — If You Reach $10,000+ Per Month
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">When you meet the requirement:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Your equipment lease is fully reimbursed</li>
                  <li>You receive a <span className="font-semibold text-green-600">$100 Visa reward card</span></li>
                  <li>Your Clover system becomes free</li>
                  <li>No ongoing hardware payments</li>
                  <li>You only keep paying your software fees</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-4" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Step 4 — If You Do Not Reach $10,000
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">If volume stays below $10,000:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Your monthly equipment subscription continues</li>
                  <li>The subscription covers full hardware cost</li>
                  <li>No penalties</li>
                  <li>No surprises</li>
                </ul>
                <p className="mt-2 font-medium text-gray-800">You simply continue on the standard plan.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="subscription" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                What the Subscription Covers
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">The monthly subscription includes:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Clover hardware</li>
                  <li>System activation</li>
                  <li>Programming and installation</li>
                  <li>Ongoing support</li>
                  <li>Replacement assistance</li>
                  <li>Account management</li>
                </ul>
                <p className="mt-2 text-sm text-gray-500">No separate equipment invoice.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="pricing" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Pricing Structure
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">This program runs on our Dual Pricing model:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Customer pays the processing fee</li>
                  <li>Business keeps full sale amount</li>
                  <li>No out-of-pocket processing cost</li>
                  <li>Flat 4% program</li>
                </ul>
                <p className="mt-2 text-sm text-gray-500">This allows us to subsidize hardware.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className="text-gray-600 text-center mt-6">
            Contact us for a custom quote based on your business. <Link to="/contact" className="text-purple-600 font-semibold hover:underline">Get a free pricing consultation</Link>.
          </p>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-20 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Clover POS FAQ</h2>
          <FAQItem question="What is Clover POS?" answer="Clover POS is a cloud-based point of sale system that combines payment processing, inventory management, employee tracking, and business reporting into a single platform. It runs on Clover's proprietary Android-based hardware devices including Station, Mini, Flex, Compact, and Go." />
          <FAQItem question="How much does Clover POS cost?" answer="Clover POS costs vary depending on your hardware choice and software plan. Hardware ranges from compact readers to full station systems. Monthly software plans start at $14.95/month. Processing rates are customized based on your business type and volume. Qualified businesses may receive hardware at no upfront cost through Merchant Solutions' placement program." />
          <FAQItem question="Is Clover good for restaurants?" answer="Yes. Clover is one of the most popular restaurant POS systems available. It includes table management, kitchen display system (KDS) integration, tip management, online ordering, and menu modifier support. The Clover Station Duo with its customer-facing screen is especially popular for full-service restaurants." />
          <FAQItem question="Does Clover accept tap to pay?" answer="Yes. Every Clover device accepts contactless NFC payments including Apple Pay, Google Pay, Samsung Pay, and contactless credit and debit cards. Tap to pay is supported on the Station, Mini, Flex, Compact, and Go devices." />
          <FAQItem question="Which Clover device is best for small businesses?" answer="The Clover Mini is the most popular choice for small businesses. It offers full POS functionality including a touchscreen, built-in printer, and complete software access in a compact form factor. For mobile businesses, the Clover Go paired with a smartphone is the most affordable starting point." />
          <FAQItem question="Can Clover track inventory?" answer="Yes. Clover includes built-in inventory management across all plans. You can track stock levels, set low-stock alerts, manage product variants (size, color), view inventory reports, and sync inventory across multiple locations. Advanced inventory features are available through Clover's app marketplace." />
        </div>
      </section>

      {/* CLOVER PROGRAM FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Clover Program</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="faq-1" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">Can I upgrade my old Clover hardware?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-3">Yes. If you currently use older Clover equipment, you may qualify for our upgrade program.</p>
                <p className="mb-2">We can:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Replace legacy models with newer generation devices</li>
                  <li>Transition you into our Dual Pricing program</li>
                  <li>Evaluate you for the $0-Upfront reimbursement offer</li>
                </ul>
                <p className="text-sm text-gray-500">Approval depends on processing volume and account status.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">Can I purchase a new Clover if I already own one?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-3">Yes, however, we cannot sync with another Clover from a different vendor. We would need to replace the other equipment and provide you with a full upgrade.</p>
                <p className="mb-2">If you already own a Clover device, you can:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Add additional terminals</li>
                  <li>Upgrade to a Station Solo or Duo</li>
                  <li>Apply for the Free Placement program (volume requirements apply)</li>
                </ul>
                <p className="text-sm text-gray-500">Each device is evaluated based on monthly processing per terminal.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">What if I no longer want to use Clover? What is the return policy?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">We offer a 30-day return window.</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Returns must be requested within 30 days of delivery</li>
                  <li>A 20% restocking fee applies</li>
                  <li>An approved RMA (Return Merchandise Authorization) is required</li>
                  <li>Equipment must be in good condition and original box</li>
                </ul>
                <p className="font-medium text-gray-800">Returns without an RMA will not be accepted.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">I am in Puerto Rico or USVI. Can I qualify for your programs?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-3">Yes. We support merchants in Puerto Rico and US territories.</p>
                <p className="mb-2">Eligibility depends on:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Business type</li>
                  <li>Processing volume</li>
                  <li>Program approval</li>
                  <li>Credit score</li>
                </ul>
                <p className="text-sm text-gray-500">The same qualification standards apply as in the mainland United States.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-5" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">Is there a contract required for the $0-Upfront program?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">Yes. The Free Placement program requires:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Enrollment in our Dual Pricing program</li>
                  <li>A processing agreement for min 36 months</li>
                  <li>Meeting minimum volume requirements</li>
                </ul>
                <p className="text-sm text-gray-500">If volume targets are not met, subscription terms continue as agreed. All terms are disclosed before activation.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-6" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">What happens if I process less than the required monthly volume?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">If you do not meet the required monthly volume:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Your equipment subscription continues</li>
                  <li>Reimbursement does not apply</li>
                  <li>Standard program pricing remains in effect</li>
                </ul>
                <p className="mb-1">There are no hidden penalties.</p>
                <p className="text-sm text-gray-500">You simply remain on the active subscription plan.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-7" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">How is my monthly processing volume calculated?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">Monthly processing volume is based on:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Total approved card transactions — Visa, Mastercard, Discover, Amex, and Pin Debit</li>
                  <li>Processor-generated reporting / Merchant Statement</li>
                  <li>A standard 30-day cycle</li>
                </ul>
                <p className="text-sm text-gray-500">Volume is measured per terminal when multiple devices are installed.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 pt-10 border-t border-gray-200 text-center">
            <p className="text-xl font-semibold text-gray-900 mb-4">Do you still have more questions?</p>
            <Button size="lg" onClick={() => setShowFormModal(true)} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="contact-sales-btn">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Start Using Clover POS Today</h2>
          <p className="text-xl text-purple-100 mb-8">Get help choosing the right Clover device for your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#hardware">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" data-testid="cta-pricing-btn">
                Get Clover POS Pricing
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" onClick={openCalendly} data-testid="cta-consultation-btn">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 text-center mb-4">Related Pages</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'POS Systems Overview', path: '/pos-systems' },
              { label: 'Payment Terminals', path: '/pos/payment-terminals-overview' },
              { label: 'Restaurant POS', path: '/restaurant-payment-processing-services' },
              { label: 'Retail POS', path: '/retail-payment-solutions' },
              { label: 'Self Ordering Kiosk', path: '/best-self-ordering-kiosk-for-restaurants' },
            ].map((link, i) => (
              <Link key={i} to={link.path} className="text-sm text-purple-600 bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM MODAL */}
      {showFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowFormModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowFormModal(false)} className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors" data-testid="close-form-modal">&#x2715;</button>
            <iframe src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" className="w-full h-[80vh] border-0 rounded-2xl" title="Start Saving Today" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CloverPOS;
