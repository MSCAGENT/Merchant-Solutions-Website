import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Phone, PhoneCall, Calendar, MessageSquare, Bell, TrendingUp,
  ChevronDown, CheckCircle, ArrowRight, Zap, Users, Clock,
  UtensilsCrossed, ShoppingBag, Scissors, Heart, Building2, Hotel,
  Monitor
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-5 text-left">
        <span className="text-lg font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="pb-5 text-gray-600 leading-relaxed">{answer}</div>}
    </div>
  );
};

export default function VoiceAIAutomation() {
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

  const posLogos = [
    { name: 'Toast POS', initial: 'T', color: 'bg-orange-500' },
    { name: 'Clover POS', initial: 'C', color: 'bg-green-600' },
    { name: 'Oracle Micros', initial: 'O', color: 'bg-red-600' },
    { name: 'Aloha POS', initial: 'A', color: 'bg-blue-600' },
    { name: 'Square POS', initial: 'S', color: 'bg-gray-900' },
    { name: 'SkyTab POS', initial: 'SK', color: 'bg-indigo-600' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Voice AI Business Automation for Restaurants &amp; Retail</title>
        <meta property="og:title" content="Voice AI Business Automation for Restaurants &amp; Retail" />
        <meta property="og:description" content="Automate customer calls, order taking, reservations, and appointment scheduling with Voice AI. Reduce missed calls and improve service with AI-powered phone assistants." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/voice-ai-business-automation" />
        <meta name="description" content="Automate customer calls, order taking, reservations, and appointment scheduling with Voice AI. Reduce missed calls and improve service with AI-powered phone assistants." />
        <meta name="keywords" content="voice AI business, AI phone receptionist, AI call answering system, AI ordering system, AI automation for restaurants, AI automation for Healthcare" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/voice-ai-business-automation" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Voice AI Business Automation",
          "provider": { "@type": "Organization", "name": "Merchant Solutions Corp" },
          "description": "AI-powered voice automation for phone ordering, appointment scheduling, and customer support for restaurants, retail, and service businesses.",
          "serviceType": "AI Automation",
          "areaServed": { "@type": "Country", "name": "United States" }
        })}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 70% 50%, rgba(147,51,234,0.3) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(59,130,246,0.2) 0%, transparent 50%)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="voice-ai-hero-h1">
                Voice AI Automation for Modern Businesses
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Never miss another customer call. Voice AI assistants answer questions, take orders, and schedule appointments automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={openCalendly} data-testid="hero-demo-btn">
                  Book Demo
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6" onClick={() => setShowFormModal(true)} data-testid="hero-contact-btn">
                  Contact Sales
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 border border-purple-400/40 flex items-center justify-center">
                    <PhoneCall className="h-20 w-20 text-purple-300" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                  <p className="text-sm font-bold text-white">24/7 Active</p>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                  <p className="text-sm font-bold text-white">0 Missed Calls</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS VOICE AI */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="what-is-h2">What Is Voice AI for Businesses</h2>
              <p className="text-lg text-gray-700 mb-4">
                Voice AI allows businesses to automate incoming phone calls using artificial intelligence that understands natural language and responds to customers in real time.
              </p>
              <p className="text-gray-700 mb-6">
                Instead of sending calls to voicemail or placing customers on hold, the AI assistant answers immediately and helps customers complete their request.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Businesses can automate:</p>
              <div className="grid grid-cols-2 gap-3">
                {['Phone orders', 'Appointment scheduling', 'Customer inquiries', 'Reservation requests'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
              <div className="space-y-4">
                {[
                  { time: '0:01', msg: '"Hi, I\'d like to place a takeout order."', from: 'customer' },
                  { time: '0:02', msg: '"Of course! I can help you with that. What would you like to order?"', from: 'ai' },
                  { time: '0:15', msg: '"Two chicken burritos and a large lemonade."', from: 'customer' },
                  { time: '0:16', msg: '"Got it! Two chicken burritos and a large lemonade. Your order total is $24.50. It will be ready in 20 minutes."', from: 'ai' },
                ].map((m, i) => (
                  <div key={i} className={`flex ${m.from === 'ai' ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-[80%] rounded-xl px-4 py-3 ${m.from === 'ai' ? 'bg-purple-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`}>
                      <p className="text-sm">{m.msg}</p>
                      {m.from === 'ai' && <p className="text-xs text-purple-300 mt-1 flex items-center gap-1"><Zap className="h-3 w-3" /> AI Assistant</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY VOICE AI */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="why-voice-ai-h2">Never Miss Another Customer Call</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Many businesses lose revenue because staff cannot answer the phone during busy hours. Voice AI ensures that every call is answered instantly, allowing customers to place orders or get information without waiting.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Phone, title: 'Fewer Missed Calls', desc: 'Every call is answered instantly, 24/7, even during peak hours.' },
              { icon: TrendingUp, title: 'Increased Sales', desc: 'Capture phone orders and bookings that would otherwise be lost.' },
              { icon: Zap, title: 'Faster Service', desc: 'Customers get immediate responses without waiting on hold.' },
              { icon: Users, title: 'Lower Labor Costs', desc: 'Reduce the need for dedicated phone staff during busy periods.' },
            ].map((item, i) => (
              <Card key={i} className="border hover:border-purple-300 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VOICE AI FOR RESTAURANTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="restaurants-h2">Voice AI for Restaurants</h2>
              <p className="text-lg text-gray-700 mb-4">
                Restaurants receive a large volume of phone calls for takeout orders and reservations.
              </p>
              <p className="text-gray-700 mb-6">
                Voice AI can automatically take food orders and send them directly to the POS system, ensuring orders are captured even during peak hours.
              </p>
              <div className="space-y-3">
                {[
                  'Automatically takes phone orders and sends to POS',
                  'Handles reservation requests and confirmations',
                  'Answers menu questions and specials',
                  'Works during peak hours when staff is busy',
                  'Reduces order errors from phone miscommunication',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/restaurant-payment-processing-services">
                  <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                    Restaurant POS Systems <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
              <div className="text-center mb-6">
                <UtensilsCrossed className="h-16 w-16 text-orange-500 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-900">Restaurant AI</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <p className="text-sm font-semibold text-gray-900">Phone Order</p>
                  <p className="text-xs text-gray-500">2x Chicken Tacos, 1x Burrito Bowl → POS</p>
                  <div className="w-full bg-green-100 rounded-full h-2 mt-2"><div className="bg-green-500 h-2 rounded-full w-full"></div></div>
                  <p className="text-xs text-green-600 mt-1">Sent to kitchen</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <p className="text-sm font-semibold text-gray-900">Reservation</p>
                  <p className="text-xs text-gray-500">Party of 4, Friday 7:30 PM</p>
                  <div className="w-full bg-blue-100 rounded-full h-2 mt-2"><div className="bg-blue-500 h-2 rounded-full w-full"></div></div>
                  <p className="text-xs text-blue-600 mt-1">Confirmed automatically</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOICE AI FOR RETAIL & SERVICE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="text-center mb-6">
                <ShoppingBag className="h-16 w-16 text-blue-500 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-900">Retail & Service AI</p>
              </div>
              <div className="space-y-3">
                {[
                  { q: '"What time do you close today?"', a: '"We\'re open until 9 PM today."' },
                  { q: '"Do you have the Nike Air Max in size 10?"', a: '"Let me check... Yes, we have it in stock."' },
                  { q: '"Can I book a haircut for Saturday?"', a: '"I have a 2:00 PM slot available. Shall I book it?"' },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-3 border border-gray-200">
                    <p className="text-xs text-gray-500">{item.q}</p>
                    <p className="text-sm text-purple-700 font-medium mt-1">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="retail-h2">Voice AI for Retail &amp; Service Businesses</h2>
              <p className="text-lg text-gray-700 mb-4">
                Retail stores and service providers can use Voice AI to answer questions about store hours, product availability, and appointment scheduling.
              </p>
              <p className="text-gray-700 mb-6">
                Customers receive immediate responses while employees remain focused on in-store operations.
              </p>
              <div className="space-y-3">
                {[
                  'Answers store hours and location questions',
                  'Checks product availability in real time',
                  'Schedules appointments automatically',
                  'Handles after-hours calls professionally',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POS INTEGRATION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="pos-integration-h2">Voice AI + POS Integration</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Voice AI works seamlessly with POS systems. Orders, reservations, and customer data can be automatically synchronized with the POS system.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {posLogos.map((pos, i) => (
              <div key={i} className="flex flex-col items-center gap-2 bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-purple-300 transition-all">
                <div className={`w-14 h-14 ${pos.color} rounded-xl flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{pos.initial}</span>
                </div>
                <p className="text-sm font-semibold text-gray-900 text-center">{pos.name}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/clover-pos-system"><Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">Clover POS <ArrowRight className="ml-1 h-4 w-4" /></Button></Link>
            <Link to="/pos/square"><Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">Square POS <ArrowRight className="ml-1 h-4 w-4" /></Button></Link>
            <Link to="/qr-code-mobile-ordering"><Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">QR Code Ordering <ArrowRight className="ml-1 h-4 w-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="industries-h2">Industries Using Voice AI</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: UtensilsCrossed, label: 'Restaurants' },
              { icon: ShoppingBag, label: 'Retail Stores' },
              { icon: Scissors, label: 'Salons & Spas' },
              { icon: Heart, label: 'Medical Offices' },
              { icon: Building2, label: 'Service Businesses' },
              { icon: Hotel, label: 'Hospitality' },
            ].map((ind, i) => (
              <Card key={i} className="border hover:border-purple-300 hover:shadow-md transition-all">
                <CardContent className="p-5 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                    <ind.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{ind.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12" data-testid="faq-h2">Voice AI FAQ</h2>
          <FAQItem question="Can Voice AI take restaurant phone orders?" answer="Yes. Voice AI can answer incoming calls, take food orders through natural conversation, and send them directly to your POS system for preparation." />
          <FAQItem question="Does Voice AI work with my existing POS system?" answer="Voice AI integrates with major POS systems including Toast, Clover, Oracle Micros, Aloha, Square, and SkyTab." />
          <FAQItem question="Can Voice AI schedule appointments?" answer="Yes. Salons, spas, medical offices, and service businesses can use Voice AI to schedule, confirm, and reschedule appointments automatically." />
          <FAQItem question="What happens if the AI can't answer a question?" answer="The AI will transfer the call to a live team member or take a message for follow-up." />
          <FAQItem question="Is Voice AI available 24/7?" answer="Yes. Voice AI operates around the clock, answering calls even after business hours." />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="final-cta-h2">Automate Your Business with Voice AI</h2>
          <p className="text-xl text-purple-100 mb-8">
            Stop losing customers to missed calls. Voice AI answers every call, takes orders, schedules appointments, and integrates directly with your POS system.
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
              { label: 'Restaurant POS Systems', path: '/restaurant-payment-processing-services' },
              { label: 'Clover POS', path: '/clover-pos-system' },
              { label: 'QR Code Ordering', path: '/qr-code-mobile-ordering' },
              { label: 'Square POS', path: '/pos/square' },
              { label: 'Self-Ordering Kiosk', path: '/best-self-ordering-kiosk-for-restaurants' },
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
