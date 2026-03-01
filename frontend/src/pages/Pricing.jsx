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
      <section className="bg-gradient-to-b from-purple-50 to-white py-20" data-testid="pricing-selection">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">Merchant Processing</h2>

          {/* Step 1: Pricing Options */}
          <div className="mb-14">
            <h3 className="text-lg font-semibold text-gray-800 mb-5">Pricing Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pricingOptions.map(opt => (
                <SelectionCard
                  key={opt.id}
                  selected={selectedRate === opt.id}
                  onClick={() => setSelectedRate(opt.id)}
                  testId={`rate-${opt.id}`}
                >
                  <p className={`font-semibold text-sm leading-tight ${selectedRate === opt.id ? 'text-white' : 'text-gray-900'}`}>{opt.label}</p>
                  <p className={`text-xs mt-1.5 ${selectedRate === opt.id ? 'text-purple-200' : 'text-gray-500'}`}>{opt.sub}</p>
                </SelectionCard>
              ))}
            </div>
          </div>

          <div className="border-t border-purple-100 mb-14" />

          {/* Step 2: Software Program */}
          <div className="mb-14">
            <h3 className="text-lg font-semibold text-gray-800 mb-5">Software Program</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {softwarePrograms.map(sw => (
                <SelectionCard
                  key={sw.id}
                  selected={selectedSoftware === sw.id}
                  onClick={() => setSelectedSoftware(sw.id)}
                  testId={`software-${sw.id}`}
                >
                  <p className={`font-semibold text-sm ${selectedSoftware === sw.id ? 'text-white' : 'text-gray-900'}`}>{sw.label}</p>
                  <ul className="mt-2 space-y-0.5">
                    {sw.types.map((t, i) => (
                      <li key={i} className={`text-xs flex items-start gap-1.5 ${selectedSoftware === sw.id ? 'text-purple-200' : 'text-gray-500'}`}>
                        <span className={selectedSoftware === sw.id ? 'text-purple-300' : 'text-gray-400'}>•</span>{t}
                      </li>
                    ))}
                  </ul>
                </SelectionCard>
              ))}
            </div>
          </div>

          <div className="border-t border-purple-100 mb-14" />

          {/* Step 3: Business Type */}
          <div className="mb-14">
            <h3 className="text-lg font-semibold text-gray-800 mb-5">Business Type</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {businessTypes.map(bt => (
                <SelectionCard
                  key={bt.id}
                  selected={selectedBusiness === bt.id}
                  onClick={() => setSelectedBusiness(bt.id)}
                  testId={`business-${bt.id}`}
                >
                  <p className={`font-semibold text-sm ${selectedBusiness === bt.id ? 'text-white' : 'text-gray-900'}`}>{bt.label}</p>
                </SelectionCard>
              ))}
            </div>
          </div>

          <div className="border-t border-purple-100 mb-14" />

          {/* Step 4: Payment Platform */}
          <div className="mb-14">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment Platform</h3>
            {selectedSoftware && (
              <p className="text-xs text-purple-600 mb-5">
                Showing platforms compatible with <span className="font-semibold">{softwarePrograms.find(s => s.id === selectedSoftware)?.label}</span>
              </p>
            )}
            {!selectedSoftware && <p className="text-xs text-gray-400 mb-5">Select a software program above to see compatible platforms</p>}
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
                    <p className={`font-semibold text-sm ${selectedPlatform === pp.id ? 'text-white' : 'text-gray-900'}`}>{pp.label}</p>
                    <div className="mt-2 space-y-0.5">
                      <p className={`text-xs ${selectedPlatform === pp.id ? 'text-purple-200' : 'text-gray-500'}`}>{pp.cutoff}</p>
                      <p className={`text-xs ${selectedPlatform === pp.id ? 'text-purple-200' : 'text-gray-500'}`}>{pp.funds}</p>
                      {pp.extra && <p className={`text-xs ${selectedPlatform === pp.id ? 'text-purple-200' : 'text-gray-500'}`}>{pp.extra}</p>}
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
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 inline-block text-left">
                  <p className="text-xs text-purple-400 uppercase tracking-wider mb-3">Your Selection</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1.5 rounded-full border border-purple-300">
                      {pricingOptions.find(r => r.id === selectedRate)?.label}
                    </span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1.5 rounded-full border border-purple-300">
                      {softwarePrograms.find(s => s.id === selectedSoftware)?.label}
                    </span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1.5 rounded-full border border-purple-300">
                      {businessTypes.find(b => b.id === selectedBusiness)?.label}
                    </span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1.5 rounded-full border border-purple-300">
                      {paymentPlatforms.find(p => p.id === selectedPlatform)?.label}
                    </span>
                  </div>
                </div>
                <div>
                  <Button
                    size="lg"
                    onClick={() => setShowAppModal(true)}
                    className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white text-lg px-10 py-6 shadow-xl shadow-purple-600/20"
                    data-testid="start-application-btn"
                  >
                    Start Your Merchant Application <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-3" data-testid="incomplete-selection">
                <p className="text-gray-400 text-sm">
                  {!selectedRate && 'Select a pricing option to get started'}
                  {selectedRate && !selectedSoftware && 'Now choose your software program'}
                  {selectedRate && selectedSoftware && !selectedBusiness && 'Select your business type'}
                  {selectedRate && selectedSoftware && selectedBusiness && !selectedPlatform && 'Choose a payment platform to complete'}
                </p>
                <div className="flex justify-center gap-2">
                  {[selectedRate, selectedSoftware, selectedBusiness, selectedPlatform].map((sel, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${sel ? 'bg-purple-500' : 'bg-gray-200'}`} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Funding Schedule Section */}
      <section className="py-20 bg-white" data-testid="funding-schedule-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Next-Day & Same-Day Funding Schedule</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">Cutoff times and funding windows listed per processor. Batch out by the cutoff to receive funds on the timeline shown.</p>
          </div>

          {/* Processor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* TSYS */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" data-testid="funding-tsys">
              <div className="bg-gradient-to-r from-purple-700 to-purple-600 px-6 py-5 flex items-center">
                <img src="https://customer-assets.emergentagent.com/job_893b4da5-be8a-4e25-802b-413b5ad94636/artifacts/i9guktnn_TSYS%20merchant%20solutions.png" alt="TSYS Merchant Solutions" className="h-8 object-contain" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Batch Cutoff</span>
                  <span className="text-gray-800 font-bold">11:00 PM EST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Next-Day Funds</span>
                  <span className="text-purple-600 font-bold">By 5:00 AM EST</span>
                </div>
                <p className="text-xs text-gray-400 pt-2">Accounts with 5309 or 4765 MID prefix</p>
              </div>
            </div>

            {/* Cygma */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" data-testid="funding-cygma">
              <div className="bg-gradient-to-r from-purple-700 to-purple-600 px-6 py-5 flex items-center">
                <img src="https://customer-assets.emergentagent.com/job_893b4da5-be8a-4e25-802b-413b5ad94636/artifacts/dzyiqi56_cygma-brand.svg" alt="Cygma" className="h-8 object-contain brightness-200" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Batch Cutoff</span>
                  <span className="text-gray-800 font-bold">10:30 PM EST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Next-Day Funds</span>
                  <span className="text-purple-600 font-bold">By 4:00 AM EST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Same-Day Available</span>
                  <span className="text-amber-600 font-semibold text-sm">Batch by 8 AM EST</span>
                </div>
                <div className="bg-purple-50 rounded-lg px-4 py-2.5 mt-2">
                  <p className="text-xs text-purple-400">Same-Day Window</p>
                  <p className="text-xs text-gray-600 mt-1">Batch by 5 AM PST / 8 AM EST → Deposit by 10 AM PST / 1 PM EST</p>
                  <p className="text-xs text-amber-600/80 mt-1">Same-day funding dependent on merchant's bank</p>
                </div>
                <p className="text-xs text-gray-500 pt-1">Acquiring Bank: <span className="underline font-semibold text-gray-700">Commerce Bank of California</span></p>
              </div>
            </div>

            {/* FISERV */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" data-testid="funding-fiserv">
              <div className="bg-gradient-to-r from-purple-700 to-purple-600 px-6 py-5 flex items-center">
                <img src="https://customer-assets.emergentagent.com/job_893b4da5-be8a-4e25-802b-413b5ad94636/artifacts/tuet7vuf_fiserve.png" alt="Fiserv" className="h-8 object-contain" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Batch Cutoff</span>
                  <span className="text-gray-800 font-bold">9:30 PM EST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Next-Day Funds</span>
                  <span className="text-purple-600 font-bold">Next Business Day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Instant Deposit</span>
                  <span className="text-amber-600 font-semibold text-sm">Available (1.5% fee)</span>
                </div>
                <div className="border-t border-gray-100 pt-3 mt-3">
                  <div className="bg-purple-50 rounded-lg px-4 py-2.5">
                    <p className="text-xs text-purple-500 font-semibold">Additional Cutoffs (Omaha Backend)</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2 text-xs">
                      <span className="text-gray-500">Omaha:</span><span className="text-gray-700">7:00 PM EST</span>
                      <span className="text-gray-500">Nashville:</span><span className="text-gray-700">5:00 PM EST</span>
                      <span className="text-gray-500">Buypass:</span><span className="text-gray-700">2:00 PM EST</span>
                      <span className="text-gray-500">North:</span><span className="text-gray-700">4:00 PM EST</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400">Clover &amp; FISERV-integrated merchants</p>
              </div>
            </div>

            {/* EPX */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" data-testid="funding-epx">
              <div className="bg-gradient-to-r from-purple-700 to-purple-600 px-6 py-5 flex items-center">
                <img src="https://customer-assets.emergentagent.com/job_893b4da5-be8a-4e25-802b-413b5ad94636/artifacts/9dw9w9xc_epx_logo_grey.jpg" alt="EPX" className="h-8 object-contain brightness-200" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Batch Cutoff (Next Day)</span>
                  <span className="text-gray-800 font-bold">10:00 PM EST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Next-Day Funds</span>
                  <span className="text-purple-600 font-bold">By 6:00 AM EST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Same-Day Cutoff</span>
                  <span className="text-amber-600 font-semibold text-sm">10:30 AM EST</span>
                </div>
                <div className="border-t border-gray-100 pt-3 mt-3 space-y-2">
                  <div className="bg-purple-50 rounded-lg px-4 py-2.5">
                    <p className="text-xs text-purple-500">Same-Day Funding (BMO Harris)</p>
                    <p className="text-xs text-gray-600 mt-1">Batch by 10:30 AM EST → Deposit by 5 PM EST same day</p>
                    <p className="text-xs text-gray-400 mt-0.5">Limit: $50,000/day</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg px-4 py-2.5">
                    <p className="text-xs text-purple-500">Next Day (Bancorp/Citizens/Fresno First)</p>
                    <p className="text-xs text-gray-600 mt-1">Settlement by 12:00 AM EST → Next business day deposit</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 pt-1">Acquiring Banks: <span className="underline font-semibold text-gray-700">Bancorp / Citizens Bank / Fresno First Bank</span></p>
              </div>
            </div>

            {/* Square */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow md:col-span-2" data-testid="funding-square">
              <div className="bg-gradient-to-r from-purple-700 to-purple-600 px-6 py-5 flex items-center">
                <img src="https://customer-assets.emergentagent.com/job_893b4da5-be8a-4e25-802b-413b5ad94636/artifacts/pc8vmlv3_Square_Logo_Landscape.png" alt="Square" className="h-8 object-contain brightness-200" />
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex justify-between items-center md:flex-col md:items-start md:gap-1">
                    <span className="text-gray-500 text-sm">Batch Cutoff</span>
                    <span className="text-gray-800 font-bold">9:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center md:flex-col md:items-start md:gap-1">
                    <span className="text-gray-500 text-sm">Next-Day Funds</span>
                    <span className="text-purple-600 font-bold">Next Business Day</span>
                  </div>
                  <div className="flex justify-between items-center md:flex-col md:items-start md:gap-1">
                    <span className="text-gray-500 text-sm">Instant Transfer</span>
                    <span className="text-amber-600 font-semibold text-sm">Available (1.5% fee)</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4">Square Financial Services</p>
              </div>
            </div>
          </div>

          {/* Funding Timeline Pictograph */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">How Funding Works — Standard vs. Next-Day vs. Same-Day</h3>

            <div className="space-y-6 max-w-4xl mx-auto">
              {/* Standard Funding */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6" data-testid="timeline-standard">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-gray-400 rounded-full" />
                  <h4 className="text-lg font-bold text-gray-900">Standard Funding</h4>
                  <span className="bg-gray-100 text-gray-500 text-xs px-2.5 py-0.5 rounded-full border border-gray-200 ml-auto">2 Business Days</span>
                </div>
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border-2 border-gray-300 z-10">
                        <CreditCard className="h-4 w-4 text-gray-500" />
                      </div>
                      <p className="text-xs text-gray-500 mt-2 font-semibold">Day 1</p>
                      <p className="text-xs text-gray-400 text-center">Transaction<br />Processed</p>
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-200 -mx-2" />
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border-2 border-gray-300 z-10">
                        <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 font-semibold">Day 2</p>
                      <p className="text-xs text-gray-400 text-center">Batch Settles<br />with Processor</p>
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-200 -mx-2" />
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center border-2 border-gray-400 z-10">
                        <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 font-semibold">Day 3</p>
                      <p className="text-xs text-gray-400 text-center">Funds Deposited<br />in Your Bank</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Day Funding */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6" data-testid="timeline-nextday">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full" />
                  <h4 className="text-lg font-bold text-gray-900">Next-Day Funding</h4>
                  <span className="bg-purple-100 text-purple-600 text-xs px-2.5 py-0.5 rounded-full border border-purple-300 ml-auto">1 Business Day</span>
                </div>
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center border-2 border-purple-300 z-10">
                        <CreditCard className="h-4 w-4 text-purple-600" />
                      </div>
                      <p className="text-xs text-purple-600 mt-2 font-semibold">Day 1</p>
                      <p className="text-xs text-gray-500 text-center">Transaction<br />Processed</p>
                    </div>
                    <div className="flex-1 h-0.5 bg-purple-200 -mx-2" />
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center border-2 border-purple-300 z-10">
                        <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <p className="text-xs text-purple-600 mt-2 font-semibold">Day 1 Evening</p>
                      <p className="text-xs text-gray-500 text-center">Batch Out<br />by Cutoff Time</p>
                    </div>
                    <div className="flex-1 h-0.5 bg-purple-200 -mx-2" />
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center border-2 border-purple-500 z-10">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                      </div>
                      <p className="text-xs text-purple-600 mt-2 font-semibold">Day 2 Morning</p>
                      <p className="text-xs text-gray-500 text-center">Funds Deposited<br />in Your Bank</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Same Day Funding */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6" data-testid="timeline-sameday">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-amber-500 rounded-full" />
                  <h4 className="text-lg font-bold text-gray-900">Same-Day Funding</h4>
                  <span className="bg-amber-100 text-amber-600 text-xs px-2.5 py-0.5 rounded-full border border-amber-300 ml-auto">Same Business Day</span>
                </div>
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center border-2 border-amber-300 z-10">
                        <CreditCard className="h-4 w-4 text-amber-600" />
                      </div>
                      <p className="text-xs text-amber-600 mt-2 font-semibold">Morning</p>
                      <p className="text-xs text-gray-500 text-center">Transaction<br />Processed</p>
                    </div>
                    <div className="flex-1 h-0.5 bg-amber-200 -mx-2" />
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center border-2 border-amber-300 z-10">
                        <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <p className="text-xs text-amber-600 mt-2 font-semibold">10:30 AM EST</p>
                      <p className="text-xs text-gray-500 text-center">Early Batch<br />Cutoff</p>
                    </div>
                    <div className="flex-1 h-0.5 bg-amber-200 -mx-2" />
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center border-2 border-amber-400 z-10">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                      </div>
                      <p className="text-xs text-amber-600 mt-2 font-semibold">By 5:00 PM EST</p>
                      <p className="text-xs text-gray-500 text-center">Funds Deposited<br />Same Day</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-amber-500/80 mt-4 text-center">Available on EPX (via BMO Harris, limit $50K/day) and Cygma (batch by 8 AM EST). Dependent on merchant's bank.</p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 max-w-4xl mx-auto mt-10" data-testid="funding-notes">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-semibold">Important Notes</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex gap-2"><span className="text-gray-300">•</span>All cutoff times are in Eastern Standard Time (EST)</li>
              <li className="flex gap-2"><span className="text-gray-300">•</span>Funding is not guaranteed for batches flagged by Risk Management</li>
              <li className="flex gap-2"><span className="text-gray-300">•</span>Same-day funding availability depends on merchant's bank capabilities</li>
              <li className="flex gap-2"><span className="text-gray-300">•</span>Weekend batches are typically deposited on the next business day (Monday)</li>
              <li className="flex gap-2"><span className="text-gray-300">•</span>Amex &amp; Discover Retained transactions may have extended deposit timelines</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-purple-50" data-testid="info-section">
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
              <div key={i} className="text-center bg-white rounded-xl p-5 shadow-sm border border-purple-100">
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
            <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-4 flex items-center justify-between">
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
