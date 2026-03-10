import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ChevronDown, ChevronRight, CreditCard, Smartphone,
  Wifi, BarChart3, ShoppingBag, Zap, ArrowRight, MapPin, Clock,
  UtensilsCrossed, Package, Monitor
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import AIPoweredSection from '../components/AIPoweredSection';

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

export default function FoodTruckPOS() {
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
      { "@type": "Question", "name": "What is the best POS system for a food truck?", "acceptedAnswer": { "@type": "Answer", "text": "Mobile POS systems such as Payanywhere, Square, and Clover Flex are popular choices because they are portable and simple to use." } },
      { "@type": "Question", "name": "Can food trucks accept contactless payments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most modern POS systems support tap-to-pay payments, including Apple Pay and Google Pay." } },
      { "@type": "Question", "name": "Do food trucks need internet to process payments?", "acceptedAnswer": { "@type": "Answer", "text": "Many mobile POS systems offer offline transaction capability in case connectivity is temporarily unavailable." } },
      { "@type": "Question", "name": "Can AI take phone orders for my food truck?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Voice AI can answer incoming calls, take customer orders through natural conversation, and send them directly to your POS system." } },
      { "@type": "Question", "name": "How does AI automation integrate with food truck POS systems?", "acceptedAnswer": { "@type": "Answer", "text": "AI automation tools connect directly with POS systems like Clover, Square, and Payanywhere to streamline phone ordering, customer notifications, and marketing campaigns." } },
      { "@type": "Question", "name": "What AI features are available for food truck businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Food trucks can benefit from AI phone ordering, automated order notifications, AI-powered marketing campaigns, and customer support automation." } }
    ]
  };

  const heroVideoRef = useRef(null);
  const videoSources = [
    'https://customer-assets.emergentagent.com/job_c6b9224d-1fa4-4997-b5ef-41ad9de5ec14/artifacts/bo2rfywi_foodtruck.mp4',
    'https://customer-assets.emergentagent.com/job_c6b9224d-1fa4-4997-b5ef-41ad9de5ec14/artifacts/h98qy6pl_foodtruck2.mp4'
  ];
  const videoIdx = useRef(0);

  const handleVideoEnded = () => {
    videoIdx.current = (videoIdx.current + 1) % videoSources.length;
    if (heroVideoRef.current) {
      heroVideoRef.current.src = videoSources[videoIdx.current];
      heroVideoRef.current.play();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Food Truck POS System | Best POS for Food Trucks &amp; Mobile Kitchens</title>
        <meta property="og:title" content="Food Truck POS System | Best POS for Food Trucks & Mobile Kitchens" />
        <meta property="og:description" content="Discover the best POS systems for food trucks. Accept payments anywhere with mobile POS solutions like Payanywhere, Square, and Clover." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/food-trucks-pos" />
        <meta name="description" content="Discover the best POS systems for food trucks. Accept payments anywhere with mobile POS solutions like Payanywhere, Square, and Clover." />
        <meta name="keywords" content="food truck POS, POS for food trucks, mobile POS system, food truck credit card processing, POS for mobile food vendors" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/food-trucks-pos" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl" data-testid="food-truck-hero-h1">
            Best POS Systems for Food Trucks
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Mobile POS systems designed for food trucks, street vendors, and mobile kitchens that need fast payments and reliable connectivity anywhere.
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
            <span className="flex items-center gap-1.5"><Smartphone className="h-4 w-4 text-purple-400" /> Mobile POS Systems</span>
            <span className="flex items-center gap-1.5"><Wifi className="h-4 w-4 text-purple-400" /> 4G/Wi-Fi Connectivity</span>
            <span className="flex items-center gap-1.5"><CreditCard className="h-4 w-4 text-purple-400" /> Tap-to-Pay &amp; Mobile Wallets</span>
            <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-purple-400" /> Fast Checkout</span>
          </div>
        </div>
      </section>

      {/* WHY FOOD TRUCKS NEED A MOBILE POS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="why-mobile-h2">POS Systems Built for Mobile Food Vendors</h2>
              <p className="text-lg text-gray-700 mb-4">
                Food trucks operate in fast-paced environments where speed, reliability, and mobility are essential.
              </p>
              <p className="text-gray-700 mb-6">
                A modern POS system allows food trucks to accept payments quickly while tracking orders, managing inventory, and monitoring sales in real time.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Key capabilities include:</p>
              <div className="space-y-3">
                {['Contactless payment acceptance', 'Mobile card readers', 'Real-time sales reporting', 'Inventory tracking', 'Menu management'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6">
                These tools allow food truck operators to focus on serving customers while their POS system handles the business side of operations.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1567129937968-cdad8f07e2f8?w=800&q=80" alt="food-truck-mobile-pos" className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMENDED POS SYSTEMS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="recommended-h2">Recommended POS Systems for Food Trucks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Payanywhere */}
            <Card className="border-2 border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-7">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Payanywhere POS</h3>
                <p className="text-gray-600 text-sm mb-4">Ideal for mobile vendors who require a straightforward and dependable payment system.</p>
                <div className="space-y-2 mb-6">
                  {['Mobile card readers', 'Offline payment capability', 'Compact hardware', 'Fast checkout for busy lines'].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {f}
                    </div>
                  ))}
                </div>
                <Link to="/payanywhere">
                  <Button variant="outline" className="w-full border-purple-300 text-purple-700 hover:bg-purple-50">
                    View Payanywhere <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Square */}
            <Card className="border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <CardContent className="p-7">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Monitor className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Square POS</h3>
                <p className="text-gray-600 text-sm mb-4">Easy-to-use mobile POS system that works well for food trucks and small vendors.</p>
                <div className="space-y-2 mb-6">
                  {['Mobile payment acceptance', 'Simple menu management', 'Sales reporting', 'Online ordering'].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" /> {f}
                    </div>
                  ))}
                </div>
                <Link to="/pos/square">
                  <Button variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-50">
                    View Square POS <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Clover Flex */}
            <Card className="border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-7">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <CreditCard className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Clover Flex</h3>
                <p className="text-gray-600 text-sm mb-4">Portable POS device designed for businesses that need powerful POS features in a handheld terminal.</p>
                <div className="space-y-2 mb-6">
                  {['Portable POS terminal', 'Inventory tracking', 'Order management', 'Receipt printing'].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" /> {f}
                    </div>
                  ))}
                </div>
                <Link to="/clover-pos-system">
                  <Button variant="outline" className="w-full border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                    View Clover POS <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ACCEPT PAYMENTS ANYWHERE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" alt="food-truck-payment-processing" className="w-full h-[400px] object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="payments-h2">Accept Payments Anywhere</h2>
              <p className="text-lg text-gray-700 mb-6">
                Food trucks rely heavily on card payments and mobile wallets. Modern POS systems allow vendors to accept:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Credit cards', 'Debit cards', 'Tap-to-pay', 'Apple Pay', 'Google Pay', 'QR code payments'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-700">
                This flexibility ensures food trucks can serve customers quickly while maximizing revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI AUTOMATION FOR FOOD TRUCKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="automation-h2">Automation Tools for Mobile Kitchens</h2>
              <p className="text-lg text-gray-700 mb-6">
                POS systems can integrate with automation tools that help food trucks manage operations more efficiently.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Examples include:</p>
              <div className="space-y-3">
                {[
                  'QR ordering systems',
                  'Automated order notifications',
                  'AI voice ordering for phone orders',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6">
                These tools reduce wait times and improve the customer experience during busy service hours.
              </p>
              <div className="mt-6">
                <Link to="/voice-ai-business-automation">
                  <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                    Voice AI Business Automation <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
              <div className="space-y-5">
                {[
                  { icon: Zap, title: 'QR Ordering', desc: 'Customers scan a QR code, place orders from their phone, reducing wait times.' },
                  { icon: Clock, title: 'Order Notifications', desc: 'Automated alerts when orders are ready for pickup.' },
                  { icon: UtensilsCrossed, title: 'Voice AI Ordering', desc: 'AI answers phone calls and takes orders automatically, sent directly to your POS.' },
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

      {/* WHY MERCHANT SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" alt="merchant-solutions-food-truck-support" className="w-full h-[380px] object-cover" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="why-msc-h2">Payment Technology for Mobile Food Businesses</h2>
              <p className="text-lg text-gray-700 mb-6">
                Merchant Solutions helps food trucks deploy POS systems that work reliably in mobile environments.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Services include:</p>
              <div className="space-y-3">
                {['POS system setup', 'Payment processing integration', 'Menu configuration', 'Mobile payment support'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6">
                Our goal is to help mobile vendors accept payments quickly while maintaining reliable technology in any location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI POWERED SECTION */}
      <AIPoweredSection onContactClick={() => setShowFormModal(true)} onCalendlyClick={openCalendly} />

      {/* FAQ */}
      <section className="py-20 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12" data-testid="faq-h2">Food Truck POS FAQ</h2>
          <FAQItem question="What is the best POS system for a food truck?" answer="Mobile POS systems such as Payanywhere, Square, and Clover Flex are popular choices because they are portable and simple to use." />
          <FAQItem question="Can food trucks accept contactless payments?" answer="Yes. Most modern POS systems support tap-to-pay payments, including Apple Pay and Google Pay." />
          <FAQItem question="Do food trucks need internet to process payments?" answer="Many mobile POS systems offer offline transaction capability in case connectivity is temporarily unavailable." />
          <FAQItem question="Can AI take phone orders for my food truck?" answer="Yes. Voice AI can answer incoming calls, take customer orders through natural conversation, and send them directly to your POS system. This ensures no orders are missed during busy service hours." />
          <FAQItem question="How does AI automation integrate with food truck POS systems?" answer="AI automation tools connect directly with POS systems like Clover, Square, and Payanywhere to streamline phone ordering, customer notifications, and marketing campaigns without manual intervention." />
          <FAQItem question="What AI features are available for food truck businesses?" answer="Food trucks can benefit from AI phone ordering, automated order notifications, AI-powered marketing campaigns, and customer support automation. These tools help reduce missed calls and increase revenue." />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="final-cta-h2">Get the Right POS System for Your Food Truck</h2>
          <p className="text-xl text-purple-100 mb-8">
            Whether you run a food truck, street cart, or mobile kitchen, Merchant Solutions provides the payment technology you need to accept payments anywhere.
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
              { label: 'Payanywhere POS', path: '/payanywhere' },
              { label: 'Square POS', path: '/pos/square' },
              { label: 'Clover POS', path: '/clover-pos-system' },
              { label: 'QR Code Ordering', path: '/qr-code-mobile-ordering' },
              { label: 'Voice AI Automation', path: '/voice-ai-business-automation' },
              { label: 'Advantage Credit Program', path: '/free-pos-system' },
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
