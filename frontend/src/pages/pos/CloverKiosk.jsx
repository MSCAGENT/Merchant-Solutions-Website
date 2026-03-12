import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown, ChevronRight, CreditCard, Shield, Zap, Users, TrendingUp, BarChart3, Monitor, Smartphone, Clock, ThumbsUp, Settings, GraduationCap, Headphones, MapPin, UtensilsCrossed, Coffee, Store, Utensils, Building2 } from 'lucide-react';
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

export default function CloverKiosk() {
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
      { "@type": "Question", "name": "What is a restaurant self-ordering kiosk?", "acceptedAnswer": { "@type": "Answer", "text": "A self-ordering kiosk is a touchscreen device that allows customers to browse menus, place orders, and pay independently without needing assistance from staff." } },
      { "@type": "Question", "name": "Does the Clover kiosk accept contactless payments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Clover kiosks support chip cards, contactless tap-to-pay, and mobile wallets including Apple Pay and Google Pay." } },
      { "@type": "Question", "name": "Can a kiosk increase restaurant revenue?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Kiosks often increase average order value through automated upselling and add-on suggestions during the ordering process." } },
      { "@type": "Question", "name": "Is the Clover kiosk good for quick-service restaurants?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The system is designed to speed up service and reduce long lines in high-volume quick-service restaurant environments." } },
      { "@type": "Question", "name": "How do I qualify for a free Clover kiosk?", "acceptedAnswer": { "@type": "Answer", "text": "Restaurants may qualify through Merchant Solutions' hardware reimbursement program based on monthly payment processing volume of $40,000 or more." } }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Clover Self-Ordering Kiosk | Restaurant Self Service POS</title>
        <meta property="og:title" content="Clover Self-Ordering Kiosk | Restaurant Self Service POS" />
        <meta property="og:description" content="Clover Kiosk is a self-ordering POS system designed for restaurants and quick-service businesses. Reduce lines, increase order value and improve service with a modern self-service kiosk." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/clover-kiosk" />
        <meta name="description" content="Clover Kiosk is a self-ordering POS system designed for restaurants and quick-service businesses. Reduce lines, increase order value and improve service with a modern self-service kiosk." />
        <meta name="keywords" content="Clover kiosk, restaurant self ordering kiosk, self service restaurant kiosk, restaurant ordering kiosk, Clover self ordering system, POS kiosk for restaurants, restaurant kiosk POS" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/clover-kiosk" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Clover Kiosk","serviceType":"Self-Service Ordering Kiosk","provider":{"@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com"},"areaServed":"United States","url":"https://merchantsolutionscorp.com/clover-kiosk","description":"Clover Kiosk self-service ordering system for restaurants and quick-service businesses."})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://merchantsolutionscorp.com/"},{"@type":"ListItem","position":2,"name":"POS Systems","item":"https://merchantsolutionscorp.com/pos-systems"},{"@type":"ListItem","position":3,"name":"Clover Kiosk","item":"https://merchantsolutionscorp.com/clover-kiosk"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com","logo":"https://customer-assets.emergentagent.com/job_merchant-central-11/artifacts/vmzehzol_MSC_1080x560.png","sameAs":["https://www.facebook.com/merchantsolutionscorp/","https://www.instagram.com/merchant_solutions_corp","https://www.linkedin.com/company/merchantsolutionscorp/","https://www.youtube.com/merchantsolutionscorp"]})}</script>
      </Helmet>

      {/* 1. HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="kiosk-hero-h1">
                Clover Self-Ordering Kiosk for Restaurants
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                Speed up service, reduce lines, and increase average order value with a modern self-service kiosk built for restaurants and quick-service venues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="hero-contact-btn">
                  Contact Sales
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6" onClick={openCalendly} data-testid="hero-demo-btn">
                  Book a 30-Minute Demo
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-400" data-testid="trust-line">
                <span className="flex items-center gap-1.5"><UtensilsCrossed className="h-4 w-4 text-purple-400" /> Built for Restaurants</span>
                <span className="flex items-center gap-1.5"><Monitor className="h-4 w-4 text-purple-400" /> 24" Touchscreen Kiosk</span>
                <span className="flex items-center gap-1.5"><Smartphone className="h-4 w-4 text-purple-400" /> Tap-to-Pay Ready</span>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/5 p-4">
                <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/787vimmt_kiosk-qsr-restaurant-image__1_.webp" alt="clover-self-ordering-kiosk" className="w-full max-w-[400px] object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS THE CLOVER KIOSK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What is the Clover Kiosk?</h2>
              <p className="text-lg text-gray-700 mb-4">
                The Clover self-ordering kiosk is an interactive touchscreen ordering system that allows customers to browse a digital menu, customize their order, and pay without needing assistance from staff.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The device combines hardware and software in one system that connects directly with the Clover POS platform, allowing restaurants to manage orders, payments, and reporting from one place.
              </p>
              <p className="text-gray-600 mb-4">The kiosk includes:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {['Large touchscreen display', 'Integrated payment terminal', 'Receipt printing', 'POS integration with Clover'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600">
                The all-in-one design helps restaurants streamline ordering while giving guests a fast and intuitive self-service experience.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-50 p-6">
              <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/q44tav0t_Kiosk%20in2%6012%20%281%29.png" alt="restaurant-self-service-kiosk" className="w-full object-contain" style={{ mixBlendMode: 'multiply' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">Why Restaurants Use Self-Ordering Kiosks</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">Self-ordering kiosks transform the way restaurants serve customers.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Clock, title: 'Reduce Wait Times', desc: 'Self-service kiosks allow customers to place orders independently, helping restaurants move lines faster during busy periods.' },
              { icon: TrendingUp, title: 'Increase Order Value', desc: 'Kiosks can suggest add-ons, upgrades, and combo items during the ordering process, increasing the average ticket size.' },
              { icon: ThumbsUp, title: 'Improve Accuracy', desc: 'Customers enter their own order directly into the system, which reduces communication errors between staff and guests.' },
              { icon: Users, title: 'Lower Labor Pressure', desc: 'Self-service ordering allows staff to focus on food preparation and customer service instead of taking orders at the counter.' },
              { icon: Smartphone, title: 'Better Experience', desc: 'An intuitive touchscreen interface makes it easy for customers to explore menus and customize orders at their own pace.' },
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

      {/* 4. HARDWARE FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-50 p-8 flex items-center justify-center">
              <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/787vimmt_kiosk-qsr-restaurant-image__1_.webp" alt="clover-kiosk-touchscreen" className="w-full max-w-[350px] object-contain" style={{ mixBlendMode: 'multiply' }} />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Clover Kiosk Hardware Features</h2>
              <p className="text-lg text-gray-700 mb-6">
                The kiosk is designed to handle high-volume restaurant environments while keeping ordering simple for customers.
              </p>
              <div className="space-y-4">
                {[
                  'Enterprise-grade 24-inch touchscreen display',
                  'Integrated payment terminal for chip, tap, and mobile',
                  'Built-in receipt printer',
                  'Support for Apple Pay, Google Pay, and contactless cards',
                  'Direct integration with Clover POS systems',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">Industries That Benefit from Self-Ordering Kiosks</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">Self-ordering kiosks are especially effective in high-volume environments where fast service and order accuracy are critical.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: UtensilsCrossed, label: 'Restaurants' },
              { icon: Zap, label: 'Quick-Service' },
              { icon: Coffee, label: 'Coffee Shops' },
              { icon: Utensils, label: 'Fast Casual' },
              { icon: Store, label: 'Food Courts' },
              { icon: Building2, label: 'Stadiums' },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-purple-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <v.icon className="h-6 w-6 text-purple-600" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FREE KIOSK PROGRAM */}
      <section className="py-20 bg-white" id="free-kiosk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                How to Get a Clover Kiosk with<br />
                <span className="text-purple-600">No Upfront Cost</span>
              </h2>
              <p className="text-lg text-gray-700 mt-4 mb-4">
                Merchant Solutions offers a kiosk placement program that allows qualified restaurants to receive Clover kiosk hardware with no upfront equipment cost. Businesses can qualify based on monthly payment processing volume.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Qualification Requirement</h3>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Self-Ordering Kiosk</p>
                    <p className="text-2xl font-bold text-purple-600">$40,000</p>
                    <p className="text-xs text-gray-500">minimum monthly processing volume</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">Restaurants that meet the processing threshold may receive hardware reimbursement after the required processing period.</p>

              <div className="space-y-3">
                {['No large upfront hardware investment', 'Access to modern kiosk technology', 'Fast return on investment through increased order volume'].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" /> {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Qualification Steps */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Free Kiosk Qualification Requirements</h3>
              <div className="space-y-5">
                {[
                  { step: '1', title: 'Choose Hardware', desc: 'Select Clover kiosk hardware for your restaurant.' },
                  { step: '2', title: 'Activate Processing', desc: 'Activate payment processing through Merchant Solutions.' },
                  { step: '3', title: 'Meet Volume Requirement', desc: 'Process $40,000 or more per month on dual pricing.' },
                  { step: '4', title: 'Get Reimbursed', desc: 'Receive hardware reimbursement once the qualification period is completed.' },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 italic mt-4">
                This program allows restaurants to upgrade to kiosk ordering technology without a large initial investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. KIOSK COMPARISON TABLE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">Clover vs Square vs iTabPOS Kiosk Systems</h2>
          <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">Compare leading kiosk platforms to find the right fit for your restaurant.</p>
          <div className="bg-white rounded-2xl shadow-lg overflow-x-auto border border-gray-200" data-testid="kiosk-comparison-table">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <th className="text-left py-4 px-5 font-semibold">Feature</th>
                  <th className="text-left py-4 px-5 font-semibold">Clover Kiosk</th>
                  <th className="text-left py-4 px-5 font-semibold">Square Kiosk</th>
                  <th className="text-left py-4 px-5 font-semibold">iTabPOS Kiosk</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Hardware', '24" self-ordering kiosk', 'Tablet-based kiosk', 'Custom kiosk terminal'],
                  ['Best For', 'Quick service restaurants', 'Small cafes & startups', 'Full restaurant automation'],
                  ['Payment Processing', 'Clover integrated payments', 'Square payments', 'Multiple processors'],
                  ['Menu Management', 'Clover POS dashboard', 'Square POS', 'Full restaurant POS system'],
                  ['Customization', 'Moderate', 'Basic', 'High'],
                ].map(([feature, clover, square, itab], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3.5 px-5 font-semibold text-gray-900">{feature}</td>
                    <td className="py-3.5 px-5 text-gray-700">{clover}</td>
                    <td className="py-3.5 px-5 text-gray-700">{square}</td>
                    <td className="py-3.5 px-5 text-gray-700">{itab}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-center mt-6 max-w-2xl mx-auto text-sm">
            Square kiosks are often easier for small operators, while Clover offers deeper hardware integration for restaurants seeking scalable POS systems.
          </p>
        </div>
      </section>

      {/* 8. WHY MERCHANT SOLUTIONS */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Install Your Clover Kiosk Through Merchant Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our team assists in correctly configuring your kiosk system to enhance your restaurant's ordering speed and efficiency.
              </p>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: 'Professional kiosk installation' },
                  { icon: UtensilsCrossed, label: 'Menu and POS setup' },
                  { icon: CreditCard, label: 'Payment processing integration' },
                  { icon: GraduationCap, label: 'Staff training and onboarding' },
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
              <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/889xwcgb_IT%20tech_installer.png" alt="MSC technician installing kiosk" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-20 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Clover Kiosk FAQ</h2>
          <FAQItem question="What is a restaurant self-ordering kiosk?" answer="A self-ordering kiosk is a touchscreen device that allows customers to browse menus, place orders, and pay independently without needing assistance from staff." />
          <FAQItem question="Does the Clover kiosk accept contactless payments?" answer="Yes. Clover kiosks support chip cards, contactless tap-to-pay, and mobile wallets including Apple Pay and Google Pay." />
          <FAQItem question="Can a kiosk increase restaurant revenue?" answer="Yes. Kiosks often increase average order value through automated upselling and add-on suggestions during the ordering process." />
          <FAQItem question="Is the Clover kiosk good for quick-service restaurants?" answer="Yes. The system is designed to speed up service and reduce long lines in high-volume quick-service restaurant environments." />
          <FAQItem question="How do I qualify for a free Clover kiosk?" answer="Restaurants may qualify through Merchant Solutions' hardware reimbursement program based on monthly payment processing volume of $40,000 or more." />
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Upgrade Your Restaurant with a Self-Ordering Kiosk</h2>
          <p className="text-xl text-purple-100 mb-8">Self-service kiosks help restaurants serve more customers, reduce labor pressure, and increase order value.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" onClick={() => setShowFormModal(true)} data-testid="cta-contact-btn">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" onClick={openCalendly} data-testid="cta-demo-btn">
              Book a 30-Minute Demo
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
              { label: 'Payment Terminals', path: '/payment-terminals' },
              { label: 'Self Ordering Kiosk Solutions', path: '/best-self-ordering-kiosk-for-restaurants' },
              { label: 'Clover POS System', path: '/clover-pos-system' },
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
