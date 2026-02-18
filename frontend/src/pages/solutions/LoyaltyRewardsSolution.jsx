import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Shield, 
  Zap,
  Gift,
  Star,
  Users,
  TrendingUp,
  BarChart3,
  Smartphone,
  CreditCard,
  Award,
  Heart,
  Repeat,
  Target,
  Percent,
  Bell
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

const LoyaltyRewardsSolution = () => {
  const keyBenefits = [
    { title: 'Increase Retention', desc: 'Keep customers coming back' },
    { title: 'Boost Spending', desc: 'Higher average tickets' },
    { title: 'Build Loyalty', desc: 'Create brand advocates' },
    { title: 'Gain Insights', desc: 'Understand customer behavior' }
  ];

  const programTypes = [
    { icon: Star, title: 'Points-Based', desc: 'Earn points on every purchase, redeem for rewards' },
    { icon: Percent, title: 'Cash Back', desc: 'Automatic discounts based on spending' },
    { icon: Award, title: 'Tiered Rewards', desc: 'VIP levels with increasing benefits' },
    { icon: Gift, title: 'Punch Cards', desc: 'Buy X get one free promotions' }
  ];

  const features = [
    'Automatic point tracking',
    'Digital loyalty cards',
    'Mobile app integration',
    'SMS and email notifications',
    'Birthday rewards',
    'Referral bonuses',
    'Custom reward tiers',
    'Real-time balance updates'
  ];

  const posIntegration = [
    'Clover POS',
    'Square POS',
    'Toast POS',
    'Lightspeed',
    'Shopify POS',
    'Custom integrations'
  ];

  const analytics = [
    { title: 'Customer Lifetime Value', desc: 'Track long-term customer worth' },
    { title: 'Visit Frequency', desc: 'Monitor how often customers return' },
    { title: 'Redemption Rates', desc: 'See which rewards drive action' },
    { title: 'Campaign Performance', desc: 'Measure promotion effectiveness' }
  ];

  const industries = [
    { icon: CreditCard, name: 'Retail Stores' },
    { icon: Gift, name: 'Restaurants' },
    { icon: Heart, name: 'Salons & Spas' },
    { icon: Smartphone, name: 'Cafes' },
    { icon: Star, name: 'Fitness Centers' },
    { icon: Users, name: 'Service Businesses' }
  ];

  const whyChoose = [
    'Increase customer retention by up to 25%',
    'Boost average transaction value',
    'Reduce marketing costs with targeted promotions',
    'Build a database of engaged customers',
    'Differentiate from competitors'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Loyalty & Rewards Programs for Business
            </h1>
            
            <p className="text-xl text-purple-600 font-semibold mb-4">
              Build Customer Loyalty and Drive Repeat Business
            </p>
            
            <div className="text-lg text-gray-700 space-y-4 mb-8">
              <p>
                Turn one-time buyers into loyal customers with integrated loyalty and rewards programs. Track points, offer rewards, and build lasting relationships.
              </p>
              <p>
                Fully integrated with your POS system for seamless operation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-get-started-btn">
                  Get Started
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6" data-testid="hero-demo-btn">
                  Request Demo
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

      {/* Program Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Loyalty Program Types</h2>
            <p className="text-lg text-gray-600">Choose the right program for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programTypes.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{program.title}</h3>
                    <p className="text-gray-600 text-sm">{program.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Program Features</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Everything you need to run a successful loyalty program, all in one platform.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center" data-testid="features-image">
              <div className="text-center text-gray-400">
                <Star className="h-24 w-24 mx-auto mb-4 text-purple-300" />
                <p className="text-sm">Loyalty Features Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POS Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center" data-testid="pos-integration-image">
              <div className="text-center text-gray-400">
                <CreditCard className="h-24 w-24 mx-auto mb-4 text-purple-300" />
                <p className="text-sm">POS Integration Image</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">POS Integration</h2>
              </div>
              <p className="text-xl text-purple-600 font-medium mb-4">Works with Your Existing System</p>
              <p className="text-lg text-gray-600 mb-6">
                Our loyalty programs integrate seamlessly with leading POS systems. Points are tracked automatically at checkout.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {posIntegration.map((pos, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{pos}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Analytics & Insights</h2>
            <p className="text-lg text-gray-600">Understand your customers better</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analytics.map((item, index) => (
              <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                <CardContent className="p-6">
                  <BarChart3 className="h-10 w-10 text-purple-600 mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">Loyalty solutions for every business type</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 text-center">
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

      {/* Why Choose */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Loyalty Program</h2>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {whyChoose.map((benefit, index) => (
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
            Ready to Build Customer Loyalty?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Launch a rewards program that keeps customers coming back. Easy setup, powerful results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6" data-testid="cta-get-started-btn">
                Get Started
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" data-testid="cta-demo-btn">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides loyalty programs, customer rewards solutions, and points-based loyalty systems for retail, restaurants, salons, and service businesses. Our POS-integrated loyalty software helps businesses increase customer retention and drive repeat visits.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoyaltyRewardsSolution;
