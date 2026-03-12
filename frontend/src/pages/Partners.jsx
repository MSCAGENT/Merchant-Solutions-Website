import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Building2, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mockData } from '../mock';

const Partners = () => {
  const iconMap = { TrendingUp, Users, Building2, Briefcase };
  const icons = [TrendingUp, Users, Building2, Briefcase];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Our Partners | Technology & Service Partners | Merchant Solutions Corp</title>
        <meta property="og:title" content="Our Partners | Technology & Service Partners | Merchant Solutions Corp" />
        <meta property="og:description" content="Explore Merchant Solutions Corp technology and service partners. Clover, Square, PayAnywhere, Dejavoo, Ingenico, DaySmart, and more powering business payment solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/company/partners" />
        <meta name="description" content="Explore Merchant Solutions Corp technology and service partners. Clover, Square, PayAnywhere, Dejavoo, Ingenico, DaySmart, and more powering business payment solutions." />
        <meta name="keywords" content="payment processing partners, Clover partner, Square partner, POS technology partners, merchant services partners, payment industry partners" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/partners/agents" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://merchantsolutionscorp.com/"},{"@type":"ListItem","position":2,"name":"Partners","item":"https://merchantsolutionscorp.com/partners/agents"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Merchant Solutions Corp","url":"https://merchantsolutionscorp.com","logo":"https://customer-assets.emergentagent.com/job_merchant-central-11/artifacts/vmzehzol_MSC_1080x560.png","sameAs":["https://www.facebook.com/merchantsolutionscorp/","https://www.instagram.com/merchant_solutions_corp","https://www.linkedin.com/company/merchantsolutionscorp/","https://www.youtube.com/merchantsolutionscorp"]})}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our network of successful partners and grow your business with industry-leading payment solutions
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg text-white">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Partnership Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockData.partners.map((partner, index) => {
              const Icon = icons[index % icons.length];
              return (
                <Card key={partner.id} className="border-2 hover:border-purple-400 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-yellow-400 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{partner.title}</h3>
                    <p className="text-gray-600 mb-6">{partner.description}</p>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2 mb-6">
                      {partner.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <h3 className="text-xl font-semibold mb-3">Partner Retention</h3>
                <p className="text-gray-600">Industry-leading partner satisfaction and retention rate</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-yellow-500 mb-2">24/7</div>
                <h3 className="text-xl font-semibold mb-3">Partner Support</h3>
                <p className="text-gray-600">Dedicated support team available around the clock</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-purple-600 mb-2">$5B+</div>
                <h3 className="text-xl font-semibold mb-3">Annual Volume</h3>
                <p className="text-gray-600">Trusted to process billions in transactions yearly</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for talented individuals to join our growing team
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg text-white">
              View Open Positions
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Together?</h2>
          <p className="text-xl mb-8 text-purple-100">Start your partnership journey with us today</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Contact Partnership Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Partners;