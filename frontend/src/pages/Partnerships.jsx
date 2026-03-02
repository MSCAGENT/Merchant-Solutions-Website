import React from 'react';
import { CheckCircle, ChevronRight, Users, TrendingUp, Shield, DollarSign, Zap, Award, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Partnerships = () => {
  const partnerTypes = [
    'Independent merchant services agents',
    'Sub-ISOs and full ISOs',
    'Referral partners and consultants',
    'Software platforms and ISVs',
    'Marketing agencies serving SMBs'
  ];

  const industries = [
    'Retail',
    'Restaurants',
    'Healthcare',
    'High-risk industries'
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Built for US Sales Partners',
      features: [
        'US underwriting and banking partners',
        'Domestic support team',
        'US-based compliance standards',
        'Fast funding options'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Residuals That Last',
      features: [
        'Competitive splits',
        'Long-term residual ownership',
        'Portfolio growth support'
      ]
    },
    {
      icon: Shield,
      title: 'High-Risk Friendly',
      features: [
        'CBD, supplements, telehealth',
        'Medical and healthcare billing',
        'Specialty retail and online merchants'
      ]
    }
  ];

  const whatYouCanSell = [
    {
      title: 'Payment Processing',
      items: [
        'Retail and restaurant card processing',
        'Healthcare and medical offices',
        'High-risk and specialty merchants'
      ]
    },
    {
      title: 'Smart Terminals & POS',
      items: [
        'Android smart terminals',
        'Mobile and countertop devices',
        'Subscription or free placement options'
      ]
    },
    {
      title: 'Gateway & Virtual Terminal',
      items: [
        'Payment links',
        'Recurring billing',
        'Invoices and QR payments',
        'ACH and bank transfer support'
      ]
    },
    {
      title: 'APIs & ISV Tools',
      items: [
        'Embedded payments',
        'Software and EMR integrations',
        'White-label gateway access'
      ]
    },
    {
      title: 'Marketing Services & AI',
      items: [
        'Digital advertising for merchants (Google, Meta)',
        'AI-powered voice follow-up systems',
        'Automated SMS and email campaigns',
        'Social media content creation'
      ]
    },
    {
      title: 'Credit Repair & Business Lending',
      items: [
        'Merchant cash advances',
        'Business lines of credit',
        'Credit repair referral programs',
        'Working capital solutions'
      ]
    }
  ];

  const comparisonData = {
    msc: [
      'US-based underwriting',
      'High-risk accounts accepted',
      'White-label ready',
      'Multiple revenue streams',
      'Dedicated Business Development Manager',
      'Transparent residual reporting',
      'Scales from solo agent to full ISO'
    ],
    typical: [
      'Limited risk appetite',
      'One-size pricing models',
      'Generic branding',
      'Minimal agent support',
      'Delayed approvals',
      'Fragmented reporting'
    ]
  };

  const partnerSteps = [
    'Book a call with a Business Development Manager',
    'Sign NDA, Review agent, referral, or ISO structure',
    'Complete partner onboarding',
    'Start boarding US merchants',
    'Earn monthly residual income'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Sales Partners
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Merchant Services Agents, ISOs & Referral Partners
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                in the USA, Canada, Caribbean (USVI & PR)
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Partner with Merchant Solutions Corp.
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                A US-based payment partner for agents and ISOs who want:
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Strong residual income</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Fast merchant approvals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">White-label infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Direct support from real people</span>
                </div>
              </div>

              <a href="https://calendly.com/mscpayments/new-agent-opportunity-one-on-one?back=1&month=2026-01" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg">
                  Book a Call <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            {/* Right - Image */}
            <div className="hidden lg:block">
              <img 
                src="https://customer-assets.emergentagent.com/job_4a81af7b-38a3-4377-ab4c-9466c710fd1a/artifacts/6qa2fg84_img-87-1170x600.jpg" 
                alt="Successful merchant services agent partner"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg text-gray-600 mb-8">We serve businesses nationwide.</p>
          <div className="flex flex-wrap justify-center gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-purple-600">{industry}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">Coverage includes all 50 states.</p>
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_4a81af7b-38a3-4377-ab4c-9466c710fd1a/artifacts/vwz24uvi_services_card_issue_virtual_cards%20%281%29.jpg" 
                alt="Payment processing cloud banking and virtual card services"
                className="rounded-2xl w-full"
              />
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Who We Partner With
              </h2>
              
              <div className="space-y-4">
                {partnerTypes.map((type, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Agents Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
            Why Agents Choose Us Over Other ISOs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <ul className="space-y-3">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
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

      {/* What You Can Sell */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
                What You Can Sell
              </h2>
              
              <div className="space-y-8">
                {whatYouCanSell.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_4a81af7b-38a3-4377-ab4c-9466c710fd1a/artifacts/9x4cqgkc_img-payroll-plus.jpg" 
                alt="Agent managing merchant account processing"
                className="rounded-2xl shadow-xl w-full"
              />
              <img 
                src="https://customer-assets.emergentagent.com/job_4a81af7b-38a3-4377-ab4c-9466c710fd1a/artifacts/rt8lqjor_video-bg-2400-60.webp" 
                alt="Team collaborating on merchant solutions"
                className="rounded-2xl shadow-xl w-full mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Comparison: Merchant Solutions Corp vs Other ISO Programs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Merchant Solutions Corp */}
            <Card className="border-2 border-purple-600 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-purple-600 mb-6 text-center">
                  Merchant Solutions Corp
                </h3>
                <ul className="space-y-4">
                  {comparisonData.msc.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Typical ISO Program */}
            <Card className="border-2 border-gray-300 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-600 mb-6 text-center">
                  Typical ISO Program
                </h3>
                <ul className="space-y-4">
                  {comparisonData.typical.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters</h3>
            <div className="space-y-2 text-lg text-gray-600">
              <p>Other ISOs optimize for volume.</p>
              <p className="font-semibold text-purple-600">We optimize for partner growth.</p>
              <div className="mt-6 space-y-1">
                <p>You keep control.</p>
                <p>You build equity.</p>
                <p>You scale at your pace.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the Partner Process Works */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
            How the Partner Process Works
          </h2>
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              {partnerSteps.map((step, index) => (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-white">{index + 1}</span>
                    </div>
                    <span className="text-lg text-gray-700 mt-1">{step}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl font-semibold text-gray-900 mb-2">No fluff.</p>
              <p className="text-xl font-semibold text-gray-900 mb-2">No guessing.</p>
              <p className="text-xl font-semibold text-gray-900">Clear expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Partner?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Speak directly with a Business Development Manager.
          </p>
          <a href="https://calendly.com/mscpayments/new-agent-opportunity-one-on-one?back=1&month=2026-01" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-12 py-6 shadow-lg">
              Book a Call <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Local SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-600 leading-relaxed">
              Merchant Solutions Corp is a US-based payment processor supporting merchant services agents, ISOs, ISVs, and referral partners nationwide. We provide payment processing, smart terminals, gateways, APIs, and white-label solutions for retail, restaurant, healthcare, and high-risk businesses across the United States, Canada and the Caribbean.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
