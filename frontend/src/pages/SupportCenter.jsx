import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import {
  Search, ChevronDown, ChevronRight, Copy, Check, ExternalLink,
  Monitor, Wifi, Printer, CreditCard, Shield, Settings,
  Zap, HelpCircle, Wrench, Phone, ArrowRight, Tag,
  CheckCircle, AlertTriangle, Package, BookOpen
} from 'lucide-react';
import { Button } from '../components/ui/button';

/* ═══════════════════════════════════════════════════════
   SUPPORT ARTICLE DATA
   ═══════════════════════════════════════════════════════ */
const ARTICLES = [
  // ── Dejavoo ──
  { id: 'dejavoo-internet', title: 'Dejavoo Terminal Not Connecting to Internet', brand: 'Dejavoo', tags: ['wifi', 'internet', 'connectivity', 'ethernet', 'network'],
    body: 'If the terminal cannot connect, check the Ethernet cable or Wi-Fi connection first. Restart the modem, router, and terminal. In many cases, a simple reboot restores communication.' },
  { id: 'dejavoo-comm-error', title: 'Dejavoo COMM ERROR Fix', brand: 'Dejavoo', tags: ['comm', 'error', 'network', 'communication'],
    body: 'A COMM ERROR usually points to a network or communication problem. Check internet access, verify the terminal date and time, and restart the router and terminal.' },
  { id: 'dejavoo-frozen', title: 'Dejavoo Terminal Frozen', brand: 'Dejavoo', tags: ['frozen', 'unresponsive', 'reboot', 'restart'],
    body: 'If the terminal becomes unresponsive, hold the power button until it restarts. This often resolves temporary software lockups.' },
  { id: 'dejavoo-wifi', title: 'Dejavoo Wi-Fi Setup', brand: 'Dejavoo', tags: ['wifi', 'setup', 'network', 'wireless'],
    body: 'Use the communications menu to connect the device to the proper Wi-Fi network. Confirm the correct password and use a stable network connection.' },
  // ── PAX ──
  { id: 'pax-internet', title: 'PAX Terminal Not Connecting', brand: 'PAX', tags: ['wifi', 'internet', 'connectivity', 'ethernet', 'network'],
    body: 'Verify Wi-Fi or Ethernet settings, confirm the password, test the network on another device, and restart the terminal.' },
  { id: 'pax-frozen', title: 'PAX Terminal Frozen', brand: 'PAX', tags: ['frozen', 'unresponsive', 'reboot', 'restart'],
    body: 'Hold the power button and restart the device. A reboot resolves many temporary software issues.' },
  { id: 'pax-printer', title: 'PAX Printer Not Printing', brand: 'PAX', tags: ['printer', 'receipt', 'paper', 'print'],
    body: 'Check that thermal paper is loaded correctly and that the paper roll is not empty. Re-seat the roll and try printing again.' },
  { id: 'pax-charging', title: 'PAX Terminal Not Charging', brand: 'PAX', tags: ['charging', 'battery', 'power', 'cable'],
    body: 'Inspect the charging cable, adapter, and outlet. If needed, test with another charger.' },
  // ── Ingenico ──
  { id: 'ingenico-transactions', title: 'Ingenico Terminal Not Processing Transactions', brand: 'Ingenico', tags: ['transaction', 'declined', 'processing', 'payment'],
    body: 'Restart the terminal, check internet connectivity, confirm the merchant account is active, and run a test transaction.' },
  { id: 'ingenico-reader', title: 'Ingenico Card Reader Not Detecting Cards', brand: 'Ingenico', tags: ['reader', 'card', 'chip', 'insert', 'detect'],
    body: 'Test another card and clean the card reader using an approved cleaning card. Restart the terminal after cleaning.' },
  { id: 'ingenico-network', title: 'Ingenico Terminal Network Issue', brand: 'Ingenico', tags: ['network', 'wifi', 'ethernet', 'internet', 'connectivity'],
    body: 'Check Ethernet or Wi-Fi status, restart the router, and then restart the terminal.' },
  // ── Clover ──
  { id: 'clover-payments', title: 'Clover Terminal Not Processing Payments', brand: 'Clover', tags: ['payment', 'processing', 'transaction', 'declined'],
    body: 'Check the network connection, restart the Clover device, and verify that the system is fully updated.' },
  { id: 'clover-printer', title: 'Clover Printer Issues', brand: 'Clover', tags: ['printer', 'receipt', 'paper', 'print'],
    body: 'Check the paper roll, confirm the paper is loaded correctly, and run a test receipt.' },
  // ── Square ──
  { id: 'square-internet', title: 'Square Terminal Not Connecting to Wi-Fi', brand: 'Square', tags: ['wifi', 'internet', 'connectivity', 'network'],
    body: 'Restart the device, reconnect to Wi-Fi, and verify the network is functioning.' },
  { id: 'square-charging', title: 'Square Reader Not Charging', brand: 'Square', tags: ['charging', 'battery', 'power', 'cable'],
    body: 'Confirm the cable and outlet are working and reconnect the reader.' },
];

