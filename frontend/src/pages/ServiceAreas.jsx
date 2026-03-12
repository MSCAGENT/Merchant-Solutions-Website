import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ChevronDown, ChevronRight, ArrowRight, Globe as GlobeIcon,
  CreditCard, Shield, Monitor, Store, Users, Headphones, MapPin,
  Package, BarChart3, Settings, Zap, UtensilsCrossed, ShoppingBag,
  Briefcase, Heart
} from 'lucide-react';
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

const SERVICE_REGIONS = [
  { name: 'United States', lat: 39.8, lng: -98.5, color: '#8b5cf6' },
  { name: 'Canada', lat: 56.1, lng: -106.3, color: '#8b5cf6' },
  { name: 'Puerto Rico', lat: 18.2, lng: -66.5, color: '#8b5cf6' },
  { name: 'US Virgin Islands', lat: 18.3, lng: -64.9, color: '#a78bfa' },
  { name: 'United Kingdom', lat: 55.4, lng: -3.4, color: '#6366f1' },
  { name: 'Spain', lat: 40.5, lng: -3.7, color: '#6366f1' },
  { name: 'France', lat: 46.2, lng: 2.2, color: '#6366f1' },
  { name: 'Ireland', lat: 53.1, lng: -7.7, color: '#6366f1' },
  { name: 'Japan', lat: 36.2, lng: 138.3, color: '#6366f1' },
  { name: 'Australia', lat: -25.3, lng: 133.8, color: '#6366f1' },
];

