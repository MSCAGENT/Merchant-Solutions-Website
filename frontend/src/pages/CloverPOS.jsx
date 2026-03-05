import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronRight, CreditCard } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const CloverPOS = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const carouselImages = [
    { src: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/9cuaw0s3_as234.jpg', alt: 'Retail checkout with Clover POS' },
    { src: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/t767mlcn_kds-built-for-restaurant-image-desktop.webp', alt: 'Clover KDS restaurant orders' },
    { src: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/q44tav0t_Kiosk%20in2%6012%20%281%29.png', alt: 'Clover Kiosk ordering' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const cloverDevices = [
    {
      id: 'clover-go',
      name: 'Clover Go',
      subtitle: 'Mobile Card Reader',
      buyPrice: '$199 one-time',
      subPrice: '$9.99/mo',
      shipping: null,
      image: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/6c9v5py4_Clover%20GO.jpeg',
      monthlyFee: '$9.95/month software'
    },
    {
      id: 'clover-compact',
      name: 'Clover Compact',
      subtitle: 'Countertop Terminal',
      buyPrice: '$279',
      subPrice: '$30/mo',
      shipping: '+ Free Shipping',
      image: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/l4wr7o07_Clover%20Stand%20Alone%20%281%29.png',
      monthlyFee: '$14.95/month software'
    },
    {
      id: 'clover-flex',
      name: 'Clover Flex',
      subtitle: 'Handheld POS',
      buyPrice: '$799',
      subPrice: '$49/mo',
      shipping: '+ Free Shipping',
      image: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/7wyaqc40_Clover-FlexLRG.jpg',
      monthlyFee: '$19.95/month software'
    },
    {
      id: 'clover-mini',
      name: 'Clover Mini',
      subtitle: 'Compact POS',
      buyPrice: '$899',
      subPrice: '$69/mo',
      shipping: '+ Free Shipping',
      image: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/4xf4v4f5_clover%20mini%203%20gen.jfif',
      monthlyFee: '$19.95/month software'
    }
  ];

  const PricingModal = ({ device }) => {
    if (!device) return null;

    return (
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-6">
            {device.name} - Pricing Options
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          {/* Dual Pricing */}
          <Card className="border-2 border-purple-600">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dual Pricing Program</h3>
              <p className="text-sm text-gray-600 mb-6">Zero cost to merchant</p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-1">$0</div>
                  <div className="text-sm text-gray-600">Fee to Merchant</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-1">4%</div>
                  <div className="text-sm text-gray-600">to the Cardholder</div>
                </div>
              </div>
              
              <a href="https://form.jotform.com/242266135050145" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg">
                  Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Flat Rate */}
          <Card className="border-2 border-blue-600">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flat Rate Program</h3>
              <p className="text-sm text-gray-600 mb-6">Simple, straightforward pricing</p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">2.60% + $0.10</div>
                <div className="text-sm text-gray-600 mb-3">Per Transaction</div>
                <div className="text-xs text-gray-500 border-t border-gray-300 pt-2">
                  Non-qualified: 3.59% + $0.19
                </div>
              </div>
              
              <div className="text-xs text-gray-500 mb-4">
                Software: {device.monthlyFee}
              </div>
              
              <a href="https://form.jotform.com/242266135050145" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                  Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Get a Clover System for $0 Upfront
              </h1>
              <p className="text-lg font-semibold text-purple-700 mb-2">
                Simple Monthly Subscription. No Large Hardware Investment.
              </p>
              <p className="text-lg text-gray-600 mb-2">
                Start processing immediately with professional equipment powered by Merchant Solutions Corp.
              </p>
              <p className="text-lg font-medium text-gray-800 mb-8">
                Just One Flat Monthly Subscription.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">No hardware purchase.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">No large capital expense.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Just plug in and start accepting payments.</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={openCalendly}>
                    Request a Free Demo
                  </Button>
                <a href="https://na2.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=pos-checkout-dev&env=na2&acct=pos-checkout-dev&v=2" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6">
                    Apply Now <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>

              {/* Promotional Offer */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <p className="font-semibold text-purple-800 mb-2">Promotional Offer — Free Hardware</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />New merchants only</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />Physical or established businesses</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />Subject to approval</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />Volume verification required</li>
                </ul>
              </div>
            </div>

            {/* Right - Image Carousel */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-xl bg-white">
                {carouselImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                {/* Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-purple-600 w-6' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Three Simple Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
            Four Simple Steps to Save on Processing Fees
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { num: '1', label: 'Request a Free Consultation' },
              { num: '2', label: 'Select Your Hardware' },
              { num: '3', label: 'Choose Your Pricing' },
              { num: '4', label: 'Get Approved & Start Getting Paid' }
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{step.num}</span>
                </div>
                <span className="font-semibold text-gray-800 text-base leading-snug">{step.label}</span>
              </div>
            ))}
          </div>

          {/* Promotional Devices */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Promotional Offers</h2>
            <p className="text-lg text-gray-600 mb-12">Get a Free Placement with $0 out of pocket.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Clover Compact */}
              <Card className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-6">
                  <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/xv187z8q_Clover%20Stand%20Alone%20%281%29.png" alt="Clover Compact" className="w-full h-full object-contain" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Clover Compact</h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-sm text-gray-600">Buy for <span className="font-bold text-purple-600 text-lg">$199</span></p>
                    <p className="text-sm text-gray-500">or Subscribe and get it <span className="font-bold text-green-600 text-lg">Free</span></p>
                    <p className="text-xs text-gray-400">36-month agreement required</p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" onClick={openCalendly}>
                      Get Started
                    </Button>
                </CardContent>
              </Card>

              {/* Clover Flex */}
              <Card className="border-2 border-purple-600 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold text-center py-1.5 z-10">Most Popular</div>
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-6 mt-6">
                  <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/hm5yf2w0_Clover-FlexLRG.jpg" alt="Clover Flex" className="w-full h-full object-contain" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Clover Flex</h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-sm text-gray-600">Buy for <span className="font-bold text-purple-600 text-lg">$399</span></p>
                    <p className="text-sm text-gray-500">or Subscribe and get it <span className="font-bold text-green-600 text-lg">Free</span></p>
                    <p className="text-xs text-gray-400">36-month agreement required</p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" onClick={openCalendly}>
                      Get Started
                    </Button>
                </CardContent>
              </Card>

              {/* Clover Mini */}
              <Card className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-6">
                  <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/ns43y2j9_clover%203rd%20gen.jfif" alt="Clover Mini" className="w-full h-full object-contain" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Clover Mini POS</h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-sm text-gray-600">Buy for <span className="font-bold text-purple-600 text-lg">$599</span></p>
                    <p className="text-sm text-gray-500">or Subscribe and get it <span className="font-bold text-green-600 text-lg">Free</span></p>
                    <p className="text-xs text-gray-400">36-month agreement required</p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" onClick={openCalendly}>
                      Get Started
                    </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => setShowFormModal(true)} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-12 py-6 shadow-lg">
              Start Saving Today
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Clover */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Benefits */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Clover Flex or Clover Pocket?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">No credit card processing fees with cash discount pricing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Free placement of smart Clover terminals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Flat rate option with low monthly fee available</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">All-in-one mobile POS systems</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">End-to-end payment security</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Works for retail, restaurants, and service businesses</p>
                </div>
              </div>
            </div>

            {/* Right - Device Slideshow */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-xl bg-white">
                {[
                  { src: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/4ecinz6a_clover-flex-devices.webp', alt: 'Clover Flex Devices' },
                  { src: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/gsbuv04a_Clover-FlexLRG.jpg', alt: 'Clover Flex Handheld' },
                  { src: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/qxsao0xl_Clover%20GO.jpeg', alt: 'Clover Go Card Reader' }
                ].map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-contain p-6 transition-opacity duration-1000 ${
                      index === currentSlide % 3 ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ mixBlendMode: 'multiply' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clover Device Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Choose Your Clover Device
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloverDevices.map((device) => (
              <Card key={device.id} className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img src={device.image} alt={device.name} className="w-full h-full object-contain p-2" style={{ mixBlendMode: 'multiply' }} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{device.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{device.subtitle}</p>
                  
                  <div className="mb-4 space-y-1">
                    <p className="text-sm text-gray-600">Buy for <span className="font-bold text-purple-600 text-lg">{device.buyPrice}</span></p>
                    <p className="text-sm text-gray-500">or Subscribe for <span className="font-bold text-purple-600 text-lg">{device.subPrice}</span></p>
                    {device.shipping && <p className="text-xs text-green-600 font-medium">{device.shipping}</p>}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                        Pricing
                      </Button>
                    </DialogTrigger>
                    <PricingModal device={device} />
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Trusted by Thousands of Businesses Nationwide
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <span className="text-lg font-semibold text-gray-900">No upfront cost</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <span className="text-lg font-semibold text-gray-900">No processing fees</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <span className="text-lg font-semibold text-gray-900">Same Day Funding Available</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <span className="text-lg font-semibold text-gray-900">Fast Approval</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" onClick={openCalendly}>
                Request a Free Demo
              </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6" onClick={() => setShowFormModal(true)}>
              Contact Sales <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <p className="text-center text-sm text-gray-500 mt-8">
            Merchant Solutions Corp serves the US, Canada and Puerto Rico / USVI markets.
          </p>
        </div>
      </section>

      {/* Clover Station Systems */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
            Complete Clover Station Systems
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Full-featured POS solutions for your business
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Clover Solo */}
            <Card className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/ip9swahq_clover_station_solo.png" alt="Clover Station Solo" className="w-full h-full object-contain p-2" style={{ mixBlendMode: 'multiply' }} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Clover Station Solo</h3>
                <p className="text-sm text-gray-500 mb-4">Complete countertop POS system</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Buy for <span className="font-bold text-purple-600 text-xl">$1,999</span></p>
                  <p className="text-sm text-gray-500">or <span className="font-bold text-purple-600 text-lg">$99/mo</span> for 36 months</p>
                </div>

                <div className="mb-6 bg-gray-50 rounded-lg p-3 space-y-1">
                  <p className="text-xs font-semibold text-gray-700">Software:</p>
                  <p className="text-xs text-gray-600">Retail: $84.95/mo (1st device) + $19.95 add'l</p>
                  <p className="text-xs text-gray-600">Restaurant: $89.95/mo (1st device) + $19.95 add'l</p>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                      Pricing
                    </Button>
                  </DialogTrigger>
                  <PricingModal device={{
                        id: 'clover-station-solo',
                        name: 'Clover Station Solo',
                        subtitle: 'Full POS System',
                        price: '$1,999',
                        monthlyFee: '$84.95/month software'
                      }} />
                </Dialog>
              </CardContent>
            </Card>

            {/* Clover Duo */}
            <Card className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/0hmeybl3_clover%20station%20duo.png" alt="Clover Station Duo" className="w-full h-full object-contain p-2" style={{ mixBlendMode: 'multiply' }} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Clover Station Duo</h3>
                <p className="text-sm text-gray-500 mb-4">Dual-screen POS system</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Buy for <span className="font-bold text-purple-600 text-xl">$2,199</span></p>
                  <p className="text-sm text-gray-500">or <span className="font-bold text-purple-600 text-lg">$119/mo</span> for 36 months</p>
                </div>

                <div className="mb-6 bg-gray-50 rounded-lg p-3 space-y-1">
                  <p className="text-xs font-semibold text-gray-700">Software:</p>
                  <p className="text-xs text-gray-600">Retail: $84.95/mo (1st device) + $19.95 add'l</p>
                  <p className="text-xs text-gray-600">Restaurant: $89.95/mo (1st device) + $19.95 add'l</p>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                      Pricing
                    </Button>
                  </DialogTrigger>
                  <PricingModal device={{
                        id: 'clover-station-duo',
                        name: 'Clover Station Duo',
                        subtitle: 'Dual-Screen POS',
                        price: '$2,199',
                        monthlyFee: '$84.95/month software'
                      }} />
                </Dialog>
              </CardContent>
            </Card>

            {/* Clover Kiosk */}
            <Card className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/787vimmt_kiosk-qsr-restaurant-image__1_.webp" alt="Clover Kiosk" className="w-full h-full object-contain p-2" style={{ mixBlendMode: 'multiply' }} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Clover Kiosk</h3>
                <p className="text-sm text-gray-500 mb-4">Self-service kiosk system</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Buy for <span className="font-bold text-purple-600 text-xl">$4,595</span></p>
                  <p className="text-sm text-gray-500">or <span className="font-bold text-purple-600 text-lg">$199/mo</span> for 36 months</p>
                </div>

                <div className="mb-6 bg-gray-50 rounded-lg p-3 space-y-1">
                  <p className="text-xs font-semibold text-gray-700">Software:</p>
                  <p className="text-xs text-gray-600">Kiosk SaaS fee: $34.95/mo per Kiosk</p>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                      Pricing
                    </Button>
                  </DialogTrigger>
                  <PricingModal device={{
                        id: 'clover-kiosk',
                        name: 'Clover Kiosk',
                        subtitle: 'Self-Service System',
                        price: '$4,595',
                        monthlyFee: '$34.95/month software'
                      }} />
                </Dialog>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-xs text-gray-500 mt-8">
            Final pricing shown after approval
          </p>
        </div>
      </section>

      {/* $0 Upfront Program Accordion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">$0 Upfront Clover Program</h2>
            <p className="text-lg text-gray-600 italic">
              "Our Clover system is available with $0 upfront for qualified businesses using our Dual Pricing program."
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 mt-10">
            <AccordionItem value="step-1" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Step 1 — Get Started With $0 Down
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>No upfront hardware cost</li>
                  <li>Equipment is provided under a monthly subscription</li>
                  <li>Approval based on creditworthiness</li>
                  <li>Processing runs on Dual Pricing (4%–5% program)</li>
                </ul>
                <p className="font-medium text-gray-800">You can begin accepting payments right away.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-2" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Step 2 — Performance Qualification (First 30 Days)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">During your first 30 processing days, you agree to process at least:</p>
                <p className="font-bold text-purple-600 text-lg mb-2">$10,000 per month in card volume</p>
                <p>This determines whether your system becomes free.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-3" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Step 3 — If You Reach $10,000+ Per Month
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">When you meet the requirement:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Your equipment lease is fully reimbursed</li>
                  <li>You receive a <span className="font-semibold text-green-600">$100 Visa reward card</span></li>
                  <li>Your Clover system becomes free</li>
                  <li>No ongoing hardware payments</li>
                  <li>You only keep paying your software fees</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-4" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Step 4 — If You Do Not Reach $10,000
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">If volume stays below $10,000:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Your monthly equipment subscription continues</li>
                  <li>The subscription covers full hardware cost</li>
                  <li>No penalties</li>
                  <li>No surprises</li>
                </ul>
                <p className="mt-2 font-medium text-gray-800">You simply continue on the standard plan.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="subscription" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                What the Subscription Covers
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">The monthly subscription includes:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Clover hardware</li>
                  <li>System activation</li>
                  <li>Programming and installation</li>
                  <li>Ongoing support</li>
                  <li>Replacement assistance</li>
                  <li>Account management</li>
                </ul>
                <p className="mt-2 text-sm text-gray-500">No separate equipment invoice.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pricing" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Pricing Structure
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">This program runs on our Dual Pricing model:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Customer pays the processing fee</li>
                  <li>Business keeps full sale amount</li>
                  <li>No out-of-pocket processing cost</li>
                  <li>Flat 4% program</li>
                </ul>
                <p className="mt-2 text-sm text-gray-500">This allows us to subsidize hardware.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="why" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Why This Program Exists
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-3">This model rewards active businesses.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">If you process consistently:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>You pay nothing for hardware</li>
                      <li>You get a bonus</li>
                      <li>You lower operating costs</li>
                      <li>You keep more profit</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">If volume is lower:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>You still get professional equipment</li>
                      <li>At a predictable monthly cost</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 font-medium text-purple-700">Fair for both sides.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Clover Program FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Clover Program</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="faq-1" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Can I upgrade my old Clover hardware?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-3">Yes. If you currently use older Clover equipment, you may qualify for our upgrade program.</p>
                <p className="mb-2">We can:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Replace legacy models with newer generation devices</li>
                  <li>Transition you into our Dual Pricing program</li>
                  <li>Evaluate you for the $0-Upfront reimbursement offer</li>
                </ul>
                <p className="text-sm text-gray-500">Approval depends on processing volume and account status.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Can I purchase a new Clover if I already own one?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-3">Yes, however, we cannot sync with another Clover from a different vendor. We would need to replace the other equipment and provide you with a full upgrade.</p>
                <p className="mb-2">If you already own a Clover device, you can:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Add additional terminals</li>
                  <li>Upgrade to a Station Solo or Duo</li>
                  <li>Apply for the Free Placement program (volume requirements apply)</li>
                </ul>
                <p className="text-sm text-gray-500">Each device is evaluated based on monthly processing per terminal.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                What if I no longer want to use Clover? What is the return policy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">We offer a 30-day return window.</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Returns must be requested within 30 days of delivery</li>
                  <li>A 20% restocking fee applies</li>
                  <li>An approved RMA (Return Merchandise Authorization) is required</li>
                  <li>Equipment must be in good condition and original box</li>
                </ul>
                <p className="font-medium text-gray-800">Returns without an RMA will not be accepted.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                I am in Puerto Rico or USVI. Can I qualify for your programs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-3">Yes. We support merchants in Puerto Rico and US territories.</p>
                <p className="mb-2">Eligibility depends on:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Business type</li>
                  <li>Processing volume</li>
                  <li>Program approval</li>
                  <li>Credit score</li>
                </ul>
                <p className="text-sm text-gray-500">The same qualification standards apply as in the mainland United States.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                Is there a contract required for the $0-Upfront program?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">Yes. The Free Placement program requires:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Enrollment in our Dual Pricing program</li>
                  <li>A processing agreement for min 36 months</li>
                  <li>Meeting minimum volume requirements</li>
                </ul>
                <p className="text-sm text-gray-500">If volume targets are not met, subscription terms continue as agreed. All terms are disclosed before activation.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                What happens if I process less than the required monthly volume?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">If you do not meet the required monthly volume:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Your equipment subscription continues</li>
                  <li>Reimbursement does not apply</li>
                  <li>Standard program pricing remains in effect</li>
                </ul>
                <p className="mb-1">There are no hidden penalties.</p>
                <p className="text-sm text-gray-500">You simply remain on the active subscription plan.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                How is my monthly processing volume calculated?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <p className="mb-2">Monthly processing volume is based on:</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>Total approved card transactions — Visa, Mastercard, Discover, Amex, and Pin Debit</li>
                  <li>Processor-generated reporting / Merchant Statement</li>
                  <li>A standard 30-day cycle</li>
                </ul>
                <p className="text-sm text-gray-500">Volume is measured per terminal when multiple devices are installed.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Contact Sales CTA */}
          <div className="mt-12 pt-10 border-t border-gray-200 text-center">
            <p className="text-xl font-semibold text-gray-900 mb-4">Do you still have more questions?</p>
            <Button size="lg" onClick={() => setShowFormModal(true)} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Form Modal */}
      {showFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowFormModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowFormModal(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
            >
              &#x2715;
            </button>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A"
              className="w-full h-[80vh] border-0 rounded-2xl"
              title="Start Saving Today"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CloverPOS;
