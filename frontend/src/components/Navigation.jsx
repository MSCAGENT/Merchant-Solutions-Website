import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/' },
    {
      label: 'Solutions',
      children: [
        { label: 'Payment Processing', path: '/solutions/payment-processing' },
        { label: 'Online Payments', path: '/solutions/online-payments' },
        { label: 'In-Person Payments', path: '/solutions/in-person-payments' },
        { label: 'High-Risk Processing', path: '/solutions/high-risk-processing' },
        { label: 'Virtual Terminal', path: '/solutions/virtual-terminal' },
        { label: 'Invoicing & Payments', path: '/solutions/invoicing-payments' },
        { label: 'Recurring Billing', path: '/solutions/recurring-billing' }
      ]
    },
    {
      label: 'Industries',
      children: [
        { label: 'Restaurants', path: '/industries/restaurants' },
        { label: 'Retail', path: '/industries/retail' },
        { label: 'Healthcare', path: '/industries/healthcare' },
        { label: 'Chiropractors', path: '/industries/chiropractors' },
        { label: 'Dental Practices', path: '/industries/dental' },
        { label: 'Medical Clinics', path: '/industries/medical-clinics' },
        { label: 'High-Risk Businesses', path: '/industries/high-risk-businesses' },
        { label: 'Specialty Merchants', path: '/industries/specialty-merchants' }
      ]
    },
    {
      label: 'POS & Hardware',
      children: [
        { label: 'PayAnywhere POS', path: '/payanywhere' },
        { label: 'Clover POS', path: '/pos/clover' },
        { label: 'Dejavoo Terminals', path: '/pos/dejavoo-terminals' },
        { label: 'Ingenico Terminals', path: '/pos/ingenico-terminals' },
        { label: 'Restaurant POS', path: '/pos/restaurant-pos' },
        { label: 'Retail POS', path: '/pos/retail-pos' },
        { label: 'QSR POS', path: '/pos/qsr-pos' },
        { label: 'Self-Ordering Kiosks', path: '/pos/self-ordering-kiosk' }
      ]
    },
    {
      label: 'Gateway & APIs',
      children: [
        { label: 'Payment Gateway', path: '/gateway/payments-gateway' },
        { label: 'Virtual Terminal', path: '/gateway/virtual-terminal' },
        { label: 'API Integrations', path: 'https://developers.merchantsolutionscorpdb.com/#/', external: true }
      ]
    },
    {
      label: 'Partners',
      children: [
        { label: 'Agent Program', path: '/partners/agents' },
        { label: 'ISO Program', path: '/partners/iso-program' },
        { label: 'White-Label Solutions', path: '/partners/white-label' },
        { label: 'Financial Institutions', path: '/partners/financial-institutions' },
        { label: 'Careers', path: '/partners/careers' }
      ]
    },
    {
      label: 'Resources',
      children: [
        { label: 'Blog', path: '/resources/blog' },
        { label: 'Payment Processing Articles', path: '/resources/payment-processing' },
        { label: 'POS Systems Guide', path: '/resources/pos-systems' },
        { label: 'High-Risk Merchant Info', path: '/resources/high-risk-merchants' },
        { label: 'Industry Guides', path: '/resources/industry-guides' }
      ]
    },
    {
      label: 'Company',
      children: [
        { label: 'About Us', path: '/company/about' },
        { label: 'Our Mission', path: '/company/mission' },
        { label: 'Why Choose Us', path: '/company/why-us' },
        { label: 'Security & Compliance', path: '/company/security-compliance' },
        { label: 'Contact', path: '/company/contact' }
      ]
    },
    { label: 'Contact', path: '/contact' }
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
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-150"
                          >
                            {child.label}
                          </Link>
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
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
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