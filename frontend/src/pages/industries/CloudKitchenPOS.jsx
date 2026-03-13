import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ChevronDown, ChevronRight, CreditCard, Smartphone,
  Wifi, BarChart3, ShoppingBag, Zap, ArrowRight, Package, Monitor,
  Truck, UtensilsCrossed, Clock, Bell, Settings, Headphones, MapPin,
  GraduationCap, LayoutGrid, Layers
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import AIPoweredSection from '../../components/AIPoweredSection';

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

export default function CloudKitchenPOS() {
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

  const heroVideoRef = useRef(null);
  const videoSources = [
    'https://customer-assets.emergentagent.com/job_c6b9224d-1fa4-4997-b5ef-41ad9de5ec14/artifacts/irukrkef_cloudkitchen1.mp4',
    'https://customer-assets.emergentagent.com/job_c6b9224d-1fa4-4997-b5ef-41ad9de5ec14/artifacts/95yl7x4y_cloud%20kitchen2.mp4'
  ];
  const videoIdx = useRef(0);

  const handleVideoEnded = () => {
    videoIdx.current = (videoIdx.current + 1) % videoSources.length;
    if (heroVideoRef.current) {
      heroVideoRef.current.src = videoSources[videoIdx.current];
      heroVideoRef.current.play();
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is a cloud kitchen POS system?", "acceptedAnswer": { "@type": "Answer", "text": "A POS system for cloud kitchens helps delivery-only restaurants manage orders, payments, and kitchen operations from a centralized platform." } },
      { "@type": "Question", "name": "Can cloud kitchens integrate delivery platforms with POS systems?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most modern POS systems integrate directly with major delivery platforms including Uber Eats, DoorDash, and Grubhub." } },
      { "@type": "Question", "name": "Why do cloud kitchens need a POS system?", "acceptedAnswer": { "@type": "Answer", "text": "Since cloud kitchens rely entirely on online orders, a POS system centralizes orders, tracks sales, and helps manage kitchen operations efficiently." } },
      { "@type": "Question", "name": "Can AI take phone orders for my cloud kitchen?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Voice AI can answer incoming calls, take customer orders through natural conversation, and send them directly to your POS system." } },
      { "@type": "Question", "name": "How does AI automation work with cloud kitchen POS systems?", "acceptedAnswer": { "@type": "Answer", "text": "AI automation tools connect directly with POS systems to streamline phone ordering, customer notifications, and marketing campaigns without manual intervention." } }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Cloud Kitchen POS System | Best POS for Ghost Kitchens &amp; Delivery Restaurants</title>
        <meta property="og:title" content="Cloud Kitchen POS System | Best POS for Ghost Kitchens & Delivery Restaurants" />
        <meta property="og:description" content="Run your ghost kitchen efficiently with POS systems designed for delivery-only restaurants. Manage online orders, kitchen workflows, and payments from a single platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/cloud-kitchen-pos-system" />
        <meta name="description" content="Run your ghost kitchen efficiently with POS systems designed for delivery-only restaurants. Manage online orders, kitchen workflows, and payments from a single platform." />
        <meta name="keywords" content="cloud kitchen POS, ghost kitchen POS, delivery kitchen POS, POS for ghost kitchens, POS for delivery restaurants" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/cloud-kitchen-pos-system" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Cloud Kitchen POS System","serviceType":"Cloud Kitchen and Ghost Kitchen POS System","provider":{"@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com"},"areaServed":"United States","url":"https://merchantsolutionscorp.com/cloud-kitchen-pos-system","description":"POS and payment processing solutions designed for cloud kitchens, ghost kitchens, and delivery-only restaurants."})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://merchantsolutionscorp.com/"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://merchantsolutionscorp.com/industries/restaurants"},{"@type":"ListItem","position":3,"name":"Cloud Kitchen POS","item":"https://merchantsolutionscorp.com/cloud-kitchen-pos-system"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com","logo":"https://merchantsolutionscorp.com/logo.png","sameAs":["https://www.facebook.com/merchantsolutionscorp/","https://www.instagram.com/merchant_solutions_corp","https://www.linkedin.com/company/merchantsolutionscorp/","https://www.youtube.com/merchantsolutionscorp"]})}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        <video
          ref={heroVideoRef}
          autoPlay muted playsInline
          onEnded={handleVideoEnded}
          src={videoSources[0]}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-purple-950/80 to-gray-900/70 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl" data-testid="cloud-kitchen-hero-h1">
            Cloud Kitchen POS Systems for Delivery-Only Restaurants
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Manage delivery orders, kitchen workflows, and payment processing with POS systems designed specifically for ghost kitchens and virtual restaurants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="hero-contact-btn">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6" onClick={openCalendly} data-testid="hero-demo-btn">
              Book a Demo
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5"><Truck className="h-4 w-4 text-purple-400" /> Delivery Platform Integration</span>
            <span className="flex items-center gap-1.5"><Monitor className="h-4 w-4 text-purple-400" /> Kitchen Display Systems</span>
            <span className="flex items-center gap-1.5"><BarChart3 className="h-4 w-4 text-purple-400" /> Real-Time Reporting</span>
            <span className="flex items-center gap-1.5"><Layers className="h-4 w-4 text-purple-400" /> Multi-Brand Management</span>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHAT IS A CLOUD KITCHEN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="what-is-h2">What Is a Cloud Kitchen?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Cloud kitchens, also known as ghost kitchens or virtual restaurants, operate without a traditional dining room and rely entirely on delivery and online ordering platforms.
              </p>
              <p className="text-gray-700 mb-6">
                Because these businesses depend heavily on digital ordering channels, they require technology that can efficiently manage orders from multiple sources while maintaining fast kitchen operations.
              </p>
              <p className="text-gray-700 font-semibold mb-4">A modern cloud kitchen POS system allows operators to manage:</p>
              <div className="space-y-3">
                {['Online orders', 'Delivery platforms', 'Kitchen workflow', 'Inventory tracking', 'Payment processing'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6">
                The POS system acts as the central hub connecting all ordering channels and kitchen operations.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1771574207826-02f0d845e3a7?w=800&q=80" alt="commercial-cloud-kitchen-operations" className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: KEY FEATURES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="features-h2">Key Features Needed in a Cloud Kitchen POS</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Essential features that allow cloud kitchens to handle high volumes of delivery orders efficiently.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Layers, title: 'Centralized Order Management', desc: 'Consolidate orders from all channels into one dashboard for streamlined kitchen operations.' },
              { icon: Truck, title: 'Delivery Platform Integration', desc: 'Connect directly with Uber Eats, DoorDash, Grubhub, and other delivery marketplaces.' },
              { icon: Monitor, title: 'Kitchen Display System (KDS)', desc: 'Route orders to kitchen screens for fast, accurate preparation and real-time tracking.' },
              { icon: Package, title: 'Inventory Tracking', desc: 'Monitor ingredient levels, set low-stock alerts, and reduce food waste across all brands.' },
              { icon: BarChart3, title: 'Real-Time Reporting', desc: 'Access sales data, order volume, and performance metrics from any device in real time.' },
              { icon: ShoppingBag, title: 'Online Ordering Management', desc: 'Manage your own branded ordering channels alongside third-party marketplace orders.' },
            ].map((f, i) => (
              <Card key={i} className="border hover:border-purple-300 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <f.icon className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: RECOMMENDED POS SYSTEMS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="recommended-h2">Recommended POS Systems for Cloud Kitchens</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* iTabPOS */}
            <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <UtensilsCrossed className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">iTabPOS</h3>
              </div>
              <p className="text-gray-700 mb-6">
                iTabPOS is designed specifically for restaurants and cloud kitchens that require advanced order management and kitchen workflow automation.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {['Online order integration', 'Delivery as a service', 'Menu management', 'Sales reporting', 'Inventory tracking', 'Kitchen display systems'].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <Link to="/restaurant-payment-processing-services">
                  <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Clover POS */}
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Clover POS</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Clover POS systems provide cloud kitchens with flexible payment processing and online ordering capabilities.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {['Online order integrations', 'Inventory tracking', 'Real-time sales reporting', 'Delivery platform compatibility'].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <Link to="/clover-pos-system">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  View Clover POS <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: MANAGING MULTIPLE DELIVERY PLATFORMS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="delivery-platforms-h2">Managing Multiple Delivery Platforms</h2>
              <p className="text-lg text-gray-700 mb-6">
                Cloud kitchens typically receive orders from several delivery marketplaces such as:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Uber Eats', 'DoorDash', 'Grubhub', 'Postmates'].map((platform, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-200 shadow-sm">
                    <Truck className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{platform}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                A modern POS system consolidates these orders into a single dashboard, preventing missed orders and simplifying kitchen operations.
              </p>
              <p className="text-gray-700">
                This centralized approach improves order accuracy and speeds up delivery preparation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
              <div className="space-y-5">
                {[
                  { icon: Layers, title: 'Single Dashboard', desc: 'All delivery platform orders appear in one unified view for your kitchen team.' },
                  { icon: Bell, title: 'Order Alerts', desc: 'Instant notifications when new orders arrive from any delivery channel.' },
                  { icon: Clock, title: 'Prep Time Tracking', desc: 'Monitor order preparation times to ensure fast delivery turnaround.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-200">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                      <p className="text-gray-600 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: AUTOMATION TOOLS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1768314669089-480e608a0143?w=800&q=80" alt="cloud-kitchen-automation-technology" className="w-full h-[400px] object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="automation-h2">Automation Tools for High-Volume Delivery Kitchens</h2>
              <p className="text-lg text-gray-700 mb-6">
                Cloud kitchens depend on automation to manage large volumes of incoming orders.
              </p>
              <p className="text-gray-700 font-semibold mb-4">POS integrations allow operators to automate:</p>
              <div className="space-y-3">
                {[
                  'Order routing to kitchen displays',
                  'Customer order notifications',
                  'Delivery coordination',
                  'Inventory updates',
                  'Sales analytics',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6">
                Automation reduces operational errors and helps kitchens handle peak demand efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE MERCHANT SOLUTIONS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="why-msc-h2">Why Choose Merchant Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                Merchant Solutions provides POS systems and payment infrastructure specifically designed for modern restaurant operations.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Services include:</p>
              <div className="space-y-4">
                {[
                  { icon: Settings, label: 'POS installation and setup', desc: 'Professional deployment of your cloud kitchen POS system.' },
                  { icon: Truck, label: 'Delivery platform integration', desc: 'Connect your POS with all major delivery marketplaces.' },
                  { icon: CreditCard, label: 'Payment processing support', desc: 'Competitive rates and reliable transaction processing.' },
                  { icon: Package, label: 'Inventory configuration', desc: 'Set up ingredient tracking and low-stock alerts.' },
                  { icon: Headphones, label: 'Ongoing technical support', desc: 'Dedicated support team for troubleshooting and updates.' },
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
              <p className="text-gray-600 mt-6">
                Our team helps cloud kitchens deploy technology that keeps delivery operations running smoothly.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/889xwcgb_IT%20tech_installer.png" alt="MSC-technician-cloud-kitchen-setup" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: AI-POWERED AUTOMATION */}
      <AIPoweredSection onContactClick={() => setShowFormModal(true)} onCalendlyClick={openCalendly} />

      {/* CLOUD KITCHEN TECHNOLOGY SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="tech-solutions-h2">Cloud Kitchen Technology Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Beyond POS systems, cloud kitchens can leverage a full stack of restaurant technology to increase efficiency and capture more orders.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShoppingBag, title: 'Online Ordering Systems', desc: 'Branded online ordering that sends orders directly to your POS without marketplace commissions.', link: '/restaurant-payment-processing-services' },
              { icon: LayoutGrid, title: 'Self-Ordering Kiosks', desc: 'For cloud kitchens with pickup windows, kiosks allow customers to order directly without staff.', link: '/best-self-ordering-kiosk-for-restaurants' },
              { icon: Smartphone, title: 'QR Code Ordering', desc: 'Customers scan a QR code to browse menus and place orders from their phone.', link: '/qr-code-mobile-ordering' },
              { icon: Zap, title: 'Voice AI Ordering', desc: 'AI answers phone calls, takes orders through natural conversation, and sends them to your POS.', link: '/voice-ai-business-automation' },
            ].map((item, i) => (
              <Link key={i} to={item.link} className="group">
                <Card className="border hover:border-purple-300 hover:shadow-lg transition-all h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                      <item.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                    <span className="text-purple-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:underline">
                      Learn more <ChevronRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12" data-testid="faq-h2">Cloud Kitchen POS FAQ</h2>
          <FAQItem question="What is a cloud kitchen POS system?" answer="A POS system for cloud kitchens helps delivery-only restaurants manage orders, payments, and kitchen operations from a centralized platform." />
          <FAQItem question="Can cloud kitchens integrate delivery platforms with POS systems?" answer="Yes. Most modern POS systems integrate directly with major delivery platforms including Uber Eats, DoorDash, and Grubhub." />
          <FAQItem question="Why do cloud kitchens need a POS system?" answer="Since cloud kitchens rely entirely on online orders, a POS system centralizes orders, tracks sales, and helps manage kitchen operations efficiently." />
          <FAQItem question="Can AI take phone orders for my cloud kitchen?" answer="Yes. Voice AI can answer incoming calls, take customer orders through natural conversation, and send them directly to your POS system. This ensures no orders are missed during busy hours." />
          <FAQItem question="How does AI automation work with cloud kitchen POS systems?" answer="AI automation tools connect directly with POS systems to streamline phone ordering, customer notifications, and marketing campaigns without manual intervention." />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="final-cta-h2">Get the Right POS System for Your Cloud Kitchen</h2>
          <p className="text-xl text-purple-100 mb-8">
            Whether you run a ghost kitchen, virtual restaurant brand, or delivery-only operation, Merchant Solutions provides the POS technology and payment processing you need to manage high-volume delivery operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="cta-contact-btn">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" onClick={openCalendly} data-testid="cta-demo-btn">
              Book a Demo
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
              { label: 'POS Systems', path: '/pos-systems' },
              { label: 'Clover POS', path: '/clover-pos-system' },
              { label: 'Restaurant POS', path: '/restaurant-payment-processing-services' },
              { label: 'Payment Processing Pricing', path: '/payment-processing-pricing' },
              { label: 'Advantage Credit Program', path: '/free-pos-system' },
              { label: 'Voice AI Automation', path: '/voice-ai-business-automation' },
              { label: 'QR Code Ordering', path: '/qr-code-mobile-ordering' },
              { label: 'Self-Ordering Kiosks', path: '/best-self-ordering-kiosk-for-restaurants' },
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
