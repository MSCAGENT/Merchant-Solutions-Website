import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, MapPin, Wrench, GraduationCap, ClipboardCheck, Server, Network, Shield, Headphones } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';

const ITServices = () => {
  const services = [
    {
      icon: MapPin,
      title: 'Site Surveys & Infrastructure Mapping',
      description: 'Comprehensive on-site assessment of your current technology infrastructure, network layout, and hardware requirements.',
      features: [
        'Physical site assessment and documentation',
        'Network topology mapping',
        'Equipment inventory and condition analysis',
        'Power and connectivity evaluation',
        'Security vulnerability assessment'
      ]
    },
    {
      icon: Wrench,
      title: 'Installation Services',
      description: 'Professional installation of POS systems, terminals, networking equipment, and payment infrastructure.',
      features: [
        'POS hardware setup and configuration',
        'Network switch and router installation',
        'Cabling and structured wiring',
        'Peripheral device installation',
        'System integration and testing'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Training Programs',
      description: 'Hands-on training for your staff to ensure seamless adoption and operation of new systems.',
      features: [
        'POS operation and daily procedures',
        'Troubleshooting basics',
        'Security best practices',
        'Reporting and analytics training',
        'Manager and admin-level training'
      ]
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description: '24/7 technical support and maintenance services to keep your systems running smoothly.',
      features: [
        'Remote diagnostics and support',
        'On-site emergency response',
        'Software updates and patches',
        'Hardware replacement services',
        'Periodic system health checks'
      ]
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We discuss your business needs, current setup, and goals to create a customized IT plan.'
    },
    {
      step: '2',
      title: 'Site Survey',
      description: 'Our technicians visit your location to assess infrastructure and document requirements.'
    },
    {
      step: '3',
      title: 'Proposal & Planning',
      description: 'We provide a detailed proposal including equipment, timeline, and pricing.'
    },
    {
      step: '4',
      title: 'Installation',
      description: 'Professional installation with minimal disruption to your business operations.'
    },
    {
      step: '5',
      title: 'Training & Go-Live',
      description: 'Comprehensive training for your team followed by system activation.'
    },
    {
      step: '6',
      title: 'Ongoing Support',
      description: 'Continuous monitoring, maintenance, and 24/7 support for peace of mind.'
    }
  ];

  const benefits = [
    {
      icon: ClipboardCheck,
      title: 'Turnkey Solutions',
      description: 'Complete end-to-end IT services from assessment to deployment and beyond.'
    },
    {
      icon: Server,
      title: 'Expert Technicians',
      description: 'Certified professionals with years of experience in payment systems and IT infrastructure.'
    },
    {
      icon: Network,
      title: 'Seamless Integration',
      description: 'Ensure all your systems work together efficiently for optimal business performance.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'PCI-compliant installations with built-in security protocols and best practices.'
    }
  ];

  const industries = [
    {
      name: 'Restaurants & Hospitality',
      description: 'POS systems, kitchen display systems, tableside ordering, and network infrastructure for multi-location dining establishments.'
    },
    {
      name: 'Retail Stores',
      description: 'Checkout systems, inventory management, security cameras, and reliable networking for smooth retail operations.'
    },
    {
      name: 'Healthcare Facilities',
      description: 'HIPAA-compliant systems, patient check-in kiosks, payment terminals, and secure network configurations.'
    },
    {
      name: 'Multi-Location Businesses',
      description: 'Standardized IT deployments across multiple sites with centralized management and reporting.'
    }
  ];

  const faqs = [
    {
      question: 'What areas do you service?',
      answer: 'We provide on-site IT services across all 50 US states, Canada, and the Caribbean. Our network of certified technicians ensures timely service regardless of your location.'
    },
    {
      question: 'How long does a typical installation take?',
      answer: 'Installation time varies based on the scope of the project. A single-location setup typically takes 1-2 days, while multi-location deployments are scheduled to minimize business disruption.'
    },
    {
      question: 'Do you provide after-hours installation?',
      answer: 'Yes, we offer flexible scheduling including nights and weekends to accommodate your business hours and minimize operational impact.'
    },
    {
      question: 'What equipment do you install?',
      answer: 'We install a wide range of equipment including POS terminals, payment devices, networking hardware, servers, security systems, and cabling infrastructure.'
    },
    {
      question: 'Is training included with installation?',
      answer: 'Yes, all our installation packages include comprehensive training for your staff. Additional training sessions can be scheduled as needed.'
    },
    {
      question: 'What happens if something breaks after installation?',
      answer: 'Our ongoing support packages include remote troubleshooting, on-site repairs, and hardware replacement services. We typically respond to critical issues within hours.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              On-Site IT Services for Payment Systems & Business Infrastructure
            </h1>
            
            <div className="text-lg text-gray-700 space-y-4 mb-8">
              <p>
                Professional site surveys, installation, and training services to get your payment systems and IT infrastructure up and running smoothly.
              </p>
              <p>
                Merchant Solutions Corp provides comprehensive on-site IT services across the United States, Canada, and the Caribbean.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-get-quote-btn">
                  Get a Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6" data-testid="hero-schedule-survey-btn">
                  Schedule a Survey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Our IT Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From initial assessment to ongoing support, we provide end-to-end IT services for your business.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300" data-testid={`service-card-${index}`}>
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 pl-18">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
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

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-12">Our streamlined process ensures a smooth experience from start to finish.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {processSteps.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg" data-testid={`process-step-${index}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Our IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 text-center" data-testid={`benefit-card-${index}`}>
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300" data-testid={`industry-card-${index}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Upgrade Your IT Infrastructure?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Schedule a free site survey and get a customized IT solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6" data-testid="cta-schedule-btn">
                Schedule a Survey
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" data-testid="cta-contact-btn">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Local SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            Professional on-site IT services available across all 50 US states, Canada, and the Caribbean. Contact us for service in your area.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ITServices;
