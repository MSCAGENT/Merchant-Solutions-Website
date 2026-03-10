import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown, ChevronRight, Zap, Users, TrendingUp, ThumbsUp, Clock, Smartphone, QrCode, CreditCard, Shield, Settings, GraduationCap, Headphones, MapPin, UtensilsCrossed, Wine, Coffee, Truck, Building2, Music, Beer } from 'lucide-react';
import { Button } from '../../components/ui/button';
import AIPoweredSection from '../../components/AIPoweredSection';
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

export default function QRCodeOrdering() {
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
      { "@type": "Question", "name": "What is QR code ordering?", "acceptedAnswer": { "@type": "Answer", "text": "QR code ordering allows customers to scan a code and place an order directly from their phone without needing a server or downloading an app." } },
      { "@type": "Question", "name": "Do customers need to download an app?", "acceptedAnswer": { "@type": "Answer", "text": "No. Most QR ordering systems open directly in the phone's browser with no app download required." } },
      { "@type": "Question", "name": "Can QR ordering integrate with POS systems?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Systems like iTabPOS, CloverPOS, and UnionPOS integrate orders directly with the POS and kitchen displays." } },
      { "@type": "Question", "name": "Does QR ordering increase sales?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many restaurants see higher average order values due to automated upselling features built into the digital ordering experience." } },
      { "@type": "Question", "name": "Is QR ordering good for patios and large dining areas?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. It allows servers to manage larger sections efficiently while maintaining fast service, making it ideal for patios, beer gardens, and large venues." } }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>QR Code Mobile Ordering for Restaurants | Self-Ordering System</title>
        <meta property="og:title" content="QR Code Mobile Ordering for Restaurants | Self-Ordering System" />
        <meta property="og:description" content="Enable guests to scan, order and pay from their phone using QR code mobile ordering. Increase table turnover, boost ticket size and reduce wait times with modern self-ordering systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/qr-code-mobile-ordering" />
        <meta name="description" content="Enable guests to scan, order and pay from their phone using QR code mobile ordering. Increase table turnover, boost ticket size and reduce wait times with modern self-ordering systems." />
        <meta name="keywords" content="QR code ordering, QR code restaurant ordering, mobile ordering restaurant system, self ordering restaurant system, QR menu ordering, QR code POS ordering, scan to order restaurant, self service ordering system" />
        <link rel="canonical" href="/qr-code-mobile-ordering" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* 1. HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1770990409852-35b94bf7f2ff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxwaG9uZSUyMHNjYW5uaW5nJTIwcXIlMjBjb2RlJTIwbWVudSUyMHJlc3RhdXJhbnR8ZW58MHx8fHwxNzcyOTk1MDg3fDA&ixlib=rb-4.1.0&q=85" alt="restaurant-dining-background" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl" data-testid="qr-hero-h1">
            QR Code Mobile Ordering for Restaurants and Hospitality Businesses
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Let guests scan a QR code, browse the menu, place their order, and pay directly from their phone — reducing wait times and increasing sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="hero-contact-btn">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6" onClick={openCalendly} data-testid="hero-book-btn">
              Book a 30-Minute Consultation
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400" data-testid="trust-line">
            <span className="flex items-center gap-1.5"><QrCode className="h-4 w-4 text-purple-400" /> Self-Ordering Technology</span>
            <span className="flex items-center gap-1.5"><Settings className="h-4 w-4 text-purple-400" /> Integrated with POS Systems</span>
            <span className="flex items-center gap-1.5"><Building2 className="h-4 w-4 text-purple-400" /> Built for High-Volume Venues</span>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS QR CODE ORDERING */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What is QR Code Mobile Ordering?</h2>
              <p className="text-lg text-gray-700 mb-4">
                QR code mobile ordering allows customers to scan a QR code placed on a table, sign, or menu and instantly access a digital ordering experience on their smartphone.
              </p>
              <p className="text-gray-700 mb-4">Once scanned, customers can:</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {['Browse the menu', 'Customize their order', 'Place the order', 'Pay from their phone'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mb-3">
                Orders are automatically sent to the restaurant's POS system or kitchen display system, allowing staff to focus on food preparation and customer service instead of taking orders.
              </p>
              <p className="text-gray-600">
                This technology is commonly used by restaurants, bars, patios, and hospitality venues that want to streamline service and improve the guest experience.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1761515397001-c8e82879c4c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMHNjYW5uaW5nJTIwcXIlMjBjb2RlJTIwbWVudSUyMHJlc3RhdXJhbnR8ZW58MHx8fHwxNzcyOTk1MDg3fDA&ixlib=rb-4.1.0&q=85" alt="qr-code-restaurant-ordering" className="w-full h-[380px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">How Self-Ordering with QR Codes Works</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">This process removes the need for customers to wait for a server to take their order.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'QR Code on Table', desc: 'A QR code sticker or table marker is placed on each table in your restaurant or venue.', color: 'bg-purple-600' },
              { step: '2', title: 'Guest Scans Code', desc: 'Customers scan the QR code with their smartphone camera — no app download needed.', color: 'bg-purple-500' },
              { step: '3', title: 'Menu Opens', desc: 'The digital menu opens automatically in their browser with full menu items and descriptions.', color: 'bg-blue-600' },
              { step: '4', title: 'Order & Pay', desc: 'Guests place their order and pay directly from their phone — fast and contactless.', color: 'bg-blue-500' },
              { step: '5', title: 'Sent to Kitchen', desc: 'Orders are sent directly to the kitchen display system or POS for preparation.', color: 'bg-purple-600' },
              { step: '6', title: 'Food Delivered', desc: 'Staff delivers the food or drinks when ready — no ordering bottleneck.', color: 'bg-purple-500' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
                <div className={`w-12 h-12 ${s.color} rounded-full flex items-center justify-center mb-4 text-white text-lg font-bold`}>
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENEFITS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Benefits of QR Code Ordering Systems</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Zap, title: 'Faster Service', desc: 'Customers can place orders immediately instead of waiting for a server, which speeds up table turnover and reduces long wait times.' },
              { icon: TrendingUp, title: 'Increase Ticket Size', desc: 'Digital ordering systems can suggest add-ons, combos, and upgrades, increasing the average order value.' },
              { icon: Users, title: 'Reduce Labor Pressure', desc: 'Self-ordering allows restaurants to operate efficiently even with smaller staff teams during busy periods.' },
              { icon: ThumbsUp, title: 'Improve Accuracy', desc: 'Customers enter their own order directly into the system, reducing mistakes caused by miscommunication.' },
              { icon: Clock, title: 'Better Experience', desc: 'Guests can order whenever they are ready without needing to flag down a server or wait in line.' },
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

      {/* 5. PERFECT FOR LARGE VENUES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why QR Ordering Works Great for Large Dining Areas</h2>
              <p className="text-lg text-gray-700 mb-4">
                QR ordering is especially valuable for restaurants and venues that have large dining areas, outdoor patios, or multiple service zones.
              </p>
              <p className="text-gray-700 mb-4">
                In these environments, servers often need to cover a large number of tables spread across a wide area. QR ordering allows customers to place orders independently, which helps staff manage larger sections without sacrificing service quality.
              </p>
              <p className="text-gray-600 mb-4">Venues that benefit from QR ordering include:</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Building2, label: 'Large patios' },
                  { icon: Wine, label: 'Sports bars' },
                  { icon: Beer, label: 'Beer gardens' },
                  { icon: Building2, label: 'Rooftop bars' },
                  { icon: UtensilsCrossed, label: 'Food halls' },
                  { icon: Building2, label: 'Hotel lounges' },
                ].map((v, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <v.icon className="h-4 w-4 text-purple-500 flex-shrink-0" /> {v.label}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-4">
                By allowing guests to order directly from their phone, venues can serve more customers while maintaining fast service.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1771425608845-3d188e91cb3c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwcGF0aW8lMjBvdXRkb29yJTIwZGluaW5nJTIwcGVvcGxlfGVufDB8fHx8MTc3Mjk5NTA4Mnww&ixlib=rb-4.1.0&q=85" alt="self-ordering-table-qr-code" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. QR ORDERING SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">QR Code Mobile Ordering Solutions</h2>
          <p className="text-lg text-gray-600 text-center mb-14 max-w-3xl mx-auto">Merchant Solutions provides several POS platforms that support QR code ordering.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* iTabPOS */}
            <Card className="border-2 hover:border-purple-600 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <QrCode className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">iTabPOS QR Ordering</h3>
                <p className="text-gray-700 mb-4">
                  iTabPOS allows restaurants to create table-specific QR codes that customers scan to access a digital menu. Guests can browse the menu, place orders, and pay directly from their phone.
                </p>
                <p className="text-sm text-gray-600 mb-4">Orders are sent directly to the restaurant POS and kitchen display system.</p>
                <Link to="/pos/itab">
                  <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                    Learn About iTabPOS <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Clover */}
            <Card className="border-2 hover:border-purple-600 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <CreditCard className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Clover QR Ordering</h3>
                <p className="text-gray-700 mb-4">
                  Clover POS supports digital menus and QR ordering capabilities through integrated apps and online ordering features. Restaurants using Clover can enable mobile ordering experiences that integrate with their POS system.
                </p>
                <Link to="/clover-pos-system">
                  <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                    Learn About Clover <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* UnionPOS */}
            <Card className="border-2 hover:border-purple-600 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">UnionPOS Guest-Led Ordering</h3>
                <p className="text-gray-700 mb-4">
                  UnionPOS offers advanced guest-led ordering technology where customers scan a QR code and place orders directly from their phone. This system is commonly used in high-volume bars and nightlife venues where fast service is essential.
                </p>
                <Link to="/union-pos-system">
                  <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                    Learn About UnionPOS <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">Industries That Benefit from QR Code Ordering</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">These businesses often experience high traffic and benefit from faster ordering and reduced server workload.</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3">
            {[
              { icon: UtensilsCrossed, label: 'Restaurants' },
              { icon: Wine, label: 'Bars' },
              { icon: Beer, label: 'Breweries' },
              { icon: Coffee, label: 'Coffee Shops' },
              { icon: Truck, label: 'Food Trucks' },
              { icon: Wine, label: 'Sports Bars' },
              { icon: Beer, label: 'Beer Gardens' },
              { icon: Building2, label: 'Hotel Lounges' },
              { icon: Building2, label: 'Large Patios' },
              { icon: Music, label: 'Venues' },
            ].map((ind, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center border border-gray-100 hover:border-purple-300 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <ind.icon className="h-5 w-5 text-purple-600" />
                </div>
                <p className="font-semibold text-gray-900 text-xs">{ind.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY ADOPTING */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.pexels.com/photos/10032377/pexels-photo-10032377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="scan-to-order-restaurant" className="w-full h-[360px] object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Restaurants Are Adopting Self-Ordering Systems</h2>
              <p className="text-lg text-gray-700 mb-6">
                The restaurant industry is increasingly adopting self-ordering technologies because they help solve several operational challenges.
              </p>
              <div className="space-y-4">
                {[
                  { icon: TrendingUp, label: 'Increased revenue through upselling' },
                  { icon: Clock, label: 'Faster table turnover' },
                  { icon: Users, label: 'Lower operational costs' },
                  { icon: ThumbsUp, label: 'Improved customer satisfaction' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <p className="font-semibold text-gray-900">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6">
                Mobile ordering gives guests control over their ordering experience while helping restaurants operate more efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHY MERCHANT SOLUTIONS */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Implement QR Ordering Through Merchant Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our team ensures your QR ordering system works seamlessly with your POS and kitchen workflow.
              </p>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: 'Professional POS installation' },
                  { icon: QrCode, label: 'QR ordering setup and configuration' },
                  { icon: UtensilsCrossed, label: 'Menu and item programming' },
                  { icon: CreditCard, label: 'Payment processing integration' },
                  { icon: GraduationCap, label: 'Staff training and onboarding' },
                  { icon: Headphones, label: 'Ongoing support' },
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
              <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/889xwcgb_IT%20tech_installer.png" alt="MSC technician configuring QR ordering" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-20 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">QR Code Mobile Ordering FAQ</h2>
          <FAQItem question="What is QR code ordering?" answer="QR code ordering allows customers to scan a code and place an order directly from their phone without needing a server or downloading an app." />
          <FAQItem question="Do customers need to download an app?" answer="No. Most QR ordering systems open directly in the phone's browser with no app download required." />
          <FAQItem question="Can QR ordering integrate with POS systems?" answer="Yes. Systems like iTabPOS, CloverPOS, and UnionPOS integrate orders directly with the POS and kitchen displays." />
          <FAQItem question="Does QR ordering increase sales?" answer="Yes. Many restaurants see higher average order values due to automated upselling features built into the digital ordering experience." />
          <FAQItem question="Is QR ordering good for patios and large dining areas?" answer="Yes. It allows servers to manage larger sections efficiently while maintaining fast service, making it ideal for patios, beer gardens, and large venues." />
        </div>
      </section>

      <AIPoweredSection onContactClick={() => setShowFormModal(true)} onCalendlyClick={openCalendly} />

      {/* 11. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Enable QR Code Mobile Ordering for Your Restaurant</h2>
          <p className="text-xl text-purple-100 mb-8">Self-ordering technology helps restaurants serve customers faster while increasing order value and improving guest satisfaction.</p>
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
              { label: 'Self-Ordering Kiosk', path: '/clover-kiosk' },
              { label: 'Clover POS', path: '/clover-pos-system' },
              { label: 'Union POS', path: '/union-pos-system' },
              { label: 'iTabPOS', path: '/pos/itab' },
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
