import React, { useEffect, useState, useMemo } from 'react';
import { CheckCircle, ChevronRight, ArrowRight, CreditCard, Monitor, ShoppingCart, Utensils, Building2, Globe, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/button';

const Pricing = () => {
  const [selectedRate, setSelectedRate] = useState(null);
  const [selectedSoftware, setSelectedSoftware] = useState(null);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [showAppModal, setShowAppModal] = useState(false);

  useEffect(() => {
    document.title = 'Pricing | Merchant Processing Rates & POS Plans | Merchant Solutions Corp';
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = 'Compare merchant processing rates: Flat Rate, Interchange Plus, and Dual Price/Cash Discount. Choose your POS software, business type, and payment platform. Get started with Clover, Square, Payanywhere, Dejavoo, or Ingenico.';
    if (metaDesc) metaDesc.setAttribute('content', content);
    else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);

  const pricingOptions = [
    { id: 'flat', label: 'Flat rate (2.60%+0.15)', sub: 'Flat rate 3.5%+0.20' },
    { id: 'interchange', label: 'Interchange plus (cost plus 50bps)', sub: 'plus equip Subscription' },
    { id: 'dual', label: 'Dual price / Cash discount', sub: '4% basic  |  Free placement 5% only' }
  ];

  const softwarePrograms = [
    { id: 'clover', label: 'Clover', types: ['Restaurant', 'Retail', 'Service'], platforms: ['fiserv'] },
    { id: 'square', label: 'Square', types: ['Restaurant', 'Retail', 'Service'], platforms: ['square'] },
    { id: 'payanywhere', label: 'Payanywhere', types: ['Foodtruck', 'Retail', 'Service'], platforms: ['epx'] },
    { id: 'dejavoo', label: 'Dejavoo', types: ['Retailer', 'Service', 'Integrations'], platforms: ['tsys', 'cygma', 'epx'] },
    { id: 'ingenico', label: 'Ingenico', types: ['Retail, Hospitality', 'Service, Integrations'], platforms: ['tsys', 'cygma', 'epx'] }
  ];

  const businessTypes = [
    { id: 'retail', label: 'Retail' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'lodging', label: 'Lodging' },
    { id: 'ecomm', label: 'Ecomm' },
    { id: 'b2b', label: 'B2B' }
  ];

  const paymentPlatforms = [
    { id: 'tsys', label: 'TSYS', cutoff: 'TSYS 11pm est cutoff', funds: 'Next day funds / 5am cutoff' },
    { id: 'cygma', label: 'Cygma', cutoff: 'Cygma 10:30pm est cutoff', funds: 'Next day funds / 4am cutoff', extra: 'same day' },
    { id: 'fiserv', label: 'FISERV', cutoff: 'FISERV 9:30pm est cutoff', funds: 'Next day funds / Instant deposit', extra: '1.5%' },
    { id: 'epx', label: 'EPX', cutoff: 'Epx 10:30pm est cutoff', funds: 'next day funds / 6am cutoff' },
    { id: 'square', label: 'Square', cutoff: 'Square 9pm est cutoff', funds: 'Next day funds' }
  ];

  const availablePlatforms = useMemo(() => {
    if (!selectedSoftware) return paymentPlatforms.map(p => p.id);
    const sw = softwarePrograms.find(s => s.id === selectedSoftware);
    return sw ? sw.platforms : [];
  }, [selectedSoftware]);

  // Auto-select platform when software only allows one
  useEffect(() => {
    if (selectedSoftware) {
      const sw = softwarePrograms.find(s => s.id === selectedSoftware);
      if (sw && sw.platforms.length === 1) {
        setSelectedPlatform(sw.platforms[0]);
      } else if (sw && !sw.platforms.includes(selectedPlatform)) {
        setSelectedPlatform(null);
      }
    } else {
      setSelectedPlatform(null);
    }
  }, [selectedSoftware]);

  const allSelected = selectedRate && selectedSoftware && selectedBusiness && selectedPlatform;

  const getAppUrl = () => {
    return 'https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A';
  };

  const SelectionCard = ({ selected, onClick, children, disabled, testId }) => (
    <button
      onClick={disabled ? undefined : onClick}
      data-testid={testId}
      className={`relative text-left rounded-xl border-2 transition-all duration-200 ${
        disabled
          ? 'opacity-30 cursor-not-allowed border-slate-700/40 bg-slate-800/30'
          : selected
            ? 'border-blue-500 bg-blue-600 shadow-lg shadow-blue-600/20'
            : 'border-slate-700/60 bg-slate-800/60 hover:border-slate-500 hover:bg-slate-800 cursor-pointer'
      }`}
    >
      <div className="flex items-start gap-3 p-4">
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
          selected ? 'border-white bg-white/20' : 'border-slate-500'
        }`}>
          {selected && (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </button>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative w-full bg-gradient-to-br from-gray-950 via-slate-900 to-purple-950 py-20 lg:py-28 overflow-hidden" data-testid="pricing-hero">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(139,92,246,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(59,130,246,0.3) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="hero-h1">
            Transparent Pricing. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Your Choice.</span>
          </h1>
          <p className="text-lg text-slate-300 mb-3 max-w-3xl mx-auto">
            Choose your rate structure, POS software, business type, and payment platform. We'll match you with the right merchant processing solution.
          </p>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            All rates can be paired with all software programs. Software availability depends on payment platform compatibility.
          </p>
        </div>
      </section>

      {/* Merchant Processing Selection */}
      <section className="bg-[#0f1219] py-20" data-testid="pricing-selection">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Merchant Processing</h2>

          {/* Step 1: Pricing Options */}
          <div className="mb-14">
            <h3 className="text-lg font-semibold text-white mb-5">Pricing Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pricingOptions.map(opt => (
                <SelectionCard
                  key={opt.id}
                  selected={selectedRate === opt.id}
                  onClick={() => setSelectedRate(opt.id)}
                  testId={`rate-${opt.id}`}
                >
                  <p className="font-semibold text-white text-sm leading-tight">{opt.label}</p>
                  <p className="text-slate-400 text-xs mt-1.5">{opt.sub}</p>
                </SelectionCard>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 mb-14" />

          {/* Step 2: Software Program */}
          <div className="mb-14">
            <h3 className="text-lg font-semibold text-white mb-5">Software Program</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {softwarePrograms.map(sw => (
                <SelectionCard
                  key={sw.id}
                  selected={selectedSoftware === sw.id}
                  onClick={() => setSelectedSoftware(sw.id)}
                  testId={`software-${sw.id}`}
                >
                  <p className="font-semibold text-white text-sm">{sw.label}</p>
                  <ul className="mt-2 space-y-0.5">
                    {sw.types.map((t, i) => (
                      <li key={i} className="text-slate-400 text-xs flex items-start gap-1.5">
                        <span className="text-slate-500 mt-px">•</span>{t}
                      </li>
                    ))}
                  </ul>
                </SelectionCard>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 mb-14" />

          {/* Step 3: Business Type */}
          <div className="mb-14">
            <h3 className="text-lg font-semibold text-white mb-5">Business Type</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {businessTypes.map(bt => (
                <SelectionCard
                  key={bt.id}
                  selected={selectedBusiness === bt.id}
                  onClick={() => setSelectedBusiness(bt.id)}
                  testId={`business-${bt.id}`}
                >
                  <p className="font-semibold text-white text-sm">{bt.label}</p>
                </SelectionCard>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 mb-14" />

          {/* Step 4: Payment Platform */}
          <div className="mb-14">
            <h3 className="text-lg font-semibold text-white mb-2">Payment Platform</h3>
            {selectedSoftware && (
              <p className="text-xs text-blue-400 mb-5">
                Showing platforms compatible with <span className="font-semibold">{softwarePrograms.find(s => s.id === selectedSoftware)?.label}</span>
              </p>
            )}
            {!selectedSoftware && <p className="text-xs text-slate-500 mb-5">Select a software program above to see compatible platforms</p>}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {paymentPlatforms.map(pp => {
                const isAvailable = availablePlatforms.includes(pp.id);
                return (
                  <SelectionCard
                    key={pp.id}
                    selected={selectedPlatform === pp.id}
                    onClick={() => setSelectedPlatform(pp.id)}
                    disabled={!isAvailable}
                    testId={`platform-${pp.id}`}
                  >
                    <p className="font-semibold text-white text-sm">{pp.label}</p>
                    <div className="mt-2 space-y-0.5">
                      <p className="text-slate-400 text-xs">{pp.cutoff}</p>
                      <p className="text-slate-400 text-xs">{pp.funds}</p>
                      {pp.extra && <p className="text-slate-400 text-xs">{pp.extra}</p>}
                    </div>
                  </SelectionCard>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            {allSelected ? (
              <div className="space-y-4" data-testid="selection-summary">
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 inline-block text-left">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Your Selection</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-blue-600/20 text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full border border-blue-500/30">
                      {pricingOptions.find(r => r.id === selectedRate)?.label}
                    </span>
                    <span className="bg-blue-600/20 text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full border border-blue-500/30">
                      {softwarePrograms.find(s => s.id === selectedSoftware)?.label}
                    </span>
                    <span className="bg-blue-600/20 text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full border border-blue-500/30">
                      {businessTypes.find(b => b.id === selectedBusiness)?.label}
                    </span>
                    <span className="bg-blue-600/20 text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full border border-blue-500/30">
                      {paymentPlatforms.find(p => p.id === selectedPlatform)?.label}
                    </span>
                  </div>
                </div>
                <div>
                  <Button
                    size="lg"
                    onClick={() => setShowAppModal(true)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-10 py-6 shadow-xl shadow-blue-600/20"
                    data-testid="start-application-btn"
                  >
                    Start Your Merchant Application <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-3" data-testid="incomplete-selection">
                <p className="text-slate-500 text-sm">
                  {!selectedRate && 'Select a pricing option to get started'}
                  {selectedRate && !selectedSoftware && 'Now choose your software program'}
                  {selectedRate && selectedSoftware && !selectedBusiness && 'Select your business type'}
                  {selectedRate && selectedSoftware && selectedBusiness && !selectedPlatform && 'Choose a payment platform to complete'}
                </p>
                <div className="flex justify-center gap-2">
                  {[selectedRate, selectedSoftware, selectedBusiness, selectedPlatform].map((sel, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${sel ? 'bg-blue-500' : 'bg-slate-700'}`} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white" data-testid="info-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">How It Works</h2>
            <p className="text-gray-500">Customize your merchant processing setup in 4 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Choose Your Rate', desc: 'Flat rate, Interchange Plus, or Dual Price / Cash Discount' },
              { step: '2', title: 'Pick Your Software', desc: 'Clover, Square, Payanywhere, Dejavoo, or Ingenico' },
              { step: '3', title: 'Select Business Type', desc: 'Retail, Restaurant, Lodging, Ecomm, or B2B' },
              { step: '4', title: 'Payment Platform', desc: 'Matched to your software for seamless processing' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold text-sm">{item.step}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showAppModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowAppModal(false)} data-testid="app-modal">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold text-lg">Merchant Application</h3>
                <p className="text-blue-100 text-xs">
                  {softwarePrograms.find(s => s.id === selectedSoftware)?.label} + {paymentPlatforms.find(p => p.id === selectedPlatform)?.label} — {pricingOptions.find(r => r.id === selectedRate)?.label}
                </p>
              </div>
              <button onClick={() => setShowAppModal(false)} className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors" data-testid="app-modal-close">&#x2715;</button>
            </div>
            <iframe src={getAppUrl()} className="w-full h-[75vh] border-0" title="Merchant Application" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
