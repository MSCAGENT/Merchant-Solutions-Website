import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { label: 'Payment Processing', path: '/payment-processing-pricing' },
        { label: 'Online Payments', path: '/solutions/payment-processing' },
        { label: 'Online Payments', path: '/ecommerce-payments' },
        { label: 'Gift Cards', path: '/solutions/gift-cards' },
        { label: 'Loyalty & Rewards', path: '/solutions/loyalty-rewards' },
        { label: 'Business Loans', path: '/solutions/business-loans' },
        { label: 'Payroll Services', path: '/solutions/payroll-services' },
        { label: 'ACH Processing', path: '/solutions/ach-processing' },
        { label: 'Dual Pricing', path: '/dual-pricing-cash-discount-payment-processing' },
        { label: 'IT Services', path: '/solutions/it-services' },
        { label: 'Voice AI Automation', path: '/voice-ai-business-automation' },
      ]
    },
    {
      title: 'POS Systems',
      links: [
        { label: 'POS Systems Overview', path: '/pos-systems' },
        { label: 'Clover POS', path: '/clover-pos-system' },
        { label: 'Square POS', path: '/pos/square' },
        { label: 'Payanywhere POS', path: '/payanywhere' },
        { label: 'Exatouch POS', path: '/pos/exatouch' },
        { label: 'Union POS', path: '/union-pos-system' },
        { label: 'Payment Terminals', path: '/payment-terminals' },
        { label: 'PAX Terminals', path: '/pos/pax-terminals' },
        { label: 'Ingenico Terminals', path: '/pos/ingenico-terminals' },
        { label: 'Dejavoo Terminals', path: '/pos/dejavoo-terminals' },
        { label: 'Self-Ordering Kiosks', path: '/best-self-ordering-kiosk-for-restaurants' },
        { label: 'QR Code Ordering', path: '/qr-code-mobile-ordering' },
      ]
    },
    {
      title: 'Industries',
      links: [
        { label: 'Restaurants', path: '/restaurant-payment-processing-services' },
        { label: 'Retail', path: '/industries/retail' },
        { label: 'Healthcare', path: '/industries/healthcare' },
        { label: 'Cloud Kitchens', path: '/cloud-kitchen-pos-system' },
        { label: 'Food Trucks', path: '/food-trucks-pos' },
        { label: 'Salons & Spas', path: '/salon-spa-payment-processing' },
        { label: 'Dental', path: '/dental-payment-processing-emr-integration' },
        { label: 'Medical Clinics', path: '/medical-clinic-payment-processing' },
        { label: 'Chiropractors', path: '/industries/chiropractors' },
        { label: 'High-Risk Merchants', path: '/high-risk-merchant-services' },
        { label: 'Professional Services', path: '/professional-services-payment-processing-clover-pos' },
        { label: 'Gas Stations', path: '/emv-gas-station-payment-processing' },
      ]
    },
    {
      title: 'Pricing & Programs',
      links: [
        { label: 'Pricing Overview', path: '/payment-processing-pricing' },
        { label: 'Free POS Program', path: '/free-pos-system' },
        { label: 'Subscription Processing', path: '/subscription-payment-processing' },
        { label: 'White Label Services', path: '/white-label-merchant-services' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about-merchant-solutions-corp' },
        { label: 'Contact', path: '/contact' },
        { label: 'Partnerships', path: '/partnerships' },
        { label: 'Agent Program', path: '/partners/agents' },
        { label: 'Careers', path: '/partnerships/careers' },
        { label: 'Service Areas', path: '/service-areas' },
        { label: 'Blog', path: '/resources/blog' },
      ]
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/merchantsolutionscorp/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/merchant_solutions_corp', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/merchantsolutionscorp/', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/merchantsolutionscorp', label: 'YouTube' },
    { icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ), href: 'https://share.google/de9S8aregVE0Qkx54', label: 'Google' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4" data-testid="footer-logo">
              <img 
                src="https://customer-assets.emergentagent.com/job_merchant-central-11/artifacts/vmzehzol_MSC_1080x560.png" 
                alt="Merchant Solutions Corp" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm mb-6 text-gray-400">
              Merchant services, payment processing, and POS systems for restaurants, retail, healthcare and service businesses since 2012.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-purple-500 flex-shrink-0" />
                <a href="tel:8884078886" className="hover:text-purple-400 transition-colors">(888) 407-8886</a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-purple-500 flex-shrink-0" />
                <a href="mailto:info@merchantsolutionscorp.com" className="hover:text-purple-400 transition-colors">info@merchantsolutionscorp.com</a>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-purple-500 flex-shrink-0 mt-0.5" />
                <span>1801 NE 123rd St #314, North Miami, FL 33181</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sitemap Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4 text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-xs text-gray-400 hover:text-purple-400 transition-colors duration-200"
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
            © {new Date().getFullYear()} Merchant Solutions Corp.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0 text-xs text-gray-500">
            <Link to="/privacy-policy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
            <Link to="/security" className="hover:text-purple-400 transition-colors">Security</Link>
            <Link to="/compliance" className="hover:text-purple-400 transition-colors">Compliance</Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-xs text-gray-500 space-y-3 leading-relaxed">
          <p>
            © {new Date().getFullYear()} Merchant Solutions Corp. All rights reserved. Merchant Solutions Corp is a registered DBA for Electronic Payment Exchange Inc.
          </p>
          <p>
            EPX is a registered ISO of BMO Harris Bank N.A., Chicago, IL; Citizens Bank N.A., Providence, RI; The Bancorp Bank, Philadelphia, PA; and FFB Bank, Fresno, CA.
          </p>
          <p>
            The Clover trademark and logo are owned by Clover Network, Inc., a First Data company. All the other trademarks, service marks, and trade names referenced in this material are the property of their respective owners.
          </p>
          <p>
            The Square trademark and logo are owned by Block, Inc. Merchant Solutions Corp. is a certified reseller and Partner of Square POS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
