import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  DollarSign,
  Shield,
  Zap,
  BarChart3,
  Building2,
  MapPin,
  Wrench,
  Clock,
  CreditCard,
  Users,
  TrendingUp,
  Settings,
  Phone,
  Banknote
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

const ATMsSolution = () => {
  const keyBenefits = [
    { title: 'Passive Income', desc: 'Earn on every transaction' },
    { title: 'Increase Traffic', desc: 'Attract more customers' },
    { title: 'Boost Sales', desc: 'Cash customers spend more' },
    { title: 'Free Placement', desc: 'No upfront cost options' }
  ];

  const programOptions = [
    { 
      icon: Building2, 
      title: 'Free ATM Placement', 
      desc: 'We place and maintain the ATM at no cost to you. You earn a share of surcharge revenue.',
      features: ['No equipment cost', 'Free installation', 'We handle maintenance', 'Revenue sharing']
    },
    { 
      icon: DollarSign, 
      title: 'ATM Purchase Program', 
      desc: 'Own your ATM and keep 100% of the surcharge revenue. We provide processing and support.',
      features: ['Full ownership', 'Keep all revenue', 'Processing included', 'Technical support']
    },
    { 
      icon: Wrench, 
      title: 'ATM Processing Only', 
      desc: 'Already have an ATM? We provide competitive processing rates and 24/7 support.',
      features: ['Competitive rates', 'Fast settlement', 'Remote monitoring', 'Compliance support']
    }
  ];

  const atmFeatures = [
    'EMV chip card ready',
    'ADA compliant',
    'Contactless capable',
    'Multi-language support',
    'Receipt printing',
    'Balance inquiries',
    'Cash dispensing',
    'Secure PIN entry'
  ];

  const services = [
    { icon: Wrench, title: 'Installation', desc: 'Professional setup and configuration' },
    { icon: Banknote, title: 'Cash Loading', desc: 'Regular cash replenishment services' },
    { icon: Settings, title: 'Maintenance', desc: '24/7 monitoring and repairs' },
    { icon: BarChart3, title: 'Reporting', desc: 'Real-time transaction data' }
  ];

  const idealLocations = [
    'Convenience stores',
    'Gas stations',
    'Restaurants & bars',
    'Hotels & motels',
    'Retail stores',
    'Laundromats',
    'Event venues',
    'Office buildings'
  ];

  const whyATM = [
    'Generate passive income from every transaction',
    'Attract customers who prefer cash',
    'Reduce credit card processing fees',
    'Increase average purchase amounts',
    'Provide convenience to customers'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ATM Solutions for Your Business
            </h1>
            
            <p className="text-xl text-purple-600 font-semibold mb-4">
              Generate Revenue with a Cash Machine at Your Location
            </p>
            
            <div className="text-lg text-gray-700 space-y-4 mb-8">
              <p>
                Add an ATM to your business and earn passive income on every transaction. Attract more customers and increase sales with convenient cash access.
              </p>
              <p>
                Free placement options available. We handle installation, maintenance, and cash loading.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-get-started-btn">
                  Get a Free ATM
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

      {/* Program Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ATM Program Options</h2>
            <p className="text-lg text-gray-600">Choose the program that works best for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">{option.title}</h3>
                    <p className="text-gray-600 mb-4">{option.desc}</p>
                    <div className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ATM Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">ATM Features</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Modern, reliable ATMs with the latest security and convenience features.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {atmFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center" data-testid="atm-features-image">
              <div className="text-center text-gray-400">
                <Banknote className="h-24 w-24 mx-auto mb-4 text-purple-300" />
                <p className="text-sm">ATM Machine Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Full-Service ATM Management</h2>
            <p className="text-lg text-gray-600">We handle everything so you can focus on your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ideal Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center" data-testid="locations-image">
              <div className="text-center text-gray-400">
                <MapPin className="h-24 w-24 mx-auto mb-4 text-purple-300" />
                <p className="text-sm">Location Types Image</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Ideal Locations</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                ATMs perform best in high-traffic locations with cash-oriented customers.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {idealLocations.map((location, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ATM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Add an ATM?</h2>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {whyATM.map((benefit, index) => (
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Add an ATM to Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get a free ATM placement or learn about our purchase and processing options. Start earning passive income today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6" data-testid="cta-free-atm-btn">
                Get a Free ATM
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" data-testid="cta-contact-btn">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides ATM placement, ATM processing, and ATM sales for businesses across all 50 US states. Free ATM placement available for qualified locations. Full-service ATM management including installation, cash loading, maintenance, and 24/7 support.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ATMsSolution;
