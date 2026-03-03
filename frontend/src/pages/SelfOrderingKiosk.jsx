import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronRight, Monitor, Zap, DollarSign, Users, ArrowRight, Phone, ShoppingCart, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';

const SelfOrderingKiosk = () => {
  const [showAppModal, setShowAppModal] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    document.title = 'Best Self Ordering Kiosk for Restaurants | Clover, Square & iTabPOS | Merchant Solutions Corp';
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = 'Compare the best self ordering kiosk systems for restaurants. Clover, Square and iTabPOS with installation, consulting and merchant reimbursement programs across the United States, Canada and Puerto Rico.';
    if (metaDesc) metaDesc.setAttribute('content', content);
    else { const meta = document.createElement('meta'); meta.name = 'description'; meta.content = content; document.head.appendChild(meta); }
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    { q: 'What is the best self ordering kiosk for restaurants?', a: 'The best kiosk depends on volume, menu complexity and expansion plans. Clover, Square and iTabPOS each serve different business models.' },
    { q: 'Do self ordering kiosks increase revenue?', a: 'Yes. Automated upsells and faster ordering can increase average ticket size and improve throughput.' },
    { q: 'Can kiosk hardware be financed?', a: 'Yes. Qualified merchants may access reimbursement programs or structured payment plans.' },
    { q: 'Do kiosks integrate with online ordering?', a: 'Yes. Modern kiosk POS systems sync with online ordering and kitchen systems.' },
    { q: 'How long does installation take?', a: 'Most installations are completed after consultation, hardware delivery and menu configuration. Timing depends on business size and readiness.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-purple-300 font-semibold mb-4">Powered by Merchant Solutions Corp</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="hero-h1">
            Best Self Ordering Kiosk Systems for Restaurants
          </h1>
          <p className="text-lg text-purple-200 mb-4 max-w-3xl mx-auto">
            Self ordering kiosks are now standard in modern restaurants.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Reduce labor pressure', 'Increase speed of service', 'Improve order accuracy', 'Raise average ticket size'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="h-4 w-4 text-purple-300" />
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-purple-200 mb-2">Complete restaurant kiosk systems powered by:</p>
          <div className="flex justify-center gap-6 mb-8">
            {['iTabPOS', 'Clover', 'Square'].map((name, i) => (
              <span key={i} className="text-white font-bold text-xl">{name}</span>
            ))}
          </div>
          <p className="text-purple-300 mb-8">Serving restaurants across the United States, Canada and Puerto Rico.</p>
          <Button size="lg" onClick={() => setShowAppModal(true)} className="bg-white text-purple-700 hover:bg-purple-50 text-lg px-10 py-6 shadow-xl" data-testid="hero-cta">
            Book Kiosk Consultation <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* What Is a Self Service Kiosk */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="what-is-kiosk-h2">What Is a Self Service Kiosk for Restaurants?</h2>
              <p className="text-lg text-gray-700 mb-6">A restaurant self ordering kiosk is a touchscreen POS system that allows customers to:</p>
              <div className="space-y-3 mb-8">
                {['Browse menus', 'Customize items and modifiers', 'Add upsells automatically', 'Pay with card or contactless', 'Send orders directly to the kitchen'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">The kiosk connects to:</p>
              <div className="space-y-3 mb-8">
                {['Kitchen display systems', 'POS reporting dashboards', 'Online ordering platforms', 'Inventory management tools'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xl text-purple-700 font-semibold">This creates a fully automated restaurant ordering system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" data-testid="benefits-h2">Benefits of Installing a Restaurant Kiosk System</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">Restaurants using kiosk POS systems typically experience:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: DollarSign, title: '15–30% Increase', desc: 'In average ticket size through automated upsells' },
              { icon: Zap, title: 'Faster Throughput', desc: 'Customers order and pay without waiting for staff' },
              { icon: Users, title: 'Reduced Staffing', desc: 'Fewer front counter positions needed' },
              { icon: CheckCircle, title: 'Order Accuracy', desc: 'Customers enter their own orders correctly' },
              { icon: ShoppingCart, title: 'Higher Upsells', desc: 'Automated prompts increase add-on purchases' },
              { icon: Monitor, title: 'Contactless Pay', desc: 'Tap, chip, Apple Pay, Google Wallet support' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <item.icon className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Kiosks are ideal for:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Quick service restaurants', 'Fast casual concepts', 'Food halls', 'Cafeterias', 'Stadium and event venues', 'High traffic urban locations'].map((item, i) => (
              <span key={i} className="bg-purple-50 border border-purple-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center" data-testid="comparison-h2">Clover vs Square vs iTabPOS Kiosk Comparison</h2>
          <p className="text-lg text-gray-600 text-center mb-12">Choosing the best self ordering kiosk depends on your business model.</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Clover', tagline: 'Best for growing single or multi-location restaurants.',
                features: ['Integrated payment processing', 'Kitchen display compatibility', 'Loyalty program integration', 'Inventory tracking', 'Real time reporting', 'Dual pricing capability'],
                summary: 'Clover kiosks offer flexibility and scalability.',
                color: 'from-green-600 to-green-500'
              },
              {
                name: 'Square', tagline: 'Best for startups and simple operations.',
                features: ['Clean modern interface', 'Fast onboarding', 'Built in online ordering', 'Transparent flat rate pricing', 'Easy reporting tools'],
                summary: 'Square kiosk systems are ideal for lean teams.',
                color: 'from-gray-800 to-gray-700'
              },
              {
                name: 'iTabPOS', tagline: 'Best for high volume and franchise operators.',
                features: ['Advanced table and kitchen routing', 'Centralized multi-location control', 'Enterprise reporting', 'Custom integrations', 'Franchise ready structure'],
                summary: 'iTabPOS provides enterprise level restaurant automation.',
                color: 'from-purple-600 to-purple-500'
              }
            ].map((kiosk, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className={`bg-gradient-to-r ${kiosk.color} px-6 py-5`}>
                  <h3 className="text-xl font-bold text-white">{kiosk.name} Self Ordering Kiosk</h3>
                  <p className="text-white/80 text-sm mt-1">{kiosk.tagline}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    {kiosk.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{f}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-purple-700 font-semibold">{kiosk.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kiosk Cost */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="cost-h2">How Much Does a Restaurant Kiosk Cost?</h2>
              <p className="text-lg text-gray-700 mb-4">Restaurant kiosk pricing depends on:</p>
              <div className="space-y-3 mb-8">
                {['Hardware selection', 'Number of kiosks', 'Software subscription', 'Payment processing structure', 'Installation requirements'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-4">Typical components include:</p>
              <div className="space-y-3 mb-8">
                {['Touchscreen kiosk hardware', 'Card reader and payment device', 'Printer or kitchen display integration', 'POS software subscription'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mb-4">Costs vary based on configuration.</p>
              <p className="text-purple-700 font-semibold">Merchant Solutions Corp provides a structured analysis to determine the best kiosk investment for your restaurant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reimbursement Program */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="reimbursement-h2">Merchant Reimbursement Program for Kiosk Hardware</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-lg text-gray-700 mb-4">Many restaurant owners hesitate due to upfront cost.</p>
              <p className="text-lg text-gray-700 mb-6">Merchant Solutions Corp offers a merchant reimbursement program designed to offset kiosk hardware and software expenses.</p>
              <p className="text-lg text-gray-700 mb-4">How qualification works:</p>
              <div className="space-y-3">
                {['Merchant processes under our payment platform', 'Meets volume benchmarks', 'Selects approved kiosk hardware', 'Fulfills agreed processing period'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6 italic">Once benchmarks are met, reimbursement credits help offset hardware investment.</p>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-4">This allows restaurants to:</p>
              <div className="space-y-3 mb-8">
                {['Preserve working capital', 'Reduce upfront capital expenditure', 'Upgrade technology faster', 'Scale locations more efficiently'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-purple-50 border border-purple-100 rounded-xl p-6">
                <p className="text-gray-800 font-medium">In many cases, payment processing revenue helps cover kiosk ownership costs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Service Installation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="installation-h2">Full Service Kiosk Installation and Deployment</h2>
          <p className="text-xl text-gray-700 mb-2">We are not just a reseller.</p>
          <p className="text-lg text-gray-600 mb-8">Merchant Solutions Corp provides:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {['Kiosk consultation', 'Floor layout planning', 'Network configuration', 'Menu and modifier build', 'Tax setup', 'Kitchen routing setup', 'Staff training', 'Ongoing support'].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl px-4 py-4 text-center shadow-sm">
                <CheckCircle className="h-5 w-5 text-purple-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-2">You avoid launch day delays and configuration mistakes.</p>
          <p className="text-purple-700 font-semibold text-lg">We handle the deployment so you can focus on operations.</p>
        </div>
      </section>

      {/* Kiosk + Online Ordering */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="ecosystem-h2">Self Ordering Kiosk + Online Ordering = Maximum Growth</h2>
              <p className="text-lg text-gray-700 mb-4">Kiosks work best when paired with:</p>
              <div className="space-y-3 mb-8">
                {['Branded online ordering pages', 'Direct delivery integrations', 'Loyalty programs', 'Digital marketing campaigns'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-4">This increases:</p>
              <div className="space-y-3 mb-8">
                {['Direct order volume', 'Customer retention', 'Profit margins', 'Data ownership'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-4">We build the entire ecosystem:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Payments', 'POS', 'Kiosk', 'Online ordering', 'Growth infrastructure'].map((item, i) => (
                  <div key={i} className="bg-purple-50 border border-purple-100 rounded-lg px-4 py-3 text-center">
                    <span className="text-gray-800 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" data-testid="coverage-h2">Self Ordering Kiosk Systems in the United States, Canada and Puerto Rico</h2>
          <p className="text-purple-200 mb-8 max-w-2xl mx-auto">Merchant Solutions Corp provides restaurant kiosk installation services across:</p>
          <div className="flex justify-center gap-8 mb-8">
            {['United States', 'Canada', 'Puerto Rico'].map((loc, i) => (
              <div key={i} className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-purple-300" />
                <span className="text-white font-semibold text-lg">{loc}</span>
              </div>
            ))}
          </div>
          <p className="text-purple-200">We support single location operators and multi-unit restaurant groups.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white" data-testid="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Self Ordering Kiosk FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 bg-white hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                  <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MSC */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-testid="why-choose-h2">Why Choose Merchant Solutions Corp for Restaurant Kiosks?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Full service ISO and PayFac partner',
              'Restaurant focused payment expertise',
              'Clover, Square and iTabPOS certified',
              'Structured consulting approach',
              'Hardware reimbursement options',
              'Ongoing technical support'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-200">
                <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-purple-700 font-semibold text-lg mt-8">We design payment and ordering infrastructure that scales.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Book Your Kiosk Strategy Consultation</h2>
          <p className="text-purple-200 mb-4">If you are evaluating:</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Restaurant automation systems', 'Self service kiosks', 'POS upgrades', 'Labor cost reduction strategies'].map((item, i) => (
              <span key={i} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-purple-100">{item}</span>
            ))}
          </div>
          <p className="text-purple-200 mb-8">Schedule a kiosk consultation with Merchant Solutions Corp.</p>
          <div className="space-y-2 mb-8">
            <p className="text-white font-semibold text-lg">Deploy the right system.</p>
            <p className="text-white font-semibold text-lg">Increase efficiency.</p>
            <p className="text-white font-semibold text-lg">Scale with confidence.</p>
          </div>
          <Button size="lg" onClick={() => setShowAppModal(true)} className="bg-white text-purple-700 hover:bg-purple-50 text-lg px-10 py-6 shadow-xl" data-testid="cta-btn">
            <Phone className="h-5 w-5 mr-2" /> Schedule Consultation <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Calendly Modal */}
      {showAppModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowAppModal(false)}>
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Book Your Kiosk Consultation</h3>
              <button onClick={() => setShowAppModal(false)} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
            </div>
            <div className="p-6">
              <iframe
                src="https://calendly.com/mscpayments/new-agent-opportunity-one-on-one?back=1&month=2026-01"
                width="100%" height="600" frameBorder="0" title="Schedule Consultation"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelfOrderingKiosk;
