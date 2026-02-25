import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Clock,
  Users,
  DollarSign,
  Shield,
  Zap,
  Phone,
  Mail,
  Calendar,
  CreditCard,
  Smartphone,
  Monitor,
  Printer,
  Utensils,
  ShoppingBag,
  Gift,
  BarChart3,
  Settings,
  Wifi,
  MapPin,
  Star,
  MessageSquare,
  ChefHat,
  Receipt,
  Banknote,
  Package,
  Headphones,
  QrCode,
  Layers,
  ClipboardList
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const Restaurants = () => {
  const trustPoints = [
    { icon: Zap, label: 'Fast Funding' },
    { icon: Headphones, label: 'U.S. Support' },
    { icon: MapPin, label: 'Installation Nationwide' },
    { icon: DollarSign, label: 'Transparent Pricing' }
  ];

  const painPoints = [
    'Slow service',
    'Order mistakes',
    'Staff turnover',
    'Payout delays',
    'Chargebacks'
  ];

  const outcomes = [
    'Faster checkout',
    'Fewer errors',
    'Better tips',
    'Cleaner reporting',
    'Stable uptime'
  ];

  const platforms = [
    {
      name: 'Clover for Restaurants',
      bestFor: 'Quick service, counter service, or small businesses',
      link: '/pos/clover',
      cta: 'See Clover Setup',
      logo: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/fga5kaim_Clover%20logo.jpg'
    },
    {
      name: 'Square for Restaurants',
      bestFor: 'Fast setup, simple workflows, modern add-ons, pop-up businesses',
      link: '/pos/square',
      cta: 'See Square Setup',
      logo: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/6q1f7o7j_Square_Logo_Landscape.png'
    },
    {
      name: 'iTabPOS for Restaurants',
      bestFor: 'Full-service restaurants, bars, multi-location brands',
      link: '/contact',
      cta: 'See iTabPOS Setup',
      logo: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/saip30kz_itabPOS_logo.png'
    }
  ];

  const whatYouGet = [
    'Hardware delivery and configuration',
    'Menu build and modifier setup',
    'Taxes, service charges, tips, coursing',
    'Kitchen routing and printer setup',
    'Online ordering setup',
    'Staff training and go-live support',
    'Ongoing support and account management'
  ];

  const capabilities = [
    { icon: CreditCard, label: 'Counter POS and handheld ordering' },
    { icon: Utensils, label: 'Tables, tabs, coursing' },
    { icon: ShoppingBag, label: 'Online ordering and pickup' },
    { icon: Package, label: 'Delivery integrations' },
    { icon: Gift, label: 'Gift cards and loyalty' },
    { icon: Users, label: 'Employee roles and permissions' },
    { icon: ClipboardList, label: 'Inventory and item costs' },
    { icon: BarChart3, label: 'Multi-location reporting' },
    { icon: MessageSquare, label: 'Customer receipts via text or email' },
    { icon: Receipt, label: 'Payouts and deposit reporting' }
  ];

  const hardwareCategories = [
    {
      title: 'Counter & Checkout',
      icon: CreditCard,
      items: ['Terminal', 'Receipt printer', 'Cash drawer', 'Barcode scanner']
    },
    {
      title: 'Server & Tableside',
      icon: Smartphone,
      items: ['Handheld device', 'Pay at table', 'Tap to pay']
    },
    {
      title: 'Kitchen',
      icon: ChefHat,
      items: ['Kitchen display screens', 'Bump bar', 'Printers by station']
    },
    {
      title: 'Guest Experience',
      icon: Monitor,
      items: ['Customer display', 'Kiosks', 'QR ordering']
    }
  ];

  const installationSteps = [
    { step: '1', title: 'Discovery Call & Quote', desc: 'Understand your needs and provide pricing' },
    { step: '2', title: 'Menu & Workflow Intake', desc: 'Gather your menu, modifiers, and workflows' },
    { step: '3', title: 'Hardware Prep & Configuration', desc: 'Configure all devices before shipping' },
    { step: '4', title: 'On-Site or Remote Install', desc: 'Professional installation at your location' },
    { step: '5', title: 'Staff Training', desc: 'Train your team on the new system' },
    { step: '6', title: 'Go-Live Support', desc: 'We are there when you flip the switch' },
    { step: '7', title: 'Post-Launch Check-In', desc: 'Follow up to ensure everything runs smoothly' }
  ];

  const pricingOptions = [
    { title: 'Processing Pricing', desc: 'Interchange plus or flat rate options depending on fit', icon: CreditCard },
    { title: 'Monthly Software Fees', desc: 'Clover or Square plan tiers based on features', icon: Settings },
    { title: 'Hardware', desc: 'Purchase, lease, or promo options', icon: Monitor },
    { title: 'Services', desc: 'Installation, menu build, training packages', icon: Users }
  ];

  const cashDiscountBenefits = [
    'Receipts configured properly',
    'Signage guidance provided',
    'Compliant setup',
    'Staff scripting'
  ];

  const faqs = [
    {
      question: 'How fast can we go live?',
      answer: 'Most restaurants are up and running within 1-2 weeks. Timeline depends on menu complexity, hardware availability, and your schedule for training. Simple setups can go live in as few as 3-5 days.'
    },
    {
      question: 'Can you import my menu?',
      answer: 'Yes, we can import menus from spreadsheets, PDFs, or your current POS system. We\'ll work with you to organize items, modifiers, and pricing before go-live.'
    },
    {
      question: 'Can we keep our printers or kitchen screens?',
      answer: 'In many cases, yes. We\'ll evaluate your existing hardware during the discovery call. Compatible equipment can often be integrated to save costs.'
    },
    {
      question: 'Do you support multiple locations?',
      answer: 'Absolutely. We provide multi-location reporting, centralized menu management, and consistent setup across all your restaurants.'
    },
    {
      question: 'What happens if internet goes down?',
      answer: 'Our POS systems have offline mode that continues processing payments. Transactions sync automatically when connectivity returns.'
    },
    {
      question: 'How does cash discount work?',
      answer: 'Cash discount programs post a slightly higher "card price" and offer a discount for cash payments. This can significantly reduce or eliminate your processing costs while staying fully compliant.'
    },
    {
      question: 'Do you help with chargebacks?',
      answer: 'Yes, we provide chargeback support and guidance. Our systems also help prevent disputes through proper receipt delivery and transaction documentation.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Video Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/u0s1cs2r_POS%20Solutions%20for%20Food%20%20Beverage%20Businesses%20%20Clover.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/75 via-purple-800/60 to-purple-600/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight drop-shadow-lg">
            Restaurant Payment Processing
          </h1>
          <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl">
            iTabPOS, Clover, or Square. Setup, menu build, training, and go live fast.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg">
              Get a Restaurant Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Restaurant Payment Processing, Installed and Supported by a Local Dealer
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              iTabPOS, Clover, or Square. Setup, menu build, training, and go live fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-quote-btn">
                  Get a Restaurant Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6" data-testid="hero-demo-btn">
                  Book a 15 Minute Demo
                </Button>
              </Link>
            </div>

            {/* Trust Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="flex items-center justify-center gap-2 text-gray-700">
                    <Icon className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">{point.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Built for Restaurants - Problem & Outcome */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Restaurants</h2>
            <p className="text-lg text-gray-600">We understand your challenges and deliver results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pain Points */}
            <Card className="border-2 border-red-100 bg-red-50/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Common Pain Points</h3>
                <div className="space-y-3">
                  {painPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Outcomes */}
            <Card className="border-2 border-green-100 bg-green-50/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">What You Get</h3>
                <div className="space-y-3">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Choose Your Platform */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Platform</h2>
            <p className="text-lg text-gray-600">Find the right fit for your restaurant</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="h-16 flex items-center justify-center mx-auto mb-6">
                    <img src={platform.logo} alt={platform.name} className="h-full w-auto object-contain max-w-[180px]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                  <p className="text-gray-600 mb-6">Best for: {platform.bestFor}</p>
                  <Link to={platform.link}>
                    <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 w-full">
                      {platform.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What You Get With Us</h2>
              <p className="text-xl text-purple-600 font-medium mb-6">The Dealer + Installer Advantage</p>
              <p className="text-lg text-gray-600 mb-8">
                We're not just selling you a system—we set it up, train your staff, and support you after go-live.
              </p>
              <div className="space-y-4">
                {whatYouGet.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" data-testid="dealer-advantage-image">
              <img 
                src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/889xwcgb_IT%20tech_installer.png" 
                alt="MSC technician installing POS system in restaurant" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
            <p className="text-lg text-gray-600">Everything you need to run your restaurant</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="border hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <Icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <p className="text-sm text-gray-700">{capability.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Restaurant Hardware Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Restaurant Hardware Options</h2>
            <p className="text-lg text-gray-600">The complete stack for your workflow</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardwareCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Installation Process</h2>
            <p className="text-lg text-gray-600">Clear steps from quote to go-live</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {installationSteps.slice(0, 4).map((item, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {installationSteps.slice(4).map((item, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              <strong>Typical timeline:</strong> 1-2 weeks for most restaurants. Simple setups can go live in 3-5 days.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Approach</h2>
            <p className="text-lg text-gray-600">Transparent options to fit your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {pricingOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-6">
                    <Icon className="h-10 w-10 text-purple-600 mb-4" />
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600 text-sm">{option.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                Get Exact Restaurant Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cash Discount Option */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Banknote className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Cash Discount Option</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Offer a posted price and a cash price to reduce or offset your processing costs. Fully compliant setup included.
              </p>
              <p className="text-gray-700 mb-6">What we configure:</p>
              <div className="space-y-3 mb-8">
                {cashDiscountBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  See Cash Discount Savings
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center" data-testid="cash-discount-image">
              <div className="text-center text-gray-400">
                <Banknote className="h-24 w-24 mx-auto mb-4 text-purple-300" />
                <p className="text-sm">Cash Discount Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Restaurants</h2>
            <p className="text-lg text-gray-600">See what our customers say about working with us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "The install was seamless. They had our menu built before they even arrived, and training took less than an hour. Best POS switch we've made."
                </p>
                <p className="font-semibold text-gray-900">— Maria S., Taqueria Owner</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Support actually answers the phone. After years with our old processor, that alone was worth the switch. Processing fees dropped too."
                </p>
                <p className="font-semibold text-gray-900">— James R., Bar & Grill Manager</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "We went live in 4 days across 3 locations. Kitchen routing works perfectly now. Orders go to the right station every time."
                </p>
                <p className="font-semibold text-gray-900">— David K., Pizza Chain Owner</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Get Installed and Start Taking Payments This Week
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Local installation, full menu setup, and ongoing support—all included.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6" data-testid="cta-quote-btn">
                Get a Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" data-testid="cta-demo-btn">
                Book a Demo
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-purple-100">
            <a href="tel:+18001234567" className="flex items-center justify-center gap-2 hover:text-white">
              <Phone className="h-5 w-5" />
              <span>1-800-123-4567</span>
            </a>
            <a href="mailto:restaurants@merchantsolutionscorp.com" className="flex items-center justify-center gap-2 hover:text-white">
              <Mail className="h-5 w-5" />
              <span>restaurants@merchantsolutionscorp.com</span>
            </a>
            <Link to="/contact" className="flex items-center justify-center gap-2 hover:text-white">
              <Calendar className="h-5 w-5" />
              <span>Schedule a Call</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides restaurant POS systems, payment processing, and merchant services for restaurants across all 50 US states. We install and support Clover, Square, and iTabPOS systems with full menu build, training, and ongoing support. Serving quick service, full service, bars, cafes, and multi-location restaurant brands.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Restaurants;