export default function ServiceAreas() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const globeContainerRef = useRef(null);
  const globeRef = useRef(null);

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

  useEffect(() => {
    let globe;
    const initGlobe = async () => {
      if (!globeContainerRef.current) return;
      const Globe = (await import('globe.gl')).default;
      globe = Globe()(globeContainerRef.current)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .width(globeContainerRef.current.offsetWidth)
        .height(500)
        .pointsData(SERVICE_REGIONS)
        .pointLat('lat')
        .pointLng('lng')
        .pointColor('color')
        .pointAltitude(0.06)
        .pointRadius(1.2)
        .pointsMerge(false)
        .labelsData(SERVICE_REGIONS)
        .labelLat('lat')
        .labelLng('lng')
        .labelText('name')
        .labelSize(1.4)
        .labelDotRadius(0.6)
        .labelColor(() => '#e9d5ff')
        .labelResolution(2)
        .onPointClick((point) => {
          setSelectedRegion(point);
        })
        .atmosphereColor('#7c3aed')
        .atmosphereAltitude(0.2);

      globe.pointOfView({ lat: 30, lng: -40, altitude: 2.2 }, 0);
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.5;
      globe.controls().enableZoom = true;
      globeRef.current = globe;
    };

    initGlobe();

    const handleResize = () => {
      if (globeRef.current && globeContainerRef.current) {
        globeRef.current.width(globeContainerRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (globeRef.current) {
        globeRef.current._destructor && globeRef.current._destructor();
      }
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/mscpayments/posdemo?hide_event_type_details=1&primary_color=1400ff' });
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Merchant Services & POS Installation",
    "provider": { "@type": "Organization", "name": "Merchant Solutions Corp" },
    "areaServed": ["United States", "Canada", "Puerto Rico", "US Virgin Islands", "United Kingdom", "Spain", "Japan"],
    "serviceType": "Merchant Services and POS Installation",
    "url": "https://merchantsolutionscorp.com/service-areas"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Does Merchant Solutions Corp provide merchant services nationwide?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Merchant Solutions Corp provides payment processing, merchant accounts, ATMs and POS installation services across the United States, Canada, and Puerto Rico." } },
      { "@type": "Question", "name": "Can businesses qualify for free POS systems?", "acceptedAnswer": { "@type": "Answer", "text": "Many businesses qualify for free POS system placement depending on transaction volume and processing requirements." } },
      { "@type": "Question", "name": "Does Merchant Solutions Corp install POS systems?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Merchant Solutions Corp provides POS system installation, configuration, and training support nationwide." } }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://merchantsolutionscorp.com/" },
      { "@type": "ListItem", "position": 2, "name": "Company", "item": "https://merchantsolutionscorp.com/about-merchant-solutions-corp" },
      { "@type": "ListItem", "position": 3, "name": "Service Areas", "item": "https://merchantsolutionscorp.com/service-areas" }
    ]
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Merchant Solutions Corp",
    "url": "https://merchantsolutionscorp.com",
    "logo": "https://customer-assets.emergentagent.com/job_merchant-central-11/artifacts/vmzehzol_MSC_1080x560.png"
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Nationwide Merchant Services &amp; POS Installation | Merchant Solutions Corp</title>
        <meta name="description" content="Merchant Solutions Corp provides low rate merchant accounts, free POS systems, and professional POS installation services across the United States, Canada, and Puerto Rico." />
        <meta name="keywords" content="low rate merchant accounts, free POS system dealer, merchant services nationwide, POS installation services, payment processing company USA, merchant services USA Canada Puerto Rico, POS installation IT services, restaurant POS installation nationwide" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/service-areas" />
        <meta property="og:title" content="Nationwide Merchant Services & POS Installation | Merchant Solutions Corp" />
        <meta property="og:description" content="Merchant Solutions Corp provides low rate merchant accounts, free POS systems, and professional POS installation services across the United States, Canada, and Puerto Rico." />
        <meta property="og:url" content="https://merchantsolutionscorp.com/service-areas" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500" data-testid="breadcrumb">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/about-merchant-solutions-corp" className="hover:text-purple-600 transition-colors">Company</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gray-900 font-medium">Service Areas</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl" data-testid="hero-h1">
            Nationwide Merchant Services &amp; POS Installation
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl">
            Merchant Solutions Corp provides <Link to="/merchant-services" className="text-purple-300 hover:text-white underline">merchant services</Link>, payment processing, and POS system installation across the United States, Canada, and Puerto Rico.
          </p>
          <p className="text-lg text-purple-200 font-semibold mb-4 max-w-3xl">Our mission is simple.</p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl">
            Help businesses accept payments efficiently while reducing processing costs and deploying modern POS systems that improve operations. Whether you operate a restaurant, retail store, healthcare office, or service business, our team provides nationwide support for merchant accounts, POS systems, and payment technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="hero-pricing-btn">
              Request Merchant Pricing
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6" onClick={openCalendly} data-testid="hero-demo-btn">
              Schedule a POS Demo
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-purple-400" /> United States</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-purple-400" /> Canada</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-purple-400" /> Puerto Rico</span>
            <span className="flex items-center gap-1.5"><GlobeIcon className="h-4 w-4 text-purple-400" /> International</span>
          </div>
        </div>
      </section>

      {/* COVERAGE AREAS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="coverage-h2">Merchant Services Coverage Areas</h2>
              <p className="text-lg text-gray-700 mb-6">Merchant Solutions Corp supports businesses across North America with payment processing infrastructure, POS system deployment, and installation services.</p>
              <p className="text-gray-700 font-semibold mb-3">Our current service territories include:</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['United States', 'Canada', 'Puerto Rico'].map((r, i) => (
                  <div key={i} className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2.5 rounded-xl border border-purple-100 font-medium">
                    <MapPin className="h-4 w-4" /> {r}
                  </div>
                ))}
              </div>
              <p className="text-gray-700 font-semibold mb-3">Businesses in these regions can receive:</p>
              <div className="space-y-2.5">
                {['Low rate merchant accounts', 'Free POS system programs', 'Payment gateway solutions', 'Online payment processing', 'POS installation and setup', 'Merchant onboarding and training'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6">Our technology infrastructure allows us to support merchants remotely and through installation partners nationwide.</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { val: '50+', label: 'US States Covered' },
                { val: '13', label: 'Canadian Provinces' },
                { val: '3+', label: 'Territories' },
                { val: '24/7', label: 'Technical Support' },
                { val: '1000+', label: 'Merchants Served' },
                { val: '6', label: 'Banking Partners' },
              ].map((stat, i) => (
                <div key={i} className="bg-purple-50 rounded-2xl p-5 text-center border border-purple-100">
                  <div className="text-2xl font-bold text-purple-600">{stat.val}</div>
                  <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE GLOBE */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" data-testid="globe-h2">Interactive Global Coverage Map</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Explore our service territories. Click and drag to rotate the globe. Click on a highlighted region to see service availability.</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div ref={globeContainerRef} className="w-full rounded-2xl overflow-hidden" data-testid="globe-container" style={{ minHeight: '500px' }} />
            {selectedRegion && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 shadow-xl border border-purple-200 max-w-md text-center z-10" data-testid="globe-popup">
                <p className="font-bold text-gray-900 text-lg mb-1">{selectedRegion.name}</p>
                <p className="text-sm text-gray-600">Merchant Solutions Corp provides payment processing and POS installation services in this region.</p>
                <button onClick={() => setSelectedRegion(null)} className="text-xs text-purple-600 mt-2 hover:underline">Close</button>
              </div>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {SERVICE_REGIONS.map((r, i) => (
              <span key={i} className="text-xs bg-purple-900/50 text-purple-300 px-3 py-1.5 rounded-full border border-purple-700/50">{r.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* LOW RATE MERCHANT ACCOUNTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="merchant-accounts-h2">Low Rate Merchant Accounts for Businesses</h2>
              <p className="text-lg text-gray-700 mb-6">Merchant Solutions Corp provides low rate merchant accounts designed to reduce <Link to="/credit-card-processing" className="text-purple-600 hover:underline">payment processing</Link> costs while providing reliable infrastructure.</p>
              <p className="text-gray-700 font-semibold mb-4">Businesses choose our merchant accounts because we offer:</p>
              <div className="space-y-3">
                {[
                  { icon: CreditCard, label: 'Transparent pricing models' },
                  { icon: BarChart3, label: 'Interchange plus pricing options' },
                  { icon: Zap, label: 'Fast funding schedules' },
                  { icon: Shield, label: 'Advanced fraud protection' },
                  { icon: Headphones, label: 'Merchant support teams' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-purple-600" />
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6">Our <Link to="/merchant-services" className="text-purple-600 hover:underline">merchant services</Link> platform helps businesses process payments securely while maintaining predictable operating costs.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Merchant Account Benefits</h3>
              <div className="space-y-4">
                {[
                  { title: 'Next-Day Funding', desc: 'Get your money faster with next-day deposit options.' },
                  { title: 'No Hidden Fees', desc: 'Transparent pricing with no surprise charges.' },
                  { title: 'Dedicated Support', desc: 'Assigned account representative for your business.' },
                  { title: 'Multi-Location', desc: 'Unified processing for all your business locations.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-4">
                    <p className="font-bold text-sm">{item.title}</p>
                    <p className="text-xs text-purple-100">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREE POS SYSTEM DEALER */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="free-pos-h2">Free POS System Dealer Program</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Merchant Solutions Corp is a nationwide POS system dealer providing modern point of sale systems for restaurants, retail stores, and service businesses. Many merchants qualify for free POS system placement programs based on processing volume.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { name: 'Clover POS', link: '/clover-pos-system' },
              { name: 'Square POS', link: '/pos/square' },
              { name: 'Toast POS', link: '/restaurant-payment-processing-services' },
              { name: 'Lightspeed Retail', link: '/best-pos-system-for-retail' },
            ].map((pos, i) => (
              <Link key={i} to={pos.link} className="group">
                <Card className="h-full border-2 border-transparent hover:border-purple-400 hover:shadow-xl transition-all">
                  <CardContent className="p-6 text-center">
                    <Monitor className="h-10 w-10 text-purple-500 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">{pos.name}</h3>
                    <span className="text-purple-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:underline">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-700 font-semibold mb-4">These systems help businesses manage:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Payments', 'Inventory', 'Employee tracking', 'Reporting', 'Customer management'].map((item, i) => (
                <span key={i} className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 border border-gray-200 shadow-sm">{item}</span>
              ))}
            </div>
            <p className="text-gray-600 mt-6">Our team helps merchants choose the <Link to="/best-pos-for-small-business" className="text-purple-600 hover:underline">best POS system</Link> based on their business model.</p>
          </div>
        </div>
      </section>

      {/* POS INSTALLATION & IT SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              {[
                { icon: Monitor, title: 'POS Hardware Setup', desc: 'Professional installation of all POS terminals and peripherals.' },
                { icon: Settings, title: 'Terminal Configuration', desc: 'Payment terminal setup, testing, and certification.' },
                { icon: Package, title: 'Menu & Inventory', desc: 'Complete menu programming and inventory system configuration.' },
                { icon: GlobeIcon, title: 'Network Setup', desc: 'Connectivity configuration for reliable payment processing.' },
                { icon: Users, title: 'Staff Training', desc: 'On-site and remote training for your entire team.' },
                { icon: Zap, title: 'Gateway Integration', desc: 'Payment gateway setup and e-commerce integration.' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <item.icon className="h-6 w-6 text-purple-600 mb-3" />
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="installation-h2">POS Installation &amp; IT Services Nationwide</h2>
              <p className="text-lg text-gray-700 mb-6">Merchant Solutions Corp provides POS installation services and technical setup support across our service territories.</p>
              <p className="text-gray-700 font-semibold mb-4">Our installation support includes:</p>
              <div className="space-y-2.5">
                {['POS hardware setup', 'Payment terminal configuration', 'Menu and inventory programming', 'Network and connectivity configuration', 'Staff training', 'Payment gateway integration'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6">This ensures businesses are fully operational with minimal disruption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY SOLUTIONS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="industries-h2">Industry Solutions We Support</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our nationwide merchant services platform supports businesses across multiple industries.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              { icon: UtensilsCrossed, label: 'Restaurants', link: '/restaurant-payment-processing-services' },
              { icon: ShoppingBag, label: 'Retail Stores', link: '/industries/retail' },
              { icon: Heart, label: 'Healthcare Offices', link: '/industries/healthcare' },
              { icon: Briefcase, label: 'Salons & Spas', link: '/salon-spa-payment-processing' },
              { icon: Settings, label: 'Contractors & Services', link: '/professional-services-payment-processing-clover-pos' },
              { icon: Users, label: 'Professional Services', link: '/professional-services-payment-processing-clover-pos' },
              { icon: GlobeIcon, label: 'E-Commerce', link: '/ecommerce-payments' },
            ].map((ind, i) => (
              <Link key={i} to={ind.link} className="group">
                <Card className="border hover:border-purple-300 hover:shadow-lg transition-all">
                  <CardContent className="p-5 text-center">
                    <ind.icon className="h-8 w-8 text-purple-500 mx-auto mb-3 group-hover:text-purple-600 transition-colors" />
                    <h3 className="font-bold text-gray-900 text-sm">{ind.label}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <p className="text-gray-600 text-center mt-8">Merchant Solutions Corp helps configure payment systems that match operational needs.</p>
        </div>
      </section>

      {/* WHY BUSINESSES CHOOSE MSC */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="why-msc-h2">Why Businesses Choose Merchant Solutions Corp</h2>
              <p className="text-lg text-gray-700 mb-6">Businesses across the United States, Canada, and Puerto Rico choose Merchant Solutions Corp because we provide a flexible payment ecosystem.</p>
              <p className="text-gray-700 font-semibold mb-4">Our platform includes:</p>
              <div className="space-y-2.5 mb-6">
                {['Merchant account services', 'POS systems and installation', 'E-commerce payment processing', 'Payment gateway solutions', 'Online payment links and invoicing', 'CRM payment integration', 'Fraud protection systems'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600">Unlike large payment providers that force businesses into rigid systems, Merchant Solutions Corp helps merchants deploy solutions tailored to their operations.</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/889xwcgb_IT%20tech_installer.png" alt="Merchant services and POS installation nationwide across the United States Canada and Puerto Rico" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12" data-testid="faq-h2">Frequently Asked Questions</h2>
          <FAQItem question="Does Merchant Solutions Corp provide merchant services nationwide?" answer="Yes, Merchant Solutions Corp provides payment processing, merchant accounts, ATMs and POS installation services across the United States, Canada, and Puerto Rico." />
          <FAQItem question="Can businesses qualify for free POS systems?" answer="Many businesses qualify for free POS system placement depending on transaction volume and processing requirements." />
          <FAQItem question="Does Merchant Solutions Corp install POS systems?" answer="Yes. Merchant Solutions Corp provides POS system installation, configuration, and training support nationwide." />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="cta-h2">Start Accepting Payments Anywhere</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">Whether you need merchant services, a free POS system, or nationwide installation support, Merchant Solutions Corp can help your business deploy the right payment technology from Square, Clover or Exatouch.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="cta-pricing-btn">
              Request Merchant Pricing
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" onClick={openCalendly} data-testid="cta-demo-btn">
              Schedule a POS Demo
            </Button>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 text-center mb-4">Related Pages</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Merchant Services', path: '/merchant-services' },
              { label: 'Online Payments', path: '/ecommerce-payments' },
              { label: 'Credit Card Processing', path: '/credit-card-processing' },
              { label: 'Best POS for Small Business', path: '/best-pos-for-small-business' },
              { label: 'Restaurant POS System Guide', path: '/restaurant-pos-system-guide' },
              { label: 'Free POS Program', path: '/free-pos-system' },
              { label: 'Clover POS', path: '/clover-pos-system' },
              { label: 'Square POS', path: '/pos/square' },
            ].map((link, i) => (
              <Link key={i} to={link.path} className="text-sm text-purple-600 bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM MODAL */}
      {showFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowFormModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowFormModal(false)} className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors" data-testid="close-form-modal">&#x2715;</button>
            <iframe src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" className="w-full h-[80vh] border-0 rounded-2xl" title="Request Merchant Pricing" />
          </div>
        </div>
      )}
    </div>
  );
}
