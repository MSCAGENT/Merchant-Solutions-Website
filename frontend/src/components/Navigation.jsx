import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

/* ─── Menu Data ─── */
const megaMenus = {
  Solutions: {
    type: 'mega',
    columns: [
      {
        heading: 'Payments & Processing',
        items: [
          { label: 'Payment Processing for Businesses', desc: 'Accept credit cards, debit cards, ACH, and digital payments in-store and online.', path: '/solutions/payment-processing' },
          { label: 'Crypto Payment Processing', desc: 'Accept Bitcoin and other cryptocurrencies with automatic settlement options.', path: '/solutions/crypto-processing' },
          { label: 'Dual Pricing & Cash Discount', desc: 'Reduce or eliminate credit card processing fees with compliant dual pricing or surcharge programs.', path: '/dual-pricing-cash-discount-payment-processing' },
          { label: 'ACH & E-Check Processing', desc: 'Accept direct bank transfers and electronic checks from customers.', path: '/solutions/ach-processing' },
        ],
      },
      {
        heading: 'Customer Engagement',
        items: [
          { label: 'Customer Loyalty & Rewards', desc: 'Create points, discounts, and promotional offers that drive repeat customers.', path: '/solutions/loyalty-rewards' },
          { label: 'Digital & Physical Gift Cards', desc: 'Sell and manage gift cards online or in-store with POS integration.', path: '/solutions/gift-cards' },
          { label: 'Merchant Rewards Program by MSC', desc: 'Earn statement credits, equipment upgrades, and referral bonuses as your business grows.', path: '/solutions/merchant-rewards' },
        ],
      },
      {
        heading: 'Financial Services',
        items: [
          { label: 'Merchant Capital & Business Loans', desc: 'Access fast working capital based on your business processing volume.', path: '/solutions/business-loans' },
          { label: 'Lines of Credit & SBA Loans', desc: 'Small business loans and lines of credit processed with the help of Lendio.', path: '/solutions/lines-of-credit' },
          { label: 'ATM Placement & Processing', desc: 'Deploy ATMs at your business location and generate additional revenue.', path: '/solutions/atms' },
          { label: 'Become an Independent ATM Deployer', desc: 'Start your local ATM business with Merchant Solutions Corp.', path: '/solutions/atm-deployer' },
        ],
      },
      {
        heading: 'Business Operations',
        items: [
          { label: 'Payroll Services for Small Business', desc: 'Manage employee payroll, taxes, and payments with integrated software.', path: '/solutions/payroll-services' },
          { label: 'POS Installation & Technical Support', desc: 'Professional setup, system configuration, and training for POS equipment.', path: '/solutions/it-services' },
        ],
      },
    ],
  },
  Industries: {
    type: 'mega',
    columns: [
      {
        heading: 'Food & Hospitality',
        items: [
          { label: 'Restaurants', desc: 'POS systems and payment processing for restaurants and food service businesses.', path: '/restaurant-payment-processing-services' },
        ],
      },
      {
        heading: 'Retail Businesses',
        items: [
          { label: 'Retail Stores', desc: 'POS systems with inventory management for retail and specialty stores.', path: '/retail-payment-solutions' },
          { label: 'Gas Station & EMV', desc: 'Fuel pump EMV compliance and payment systems for gas stations.', path: '/emv-gas-station-payment-processing' },
          { label: 'Specialty Merchants', desc: 'Solutions for smoke shops, CBD stores, Kratom and niche retail businesses.', path: '/specialty-merchant-payment-solutions' },
        ],
      },
      {
        heading: 'Health & Wellness',
        items: [
          { label: 'Healthcare', desc: 'Secure payment processing for medical providers.', path: '/industries/healthcare' },
          { label: 'Dental Practices', desc: 'Integrated payment systems for dental offices.', path: '/dental-payment-processing-emr-integration' },
          { label: 'Chiropractors', desc: 'Billing and payment tools for chiropractic clinics.', path: '/industries/chiropractors' },
          { label: 'Medical Clinics', desc: 'POS and payment processing for outpatient medical practices.', path: '/industries/medical-clinics' },
          { label: 'Salon & Spa', desc: 'Appointment scheduling, POS payments, and customer management.', path: '/salon-spa-payment-processing' },
        ],
      },
      {
        heading: 'Professional Services',
        items: [
          { label: 'Professional Services', desc: 'Payment solutions for consultants, contractors, and service providers.', path: '/professional-services-payment-processing-clover-pos' },
          { label: 'High-Risk Businesses', desc: 'Payment processing solutions for high-risk industries.', path: '/high-risk-merchant-services' },
        ],
      },
    ],
  },
  'POS & Hardware': {
    type: 'mega',
    columns: [
      {
        heading: 'POS Systems',
        items: [
          { label: 'POS Systems Overview', desc: 'Compare the best POS systems for your business.', path: '/pos/overview' },
          { label: 'Clover POS System', desc: 'All-in-one POS for restaurants, retail, and service businesses.', path: '/pos/clover' },
          { label: 'Square POS System', desc: 'Cloud POS and payment processing for growing small businesses.', path: '/pos/square' },
          { label: 'Exatouch POS', desc: 'Retail & C-store POS with barcode scanning, inventory, and reporting.', path: '/pos/exatouch' },
          { label: 'DaySmart Salon POS', desc: 'POS and appointment scheduling for salons and spas.', path: '/retail-software/daysmart-salon' },
          { label: 'Smart Terminals & Mobile POS', desc: 'Portable Android smart terminals for mobile businesses.', path: '/pos/smart-terminals' },
        ],
      },
      {
        heading: 'Payment Terminals',
        items: [
          { label: 'Payment Terminals Overview', desc: 'Compare countertop, wireless, and smart terminals.', path: '/pos/payment-terminals-overview' },
          { label: 'Dejavoo Terminals', desc: 'Reliable countertop and wireless credit card terminals.', path: '/pos/dejavoo-terminals' },
          { label: 'Ingenico Terminals', desc: 'Enterprise-grade EMV and NFC payment devices.', path: '/pos/ingenico-terminals' },
          { label: 'PAX Terminals', desc: 'Secure Android-based smart payment terminals.', path: '/pos/pax-terminals' },
        ],
      },
      {
        heading: 'Self-Ordering & Kiosk Systems',
        items: [
          { label: 'Self-Ordering Kiosks', desc: 'Customers place orders and pay directly at a kiosk.', path: '/best-self-ordering-kiosk-for-restaurants' },
          { label: 'Clover Self-Ordering Kiosk', desc: 'Self-service ordering powered by Clover.', path: '/pos/clover-kiosk' },
          { label: 'QR Code Ordering', desc: 'Customers scan QR codes to view menus and order from their phone.', path: '/pos/qr-ordering' },
        ],
      },
      {
        heading: 'Online Payments',
        items: [
          { label: 'Transaction Gateway', desc: 'Secure payment gateway for e-commerce websites.', path: '/gateway/payments-gateway' },
          { label: 'Virtual Terminal', desc: 'Accept payments manually from any computer.', path: '/pos/virtual-terminal' },
          { label: 'Payment Links', desc: 'Send secure payment links by email or SMS.', path: '/pos/payment-links' },
        ],
      },
    ],
  },
  Pricing: {
    type: 'dropdown',
    items: [
      { label: 'Pricing Overview', path: '/pricing' },
      { label: 'Flat Rate Processing', path: '/pricing', hash: '#flat-rate' },
      { label: 'Interchange Plus Pricing', path: '/pricing', hash: '#interchange-plus' },
      { label: 'Dual Pricing Program', path: '/dual-pricing-cash-discount-payment-processing' },
      { label: 'POS Subscription Program', path: '/pricing/pos-subscription' },
      { label: 'Free POS Program', path: '/pricing/free-pos' },
    ],
  },
  Partnerships: {
    type: 'dropdown',
    items: [
      { label: 'Agent & ISO Program', path: '/partnerships' },
      { label: 'ISV Partnerships', path: '/partnerships/isv' },
      { label: 'White Label Partner Program', path: '/partnerships/white-label' },
      { label: 'Careers', path: '/partnerships/careers' },
    ],
  },
  Resources: {
    type: 'mega',
    columns: [
      {
        heading: 'Education',
        items: [
          { label: 'Payment Processing Articles', desc: 'Guides and articles on payment processing.', path: '/resources/payment-processing' },
          { label: 'POS Systems Guide', desc: 'Learn about POS systems and how to choose one.', path: '/resources/pos-systems' },
          { label: 'Industry Guides', desc: 'Payment guides by industry vertical.', path: '/resources/industry-guides' },
        ],
      },
      {
        heading: 'Research',
        items: [
          { label: 'High-Risk Merchant Info', desc: 'Resources for high-risk payment processing.', path: '/resources/high-risk-merchants' },
        ],
      },
      {
        heading: 'Content',
        items: [
          { label: 'Blog', desc: 'Latest news, tips, and industry updates.', path: '/resources/blog' },
        ],
      },
      {
        heading: 'Documents',
        items: [
          { label: 'Documents', desc: 'Access forms, agreements, and documentation.', path: '/resources/documents' },
        ],
      },
    ],
  },
  Company: {
    type: 'dropdown',
    items: [
      { label: 'About Us', path: '/company/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Support', path: '/company/support' },
      { label: 'Careers', path: '/partnerships/careers' },
      { label: 'Service Areas', path: '/company/service-areas' },
    ],
  },
};

