import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CreditCard, Globe, Store, Shield, TrendingUp, Award, Clock, DollarSign, CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mockData } from '../mock';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogScroll, setBlogScroll] = useState(0);

  useEffect(() => {
    fetch(`${API_URL}/api/blog`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setBlogs(data.filter(p => p.published));
        }
      })
      .catch(() => {});
  }, []);
  const iconMap = {
    CreditCard, Globe, Store, Shield
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Merchant Solutions Corp | Payment Processing, POS Systems & Business Solutions</title>
        <meta property="og:title" content="Merchant Solutions Corp | Payment Processing, POS Systems & Business Solutions" />
        <meta property="og:description" content="Merchant Solutions Corp provides payment processing, POS systems, and merchant services for restaurants, retail, healthcare, and service businesses nationwide. Clover, Square, and custom solutions with next-day funding." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/" />
        <meta name="description" content="Merchant Solutions Corp provides payment processing, POS systems, and merchant services for restaurants, retail, healthcare, and service businesses nationwide. Clover, Square, and custom solutions with next-day funding." />
        <meta name="keywords" content="payment processing, merchant services, POS systems, credit card processing, Clover POS, Square POS, restaurant POS, retail POS, payment terminals, merchant account, business payment solutions" />
        <link rel="canonical" href="/" />
      </Helmet>
      {/* Video Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/5ih9ogjl_Power%20your%20entire%20business%20%20Square.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/75 via-purple-800/60 to-purple-600/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-5xl leading-tight drop-shadow-lg">
            Full-Service Payment Processing & POS Installation for Restaurants, Retail, Healthcare & more..
          </h1>
          <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-3xl">
            From free Clover, Square, Ingenico, and PAX POS systems to zero-fee payment processing, we install, program, and support everything, including your marketing, so you can focus on serving customers.
          </p>
          <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-3xl -mt-6">
            Book a call to see the Merchant Solutions difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg">
                Get a Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-6">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider">Trusted by Industry Leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {mockData.stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Payment Solutions</h2>
            <p className="text-xl text-gray-600">Everything you need to accept payments and grow your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.solutions.slice(0, 4).map((solution) => {
              const Icon = iconMap[solution.icon];
              return (
                <Card key={solution.id} className="border-2 hover:border-purple-400 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-yellow-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/solutions/${solution.id}`}>
                      <Button variant="link" className="mt-4 p-0 text-purple-600 hover:text-purple-700">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600">Tailored payment processing for your unique business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.industries.map((industry) => (
              <Card key={industry.id} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{industry.description}</p>
                  <Link to={`/industries/${industry.id}`} className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Merchant Solutions Corp?</h2>
            <p className="text-xl text-gray-600">The advantages that set us apart</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proprietary Gateway</h3>
              <p className="text-gray-600">99.99% uptime with lightning-fast processing speeds</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Approvals</h3>
              <p className="text-gray-600">15-25 minutes for Low Risk and 48-72 hours for High Risk industries</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees, no surprises - just honest pricing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">White-Label Ready</h3>
              <p className="text-gray-600">Fully customizable solutions for partners and ISOs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of businesses nationwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {blogs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">From Our Blog</h2>
                <p className="text-lg text-gray-600">Industry insights, guides, and resources</p>
              </div>
              <Link to="/resources/blog">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex gap-6 transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${blogScroll * 340}px)` }}
                >
                  {blogs.map((post) => (
                    <Link
                      key={post.id}
                      to={`/resources/blog/${post.slug}`}
                      className="flex-shrink-0 w-[320px] group"
                      data-testid={`blog-card-${post.slug}`}
                    >
                      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                        {post.featured_image ? (
                          <div className="h-48 overflow-hidden">
                            <img src={post.featured_image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          </div>
                        ) : (
                          <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                            <span className="text-white text-4xl font-bold opacity-30">{post.title?.charAt(0)}</span>
                          </div>
                        )}
                        <CardContent className="p-5">
                          {post.topic && (
                            <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">{post.topic}</span>
                          )}
                          <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">{post.title}</h3>
                          <p className="text-sm text-gray-500">{post.content_type || 'Article'}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
              {blogs.length > 3 && (
                <div className="flex justify-center gap-3 mt-8">
                  <button
                    onClick={() => setBlogScroll(Math.max(0, blogScroll - 1))}
                    disabled={blogScroll === 0}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 disabled:opacity-30 flex items-center justify-center transition-colors"
                    data-testid="blog-carousel-prev"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                  </button>
                  <button
                    onClick={() => setBlogScroll(Math.min(blogs.length - 3, blogScroll + 1))}
                    disabled={blogScroll >= blogs.length - 3}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 disabled:opacity-30 flex items-center justify-center transition-colors"
                    data-testid="blog-carousel-next"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Payment Processing?</h2>
          <p className="text-xl mb-8 text-purple-100">Join thousands of businesses that trust us with their payments</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg">
                Get Started Today
              </Button>
            </Link>
            <a href="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
                Talk to Sales
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;