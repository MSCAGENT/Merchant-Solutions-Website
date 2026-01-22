import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { label: 'Payment Processing', path: '/solutions/payment-processing' },
        { label: 'Online Payments', path: '/solutions/online-payments' },
        { label: 'In-Person Payments', path: '/solutions/in-person-payments' },
        { label: 'High-Risk Processing', path: '/solutions/high-risk-processing' },
        { label: 'Virtual Terminal', path: '/solutions/virtual-terminal' }
      ]
    },
    {
      title: 'Industries',
      links: [
        { label: 'Restaurants', path: '/industries/restaurants' },
        { label: 'Retail', path: '/industries/retail' },
        { label: 'Healthcare', path: '/industries/healthcare' },
        { label: 'High-Risk Businesses', path: '/industries/high-risk-businesses' },
        { label: 'Specialty Merchants', path: '/industries/specialty-merchants' }
      ]
    },
    {
      title: 'POS & Hardware',
      links: [
        { label: 'Clover POS', path: '/pos/clover' },
        { label: 'PAX Terminals', path: '/pos/pax-terminals' },
        { label: 'Restaurant POS', path: '/pos/restaurant-pos' },
        { label: 'Retail POS', path: '/pos/retail-pos' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/company/about' },
        { label: 'Why Choose Us', path: '/company/why-us' },
        { label: 'Security & Compliance', path: '/company/security-compliance' },
        { label: 'Contact', path: '/company/contact' },
        { label: 'Careers', path: '/partners/careers' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_merchant-central-11/artifacts/vmzehzol_MSC_1080x560.png" 
                alt="Merchant Solutions Corp" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm mb-6 text-gray-400">
              Empowering businesses with cutting-edge payment processing solutions. Trusted by over 50,000 merchants nationwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-purple-600" />
                <span>1-800-MERCHANT</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-purple-600" />
                <span>info@merchantsolutions.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-purple-600" />
                <span>123 Commerce St, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-purple-500 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Merchant Solutions Corp. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-gray-500">
          <Link to="/privacy-policy" className="hover:text-purple-500 transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="hover:text-purple-500 transition-colors duration-200">
            Terms of Service
          </Link>
          <Link to="/security" className="hover:text-purple-500 transition-colors duration-200">
            Security
          </Link>
          <Link to="/compliance" className="hover:text-purple-500 transition-colors duration-200">
            Compliance
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;