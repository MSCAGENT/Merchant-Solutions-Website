// Mock data for frontend-only implementation

export const mockData = {
  company: {
    name: 'Merchant Solutions Corp',
    tagline: 'Merchant Payment Solutions for Growing Businesses',
    phone: '1-800-MERCHANT',
    email: 'info@merchantsolutions.com',
    address: '123 Commerce Street, Business District, NY 10001'
  },
  
  testimonials: [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Bella Vista Restaurant',
      role: 'Owner',
      content: 'Switching to Merchant Solutions Corp transformed our payment processing. Lower fees and faster settlements!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'HealthFirst Clinic',
      role: 'Practice Manager',
      content: 'HIPAA-compliant processing with excellent support. Perfect for healthcare businesses.',
      rating: 5
    },
    {
      id: 3,
      name: 'David Rodriguez',
      company: 'Urban Retail Co',
      role: 'CEO',
      content: 'The Clover POS integration was seamless. Our checkout times decreased by 40%.',
      rating: 5
    }
  ],
  
  solutions: [
    {
      id: 'payment-processing',
      title: 'Payment Processing',
      description: 'Comprehensive payment processing solutions for businesses of all sizes',
      icon: 'CreditCard',
      features: ['Accept all major cards', 'Next-day funding', 'Transparent pricing', 'No hidden fees']
    },
    {
      id: 'online-payments',
      title: 'Online Payments',
      description: 'Secure e-commerce payment solutions with advanced fraud protection',
      icon: 'Globe',
      features: ['Shopping cart integration', 'Mobile optimized', 'Fraud prevention', 'Multiple currencies']
    },
    {
      id: 'in-person-payments',
      title: 'In-Person Payments',
      description: 'Modern POS terminals and card readers for retail and restaurants',
      icon: 'Store',
      features: ['EMV chip readers', 'Contactless payments', 'Receipt printing', 'Offline mode']
    },
    {
      id: 'high-risk-processing',
      title: 'High-Risk Processing',
      description: 'Specialized payment solutions for high-risk industries',
      icon: 'Shield',
      features: ['Fast approvals', 'Competitive rates', 'Chargeback protection', 'Dedicated support']
    },
    {
      id: 'virtual-terminal',
      title: 'Virtual Terminal',
      description: 'Process payments from any device with internet connection',
      icon: 'Monitor',
      features: ['Cloud-based', 'Manual entry', 'Recurring billing', 'Reporting tools']
    },
    {
      id: 'invoicing-payments',
      title: 'Invoicing & Payments',
      description: 'Send professional invoices and get paid faster',
      icon: 'FileText',
      features: ['Custom branding', 'Payment reminders', 'Auto-reconciliation', 'Track status']
    },
    {
      id: 'recurring-billing',
      title: 'Recurring Billing',
      description: 'Automated subscription and membership payment processing',
      icon: 'Repeat',
      features: ['Automatic charges', 'Flexible schedules', 'Retry logic', 'Customer portal']
    }
  ],
  
  industries: [
    {
      id: 'restaurants',
      title: 'Restaurants',
      description: 'Complete payment and POS solutions for restaurants, cafes, and food service',
      icon: 'UtensilsCrossed',
      challenges: ['High transaction volume', 'Table management', 'Tip processing', 'Kitchen integration'],
      solutions: ['Restaurant POS systems', 'Online ordering integration', 'Split payment handling', 'Real-time reporting']
    },
    {
      id: 'retail',
      title: 'Retail',
      description: 'Modern payment solutions for retail stores and boutiques',
      icon: 'ShoppingBag',
      challenges: ['Inventory sync', 'Multiple locations', 'Returns processing', 'Customer loyalty'],
      solutions: ['Retail POS systems', 'Inventory management', 'Gift card processing', 'Omnichannel payments']
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'HIPAA-compliant payment processing for medical practices',
      icon: 'Heart',
      challenges: ['HIPAA compliance', 'Patient data security', 'Insurance claims', 'Payment plans'],
      solutions: ['Secure payment terminals', 'Patient payment portals', 'Recurring billing', 'Compliance support']
    },
    {
      id: 'chiropractors',
      title: 'Chiropractors',
      description: 'Specialized payment solutions for chiropractic practices',
      icon: 'Activity',
      challenges: ['Patient scheduling', 'Treatment plans', 'Insurance billing', 'Recurring visits'],
      solutions: ['Practice management integration', 'Flexible payment plans', 'Auto-billing', 'Patient portals']
    },
    {
      id: 'dental',
      title: 'Dental Practices',
      description: 'Payment processing designed for dental offices',
      icon: 'Smile',
      challenges: ['High-ticket procedures', 'Insurance coordination', 'Treatment plans', 'Family accounts'],
      solutions: ['Dental software integration', 'Payment plans', 'Insurance processing', 'Family billing']
    },
    {
      id: 'medical-clinics',
      title: 'Medical Clinics',
      description: 'Comprehensive payment solutions for medical clinics and urgent care',
      icon: 'Stethoscope',
      challenges: ['Patient flow', 'Multiple providers', 'Insurance verification', 'Copay collection'],
      solutions: ['EMR integration', 'Automated copay collection', 'Insurance processing', 'Multi-provider support']
    },
    {
      id: 'high-risk-businesses',
      title: 'High-Risk Businesses',
      description: 'Specialized processing for high-risk merchant categories',
      icon: 'AlertTriangle',
      challenges: ['Account stability', 'High chargeback ratios', 'Industry restrictions', 'Rate volatility'],
      solutions: ['Dedicated underwriting', 'Chargeback mitigation', 'Reserve management', 'Multiple processor options']
    },
    {
      id: 'specialty-merchants',
      title: 'Specialty Merchants',
      description: 'Custom payment solutions for unique business models',
      icon: 'Sparkles',
      challenges: ['Unique workflows', 'Custom integration', 'Specialized reporting', 'Compliance requirements'],
      solutions: ['Custom API integration', 'Flexible workflows', 'Advanced reporting', 'Dedicated support']
    }
  ],
  
  posHardware: [
    {
      category: 'Clover',
      devices: [
        { id: 'clover-station', name: 'Clover Station', description: 'Full-featured countertop POS', price: '$1,599', features: ['14" touchscreen', 'Built-in printer', 'Customer display', 'Cash drawer ready'] },
        { id: 'clover-mini', name: 'Clover Mini', description: 'Compact countertop solution', price: '$749', features: ['7" touchscreen', 'Built-in printer', 'Accepts all payments', 'Cloud-based'] },
        { id: 'clover-flex', name: 'Clover Flex', description: 'Handheld mobile POS', price: '$499', features: ['5" touchscreen', 'WiFi & 4G', 'Built-in printer', 'Rechargeable battery'] },
        { id: 'clover-go', name: 'Clover Go', description: 'Mobile card reader', price: '$49', features: ['Bluetooth', 'EMV & NFC', 'Works with phone/tablet', 'Compact design'] }
      ]
    },
    {
      category: 'Terminals',
      devices: [
        { id: 'pax-a920', name: 'PAX A920', description: 'Android smart terminal', price: '$599', features: ['5.5" touchscreen', 'Android OS', '4G/WiFi', 'Long battery life'] },
        { id: 'dejavoo-z11', name: 'Dejavoo Z11', description: 'Countertop terminal', price: '$299', features: ['4" display', 'EMV certified', 'Fast processing', 'Easy setup'] },
        { id: 'ingenico-desk-3500', name: 'Ingenico Desk/3500', description: 'Reliable countertop terminal', price: '$349', features: ['Color display', 'EMV & NFC', 'Ethernet/dial', 'Durable design'] }
      ]
    },
    {
      category: 'Software',
      devices: [
        { id: 'restaurant-pos', name: 'Restaurant POS', description: 'Complete restaurant management', price: 'Custom', features: ['Table management', 'Kitchen display', 'Online ordering', 'Menu management'] },
        { id: 'retail-pos', name: 'Retail POS', description: 'Inventory-focused retail solution', price: 'Custom', features: ['Inventory tracking', 'Customer profiles', 'Multi-location', 'Analytics'] },
        { id: 'qsr-pos', name: 'QSR POS', description: 'Quick-service restaurant system', price: 'Custom', features: ['Fast checkout', 'Kitchen routing', 'Mobile ordering', 'Loyalty programs'] }
      ]
    }
  ],
  
  gateway: [
    { id: 'payments-gateway', title: 'Payment Gateway', description: 'Proprietary gateway with 99.99% uptime', features: ['Real-time processing', 'Fraud prevention', 'Multi-currency', 'Token vault'] },
    { id: 'virtual-terminal', title: 'Virtual Terminal', description: 'Browser-based payment processing', features: ['No installation', 'Manual entry', 'Batch processing', 'Reporting'] },
    { id: 'api-integrations', title: 'API Integrations', description: 'Developer-friendly REST APIs', features: ['RESTful API', 'Webhooks', 'SDKs available', 'Documentation'] },
    { id: 'mobile-payments', title: 'Mobile Payments', description: 'Accept payments on mobile devices', features: ['iOS & Android', 'Card present', 'Digital wallets', 'Offline mode'] },
    { id: 'secure-checkout', title: 'Secure Checkout', description: 'PCI-compliant hosted payment pages', features: ['Hosted solution', 'Customizable', 'PCI Level 1', 'Mobile responsive'] }
  ],
  
  partners: [
    { id: 'agents', title: 'Agent Program', description: 'Earn commissions selling payment solutions', benefits: ['Residual income', 'Sales support', 'Marketing materials', 'Training provided'] },
    { id: 'iso', title: 'ISO Program', description: 'Partner as an Independent Sales Organization', benefits: ['Revenue sharing', 'White-label options', 'Backend support', 'Custom pricing'] },
    { id: 'white-label', title: 'White-Label Solutions', description: 'Rebrand our platform as your own', benefits: ['Your branding', 'Custom features', 'Full support', 'API access'] },
    { id: 'financial', title: 'Financial Institutions', description: 'Payment solutions for banks and credit unions', benefits: ['Member services', 'Co-branding', 'Integration support', 'Compliance help'] }
  ],
  
  blogCategories: [
    { id: 'payment-processing', title: 'Payment Processing', count: 24 },
    { id: 'pos-systems', title: 'POS Systems', count: 18 },
    { id: 'high-risk', title: 'High-Risk Merchants', count: 12 },
    { id: 'restaurant', title: 'Restaurant Payments', count: 15 },
    { id: 'healthcare', title: 'Healthcare Payments', count: 10 }
  ],
  
  stats: [
    { label: 'Merchants Served', value: '15k+' },
    { label: 'Transaction Volume', value: '250M+' },
    { label: 'Uptime Guarantee', value: '99.8%' },
    { label: 'Payment Platforms', value: '6' },
    { label: 'Territories Covered', value: '8' }
  ]
};

// Form submission handlers (mock)
export const submitContactForm = (formData) => {
  console.log('Contact form submitted:', formData);
  const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  submissions.push({ ...formData, id: Date.now(), type: 'contact', date: new Date().toISOString() });
  localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
  return { success: true, message: 'Thank you! We\'ll contact you within 24 hours.' };
};

export const submitQuoteForm = (formData) => {
  console.log('Quote form submitted:', formData);
  const submissions = JSON.parse(localStorage.getItem('quoteSubmissions') || '[]');
  submissions.push({ ...formData, id: Date.now(), type: 'quote', date: new Date().toISOString() });
  localStorage.setItem('quoteSubmissions', JSON.stringify(submissions));
  return { success: true, message: 'Quote request received! Our team will prepare your custom quote.' };
};

export const submitDemoBooking = (formData) => {
  console.log('Demo booking submitted:', formData);
  const bookings = JSON.parse(localStorage.getItem('demoBookings') || '[]');
  bookings.push({ ...formData, id: Date.now(), type: 'demo', date: new Date().toISOString() });
  localStorage.setItem('demoBookings', JSON.stringify(bookings));
  return { success: true, message: 'Demo booked successfully! You\'ll receive a confirmation email shortly.' };
};