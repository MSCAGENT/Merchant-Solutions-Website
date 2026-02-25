import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Shield, 
  Users, 
  DollarSign, 
  Calendar, 
  CreditCard, 
  Smartphone,
  Monitor,
  Heart,
  Lock,
  Clock,
  FileText,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Zap,
  ClipboardList,
  Activity,
  RefreshCw,
  MessageSquare,
  Headphones
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const Healthcare = () => {
  const coreSolutions = [
    {
      icon: Users,
      title: 'Patient Engagement Solutions',
      description: 'Keep your schedule full, patients notified, and the practice running smoothly.',
      features: [
        'Online appointment booking and scheduling',
        'Automated appointment reminders (text, email, voice)',
        'Patient recall and reactivation campaigns',
        'Two-way text messaging with patients',
        'Review and reputation management',
        'Patient education and resource sharing'
      ]
    },
    {
      icon: DollarSign,
      title: 'Patient Payment & Financing Solutions',
      description: 'Increase patient payments, improve office workflows, and grow profitability.',
      features: [
        'Contactless and card-present payment terminals',
        'Text-to-pay and email payment requests',
        'Automated payment plans and recurring billing',
        'Patient financing options',
        'Online patient payment portal',
        'Stored card on file with secure vaulting'
      ]
    },
    {
      icon: Shield,
      title: 'HIPAA & OSHA Compliance Solutions',
      description: 'Navigate and manage the complexities of HIPAA and OSHA compliance with ease.',
      features: [
        'HIPAA risk assessment and management',
        'OSHA compliance training and tracking',
        'Employee training modules with certification',
        'Incident reporting and breach management',
        'Policy and procedure documentation',
        'Business Associate Agreement management'
      ]
    }
  ];

  const complianceBadges = [
    'PCI Level 1 Compliance',
    'HIPAA Compliance',
    'P2PE Encryption',
    'HITRUST Certified',
    'PCI-DSS Compliance'
  ];

  const specialties = [
    { name: 'Dental Practices', icon: Heart },
    { name: 'Medical Clinics', icon: Activity },
    { name: 'Chiropractic', icon: Users },
    { name: 'Veterinary', icon: Heart },
    { name: 'Optometry & Vision', icon: Monitor },
    { name: 'Physical Therapy', icon: Activity },
    { name: 'Dermatology', icon: Shield },
    { name: 'Urgent Care', icon: Zap }
  ];

  const testimonials = [
    {
      quote: "It's so simple. Everybody on our team has been really impressed by how easy it is to use.",
      name: 'Breanna Slaughter',
      title: 'Director of Operations',
      company: 'Southern Dental Alliance'
    },
    {
      quote: "To have a partner we can rely on for managing the technical, scary stuff like PCI compliance, vaulting credit cards, and payment liability has greatly benefited us.",
      name: 'Dr. Perry K. Tuneberg, DDS',
      title: 'Owner',
      company: 'Dr. Perry K. Tuneberg & Associates'
    },
    {
      quote: "We have quite a few payment plans set up right now. It's very successful for us and has helped us reduce outstanding balances.",
      name: 'Kendria Johnson',
      title: 'Senior Manager of Patient Account Services',
      company: 'MedQuest'
    }
  ];

  const capabilities = [
    { icon: CreditCard, label: 'In-office payments (tap, chip, swipe)' },
    { icon: Smartphone, label: 'Text-to-pay and mobile payments' },
    { icon: Calendar, label: 'Online scheduling and reminders' },
    { icon: RefreshCw, label: 'Automated recurring billing' },
    { icon: FileText, label: 'Digital intake forms' },
    { icon: Lock, label: 'Secure card-on-file vaulting' },
    { icon: ClipboardList, label: 'HIPAA and OSHA compliance tools' },
    { icon: MessageSquare, label: 'Two-way patient messaging' },
    { icon: Monitor, label: 'PMS integrations (thousands supported)' },
    { icon: DollarSign, label: 'Patient financing and payment plans' }
  ];

  const faqs = [
    {
      question: 'What types of healthcare practices do you support?',
      answer: 'We support dental practices, medical clinics, chiropractic offices, veterinary clinics, optometry, physical therapy, dermatology, urgent care, and virtually any healthcare specialty that collects patient payments.'
    },
    {
      question: 'Is the platform HIPAA compliant?',
      answer: 'Yes. Practice Management Bridge is developed and maintained at the highest standards for HIPAA compliance, including PCI Level 1 certification, P2PE encryption, and HITRUST certification. We safeguard your practice, protected health information, and patient payment data.'
    },
    {
      question: 'Does it integrate with my practice management system?',
      answer: 'Practice Management Bridge connects to thousands of technology platforms and practice management systems. Our PMS-agnostic functionality means we can integrate with your existing software to drive more revenue and create incredible efficiencies.'
    },
    {
      question: 'How do patient payment plans work?',
      answer: 'You can set up automated payment plans directly through the platform. Patients can be enrolled in customized payment schedules, and payments are processed automatically on the agreed dates, reducing outstanding balances and improving collections.'
    },
    {
      question: 'Can patients pay online or via text?',
      answer: 'Absolutely. Patients can pay through a secure online portal, respond to text-to-pay requests, or pay via email links. This flexibility increases collection rates and provides convenience for your patients.'
    },
    {
      question: 'How fast can we get started?',
      answer: 'Most practices are up and running quickly. We handle the setup, integration with your PMS, hardware configuration, and staff training. Simple setups can go live in just a few days.'
    },
    {
      question: 'What about OSHA compliance?',
      answer: 'Our compliance solutions cover both HIPAA and OSHA requirements, including risk assessments, employee training modules with certification tracking, incident reporting, and policy documentation—all managed from one platform.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Video Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/aqsxqbxm_Healthcare%20Practice%20POS%20%20Management%20Solutions%20%20Clover.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/75 via-purple-800/60 to-purple-600/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight drop-shadow-lg" data-testid="healthcare-hero-title">
            Healthcare Payment & Practice Management Solutions
          </h1>
          <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl">
            A comprehensive platform that helps you modernize, protect, and grow your healthcare organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="healthcare-hero-cta">
                Book a Demo
              </Button>
            </Link>
            <a href="https://www.calendly.com/mscpayments" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-6">
                Talk to Sales
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">Practice Management Bridge</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We're Taking Productivity to New Heights
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Healthcare PMB is an easy-to-implement and easy-to-use software designed to automate day-to-day operations — from payments to compliance and staying in touch with patients. We connect to thousands of technology providers, boasting PMS-agnostic functionality and direct integrations to drive more revenue and create incredible efficiencies.
            </p>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">It's Better with Healthcare PMB</h2>
            <p className="text-lg text-gray-600">Three pillars to modernize your practice</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <div className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Patient Engagement Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">Patient Engagement Solutions</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Connect with Patients in a Meaningful Way</h2>
              <p className="text-lg text-gray-600 mb-8">
                Empower patients to conveniently book and keep appointments and stay engaged in their care. Practices can attract new and retain loyal patients by sharing educational resources, promoting positive feedback and reviews, and delivering proactive care.
              </p>
              <div className="space-y-4 mb-8">
                {['Online booking and self-scheduling', 'Automated reminders reduce no-shows', 'Recall campaigns for overdue patients', 'Review management builds reputation', 'Two-way messaging keeps patients engaged'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-50 rounded-2xl p-10 flex items-center justify-center">
              <div className="text-center space-y-6">
                <Calendar className="h-20 w-20 text-purple-600 mx-auto" />
                <div className="grid grid-cols-2 gap-4 text-left max-w-xs mx-auto">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-2xl font-bold text-purple-600">40%</p>
                    <p className="text-xs text-gray-500">Fewer no-shows</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-2xl font-bold text-purple-600">3x</p>
                    <p className="text-xs text-gray-500">More online reviews</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-2xl font-bold text-purple-600">90%</p>
                    <p className="text-xs text-gray-500">Patient satisfaction</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-2xl font-bold text-purple-600">24/7</p>
                    <p className="text-xs text-gray-500">Online booking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Solutions Detail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-green-50 to-purple-50 rounded-2xl p-10 flex items-center justify-center">
              <div className="text-center space-y-6">
                <DollarSign className="h-20 w-20 text-purple-600 mx-auto" />
                <div className="grid grid-cols-2 gap-4 text-left max-w-xs mx-auto">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-2xl font-bold text-green-600">30%</p>
                    <p className="text-xs text-gray-500">Faster collections</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-2xl font-bold text-green-600">50%</p>
                    <p className="text-xs text-gray-500">Reduced A/R</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-2xl font-bold text-green-600">2x</p>
                    <p className="text-xs text-gray-500">Payment plan adoption</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-2xl font-bold text-green-600">98%</p>
                    <p className="text-xs text-gray-500">Payment success rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">Patient Payment & Financing</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Create Better Financial Results</h2>
              <p className="text-lg text-gray-600 mb-8">
                Effectively manage and accelerate the revenue cycle with new ways to expedite payment capture at all points of the patient journey. Automation, flexible payment options, and convenience ensure patients receive the care they need, while improving collections and maintaining a healthy bottom line.
              </p>
              <div className="space-y-4 mb-8">
                {['Text-to-pay increases collection rates', 'Card-on-file reduces missed payments', 'Automated payment plans for large balances', 'Patient financing expands treatment acceptance', 'Online portal for 24/7 self-service payments'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HIPAA & Compliance Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">HIPAA & OSHA Compliance</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Protect Your Most Valuable Assets</h2>
              <p className="text-lg text-gray-600 mb-8">
                Prioritizing the safety of your staff and patients — and protecting the sensitive data you collect — is paramount. Our all-in-one solution helps you navigate regulations, identify vulnerabilities, and stay HIPAA and OSHA compliant.
              </p>
              <div className="space-y-4 mb-8">
                {['Automated HIPAA risk assessments', 'OSHA compliance training and tracking', 'Employee certification management', 'Incident reporting and breach protocols', 'Policy and procedure documentation', 'Business Associate Agreement tracking'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">A Secure & Compliant Platform</h3>
              <div className="grid grid-cols-1 gap-4">
                {complianceBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="font-medium text-gray-800">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
            <p className="text-lg text-gray-600">Everything your practice needs in one platform</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="border hover:border-purple-600 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <Icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <p className="text-sm text-gray-700">{capability.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialties We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialties We Serve</h2>
            <p className="text-lg text-gray-600">Trusted by thousands of healthcare providers nationwide</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Icon className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">{specialty.name}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">Powerful Integrations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Create a Seamless User Experience</h2>
            <p className="text-lg text-gray-600 mb-10">
              Practice Management Bridge enables connectivity to thousands of technology platforms and practice management systems to unlock massive efficiencies for healthcare organizations.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6">
                Get a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top-Rated and Trusted by Our Customers</h2>
            <p className="text-lg text-gray-600">Hear from healthcare providers who use Practice Management Bridge</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about Healthcare PMB</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Started Today
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Amplify revenue, enhance the patient experience, and transform operations. Schedule a demo and see how simple it can be to keep your practice thriving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
                Book a Demo
              </Button>
            </Link>
            <a href="https://www.calendly.com/mscpayments" target="_blank" rel="noopener noreferrer">
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

export default Healthcare;
