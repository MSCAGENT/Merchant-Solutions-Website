import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, Shield, AlertTriangle, ChevronRight, ArrowRight,
  DollarSign, BarChart3, CreditCard, Monitor, Settings, Fuel,
  Building2, Zap, Lock, Phone, Clock, Wrench, MapPin,
  ShoppingCart, Truck, Globe, RefreshCw, AlertCircle,
  CircleDot, Wifi, HardDrive
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from '../../components/ui/accordion';

const GasStationProcessing = () => {
  const [showLeadModal, setShowLeadModal] = useState(false);

  useEffect(() => {
    document.title = 'Gas Station Payment Processing, EMV Fuel Pump & POS Upgrades | Merchant Solutions Corp';
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = 'Gas station payment processing, EMV fuel pump upgrades, fleet card acceptance, and petroleum POS systems. Reduce fees, improve funding speed, and modernize your forecourt technology.';
    if (metaDesc) metaDesc.setAttribute('content', content);
    else { const m = document.createElement('meta'); m.name = 'description'; m.content = content; document.head.appendChild(m); }
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://www.merchantsolutionscorp.com/emv-gas-station-payment-processing';
    if (!document.querySelector('link[href*="calendly.com"]')) {
      const link = document.createElement('link'); link.href = 'https://assets.calendly.com/assets/external/widget.css'; link.rel = 'stylesheet'; document.head.appendChild(link);
    }
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const s = document.createElement('script'); s.src = 'https://assets.calendly.com/assets/external/widget.js'; s.async = true; document.head.appendChild(s);
    }
    window.scrollTo(0, 0);
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/mscpayments/30min?hide_event_type_details=1&primary_color=4b23f1' });
    }
  };

  const coreServices = [
    { icon: Fuel, title: 'Fuel Dispenser EMV Upgrades', desc: 'Outdoor-rated EMV terminals for every major dispenser brand. PCI P2PE encryption built in.' },
    { icon: Monitor, title: 'Petroleum POS Systems', desc: 'Integrated c-store and fuel POS with real-time inventory, lottery, and tobacco compliance.' },
    { icon: Truck, title: 'Fleet Card Acceptance', desc: 'WEX, Voyager, FleetCor, and proprietary fleet routing configured at the pump and register.' },
    { icon: Shield, title: 'Chargeback Optimization', desc: 'Dispute management, fraud prevention rules, and monitoring within our merchant portal.' },
    { icon: DollarSign, title: 'Dual Pricing for Fuel', desc: 'Compliant cash/credit price splits at the pump and inside the store.' },
    { icon: Zap, title: 'Next-Day Funding', desc: 'Accelerated settlement so your cash flow keeps pace with fuel purchase volume.' }
  ];

  const emvLiabilityPoints = [
    { label: 'Who is liable?', detail: 'Since the EMV liability shift, the party using the least-secure technology bears fraud losses. If your pumps still rely on magnetic stripe readers, your station absorbs counterfeit card chargebacks — not the card issuer.' },
    { label: 'Fraud risk exposure', detail: 'Fuel dispensers are high-value targets for skimming and counterfeit cards. Stations without EMV chip readers at the pump face exponentially higher fraud rates compared to upgraded locations.' },
    { label: 'Why upgrades matter', detail: 'An outdoor EMV terminal shifts fraud liability back to the card issuer, eliminates skimming vulnerability, and positions your station for contactless NFC payments — the fastest-growing payment method at the forecourt.' },
    { label: 'Deadline implications', detail: 'Major card brands have enforced the forecourt EMV liability shift. Every month without compliant hardware is a month your business absorbs preventable losses. The longer you wait, the greater the cumulative exposure.' }
  ];

  const retrofitServices = [
    { icon: RefreshCw, title: 'Replace Magnetic Stripe Readers', desc: 'Swap legacy mag-stripe-only card readers for EMV chip + contactless modules across all dispenser lanes.' },
    { icon: Wrench, title: 'Retrofit Older Dispensers', desc: 'We work with Gilbarco, Veeder-Root, Wayne, and Bennett dispensers to retrofit existing hardware without full dispenser replacement.' },
    { icon: Wifi, title: 'Contactless NFC Upgrade', desc: 'Enable tap-to-pay at every pump. Apple Pay, Google Pay, and contactless cards accepted outdoors.' },
    { icon: HardDrive, title: 'Outdoor-Rated Hardware', desc: 'IP-rated, weather-sealed terminals built for extreme temperatures, moisture, and 24/7 outdoor operation.' },
    { icon: Lock, title: 'PCI P2PE Encryption', desc: 'Point-to-point encryption from the moment a card is dipped or tapped, reducing PCI scope and protecting cardholder data.' }
  ];

  const industrySpecific = [
    {
      title: 'Convenience Store Payment Processing',
      items: ['Integrated c-store POS with fuel controller connectivity', 'Lottery, tobacco age verification, and EBT acceptance', 'Inventory management synced with fuel sales data', 'Dual pricing at the register — EBT treated as cash', 'ACH acceptance for vendor and wholesale payments'],
      keyword: 'C-store merchant services and convenience store payment processing require tight integration between indoor POS and outdoor fuel systems.'
    },
    {
      title: 'Fleet Card Processing & Routing',
      items: ['WEX, Voyager, FleetCor routing at the pump', 'Driver ID and odometer capture', 'Product-level restriction enforcement', 'Fleet reporting and reconciliation', 'Proprietary fleet card program setup'],
      keyword: 'Petroleum credit card processing includes specialized fleet card routing that standard merchant accounts cannot handle.'
    }
  ];

  const locations = [
    'Independent single-site stations',
    'Branded franchise locations (Shell, BP, Marathon, Chevron, Citgo)',
    'Multi-location operators and jobbers',
    'Unbranded and white-label fuel retailers',
    'Truck stops and travel centers',
    'Marina and marine fuel operations'
  ];

  const faqs = [
    { q: 'What is EMV compliance for fuel pumps?', a: 'EMV compliance for fuel pumps means upgrading outdoor card readers at the dispenser to accept chip-enabled cards. This shifts counterfeit fraud liability from the station owner back to the card issuer. The upgrade involves replacing or retrofitting the card acceptance device at each fuel position with an EMV-certified, outdoor-rated terminal.' },
    { q: 'How much does it cost to upgrade card readers for gas pumps?', a: 'Costs vary based on dispenser brand, number of fueling positions, and whether a full replacement or retrofit is possible. Typical per-position costs range from $800 to $2,500. Merchant Solutions Corp offers financing, lease, and bundled processing programs to offset upfront costs. We provide a site assessment to determine the most cost-effective path for your station.' },
    { q: 'Can I integrate fleet cards with my POS?', a: 'Yes. We configure fleet card routing for WEX, Voyager, FleetCor, and proprietary fleet programs at both the dispenser and the indoor POS. Fleet card integration includes driver ID prompts, odometer capture, product-level restrictions, and consolidated fleet reporting.' },
    { q: 'Do gas stations qualify for dual pricing?', a: 'Yes. Gas stations can implement compliant cash/credit dual pricing at the pump and inside the convenience store. We configure forecourt pricing, pump displays, in-store POS, and compliant signage. Our dual pricing program has been active and compliant since 2015.' },
    { q: 'What is the best POS system for convenience stores?', a: 'The best c-store POS integrates with your fuel controller, supports lottery, tobacco age verification, EBT, and inventory management. We deploy systems from Verifone, Gilbarco Passport, and NCR that connect indoor and outdoor operations seamlessly. The right system depends on your fuel brand, store size, and operational needs.' },
    { q: 'How long does a fuel pump EMV upgrade take?', a: 'A typical single-site upgrade takes 1-3 business days depending on the number of dispensers and whether retrofits or full replacements are needed. Multi-site rollouts are scheduled to minimize downtime. We coordinate installation, certification, and testing for each fueling position.' },
    { q: 'What are the upfront costs involved with reprogramming EMV at the pump?', a: 'Reprogramming costs include EMV kernel certification, payment application updates, and communication protocol configuration. These software costs are typically $200-$500 per site on top of hardware. Merchant Solutions Corp bundles reprogramming into our upgrade packages so there are no surprise fees.' },
    { q: 'What is chargeback optimization for gas stations?', a: 'Chargeback optimization includes fraud velocity rules, transaction amount limits, AVS matching, and dispute response management. Our portal provides real-time chargeback alerts, evidence submission tools, and analytics to identify patterns before they trigger monitoring programs.' },
    { q: 'Can I accept contactless payments at the fuel pump?', a: 'Yes. Our EMV upgrade includes contactless NFC capability. Customers can tap their phone or contactless card at the dispenser without inserting a chip card. This is the fastest-growing payment method at the forecourt and reduces transaction time by 40-60%.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/10 backdrop-blur-sm text-blue-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">Petroleum Payment Specialists</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="hero-h1">
                Gas Station Payment Processing, EMV Upgrades & Petroleum POS Solutions
              </h1>
              <p className="text-lg text-blue-200 mb-8 max-w-xl">
                Gas station payment processing requires specialized petroleum merchant services that integrate fuel dispensers, POS systems, fleet card routing, and EMV-compliant outdoor payment terminals. We handle every layer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={openCalendly} className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 shadow-xl" data-testid="hero-strategy-btn">
                  Book a Strategy Call <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" onClick={() => setShowLeadModal(true)} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 text-lg px-8 py-6" data-testid="hero-quote-btn">
                  Get a Quote
                </Button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://customer-assets.emergentagent.com/job_ac3711b8-9a11-453d-a74b-57edf2c8d851/artifacts/72eoma47_gAS%20STATION.jpeg" alt="Gas station dual pricing - credit and cash fuel pump display" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '500+', label: 'Stations Served' },
              { value: '24hr', label: 'Funding Available' },
              { value: 'EMV', label: 'Certified Installs' },
              { value: '10+', label: 'Years in Petroleum' }
            ].map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-bold text-blue-400">{s.value}</p>
                <p className="text-sm text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Optimized Definition Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-gray-800 text-lg leading-relaxed">
              <strong>Fuel payment processing</strong> encompasses the complete technology and merchant services infrastructure required to accept card, mobile, and alternative payments at fuel dispensers and convenience store registers. Unlike standard retail payment processing, petroleum payment solutions must account for pre-authorization holds, fleet card routing protocols, outdoor EMV terminal certification, fuel dispenser controller integration, and card brand compliance specific to the petroleum vertical.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Petroleum Payment Solutions</h2>
            <p className="text-lg text-gray-600">Everything your station needs — from the forecourt to the register.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Card key={i} className="border-2 hover:border-blue-400 transition-all duration-300 hover:shadow-lg" data-testid={`service-${i}`}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{svc.title}</h3>
                    <p className="text-sm text-gray-600">{svc.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* EMV Liability Shift */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Critical Compliance</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">EMV Liability Shift for Fuel Retailers</h2>
              <p className="text-gray-700 mb-8">
                The forecourt EMV liability shift has fundamentally changed who pays for fraud at the pump. Understanding your exposure is the first step toward protecting your revenue and your merchant account.
              </p>
              <div className="space-y-6">
                {emvLiabilityPoints.map((pt, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CircleDot className="h-4 w-4 text-blue-600" /> {pt.label}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{pt.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="sticky top-24">
              <Card className="border-2 border-red-200 bg-red-50 shadow-lg">
                <CardContent className="p-8 text-center">
                  <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-gray-900 mb-2">Is Your Station Exposed?</p>
                  <p className="text-gray-600 mb-6">Every month without EMV-compliant pump readers is a month your business absorbs preventable fraud losses and chargeback liability.</p>
                  <Button onClick={openCalendly} className="w-full bg-red-600 hover:bg-red-700 text-white py-5 text-base" data-testid="emv-cta">
                    Get a Free Liability Assessment <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Retrofit Services */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Fuel Pump Card Reader Replacement & Retrofit Services</h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Whether you need a full gas pump card reader upgrade or a targeted retrofit of existing dispensers, we deliver certified installations that meet card brand requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {retrofitServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20" data-testid={`retrofit-${i}`}>
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{svc.title}</h3>
                  <p className="text-sm text-blue-200">{svc.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" onClick={openCalendly} className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6" data-testid="retrofit-cta">
              Schedule a Site Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* AI-Optimized Definition Block 2 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-gray-800 text-lg leading-relaxed">
              <strong>Convenience store payment processing</strong> and <strong>c-store merchant services</strong> require tight integration between indoor point-of-sale systems and outdoor fuel controllers. A properly configured petroleum POS handles fuel transactions, in-store sales, lottery, tobacco age verification, EBT, fleet cards, and dual pricing — all from a unified platform with consolidated reporting and next-day funding.
            </p>
          </div>
        </div>
      </section>

      {/* Industry-Specific Deep Dives */}
      {industrySpecific.map((section, idx) => (
        <section key={idx} className={`py-20 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={idx % 2 !== 0 ? 'order-2' : ''}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
                <div className="space-y-3 mb-6">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 italic text-sm bg-gray-100 p-4 rounded-xl">{section.keyword}</p>
              </div>
              <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 flex flex-col items-center justify-center text-center ${idx % 2 !== 0 ? 'order-1' : ''}`}>
                {idx === 0 ? <ShoppingCart className="h-16 w-16 text-blue-400 mb-4" /> : <Truck className="h-16 w-16 text-blue-400 mb-4" />}
                <p className="text-2xl font-bold text-gray-900 mb-2">{idx === 0 ? 'Indoor + Outdoor' : 'Fleet-Ready'}</p>
                <p className="text-gray-600">{idx === 0 ? 'Unified POS for fuel and c-store operations' : 'WEX, Voyager, FleetCor — configured and routed'}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Dual Pricing for Fuel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="https://customer-assets.emergentagent.com/job_ac3711b8-9a11-453d-a74b-57edf2c8d851/artifacts/72eoma47_gAS%20STATION.jpeg" alt="Gas station cash and credit dual pricing display" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Dual Pricing & Cash Discount for Fuel Retailers</h2>
              <p className="text-gray-700 mb-6">Fuel retailers operate on razor-thin margins. A compliant dual pricing structure can recover 3-4% in processing fees across every gallon sold.</p>
              <div className="space-y-3 mb-6">
                {['Forecourt cash/credit price configuration', 'Pump display pricing adjustments', 'In-store POS dual pricing setup', 'Compliant signage and disclosure', 'Chargeback optimization within our portal'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/dual-pricing-cash-discount-payment-processing" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
                Learn more about our Dual Pricing Compliance Program <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Optimized Definition Block 3 */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-gray-800 text-lg leading-relaxed">
              <strong>Fuel dispenser compliance</strong> and <strong>forecourt EMV liability</strong> are not optional considerations — they are operational requirements. Stations that have not completed the gas pump card reader upgrade face direct financial exposure from counterfeit card fraud, card brand monitoring programs, and potential merchant account termination. A certified outdoor EMV terminal installation is the single most impactful investment a fuel retailer can make to protect margin and reduce chargeback volume.
            </p>
          </div>
        </div>
      </section>

      {/* Location SEO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Petroleum Payment Processing Across the United States & U.S. Territories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Merchant Solutions Corp deploys petroleum payment solutions for fuel retailers nationwide — from single independent stations to multi-location branded operations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {locations.map((loc, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-200 shadow-sm">
                <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium text-sm">{loc}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'All 50 States', icon: Globe },
              { label: 'Puerto Rico & USVI', icon: MapPin },
              { label: 'Rural & Urban', icon: Building2 },
              { label: 'On-Site Installation', icon: Wrench }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="text-center bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <Icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why MSC */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Fuel Retailers Choose Merchant Solutions Corp</h2>
              <p className="text-gray-700 mb-6">We are not a generic processor that happens to accept fuel cards. We are petroleum payment specialists.</p>
              <div className="space-y-4">
                {[
                  { title: 'Certified EMV installers', desc: 'Factory-trained technicians for Gilbarco, Wayne, Bennett, and Veeder-Root' },
                  { title: 'Fuel-specific pricing', desc: 'Interchange optimization, fleet card routing, and dual pricing configuration' },
                  { title: 'Full-service deployment', desc: 'Site assessment, hardware, installation, certification, and training' },
                  { title: 'Ongoing support', desc: 'Dedicated petroleum account management with 24/7 technical support' },
                  { title: 'Chargeback defense', desc: 'Proactive fraud rules, dispute management, and monitoring within our portal' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">{i + 1}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {[
                { icon: Zap, title: 'Fast Deployment', desc: 'Most single-site installs completed in 1-3 business days' },
                { icon: Shield, title: 'Compliance First', desc: 'Every installation meets current card brand and PCI requirements' },
                { icon: Clock, title: 'Next-Day Funding', desc: 'Accelerated settlement to keep your cash flow moving' }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50" data-testid="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Gas Station Payment Processing FAQ</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl border px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Modernize Your Forecourt. Protect Your Revenue.</h2>
          <p className="text-lg text-blue-200 mb-4">
            Whether you need a full EMV upgrade, fleet card integration, or a compliant dual pricing program — Merchant Solutions Corp is the petroleum payment partner built for your business.
          </p>
          <p className="text-lg text-blue-200 mb-8">
            Schedule a strategy call and get a customized plan for your station.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={openCalendly} className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 shadow-xl" data-testid="cta-strategy-btn">
              Book a Strategy Call <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" onClick={() => setShowLeadModal(true)} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 text-lg px-8 py-6" data-testid="cta-quote-btn">
              <Phone className="h-5 w-5 mr-2" /> Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Footer with Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link to="/retail-payment-solutions" className="text-blue-600 hover:text-blue-800 underline text-sm font-medium">Retail Payment Processing</Link>
            <Link to="/dual-pricing-cash-discount-payment-processing" className="text-blue-600 hover:text-blue-800 underline text-sm font-medium">Dual Pricing & Compliance</Link>
            <Link to="/pos/clover" className="text-blue-600 hover:text-blue-800 underline text-sm font-medium">Clover POS</Link>
            <Link to="/solutions/payment-processing" className="text-blue-600 hover:text-blue-800 underline text-sm font-medium">Payment Processing</Link>
            <Link to="/professional-services-payment-processing-clover-pos" className="text-blue-600 hover:text-blue-800 underline text-sm font-medium">Professional Services</Link>
          </div>
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides fuel payment processing, convenience store payment processing, c-store merchant services, petroleum credit card processing, gas pump card reader upgrades, outdoor EMV terminal installation, fuel dispenser compliance, petroleum payment solutions, forecourt EMV liability shift protection, and chargeback optimization for gas stations, truck stops, and petroleum retailers across all 50 U.S. states and territories.
          </p>
        </div>
      </section>

      {/* Lead Connector Modal */}
      {showLeadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowLeadModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowLeadModal(false)} className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors" data-testid="lead-modal-close">&#x2715;</button>
            <iframe src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" className="w-full h-[80vh] border-0 rounded-2xl" title="Get a Quote" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GasStationProcessing;
