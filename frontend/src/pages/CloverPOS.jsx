import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown, ChevronRight, CreditCard, Shield, Zap, BarChart3, Package, Users, Heart, UtensilsCrossed, ShoppingBag, Scissors, Briefcase, Settings, GraduationCap, Smartphone, MapPin, Headphones, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

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

const CloverPOS = () => {
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

  const devices = [
    {
      name: 'Clover Station Solo',
      desc: 'A full-size countertop POS with a 14-inch HD display, built-in receipt printer, and a powerful Android operating system. Ideal for restaurants, retail stores, and service businesses that need a comprehensive command center for payments, inventory, and employee management.',
      image: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/ip9swahq_clover_station_solo.png',
      imgBg: 'bg-gray-100',
    },
    {
      name: 'Clover Station Duo',
      desc: 'A dual-screen POS system with a merchant-facing display and a customer-facing touchscreen for tipping, signatures, and receipts. Built for high-volume restaurants and retail stores that want a premium checkout experience with faster throughput.',
      image: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/0hmeybl3_clover%20station%20duo.png',
      imgBg: 'bg-black',
    },
    {
      name: 'Clover Mini',
      desc: 'A compact countertop POS terminal with an 8-inch touchscreen, built-in receipt printer, and full Clover software capabilities. Perfect for small counters, quick-service restaurants, and businesses with limited space that still need full POS functionality.',
      image: 'https://customer-assets.emergentagent.com/job_98ba5cc9-5a8c-49ab-a17a-dde6797f516c/artifacts/p5xhph2u_clover%20mini%203%20gen.jfif',
      imgBg: 'bg-white',
    },
    {
      name: 'Clover Flex',
      desc: 'A handheld, wireless POS device with a touchscreen, built-in printer, camera for barcode scanning, and all-day battery life. Designed for tableside ordering, curbside pickup, mobile businesses, and anywhere you need to take payments on the move.',
      image: 'https://customer-assets.emergentagent.com/job_98ba5cc9-5a8c-49ab-a17a-dde6797f516c/artifacts/y7kn81kb_clover-flex-devices.webp',
      imgBg: 'bg-black',
    },
    {
      name: 'Clover Compact',
      desc: 'A sleek, standalone countertop terminal with a PIN pad, EMV chip reader, NFC contactless payments, and a built-in receipt printer. An affordable option for businesses that need reliable payment acceptance without a full POS system.',
      image: 'https://customer-assets.emergentagent.com/job_98ba5cc9-5a8c-49ab-a17a-dde6797f516c/artifacts/65qe6vpe_Clover%20Compact%202.png',
      imgBg: 'bg-black',
    },
    {
      name: 'Clover Go',
      desc: 'A pocket-sized Bluetooth card reader that pairs with any smartphone or tablet. Accept chip, swipe, and contactless payments anywhere. Perfect for mobile vendors, field service professionals, and businesses that accept payments on location.',
      image: 'https://customer-assets.emergentagent.com/job_98ba5cc9-5a8c-49ab-a17a-dde6797f516c/artifacts/x2s76bmc_Clover%20GO.jpeg',
      imgBg: 'bg-white',
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Clover POS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Clover POS is a cloud-based point of sale system that combines payment processing, inventory management, employee tracking, and business reporting into a single platform. It runs on Clover's proprietary Android-based hardware devices including Station, Mini, Flex, Compact, and Go."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Clover POS cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Clover POS costs vary depending on your hardware choice and software plan. Hardware ranges from compact readers to full station systems. Monthly software plans start at $14.95/month. Processing rates are customized based on your business type and volume. Qualified businesses may receive hardware at no upfront cost through Merchant Solutions' placement program."
        }
      },
      {
        "@type": "Question",
        "name": "Is Clover good for restaurants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Clover is one of the most popular restaurant POS systems available. It includes table management, kitchen display system (KDS) integration, tip management, online ordering, and menu modifier support. The Clover Station Duo with its customer-facing screen is especially popular for full-service restaurants."
        }
      },
      {
        "@type": "Question",
        "name": "Does Clover accept tap to pay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every Clover device accepts contactless NFC payments including Apple Pay, Google Pay, Samsung Pay, and contactless credit and debit cards. Tap to pay is supported on the Station, Mini, Flex, Compact, and Go devices."
        }
      },
      {
        "@type": "Question",
        "name": "Which Clover device is best for small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Clover Mini is the most popular choice for small businesses. It offers full POS functionality including a touchscreen, built-in printer, and complete software access in a compact form factor. For mobile businesses, the Clover Go paired with a smartphone is the most affordable starting point."
        }
      },
      {
        "@type": "Question",
        "name": "Can Clover track inventory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Clover includes built-in inventory management across all plans. You can track stock levels, set low-stock alerts, manage product variants (size, color), view inventory reports, and sync inventory across multiple locations. Advanced inventory features are available through Clover's app marketplace."
        }
      }
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

      {/* 1. HERO */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden bg-gray-900 flex items-center">
        <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/9cuaw0s3_as234.jpg" alt="Clover POS system in a restaurant" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-green-900/40 to-gray-900/70" />
        <div className="relative z-10 w-full py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/fga5kaim_Clover%20logo.jpg" alt="Clover" className="h-12 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg" data-testid="clover-hero-h1">
              Clover POS System for Restaurants, Retail and Service Businesses
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accept payments, manage inventory and run your business with Clover POS systems, including Clover Station, Mini, Flex and Compact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="#hardware">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-pricing-btn">
                  Get Clover POS Pricing
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-700 text-lg px-8 py-6" onClick={openCalendly} data-testid="hero-demo-btn">
                Schedule a Demo
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              <Shield className="inline h-4 w-4 mr-1 text-green-400" /> Clover Authorized Partner &nbsp;|&nbsp; <Settings className="inline h-4 w-4 mr-1 text-green-400" /> Professional Installation &nbsp;|&nbsp; <Headphones className="inline h-4 w-4 mr-1 text-green-400" /> Ongoing Support
            </p>
          </div>
        </div>
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
                Whether you run a busy restaurant kitchen, a retail store with barcode inventory, or a salon with appointment scheduling, Clover adapts to your business with its large app marketplace and flexible software plans. New businesses may qualify for a <Link to="/pricing/free-pos" className="text-green-600 font-semibold hover:underline">free Clover POS</Link> through our placement program.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100">
              <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/t767mlcn_kds-built-for-restaurant-image-desktop.webp" alt="Clover POS kitchen display system" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Benefits of Clover POS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Zap, title: 'Fast Checkout', desc: 'Process transactions in seconds with tap-to-pay, chip, swipe, and mobile wallet acceptance on every Clover device.' },
              { icon: Package, title: 'Inventory Management', desc: 'Track stock automatically, set low-stock alerts, and manage product variants across all sales channels.' },
              { icon: Users, title: 'Employee Management', desc: 'Manage shifts, track hours, set permissions, and monitor employee sales performance from one dashboard.' },
              { icon: BarChart3, title: 'Sales Reporting', desc: 'Access real-time sales data, daily reports, top-selling items, and trends from your Clover dashboard or phone.' },
              { icon: Heart, title: 'Customer Loyalty', desc: 'Build repeat business with built-in loyalty programs, points tracking, digital receipts, and customer profiles.' },
            ].map((b, i) => (
              <Card key={i} className="border hover:border-green-300 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <b.icon className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-600">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HARDWARE */}
      <section id="hardware" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">Clover POS Hardware Options</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Clover offers several POS hardware devices designed for different types of businesses.
          </p>
          <div className="space-y-16">
            {devices.map((device, i) => {
              const isImageLeft = i % 2 === 0;
              return (
                <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                  <div className={isImageLeft ? 'order-1' : 'order-1 lg:order-2'}>
                    <div className={`rounded-2xl overflow-hidden shadow-lg ${device.imgBg} p-4 flex items-center justify-center`}>
                      <img src={device.image} alt={device.name} className="max-h-[350px] object-contain" />
                    </div>
                  </div>
                  <div className={isImageLeft ? 'order-2' : 'order-2 lg:order-1'}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{device.name}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{device.desc}</p>
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50" onClick={openCalendly}>
                      Learn More About {device.name} <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. DEVICE COMPARISON */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">Which Clover Device Is Right for Your Business?</h2>
          <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Compare Clover devices to find the best fit for your business size and needs.
          </p>
          <div className="bg-white rounded-2xl shadow-lg overflow-x-auto border border-gray-200" data-testid="clover-device-table">
            <table className="w-full min-w-[650px]">
              <thead>
                <tr className="bg-gradient-to-r from-green-600 to-green-700 text-white">
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
                    <td className="py-3.5 px-5 text-center">{mobile === 'Yes' ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-400">-</span>}</td>
                    <td className="py-3.5 px-5 text-center">{printer === 'Yes' ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-400">-</span>}</td>
                    <td className="py-3.5 px-5 text-center text-gray-700">{display}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRY SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Clover POS Systems by Industry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: UtensilsCrossed, title: 'Restaurant POS', desc: 'Clover for restaurants includes table management with floor plan layouts, tip management on the customer-facing screen, kitchen display system (KDS) integration for order routing, and online ordering for pickup and delivery. The Clover Dining app turns your Station into a full restaurant management platform.', link: '/restaurant-payment-processing-services', features: ['Table management', 'Tipping on screen', 'Kitchen display integration', 'Online ordering'] },
              { icon: ShoppingBag, title: 'Retail POS', desc: 'Clover for retail provides barcode scanning, inventory tracking with product variants (size, color), purchase order management, and multi-location inventory sync. The system tracks stock automatically and generates reorder alerts when items run low.', link: '/retail-payment-solutions', features: ['Barcode scanning', 'Inventory tracking', 'Product variants', 'Multi-location sync'] },
              { icon: Scissors, title: 'Salon POS', desc: 'Clover integrates with salon scheduling apps for appointment booking, client profile management, recurring membership billing, and employee commission tracking. Businesses can send automated reminders and manage their entire client relationship through the POS.', link: '/salon-spa-payment-processing', features: ['Appointment scheduling', 'Client profiles', 'Commission tracking', 'Membership billing'] },
              { icon: Briefcase, title: 'Service Business POS', desc: 'Service businesses use Clover for mobile payments with Clover Go and Flex, invoicing from the dashboard, estimate and quote generation, and customer database management. Clover Flex is especially popular for field service work and on-location billing.', link: '/professional-services-payment-processing-clover-pos', features: ['Mobile payments', 'Invoicing', 'Quote generation', 'Customer database'] },
            ].map((ind, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-green-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <ind.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{ind.title}</h3>
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{ind.desc}</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {ind.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> {f}
                    </div>
                  ))}
                </div>
                <Link to={ind.link} className="text-green-600 font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  Learn more <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY MERCHANT SOLUTIONS */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
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
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="h-5 w-5 text-green-600" />
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

      {/* 8. INSTALLATION PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Clover POS Installation and Setup</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Choose Hardware', desc: 'Select the Clover device that fits your business. Our team helps you choose the right hardware based on your industry and transaction volume.', color: 'bg-green-600' },
              { step: '2', title: 'Configure Software', desc: 'We set up your Clover software including menus, inventory categories, employee accounts, tax settings, and receipt templates before installation day.', color: 'bg-green-500' },
              { step: '3', title: 'Install Hardware', desc: 'A certified technician arrives at your location, installs the hardware, connects printers and peripherals, and tests every payment method.', color: 'bg-emerald-500' },
              { step: '4', title: 'Train Staff', desc: 'Hands-on training for your team covering transactions, refunds, reports, inventory management, and any specific workflows your business needs.', color: 'bg-emerald-600' },
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
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Learn About Our Installation Services <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. PRICING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6">How Much Does Clover POS Cost?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Clover POS pricing has three components: hardware, software subscriptions, and payment processing fees.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-green-200">
                <CardContent className="p-6 text-center">
                  <CreditCard className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Hardware</h3>
                  <p className="text-sm text-gray-600">Ranges from the compact Clover Go reader to full Clover Station systems. Qualified businesses may receive hardware at no upfront cost through our placement program.</p>
                </CardContent>
              </Card>
              <Card className="border-green-200">
                <CardContent className="p-6 text-center">
                  <Settings className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Software</h3>
                  <p className="text-sm text-gray-600">Monthly SaaS subscription fees vary by plan. Starter plans begin at $14.95/month, with advanced restaurant and retail plans available for higher-volume businesses.</p>
                </CardContent>
              </Card>
              <Card className="border-green-200">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Processing</h3>
                  <p className="text-sm text-gray-600">Payment processing rates depend on your business type and volume. Merchant Solutions offers competitive interchange-plus and flat-rate pricing options.</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-gray-600 text-center">
              Contact us for a custom quote based on your business. <Link to="/contact" className="text-green-600 font-semibold hover:underline">Get a free pricing consultation</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
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

      {/* 11. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Start Using Clover POS Today</h2>
          <p className="text-xl text-green-100 mb-8">
            Get help choosing the right Clover device for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#hardware">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" data-testid="cta-pricing-btn">
                Get Clover POS Pricing
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-6" onClick={openCalendly} data-testid="cta-consultation-btn">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Internal Links */}
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
              <Link key={i} to={link.path} className="text-sm text-green-600 bg-green-50 px-4 py-2 rounded-full hover:bg-green-100 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloverPOS;
