import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, ChevronDown, ChevronRight, CreditCard, Shield, Zap, 
  BarChart3, Package, Users, Star, Clock, Smartphone, Monitor, 
  UtensilsCrossed, ShoppingBag, Scissors, Briefcase, Gift, Heart,
  Settings, Headphones, Truck, MapPin
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left"
        aria-expanded={open}
        data-testid={`faq-${question.slice(0, 20).replace(/\s/g, '-').toLowerCase()}`}
      >
        <span className="text-lg font-semibold text-gray-900 pr-4" itemProp="name">{question}</span>
        <ChevronDown className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-5 text-gray-600 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <div itemProp="text">{answer}</div>
        </div>
      )}
    </div>
  );
};

const POSOverview = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden bg-gray-900 flex items-center">
        <img
          src="https://images.unsplash.com/photo-1724668639159-66a001fb1fff?auto=format&fit=crop&w=1920&q=80"
          alt="Modern POS system in use at a busy restaurant"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/60 to-gray-900/70" />
        <div className="relative z-10 w-full py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg" data-testid="pos-hero-h1">
              POS Systems for Restaurants, Retail, Appointments and Service Businesses
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Install a complete POS system powered by Merchant Solutions Corp, with professional setup, payment processing, training and ongoing support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-consultation-btn">
                  Get a Free POS Consultation
                </Button>
              </Link>
              <a href="#compare">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" data-testid="hero-compare-btn">
                  Compare POS Systems
                </Button>
              </a>
            </div>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 flex items-center gap-2">
                <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/fga5kaim_Clover%20logo.jpg" alt="Clover" className="h-5 w-auto" />
                <span className="text-white text-sm font-medium">Clover</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 flex items-center gap-2">
                <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/6q1f7o7j_Square_Logo_Landscape.png" alt="Square" className="h-5 w-auto" />
                <span className="text-white text-sm font-medium">Square</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-white text-sm font-medium">PCI Compliant</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-white text-sm font-medium">Installed Nationwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK BENEFITS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: Zap, label: 'Faster Checkout', desc: 'Speed up every transaction' },
              { icon: BarChart3, label: 'Real-Time Reporting', desc: 'Sales data at a glance' },
              { icon: Package, label: 'Inventory Management', desc: 'Track stock automatically' },
              { icon: Users, label: 'Employee Tracking', desc: 'Manage schedules and performance' },
              { icon: Heart, label: 'Customer Loyalty', desc: 'Reward repeat customers' },
            ].map((b, i) => (
              <div key={i} className="text-center p-4">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <b.icon className="h-7 w-7 text-purple-600" />
                </div>
                <p className="font-bold text-gray-900 text-sm">{b.label}</p>
                <p className="text-xs text-gray-500 mt-1">{b.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
            Modern POS systems integrate payments, inventory and reporting in one unified platform, replacing outdated cash registers and manual processes.
          </p>
        </div>
      </section>

      {/* 3. WHAT IS A POS SYSTEM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What Is a POS System?</h2>
              <p className="text-lg text-gray-700 mb-6">
                A POS system, or point of sale system, is the platform businesses use to process transactions, track sales and manage operations.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Modern POS systems combine hardware and cloud software to manage:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Payments', 'Inventory', 'Employees', 'Sales reporting', 'Customer relationships'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600">
                Instead of using cash registers and spreadsheets, businesses rely on POS systems to automate daily operations and gain real-time visibility into their business.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://customer-assets.emergentagent.com/job_98ba5cc9-5a8c-49ab-a17a-dde6797f516c/artifacts/a2chl5d2_5a68b1ee309330000198381e_revel.jpg"
                alt="POS system tablet on a countertop stand displaying a restaurant ordering interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY BUSINESSES BUY POS SYSTEMS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">Why Businesses Invest in POS Systems</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Businesses adopt POS systems to improve efficiency and gain visibility into their operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Faster Checkout Speeds', desc: 'Process transactions in seconds with tap-to-pay and integrated payment processing.' },
              { icon: BarChart3, title: 'Real-Time Sales Tracking', desc: 'Monitor revenue, top-selling products, and trends from anywhere.' },
              { icon: Package, title: 'Inventory Control', desc: 'Automatically track stock levels, receive low-stock alerts, and manage suppliers.' },
              { icon: Users, title: 'Employee Management', desc: 'Track hours, manage schedules, and monitor individual performance.' },
              { icon: BarChart3, title: 'Better Reporting & Analytics', desc: 'Generate daily, weekly, and monthly reports to make data-driven decisions.' },
              { icon: Heart, title: 'Customer Loyalty Programs', desc: 'Reward returning customers with points, discounts, and promotions.' },
            ].map((item, i) => (
              <Card key={i} className="border hover:border-purple-300 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            POS systems act as the digital command center for modern businesses.
          </p>
        </div>
      </section>

      {/* 5. POS FEATURES SECTION */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Essential POS System Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: CreditCard, title: 'Payment Processing',
                items: ['Credit cards', 'Tap to pay', 'Mobile wallets', 'Online payments'],
                desc: 'Accept every payment type from a single terminal.'
              },
              {
                icon: Package, title: 'Inventory Management',
                items: ['Track products automatically', 'Receive low stock alerts', 'Monitor product performance'],
                desc: 'Know what you have, what sells, and what to reorder.'
              },
              {
                icon: BarChart3, title: 'Reporting & Analytics',
                items: ['Daily sales reports', 'Top-selling products', 'Employee performance metrics'],
                desc: 'Turn data into business decisions.'
              },
              {
                icon: Heart, title: 'Customer Loyalty Programs',
                items: ['Points programs', 'Rewards', 'Digital gift cards'],
                desc: 'Drive repeat business with built-in loyalty tools.'
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <ul className="space-y-2 mb-4">
                  {feature.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
            Platforms like <Link to="/pos/square" className="text-purple-600 font-semibold hover:underline">Square</Link>, <Link to="/pos/clover" className="text-purple-600 font-semibold hover:underline">Clover</Link>, <Link to="/pos/itab" className="text-purple-600 font-semibold hover:underline">itabPOS</Link>, and <Link to="/pos/union" className="text-purple-600 font-semibold hover:underline">Union POS</Link> combine payment processing with inventory, loyalty and reporting tools to simplify business management.
          </p>
        </div>
      </section>

      {/* 6. POS BY INDUSTRY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">POS Systems by Industry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: UtensilsCrossed, title: 'Restaurant POS Systems', link: '/restaurant-payment-processing-services',
                features: ['Table management', 'Menu modifiers', 'Kitchen display systems', 'Online ordering'],
                desc: 'Restaurant POS systems are designed to manage high order volumes and complex menu structures.'
              },
              {
                icon: ShoppingBag, title: 'Retail POS Systems', link: '/retail-payment-solutions',
                features: ['Barcode scanning', 'Inventory management', 'Supplier tracking', 'Product variants'],
                desc: 'Retail POS systems help businesses track inventory and manage product sales across locations.'
              },
              {
                icon: Scissors, title: 'Salon POS Systems', link: '/retail-software/daysmart-salon',
                features: ['Appointment scheduling', 'Client profiles', 'Recurring memberships', 'Employee commission tracking'],
                desc: 'Salon POS platforms combine scheduling and payments for beauty and wellness businesses.'
              },
              {
                icon: Briefcase, title: 'Service Business POS', link: '/professional-services-payment-processing-clover-pos',
                features: ['Invoicing', 'Mobile payments', 'Appointment management', 'Customer databases'],
                desc: 'Service businesses rely on mobile POS tools for invoicing, payments, and client management.'
              },
            ].map((industry, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-purple-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <industry.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{industry.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {industry.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4">{industry.desc}</p>
                <Link to={industry.link} className="text-purple-600 font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  Learn more <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 4-WAY POS COMPARISON */}
      <section id="compare" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">Compare POS Systems Side by Side</h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Clover, Square, itabPOS, and Union POS are among the most widely used POS platforms. Here is how they compare.
          </p>
          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
            <Link to="/pos/clover" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/fga5kaim_Clover%20logo.jpg" alt="Clover POS" className="h-10 w-auto" />
            </Link>
            <Link to="/pos/square" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/6q1f7o7j_Square_Logo_Landscape.png" alt="Square POS" className="h-10 w-auto" />
            </Link>
            <Link to="/pos/itab" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/saip30kz_itabPOS_logo.png" alt="itabPOS" className="h-10 w-auto" />
            </Link>
            <Link to="/pos/union" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="https://customer-assets.emergentagent.com/job_98ba5cc9-5a8c-49ab-a17a-dde6797f516c/artifacts/p2h56xlk_union%20app%20icon.png" alt="Union POS" className="h-10 w-auto rounded-lg" />
              <span className="font-bold text-gray-900">Union</span>
            </Link>
          </div>
          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-x-auto border border-gray-200" data-testid="pos-comparison-table">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <th className="text-left py-4 px-5 font-semibold w-[18%]">Feature</th>
                  <th className="text-left py-4 px-5 font-semibold w-[20.5%]">Clover</th>
                  <th className="text-left py-4 px-5 font-semibold w-[20.5%]">Square</th>
                  <th className="text-left py-4 px-5 font-semibold w-[20.5%]">itabPOS</th>
                  <th className="text-left py-4 px-5 font-semibold w-[20.5%]">Union POS</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ['Best For', 'Restaurants & retail', 'Small businesses & startups', 'Restaurants, bars & QSR', 'High-volume bars & nightlife'],
                  ['Hardware', 'Clover Station, Mini, Flex, Kiosk', 'Register, Terminal, Reader', 'Sunmi-based touchscreen workstations', 'iPad & iPhone based, BYO device'],
                  ['Operating System', 'Android (Clover OS)', 'Proprietary (Square OS)', 'Android (Sunmi)', 'iOS (iPad & iPhone)'],
                  ['Connection', 'Wi-Fi, Ethernet, LTE', 'Wi-Fi, Ethernet', 'Wi-Fi, Ethernet', 'Wi-Fi, Cellular'],
                  ['Offline / Redundancy', 'Offline payments supported', 'Offline payments supported', 'Local server redundancy', 'Offline resilience mode'],
                  ['Payment Processing', 'Multiple processors available', 'Square processing only', 'Multiple processors available', 'EMV processing built-in'],
                  ['SaaS Pricing', 'From $14.95/mo per device', 'Free plan, Plus from $29/mo', 'Custom pricing per location', 'Custom pricing, contact for quote'],
                  ['Setup', 'Professional installation available', 'Self-setup or professional', 'Professional installation included', 'Quick zero-friction setup'],
                  ['Rewards / Loyalty', 'Built-in loyalty programs', 'Square Loyalty add-on', 'Native iTab loyalty program', 'Built-in loyalty, up to 75% repeat revenue'],
                  ['App Marketplace', 'Large third-party app ecosystem', 'Built-in tools, limited apps', 'Integrated suite, no third-party apps', 'All-in-one, no third-party needed'],
                  ['Unique Strength', 'Most versatile ecosystem', 'Easiest to start, fintech platform', 'Deep restaurant customization', 'Handles 1,000+ simultaneous tabs'],
                ].map(([feature, clover, square, itab, union], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3.5 px-5 font-semibold text-gray-900">{feature}</td>
                    <td className="py-3.5 px-5 text-gray-700">{clover}</td>
                    <td className="py-3.5 px-5 text-gray-700">{square}</td>
                    <td className="py-3.5 px-5 text-gray-700">{itab}</td>
                    <td className="py-3.5 px-5 text-gray-700">{union}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link to="/pos/clover">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">Explore Clover POS</Button>
            </Link>
            <Link to="/pos/square">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">Explore Square POS</Button>
            </Link>
            <Link to="/pos/itab" className="hidden">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">Explore itabPOS</Button>
            </Link>
            <Link to="/pos/union">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">Explore Union POS</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. POS HARDWARE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">POS Hardware Options</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Each device is designed for different environments, including restaurants, retail counters and mobile businesses.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Clover Station', desc: 'Full countertop POS', link: '/pos/clover' },
              { name: 'Clover Mini', desc: 'Compact countertop POS', link: '/pos/clover' },
              { name: 'Clover Flex', desc: 'Handheld mobile POS', link: '/pos/clover' },
              { name: 'Square Register', desc: 'Dual-screen POS', link: '/pos/square' },
              { name: 'Square Terminal', desc: 'Portable smart terminal', link: '/pos/square' },
              { name: 'itabPOS Workstation', desc: 'Sunmi-based restaurant POS', link: '/pos/itab' },
              { name: 'Union POS Station', desc: 'iPad-based bar POS', link: '/pos/union' },
            ].map((hw, i) => (
              <Link key={i} to={hw.link} className="group">
                <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Monitor className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{hw.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{hw.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INSTALLATION & SUPPORT */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Professional POS Installation and Support</h2>
              <p className="text-lg text-gray-700 mb-6">
                Unlike online-only providers, Merchant Solutions installs and configures POS systems for your business.
              </p>
              <p className="text-lg text-gray-600 mb-6">Services include:</p>
              <div className="space-y-3">
                {[
                  { icon: Settings, label: 'Onsite POS installation' },
                  { icon: Package, label: 'Inventory setup' },
                  { icon: UtensilsCrossed, label: 'Menu configuration' },
                  { icon: Users, label: 'Staff training' },
                  { icon: CreditCard, label: 'Payment testing' },
                  { icon: Headphones, label: 'Launch support' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <s.icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-gray-800 font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
              <Link to="/solutions/it-services" className="inline-flex items-center gap-1 text-purple-600 font-semibold mt-6 hover:underline">
                Learn about our tech services <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
              <img
                src="https://static.prod-images.emergentagent.com/jobs/98ba5cc9-5a8c-49ab-a17a-dde6797f516c/images/8cdfee7af5810270bfbd348274dd04d5698ce45f970caae703a5b496323fe25a.png"
                alt="Sunmi hospitality POS system base package with touchscreen, cash drawer, receipt printer, and payment terminal"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. FREE POS PROGRAM */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Get a POS System with No Upfront Cost</h2>
          <p className="text-lg text-gray-600 mb-4">
            Qualified businesses may receive POS hardware through our placement program.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Requirements depend on monthly processing volume. This allows businesses to adopt modern POS technology without a large upfront investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing/free-pos">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg px-8 py-6" data-testid="free-pos-btn">
                Learn About Free POS
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6">
                Check If You Qualify
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. SOCIAL PROOF / TESTIMONIALS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">What Our Merchants Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Switching to Clover POS completely transformed how we run our restaurant. Faster tickets, better reporting, and the staff picked it up in minutes.',
                name: 'Maria G.',
                role: 'Restaurant Owner',
                stars: 5,
              },
              {
                quote: 'The installation team set up everything onsite. Menu, inventory, payment testing, all done before we opened the next morning.',
                name: 'James T.',
                role: 'Retail Store Manager',
                stars: 5,
              },
              {
                quote: 'We went from paper appointments to a full POS system with scheduling, loyalty, and card processing. Huge time saver.',
                name: 'Lisa P.',
                role: 'Salon Owner',
                stars: 5,
              },
            ].map((testimonial, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.stars }).map((_, j) => (
                      <Star key={j} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Start Your POS Setup Today</h2>
          <p className="text-xl text-purple-100 mb-8">
            Get help choosing the right POS system for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" data-testid="cta-consultation-btn">
                Schedule Consultation
              </Button>
            </Link>
            <a href="#compare">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
                Compare POS Systems
              </Button>
            </a>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
                Get Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="py-20 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">POS System FAQs</h2>
          <div>
            <FAQItem
              question="What is a POS system?"
              answer="A POS system (point of sale system) is the hardware and software combination businesses use to process transactions, manage inventory, track sales, and handle day-to-day operations. Modern POS systems are cloud-based and include features like payment processing, employee management, reporting, and customer loyalty programs."
            />
            <FAQItem
              question="How much does a POS system cost?"
              answer="POS system costs vary based on hardware and software. Clover POS hardware ranges from $99 to $1,799 depending on the model. Square POS starts free with a basic magstripe reader. Monthly software fees range from $0 to $100+ depending on features. Merchant Solutions offers free POS placement programs for qualified businesses."
            />
            <FAQItem
              question="What POS system is best for restaurants?"
              answer="Clover POS and Square POS are the most popular restaurant POS systems. Clover offers professional-grade hardware with kitchen display systems, table management, and online ordering. Square provides an affordable cloud-based solution with built-in delivery and menu management. The best choice depends on your restaurant size and needs."
            />
            <FAQItem
              question="What POS system is best for retail?"
              answer="For retail businesses, Clover Station and Square Register offer barcode scanning, inventory management, and product variant tracking. Exatouch POS is popular among convenience stores and specialty retail. The right POS depends on your inventory complexity and number of locations."
            />
            <FAQItem
              question="Do POS systems include payment processing?"
              answer="Most modern POS systems include integrated payment processing. Square POS requires Square's own payment processing. Clover POS can work with multiple payment processors including Merchant Solutions. Integrated payment processing means faster checkout and unified reporting."
            />
            <FAQItem
              question="Is it safe to get a POS system from eBay that has been used?"
              answer="Buying used POS equipment from eBay or similar marketplaces carries risks. Used terminals may be locked to a previous merchant account, have outdated software, or lack security certifications. For security and compliance, we recommend purchasing POS equipment through an authorized dealer who can ensure proper setup, PCI compliance, and ongoing support."
            />
            <FAQItem
              question="What should I look for in a POS dealer?"
              answer="Look for a POS dealer who offers professional installation, staff training, ongoing technical support, and transparent pricing. Authorized dealers like Merchant Solutions provide onsite setup, payment testing, and dedicated support. Avoid dealers who only sell hardware without installation or training, as proper setup is critical for smooth operations."
            />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 text-center mb-4">Related Pages</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Restaurant POS', path: '/restaurant-payment-processing-services' },
              { label: 'Retail POS', path: '/retail-payment-solutions' },
              { label: 'Salon POS', path: '/retail-software/daysmart-salon' },
              { label: 'Self Ordering Kiosk', path: '/best-self-ordering-kiosk-for-restaurants' },
              { label: 'Payment Processing', path: '/solutions/payment-processing' },
              { label: 'Loyalty Programs', path: '/solutions/loyalty-rewards' },
              { label: 'Gift Card Programs', path: '/solutions/gift-cards' },
            ].map((link, i) => (
              <Link key={i} to={link.path} className="text-sm text-purple-600 bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default POSOverview;
