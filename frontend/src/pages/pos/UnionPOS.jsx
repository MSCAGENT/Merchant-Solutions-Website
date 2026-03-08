import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown, ChevronRight, Zap, Users, TrendingUp, BarChart3, Activity, Smartphone, QrCode, CreditCard, Settings, GraduationCap, Headphones, MapPin, UtensilsCrossed, Wine, Music, Dumbbell, Building2, Calendar, Shield } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-5 text-left" aria-expanded={open} data-testid={`faq-toggle-${question.slice(0, 20).replace(/\s/g, '-').toLowerCase()}`}>
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

export default function UnionPOS() {
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
      { "@type": "Question", "name": "What is Union POS?", "acceptedAnswer": { "@type": "Answer", "text": "Union POS is a hospitality operating system designed for bars and restaurants that combines point-of-sale tools with guest mobile ordering technology." } },
      { "@type": "Question", "name": "How does guest-led ordering work?", "acceptedAnswer": { "@type": "Answer", "text": "Guests scan a QR code to access the menu, place orders, and pay from their phone. Orders are sent directly to the POS or kitchen display system without needing to download an app." } },
      { "@type": "Question", "name": "Is Union POS good for high-volume venues?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The system is specifically designed for bars and busy hospitality environments, supporting hundreds of active tabs while maintaining fast and reliable performance." } },
      { "@type": "Question", "name": "Does Union POS support mobile payments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Guests can pay using credit cards, mobile wallets, and contactless payment options directly from their device." } },
      { "@type": "Question", "name": "Can Union integrate with other hospitality tools?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The system supports integrations with scheduling, reservation, payroll, and hospitality management software." } }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Union POS System for Bars &amp; Restaurants | High-Volume Hospitality POS</title>
        <meta name="description" content="Union POS is a modern hospitality operating system designed for high-volume bars and restaurants. Speed up service, increase revenue, and enhance guest experiences with guest-led ordering and powerful POS tools." />
        <meta name="keywords" content="Union POS, Union restaurant POS, Union bar POS, POS system for bars, POS for high-volume restaurants, guest-led ordering POS, hospitality POS system" />
        <link rel="canonical" href="/union-pos-system" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-gray-950 text-white py-24 md:py-36">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1761936513630-7553a70f292c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwzfHxidXN5JTIwYmFyJTIwbmlnaHRsaWZlJTIwY29ja3RhaWxzJTIwcmVzdGF1cmFudHxlbnwwfHx8fDE3NzI5OTIxMTR8MA&ixlib=rb-4.1.0&q=85" alt="busy-bar-nightlife" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl" data-testid="union-hero-h1">
            Union POS System for High-Volume Bars and Restaurants
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            A powerful hospitality operating system designed to help busy venues serve more guests, increase revenue, and streamline operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={openCalendly} data-testid="hero-demo-btn">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6" onClick={() => setShowFormModal(true)} data-testid="hero-specialist-btn">
              Talk to a POS Specialist
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400" data-testid="trust-badges">
            <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-purple-400" /> Built for Hospitality</span>
            <span className="flex items-center gap-1.5"><Activity className="h-4 w-4 text-purple-400" /> Cloud-Based POS</span>
            <span className="flex items-center gap-1.5"><QrCode className="h-4 w-4 text-purple-400" /> Guest-Led Ordering Technology</span>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS UNION POS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What is Union POS?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Union POS is a modern hospitality operating system designed specifically for high-volume bars, restaurants, and nightlife venues. The platform combines a powerful point-of-sale system with guest-led ordering technology that allows customers to browse menus, place orders, and pay directly from their phone.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Instead of relying entirely on staff to manage orders and payments, Union helps automate parts of the guest experience, allowing venues to serve more customers faster while improving service quality.
              </p>
              <p className="text-gray-600 mb-4">The system brings together:</p>
              <div className="grid grid-cols-2 gap-3">
                {['POS management', 'Guest mobile ordering', 'Payment processing', 'Reporting & analytics', 'Hospitality integrations'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-4">
                By combining these tools into a single system, Union helps venues increase operational efficiency while delivering a better guest experience.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1755019859734-fb45408efc30?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwyfHxidXN5JTIwYmFyJTIwbmlnaHRsaWZlJTIwY29ja3RhaWxzJTIwcmVzdGF1cmFudHxlbnwwfHx8fDE3NzI5OTIxMTR8MA&ixlib=rb-4.1.0&q=85" alt="union-pos-nightlife-venue" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">Benefits of Union POS</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">Why hospitality businesses choose Union POS to power their venues.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Zap, title: 'Faster Service', desc: "Union's guest-led ordering technology allows customers to scan a QR code, view the digital menu, and order directly from their phone, reducing wait times and helping drinks reach customers faster." },
              { icon: Users, title: 'Serve More Guests', desc: 'Because guests can order and pay on their own device, staff can focus on delivering great service instead of managing every transaction. Venues can cover significantly more tables.' },
              { icon: TrendingUp, title: 'Increase Revenue', desc: 'Union helps venues drive higher average checks and repeat visits through automated rewards, personalized recommendations, and faster service experiences.' },
              { icon: Activity, title: 'High-Volume Ready', desc: "Union's POS system is designed to handle busy hospitality environments, supporting hundreds of active tabs while maintaining fast and reliable performance." },
              { icon: BarChart3, title: 'Data-Driven Insights', desc: 'Managers can access real-time reporting dashboards that reveal top-performing products, sales trends, and venue performance metrics.' },
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

      {/* 4. PLATFORM FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">Powerful Features Built for Hospitality</h2>
          <p className="text-lg text-gray-600 text-center mb-14 max-w-3xl mx-auto">Union POS platform features that transform how your venue operates.</p>

          <div className="space-y-16">
            {/* Guest-Led Ordering */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <QrCode className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Guest-Led Ordering</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Guests scan a QR code to view the digital menu, place orders, and pay from their smartphone without downloading an app. Orders are sent directly to the POS or kitchen display system.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['Faster ordering', 'Shorter wait times', 'Reduced staff workload'].map((b, i) => (
                    <div key={i} className="bg-purple-50 rounded-lg px-4 py-3 text-sm font-medium text-purple-700 text-center">{b}</div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1600261701184-26683e392174?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwyfHxxciUyMGNvZGUlMjBvcmRlcmluZyUyMHJlc3RhdXJhbnQlMjB0YWJsZXxlbnwwfHx8fDE3NzI5OTIxMTl8MA&ixlib=rb-4.1.0&q=85" alt="restaurant-table-ordering" className="w-full h-[300px] object-cover" />
              </div>
            </div>

            {/* Smart POS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1763771757330-3212b518e31c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxiYXJ0ZW5kZXIlMjBzZXJ2aW5nJTIwYnVzeSUyMGJhciUyMGNvdW50ZXJ8ZW58MHx8fHwxNzcyOTkyMTIwfDA&ixlib=rb-4.1.0&q=85" alt="bartender-busy-bar-pos" className="w-full h-[300px] object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Smart Point of Sale</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Union provides a cloud-based POS system designed for the fast pace of bars and restaurants. It manages orders, payments, and active tabs while keeping everything synchronized in real time.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {['Tab management', 'Order routing', 'Payment processing', 'Reporting dashboards'].map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {cap}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Remaining features as cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: TrendingUp, title: 'Guest Rewards & Loyalty', desc: 'Union automatically provides guests with personalized rewards and promotions to encourage repeat visits and increased spending. Rewards are often funded through the platform while venues receive full price for items sold.' },
                { icon: Smartphone, title: 'Mobile Ordering Experience', desc: 'Guests can browse menus, discover drinks, and order instantly from their device. This mobile-first experience reduces friction and improves the speed of service across the venue.' },
                { icon: Settings, title: 'Hospitality Integrations', desc: 'Union integrates with leading hospitality software solutions including scheduling, reservations, and accounting tools to create a complete venue management ecosystem.' },
              ].map((f, i) => (
                <Card key={i} className="border hover:border-purple-300 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <f.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BY VENUE TYPE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">Built for Modern Hospitality Venues</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">Union is designed specifically for venues where speed and guest experience are critical.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Wine, label: 'Bars' },
              { icon: Music, label: 'Nightclubs' },
              { icon: Dumbbell, label: 'Sports Bars' },
              { icon: UtensilsCrossed, label: 'High-Volume Restaurants' },
              { icon: Music, label: 'Live Music Venues' },
              { icon: Building2, label: 'Hospitality Groups' },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-purple-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <v.icon className="h-6 w-6 text-purple-600" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">{v.label}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-center mt-8 max-w-2xl mx-auto">
            The system helps these venues manage high transaction volumes while delivering a faster and more engaging guest experience.
          </p>
        </div>
      </section>

      {/* 6. WHY CHOOSE MERCHANT SOLUTIONS */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Get Union POS Through Merchant Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our team ensures your Union POS system is installed and optimized for your venue so you can focus on delivering great guest experiences.
              </p>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: 'Professional installation and setup' },
                  { icon: UtensilsCrossed, label: 'Menu and POS configuration' },
                  { icon: CreditCard, label: 'Payment processing integration' },
                  { icon: GraduationCap, label: 'Staff training and onboarding' },
                  { icon: Headphones, label: 'Ongoing support and consulting' },
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
              <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/889xwcgb_IT%20tech_installer.png" alt="MSC technician installing Union POS system" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">How Union POS Improves Service</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">This workflow reduces congestion at the bar and speeds up service across the entire venue.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Scan', desc: 'Guests scan a QR code or access the digital menu from their table or bar seat.', color: 'bg-purple-600' },
              { step: '2', title: 'Order', desc: 'Orders are placed directly from the guest\'s device — no app download needed.', color: 'bg-purple-500' },
              { step: '3', title: 'Prepare', desc: 'Orders appear instantly in the POS or kitchen display system for fulfillment.', color: 'bg-blue-500' },
              { step: '4', title: 'Pay', desc: 'Guests pay and close their tab digitally — fast, simple, and contactless.', color: 'bg-blue-600' },
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
        </div>
      </section>

      {/* 8. INTEGRATIONS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">Connect Union With Your Favorite Tools</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Union integrates with leading hospitality platforms for scheduling, reservations, payroll, and analytics. These integrations allow venues to create a complete operational ecosystem.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calendar, title: 'Reservation Systems', desc: 'Connect with popular booking and table management platforms.' },
              { icon: Users, title: 'Staff Scheduling', desc: 'Sync with workforce management and scheduling software.' },
              { icon: BarChart3, title: 'Accounting Tools', desc: 'Integrate with accounting and financial reporting platforms.' },
              { icon: Building2, title: 'Hospitality Management', desc: 'Connect with enterprise hospitality management systems.' },
            ].map((int, i) => (
              <Card key={i} className="border hover:border-purple-300 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <int.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{int.title}</h3>
                  <p className="text-sm text-gray-600">{int.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-20 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Union POS FAQ</h2>
          <FAQItem question="What is Union POS?" answer="Union POS is a hospitality operating system designed for bars and restaurants that combines point-of-sale tools with guest mobile ordering technology." />
          <FAQItem question="How does guest-led ordering work?" answer="Guests scan a QR code to access the menu, place orders, and pay from their phone. Orders are sent directly to the POS or kitchen display system without needing to download an app." />
          <FAQItem question="Is Union POS good for high-volume venues?" answer="Yes. The system is specifically designed for bars and busy hospitality environments, supporting hundreds of active tabs while maintaining fast and reliable performance." />
          <FAQItem question="Does Union POS support mobile payments?" answer="Yes. Guests can pay using credit cards, mobile wallets, and contactless payment options directly from their device." />
          <FAQItem question="Can Union integrate with other hospitality tools?" answer="Yes. The system supports integrations with scheduling, reservation, payroll, and hospitality management software." />
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Upgrade Your Venue With Union POS</h2>
          <p className="text-xl text-purple-100 mb-8">Union POS helps hospitality venues serve guests faster, increase revenue, and streamline operations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" onClick={openCalendly} data-testid="cta-demo-btn">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" onClick={() => setShowFormModal(true)} data-testid="cta-specialist-btn">
              Speak With a POS Specialist
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
              { label: 'Payment Processing', path: '/solutions/payment-processing' },
              { label: 'Restaurant POS', path: '/restaurant-payment-processing-services' },
              { label: 'Self Ordering Kiosk', path: '/best-self-ordering-kiosk-for-restaurants' },
              { label: 'Payment Terminals', path: '/pos/payment-terminals-overview' },
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
            <iframe src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" className="w-full h-[80vh] border-0 rounded-2xl" title="Talk to a POS Specialist" />
          </div>
        </div>
      )}
    </div>
  );
}
