import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  DollarSign,
  Shield,
  Zap,
  BarChart3,
  Building2,
  MapPin,
  Wrench,
  Clock,
  CreditCard,
  Users,
  TrendingUp,
  Settings,
  Phone,
  Banknote,
  Handshake,
  Package,
  ArrowRight
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';

const ATMsSolution = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);

  useEffect(() => {
    document.title = 'ATM Solutions | Placement, Partnership & Purchase Programs | ATM Merchant Solutions';
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = 'ATM placement, partnership, and purchase programs for businesses. Free ATM placement, 50/50 partnership, or full ownership. GenMega and Hyosung ATMs at wholesale prices with free processing.';
    if (metaDesc) {
      metaDesc.setAttribute('content', content);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);

  useEffect(() => {
    if (!showCalendlyModal) return;
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const s = document.createElement('script');
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.head.appendChild(s);
    }
  }, [showCalendlyModal]);

  const programs = [
    {
      icon: Building2,
      title: 'ATM Placement',
      tagline: 'Completely hands-off. Hassle-free. Our most popular option.',
      desc: 'If you have a high-traffic establishment, we\'ll put one of our ATMs in your location for free, take care of everything, and pay you for it. The full-service ATM placement is a completely hands-off, hassle-free program with no financial commitment, making it our most popular option.',
      features: ['No equipment cost', 'Free installation & setup', 'We handle cash loading', 'We handle all maintenance', 'You earn passive revenue', 'No contracts or commitments'],
      highlight: 'Most Popular',
      image: 'https://customer-assets.emergentagent.com/job_4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/artifacts/zuhq9l74_Sixt%20ATM.jpg'
    },
    {
      icon: Handshake,
      title: 'ATM Partnership',
      tagline: 'Purchase 50%. Manage the ATM. Keep 50% of surcharge revenue.',
      desc: 'If you purchase 50% and manage the ATM, you\'ll keep 50% of surcharge revenue after processing fees. Our merchant-partnership ATM program is ideal for business owners with sufficient capital and time to manage and vault the terminal, offering a great opportunity to increase revenue at your location.',
      features: ['50% equipment investment', '50% surcharge revenue share', 'You manage and vault', 'Processing included', 'Higher revenue per transaction', 'Ideal for hands-on owners'],
      highlight: 'Best ROI',
      image: 'https://customer-assets.emergentagent.com/job_4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/artifacts/qxrh7knn_unnamed.jpg'
    },
    {
      icon: DollarSign,
      title: 'ATM Purchase',
      tagline: 'Buy it. Load it. Keep 100% of surcharge revenue.',
      desc: 'If you purchase, load, and manage the ATM, you\'ll keep 100% of surcharge revenue after processing fees. Our merchant-owned ATM program is ideal for business owners with sufficient capital, offering a great opportunity to increase revenue at your location.',
      features: ['Full ATM ownership', '100% surcharge revenue', 'You load and manage cash', 'Free transaction processing', 'No hidden fees or minimums', 'Maximum revenue potential'],
      highlight: 'Full Ownership',
      image: 'https://customer-assets.emergentagent.com/job_4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/artifacts/tk3s9pxa_download.jpg'
    }
  ];

  const atmFeatures = [
    'EMV chip card ready',
    'ADA compliant',
    'Contactless capable',
    'Multi-language support',
    'Receipt printing',
    'Balance inquiries',
    'Cash dispensing',
    'Secure PIN entry'
  ];

  const services = [
    { icon: Wrench, title: 'Installation', desc: 'Professional setup and configuration' },
    { icon: Banknote, title: 'Cash Loading', desc: 'Regular cash replenishment services' },
    { icon: Settings, title: 'Maintenance', desc: '24/7 monitoring and repairs' },
    { icon: BarChart3, title: 'Reporting', desc: 'Real-time transaction data' }
  ];

  const idealLocations = [
    'Convenience stores', 'Gas stations', 'Restaurants & bars', 'Hotels & motels',
    'Retail stores', 'Laundromats', 'Event venues', 'Office buildings'
  ];

  const partnerProgramFeatures = [
    'New ATMs at wholesale prices',
    'EMV chip readers included',
    'Electronic locks included',
    '1,000-note cartridge',
    'Pre-programmed and ready to use',
    'Free transaction processing',
    'Surcharge passed to cardholder',
    'No hidden costs or contracts',
    'No monthly minimums',
    '100% surcharge revenue (if owned outright)'
  ];

  const faqs = [
    { question: 'How much does ATM placement cost?', answer: 'Nothing. Our free placement program has zero upfront cost to you. We install, maintain, and load the ATM at no charge. You earn passive income from every transaction.' },
    { question: 'How much can I earn from an ATM?', answer: 'Revenue varies based on location traffic and transaction volume. High-traffic locations like convenience stores and bars can generate significant monthly income from surcharge fees.' },
    { question: 'What brands of ATMs do you offer?', answer: 'Through our partnership with Cardtronics, we distribute GenMega and Hyosung ATMs — two of the most reliable and widely deployed brands in North America.' },
    { question: 'How fast can an ATM be installed?', answer: 'Most ATM installations are completed within 5-10 business days from approval, depending on location requirements and configuration.' },
    { question: 'Are there contracts or monthly minimums?', answer: 'No. There are no hidden costs, contracts, or monthly minimums. Our programs are designed to be straightforward and transparent.' },
    { question: 'Do I need to load the cash myself?', answer: 'It depends on your program. With our free placement program, we handle everything including cash loading. With partnership or purchase programs, you manage and vault the terminal.' },
    { question: 'How do I get a quote or learn about the reseller program?', answer: 'For updated prices, quotes, or questions about our Referral or Reseller program, call 1-800-407-8886 or contact us through our chat.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-gray-900">
        <img
          src="https://images.pexels.com/photos/4744706/pexels-photo-4744706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1600"
          alt="Close-up of modern ATM card slot with security features"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/60 to-gray-900/70" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg" data-testid="hero-h1">
              ATM Solutions for Your Business
            </h1>
            <p className="text-xl text-purple-200 font-semibold mb-4">
              Generate Revenue with a Cash Machine at Your Location
            </p>
            <p className="text-lg text-gray-300 mb-4">
              Add an ATM to your business and earn passive income on every transaction. Attract more customers and increase sales with convenient cash access.
            </p>
            <p className="text-base text-gray-400 mb-8">
              Free placement options available. We handle installation, maintenance, and cash loading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg"
                onClick={() => setShowContactModal(true)}
                data-testid="hero-get-started-btn"
              >
                Get a Free ATM
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6"
                onClick={() => setShowCalendlyModal(true)}
                data-testid="hero-learn-more-btn"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'Passive Income', desc: 'Earn on every transaction' },
              { title: 'Increase Traffic', desc: 'Attract more customers' },
              { title: 'Boost Sales', desc: 'Cash customers spend more' },
              { title: 'Free Placement', desc: 'No upfront cost options' }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATM Merchant Solutions Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="programs-h2">
              ATM Merchant Solutions Programs
            </h2>
            <p className="text-lg text-gray-600">Choose the program that works best for your business</p>
          </div>

          {programs.map((program, index) => {
            const Icon = program.icon;
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`mb-16 last:mb-0 ${index > 0 ? 'pt-16 border-t border-gray-100' : ''}`}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {program.highlight}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-lg text-purple-600 font-semibold mb-4">{program.tagline}</p>
                    <p className="text-gray-600 mb-6">{program.desc}</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      onClick={() => setShowContactModal(true)}
                    >
                      Get More Info
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center">
                    <img src={program.image} alt={program.title} className="w-full h-[380px] object-contain p-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Partner Program with Cardtronics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://customer-assets.emergentagent.com/job_4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/artifacts/x51rj05d_GettyImages-1218865703_3593FC_A_ADOBERGB-1024x704.jpg"
                alt="Two friends using ATM machine on city street"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Package className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900" data-testid="partner-program-h2">
                  ATM Partner Program
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-4">
                ATM Merchant Solutions, in partnership with Cardtronics, is a leading distributor of <strong>GenMega and Hyosung ATMs</strong> across North America.
              </p>
              <p className="text-gray-600 mb-6">
                We offer new ATMs at wholesale prices, equipped with EMV chip readers, electronic locks, and a 1,000-note cartridge. Our ATMs arrive pre-programmed, ready for immediate use.
              </p>
              <div className="space-y-3 mb-6">
                {partnerProgramFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6">
                <p className="text-purple-800 text-sm">
                  <strong>For updated prices, quotes, or questions about our Referral or Reseller program,</strong> call <a href="tel:18004078886" className="text-purple-600 font-bold underline">1-800-407-8886</a> or contact us online through our chat.
                </p>
              </div>
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                onClick={() => setShowContactModal(true)}
              >
                Get a Wholesale Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ATM Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900" data-testid="features-h2">ATM Features</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Modern, reliable ATMs with the latest security and convenience features.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {atmFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg" data-testid="atm-features-image">
              <img
                src="https://images.unsplash.com/photo-1585432975862-d1b85ab0e203?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800"
                alt="Person holding debit card ready to use at ATM machine"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="services-h2">Full-Service ATM Management</h2>
            <p className="text-lg text-gray-600">We handle everything so you can focus on your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ideal Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-lg" data-testid="locations-image">
              <img
                src="https://images.pexels.com/photos/5762240/pexels-photo-5762240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Convenience store location ideal for ATM placement"
                className="w-full h-[380px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900" data-testid="locations-h2">Ideal Locations</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                ATMs perform best in high-traffic locations with cash-oriented customers.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {idealLocations.map((location, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Add an ATM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="why-atm-h2">Why Add an ATM?</h2>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {[
                    'Generate passive income from every transaction',
                    'Attract customers who prefer cash',
                    'Reduce credit card processing fees',
                    'Increase average purchase amounts',
                    'Provide convenience to customers'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="faq-h2">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="final-cta-h2">
            Ready to Add an ATM to Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get a free ATM placement or learn about our purchase and partnership options. Start earning passive income today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => setShowContactModal(true)}
              data-testid="cta-free-atm-btn"
            >
              Get a Free ATM
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6"
              onClick={() => setShowCalendlyModal(true)}
              data-testid="cta-contact-btn"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link to="/solutions/payment-processing" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Payment Processing</Link>
            <Link to="/pos/clover" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Clover POS</Link>
            <Link to="/restaurant-payment-processing-florida" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Restaurants</Link>
            <Link to="/high-risk-merchant-services" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">High Risk</Link>
          </div>
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides ATM placement, ATM partnership, ATM purchase, and ATM processing services for businesses across all 50 US states. In partnership with Cardtronics, we distribute GenMega and Hyosung ATMs at wholesale prices with free transaction processing. Free ATM placement available for qualified high-traffic locations. Full-service ATM management including installation, cash loading, maintenance, and 24/7 support.
          </p>
        </div>
      </section>

      {/* Contact Sales Modal (Lead Connector) */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowContactModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
              data-testid="contact-modal-close"
            >
              &#x2715;
            </button>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A"
              className="w-full h-[80vh] border-0 rounded-2xl"
              title="ATM Solutions Inquiry"
            />
          </div>
        </div>
      )}

      {/* Calendly Modal */}
      {showCalendlyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowCalendlyModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-4 h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowCalendlyModal(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
              data-testid="calendly-modal-close"
            >
              &#x2715;
            </button>
            <div
              className="calendly-inline-widget w-full h-full"
              data-url="https://calendly.com/mscpayments/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=5c36f5"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ATMsSolution;
