import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  DollarSign,
  Clock,
  Users,
  Calendar,
  FileText,
  Shield,
  BarChart3,
  Smartphone,
  Building2,
  Zap,
  Settings,
  CreditCard,
  Globe,
  Calculator,
  Briefcase
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

const PayrollServicesSolution = () => {
  const keyBenefits = [
    { title: 'ADP Powered', desc: 'Industry-leading platform' },
    { title: 'POS Integrated', desc: 'Syncs with itab POS & Clover' },
    { title: 'Square Payroll', desc: 'Native payroll via Square' },
    { title: 'Full Compliance', desc: 'Tax filing included' }
  ];

  const payrollFeatures = [
    { icon: DollarSign, title: 'Payroll Processing', desc: 'Automated payroll calculations and direct deposit' },
    { icon: FileText, title: 'Tax Filing', desc: 'Federal, state, and local tax filings handled' },
    { icon: Users, title: 'Employee Self-Service', desc: 'Online portal for pay stubs and W-2s' },
    { icon: Clock, title: 'Time & Attendance', desc: 'Track hours directly from your POS' }
  ];

  const adpBenefits = [
    'Trusted by 1 million+ businesses',
    'Industry-leading compliance',
    'Dedicated support team',
    'Mobile app for employees',
    'Automatic tax updates',
    'HR tools included'
  ];

  const itabIntegration = [
    'Employee clock-in/out from POS',
    'Automatic hours calculation',
    'Tip tracking and distribution',
    'Break compliance monitoring',
    'Overtime alerts',
    'Schedule management',
    'Labor cost reporting',
    'Real-time data sync'
  ];

  const complianceFeatures = [
    { icon: Shield, title: 'Tax Compliance', desc: 'Automatic federal, state, and local tax calculations and filings' },
    { icon: FileText, title: 'Wage & Hour', desc: 'Overtime, minimum wage, and break compliance tools' },
    { icon: Calendar, title: 'Year-End Filing', desc: 'W-2s, 1099s, and annual tax filings' },
    { icon: BarChart3, title: 'ACA Reporting', desc: 'Affordable Care Act compliance support' }
  ];

  const restaurantFeatures = [
    'Tip pooling and distribution',
    'Tip credit calculations',
    'Server wage compliance',
    'Multiple pay rates per employee',
    'Shift differential pay',
    'Split shift tracking'
  ];

  const additionalServices = [
    { icon: Users, title: 'HR Support', desc: 'Access to HR professionals for guidance' },
    { icon: Shield, title: 'Workers Comp', desc: 'Integrated workers compensation solutions' },
    { icon: Briefcase, title: 'Benefits Admin', desc: 'Health insurance and 401(k) management' },
    { icon: Globe, title: 'Hiring Tools', desc: 'Background checks and onboarding' }
  ];

  const howItWorks = [
    { step: '1', title: 'Connect itab POS', desc: 'Sync employee time data automatically' },
    { step: '2', title: 'Review Hours', desc: 'Approve timesheets and adjustments' },
    { step: '3', title: 'Run Payroll', desc: 'Process payroll with one click' },
    { step: '4', title: 'Employees Paid', desc: 'Direct deposit or paycards' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
              <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold">Powered by ADP</span>
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">itab POS Integrated</span>
              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">Clover Integrated</span>
              <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-semibold">Square Native Payroll</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Payroll Services for Restaurants & Retail
            </h1>
            
            <p className="text-xl text-purple-600 font-semibold mb-4">
              ADP Payroll Integrated with itab POS & Clover | Square Native Payroll
            </p>
            
            <div className="text-lg text-gray-700 space-y-4 mb-8">
              <p>
                Simplify payroll with ADP's powerful platform, seamlessly connected to your itab POS and Clover systems. Hours tracked at the register flow directly to payroll.
              </p>
              <p>
                Square merchants can leverage Square's native payroll services directly through the Square application portal. Full-service payroll processing, tax filing, and compliance—designed for restaurants and retail businesses.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-get-started-btn">
                  Get Started
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6" data-testid="hero-demo-btn">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payroll Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Payroll Solution</h2>
            <p className="text-lg text-gray-600">Everything you need to pay your team accurately and on time</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {payrollFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">From clock-in to payday—automated and accurate</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ADP Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Powered by ADP</h2>
              </div>
              <p className="text-xl text-purple-600 font-medium mb-4">The Industry Standard in Payroll</p>
              <p className="text-lg text-gray-600 mb-6">
                ADP is trusted by over 1 million businesses worldwide. Our partnership brings enterprise-grade payroll to small and medium businesses.
              </p>
              <div className="space-y-3">
                {adpBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center" data-testid="adp-image">
              <div className="text-center text-gray-400">
                <Shield className="h-24 w-24 mx-auto mb-4 text-purple-300" />
                <p className="text-sm">ADP Payroll Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* itab POS Integration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center" data-testid="itab-image">
              <div className="text-center text-gray-400">
                <CreditCard className="h-24 w-24 mx-auto mb-4 text-purple-300" />
                <p className="text-sm">itab POS Integration Image</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">itab POS Integration</h2>
              </div>
              <p className="text-xl text-purple-600 font-medium mb-4">Seamless Time & Attendance</p>
              <p className="text-lg text-gray-600 mb-6">
                Employees clock in and out directly from your itab POS system. Hours, tips, and breaks sync automatically to payroll—no double entry required.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {itabIntegration.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Built for Restaurants</h2>
              </div>
              <p className="text-xl text-purple-600 font-medium mb-4">Handle Complex Restaurant Payroll</p>
              <p className="text-lg text-gray-600 mb-6">
                Restaurant payroll is complex—tip reporting, multiple pay rates, and compliance requirements. Our system handles it all automatically.
              </p>
              <div className="space-y-3">
                {restaurantFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center" data-testid="restaurant-image">
              <div className="text-center text-gray-400">
                <Building2 className="h-24 w-24 mx-auto mb-4 text-purple-300" />
                <p className="text-sm">Restaurant Payroll Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance Made Easy</h2>
            <p className="text-lg text-gray-600">Stay compliant with automatic tax filings and regulatory updates</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-6">
                    <Icon className="h-10 w-10 text-purple-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">Expand your payroll with HR and benefits administration</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Simplify Payroll?
          </h2>
          <p className="text-xl text-purple-100 mb-4">
            Get ADP payroll fully integrated with your itab POS system.
          </p>
          <p className="text-lg text-purple-100 mb-8">
            Automate time tracking, tax filing, and compliance—all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6" data-testid="cta-get-started-btn">
                Get Started
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" data-testid="cta-demo-btn">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides ADP payroll services, restaurant payroll solutions, and POS-integrated time and attendance for businesses across all 50 US states. Our payroll software integrates with itab POS for seamless employee time tracking, tip management, and automated payroll processing. Full tax filing, compliance support, and HR tools included.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PayrollServicesSolution;