const menuKeys = ['Solutions', 'Industries', 'POS & Hardware', 'Pricing', 'Partnerships', 'Resources', 'Company'];

/* ─── Desktop Mega Panel ─── */
const MegaPanel = ({ data, onLinkClick }) => (
  <div className="grid gap-8" style={{ gridTemplateColumns: `repeat(${data.columns.length}, minmax(0, 1fr))` }}>
    {data.columns.map((col, ci) => (
      <div key={ci} className={ci > 0 ? 'border-l border-gray-100 pl-6' : ''}>
        <p className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-3">{col.heading}</p>
        <div className="space-y-1">
          {col.items.map((item, ii) => (
            <Link
              key={ii}
              to={item.path}
              onClick={onLinkClick}
              className="block rounded-lg px-3 py-2.5 hover:bg-purple-50 transition-colors group"
              data-testid={`mega-link-${item.path}`}
            >
              <span className="block text-sm font-semibold text-gray-900 group-hover:text-purple-700 leading-tight">{item.label}</span>
              {item.desc && <span className="block text-xs text-gray-500 mt-0.5 leading-snug">{item.desc}</span>}
            </Link>
          ))}
        </div>
      </div>
    ))}
  </div>
);

/* ─── Desktop Dropdown Panel ─── */
const DropdownPanel = ({ data, onLinkClick }) => (
  <div className="py-1">
    {data.items.map((item, i) => (
      <Link
        key={i}
        to={item.path}
        onClick={onLinkClick}
        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
        data-testid={`dd-link-${item.path}`}
      >
        {item.label}
      </Link>
    ))}
  </div>
);

