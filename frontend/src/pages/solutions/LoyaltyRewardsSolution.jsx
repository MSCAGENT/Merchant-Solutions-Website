import React from 'react';
import { Helmet } from 'react-helmet-async';
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
    { name: 'Clover POS', desc: 'Built-in loyalty programs with points tracking, customer profiles, and automatic rewards at checkout.' },
    { name: 'Square POS', desc: 'Integrated rewards program with digital punch cards, customer directory, and visit tracking.' },
    { name: 'iTab POS', desc: 'Native loyalty program built directly into the iTab platform with custom rewards, points tracking, and customer engagement tools.' }
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
      <Helmet>
        <title>Loyalty & Rewards Programs | Customer Retention Solutions for Businesses</title>
        <meta property="og:title" content="Loyalty & Rewards Programs | Customer Retention Solutions for Businesses" />
        <meta property="og:description" content="Build customer loyalty with custom rewards programs. Points-based systems, tiered rewards, and digital loyalty cards integrated with your POS for restaurants, retail, and service businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/solutions/loyalty-rewards" />
        <meta name="description" content="Build customer loyalty with custom rewards programs. Points-based systems, tiered rewards, and digital loyalty cards integrated with your POS for restaurants, retail, and service businesses." />
        <meta name="keywords" content="loyalty program, rewards program, customer loyalty, loyalty cards, points program, customer retention, restaurant loyalty program, retail rewards, POS loyalty integration" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/solutions/loyalty-rewards" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Loyalty & Rewards Program","serviceType":"Customer Loyalty and Rewards Solutions","provider":{"@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com"},"areaServed":"United States","url":"https://merchantsolutionscorp.com/solutions/loyalty-rewards","description":"Customer loyalty and rewards program solutions to increase repeat business and customer retention."})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://merchantsolutionscorp.com/"},{"@type":"ListItem","position":2,"name":"Solutions","item":"https://merchantsolutionscorp.com/solutions/payment-processing"},{"@type":"ListItem","position":3,"name":"Loyalty & Rewards","item":"https://merchantsolutionscorp.com/solutions/loyalty-rewards"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com","logo":"https://customer-assets.emergentagent.com/job_merchant-central-11/artifacts/vmzehzol_MSC_1080x560.png","sameAs":["https://www.facebook.com/merchantsolutionscorp/","https://www.instagram.com/merchant_solutions_corp","https://www.linkedin.com/company/merchantsolutionscorp/","https://www.youtube.com/merchantsolutionscorp"]})}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden bg-gray-900 flex items-center">
        <img
          src="https://images.unsplash.com/photo-1758520387575-9d72f7a3e4c5?auto=format&fit=crop&w=1920&q=80"
          alt="Happy customers with shopping bags in a retail store"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/60 to-gray-900/70" />
        <div className="relative z-10 w-full py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Loyalty & Rewards Programs for Business
              </h1>
              
              <p className="text-xl text-purple-200 font-semibold mb-4">
                Build Customer Loyalty and Drive Repeat Business
              </p>
              
              <div className="text-lg text-gray-300 space-y-4 mb-8">
                <p>
                  Turn one-time buyers into loyal customers with integrated loyalty and rewards programs. Track points, offer rewards, and build lasting relationships.
                </p>
                <p className="text-gray-400">
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
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" data-testid="hero-demo-btn">
                    Request Demo
                  </Button>
                </Link>
              </div>
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
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">POS-Integrated Loyalty Programs</h2>
            </div>
            <p className="text-xl text-purple-600 font-medium mb-2">Works with Your Existing System</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our loyalty programs run natively through your POS system. Points are tracked automatically at checkout with no extra hardware or third-party apps required.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posIntegration.map((pos, index) => (
              <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-5">
                    <CreditCard className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pos.name}</h3>
                  <p className="text-gray-600">{pos.desc}</p>
                </CardContent>
              </Card>
            ))}
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
