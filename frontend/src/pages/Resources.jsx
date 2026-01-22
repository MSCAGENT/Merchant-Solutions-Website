import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { mockData } from '../mock';

const Resources = () => {
  // Mock blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'How to Choose the Right Payment Processor for Your Business',
      excerpt: 'A comprehensive guide to selecting the perfect payment processing solution for your unique business needs.',
      category: 'payment-processing',
      date: '2025-01-15',
      author: 'Sarah Johnson'
    },
    {
      id: 2,
      title: 'Top 10 POS Systems for Restaurants in 2025',
      excerpt: 'Compare the best restaurant POS systems with features, pricing, and expert recommendations.',
      category: 'pos-systems',
      date: '2025-01-12',
      author: 'Michael Chen'
    },
    {
      id: 3,
      title: 'Understanding High-Risk Merchant Accounts',
      excerpt: 'Everything you need to know about high-risk payment processing and how to get approved.',
      category: 'high-risk',
      date: '2025-01-10',
      author: 'David Rodriguez'
    },
    {
      id: 4,
      title: 'Payment Processing Fees Explained: A Complete Breakdown',
      excerpt: 'Understand interchange fees, processing rates, and how to minimize your payment costs.',
      category: 'payment-processing',
      date: '2025-01-08',
      author: 'Emily Williams'
    },
    {
      id: 5,
      title: 'HIPAA-Compliant Payment Processing for Healthcare',
      excerpt: 'Essential guide to secure, compliant payment processing for medical practices.',
      category: 'healthcare',
      date: '2025-01-05',
      author: 'Dr. James Miller'
    },
    {
      id: 6,
      title: 'Clover vs Square: Which POS is Right for You?',
      excerpt: 'In-depth comparison of two popular POS systems to help you make the right choice.',
      category: 'pos-systems',
      date: '2025-01-03',
      author: 'Sarah Johnson'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Payment Processing Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert insights, guides, and industry trends to help your business succeed
            </p>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 lg:grid-cols-6 mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              {mockData.blogCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="border-2 hover:border-purple-400 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="aspect-video bg-gradient-to-br from-purple-100 to-yellow-100 rounded-lg mb-4 flex items-center justify-center">
                        <svg className="w-16 h-16 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Button variant="link" className="p-0 text-purple-600 hover:text-purple-700">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {mockData.blogCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.filter(post => post.category === category.id).map((post) => (
                    <Card key={post.id} className="border-2 hover:border-purple-400 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-6">
                        <div className="aspect-video bg-gradient-to-br from-purple-100 to-yellow-100 rounded-lg mb-4 flex items-center justify-center">
                          <svg className="w-16 h-16 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <Button variant="link" className="p-0 text-purple-600 hover:text-purple-700">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 text-purple-100">
            Subscribe to our newsletter for the latest payment processing insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;