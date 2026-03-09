import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  DollarSign,
  TrendingUp,
  Clock,
  FileText,
  Building2,
  Zap,
  BarChart3,
  Shield,
  Users,
  Calendar,
  CreditCard,
  Briefcase,
  Target,
  Percent,
  ArrowUpRight
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

const BusinessLoansSolution = () => {
  const keyBenefits = [
    { title: 'Fast Funding', desc: 'Funds in 24-48 hours' },
    { title: 'Easy Approval', desc: 'Based on sales history' },
    { title: 'Flexible Terms', desc: 'Payback as you earn' },
    { title: 'No Collateral', desc: 'Unsecured financing' }
  ];

  const fundingOptions = [
    { 
      icon: DollarSign, 
      title: 'Merchant Cash Advance', 
      desc: 'Get a lump sum based on future sales. Repay automatically as a percentage of daily transactions.',
      amount: '$5,000 - $500,000',
      applyUrl: 'https://cashbuoy.biz/client/merchantsolutionscorporation/4352/'
    },
    { 
      icon: Building2, 
      title: 'Business Line of Credit', 
      desc: 'Access funds when you need them. Only pay interest on what you use.',
      amount: '$10,000 - $250,000',
      applyUrl: 'https://lp.lendio.com/partners-low-lf?source=MerchantSolutionsCorp&affiliate=3808303628&medium=SRP'
    },
    { 
      icon: FileText, 
      title: 'Working Capital Loans', 
      desc: 'Short-term financing for inventory, payroll, or expansion.',
      amount: '$5,000 - $500,000',
      applyUrl: 'https://onboarding.fundomate.com/merchant-sign-up?partner=midwaycapitalusa'
    },
    { 
      icon: CreditCard, 
      title: 'Equipment Financing', 
      desc: 'Finance POS systems, kitchen equipment, or business tools.',
      amount: '$5,000 - $150,000',
      applyUrl: 'https://lp.lendio.com/partners-low-lf?source=MerchantSolutionsCorp&affiliate=3808303628&medium=SRP'
    },
    { 
      icon: Briefcase, 
      title: 'SBA Loans', 
      desc: 'Government-backed loans with competitive rates and longer terms for qualified businesses.',
      amount: '$25,000 - $5,000,000',
      applyUrl: 'https://lp.lendio.com/partners-low-lf?source=MerchantSolutionsCorp&affiliate=3808303628&medium=SRP'
    }
  ];

  const howItWorks = [
    { step: '1', title: 'Apply Online', desc: 'Simple application takes minutes' },
    { step: '2', title: 'Get Approved', desc: 'Decision within 24 hours' },
    { step: '3', title: 'Receive Funds', desc: 'Money deposited in 1-2 days' },
    { step: '4', title: 'Repay Flexibly', desc: 'Automatic payments from sales' }
  ];

  const requirements = [
    'Minimum 6 months in business',
    '$10,000+ monthly revenue',
    'Active merchant account',
    'Basic business documentation',
    'No minimum credit score',
    'All industries considered'
  ];

  const useCases = [
    'Inventory purchases',
    'Equipment upgrades',
    'Marketing campaigns',
    'Payroll coverage',
    'Expansion projects',
    'Emergency repairs',
    'Seasonal preparation',
    'Remodeling'
  ];

  const whyChoose = [
    { icon: Clock, title: 'Fast Decisions', desc: 'Know if you qualify within 24 hours' },
    { icon: Zap, title: 'Quick Funding', desc: 'Receive funds in as little as 24 hours' },
    { icon: Target, title: 'High Approval', desc: 'We approve businesses banks often decline' },
    { icon: Percent, title: 'Competitive Rates', desc: 'Transparent pricing with no hidden fees' }
  ];

  const industries = [
    'Restaurants',
    'Retail Stores',
    'Auto Repair',
    'Medical Practices',
    'Salons & Spas',
    'Construction',
    'Transportation',
    'eCommerce'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Business Loans & Merchant Cash Advance | Small Business Funding Solutions</title>
        <meta name="description" content="Business loans and merchant cash advances for small businesses. Fast funding, flexible terms, and working capital solutions through Merchant Solutions Corp and Lendio partnership." />
        <meta name="keywords" content="business loans, merchant cash advance, small business loans, business funding, working capital, SBA loans, business line of credit, merchant lending, fast business funding" />
        <link rel="canonical" href="/solutions/business-loans" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden bg-gray-900 flex items-center">
        <img
          src="https://images.unsplash.com/photo-1681505526188-b05e68c77582?auto=format&fit=crop&w=1920&q=80"
          alt="Business professionals shaking hands on funding deal"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/60 to-gray-900/70" />
        <div className="relative z-10 w-full py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Business Loans & Merchant Cash Advances
              </h1>
              
              <p className="text-xl text-purple-200 font-semibold mb-4">
                Fast Funding for Growing Businesses
              </p>
              
              <div className="text-lg text-gray-300 space-y-4 mb-8">
                <p>
                  Get the working capital you need to grow your business. Fast approvals, flexible repayment, and funding based on your sales—not just your credit score.
                </p>
                <p className="text-gray-400">
                  From $5,000 to $500,000 with funds available in as little as 24 hours.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-apply-btn">
                    Apply Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" data-testid="hero-learn-more-btn">
                    Check Your Options
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

      {/* Funding Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Funding Options</h2>
            <p className="text-lg text-gray-600">Choose the right financing for your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fundingOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-2 text-gray-900">{option.title}</h3>
                        <p className="text-gray-600 mb-3">{option.desc}</p>
                        <p className="text-purple-600 font-semibold mb-4">{option.amount}</p>
                        <a href={option.applyUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" data-testid={`apply-btn-${index}`}>
                            Apply Now
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple process, fast results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Simple Requirements</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                We look at your business performance, not just your credit score. If you have consistent sales, you likely qualify.
              </p>
              <div className="space-y-3">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]" data-testid="requirements-image">
              <img src="https://static.prod-images.emergentagent.com/jobs/ac3711b8-9a11-453d-a74b-57edf2c8d851/images/da4ad4d18a82d4deaf78dbba930476e40c387fad917b14e7912394395a765769.png" alt="Business owner reviewing loan application at desk" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden aspect-[4/3]" data-testid="use-cases-image">
              <img src="https://static.prod-images.emergentagent.com/jobs/ac3711b8-9a11-453d-a74b-57edf2c8d851/images/03bbf86154b2dea6cc2b667a4436f272e20b386c938676d949ecaff261b66d51.png" alt="Small business warehouse with inventory and POS system" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Use Your Funding For</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Business funding with no restrictions on how you use it. Invest in what matters most to your growth.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">Business funding designed for merchants</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Fund</h2>
            <p className="text-lg text-gray-600">Financing for businesses across all sectors</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 hover:border-purple-600 rounded-full px-6 py-3 text-gray-700 font-medium transition-all duration-300">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Apply in minutes and get funded in as little as 24 hours. No obligation to see what you qualify for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6" data-testid="cta-apply-btn">
                Apply Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" data-testid="cta-contact-btn">
                Speak to an Advisor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides business loans, merchant cash advances, working capital financing, and business lines of credit for small businesses across all 50 US states. Fast funding, flexible repayment options, and competitive rates for restaurants, retail, healthcare, and service businesses.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BusinessLoansSolution;
