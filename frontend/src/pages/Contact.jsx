import React, { useState } from 'react';
import { Calendar as CalendarIcon, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { useToast } from '../hooks/use-toast';
import { submitContactForm, submitQuoteForm, submitDemoBooking } from '../mock';
import { format } from 'date-fns';

const Contact = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('contact');
  
  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  
  // Quote Form State
  const [quoteForm, setQuoteForm] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    monthlyVolume: '',
    averageTransaction: '',
    currentProcessor: '',
    additionalInfo: ''
  });
  
  // Demo Booking State
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    date: null
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const result = submitContactForm(contactForm);
    toast({
      title: 'Success!',
      description: result.message,
      duration: 5000
    });
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const result = submitQuoteForm(quoteForm);
    toast({
      title: 'Quote Request Received!',
      description: result.message,
      duration: 5000
    });
    setQuoteForm({
      businessName: '',
      contactName: '',
      email: '',
      phone: '',
      businessType: '',
      monthlyVolume: '',
      averageTransaction: '',
      currentProcessor: '',
      additionalInfo: ''
    });
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    if (!demoForm.date) {
      toast({
        title: 'Date Required',
        description: 'Please select a preferred date for your demo',
        variant: 'destructive'
      });
      return;
    }
    const result = submitDemoBooking(demoForm);
    toast({
      title: 'Demo Booked!',
      description: result.message,
      duration: 5000
    });
    setDemoForm({ name: '', email: '', phone: '', company: '', interest: '', date: null });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">Choose how you'd like to connect with us</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-sm p-1 border border-gray-200">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'contact'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => setActiveTab('quote')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'quote'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Get a Quote
            </button>
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'demo'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Book a Demo
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Form */}
          {activeTab === 'contact' && (
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Form</CardTitle>
                <CardDescription>Send us a message and we'll respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="contact-name">Full Name *</Label>
                    <Input
                      id="contact-name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email Address *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                      rows={5}
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Quote Request Form */}
          {activeTab === 'quote' && (
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Request a Custom Quote</CardTitle>
                <CardDescription>Tell us about your business and we'll create a tailored pricing plan</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleQuoteSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="quote-business-name">Business Name *</Label>
                      <Input
                        id="quote-business-name"
                        value={quoteForm.businessName}
                        onChange={(e) => setQuoteForm({ ...quoteForm, businessName: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="quote-contact-name">Contact Name *</Label>
                      <Input
                        id="quote-contact-name"
                        value={quoteForm.contactName}
                        onChange={(e) => setQuoteForm({ ...quoteForm, contactName: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="quote-email">Email Address *</Label>
                      <Input
                        id="quote-email"
                        type="email"
                        value={quoteForm.email}
                        onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="quote-phone">Phone Number *</Label>
                      <Input
                        id="quote-phone"
                        type="tel"
                        value={quoteForm.phone}
                        onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="quote-business-type">Business Type *</Label>
                    <Select
                      value={quoteForm.businessType}
                      onValueChange={(value) => setQuoteForm({ ...quoteForm, businessType: value })}
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="professional-services">Professional Services</SelectItem>
                        <SelectItem value="e-commerce">E-Commerce</SelectItem>
                        <SelectItem value="high-risk">High-Risk</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="quote-monthly-volume">Monthly Processing Volume *</Label>
                      <Select
                        value={quoteForm.monthlyVolume}
                        onValueChange={(value) => setQuoteForm({ ...quoteForm, monthlyVolume: value })}
                        required
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select volume" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-10k">$0 - $10,000</SelectItem>
                          <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                          <SelectItem value="500k+">$500,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="quote-avg-transaction">Average Transaction Amount</Label>
                      <Input
                        id="quote-avg-transaction"
                        placeholder="e.g., $50"
                        value={quoteForm.averageTransaction}
                        onChange={(e) => setQuoteForm({ ...quoteForm, averageTransaction: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="quote-current-processor">Current Payment Processor</Label>
                    <Input
                      id="quote-current-processor"
                      placeholder="e.g., Square, Stripe, etc."
                      value={quoteForm.currentProcessor}
                      onChange={(e) => setQuoteForm({ ...quoteForm, currentProcessor: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="quote-additional-info">Additional Information</Label>
                    <Textarea
                      id="quote-additional-info"
                      value={quoteForm.additionalInfo}
                      onChange={(e) => setQuoteForm({ ...quoteForm, additionalInfo: e.target.value })}
                      rows={4}
                      placeholder="Tell us about any specific needs or questions"
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Request Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Demo Booking Form */}
          {activeTab === 'demo' && (
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Book a Live Demo</CardTitle>
                <CardDescription>Schedule a personalized demo with our payment experts</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDemoSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="demo-name">Full Name *</Label>
                      <Input
                        id="demo-name"
                        value={demoForm.name}
                        onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="demo-company">Company Name *</Label>
                      <Input
                        id="demo-company"
                        value={demoForm.company}
                        onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="demo-email">Email Address *</Label>
                      <Input
                        id="demo-email"
                        type="email"
                        value={demoForm.email}
                        onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="demo-phone">Phone Number *</Label>
                      <Input
                        id="demo-phone"
                        type="tel"
                        value={demoForm.phone}
                        onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="demo-interest">What are you interested in? *</Label>
                    <Select
                      value={demoForm.interest}
                      onValueChange={(value) => setDemoForm({ ...demoForm, interest: value })}
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="payment-processing">Payment Processing</SelectItem>
                        <SelectItem value="pos-systems">POS Systems</SelectItem>
                        <SelectItem value="gateway">Payment Gateway</SelectItem>
                        <SelectItem value="high-risk">High-Risk Processing</SelectItem>
                        <SelectItem value="all">All Solutions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Preferred Demo Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal mt-1"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {demoForm.date ? format(demoForm.date, 'PPP') : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={demoForm.date}
                          onSelect={(date) => setDemoForm({ ...demoForm, date })}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Book Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Contact Information */}
        <div className="mt-16 max-w-6xl mx-auto">
          {/* Phone & Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 hover:border-purple-400 transition-all duration-300" data-testid="phone-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">Call Us</h3>
                    <div className="space-y-1">
                      <a href="tel:8884078886" className="block text-purple-600 font-semibold hover:text-purple-800 transition-colors" data-testid="phone-toll-free">(888) 407-8886</a>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Toll-Free</p>
                    </div>
                    <div className="space-y-1 mt-3">
                      <a href="tel:9549199688" className="block text-gray-700 font-medium hover:text-purple-600 transition-colors" data-testid="phone-direct">(954) 919-9688</a>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Direct Line</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-400 transition-all duration-300" data-testid="email-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">Email Us</h3>
                    <div className="space-y-2">
                      <div>
                        <a href="mailto:info@merchantsolutionscorp.com" className="text-purple-600 font-medium hover:text-purple-800 transition-colors text-sm" data-testid="email-info">info@merchantsolutionscorp.com</a>
                        <p className="text-xs text-gray-500">General Inquiries</p>
                      </div>
                      <div>
                        <a href="mailto:sales@merchantsolutionscorp.com" className="text-purple-600 font-medium hover:text-purple-800 transition-colors text-sm" data-testid="email-sales">sales@merchantsolutionscorp.com</a>
                        <p className="text-xs text-gray-500">Sales & Partnerships</p>
                      </div>
                      <div>
                        <a href="mailto:Support@merchantsolutionscorp.com" className="text-purple-600 font-medium hover:text-purple-800 transition-colors text-sm" data-testid="email-support">Support@merchantsolutionscorp.com</a>
                        <p className="text-xs text-gray-500">Technical Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 3 Office Locations */}
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-purple-400 transition-all duration-300" data-testid="location-orlando">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Orlando</h3>
                <p className="text-gray-600 text-sm">618 E South St</p>
                <p className="text-gray-600 text-sm">Orlando, FL 32801</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=618+E+South+St+Orlando+FL+32801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-purple-600 text-sm font-semibold hover:text-purple-800 transition-colors"
                >
                  Get Directions &rarr;
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-400 transition-all duration-300" data-testid="location-ftlauderdale">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Fort Lauderdale</h3>
                <p className="text-gray-600 text-sm">501 E Las Olas Blvd</p>
                <p className="text-gray-600 text-sm">Ft Lauderdale, FL 33301</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=501+E+Las+Olas+Blvd+Ft+Lauderdale+FL+33301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-purple-600 text-sm font-semibold hover:text-purple-800 transition-colors"
                >
                  Get Directions &rarr;
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-400 transition-all duration-300" data-testid="location-northmiami">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">North Miami</h3>
                <p className="text-gray-600 text-sm">1801 NE 123rd St</p>
                <p className="text-gray-600 text-sm">North Miami, FL 33181</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1801+NE+123rd+St+North+Miami+FL+33181"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-purple-600 text-sm font-semibold hover:text-purple-800 transition-colors"
                >
                  Get Directions &rarr;
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;