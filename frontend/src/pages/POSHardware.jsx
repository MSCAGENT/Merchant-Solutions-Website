import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { mockData } from '../mock';

const POSHardware = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              POS Systems & Hardware
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Industry-leading point-of-sale solutions and payment terminals for every business
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg text-white">
                Find Your Perfect POS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hardware Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="Clover" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              {mockData.posHardware.map((category) => (
                <TabsTrigger key={category.category} value={category.category} className="text-lg">
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {mockData.posHardware.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {category.devices.map((device) => (
                    <Card key={device.id} className="border-2 hover:border-purple-400 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="aspect-square bg-gradient-to-br from-purple-100 to-yellow-100 rounded-lg mb-4 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{device.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{device.description}</p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-purple-600">{device.price}</span>
                        </div>
                        <ul className="space-y-2 mb-6">
                          {device.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link to="/contact">
                          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg">
                            Get Quote
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Our POS Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Competitive Pricing</h3>
                <p className="text-gray-600">Get the best rates on hardware and processing fees</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Easy Integration</h3>
                <p className="text-gray-600">Seamlessly integrate with your existing systems</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
                <p className="text-gray-600">24/7 technical support and training included</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Find the Perfect POS for Your Business</h2>
          <p className="text-xl mb-8 text-purple-100">Let our experts help you choose the right hardware</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Get Recommendation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default POSHardware;