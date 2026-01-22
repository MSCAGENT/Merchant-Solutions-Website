import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, CheckCircle, FileCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Security = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Security & Compliance
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Bank-level security and industry-leading compliance standards protect your business and customers
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Industry-Leading Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 hover:border-purple-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">PCI DSS Level 1</h3>
                <p className="text-gray-600">Highest level of payment card industry compliance</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-purple-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">256-bit Encryption</h3>
                <p className="text-gray-600">Military-grade encryption for all transactions</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-purple-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tokenization</h3>
                <p className="text-gray-600">Secure token vault protects sensitive card data</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-purple-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fraud Prevention</h3>
                <p className="text-gray-600">Advanced AI-powered fraud detection systems</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Compliance Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">PCI DSS Compliance</h3>
                <p className="text-gray-600 mb-4">We maintain the highest level of PCI DSS certification, ensuring that all payment data is processed, stored, and transmitted securely.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    Annual security audits
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    Quarterly network scans
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    Continuous monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">HIPAA Compliance</h3>
                <p className="text-gray-600 mb-4">Healthcare merchants can trust our HIPAA-compliant payment solutions to protect patient information and maintain compliance.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    Encrypted data transmission
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    Secure patient portals
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    Audit trail logging
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">GDPR & Privacy</h3>
                <p className="text-gray-600 mb-4">We comply with international data protection regulations including GDPR, ensuring customer privacy and data rights.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    Data privacy controls
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    Right to deletion
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    Consent management
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Security Commitment</h2>
              <p className="text-lg text-gray-600 mb-8">
                Security is not just a feature - it's the foundation of everything we do. We invest heavily in cutting-edge security technology, regular audits, and employee training to ensure your data and your customers' data remain protected at all times.
              </p>
              <div className="text-5xl font-bold text-purple-600 mb-4">99.99%</div>
              <p className="text-xl text-gray-700">Uptime Guarantee with 24/7 Monitoring</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Secure Payment Processing?</h2>
          <p className="text-xl mb-8 text-purple-100">Experience the peace of mind that comes with enterprise-grade security</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Get Started Securely
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Security;