/* ─── Mobile Accordion Item ─── */
const MobileAccordion = ({ label, data, isOpen, onToggle, onLinkClick }) => {
  const items = data.type === 'mega' ? data.columns.flatMap(c => c.items.map(i => ({ ...i, heading: c.heading }))) : data.items;
  let lastHeading = '';

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-3.5 text-left text-base font-semibold text-gray-900"
        aria-expanded={isOpen}
        data-testid={`mobile-toggle-${label}`}
      >
        {label}
        <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-3 px-2">
          {items.map((item, i) => {
            const showHeading = data.type === 'mega' && item.heading !== lastHeading;
            if (showHeading) lastHeading = item.heading;
            return (
              <React.Fragment key={i}>
                {showHeading && (
                  <p className="text-xs font-bold text-purple-600 uppercase tracking-wider mt-3 mb-1 px-4">{item.heading}</p>
                )}
                <Link
                  to={item.path}
                  onClick={onLinkClick}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 rounded-md"
                  data-testid={`mobile-link-${item.path}`}
                >
                  {item.label}
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

/* ─── Navigation Component ─── */
const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const openTimerRef = useRef(null);
  const closeTimerRef = useRef(null);
  const navRef = useRef(null);
  const triggerRefs = useRef({});

  // Close menus on route change
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileAccordion(null);
  }, [location.pathname]);

  // Outside click
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape' && openMenu) {
        setOpenMenu(null);
        triggerRefs.current[openMenu]?.focus();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [openMenu]);

  const clearTimers = useCallback(() => {
    clearTimeout(openTimerRef.current);
    clearTimeout(closeTimerRef.current);
  }, []);

  const handleMouseEnter = useCallback((key) => {
    clearTimers();
    openTimerRef.current = setTimeout(() => setOpenMenu(key), 120);
  }, [clearTimers]);

  const handleMouseLeave = useCallback(() => {
    clearTimers();
    closeTimerRef.current = setTimeout(() => setOpenMenu(null), 200);
  }, [clearTimers]);

  const handlePanelMouseEnter = useCallback(() => {
    clearTimers();
  }, [clearTimers]);

  const handlePanelMouseLeave = useCallback(() => {
    clearTimers();
    closeTimerRef.current = setTimeout(() => setOpenMenu(null), 200);
  }, [clearTimers]);

  const handleClick = useCallback((key) => {
    clearTimers();
    setOpenMenu(prev => prev === key ? null : key);
  }, [clearTimers]);

  const closeAll = useCallback(() => {
    setOpenMenu(null);
  }, []);

  const handleKeyDown = useCallback((e, key) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(key);
    }
    if (e.key === 'ArrowDown' && openMenu === key) {
      e.preventDefault();
      const panel = document.getElementById(`panel-${key}`);
      const firstLink = panel?.querySelector('a');
      firstLink?.focus();
    }
  }, [handleClick, openMenu]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileAccordion(null);
  }, []);

  return (
    <nav ref={navRef} className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm" data-testid="main-navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0" data-testid="nav-logo">
            <img
              src="https://customer-assets.emergentagent.com/job_4154a9b1-b888-447f-bffc-8ab7e2fc6cdc/artifacts/z6dyvf6s_MSC%20logo.jpg"
              alt="Merchant Solutions Corp"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {menuKeys.map((key) => {
              const data = megaMenus[key];
              const isOpen = openMenu === key;
              return (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    ref={(el) => { triggerRefs.current[key] = el; }}
                    onClick={() => handleClick(key)}
                    onKeyDown={(e) => handleKeyDown(e, key)}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${isOpen ? 'text-purple-700 bg-purple-50' : 'text-gray-700 hover:text-purple-700 hover:bg-gray-50'}`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    aria-controls={`panel-${key}`}
                    data-testid={`nav-trigger-${key}`}
                  >
                    {key}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact">
              <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50" data-testid="nav-book-demo">
                Book Demo
              </Button>
            </Link>
            <Link to="/payanywhere">
              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white" data-testid="nav-free-pos">
                Get Free POS System
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-testid="mobile-hamburger"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Panels — positioned absolutely below the nav */}
      {openMenu && (
        <div
          id={`panel-${openMenu}`}
          className="absolute left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-40"
          onMouseEnter={handlePanelMouseEnter}
          onMouseLeave={handlePanelMouseLeave}
          role="menu"
          data-testid={`panel-${openMenu}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {megaMenus[openMenu].type === 'mega' ? (
              <MegaPanel data={megaMenus[openMenu]} onLinkClick={closeAll} />
            ) : (
              <div className="max-w-xs">
                <DropdownPanel data={megaMenus[openMenu]} onLinkClick={closeAll} />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto" data-testid="mobile-menu">
          <div className="pb-6">
            {menuKeys.map((key) => (
              <MobileAccordion
                key={key}
                label={key}
                data={megaMenus[key]}
                isOpen={mobileAccordion === key}
                onToggle={() => setMobileAccordion(prev => prev === key ? null : key)}
                onLinkClick={closeMobile}
              />
            ))}
            <div className="p-4 space-y-3 border-t border-gray-200 mt-2">
              <Link to="/contact" onClick={closeMobile}>
                <Button variant="outline" className="w-full border-purple-600 text-purple-600" data-testid="mobile-book-demo">
                  Book Demo
                </Button>
              </Link>
              <Link to="/payanywhere" onClick={closeMobile}>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white" data-testid="mobile-free-pos">
                  Get Free POS System
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
