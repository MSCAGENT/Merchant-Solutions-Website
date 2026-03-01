import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/' },
    {
      label: 'Solutions',
      children: [
        { label: 'Payment Processing', path: '/solutions/payment-processing' },
        { label: 'Transaction Gateway Integration', path: '/solutions/tranzaction-gateway' },
        { label: 'Crypto Processing', path: '/solutions/crypto-processing' },
        { label: 'Loyalty & Rewards', path: '/solutions/loyalty-rewards' },
        { label: 'Gift Cards', path: '/solutions/gift-cards' },
        { label: 'Business Loans & Cash Advances', path: '/solutions/business-loans' },
        { label: 'ATM Solutions', path: '/solutions/atms' },
        { label: 'Payroll Services', path: '/solutions/payroll-services' },
        { label: 'Tech & Installation', path: '/solutions/it-services' }
      ]
    },
    {
      label: 'Industries',
      children: [
        { label: 'Restaurants', path: '/industries/restaurants' },
        { label: 'Retail', path: '/retail-payment-solutions' },
        { label: 'Healthcare', path: '/industries/healthcare' },
        { label: 'Chiropractors', path: '/industries/chiropractors' },
        { label: 'Dental Practices', path: '/dental-payment-processing-emr-integration' },
        { label: 'Medical Clinics', path: '/industries/medical-clinics' },
        { label: 'High-Risk Businesses', path: '/high-risk-merchant-services' },
        { label: 'Salon & Spa', path: '/salon-spa-payment-processing' },
        { label: 'Specialty Merchants', path: '/specialty-merchant-payment-solutions' }
      ]
    },
    {
      label: 'POS & Hardware',
      children: [
        { label: 'PayAnywhere POS', path: '/payanywhere' },
        { label: 'Clover POS', path: '/pos/clover' },
        { label: 'Square POS', path: '/pos/square' },
        { label: 'DaySmart Salon', path: '/retail-software/daysmart-salon' },
        { label: 'Dejavoo Terminals', path: '/pos/dejavoo-terminals' },
        { label: 'Exatouch POS', path: '/pos/exatouch' },
        { label: 'Ingenico Terminals', path: '/pos/ingenico-terminals' },
        { label: 'Restaurant POS', path: '/pos/restaurant-pos' },
        { label: 'Retail POS', path: '/pos/retail-pos' },
        { label: 'QSR POS', path: '/pos/qsr-pos' },
        { label: 'Self-Ordering Kiosks', path: '/pos/self-ordering-kiosk' }
      ]
    },
    {
      label: 'Partnerships',
      children: [
        { label: 'Agent & ISO Program', path: '/partnerships' },
        { label: 'Careers', path: '/partnerships/careers' },
        { label: 'ISV Partnerships', path: '/partnerships/isv', external: false }
      ]
    },
    {
      label: 'Resources',
      children: [
        { label: 'Blog', path: '/resources/blog' },
        { label: 'Payment Processing Articles', path: '/resources/payment-processing' },
        { label: 'POS Systems Guide', path: '/resources/pos-systems' },
        { label: 'High-Risk Merchant Info', path: '/resources/high-risk-merchants' },
        { label: 'Industry Guides', path: '/resources/industry-guides' },
        { label: 'Pricing', path: '/resources/pricing' }
      ]
    },
    {
      label: 'Company',
      children: [
        { label: 'About Us', path: '/company/about' },
        { label: 'Our Mission', path: '/company/mission' },
        { label: 'Why Choose Us', path: '/company/why-us' },
        { label: 'Security & Compliance', path: '/company/security-compliance' },
        { label: 'Contact Us', path: '/contact' }
      ]
    }
  ];

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_merchant-central-11/artifacts/vmzehzol_MSC_1080x560.png" 
              alt="Merchant Solutions Corp" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 flex items-center transition-colors duration-200"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {openDropdown === item.label && (
                      <div
                        className="absolute left-0 mt-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                        onMouseLeave={() => { setOpenDropdown(null); setOpenSubmenu(null); }}
                      >
                        {item.children.map((child) => (
                          child.hasSubmenu ? (
                            <div
                              key={child.label}
                              className="relative"
                              onMouseEnter={() => setOpenSubmenu(child.label)}
                              onMouseLeave={() => setOpenSubmenu(null)}
                            >
                              <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-150 cursor-pointer">
                                <span>{child.label}</span>
                                <ChevronRight className="h-4 w-4" />
                              </div>
                              {openSubmenu === child.label && (
                                <div className="absolute left-full top-0 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 ml-1">
                                  {child.submenuItems.map((subItem) => (
                                    subItem.external ? (
                                      <a
                                        key={subItem.path}
                                        href={subItem.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-150"
                                      >
                                        {subItem.label}
                                      </a>
                                    ) : (
                                      <Link
                                        key={subItem.path}
                                        to={subItem.path}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-150"
                                      >
                                        {subItem.label}
                                      </Link>
                                    )
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : child.external ? (
                            <a
                              key={child.path}
                              href={child.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-150"
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-150"
                            >
                              {child.label}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-purple-600'
                        : 'text-gray-700 hover:text-purple-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/login">
              <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                Login
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium text-gray-700"
                      onClick={() => handleDropdownToggle(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.children.map((child) => (
                          child.hasSubmenu ? (
                            <div key={child.label}>
                              <button
                                className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-600 hover:text-purple-600"
                                onClick={() => setOpenSubmenu(openSubmenu === child.label ? null : child.label)}
                              >
                                {child.label}
                                <ChevronRight
                                  className={`h-4 w-4 transition-transform duration-200 ${
                                    openSubmenu === child.label ? 'rotate-90' : ''
                                  }`}
                                />
                              </button>
                              {openSubmenu === child.label && (
                                <div className="pl-4 space-y-1 mt-1">
                                  {child.submenuItems.map((subItem) => (
                                    subItem.external ? (
                                      <a
                                        key={subItem.path}
                                        href={subItem.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-3 py-2 text-sm text-gray-500 hover:text-purple-600"
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        {subItem.label}
                                      </a>
                                    ) : (
                                      <Link
                                        key={subItem.path}
                                        to={subItem.path}
                                        className="block px-3 py-2 text-sm text-gray-500 hover:text-purple-600"
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        {subItem.label}
                                      </Link>
                                    )
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : child.external ? (
                            <a
                              key={child.path}
                              href={child.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-3 py-2 text-sm font-medium text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-purple-600 text-purple-600">
                  Login
                </Button>
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Get Started
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