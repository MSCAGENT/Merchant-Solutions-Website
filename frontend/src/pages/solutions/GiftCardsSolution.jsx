import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  CreditCard, 
  Globe, 
  Smartphone, 
  Building2, 
  Shield, 
  Zap,
  RefreshCw,
  Lock,
  BarChart3,
  Gift,
  Mail,
  MessageSquare,
  QrCode,
  Store,
  Users,
  TrendingUp,
  Calendar,
  Wallet,
  ShoppingBag,
  Utensils,
  Scissors,
  Coffee,
  Dumbbell,
  Briefcase,
  MapPin
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

const GiftCardsSolution = () => {
  const keyBenefits = [
    { title: 'Increase Revenue', desc: 'Boost upfront cash flow' },
    { title: 'Attract Customers', desc: 'Bring new buyers in' },
    { title: 'Improve Retention', desc: 'Drive repeat visits' },
    { title: 'Reduce Refunds', desc: 'Gift cards rarely returned' }
  ];

  const howItWorksFeatures = [
    'Sell gift cards in-store',
    'Send e-gift cards by email or SMS',
    'Redeem gift cards across locations',
    'Track balances in real time',
    'Prevent fraud and duplicate use'
  ];

  const posFeatures = [
    'Activate gift cards instantly',
    'Reload balances',
    'Check balances in seconds',
    'Redeem during checkout',
    'Issue digital receipts'
  ];

  const eGiftFeatures = [
    { icon: Mail, label: 'Email delivery' },
    { icon: MessageSquare, label: 'SMS delivery' },
    { icon: Gift, label: 'Custom branding' },
    { icon: Calendar, label: 'Scheduled delivery' },
    { icon: QrCode, label: 'QR code redemption' }
  ];

  const integrationPartners = [
    {
      name: 'Geti',
      description: 'Supports digital gift cards, loyalty programs, and multi-location management.'
    },
    {
      name: 'Factor4',
      description: 'Offers branded gift cards, online sales, and advanced reporting tools.'
    },
    {
      name: 'Valutec',
      description: 'Provides secure stored-value card processing for physical and digital programs.'
    }
  ];

  const inStoreCapabilities = [
    'Physical card activation',
    'Digital card issuance',
    'Reloading existing cards',
    'Balance inquiries',
    'Refund and replacement tools'
  ];

  const onlineCapabilities = [
    '24/7 availability',
    'Automatic fulfillment',
    'Secure payment processing',
    'Mobile-friendly checkout',
    'Real-time balance sync'
  ];

  const multiLocationFeatures = [
    'Shared balances',
    'Central reporting',
    'Unified customer accounts',
    'Cross-location redemption',
    'Corporate-level controls'
  ];

  const reportingMetrics = [
    'Sales volume',
    'Redemption rates',
    'Outstanding balances',
    'Customer usage patterns',
    'Location performance'
  ];

  const securityFeatures = [
    { icon: Lock, title: 'Encrypted Transactions', desc: 'All data protected end-to-end' },
    { icon: CreditCard, title: 'Unique Card IDs', desc: 'Every card tracked individually' },
    { icon: Shield, title: 'Tokenization', desc: 'Secure card data storage' },
    { icon: BarChart3, title: 'Fraud Monitoring', desc: 'Real-time duplicate prevention' }
  ];

  const marketingUses = [
    'Holiday campaigns',
    'Referral rewards',
    'Loyalty programs',
    'Corporate gifting',
    'Customer appreciation'
  ];

  const industries = [
    { icon: ShoppingBag, name: 'Retail' },
    { icon: Utensils, name: 'Restaurants' },
    { icon: Scissors, name: 'Salons & Spas' },
    { icon: Coffee, name: 'Cafes & Bakeries' },
    { icon: Dumbbell, name: 'Fitness Studios' },
    { icon: Briefcase, name: 'Service Businesses' },
    { icon: MapPin, name: 'Multi-Location Brands' }
  ];

  const whyItWorks = [
    'Increase upfront cash flow',
    'Boost repeat visits',
    'Attract new customers',
    'Reduce refund requests',
    'Improve brand loyalty'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Gift Card Solutions for Modern Businesses
            </h1>
            
            <p className="text-xl text-purple-600 font-semibold mb-4">
              Sell, Manage, and Redeem Physical and Digital Gift Cards
            </p>
            
            <div className="text-lg text-gray-700 space-y-4 mb-8">
              <p>
                Gift cards help businesses increase revenue, attract new customers, and improve retention.
              </p>
              <p>
                Our gift card solutions allow you to sell and redeem physical and e-gift cards directly through your POS system, website, and mobile platforms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-book-call-btn">
                  Book a Call
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6" data-testid="hero-learn-more-btn">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Gift className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">How Our Gift Card System Works</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Our platform connects your point-of-sale system with industry-leading gift card providers. All transactions sync automatically with your sales and reporting systems.
              </p>
              <p className="text-gray-700 mb-6">This allows you to:</p>
              <div className="space-y-3">
                {howItWorksFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center bg-white shadow-lg" data-testid="how-it-works-image-block">
              <img src="https://static.prod-images.emergentagent.com/jobs/98ba5cc9-5a8c-49ab-a17a-dde6797f516c/images/ffc18d381ebd4491aee1b0c342c3d3e678bbcf432a03555fc1427dbcd1a95ff9.png" alt="Custom branded gift cards for businesses" className="w-full h-full object-contain p-6" />
            </div>
          </div>
        </div>
      </section>

      {/* POS Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center bg-white" data-testid="pos-integration-image-block">
              <img src="https://customer-assets.emergentagent.com/job_ac3711b8-9a11-453d-a74b-57edf2c8d851/artifacts/y6c4u33a_gift-cards_Clover-200x200_200x200.png" alt="Clover POS gift card processing" className="w-full h-full object-contain" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Store className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">POS-Based Gift Card Processing</h2>
              </div>
              <p className="text-xl text-purple-600 font-medium mb-4">Integrated with Your Point of Sale</p>
              <p className="text-lg text-gray-600 mb-6">
                We use POS software such as Clover and iPOS Point of Sale to process gift cards directly at checkout. No manual tracking. No separate systems. Everything runs through your existing POS workflow.
              </p>
              <p className="text-gray-700 mb-4">With POS integration, you can:</p>
              <div className="grid grid-cols-2 gap-3">
                {posFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* e-Gift Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">e-Gift Cards and Digital Delivery</h2>
              </div>
              <p className="text-xl text-purple-600 font-medium mb-4">Sell Gift Cards Online and Remotely</p>
              <p className="text-lg text-gray-600 mb-6">
                Our system supports digital gift cards that customers can purchase and send online. Customers can buy gift cards for birthdays, holidays, and promotions without visiting your store.
              </p>
              <p className="text-gray-700 mb-4">Features include:</p>
              <div className="grid grid-cols-2 gap-4">
                {eGiftFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-purple-600" />
                      </div>
                      <span className="text-gray-700">{feature.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]" data-testid="egift-image-block">
              <img src="https://static.prod-images.emergentagent.com/jobs/ac3711b8-9a11-453d-a74b-57edf2c8d851/images/2dba86b2475ce476df25a72fabe2714d6fb7020de9360fc07a7d307a6aa8904b.png" alt="Digital e-gift card delivery via mobile phone" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Gift Card Integration Partners</h2>
            <p className="text-xl text-purple-600 font-medium mb-2">Powered by Industry-Leading Providers</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We connect your business to professional gift card networks using trusted providers. These integrations ensure reliability, scalability, and compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrationPartners.map((partner, index) => (
              <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300" data-testid={`partner-card-${index}`}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{partner.name}</h3>
                  <p className="text-gray-600">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* In-Store Sales Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden aspect-[4/3]" data-testid="instore-sales-image-block">
              <img src="https://static.prod-images.emergentagent.com/jobs/ac3711b8-9a11-453d-a74b-57edf2c8d851/images/9a7e8d0b8959fa305926b01c7d0c8d997af156905890fe3d932fc79db9f95194.png" alt="In-store gift card sales at checkout" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">In-Store Gift Card Sales</h2>
              </div>
              <p className="text-xl text-purple-600 font-medium mb-4">Sell Gift Cards at Checkout</p>
              <p className="text-lg text-gray-600 mb-6">
                Cashiers can sell and activate gift cards directly through the POS. Perfect for impulse purchases and holiday promotions.
              </p>
              <p className="text-gray-700 mb-4">Capabilities include:</p>
              <div className="space-y-3">
                {inStoreCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Sales Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Online Gift Card Sales</h2>
              </div>
              <p className="text-xl text-purple-600 font-medium mb-4">Add Gift Cards to Your Website</p>
              <p className="text-lg text-gray-600 mb-6">
                We enable online gift card sales through your website or checkout system. Customers can buy gift cards anytime, from any device.
              </p>
              <p className="text-gray-700 mb-4">Benefits:</p>
              <div className="space-y-3">
                {onlineCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]" data-testid="online-sales-image-block">
              <img src="https://static.prod-images.emergentagent.com/jobs/ac3711b8-9a11-453d-a74b-57edf2c8d851/images/4ba03c3f36a4ceb6e2f00d2b8870ffde8be70c0416327b96444215368fbe9fb6.png" alt="Online gift card sales on laptop and mobile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden aspect-[4/3]" data-testid="multi-location-image-block">
              <img src="https://static.prod-images.emergentagent.com/jobs/ac3711b8-9a11-453d-a74b-57edf2c8d851/images/165a41c6732cc21d9b28d6c9f1ac4bded812d1ce0ce549485a2cefc5a9905c0c.png" alt="Multi-location franchise gift card management" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Multi-Location and Franchise Support</h2>
              </div>
              <p className="text-xl text-purple-600 font-medium mb-4">Centralized Gift Card Management</p>
              <p className="text-lg text-gray-600 mb-6">
                For multi-store businesses, gift cards work across all locations. This creates a consistent brand experience.
              </p>
              <p className="text-gray-700 mb-4">Features include:</p>
              <div className="space-y-3">
                {multiLocationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Gift Card Reporting and Analytics</h2>
              </div>
              <p className="text-xl text-purple-600 font-medium mb-4">Track Performance in Real Time</p>
              <p className="text-lg text-gray-600 mb-6">
                Our system provides detailed reporting on gift card activity. This helps you optimize promotions and forecast revenue.
              </p>
              <p className="text-gray-700 mb-4">View:</p>
              <div className="grid grid-cols-2 gap-3">
                {reportingMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]" data-testid="reporting-image-block">
              <img src="https://static.prod-images.emergentagent.com/jobs/ac3711b8-9a11-453d-a74b-57edf2c8d851/images/96813c135a77b687df228d3f355e01d4a3552d44128daee3f5961404fead66ef.png" alt="Gift card reporting and analytics dashboard" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security and Fraud Protection</h2>
            <p className="text-xl text-purple-600 font-medium mb-2">Protect Your Revenue</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Gift cards are secured using enterprise-grade systems. This protects both merchants and customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 text-center" data-testid={`security-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marketing Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden aspect-[4/3]" data-testid="marketing-image-block">
              <img src="https://static.prod-images.emergentagent.com/jobs/ac3711b8-9a11-453d-a74b-57edf2c8d851/images/cbb692a14321464145c3b8981a1ee8f4e136f73a76f28239ce3c13208413403d.png" alt="Gift card marketing and promotional campaigns" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Marketing and Promotional Tools</h2>
              </div>
              <p className="text-xl text-purple-600 font-medium mb-4">Drive Sales with Gift Cards</p>
              <p className="text-lg text-gray-600 mb-6">
                Gift cards work as powerful marketing tools. Integrated systems make promotions easy to launch and manage.
              </p>
              <p className="text-gray-700 mb-4">Use them for:</p>
              <div className="space-y-3">
                {marketingUses.map((use, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{use}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">Gift card solutions for businesses of all types</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 text-center" data-testid={`industry-card-${index}`}>
                  <CardContent className="p-4">
                    <Icon className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">{industry.name}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Gift Card Solutions Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All while staying fully integrated with your POS and payment systems.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6 text-center">Our gift card programs help you:</p>
                <div className="space-y-4">
                  {whyItWorks.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Get Started with Gift Cards Today
          </h2>
          <p className="text-xl text-purple-100 mb-4">
            Launch a professional gift card program with in-store, online, and mobile support.
          </p>
          <div className="text-lg text-purple-100 space-y-2 mb-8">
            <p>Sell physical and digital cards.</p>
            <p>Track everything in real time.</p>
            <p>Integrate with your POS.</p>
            <p>Scale across locations.</p>
          </div>
          <p className="text-lg text-white mb-8">
            Request a consultation to set up your custom gift card solution.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-6" data-testid="cta-book-call-btn">
              Book a Call
            </Button>
          </Link>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides gift card solutions, e-gift card processing, and POS-integrated gift card programs for retail, restaurants, salons, and multi-location businesses across all 50 US states, Canada, and the Caribbean. Our gift card software integrates with Clover POS, iPOS, and leading gift card providers including Geti, Factor4, and Valutec.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GiftCardsSolution;