const DEPLOYMENT = [
  { id: 'deploy-dejavoo', brand: 'Dejavoo', title: 'How to Deploy a Dejavoo Terminal',
    steps: ['Connect power and internet', 'Allow terminal configuration to load', 'Confirm merchant ID is active', 'Run a test transaction', 'Verify approval response', 'Confirm receipt printing', 'Verify batch settlement'] },
  { id: 'deploy-pax', brand: 'PAX', title: 'How to Deploy a PAX Terminal',
    steps: ['Power on terminal', 'Connect to Wi-Fi or Ethernet', 'Launch BroadPOS or configured payment app', 'Load merchant configuration', 'Run a test sale', 'Confirm printer works', 'Test contactless payment', 'Verify settlement'] },
  { id: 'deploy-ingenico', brand: 'Ingenico', title: 'How to Deploy an Ingenico Terminal',
    steps: ['Connect terminal to internet', 'Download or confirm configuration', 'Run a test transaction', 'Confirm receipt printing', 'Test card insert and tap', 'Verify settlement batch'] },
];

const BRANDS = ['Dejavoo', 'PAX', 'Ingenico', 'Clover', 'Square'];
const CHIPS = ['Dejavoo', 'PAX', 'Ingenico', 'Clover', 'Square', 'Deployment', 'Testing', 'Funding Support'];
const BRAND_COLORS = { Dejavoo: 'bg-blue-100 text-blue-700 border-blue-200', PAX: 'bg-emerald-100 text-emerald-700 border-emerald-200', Ingenico: 'bg-orange-100 text-orange-700 border-orange-200', Clover: 'bg-green-100 text-green-700 border-green-200', Square: 'bg-gray-100 text-gray-700 border-gray-200' };

const SUPPORT_TABLE = [
  { topic: 'Merchant account setup', msc: true, provider: false },
  { topic: 'Funding and deposits', msc: true, provider: false },
  { topic: 'Chargebacks', msc: true, provider: false },
  { topic: 'Terminal deployment', msc: true, provider: 'Sometimes' },
  { topic: 'POS software bugs', msc: false, provider: true },
  { topic: 'Clover software support', msc: false, provider: true },
  { topic: 'Square software support', msc: false, provider: true },
  { topic: 'Hardware manufacturer issues', msc: 'Limited', provider: true },
];

/* ── Copyable Link Button ── */
const CopyLinkBtn = ({ articleId }) => {
  const [copied, setCopied] = useState(false);
  const url = `https://merchantsolutionscorp.com/support#${articleId}`;
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [url]);
  return (
    <button onClick={handleCopy} className="flex items-center gap-1 text-xs text-gray-400 hover:text-purple-600 transition-colors" data-testid={`copy-${articleId}`} title="Copy link">
      {copied ? <><Check className="h-3.5 w-3.5 text-green-500" /> Copied</> : <><Copy className="h-3.5 w-3.5" /> Copy link</>}
    </button>
  );
};

