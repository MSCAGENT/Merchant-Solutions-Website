import React, { useEffect, useState, useMemo } from 'react';
import { ArrowRight, CreditCard } from 'lucide-react';
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
          ? 'opacity-30 cursor-not-allowed border-gray-200 bg-gray-50'
          : selected
            ? 'border-purple-500 bg-purple-600 shadow-lg shadow-purple-600/20'
            : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md cursor-pointer'
      }`}
    >
      <div className="flex items-start gap-3 p-4">
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
          selected ? 'border-white bg-white/20' : 'border-gray-300'
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
      <section className="relative w-full bg-gradient-to-br from-purple-100 via-white to-purple-50 py-20 lg:py-28 overflow-hidden" data-testid="pricing-hero">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(139,92,246,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(168,85,247,0.2) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" data-testid="hero-h1">
            Transparent Pricing. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">Your Choice.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-3 max-w-3xl mx-auto">
            Choose your rate structure, POS software, business type, and payment platform. We'll match you with the right merchant processing solution.
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
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

      {/* Funding Schedule Section */}
      <section className="py-20 bg-slate-950" data-testid="funding-schedule-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Next-Day & Same-Day Funding Schedule</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">Cutoff times and funding windows listed per processor. Batch out by the cutoff to receive funds on the timeline shown.</p>
          </div>

          {/* Processor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* TSYS */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden" data-testid="funding-tsys">
              <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 border-b border-slate-800 px-6 py-4">
                <h3 className="text-xl font-bold text-white">TSYS</h3>
                <p className="text-slate-400 text-xs mt-1">Accounts with 5309 or 4765 MID prefix</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Batch Cutoff</span>
                  <span className="text-white font-bold">11:00 PM EST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Next-Day Funds</span>
                  <span className="text-emerald-400 font-bold">By 5:00 AM EST</span>
                </div>
                <div className="border-t border-slate-800 pt-3 mt-3">
                  <div className="bg-slate-800/60 rounded-lg px-4 py-2.5">
                    <p className="text-xs text-slate-500">Additional Cutoffs (Omaha Backend)</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2 text-xs">
                      <span className="text-slate-400">Omaha:</span><span className="text-slate-300">7:00 PM EST</span>
                      <span className="text-slate-400">Nashville:</span><span className="text-slate-300">5:00 PM EST</span>
                      <span className="text-slate-400">Buypass:</span><span className="text-slate-300">2:00 PM EST</span>
                      <span className="text-slate-400">North:</span><span className="text-slate-300">4:00 PM EST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cygma */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden" data-testid="funding-cygma">
              <div className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border-b border-slate-800 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Cygma</h3>
                <p className="underline text-blue-400 text-xs mt-1 font-semibold">Commerce Bank of California</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Batch Cutoff</span>
                  <span className="text-white font-bold">10:30 PM EST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Next-Day Funds</span>
                  <span className="text-emerald-400 font-bold">By 4:00 AM EST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Same-Day Available</span>
                  <span className="text-yellow-400 font-semibold text-sm">Batch by 8 AM EST</span>
                </div>
                <div className="border-t border-slate-800 pt-3 mt-3">
                  <div className="bg-slate-800/60 rounded-lg px-4 py-2.5">
                    <p className="text-xs text-slate-500">Same-Day Window</p>
                    <p className="text-xs text-slate-300 mt-1">Batch out by 5 AM PST / 8 AM EST → Deposit by 10 AM PST / 1 PM EST</p>
                    <p className="text-xs text-yellow-400/70 mt-1">Same-day funding dependent on merchant's bank</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FISERV */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden" data-testid="funding-fiserv">
              <div className="bg-gradient-to-r from-emerald-600/20 to-emerald-800/20 border-b border-slate-800 px-6 py-4">
                <h3 className="text-xl font-bold text-white">FISERV</h3>
                <p className="text-slate-400 text-xs mt-1">Clover &amp; FISERV-integrated merchants</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Batch Cutoff</span>
                  <span className="text-white font-bold">9:30 PM EST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Next-Day Funds</span>
                  <span className="text-emerald-400 font-bold">Next Business Day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Instant Deposit</span>
                  <span className="text-yellow-400 font-semibold text-sm">Available (1.5% fee)</span>
                </div>
              </div>
            </div>

            {/* EPX */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden" data-testid="funding-epx">
              <div className="bg-gradient-to-r from-orange-600/20 to-orange-800/20 border-b border-slate-800 px-6 py-4">
                <h3 className="text-xl font-bold text-white">EPX</h3>
                <p className="underline text-blue-400 text-xs mt-1 font-semibold">Bancorp / Citizens Bank / Fresno First Bank</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Batch Cutoff (Next Day)</span>
                  <span className="text-white font-bold">10:00 PM EST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Next-Day Funds</span>
                  <span className="text-emerald-400 font-bold">By 6:00 AM EST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Same-Day Cutoff</span>
                  <span className="text-yellow-400 font-semibold text-sm">10:30 AM EST</span>
                </div>
                <div className="border-t border-slate-800 pt-3 mt-3 space-y-2">
                  <div className="bg-slate-800/60 rounded-lg px-4 py-2.5">
                    <p className="text-xs text-slate-500">Same-Day Funding (BMO Harris)</p>
                    <p className="text-xs text-slate-300 mt-1">Batch by 10:30 AM EST → Deposit by 5 PM EST same day</p>
                    <p className="text-xs text-slate-400 mt-0.5">Limit: $50,000/day</p>
                  </div>
                  <div className="bg-slate-800/60 rounded-lg px-4 py-2.5">
                    <p className="text-xs text-slate-500">Next Day (Bancorp/Citizens/Fresno First)</p>
                    <p className="text-xs text-slate-300 mt-1">Settlement by 12:00 AM EST → Next business day deposit</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Square */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden md:col-span-2" data-testid="funding-square">
              <div className="bg-gradient-to-r from-blue-600/20 to-indigo-800/20 border-b border-slate-800 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Square</h3>
                <p className="text-slate-400 text-xs mt-1">Square Financial Services</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex justify-between items-center md:flex-col md:items-start md:gap-1">
                    <span className="text-slate-400 text-sm">Batch Cutoff</span>
                    <span className="text-white font-bold">9:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center md:flex-col md:items-start md:gap-1">
                    <span className="text-slate-400 text-sm">Next-Day Funds</span>
                    <span className="text-emerald-400 font-bold">Next Business Day</span>
                  </div>
                  <div className="flex justify-between items-center md:flex-col md:items-start md:gap-1">
                    <span className="text-slate-400 text-sm">Instant Transfer</span>
                    <span className="text-yellow-400 font-semibold text-sm">Available (1.5% fee)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Funding Timeline Pictograph */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white text-center mb-10">How Funding Works — Standard vs. Next-Day vs. Same-Day</h3>

            <div className="space-y-6 max-w-4xl mx-auto">
              {/* Standard Funding */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6" data-testid="timeline-standard">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-slate-500 rounded-full" />
                  <h4 className="text-lg font-bold text-white">Standard Funding</h4>
                  <span className="bg-slate-700 text-slate-300 text-xs px-2.5 py-0.5 rounded-full ml-auto">2 Business Days</span>
                </div>
                <div className="relative">
                  {/* Timeline bar */}
                  <div className="flex items-center">
                    {/* Day 1 */}
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center border-2 border-slate-600 z-10">
                        <CreditCard className="h-4 w-4 text-slate-400" />
                      </div>
                      <p className="text-xs text-slate-400 mt-2 font-semibold">Day 1</p>
                      <p className="text-xs text-slate-500 text-center">Transaction<br />Processed</p>
                    </div>
                    <div className="flex-1 h-0.5 bg-slate-700 -mx-2" />
                    {/* Day 2 */}
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center border-2 border-slate-600 z-10">
                        <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <p className="text-xs text-slate-400 mt-2 font-semibold">Day 2</p>
                      <p className="text-xs text-slate-500 text-center">Batch Settles<br />with Processor</p>
                    </div>
                    <div className="flex-1 h-0.5 bg-slate-700 -mx-2" />
                    {/* Day 3 */}
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center border-2 border-slate-500 z-10">
                        <svg className="h-4 w-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                      </div>
                      <p className="text-xs text-slate-400 mt-2 font-semibold">Day 3</p>
                      <p className="text-xs text-slate-500 text-center">Funds Deposited<br />in Your Bank</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Day Funding */}
              <div className="bg-slate-900 border border-emerald-800/40 rounded-xl p-6" data-testid="timeline-nextday">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                  <h4 className="text-lg font-bold text-white">Next-Day Funding</h4>
                  <span className="bg-emerald-900/40 text-emerald-400 text-xs px-2.5 py-0.5 rounded-full border border-emerald-700/40 ml-auto">1 Business Day</span>
                </div>
                <div className="relative">
                  <div className="flex items-center">
                    {/* Day 1 - Transaction */}
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-emerald-900/40 rounded-full flex items-center justify-center border-2 border-emerald-700/50 z-10">
                        <CreditCard className="h-4 w-4 text-emerald-400" />
                      </div>
                      <p className="text-xs text-emerald-400 mt-2 font-semibold">Day 1</p>
                      <p className="text-xs text-slate-400 text-center">Transaction<br />Processed</p>
                    </div>
                    <div className="flex-1 h-0.5 bg-emerald-800/50 -mx-2" />
                    {/* Day 1 - Batch */}
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-emerald-900/40 rounded-full flex items-center justify-center border-2 border-emerald-700/50 z-10">
                        <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <p className="text-xs text-emerald-400 mt-2 font-semibold">Day 1 Evening</p>
                      <p className="text-xs text-slate-400 text-center">Batch Out<br />by Cutoff Time</p>
                    </div>
                    <div className="flex-1 h-0.5 bg-emerald-800/50 -mx-2" />
                    {/* Day 2 - Deposit */}
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center border-2 border-emerald-500 z-10">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                      </div>
                      <p className="text-xs text-emerald-400 mt-2 font-semibold">Day 2 Morning</p>
                      <p className="text-xs text-slate-400 text-center">Funds Deposited<br />in Your Bank</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Same Day Funding */}
              <div className="bg-slate-900 border border-yellow-700/40 rounded-xl p-6" data-testid="timeline-sameday">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <h4 className="text-lg font-bold text-white">Same-Day Funding</h4>
                  <span className="bg-yellow-900/40 text-yellow-400 text-xs px-2.5 py-0.5 rounded-full border border-yellow-700/40 ml-auto">Same Business Day</span>
                </div>
                <div className="relative">
                  <div className="flex items-center">
                    {/* Morning - Transaction */}
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-yellow-900/40 rounded-full flex items-center justify-center border-2 border-yellow-700/50 z-10">
                        <CreditCard className="h-4 w-4 text-yellow-400" />
                      </div>
                      <p className="text-xs text-yellow-400 mt-2 font-semibold">Morning</p>
                      <p className="text-xs text-slate-400 text-center">Transaction<br />Processed</p>
                    </div>
                    <div className="flex-1 h-0.5 bg-yellow-800/50 -mx-2" />
                    {/* Mid-Morning - Batch */}
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-yellow-900/40 rounded-full flex items-center justify-center border-2 border-yellow-700/50 z-10">
                        <svg className="h-4 w-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <p className="text-xs text-yellow-400 mt-2 font-semibold">10:30 AM EST</p>
                      <p className="text-xs text-slate-400 text-center">Early Batch<br />Cutoff</p>
                    </div>
                    <div className="flex-1 h-0.5 bg-yellow-800/50 -mx-2" />
                    {/* Afternoon - Deposit */}
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-yellow-400 z-10">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                      </div>
                      <p className="text-xs text-yellow-400 mt-2 font-semibold">By 5:00 PM EST</p>
                      <p className="text-xs text-slate-400 text-center">Funds Deposited<br />Same Day</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-yellow-500/70 mt-4 text-center">Available on EPX (via BMO Harris, limit $50K/day) and Cygma (batch by 8 AM EST). Dependent on merchant's bank.</p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 max-w-4xl mx-auto mt-10" data-testid="funding-notes">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-3 font-semibold">Important Notes</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex gap-2"><span className="text-slate-600">•</span>All cutoff times are in Eastern Standard Time (EST)</li>
              <li className="flex gap-2"><span className="text-slate-600">•</span>Funding is not guaranteed for batches flagged by Risk Management</li>
              <li className="flex gap-2"><span className="text-slate-600">•</span>Same-day funding availability depends on merchant's bank capabilities</li>
              <li className="flex gap-2"><span className="text-slate-600">•</span>Weekend batches are typically deposited on the next business day (Monday)</li>
              <li className="flex gap-2"><span className="text-slate-600">•</span>Amex &amp; Discover Retained transactions may have extended deposit timelines</li>
            </ul>
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
