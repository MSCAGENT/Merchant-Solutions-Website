import React, { useState, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mockData } from '../mock';

const IndustryDetail = () => {
  const { industryId } = useParams();
  const industry = mockData.industries.find(i => i.id === industryId);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnded = useCallback(() => {
    const hero = videoHeroMap[industryId];
    if (hero && Array.isArray(hero.src)) {
      setCurrentVideo((prev) => (prev + 1) % hero.src.length);
    }
  }, [industryId]);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
          <Link to="/">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const videoHeroMap = {
    retail: {
      src: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/p0m4hwu3_Square%20for%20Retail.mp4',
      title: 'Payment Solutions for Retail'
    },
    healthcare: {
      src: 'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/aqsxqbxm_Healthcare%20Practice%20POS%20%20Management%20Solutions%20%20Clover.mp4',
      title: 'Payment Solutions for Healthcare'
    },
    chiropractors: {
      src: [
        'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/ic6xpucz_Chiropractor%20office_.mp4',
        'https://customer-assets.emergentagent.com/job_c7719ac2-f74d-4b83-96c8-30fb9bb9e1a2/artifacts/2w9xah99_Healthcare%20Practice%20POS%20%20Management%20Solutions%20%20Clover.mp4'
      ],
      title: 'Payment Solutions for Chiropractors'
    }
  };

  const videoHero = videoHeroMap[industryId];
  const videoSrc = videoHero ? (Array.isArray(videoHero.src) ? videoHero.src[currentVideo] : videoHero.src) : null;
  const isMultiVideo = videoHero && Array.isArray(videoHero.src);

  return (
    <div className="min-h-screen">
      {/* Video Hero Section */}
      {videoHero && (
        <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
          <video
            key={videoSrc}
            ref={videoRef}
            autoPlay
            loop={!isMultiVideo}
            muted
            playsInline
            onEnded={isMultiVideo ? handleVideoEnded : undefined}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/75 via-purple-800/60 to-purple-600/50" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight drop-shadow-lg">
              {videoHero.title}
            </h1>
            <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl">{industry.description}</p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg">
                Get Custom Solution
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Payment Solutions for {industry.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">{industry.description}</p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg text-white">
                Get Custom Solution
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Industry Challenges We Solve</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We understand the unique payment challenges facing {industry.title.toLowerCase()}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {industry.challenges.map((challenge, index) => (
              <Card key={index} className="border-2 hover:border-red-400 transition-all duration-300">
                <CardContent className="p-6 flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-red-600 font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 text-lg">{challenge}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Solutions for You</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Tailored payment processing solutions designed specifically for {industry.title.toLowerCase()}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {industry.solutions.map((solution, index) => (
              <Card key={index} className="border-2 hover:border-emerald-400 transition-all duration-300">
                <CardContent className="p-6 flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{solution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-yellow-50">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Success Story</h2>
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6 italic">
                  "Switching to Merchant Solutions Corp was the best decision for our {industry.title.toLowerCase()} business. 
                  Their specialized solutions helped us reduce processing fees by 30% and improved our checkout speed significantly."
                </p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mt-4 font-semibold">Industry Client</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your {industry.title} Business?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Get a customized payment solution designed for your industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Get Industry Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;