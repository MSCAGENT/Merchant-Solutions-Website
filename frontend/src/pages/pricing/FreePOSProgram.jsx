import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ChevronDown, DollarSign, BarChart3,
  Shield, TrendingUp, Building2, MapPin, CreditCard,
  UtensilsCrossed, ShoppingBag, Coffee, Scissors, Zap,
  ArrowRight, Monitor, Users, Headphones, Settings,
  Package, ClipboardCheck, Receipt, Star, Clock
} from 'lucide-react';
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

export default function FreePOSProgram() {
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
      { "@type": "Question", "name": "Do I really get the POS system for free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Businesses that meet the processing qualification requirements receive reimbursement that offsets the subscription cost, making it 100% free while still maintaining ownership." } },
      { "@type": "Question", "name": "Why is there a subscription agreement?", "acceptedAnswer": { "@type": "Answer", "text": "The subscription allows businesses to deploy POS hardware without paying thousands of dollars upfront." } },
      { "@type": "Question", "name": "What happens if I don't meet the volume requirement?", "acceptedAnswer": { "@type": "Answer", "text": "The subscription simply continues as agreed in the subscription term." } },
      { "@type": "Question", "name": "How long is the subscription agreement?", "acceptedAnswer": { "@type": "Answer", "text": "Most programs are structured as a 36-month subscription but can go up to 60 months depending on the amount of hardware and monthly volume for the location." } },
      { "@type": "Question", "name": "How long does it take to qualify?", "acceptedAnswer": { "@type": "Answer", "text": "Pre-Qualification is typically done at the time of application, and is fully reviewed and approved after the first full 30 days of processing." } },
      { "@type": "Question", "name": "What if my volume fluctuates due to low and high seasons?", "acceptedAnswer": { "@type": "Answer", "text": "Most of the time the hardware is reviewed with the minimum processing volume; this can still help you to qualify and offset 100% of your processing fees." } },
      { "@type": "Question", "name": "What if I close my business?", "acceptedAnswer": { "@type": "Answer", "text": "Businesses on the free terminal or POS program are tied to an agreement, which requires an early termination fee. The minimum termination fee starts at $295." } },
      { "@type": "Question", "name": "What happens if my business volume drops or I don't qualify for the Free POS program right away because my business is new?", "acceptedAnswer": { "@type": "Answer", "text": "If your business does not initially meet the processing volume required for the Free POS program, we may review your recent bank statements or financial history to better understand your expected sales volume. Based on that evaluation, we may place your account on an adjusted pricing that helps cover the costs associated with equipment, support, and installation services for your location. Regardless your account can sign up, and get started with the desired subscription, and then after 6 months we can go back and see if you qualify for your credits." } },
      { "@type": "Question", "name": "Will the Free POS program ever end while I am processing?", "acceptedAnswer": { "@type": "Answer", "text": "The Free POS program remains active as long as your account maintains sufficient processing volume and overall profitability to support it. If your business volume changes and no longer meets the requirements, we will notify you in advance by mail and phone to discuss available options and any adjustments that may be needed." } }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Free POS System Program | Get a Full POS System with No Upfront Cost</title>
        <meta name="description" content="Get any POS system with no upfront cost. Businesses that process $30K+ monthly may qualify for full credit after 30 days through our POS subscription program." />
        <meta name="keywords" content="free POS system, Clover POS free, POS system with no upfront cost, restaurant POS free program, free POS terminal program, POS equipment financing" />
        <link rel="canonical" href="/free-pos-system" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* 1. HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80" alt="free-pos-system" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl" data-testid="freepos-hero-h1">
            Get a Retail or Restaurant POS System with No Upfront Cost
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Start using a professional POS system today through our subscription program. Businesses that meet processing requirements may qualify for a credit to their account.
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
            <span className="flex items-center gap-1.5"><Monitor className="h-4 w-4 text-purple-400" /> Full Retail and Hospitality POS Systems</span>
            <span className="flex items-center gap-1.5"><DollarSign className="h-4 w-4 text-purple-400" /> No Upfront Hardware Cost</span>
            <span className="flex items-center gap-1.5"><ClipboardCheck className="h-4 w-4 text-purple-400" /> Qualification-Based Program</span>
            <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-purple-400" /> Free Next Day Funding</span>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="how-it-works-h2">How the Free POS Program Works</h2>
              <p className="text-lg text-gray-700 mb-4">
                Many businesses need modern POS technology but prefer not to invest thousands of dollars upfront.
              </p>
              <p className="text-gray-700 mb-6">
                Our Free POS Program allows qualified businesses to deploy a Clover POS system with no upfront equipment cost by enrolling in a subscription program.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">The process is simple:</p>
              <div className="space-y-4 mb-6">
                {[
                  { step: '1', text: 'Choose your POS system' },
                  { step: '2', text: 'Activate your payment processing account' },
                  { step: '3', text: 'Start using the system immediately' },
                  { step: '4', text: 'If your business meets the volume requirement within the first 30 days, we reimburse the subscription fee' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">{item.step}</div>
                    <p className="text-gray-700 pt-1.5">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <p className="text-purple-800 font-medium text-sm">
                  This program is only given to exclusive locations. When the qualification requirements are met, the POS system becomes effectively free for your business.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80"
                alt="clover-pos-system-terminal"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLOVER STATION DUO EXAMPLE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="example-h2">Example: Clover Station Duo Qualification</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              For example, businesses that choose the Clover Station Duo can receive the system through the subscription program.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-purple-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-5">
                  <Receipt className="h-7 w-7 text-purple-600" />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-purple-600 mb-2">Subscription</p>
                <p className="text-3xl font-extrabold text-gray-900">$119</p>
                <p className="text-gray-500">per month</p>
                <p className="text-sm text-gray-600 mt-3">36-month subscription agreement</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-5">
                  <BarChart3 className="h-7 w-7 text-blue-600" />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-2">Volume Requirement</p>
                <p className="text-3xl font-extrabold text-gray-900">$30K+</p>
                <p className="text-gray-500">per month in card transactions</p>
                <p className="text-sm text-gray-600 mt-3">With a cash discount program</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-emerald-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                  <DollarSign className="h-7 w-7 text-emerald-600" />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-600 mb-2">After 30 Days</p>
                <p className="text-3xl font-extrabold text-gray-900">$0</p>
                <p className="text-gray-500">effective cost</p>
                <p className="text-sm text-gray-600 mt-3">Reimbursed via ACH transfer</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto text-sm">
            If the volume requirement is met and the account qualifies, we reimburse the subscription fee via ACH (Automated Clearing House), which is an electronic network for financial transactions. This reimbursement offsets the subscription cost, making the point of sale (POS) system effectively free.
          </p>
        </div>
      </section>

      {/* 4. WHY THIS STRUCTURE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                alt="restaurant-pos-system"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="why-structure-h2">Why This Program Works for Growing Businesses</h2>
              <p className="text-lg text-gray-700 mb-6">
                POS systems are valuable business tools that normally require a large upfront investment.
              </p>
              <p className="text-gray-700 mb-4">Instead of forcing businesses to purchase expensive equipment upfront, our program allows companies to:</p>
              <div className="space-y-3">
                {[
                  'Deploy modern POS technology immediately',
                  'Get VIP installation and implementation services',
                  'Start accepting payments and managing sales',
                  'Qualify for reimbursement based on performance'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-5 text-sm">
                This structure rewards businesses that are actively processing transactions and growing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUALIFICATION REQUIREMENTS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="qualifications-h2">Qualification Requirements</h2>
              <p className="text-lg text-gray-700 mb-6">
                Each business is reviewed to ensure the program is a good fit and it's a win-win situation.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">Factors we review include:</p>
              <div className="space-y-3 mb-6">
                {[
                  { icon: BarChart3, text: 'Monthly processing volume' },
                  { icon: Building2, text: 'Business type' },
                  { icon: Clock, text: 'Time in business' },
                  { icon: Shield, text: 'Industry risk profile' },
                  { icon: Package, text: 'Equipment requirements' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-lg px-5 py-3.5 border border-gray-200">
                    <item.icon className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <p className="text-emerald-800 font-semibold">
                  Businesses processing a minimum of $10,000+ per month in card payments are typically strong candidates for the program.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                alt="business-qualification-review"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONFIDENT BUSINESSES */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="confident-h2">If You Know Your Business Does the Volume</h2>
          <p className="text-xl text-purple-200 mb-4">
            Many merchants already process $30,000 or more each month.
          </p>
          <p className="text-lg text-purple-300 mb-8">
            For those businesses, the free POS program is a smart way to upgrade their technology without a large upfront investment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            {[
              'Launch a professional POS system immediately',
              'Avoid thousands in upfront hardware costs',
              'Receive reimbursement after meeting the volume requirement'
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <CheckCircle className="h-6 w-6 text-emerald-400 mx-auto mb-3" />
                <p className="text-sm text-white font-medium">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-purple-200">
            For established businesses, this often makes the decision extremely simple.
          </p>
          <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg mt-6" onClick={() => setShowFormModal(true)} data-testid="confident-contact-btn">
            See If You Qualify <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* 7. INDUSTRIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="industries-h2">Industries That Benefit from the Free POS Program</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These businesses typically process enough monthly card volume to qualify quickly.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: UtensilsCrossed, label: 'Restaurants' },
              { icon: Coffee, label: 'Bars' },
              { icon: Coffee, label: 'Coffee Shops' },
              { icon: ShoppingBag, label: 'Retail Stores' },
              { icon: Scissors, label: 'Salons & Spas' },
              { icon: Zap, label: 'Quick-Service Restaurants' },
              { icon: Building2, label: 'Service Businesses' },
            ].map((item, i) => (
              <Card key={i} className="border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all">
                <CardContent className="p-5 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-3">
                    <item.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLOVER FEATURES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="clover-features-h2">What You Get with a Clover POS System</h2>
              <p className="text-gray-700 mb-6">Clover POS systems provide a complete business management platform designed for growing businesses.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: Package, text: 'Inventory management' },
                  { icon: BarChart3, text: 'Sales reporting dashboards' },
                  { icon: Users, text: 'Employee management' },
                  { icon: Star, text: 'Customer loyalty tools' },
                  { icon: CreditCard, text: 'Contactless payment acceptance' },
                  { icon: Settings, text: 'Online ordering integrations' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3.5 border border-gray-200">
                    <item.icon className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link to="/clover-pos-system" className="inline-flex items-center gap-2 text-purple-600 font-semibold mt-6 hover:text-purple-700 transition-colors">
                Learn more about Clover POS <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800&q=80"
                alt="clover-station-duo-pos"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHY MERCHANT SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="free-payment-terminals"
                className="w-full h-[380px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="why-msc-h2">Why Businesses Choose Our POS Programs</h2>
              <p className="text-gray-700 mb-6">We help ensure your Clover POS system is properly configured so your business can start processing payments immediately.</p>
              <div className="space-y-4">
                {[
                  { icon: Settings, text: 'Professional POS installation' },
                  { icon: ClipboardCheck, text: 'Menu and inventory setup' },
                  { icon: CreditCard, text: 'Payment processing integration' },
                  { icon: Users, text: 'Staff training and onboarding' },
                  { icon: Headphones, text: 'Ongoing technical support' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-purple-600" />
                    </div>
                    <p className="text-gray-700 font-medium pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-20 bg-gray-50" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12" data-testid="faq-h2">Free POS Program FAQ</h2>
          <FAQItem question="Do I really get the POS system for free?" answer="Yes. Businesses that meet the processing qualification requirements receive reimbursement that offsets the subscription cost, making it 100% free while still maintaining ownership." />
          <FAQItem question="Why is there a subscription agreement?" answer="The subscription allows businesses to deploy POS (point of sale) hardware without paying thousands of dollars upfront." />
          <FAQItem question="What happens if I don't meet the volume requirement?" answer="The subscription simply continues as agreed in the subscription term." />
          <FAQItem question="How long is the subscription agreement?" answer="Most programs are structured as a 36-month subscription but can go up to 60 months depending on the amount of hardware and monthly volume for the location." />
          <FAQItem question="How long does it take to qualify?" answer="Pre-Qualification is typically done at the time of application, which means an initial assessment of eligibility, and is fully reviewed and approved after the first full 30 days of processing." />
          <FAQItem question="What if my volume fluctuates due to low and high seasons?" answer="Most of the time the hardware is reviewed with the minimum processing volume; this can still help you to qualify and offset 100% of your processing fees." />
          <FAQItem question="What if I close my business?" answer="Businesses on the free terminal or POS program are tied to an agreement, which requires an early termination fee. The minimum termination fee starts at $295." />
          <FAQItem question="What happens if my business volume drops or I don't qualify for the Free POS program right away because my business is new?" answer="If your business does not initially meet the processing volume required for the Free POS program, we may review your recent bank statements or financial history to better understand your expected sales volume. Based on that evaluation, we may place your account on an adjusted pricing that helps cover the costs associated with equipment, support, and installation services for your location. Regardless your account can sign up, and get started with the desired subscription, and then after 6 months we can go back and see if you qualify for your credits." />
          <FAQItem question="Will the Free POS program ever end while I am processing?" answer="The Free POS program remains active as long as your account maintains sufficient processing volume and overall profitability to support it. If your business volume changes and no longer meets the requirements, we will notify you in advance by mail and phone to discuss available options and any adjustments that may be needed." />
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="final-cta-h2">See If Your Business Qualifies for a Free POS System</h2>
          <p className="text-xl text-purple-100 mb-8">
            If your business processes around $10,000 or more in monthly credit card transactions, you may qualify for our Free POS or terminal Program.
          </p>
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
              { label: 'Clover POS System', path: '/clover-pos-system' },
              { label: 'Payment Processing Pricing', path: '/payment-processing-pricing' },
              { label: 'Restaurant POS', path: '/restaurant-payment-processing-services' },
              { label: 'Payment Terminals', path: '/payment-terminals' },
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
