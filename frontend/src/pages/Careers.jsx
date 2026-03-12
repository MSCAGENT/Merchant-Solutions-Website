import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ChevronRight, Lock, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const Careers = () => {
  const positions = [
    {
      id: 'internal-account-manager',
      title: 'Internal Account Manager',
      department: 'Sales',
      location: 'Florida',
      type: 'Full-Time',
      open: true,
      description: 'Manage and grow existing merchant accounts. Build strong relationships with clients, identify upsell opportunities, and ensure merchant satisfaction across our portfolio.',
      responsibilities: [
        'Manage a portfolio of active merchant accounts',
        'Identify and close upsell and cross-sell opportunities',
        'Coordinate with operations and support teams',
        'Meet monthly revenue and retention targets',
        'Provide regular account reviews and reporting'
      ]
    },
    {
      id: 'vp-operations',
      title: 'Vice President of Operations',
      department: 'Operations',
      location: 'Florida',
      type: 'Full-Time',
      open: false,
      description: 'Lead and optimize all operational functions across the organization including merchant onboarding, support, and fulfillment.'
    },
    {
      id: 'marketing-director',
      title: 'Marketing Director',
      department: 'Marketing',
      location: 'Florida / Remote',
      type: 'Full-Time',
      open: false,
      description: 'Develop and execute comprehensive marketing strategies to drive brand awareness, lead generation, and merchant acquisition.'
    },
    {
      id: 'sales-trainer',
      title: 'Sales Trainer / Mentor',
      department: 'Sales',
      location: 'Florida',
      type: 'Full-Time',
      open: false,
      description: 'Train and mentor sales representatives on products, pricing, objection handling, and closing strategies across our full suite of payment solutions.'
    },
    {
      id: 'it-manager',
      title: 'IT Manager',
      department: 'Technology',
      location: 'Florida',
      type: 'Full-Time',
      open: false,
      description: 'Oversee IT infrastructure, system integrations, security protocols, and technical support for internal teams and merchant-facing systems.'
    },
    {
      id: 'marketing-associate',
      title: 'Marketing Associate',
      department: 'Marketing',
      location: 'Florida / Remote',
      type: 'Full-Time',
      open: false,
      description: 'Support marketing initiatives including campaign execution, content creation, email marketing, and performance analytics.'
    },
    {
      id: 'content-manager',
      title: 'Content Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-Time',
      open: false,
      description: 'Develop and manage content strategy across web, blog, social media, and email. Create SEO-optimized content that drives organic traffic and merchant conversions.'
    },
    {
      id: 'social-media-manager',
      title: 'Social Media Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-Time',
      open: false,
      description: 'Manage social media presence across all platforms. Create engaging content, manage community interactions, and drive brand awareness.'
    },
    {
      id: 'admin-assistant',
      title: 'Administrative Assistant',
      department: 'Operations',
      location: 'Florida',
      type: 'Full-Time',
      open: false,
      description: 'Provide administrative support to leadership and operations teams. Manage scheduling, correspondence, filing, and office coordination.'
    },
    {
      id: 'it-install-associate',
      title: 'IT Install Associate',
      department: 'Technology',
      location: 'Florida / Field',
      type: 'Full-Time',
      open: false,
      description: 'Install, configure, and troubleshoot POS hardware and payment terminals at merchant locations. Provide on-site training and technical support.'
    },
    {
      id: 'customer-support',
      title: 'Customer Support Representative',
      department: 'Support',
      location: 'Florida / Remote',
      type: 'Full-Time',
      open: false,
      description: 'Provide front-line support to merchants via phone, email, and chat. Troubleshoot technical issues, answer billing questions, and ensure merchant satisfaction.'
    },
    {
      id: 'customer-retention',
      title: 'Customer Retention Specialist',
      department: 'Support',
      location: 'Florida',
      type: 'Full-Time',
      open: false,
      description: 'Proactively engage at-risk merchants to resolve concerns, offer solutions, and retain accounts. Analyze churn patterns and implement retention strategies.'
    }
  ];

  const openPositions = positions.filter(p => p.open);
  const closedPositions = positions.filter(p => !p.open);

  const benefits = [
    'Competitive salary and commission structure',
    'Health, dental, and vision insurance',
    'Paid time off and holidays',
    'Professional development opportunities',
    'Dynamic and growing team environment',
    'Career advancement paths'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Careers at Merchant Solutions Corp | Payment Industry Jobs</title>
        <meta property="og:title" content="Careers at Merchant Solutions Corp | Payment Industry Jobs" />
        <meta property="og:description" content="Join the Merchant Solutions Corp team. Explore career opportunities in payment processing, sales, technology, and customer support. Build your career in the fintech industry." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/company/careers" />
        <meta name="description" content="Join the Merchant Solutions Corp team. Explore career opportunities in payment processing, sales, technology, and customer support. Build your career in the fintech industry." />
        <meta name="keywords" content="payment processing careers, merchant services jobs, fintech careers, payment industry jobs, POS sales jobs, merchant solutions careers" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/partnerships/careers" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://merchantsolutionscorp.com/"},{"@type":"ListItem","position":2,"name":"Partnerships","item":"https://merchantsolutionscorp.com/partnerships"},{"@type":"ListItem","position":3,"name":"Careers","item":"https://merchantsolutionscorp.com/partnerships/careers"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com","logo":"https://customer-assets.emergentagent.com/job_merchant-central-11/artifacts/vmzehzol_MSC_1080x560.png","sameAs":["https://www.facebook.com/merchantsolutionscorp/","https://www.instagram.com/merchant_solutions_corp","https://www.linkedin.com/company/merchantsolutionscorp/","https://www.youtube.com/merchantsolutionscorp"]})}</script>
      </Helmet>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="careers-hero-title">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Help businesses grow with better payment solutions. We're building the future of merchant services — and we want you on the team.
          </p>
          <a href="#open-positions">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg">
              View Open Positions
            </Button>
          </a>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">Why Merchant Solutions Corp</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Build Your Career in Payments</h2>
              <p className="text-lg text-gray-600 mb-8">
                Merchant Solutions Corp is a fast-growing payment processing company serving businesses across the US, Canada, Puerto Rico, and USVI. We value innovation, integrity, and results.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '60+', label: 'Pages of Solutions' },
                { num: 'US/CA/PR', label: 'Markets Served' },
                { num: '1000s', label: 'Merchants Supported' },
                { num: 'Growing', label: 'Team & Opportunities' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 text-center">
                  <p className="text-2xl font-bold text-purple-600">{stat.num}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">Currently accepting applications</p>
          </div>

          {openPositions.map((position) => (
            <Card key={position.id} className="border-2 border-purple-600 shadow-lg mb-6">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Now Hiring</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" />{position.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{position.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{position.type}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{position.description}</p>
                {position.responsibilities && (
                  <div className="mb-6">
                    <p className="font-semibold text-gray-800 mb-3">Key Responsibilities:</p>
                    <div className="space-y-2">
                      {position.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <a href="mailto:careers@merchantsolutionscorp.com?subject=Application: Internal Account Manager - Florida">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                    Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Closed Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Previously Listed Positions</h2>
            <p className="text-lg text-gray-600">These positions are currently closed. Check back for future openings.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {closedPositions.map((position) => (
              <AccordionItem key={position.id} value={position.id} className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:text-purple-600">
                  <div className="flex items-center gap-3 w-full pr-4">
                    <Lock className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="font-semibold text-gray-900">{position.title}</span>
                    <span className="ml-auto bg-gray-100 text-gray-500 text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0">Closed</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" />{position.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{position.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{position.type}</span>
                  </div>
                  <p>{position.description}</p>
                  <p className="mt-3 text-sm text-gray-400 italic">This position is currently not accepting applications.</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See the Right Role?</h2>
          <p className="text-xl text-purple-100 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a href="mailto:careers@merchantsolutionscorp.com?subject=General Application - Merchant Solutions Corp">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
              Send Your Resume
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;
