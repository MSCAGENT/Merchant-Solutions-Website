import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('contact');

  useEffect(() => {
    // Load Lead Connector script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
      <Helmet>
        <title>Contact Us | Merchant Solutions Corp | Payment Processing Support</title>
        <meta name="description" content="Contact Merchant Solutions Corp for payment processing, POS systems, and merchant services. Call (888) 407-8886 or fill out our form for a free consultation." />
        <meta name="keywords" content="contact merchant solutions, payment processing support, merchant services phone number, POS system consultation, credit card processing help" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-testid="contact-heading">Get in Touch</h1>
          <p className="text-lg text-gray-600">Choose how you'd like to connect with us</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-lg shadow-sm p-1 border border-gray-200">
            <button
              onClick={() => setActiveTab('contact')}
              data-testid="tab-contact"
              className={`px-8 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'contact'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => setActiveTab('quote')}
              data-testid="tab-quote"
              className={`px-8 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'quote'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Get a Quote
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form Embed */}
          <div className="lg:col-span-2">
            {activeTab === 'contact' && (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden" data-testid="contact-form-container">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A"
                  className="w-full border-0 rounded-2xl"
                  style={{ height: '80vh', minHeight: '600px' }}
                  title="Contact Us"
                  scrolling="auto"
                />
              </div>
            )}

            {activeTab === 'quote' && (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden" data-testid="quote-form-container">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/uogAqfC9gsxSCkaKRCLw"
                  className="w-full border-0 rounded-2xl"
                  style={{ height: '80vh', minHeight: '600px' }}
                  title="Get a Quote"
                  scrolling="auto"
                />
              </div>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:8884078886" className="text-gray-900 font-semibold hover:text-purple-600 transition-colors">(888) 407-8886</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:info@merchantsolutionscorp.com" className="text-gray-900 font-semibold hover:text-purple-600 transition-colors">info@merchantsolutionscorp.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-900 font-semibold">1801 NE 123rd St #314</p>
                    <p className="text-gray-600">North Miami, FL 33181</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Business Hours</p>
                    <p className="text-gray-900 font-semibold">Mon - Fri: 9AM - 6PM EST</p>
                    <p className="text-gray-600">Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-3">Need Immediate Help?</h3>
              <p className="text-purple-100 mb-6 text-sm">Our payment experts are standing by to help you find the perfect solution for your business.</p>
              <a href="tel:8884078886">
                <button className="w-full bg-white text-purple-600 font-semibold py-3 rounded-lg hover:bg-purple-50 transition-colors" data-testid="call-now-btn">
                  Call (888) 407-8886
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
