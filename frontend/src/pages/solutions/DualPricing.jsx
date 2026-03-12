import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle, Shield, AlertTriangle, ChevronRight, ArrowRight,
  DollarSign, BarChart3, Receipt, FileText, Monitor, Settings,
  Scale, Building2, Fuel, ShoppingCart, Heart, Globe, Landmark,
  Zap, Lock, Phone, RotateCcw, ChevronDown, Info, Minus, Plus,
  UtensilsCrossed, Store
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from '../../components/ui/accordion';

/* ───────── SAVINGS CALCULATOR ───────── */
const industryDefaults = {
  restaurant: { label: 'Restaurant', avgTicket: 25, icon: UtensilsCrossed },
  retail: { label: 'Retail', avgTicket: 50, icon: Store },
  convenience: { label: 'Convenience Store', avgTicket: 15, icon: ShoppingCart },
  healthcare: { label: 'Healthcare', avgTicket: 175, icon: Heart },
  gas: { label: 'Gas Station', avgTicket: 45, icon: Fuel },
  other: { label: 'Other', avgTicket: 35, icon: Building2 }
};

const quickVolumes = [10000, 25000, 50000, 100000, 250000];

const SavingsCalculator = ({ openCalendly }) => {
  const [volume, setVolume] = useState(50000);
  const [rate, setRate] = useState(3.25);
  const [txFee, setTxFee] = useState(0.10);
  const [txFeeKnown, setTxFeeKnown] = useState(true);
  const [adoption, setAdoption] = useState(15);
  const [industry, setIndustry] = useState('restaurant');
  const [avgTicket, setAvgTicket] = useState(25);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [achFee, setAchFee] = useState(0);
  const [monthlyMin, setMonthlyMin] = useState(0);
  const [batchFee, setBatchFee] = useState(0);
  const [gatewayFee, setGatewayFee] = useState(0);
  const [statementFee, setStatementFee] = useState(0);
  const [showRateHelp, setShowRateHelp] = useState(false);

  useEffect(() => {
    setAvgTicket(industryDefaults[industry].avgTicket);
  }, [industry]);

  useEffect(() => {
    if (!txFeeKnown) setTxFee(0.10);
  }, [txFeeKnown]);

  const results = useMemo(() => {
    const effectiveTxFee = txFeeKnown ? txFee : 0.10;
    const txCount = avgTicket > 0 ? volume / avgTicket : 0;
    const currentFees = (volume * rate / 100) + (txCount * effectiveTxFee);
    const advancedFees = monthlyMin + (batchFee * 30) + gatewayFee + statementFee;
    const totalCurrent = currentFees + advancedFees;
    return {
      currentFees: totalCurrent,
      feesAfter: 0,
      monthlySavings: totalCurrent,
      annualSavings: totalCurrent * 12,
      cardVolumeBefore: volume,
      cardVolumeAfter: volume * (1 - adoption / 100)
    };
  }, [volume, rate, txFee, txFeeKnown, adoption, avgTicket, monthlyMin, batchFee, gatewayFee, statementFee]);

  const reset = useCallback(() => {
    setVolume(50000); setRate(3.25); setTxFee(0.10); setTxFeeKnown(true);
    setAdoption(15); setIndustry('restaurant'); setShowAdvanced(false);
    setAchFee(0); setMonthlyMin(0); setBatchFee(0); setGatewayFee(0); setStatementFee(0);
  }, []);

  const fmt = (n) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
  const fmtFull = (n) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });

  const Stepper = ({ value, onChange, step, min, max, prefix = '', suffix = '' }) => (
    <div className="flex items-center gap-2">
      <button onClick={() => onChange(Math.max(min, +(value - step).toFixed(4)))} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"><Minus className="h-4 w-4" /></button>
      <span className="text-lg font-bold text-gray-900 min-w-[80px] text-center">{prefix}{typeof value === 'number' && value % 1 !== 0 ? value.toFixed(2) : value}{suffix}</span>
      <button onClick={() => onChange(Math.min(max, +(value + step).toFixed(4)))} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"><Plus className="h-4 w-4" /></button>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50" id="calculator" data-testid="savings-calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dual Pricing Savings Calculator</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how much profit your business can recover with compliant zero-fee processing.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* LEFT: Inputs */}
          <div className="lg:col-span-3 space-y-8">
            {/* Industry */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Select Your Industry</label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {Object.entries(industryDefaults).map(([key, val]) => {
                  const Icon = val.icon;
                  return (
                    <button key={key} onClick={() => setIndustry(key)} className={`flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all text-xs font-medium ${industry === key ? 'border-purple-600 bg-purple-50 text-purple-700' : 'border-gray-200 bg-white hover:border-purple-300 text-gray-600'}`} data-testid={`industry-${key}`}>
                      <Icon className="h-5 w-5" />{val.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Volume */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Monthly Card Volume</label>
              <p className="text-3xl font-bold text-purple-700 mb-3" data-testid="volume-display">{fmt(volume)} <span className="text-sm font-normal text-gray-500">per month</span></p>
              <input type="range" min="10000" max="500000" step="1000" value={volume} onChange={e => setVolume(+e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600" data-testid="volume-slider" />
              <div className="flex gap-2 mt-3">
                {quickVolumes.map(v => (
                  <button key={v} onClick={() => setVolume(v)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${volume === v ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-purple-50'}`}>{v >= 1000 ? `${v / 1000}k` : v}</button>
                ))}
              </div>
            </div>

            {/* Rate + Tx Fee */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <label className="text-sm font-semibold text-gray-700">Effective Rate (Blended)</label>
                  <button onClick={() => setShowRateHelp(!showRateHelp)} className="text-purple-500 hover:text-purple-700"><Info className="h-4 w-4" /></button>
                </div>
                {showRateHelp && <p className="text-xs text-gray-500 mb-2 bg-purple-50 p-2 rounded">Check your statement for "effective rate" or divide total fees by total volume.</p>}
                <p className="text-xs text-gray-500 mb-3">Interchange + dues + processor margin</p>
                <Stepper value={rate} onChange={setRate} step={0.05} min={1} max={5} suffix="%" />
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <label className="text-sm font-semibold text-gray-700 block mb-1">Average Transaction Fee</label>
                <p className="text-xs text-gray-500 mb-3">Per-transaction fee on top of percentage</p>
                {txFeeKnown ? (
                  <Stepper value={txFee} onChange={setTxFee} step={0.05} min={0} max={0.50} prefix="$" />
                ) : (
                  <p className="text-lg font-bold text-gray-400">$0.10 (estimated)</p>
                )}
                <label className="flex items-center gap-2 mt-3 cursor-pointer">
                  <input type="checkbox" checked={!txFeeKnown} onChange={e => setTxFeeKnown(!e.target.checked)} className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                  <span className="text-xs text-gray-500">I don't know this</span>
                </label>
              </div>
            </div>

            {/* Avg Ticket */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <label className="text-sm font-semibold text-gray-700 block mb-1">Average Ticket Size (Optional)</label>
              <p className="text-xs text-gray-500 mb-3">Auto-set by industry. Adjust if needed.</p>
              <Stepper value={avgTicket} onChange={setAvgTicket} step={5} min={5} max={500} prefix="$" />
            </div>

            {/* Adoption */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <label className="text-sm font-semibold text-gray-700 block mb-1">Estimated Cash/ACH Adoption After Dual Pricing</label>
              <p className="text-xs text-gray-500 mb-3">Portion of customers expected to switch from card to cash or ACH</p>
              <p className="text-2xl font-bold text-purple-700 mb-2" data-testid="adoption-display">{adoption}%</p>
              <input type="range" min="0" max="40" step="1" value={adoption} onChange={e => setAdoption(+e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600" data-testid="adoption-slider" />
              <div className="flex justify-between text-xs text-gray-400 mt-1"><span>0%</span><span>20%</span><span>40%</span></div>
            </div>

            {/* Advanced */}
            <div>
              <button onClick={() => setShowAdvanced(!showAdvanced)} className="flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors">
                <ChevronDown className={`h-4 w-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} /> Advanced Settings
              </button>
              {showAdvanced && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 p-4 bg-white rounded-xl border border-gray-200">
                  {[
                    { label: 'ACH Fee', value: achFee, set: setAchFee, step: 0.25, min: 0, max: 5 },
                    { label: 'Monthly Minimum', value: monthlyMin, set: setMonthlyMin, step: 5, min: 0, max: 100 },
                    { label: 'Batch Fee', value: batchFee, set: setBatchFee, step: 0.05, min: 0, max: 1 },
                    { label: 'Gateway Fee', value: gatewayFee, set: setGatewayFee, step: 5, min: 0, max: 50 },
                    { label: 'Statement Fee', value: statementFee, set: setStatementFee, step: 5, min: 0, max: 50 }
                  ].map((f, i) => (
                    <div key={i}>
                      <label className="text-xs font-medium text-gray-600 block mb-1">{f.label}</label>
                      <Stepper value={f.value} onChange={f.set} step={f.step} min={f.min} max={f.max} prefix="$" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button onClick={reset} className="text-sm text-gray-400 hover:text-gray-600 flex items-center gap-1"><RotateCcw className="h-3.5 w-3.5" /> Reset</button>
          </div>

          {/* RIGHT: Results */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-6">
              <Card className="border-2 border-purple-600 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 text-center">
                  <p className="text-sm font-semibold uppercase tracking-wider opacity-80">Estimated Monthly Savings</p>
                  <p className="text-5xl font-black mt-2" data-testid="monthly-savings">{fmt(results.monthlySavings)}</p>
                </div>
                <CardContent className="p-6 space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Current Monthly Fees</span>
                    <span className="text-lg font-bold text-red-600" data-testid="current-fees">{fmtFull(results.currentFees)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">After Dual Pricing</span>
                    <span className="text-lg font-bold text-green-600" data-testid="fees-after">{fmtFull(results.feesAfter)}</span>
                  </div>
                  <hr />
                  <div className="text-center bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="text-sm text-green-700 font-semibold">Estimated Annual Savings</p>
                    <p className="text-3xl font-black text-green-700" data-testid="annual-savings">{fmt(results.annualSavings)}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-center text-xs">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-gray-500">Card Volume Before</p>
                      <p className="font-bold text-gray-900">{fmt(results.cardVolumeBefore)}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-gray-500">Card Volume After</p>
                      <p className="font-bold text-gray-900">{fmt(results.cardVolumeAfter)}</p>
                    </div>
                  </div>
                  <Button onClick={openCalendly} className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-5 text-base" data-testid="calc-cta">
                    Get a Compliance Setup Plan <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <button onClick={openCalendly} className="w-full text-center text-sm text-purple-600 hover:text-purple-800 font-semibold">Talk to a Specialist</button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───────── MAIN PAGE ───────── */
const DualPricing = () => {
  const [showLeadModal, setShowLeadModal] = useState(false);

  useEffect(() => {
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
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/mscpayments/posdemo?hide_event_type_details=1&primary_color=1400ff' });
    }
  };

  const complianceSteps = [
    { icon: Settings, title: 'Proper Pricing Configuration', desc: 'Your POS system is programmed correctly from day one.' },
    { icon: FileText, title: 'Compliant Signage', desc: 'Required entrance and checkout disclosures are provided.' },
    { icon: Receipt, title: 'Approved Receipt Language', desc: 'Receipts reflect proper pricing structure.' },
    { icon: DollarSign, title: 'ACH Alternative Integration', desc: 'ACH processing is enabled for compliant non-card alternatives.' },
    { icon: Shield, title: 'Ongoing Compliance Monitoring', desc: 'We stay aligned with Visa and Mastercard guidelines.' }
  ];

  const industries = [
    { icon: UtensilsCrossed, label: 'Restaurants', keyword: 'Restaurant dual pricing' },
    { icon: Store, label: 'Retail Stores', keyword: 'Retail cash discount program' },
    { icon: ShoppingCart, label: 'Grocery & Convenience', keyword: 'Convenience store dual pricing' },
    { icon: Heart, label: 'Healthcare Practices', keyword: 'Healthcare zero-fee processing' },
    { icon: Zap, label: 'Utilities & Service Providers', keyword: 'Service provider cash discount' },
    { icon: Fuel, label: 'Gas Stations & Petroleum', keyword: 'Gas station dual pricing' },
    { icon: Landmark, label: 'Government & Municipal', keyword: 'Government payment processing' },
    { icon: Globe, label: 'Ecommerce & Online', keyword: 'E-commerce cash discount ACH' }
  ];

  const faqs = [
    { q: 'What is dual pricing payment processing?', a: 'A compliant pricing structure where card and cash/ACH prices are displayed separately. The card price includes processing costs, while the cash price reflects the base price. This approach is fully legal when structured correctly with proper disclosure.' },
    { q: 'Is cash discount processing legal?', a: 'Yes, when structured correctly and disclosed properly. Our program follows Visa and Mastercard guidelines, avoids illegal surcharging structures, ensures transparency, and provides alternative payment methods. We have maintained compliant programs since 2015.' },
    { q: 'Can e-commerce businesses use dual pricing?', a: 'Yes, when ACH is offered as a payment option and checkout transparency is maintained. We integrate ACH with payment gateways for compliant execution, with clearly disclosed terms at checkout.' },
    { q: 'Is dual pricing better than surcharging?', a: 'In most cases, dual pricing provides broader compliance flexibility and lower regulatory risk. Unlike surcharging, which is restricted or banned in several states, dual pricing (offering a cash discount) is legally accepted nationwide when properly implemented.' },
    { q: 'How much can I save with dual pricing?', a: 'Most businesses processing $50,000+ monthly in card volume can recover $1,500-$5,000+ per month in processing fees. Use our calculator above to estimate your specific savings based on your volume and industry.' },
    { q: 'Will customers be upset about dual pricing?', a: 'When implemented correctly with clear signage and proper disclosure, customer adoption is smooth. Studies show 15-25% of customers willingly switch to cash or ACH. The key is transparency, professional signage, and trained staff.' }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Dual Pricing & Cash Discount Payment Processing | Compliant Zero Fee Program</title>
        <meta property="og:title" content="Dual Pricing & Cash Discount Payment Processing | Compliant Zero Fee Program" />
        <meta property="og:description" content="Compliant dual pricing and cash discount payment processing for restaurants, retail, healthcare, gas stations & e-commerce. Reduce 3-4% in fees with zero-fee processing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/dual-pricing-cash-discount-payment-processing" />
        <meta name="description" content="Compliant dual pricing and cash discount payment processing for restaurants, retail, healthcare, gas stations & e-commerce. Reduce 3-4% in fees with zero-fee processing." />
        <meta name="keywords" content="dual pricing payment processing, cash discount program, zero fee processing, compliant dual pricing, restaurant dual pricing, retail cash discount, surcharge alternative, payment processing savings" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/dual-pricing-cash-discount-payment-processing" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Dual Pricing Program","serviceType":"Cash Discount and Dual Pricing Payment Processing","provider":{"@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com"},"areaServed":"United States","url":"https://merchantsolutionscorp.com/dual-pricing-cash-discount-payment-processing","description":"Dual pricing and cash discount programs that eliminate processing fees for merchants."})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://merchantsolutionscorp.com/"},{"@type":"ListItem","position":2,"name":"Solutions","item":"https://merchantsolutionscorp.com/solutions/payment-processing"},{"@type":"ListItem","position":3,"name":"Dual Pricing","item":"https://merchantsolutionscorp.com/dual-pricing-cash-discount-payment-processing"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com","logo":"https://customer-assets.emergentagent.com/job_merchant-central-11/artifacts/vmzehzol_MSC_1080x560.png","sameAs":["https://www.facebook.com/merchantsolutionscorp/","https://www.instagram.com/merchant_solutions_corp","https://www.linkedin.com/company/merchantsolutionscorp/","https://www.youtube.com/merchantsolutionscorp"]})}</script>
      </Helmet>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden min-h-[600px] flex items-center">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="https://customer-assets.emergentagent.com/job_ac3711b8-9a11-453d-a74b-57edf2c8d851/artifacts/mkbcuh94_Payments%20Video%20run.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm text-purple-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">Compliant Since 2015</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="hero-h1">
              Dual Pricing & Cash Discount Payment Processing Solutions
            </h1>
            <h2 className="text-lg text-purple-200 mb-8 max-w-3xl mx-auto">
              Reduce 3-4% in Credit Card Fees with a Structured, Compliant Program
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-purple-700 hover:bg-purple-50 text-lg px-8 py-6 shadow-xl" data-testid="hero-calc-btn">
                Calculate Your Savings <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" onClick={openCalendly} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-6" data-testid="hero-demo-btn">
                Schedule a Compliance Review
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Dual Pricing Program Does for Your Business</h2>
              <p className="text-gray-700 mb-6">Merchant Solutions Corp. deploys compliant dual pricing and cash discount programs designed to:</p>
              <div className="space-y-3 mb-8">
                {['Offset rising credit card processing fees', 'Maintain card brand compliance', 'Protect your merchant account', 'Provide clear customer disclosure', 'Offer ACH or cash alternatives'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg">
                <p className="text-gray-800 font-medium">This is not a risky "add a fee" setup.</p>
                <p className="text-purple-700 font-bold">This is a structured pricing system installed and managed correctly.</p>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
                <p className="text-lg text-gray-700 mb-4">Instead of absorbing 3-4% in card fees, your business can:</p>
                {['Display transparent pricing', 'Offer a lower cash or ACH price', 'Maintain compliance with card brand rules', 'Preserve profit margins'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
                <p className="text-sm text-gray-600 mt-4">We configure your POS system, receipt language, and signage to ensure proper execution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Setup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fully Compliant Cash Discount & Dual Pricing Setup</h2>
            <p className="text-lg text-gray-600">Our implementation includes:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {complianceSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Card key={i} className="border-2 hover:border-purple-400 transition-all duration-300" data-testid={`compliance-step-${i}`}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex items-start gap-4 max-w-3xl mx-auto">
            <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-gray-800">This protects your business from <span className="font-bold">chargebacks, monitoring programs, and account termination risk</span>.</p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries That Benefit from Dual Pricing & Cash Discount</h2>
            <p className="text-gray-600">These industries can implement structured programs, provided they offer an ACH or cash alternative.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Card key={i} className="border-2 hover:border-purple-400 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-5 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{ind.label}</h3>
                    <p className="text-xs text-gray-500">{ind.keyword}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="text-center text-gray-600">Each industry requires tailored configuration. <span className="font-semibold text-purple-700">We deploy programs specific to operational needs.</span></p>
        </div>
      </section>

      {/* Industry Deep Dives */}
      {/* Restaurant */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Restaurant Dual Pricing Programs</h2>
              <p className="text-gray-700 mb-6">Restaurants processing high card volume can recover thousands annually. We configure:</p>
              <div className="space-y-3">
                {['Clover POS dual pricing', 'Square Cash Discount pricing', 'Smart terminal Dual Pricing selection', 'Customer display pricing', 'Tip-compliant receipt formatting', 'Menu and signage adjustments'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-purple-700 font-bold mt-6 text-lg">Margins improve immediately.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <UtensilsCrossed className="h-16 w-16 text-purple-400 mb-4" />
              <p className="text-2xl font-bold text-gray-900 mb-2">High Volume = High Savings</p>
              <p className="text-gray-600">Restaurants typically save $2,000-$5,000+ per month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail & Grocery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <Store className="h-16 w-16 text-purple-400 mb-4" />
              <p className="text-2xl font-bold text-gray-900 mb-2">Seamless Checkout</p>
              <p className="text-gray-600">EBT treated as cash. No disruption to checkout flow.</p>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Retail & Grocery Cash Discount Programs</h2>
              <p className="text-gray-700 mb-6">Retailers benefit from:</p>
              <div className="space-y-3">
                {['Transparent shelf pricing', 'Compliant checkout disclosure', 'Integrated inventory systems', 'Choose at the Register (Cash or Card) — EBT is like Cash', 'ACH acceptance for higher ticket sales'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-purple-700 font-bold mt-6 text-lg">Reduce overhead without disrupting checkout flow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Healthcare & Medical Office Compliance</h2>
              <p className="text-gray-700 mb-6">Healthcare practices require:</p>
              <div className="space-y-3">
                {['Clear patient disclosure', 'Insurance-friendly receipt formatting', 'ACH capability for recurring payments', 'HIPAA-aware payment integration'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-purple-700 font-bold mt-6">We structure cash discount programs to avoid billing conflicts.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <Heart className="h-16 w-16 text-purple-400 mb-4" />
              <p className="text-2xl font-bold text-gray-900 mb-2">HIPAA-Aware</p>
              <p className="text-gray-600">Structured to avoid insurance billing conflicts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gas Station */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="https://customer-assets.emergentagent.com/job_ac3711b8-9a11-453d-a74b-57edf2c8d851/artifacts/72eoma47_gAS%20STATION.jpeg" alt="Gas station dual pricing - credit price vs cash price" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Gas Station & Petroleum Dual Pricing</h2>
              <p className="text-gray-700 mb-6">Fuel retailers operate on tight margins. We implement:</p>
              <div className="space-y-3">
                {['Forecourt pricing structure', 'Pump display adjustments', 'In-store POS configuration', 'Fleet card routing compatibility', 'Chargeback management within our portal'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-purple-700 font-bold mt-6">Fuel processing optimization can significantly impact annual revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecommerce */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Ecommerce & ACH Alternative Integration</h2>
            <p className="text-gray-700 mb-6 text-center">Online businesses can implement compliant zero-fee structures when:</p>
            <div className="space-y-3 mb-6">
              {['ACH is offered as a payment option', 'Transparent checkout pricing is displayed', 'Terms are clearly disclosed'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-purple-700 font-semibold">We integrate ACH with payment gateways for compliant execution.</p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Makes Our Program Different</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <p className="text-lg text-red-300 font-semibold mb-4">Many providers:</p>
              <div className="space-y-3">
                {['Mislabel surcharges', 'Skip signage', 'Ignore card brand rules', 'Leave merchants exposed and vulnerable to fines and shutdowns'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0" />
                    <span className="text-red-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-lg text-green-300 font-semibold mb-4">Merchant Solutions Corp delivers:</p>
              <div className="space-y-3">
                {['Structured pricing', 'Legal configuration', 'Card brand alignment', 'Full POS programming', 'Ongoing compliance support'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-green-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-xl text-white font-bold mt-12">We do not deploy risky shortcuts.</p>
        </div>
      </section>

      {/* Is It Legal */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Is Dual Pricing Legal?</h2>
              <p className="text-xl text-green-700 font-bold mb-6">Yes -- when structured correctly.</p>
              <div className="space-y-3 mb-6">
                {['Follows card brand guidelines', 'Avoids illegal surcharging structures', 'Ensures transparency', 'Provides alternative payment methods', 'Has been active and compliant since 2015'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-gray-800"><span className="font-bold">Improper implementation creates risk.</span></p>
                <p className="text-yellow-800 font-semibold">Professional setup eliminates it.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
              <Scale className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <p className="text-2xl font-bold text-gray-900 mb-2">10+ Years Compliant</p>
              <p className="text-gray-600">Active since 2015 with zero compliance violations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Fee Done Right */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Zero Fee Credit Card Processing -- Done the Right Way</h2>
          <p className="text-gray-700 mb-8">Zero-fee processing is not magic. It is:</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
            {['Pricing structure', 'Disclosure management', 'System configuration', 'Alternative payment availability', 'Compliance oversight'].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-purple-200 p-4 shadow-sm">
                <p className="text-sm font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-purple-700 font-bold text-lg">We handle every layer.</p>
        </div>
      </section>

      {/* Calculator */}
      <SavingsCalculator openCalendly={openCalendly} />

      {/* FAQ */}
      <section className="py-20 bg-white" data-testid="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Dual Pricing & Cash Discount FAQ</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-gray-50 rounded-xl border px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Implement a Compliant Dual Pricing Program?</h2>
          <p className="text-lg text-purple-200 mb-4">If your business processes $10,000-$100,000+ monthly in card volume, a properly structured program can significantly improve profitability.</p>
          <p className="text-lg text-purple-200 mb-8">Schedule a compliance review with Merchant Solutions Corp today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-purple-700 hover:bg-purple-50 text-lg px-8 py-6 shadow-xl" data-testid="cta-calc-btn">
              Calculate Your Savings <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" onClick={openCalendly} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-6" data-testid="cta-demo-btn">
              <Phone className="h-5 w-5 mr-2" /> Book a Demo
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
            <Link to="/pos/square" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Square POS</Link>
            <Link to="/restaurant-payment-processing-services" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Restaurants</Link>
            <Link to="/retail-payment-solutions" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Retail</Link>
            <Link to="/industries/healthcare" className="text-purple-600 hover:text-purple-800 underline text-sm font-medium">Healthcare</Link>
          </div>
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides dual pricing payment processing, cash discount payment processing, zero-fee credit card processing, compliant dual pricing programs, legal cash discount programs, restaurant dual pricing, retail cash discount programs, healthcare zero-fee processing, gas station dual pricing, e-commerce cash discount ACH, credit card processing compliance, and ACH alternative payment processing across all 50 U.S. states.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DualPricing;
