import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronRight, Wrench, MapPin, Users, Monitor, Cable, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const ITServices = () => {
  const services = [
    {
      icon: MapPin,
      title: 'On-Site Visit & Survey',
      description: 'We come to your business location to assess your space, current setup, and specific needs'
    },
    {
      icon: Monitor,
      title: 'IT Infrastructure Mapping',
      description: 'Complete mapping of your existing technology infrastructure, network, and payment systems'
    },
    {
      icon: Cable,
      title: 'Professional Installation',
      description: 'Expert line drops and installation of all necessary equipment and systems'
    },
    {
      icon: GraduationCap,
      title: 'Comprehensive Training',
      description: 'On-site basic training for staff and remote management training for leadership'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Schedule Site Survey',
      description: 'Contact us to schedule a free on-site assessment of your business location'
    },
    {
      step: 2,
      title: 'Infrastructure Assessment',
      description: 'Our technicians map your current IT infrastructure and identify requirements'
    },
    {
      step: 3,
      title: 'Custom Installation Plan',
      description: 'We create a detailed plan for line drops, equipment placement, and integration'
    },
    {
      step: 4,
      title: 'Professional Installation',
      description: 'Expert installation of all payment systems, POS terminals, and network equipment'
    },
    {
      step: 5,
      title: 'On-Site Training',
      description: 'Basic hands-on training for your staff on day-to-day operations'
    },
    {
      step: 6,
      title: 'Management Training',
      description: 'Remote training sessions for managers on reporting, settings, and administration'
    }
  ];

  const benefits = [
    'Zero guesswork - expert assessment before installation',
    'Professional line drops and network setup',
    'All equipment installed and tested on-site',
    'Staff ready to process payments immediately',
    'Ongoing support and remote management training',
    'Single point of contact for all technical needs'
  ];

  const whatWeInstall = [
    'Payment terminals and POS systems',
    'Network infrastructure and wiring',
    'Receipt printers and cash drawers',
    'Customer displays and PIN pads',
    'Back-office systems and reporting tools',
    'Integration with existing software'
  ];

  const idealFor = [
    {
      business: 'Restaurants',
      reason: 'Multiple terminals, kitchen integration, tableside systems'
    },
    {
      business: 'Retail Stores',
      reason: 'Multi-location setups, inventory integration, customer displays'
    },
    {
      business: 'Healthcare Offices',
      reason: 'HIPAA-compliant systems, EMR integration, patient check-in'
    },
    {
      business: 'New Businesses',
      reason: 'Complete setup from scratch, no existing infrastructure needed'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>IT Services & POS Installation | Network Setup & Technical Support</title>
        <meta name="description" content="Professional IT services for businesses including POS installation, network setup, system configuration, and ongoing technical support. Nationwide service by certified technicians." />
        <meta name="keywords" content="POS installation service, IT services, network setup, POS technical support, business IT support, POS system setup, restaurant IT services" />
        <link rel="canonical" href="/it-services" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Exclusive Service
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Professional IT Services & Installation
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Complete on-site installation, infrastructure setup, and training for your payment systems and technology.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                An exclusive offering from Merchant Solutions Corp - we handle everything from site survey to staff training, so you can focus on running your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg">
                    Schedule Site Survey
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6">
                    Learn More <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-purple-100 to-yellow-100 rounded-3xl p-8 flex items-center justify-center shadow-xl">
                  <Wrench className="w-64 h-64 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
            Complete IT Services Package
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16">
            Everything you need for a professional installation
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            How Our IT Services Work
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((item, index) => (
              <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                <CardContent className="p-6 flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Install */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - What We Install */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What We Install & Configure
              </h2>
              <div className="space-y-4">
                {whatWeInstall.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Why Choose Professional Installation?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Ideal For These Businesses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {idealFor.map((item, index) => (
              <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.business}</h3>
                  <p className="text-gray-600">{item.reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Comprehensive Training Included
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-purple-600 shadow-xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">On-Site Staff Training</h3>
                <p className="text-gray-600 mb-4">
                  Basic hands-on training for your team at your location during installation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Processing transactions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Handling refunds and voids</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Printing receipts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Basic troubleshooting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-600 shadow-xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Monitor className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Remote Management Training</h3>
                <p className="text-gray-600 mb-4">
                  Detailed training sessions for managers on all administrative functions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Reporting and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Settings and configurations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">User management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Advanced features</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Why Professional IT Services Matter
          </h2>
          <div className="space-y-4 text-lg text-gray-600">
            <p>
              Setting up payment systems isn't just about plugging in equipment. It requires understanding your business workflow, properly configuring networks, and ensuring everything integrates seamlessly.
            </p>
            <p>
              Our exclusive IT Services eliminate the guesswork, prevent costly mistakes, and get your team up and running fast.
            </p>
            <p className="text-xl font-semibold text-purple-600">
              Done right. The first time. By experts.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready for Professional Installation?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Schedule your free site survey and get a custom installation plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg">
                Schedule Site Survey
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
                Contact Our Team <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Local SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            Professional IT services and installation available for businesses across the United States, Canada, and the Caribbean. Serving retail, restaurant, healthcare, and service businesses with complete technology infrastructure setup and training.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ITServices;
