import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown, ChevronRight, CreditCard, Shield, Zap, Wifi, Smartphone, Monitor, Radio, Lock, BarChart3, Settings, GraduationCap, Headphones, MapPin, UtensilsCrossed, ShoppingBag, Scissors, Fuel, Truck, Building2, Store } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

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

export default function PaymentTerminalsOverview() {
  const [showFormModal, setShowFormModal] = useState(false);

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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is a payment terminal?", "acceptedAnswer": { "@type": "Answer", "text": "A payment terminal is a device that allows businesses to accept credit cards, debit cards and digital wallet payments. It reads card information and communicates with payment networks to authorize and process transactions." } },
      { "@type": "Question", "name": "Do payment terminals accept tap to pay?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most modern terminals support NFC contactless payments including Apple Pay and Google Pay." } },
      { "@type": "Question", "name": "What is the difference between a POS system and a payment terminal?", "acceptedAnswer": { "@type": "Answer", "text": "A payment terminal processes card payments while a POS system manages orders, inventory and reporting. Some smart terminals combine both functions." } },
      { "@type": "Question", "name": "Can payment terminals connect to POS systems?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many terminals integrate directly with POS software platforms including Clover, Square, and other systems." } },
      { "@type": "Question", "name": "Which payment terminal is best for small businesses?", "acceptedAnswer": { "@type": "Answer", "text": "The best terminal depends on business type, payment volume and mobility needs. Countertop terminals are popular for retail, wireless for restaurants, and mobile readers for field service." } }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Payment Terminals for Businesses | Clover, Ingenico, PAX &amp; Dejavoo</title>
        <meta property="og:title" content="Payment Terminals for Businesses | Clover, Ingenico, PAX &amp; Dejavoo" />
        <meta property="og:description" content="Compare modern payment terminals for businesses, including Clover, Ingenico, PAX and Dejavoo credit card machines. Accept chip, tap and mobile payments with reliable countertop and wireless terminals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/payment-terminals" />
        <meta name="description" content="Compare modern payment terminals for businesses, including Clover, Ingenico, PAX and Dejavoo credit card machines. Accept chip, tap and mobile payments with reliable countertop and wireless terminals." />
        <meta name="keywords" content="payment terminals, credit card machines, card machines for business, credit card terminal for small business, EMV payment terminal, countertop credit card machine, wireless payment terminal, Clover terminal, Ingenico terminal, PAX payment terminal, Dejavoo credit card terminal" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/payment-terminals" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Payment Terminals","serviceType":"Payment Terminal Sales and Deployment","provider":{"@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com"},"areaServed":"United States","url":"https://merchantsolutionscorp.com/payment-terminals","description":"Payment terminals overview including countertop, wireless, and mobile options from Merchant Solutions Corp."})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://merchantsolutionscorp.com/"},{"@type":"ListItem","position":2,"name":"POS Systems","item":"https://merchantsolutionscorp.com/pos-systems"},{"@type":"ListItem","position":3,"name":"Payment Terminals","item":"https://merchantsolutionscorp.com/payment-terminals"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com","logo":"https://merchantsolutionscorp.com/logo.png","sameAs":["https://www.facebook.com/merchantsolutionscorp/","https://www.instagram.com/merchant_solutions_corp","https://www.linkedin.com/company/merchantsolutionscorp/","https://www.youtube.com/merchantsolutionscorp"]})}</script>
      </Helmet>

      {/* 1. HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="terminals-hero-h1">
                Payment Terminals for Modern Businesses
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                Accept chip cards, contactless payments and mobile wallets with reliable payment terminals designed for retail stores, restaurants and service businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="hero-contact-btn">
                  Contact Sales
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6" onClick={openCalendly} data-testid="hero-book-btn">
                  Book a 30-Minute Call
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400" data-testid="trust-line">
                <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-purple-400" /> Secure EMV Terminals</span>
                <span className="flex items-center gap-1.5"><Radio className="h-4 w-4 text-purple-400" /> Tap-to-Pay Ready</span>
                <span className="flex items-center gap-1.5"><CreditCard className="h-4 w-4 text-purple-400" /> Trusted Payment Hardware</span>
                <span className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-purple-400" /> PCI Level Certified</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1750262701480-91fc40e726ba?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwyfHxjcmVkaXQlMjBjYXJkJTIwcGF5bWVudCUyMHRlcm1pbmFsJTIwcG9zJTIwbWFjaGluZXxlbnwwfHx8fDE3NzI5OTI1OTl8MA&ixlib=rb-4.1.0&q=85" alt="credit-card-payment-terminal" className="w-full h-[420px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS A PAYMENT TERMINAL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What is a Payment Terminal?</h2>
              <p className="text-lg text-gray-700 mb-4">
                A payment terminal is a device that allows businesses to securely accept credit cards, debit cards and digital wallet payments. These terminals read the customer's card information and communicate with payment networks to authorize and process transactions.
              </p>
              <p className="text-gray-700 mb-4">Modern payment terminals support multiple payment types including:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {['Chip card payments (EMV)', 'Contactless tap-to-pay cards', 'Mobile wallets (Apple Pay, Google Pay)', 'Magnetic stripe cards'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mb-3">
                Businesses use payment terminals at checkout counters, tableside in restaurants, or on mobile devices for service businesses.
              </p>
              <p className="text-gray-600">
                Payment terminals can operate as standalone devices or integrate with full <Link to="/pos-systems" className="text-purple-600 font-semibold hover:underline">POS systems</Link> to manage orders, inventory and reporting.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1750262701487-4ca222c89ef4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxyZXRhaWwlMjBzdG9yZSUyMGNoZWNrb3V0JTIwY291bnRlciUyMGNhcmQlMjByZWFkZXJ8ZW58MHx8fHwxNzcyOTkyNjExfDA&ixlib=rb-4.1.0&q=85" alt="customer-using-payment-terminal-at-checkout" className="w-full h-[380px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">Benefits of Using Payment Terminals</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">Modern payment terminals help businesses process transactions faster, accept more payment types, and serve customers with confidence.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Zap, title: 'Fast Checkout', desc: 'Modern payment terminals process transactions quickly, helping businesses reduce wait times and serve more customers efficiently.' },
              { icon: Radio, title: 'Contactless Payments', desc: 'Accept tap-to-pay cards and mobile wallets including Apple Pay, Google Pay, and Samsung Pay on every modern terminal.' },
              { icon: Lock, title: 'Secure Transactions', desc: 'EMV chip technology protects transactions using encrypted communication between the terminal and payment processor.' },
              { icon: Wifi, title: 'Flexible Connectivity', desc: 'Many payment terminals support WiFi, Ethernet, Bluetooth, and 4G cellular connectivity for reliable operation anywhere.' },
              { icon: Smartphone, title: 'Mobility for Businesses', desc: 'Portable terminals allow restaurants, delivery services, and field service providers to accept payments anywhere.' },
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

      {/* 4. TYPES OF TERMINALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Types of Payment Terminals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-purple-300 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Monitor className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Countertop Terminals</h3>
                <p className="text-gray-700 mb-4">These terminals sit at a checkout counter and are common in retail stores, restaurants and service businesses.</p>
                <p className="text-sm text-gray-600 mb-2 font-semibold">Typical features include:</p>
                <ul className="space-y-2">
                  {['Built-in receipt printers', 'PIN pad entry', 'Ethernet or WiFi connectivity'].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-300 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Wifi className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wireless Terminals</h3>
                <p className="text-gray-700 mb-4">Portable devices allow payments to be accepted anywhere in or outside the business.</p>
                <p className="text-sm text-gray-600 mb-2 font-semibold">Often used by:</p>
                <ul className="space-y-2">
                  {['Restaurants for tableside payment', 'Delivery drivers', 'Mobile service businesses'].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-300 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Terminals</h3>
                <p className="text-gray-700 mb-4">Smart terminals combine payment processing with touchscreen POS functionality and Android-based operating systems.</p>
                <p className="text-sm text-gray-600 mb-2 font-semibold">Capabilities include:</p>
                <ul className="space-y-2">
                  {['Full POS software', 'App marketplace access', 'Built-in reporting & analytics'].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. BRANDS WE SUPPORT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">Leading Payment Terminal Brands</h2>
          <p className="text-lg text-gray-600 text-center mb-14 max-w-3xl mx-auto">We support the industry's most trusted payment terminal brands to fit every business need.</p>

          <div className="space-y-16">
            {/* Ingenico */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Ingenico Payment Terminals</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Ingenico terminals are widely used by retailers and restaurants around the world. These devices are known for their security, durability and compatibility with POS systems. Popular models support chip cards, contactless payments and mobile wallets.
                </p>
                <Link to="/ingenico-payment-terminals">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6" data-testid="view-ingenico">
                    View Ingenico Terminals <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex items-center justify-center min-h-[260px]">
                <img src="https://customer-assets.emergentagent.com/job_d913f905-fbe6-4eac-a560-43e237e806df/artifacts/aa9xkgf1_Move5000-face.png.webp" alt="ingenico-move-5000-terminal" className="max-h-[280px] w-auto object-contain" />
              </div>
            </div>

            {/* Clover */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/hm5yf2w0_Clover-FlexLRG.jpg" alt="clover-smart-terminal" className="w-full max-w-[280px] mx-auto object-contain" style={{ mixBlendMode: 'multiply' }} />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Clover Payment Terminals</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Clover offers smart payment terminals designed to work with the Clover POS ecosystem. These terminals combine payment processing with POS functionality and reporting tools. Common devices include Clover Flex and Clover Mini.
                </p>
                <Link to="/clover-pos-system">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6" data-testid="view-clover">
                    View Clover Terminals <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* PAX */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">PAX Payment Terminals (Payanywhere)</h3>
                <p className="text-lg text-gray-700 mb-4">
                  PAX smart terminals provide Android-based payment hardware used by many modern POS systems. Popular devices include handheld and countertop terminals designed for mobility and performance.
                </p>
                <Link to="/pax-payment-terminals">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6" data-testid="view-pax">
                    View PAX Terminals <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex items-center justify-center min-h-[260px]">
                <img src="https://customer-assets.emergentagent.com/job_d913f905-fbe6-4eac-a560-43e237e806df/artifacts/307b1972_swipe%20simple%20bundle.png" alt="pax-swipesimple-terminal-bundle" className="max-h-[280px] w-auto object-contain" />
              </div>
            </div>

            {/* Dejavoo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex items-center justify-center min-h-[260px]">
                <img src="https://customer-assets.emergentagent.com/job_d913f905-fbe6-4eac-a560-43e237e806df/artifacts/l37dohxe_03.png" alt="dejavoo-smart-terminal" className="max-h-[280px] w-auto object-contain" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Dejavoo Payment Terminals</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Dejavoo terminals are known for their reliability and flexibility. These devices support countertop and wireless payment environments and are commonly used by small and mid-size businesses.
                </p>
                <Link to="/dejavoo-payment-terminals">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6" data-testid="view-dejavoo">
                    View Dejavoo Terminals <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CHOOSING THE RIGHT TERMINAL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">How to Choose the Right Payment Terminal</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">Businesses should consider several factors when selecting payment hardware.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Store, title: 'Business Type', desc: 'Retail stores often use countertop terminals with receipt printers. Restaurants may prefer wireless devices for tableside payments.' },
              { icon: BarChart3, title: 'Payment Volume', desc: 'High-volume businesses need terminals capable of handling fast transaction speeds and processing hundreds of daily transactions.' },
              { icon: Wifi, title: 'Mobility Needs', desc: 'Service businesses may require wireless or cellular terminals to accept payments at customer locations or in the field.' },
              { icon: Settings, title: 'POS Integration', desc: 'Some terminals connect directly to POS systems while others operate as standalone payment devices with basic reporting.' },
            ].map((f, i) => (
              <Card key={i} className="border hover:border-purple-300 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <f.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">Payment Terminals by Industry</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">Each industry may require different terminal capabilities depending on mobility and transaction volume.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { icon: UtensilsCrossed, label: 'Restaurants', path: '/clover-pos-system' },
              { icon: ShoppingBag, label: 'Retail Stores', path: '/pax-payment-terminals' },
              { icon: Store, label: 'Smoke Shops', path: '/pos/dejavoo-terminals' },
              { icon: Scissors, label: 'Salons', path: '/pos/square' },
              { icon: ShoppingBag, label: 'Grocery', path: '/clover-pos-system' },
              { icon: Building2, label: 'Services', path: '/payanywhere' },
              { icon: Truck, label: 'Food Trucks', path: '/clover-pos-system' },
              { icon: Fuel, label: 'Auto Repair', path: '/payanywhere' },
            ].map((ind, i) => (
              <Link key={i} to={ind.path} className="bg-white rounded-xl p-4 text-center border border-gray-100 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer block">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <ind.icon className="h-5 w-5 text-purple-600" />
                </div>
                <p className="font-semibold text-gray-900 text-xs">{ind.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY MERCHANT SOLUTIONS */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Get Your Payment Terminal Through Merchant Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our team helps businesses select the right terminal and configure it for their operations.
              </p>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: 'Professional hardware setup' },
                  { icon: CreditCard, label: 'Payment processing integration' },
                  { icon: GraduationCap, label: 'Staff training and onboarding' },
                  { icon: BarChart3, label: 'Competitive payment processing rates' },
                  { icon: Headphones, label: 'Ongoing support and troubleshooting' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <p className="font-semibold text-gray-900">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://customer-assets.emergentagent.com/job_d913f905-fbe6-4eac-a560-43e237e806df/artifacts/dr1y25ks_p7-2.jpg" alt="restaurant-tableside-payment-terminal" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-20 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Payment Terminal FAQ</h2>
          <FAQItem question="What is a payment terminal?" answer="A payment terminal is a device that allows businesses to accept credit cards, debit cards and digital wallet payments. It reads card information and communicates with payment networks to authorize and process transactions." />
          <FAQItem question="Do payment terminals accept tap to pay?" answer="Yes. Most modern terminals support NFC contactless payments including Apple Pay and Google Pay." />
          <FAQItem question="What is the difference between a POS system and a payment terminal?" answer="A payment terminal processes card payments while a POS system manages orders, inventory and reporting. Some smart terminals, like those from Clover, combine both functions." />
          <FAQItem question="Can payment terminals connect to POS systems?" answer="Yes. Many terminals integrate directly with POS software platforms including Clover, Square, and other systems." />
          <FAQItem question="Which payment terminal is best for small businesses?" answer="The best terminal depends on business type, payment volume and mobility needs. Countertop terminals are popular for retail, wireless for restaurants, and mobile readers for field service." />
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Start Accepting Card Payments Today</h2>
          <p className="text-xl text-purple-100 mb-8">Modern payment terminals help businesses accept secure payments quickly and efficiently.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="cta-contact-btn">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" onClick={openCalendly} data-testid="cta-book-btn">
              Book a 30-Minute Consultation
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
              { label: 'Restaurant POS', path: '/restaurant-payment-processing-services' },
              { label: 'Retail POS', path: '/retail-payment-solutions' },
              { label: 'Self Ordering Kiosk', path: '/best-self-ordering-kiosk-for-restaurants' },
              { label: 'Payment Processing', path: '/solutions/payment-processing' },
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
            <iframe src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" className="w-full h-[80vh] border-0 rounded-2xl" title="Contact Sales" />
          </div>
        </div>
      )}
    </div>
  );
}
