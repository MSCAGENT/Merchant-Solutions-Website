import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      title: 'Built for US/CAD Sales Partners',
      features: [
        'US and Canadian underwriting and banking partners',
        'Domestic support team',
        'US-based compliance standards',
        'Fast funding options'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Vested Residuals for Life of the Account',
      features: [
        'Competitive splits',
        'Lifetime residual ownership',
        'Portfolio growth support'
      ]
    },
    {
      icon: Shield,
      title: 'High-Risk Friendly Banks',
      features: [
        'CBD, supplements, telehealth',
        'Medical and healthcare billing',
        'Specialty retail and online merchants'
      ]
    },
    {
      icon: DollarSign,
      title: 'Upfront Commissions Paid Weekly',
      features: [
        'Fast upfront bonuses on new accounts',
        'Weekly commission payouts',
        'Transparent reporting and tracking'
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
      <Helmet>
        <title>Agent & ISO Partnership Program | Sell Payment Processing | Merchant Solutions Corp</title>
        <meta property="og:title" content="Agent & ISO Partnership Program | Sell Payment Processing | Merchant Solutions Corp" />
        <meta property="og:description" content="Join the Merchant Solutions Agent & ISO partnership program. Earn residual income selling payment processing and POS systems. Full training, support, and competitive revenue sharing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/partnerships" />
        <meta name="description" content="Join the Merchant Solutions Agent & ISO partnership program. Earn residual income selling payment processing and POS systems. Full training, support, and competitive revenue sharing." />
        <meta name="keywords" content="merchant services agent program, ISO partnership, sell payment processing, payment processing reseller, agent program, merchant services residual income, POS sales agent" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/partnerships" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Agent & ISO Partnership Program","serviceType":"Payment Processing Partnership Program","provider":{"@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com"},"areaServed":"United States","url":"https://merchantsolutionscorp.com/partnerships","description":"Partner with Merchant Solutions Corp as an agent or ISO to offer payment processing, POS systems, and merchant services."})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://merchantsolutionscorp.com/"},{"@type":"ListItem","position":2,"name":"Partnerships","item":"https://merchantsolutionscorp.com/partnerships"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com","logo":"https://customer-assets.emergentagent.com/job_merchant-central-11/artifacts/vmzehzol_MSC_1080x560.png","sameAs":["https://www.facebook.com/merchantsolutionscorp/","https://www.instagram.com/merchant_solutions_corp","https://www.linkedin.com/company/merchantsolutionscorp/","https://www.youtube.com/merchantsolutionscorp"]})}</script>
      </Helmet>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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

      {/* Banking Partners Carousel */}
      <section className="py-12 bg-white overflow-hidden" data-testid="bank-carousel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm uppercase tracking-widest text-gray-500 font-semibold mb-8">Our Banking & Processing Partners</p>
          <div className="relative">
            <div className="flex animate-scroll-logos gap-20 items-center">
              {[...Array(3)].map((_, setIdx) => (
                <React.Fragment key={setIdx}>
                  {[
                    { src: 'https://customer-assets.emergentagent.com/job_4a81af7b-38a3-4377-ab4c-9466c710fd1a/artifacts/vouaysa7_20190926pnc-e1739723769563.jpg', alt: 'PNC Bank', darkBg: false },
                    { src: 'https://customer-assets.emergentagent.com/job_4a81af7b-38a3-4377-ab4c-9466c710fd1a/artifacts/owe3xc69_axiom.png', alt: 'Axiom Bank', darkBg: true },
                    { src: 'https://customer-assets.emergentagent.com/job_4a81af7b-38a3-4377-ab4c-9466c710fd1a/artifacts/l3ci5xow_bmo-harris.png', alt: 'BMO Harris Bank', darkBg: false },
                    { src: 'https://customer-assets.emergentagent.com/job_4a81af7b-38a3-4377-ab4c-9466c710fd1a/artifacts/k779dpcw_Citizens_Bank_logo.png', alt: 'Citizens Bank', darkBg: false },
                    { src: 'https://customer-assets.emergentagent.com/job_4a81af7b-38a3-4377-ab4c-9466c710fd1a/artifacts/yuc83yv4_elec-pay-cbc.png', alt: 'Commercial Bank of California', darkBg: true },
                    { src: 'https://customer-assets.emergentagent.com/job_4a81af7b-38a3-4377-ab4c-9466c710fd1a/artifacts/iwo0z8xq_fresno%20bank.png', alt: 'Fresno First Bank', darkBg: false },
                    { src: 'https://customer-assets.emergentagent.com/job_4a81af7b-38a3-4377-ab4c-9466c710fd1a/artifacts/2tban0j0_Elavon_usbank_logo.png', alt: 'Elavon US Bank', darkBg: false },
                    { src: 'https://customer-assets.emergentagent.com/job_4a81af7b-38a3-4377-ab4c-9466c710fd1a/artifacts/l4akzr4j_NACHA.jpg', alt: 'NACHA', darkBg: false },
                    { src: 'https://customer-assets.emergentagent.com/job_4a81af7b-38a3-4377-ab4c-9466c710fd1a/artifacts/q4m10faw_OnePointLogo.png', alt: 'OnePoint', darkBg: false },
                    { src: 'https://customer-assets.emergentagent.com/job_4a81af7b-38a3-4377-ab4c-9466c710fd1a/artifacts/56bifjzm_paymentshub.png', alt: 'Payments Hub', darkBg: true }
                  ].map((logo, i) => (
                    <div key={`${setIdx}-${i}`} className="flex-shrink-0 h-14 w-44 flex items-center justify-center">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-full w-full object-contain"
                        style={{
                          filter: logo.darkBg ? 'grayscale(1) invert(1)' : 'grayscale(1)',
                          mixBlendMode: 'multiply'
                        }}
                      />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes scrollLogos {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-256px * 10)); }
          }
          .animate-scroll-logos {
            animation: scrollLogos 25s linear infinite;
            width: max-content;
          }
          .animate-scroll-logos:hover {
            animation-play-state: paused;
          }
        `}</style>
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

      {/* FAQ Section */}
      <section className="py-20 bg-white" data-testid="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'What kind of commission splits can I expect as a partner?', a: 'We offer competitive revenue splits tailored to your volume and business model. Whether you are an independent agent, sub-ISO, or referral partner, we structure commissions to reward performance. Upfront bonuses and lifetime residuals are standard across all partner tiers.' },
              { q: 'Are there any per-transaction or hidden costs?', a: 'No. We believe in transparent pricing. All fees are disclosed upfront during onboarding. There are no hidden per-transaction surcharges, monthly minimums you were not told about, or surprise deductions from your residuals.' },
              { q: 'What platforms and gateways do you support?', a: 'We support Clover, Square, Dejavoo, Ingenico, iTabPOS, NMI, Authorize.Net, and custom gateway integrations. Our platform flexibility means you can match the right solution to each merchant\'s needs.' },
              { q: 'What kind of support will I receive as an agent or sub-ISO?', a: 'You get a dedicated Business Development Manager, access to our partner portal, marketing materials, and direct technical support. We handle underwriting, compliance, and merchant onboarding so you can focus on selling.' },
              { q: 'Can I resell your hardware or software solutions?', a: 'Yes. Partners can resell POS terminals, payment hardware, and software solutions. We provide dealer pricing on Clover, Dejavoo, and Ingenico devices, and support white-label configurations for qualified partners.' },
              { q: 'How fast can I start boarding merchants?', a: 'Most partners are fully onboarded within 48 hours. Once approved, you can begin submitting merchant applications immediately through our partner portal. Underwriting turnaround is typically 24 to 48 hours for standard accounts.' },
              { q: 'Can I white-label Merchant Solutions Corp\'s services?', a: 'Yes. We offer white-label payment processing, branded merchant statements, and custom gateway portals for ISOs and ISVs who want to present services under their own brand.' },
              { q: 'Are your payment solutions secure?', a: 'Absolutely. All transactions are PCI DSS compliant. We support EMV chip, contactless NFC, point-to-point encryption, and tokenization across all supported terminals and gateways.' },
              { q: 'Can I track my residuals and referrals?', a: 'Yes. Our partner portal provides real-time reporting on residuals, commissions, merchant activity, and referral status. You have full visibility into your portfolio performance at all times.' },
              { q: 'What kind of technical support is provided?', a: 'We provide US-based technical support for all hardware and software issues. This includes POS installation assistance, gateway troubleshooting, and ongoing maintenance support for your merchants.' }
            ].map((item, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden" data-testid={`faq-item-${i}`}>
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 bg-white hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                  <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://calendly.com/mscpayments/new-agent-opportunity-one-on-one?back=1&month=2026-01" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white text-lg px-10 py-6 shadow-xl shadow-purple-600/20">
                Book a Call <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
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
