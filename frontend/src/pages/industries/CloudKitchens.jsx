import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AIPoweredSection from '../../components/AIPoweredSection';
import { Button } from '../../components/ui/button';

export default function CloudKitchens() {
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    if (!document.querySelector('link[href*="calendly.com"]')) {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const s = document.createElement('script');
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/mscpayments/posdemo?hide_event_type_details=1&primary_color=1400ff' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Cloud Kitchen &amp; Ghost Kitchen POS Systems | Merchant Solutions Corp</title>
        <meta property="og:title" content="Cloud Kitchen &amp; Ghost Kitchen POS Systems" />
        <meta property="og:description" content="POS systems and payment processing for cloud kitchens and ghost kitchens. Manage multiple virtual restaurant brands." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merchantsolutionscorp.com/industries/cloud-kitchens" />
        <meta name="description" content="POS systems and payment processing for cloud kitchens and ghost kitchens. Manage orders, delivery integration, and multiple virtual restaurant brands." />
        <meta name="keywords" content="cloud kitchen POS, ghost kitchen payment processing, virtual restaurant POS system, delivery kitchen POS" />
        <link rel="canonical" href="https://merchantsolutionscorp.com/industries/cloud-kitchens" />
      </Helmet>

      <section className="bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Cloud Kitchen &amp; Ghost Kitchen POS Systems</h1>
          <p className="text-xl text-gray-300 mb-8">POS systems and payment processing for cloud kitchens and ghost kitchens. Manage orders, delivery integration, and multiple virtual restaurant brands.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6" onClick={() => setShowFormModal(true)}>Contact Sales</Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6" onClick={openCalendly}>Book a Demo</Button>
          </div>
        </div>
      </section>

      <AIPoweredSection onContactClick={() => setShowFormModal(true)} onCalendlyClick={openCalendly} />

      {showFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowFormModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowFormModal(false)} className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600">&#x2715;</button>
            <iframe src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" className="w-full h-[80vh] border-0 rounded-2xl" title="Contact Sales" />
          </div>
        </div>
      )}
    </div>
  );
}
