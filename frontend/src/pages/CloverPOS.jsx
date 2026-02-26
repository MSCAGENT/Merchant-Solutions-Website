import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronRight, CreditCard } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';

const CloverPOS = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFormModal, setShowFormModal] = useState(false);

  const carouselImages = [
    { src: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/t830pqrk_clover%203rd%20genwr.jpg', alt: 'Clover 3rd Gen POS' },
    { src: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/qxsao0xl_Clover%20GO.jpeg', alt: 'Clover Go Card Reader' },
    { src: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/6dza8f0b_Clover%20Station%20Pro.jpg', alt: 'Clover Station Pro' },
    { src: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/gsbuv04a_Clover-FlexLRG.jpg', alt: 'Clover Flex Handheld' },
    { src: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/gdfbq78u_kds_CLOVER.png', alt: 'Clover Kitchen Display System' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
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
                <a href="https://calendly.com/mscpayments/posdemo?back=1&month=2026-02" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg">
                    Request a Free Demo
                  </Button>
                </a>
                <a href="https://na2.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=b214d0e2-abc5-45f7-8e87-f328156cae64&env=na2&acct=69b2c1ed-73b3-46d7-b330-9c5f9cd9c8ff&v=2" target="_blank" rel="noopener noreferrer">
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
                    className={`absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-1000 ${
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
            <p className="text-lg text-gray-600 mb-12">Buy outright or subscribe monthly — your choice</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Clover Compact */}
              <Card className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-6">
                  <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/xv187z8q_Clover%20Stand%20Alone%20%281%29.png" alt="Clover Compact" className="w-full h-full object-contain" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Clover Compact</h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-sm text-gray-600">Buy for <span className="font-bold text-purple-600 text-lg">$249</span></p>
                    <p className="text-sm text-gray-500">or Subscribe for <span className="font-bold text-purple-600 text-lg">$30/mo</span></p>
                  </div>
                  <a href="https://calendly.com/mscpayments/posdemo?back=1&month=2026-02" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                      Get Started
                    </Button>
                  </a>
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
                    <p className="text-sm text-gray-600">Buy for <span className="font-bold text-purple-600 text-lg">$499</span></p>
                    <p className="text-sm text-gray-500">or Subscribe for <span className="font-bold text-purple-600 text-lg">$49/mo</span></p>
                  </div>
                  <a href="https://calendly.com/mscpayments/posdemo?back=1&month=2026-02" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                      Get Started
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Clover Mini */}
              <Card className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-6">
                  <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/ns43y2j9_clover%203rd%20gen.jfif" alt="Clover Mini" className="w-full h-full object-contain" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Clover Mini</h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-sm text-gray-600">Buy for <span className="font-bold text-purple-600 text-lg">$699</span></p>
                    <p className="text-sm text-gray-500">or Subscribe for <span className="font-bold text-purple-600 text-lg">$69/mo</span></p>
                  </div>
                  <a href="https://calendly.com/mscpayments/posdemo?back=1&month=2026-02" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                      Get Started
                    </Button>
                  </a>
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
                      <Button 
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                        onClick={() => setSelectedDevice(device)}
                      >
                        Pricing
                      </Button>
                    </DialogTrigger>
                    <PricingModal device={selectedDevice} />
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
            <a href="https://calendly.com/mscpayments/posdemo?back=1&month=2026-02" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg">
                Request a Free Demo
              </Button>
            </a>
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
                  <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/0hmeybl3_clover%20station%20duo.png" alt="Clover Station Solo" className="w-full h-full object-contain p-2" style={{ mixBlendMode: 'multiply' }} />
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
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      onClick={() => setSelectedDevice({
                        id: 'clover-station-solo',
                        name: 'Clover Station Solo',
                        subtitle: 'Full POS System',
                        price: '$1,999',
                        monthlyFee: '$84.95/month software'
                      })}
                    >
                      Pricing
                    </Button>
                  </DialogTrigger>
                  <PricingModal device={selectedDevice} />
                </Dialog>
              </CardContent>
            </Card>

            {/* Clover Duo */}
            <Card className="border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src="https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/ip9swahq_clover_station_solo.png" alt="Clover Station Duo" className="w-full h-full object-contain p-2" style={{ mixBlendMode: 'multiply' }} />
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
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      onClick={() => setSelectedDevice({
                        id: 'clover-station-duo',
                        name: 'Clover Station Duo',
                        subtitle: 'Dual-Screen POS',
                        price: '$2,199',
                        monthlyFee: '$84.95/month software'
                      })}
                    >
                      Pricing
                    </Button>
                  </DialogTrigger>
                  <PricingModal device={selectedDevice} />
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
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      onClick={() => setSelectedDevice({
                        id: 'clover-kiosk',
                        name: 'Clover Kiosk',
                        subtitle: 'Self-Service System',
                        price: '$4,595',
                        monthlyFee: '$34.95/month software'
                      })}
                    >
                      Pricing
                    </Button>
                  </DialogTrigger>
                  <PricingModal device={selectedDevice} />
                </Dialog>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-xs text-gray-500 mt-8">
            Final pricing shown after approval
          </p>
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
              src="https://api.leadconnectorhq.com/widget/form/CEHT7z92rYjoZznBuwWv"
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
