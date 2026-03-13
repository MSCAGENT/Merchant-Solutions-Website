import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, PhoneCall, Calendar, MessageSquare, Bell, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const aiFeatures = [
  {
    icon: Phone,
    title: 'AI Phone Ordering',
    desc: 'Voice AI can answer incoming calls and take customer orders automatically, sending them directly to the POS system.',
    detail: 'This reduces missed calls during busy hours and increases revenue from phone orders.',
  },
  {
    icon: Calendar,
    title: 'AI Appointment Scheduling',
    desc: 'Businesses such as salons, spas, and service providers can use AI to schedule appointments and confirm bookings automatically.',
    detail: 'The AI assistant interacts with customers through phone or chat and updates the POS or scheduling system.',
  },
  {
    icon: PhoneCall,
    title: 'AI Voice Appointment Reservations',
    desc: 'Voice AI can handle inbound reservation calls for restaurants, answering availability questions and booking tables in real time.',
    detail: 'Customers call, the AI confirms the reservation, and it syncs directly with your POS or booking system — no staff intervention needed.',
  },
  {
    icon: MessageSquare,
    title: 'AI Customer Support',
    desc: 'AI assistants can answer common questions about business hours, menu items, or services, reducing the workload for staff.',
    detail: 'Customers receive instant responses while employees focus on operations.',
  },
  {
    icon: Bell,
    title: 'AI Order Notifications',
    desc: 'Automated messages notify customers when orders are received, prepared, or ready for pickup.',
    detail: 'This improves communication and customer satisfaction.',
  },
  {
    icon: TrendingUp,
    title: 'AI Marketing Automation',
    desc: 'POS systems collect customer purchase data, which AI tools use to generate targeted promotions and loyalty campaigns.',
    detail: 'Businesses can automatically send offers and promotions based on buying behavior.',
  },
];

export default function AIPoweredSection({ onContactClick, onCalendlyClick }) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white" data-testid="ai-automation-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* TalkyToo AI Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="https://customer-assets.emergentagent.com/job_ff2671fe-c29b-4325-802b-6a52152abd9a/artifacts/efagog6d_Transparent%20PNG%20white%20Version.png"
              alt="TalkyToo AI - Voice AI Automation Partner"
              className="h-12 w-auto"
              data-testid="talkytoo-logo"
            />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">AI-Powered Automation for Modern Businesses</h2>
          <p className="text-lg text-purple-200 max-w-3xl mx-auto mb-3">
            Modern POS systems are no longer just payment terminals. Today's platforms combine payment processing, artificial intelligence, and automation to help businesses operate more efficiently and deliver better customer experiences.
          </p>
          <p className="text-purple-300 max-w-3xl mx-auto mb-3">
            Merchant Solutions integrates POS technology with AI-driven tools that automate customer communication, order management, and operational workflows.
          </p>
          <p className="text-purple-300 max-w-3xl mx-auto">
            These AI automations help businesses reduce labor costs, respond faster to customers, and capture more sales opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {aiFeatures.map((f, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/15 hover:border-purple-400/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <f.icon className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-purple-200 text-sm mb-2">{f.desc}</p>
              <p className="text-purple-400 text-sm">{f.detail}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Upgrade Your POS with AI Automation</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" onClick={onContactClick}>
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-6" onClick={onCalendlyClick}>
              Book a Consultation
            </Button>
          </div>
          <Link to="/voice-ai-business-automation" className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors font-semibold">
            Voice AI Business Automation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col items-center gap-6">
          {/* Maple Logo - white on dark */}
          <img
            src="https://customer-assets.emergentagent.com/job_ff2671fe-c29b-4325-802b-6a52152abd9a/artifacts/7ceusbsh_MAPLE.png"
            alt="Maple - AI Business Automation"
            className="h-10 w-auto"
            data-testid="maple-logo"
          />
          <img
            src="https://customer-assets.emergentagent.com/job_98ba5cc9-5a8c-49ab-a17a-dde6797f516c/artifacts/7tytj5bz_MSC_1080x560.png"
            alt="Merchant Solutions Corp - AI Automation Partner"
            className="h-14 w-auto opacity-80"
            data-testid="ai-section-msc-logo"
          />
        </div>
      </div>
    </section>
  );
}