/* ── Article Card ── */
const ArticleCard = ({ article }) => (
  <div id={article.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:border-purple-300 hover:shadow-md transition-all scroll-mt-32" data-testid={`article-${article.id}`}>
    <div className="flex items-start justify-between gap-3 mb-2">
      <h3 className="font-semibold text-gray-900 text-sm leading-snug">{article.title}</h3>
      <span className={`text-xs font-medium px-2 py-0.5 rounded-full border whitespace-nowrap ${BRAND_COLORS[article.brand] || 'bg-gray-100 text-gray-600'}`}>{article.brand}</span>
    </div>
    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{article.body}</p>
    <CopyLinkBtn articleId={article.id} />
  </div>
);

export default function SupportCenter() {
  const [search, setSearch] = useState('');
  const [activeChip, setActiveChip] = useState(null);
  const [expandedBrands, setExpandedBrands] = useState({});
  const location = useLocation();

  /* Scroll to anchor on load */
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
    }
  }, [location.hash]);

  /* Live search filter */
  const filteredArticles = useMemo(() => {
    let items = ARTICLES;
    const q = (search || '').toLowerCase().trim();
    const chip = activeChip?.toLowerCase();

    if (chip) {
      if (['deployment', 'testing'].includes(chip)) return [];
      if (chip === 'funding support') return [];
      items = items.filter(a => a.brand.toLowerCase() === chip);
    }
    if (q) {
      items = items.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.body.toLowerCase().includes(q) ||
        a.tags.some(t => t.includes(q)) ||
        a.brand.toLowerCase().includes(q)
      );
    }
    return items;
  }, [search, activeChip]);

  const showDeployment = !activeChip || ['deployment', 'testing'].includes(activeChip?.toLowerCase());
  const showFunding = !activeChip || activeChip?.toLowerCase() === 'funding support';

  const handleChip = (chip) => {
    setActiveChip(prev => prev === chip ? null : chip);
    setSearch('');
  };

  const toggleBrand = (brand) => setExpandedBrands(prev => ({ ...prev, [brand]: !prev[brand] }));

  /* ── Schemas ── */
  const webpageSchema = { "@context": "https://schema.org", "@type": "WebPage", "name": "Support Center", "url": "https://merchantsolutionscorp.com/support", "description": "Support center for Dejavoo, PAX, Ingenico, Clover, and Square troubleshooting, deployment, and merchant account support." };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
    { "@type": "Question", "name": "Who do I contact for merchant account funding issues?", "acceptedAnswer": { "@type": "Answer", "text": "Contact Merchant Solutions Corp for funding questions, deposits, chargebacks, merchant account setup, and onboarding support." } },
    { "@type": "Question", "name": "Who supports Clover and Square software issues?", "acceptedAnswer": { "@type": "Answer", "text": "Software-specific issues for Clover and Square are generally handled by the platform provider." } },
    { "@type": "Question", "name": "What should I do if my terminal is not connecting to the internet?", "acceptedAnswer": { "@type": "Answer", "text": "Check the Wi-Fi or Ethernet connection, restart the router, and reboot the terminal. If the issue continues, review the brand-specific troubleshooting steps." } },
    { "@type": "Question", "name": "Does Merchant Solutions Corp help deploy terminals?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Merchant Solutions Corp helps with terminal deployment, onboarding, configuration, and setup support." } },
  ]};
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://merchantsolutionscorp.com/" },
    { "@type": "ListItem", "position": 2, "name": "Company", "item": "https://merchantsolutionscorp.com/about-merchant-solutions-corp" },
    { "@type": "ListItem", "position": 3, "name": "Support Center", "item": "https://merchantsolutionscorp.com/support" },
  ]};
  const orgSchema = { "@context": "https://schema.org", "@type": "Organization", "name": "Merchant Solutions Corp", "url": "https://merchantsolutionscorp.com", "logo": "https://merchantsolutionscorp.com/logo.png" };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>POS Support Center | Dejavoo, PAX, Ingenico, Clover &amp; Square Help</title>
        <meta name="description" content="Get troubleshooting help for Dejavoo, PAX, Ingenico, Clover, and Square systems. Search common terminal issues, deployment steps, and payment support resources." />
        <meta name="keywords" content="POS support center, payment terminal troubleshooting, credit card machine support, Dejavoo terminal support, PAX terminal troubleshooting, Ingenico terminal support, Clover POS support, Square POS troubleshooting, POS help center, terminal not connecting" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/support" />
        <meta property="og:title" content="POS Support Center | Dejavoo, PAX, Ingenico, Clover & Square Help" />
        <meta property="og:description" content="Find troubleshooting guides, setup help, and support resources for payment terminals and POS systems." />
        <meta property="og:url" content="https://merchantsolutionscorp.com/support" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="POS Support Center | Dejavoo, PAX, Ingenico, Clover & Square Help" />
        <meta name="twitter:description" content="Find troubleshooting guides, setup help, and support resources for payment terminals and POS systems." />
        <script type="application/ld+json">{JSON.stringify(webpageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500" data-testid="breadcrumb">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/about-merchant-solutions-corp" className="hover:text-purple-600 transition-colors">Company</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gray-900 font-medium">Support Center</span>
          </nav>
        </div>
      </div>

      {/* ═══ SECTION 1: HERO SEARCH ═══ */}
      <section className="bg-white border-b border-gray-200 pt-16 pb-12" data-testid="hero-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4" data-testid="hero-h1">Support Center</h1>
          <p className="text-lg text-gray-600 mb-2">Find troubleshooting guides, setup help, and support resources for payment terminals and POS systems.</p>
          <p className="text-sm text-gray-500 mb-1">Merchant Solutions Corp provides onboarding, deployment, and payment processing support.</p>
          <p className="text-sm text-gray-400 mb-8">Software-specific and hardware-specific support may be handled by the device or platform provider.</p>

          {/* Search bar */}
          <div className="relative max-w-2xl mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setActiveChip(null); }}
              placeholder="Search support topics, terminal issues, or POS help..."
              className="w-full pl-12 pr-4 py-4 text-base border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
              data-testid="search-input"
            />
          </div>
          <p className="text-xs text-gray-400 mb-4">Search by terminal brand, issue type, or keyword such as Wi-Fi, printer, declined, frozen, or receipt.</p>

          {/* Quick chips */}
          <div className="flex flex-wrap justify-center gap-2" data-testid="quick-chips">
            {CHIPS.map(chip => (
              <button
                key={chip}
                onClick={() => handleChip(chip)}
                className={`px-4 py-2 text-sm rounded-full border font-medium transition-all ${activeChip === chip ? 'bg-purple-600 text-white border-purple-600' : 'bg-white text-gray-600 border-gray-300 hover:border-purple-400 hover:text-purple-600'}`}
                data-testid={`chip-${chip.toLowerCase().replace(/\s+/g, '-')}`}
              >{chip}</button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: FEATURED HELP CATEGORIES ═══ */}
      <section className="py-16 bg-gray-50" data-testid="categories-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" data-testid="categories-h2">How can we help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Wrench, title: 'Terminal Support', desc: 'Troubleshoot connectivity, printer, power, and transaction issues.', anchor: '#terminal-support' },
              { icon: Monitor, title: 'POS Platform Support', desc: 'Find help for Clover and Square POS systems.', anchor: '#platform-support' },
              { icon: Package, title: 'Deployment & Testing', desc: 'Learn how to set up and test Dejavoo, PAX, and Ingenico terminals.', anchor: '#deployment' },
              { icon: CreditCard, title: 'Merchant Account Support', desc: 'Get help with funding, deposits, chargebacks, and account questions.', anchor: '#merchant-support' },
              { icon: Settings, title: 'Installation & Onboarding', desc: 'Understand what Merchant Solutions Corp helps configure.', anchor: '#who-supports' },
              { icon: Zap, title: 'Quick Troubleshooting', desc: 'Jump directly to the most common terminal issues.', anchor: '#popular-articles' },
            ].map((cat, i) => (
              <a key={i} href={cat.anchor} className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-purple-300 hover:shadow-lg transition-all">
                <div className="w-11 h-11 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <cat.icon className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{cat.title}</h3>
                <p className="text-sm text-gray-500">{cat.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: POPULAR HELP ARTICLES ═══ */}
      <section id="popular-articles" className="py-16 bg-white scroll-mt-20" data-testid="articles-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2" data-testid="articles-h2">
            {search ? `Search results for "${search}"` : activeChip ? `${activeChip} Support` : 'Popular Help Articles'}
          </h2>
          <p className="text-sm text-gray-500 mb-8">{filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found</p>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredArticles.map(a => <ArticleCard key={a.id} article={a} />)}
            </div>
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No articles match your search. Try a different keyword or browse by brand below.</p>
            </div>
          )}

          {/* Deployment cards when filtered to deployment/testing */}
          {(activeChip?.toLowerCase() === 'deployment' || activeChip?.toLowerCase() === 'testing') && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {DEPLOYMENT.map(d => (
                <div key={d.id} id={d.id} className="bg-white rounded-xl border border-gray-200 p-5 scroll-mt-32">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${BRAND_COLORS[d.brand]}`}>{d.brand}</span>
                  <h3 className="font-semibold text-gray-900 text-sm mt-3 mb-3">{d.title}</h3>
                  <ol className="space-y-1.5">{d.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="flex-shrink-0 w-5 h-5 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                      {s}
                    </li>
                  ))}</ol>
                  <CopyLinkBtn articleId={d.id} />
                </div>
              ))}
            </div>
          )}

          {/* Funding support info when filtered */}
          {activeChip?.toLowerCase() === 'funding support' && (
            <div id="merchant-support" className="bg-purple-50 rounded-xl border border-purple-200 p-6 mt-6 scroll-mt-32">
              <h3 className="font-bold text-gray-900 mb-3">Merchant Account Support</h3>
              <p className="text-sm text-gray-700 mb-4">Contact Merchant Solutions Corp for help with:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {['Merchant account setup', 'Funding questions', 'Deposit timing', 'Chargebacks', 'Payment processing', 'Onboarding support', 'Installation coordination', 'Account configuration'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />{item}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══ SECTION 4: SUPPORT BY BRAND ═══ */}
      <section id="terminal-support" className="py-16 bg-gray-50 scroll-mt-20" data-testid="brands-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2" data-testid="brands-h2">Support by Brand</h2>
          <p className="text-sm text-gray-500 mb-8">Select a brand to see common issues and setup guides.</p>
          <div className="space-y-3">
            {BRANDS.map(brand => {
              const brandArticles = ARTICLES.filter(a => a.brand === brand);
              const brandDeploy = DEPLOYMENT.filter(d => d.brand === brand);
              const isOpen = expandedBrands[brand];
              const colorClass = BRAND_COLORS[brand];
              return (
                <div key={brand} className="bg-white rounded-xl border border-gray-200 overflow-hidden" data-testid={`brand-${brand.toLowerCase()}`}>
                  <button onClick={() => toggleBrand(brand)} className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${colorClass}`}>{brand}</span>
                      <span className="font-semibold text-gray-900">{brand === 'PAX' ? 'PAX / BroadPOS' : brand} Support</span>
                      <span className="text-xs text-gray-400">{brandArticles.length} articles</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="border-t border-gray-100 divide-y divide-gray-100">
                      {brandArticles.map(a => (
                        <div key={a.id} id={`brand-${a.id}`} className="px-5 py-4 hover:bg-gray-50 scroll-mt-32">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <a href={`#${a.id}`} className="font-medium text-sm text-gray-900 hover:text-purple-600 transition-colors">{a.title}</a>
                              <p className="text-xs text-gray-500 mt-1">{a.body}</p>
                            </div>
                            <CopyLinkBtn articleId={a.id} />
                          </div>
                        </div>
                      ))}
                      {brandDeploy.map(d => (
                        <div key={d.id} className="px-5 py-4 bg-purple-50/50">
                          <a href={`#${d.id}`} className="font-medium text-sm text-purple-700 hover:underline flex items-center gap-2">
                            <Package className="h-4 w-4" /> {d.title}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: DEPLOYMENT & TESTING ═══ */}
      <section id="deployment" className="py-16 bg-white scroll-mt-20" data-testid="deployment-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2" data-testid="deployment-h2">Deployment &amp; Testing</h2>
          <p className="text-sm text-gray-500 mb-8">Step-by-step guides for deploying and testing payment terminals.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEPLOYMENT.map(d => (
              <div key={d.id} id={d.id} className="bg-gray-50 rounded-xl border border-gray-200 p-6 scroll-mt-32" data-testid={`deploy-${d.brand.toLowerCase()}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${BRAND_COLORS[d.brand]}`}>{d.brand}</span>
                  <CopyLinkBtn articleId={d.id} />
                </div>
                <h3 className="font-bold text-gray-900 mb-4">{d.title}</h3>
                <ol className="space-y-2.5">
                  {d.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
                <div className="mt-5 pt-4 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 mb-2">Verification Checklist</p>
                  <div className="space-y-1.5">
                    {['Test transaction approved', 'Receipt prints correctly', 'Settlement batch closes', 'Contactless tap works'].map((check, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle className="h-3.5 w-3.5 text-green-500" />{check}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6: WHO SUPPORTS WHAT ═══ */}
      <section id="who-supports" className="py-16 bg-gray-50 scroll-mt-20" data-testid="support-table-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2" data-testid="table-h2">Who Supports What?</h2>
          <p className="text-sm text-gray-500 mb-8">Understand whether Merchant Solutions Corp or the device/platform provider handles your issue.</p>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full" data-testid="support-table">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-3.5 px-5 text-sm font-semibold text-gray-900">Support Topic</th>
                    <th className="text-center py-3.5 px-5 text-sm font-semibold text-purple-700">Merchant Solutions Corp</th>
                    <th className="text-center py-3.5 px-5 text-sm font-semibold text-gray-600">Device / Platform Provider</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {SUPPORT_TABLE.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-5 text-sm text-gray-700 font-medium">{row.topic}</td>
                      <td className="py-3 px-5 text-center">
                        {row.msc === true ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : row.msc === false ? <span className="text-gray-300">—</span> : <span className="text-xs text-amber-600 font-medium">{row.msc}</span>}
                      </td>
                      <td className="py-3 px-5 text-center">
                        {row.provider === true ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : row.provider === false ? <span className="text-gray-300">—</span> : <span className="text-xs text-amber-600 font-medium">{row.provider}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7: CONTACT SUPPORT CTA ═══ */}
      <section id="platform-support" className="py-16 bg-white scroll-mt-20" data-testid="cta-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 rounded-2xl p-10 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" data-testid="cta-h2">Need Help With Merchant Account or Payment Processing Issues?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">For questions about funding, deposits, merchant account setup, chargebacks, or onboarding, contact Merchant Solutions Corp.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-base px-8 py-5" data-testid="cta-contact-btn">Contact Support</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-base px-8 py-5" data-testid="cta-ticket-btn">Submit a Ticket</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 text-center mb-4">Related Pages</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Merchant Services', path: '/merchant-services' },
              { label: 'Credit Card Processing', path: '/credit-card-processing' },
              { label: 'Smart Payment Terminals', path: '/smart-payment-terminals' },
              { label: 'Service Areas', path: '/service-areas' },
              { label: 'Accept Credit Card Payments', path: '/how-to-accept-credit-card-payments' },
              { label: 'Restaurant POS Guide', path: '/restaurant-pos-system-guide' },
            ].map((link, i) => (
              <Link key={i} to={link.path} className="text-sm text-purple-600 bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
